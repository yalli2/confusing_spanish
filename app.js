/* ===== Confusing Spanish — app ===== */
const UI={
 ko:{title:'헷갈리는 스페인어',tagline:'스페인어 학습자가 가장 많이 틀리는 21가지 — 원리로 한 번에 정리',
  heroP:'"영구적 vs 일시적" 같은 반쪽 설명은 버리고, 원어민이 실제로 구분하는 기준으로 다시 배웁니다. 각 토픽마다 비교표·흔한 실수·암기 팁·퀴즈가 들어 있고, 모든 예문은 음성으로 들을 수 있습니다.',
  topics:'토픽',quizzes:'연습문제',tables:'비교표',traps:'실수 사례',
  start:'전체 토픽 보기',test:'종합 테스트',search:'토픽 검색…',prog:'학습 진도',
  cWhy:'왜 헷갈리나',cRules:'용법 정리',cTable:'한눈에 비교',cTrap:'흔한 실수',cTip:'암기 전략',cQuiz:'확인 퀴즈',
  prev:'이전 토픽',next:'다음 토픽',home:'처음으로',score:'점수',again:'다시 풀기',
  done:'완료',speed:'읽기 속도',voice:'음성',allTest:'종합 테스트',
  testP:'21개 토픽에서 무작위로 25문항을 뽑습니다. 틀린 문제는 해설과 함께 어느 토픽인지 알려줍니다.',
  restart:'새 문제로 다시',result:'결과',back:'토픽으로 돌아가기',
  cat:{verb:'동사 · 시제 · 서법',prep:'전치사',pron:'대명사',noun:'명사 · 관사',lex:'어휘 구분',adv:'수식어 · 비교',orth:'철자 · 발음'},
  perfect:'완벽합니다! 다음 토픽으로 넘어가세요.',good:'좋아요. 틀린 문항의 해설을 다시 읽어보세요.',retry:'해설을 읽고 한 번 더 풀어보세요.'},
 en:{title:'Confusing Spanish',tagline:'The 21 things Spanish learners get wrong most — explained by principle',
  heroP:'Forget half-rules like "permanent vs temporary". Learn the distinctions natives actually make. Every topic has a comparison table, common mistakes, a memory strategy and a quiz, and every example can be heard aloud.',
  topics:'topics',quizzes:'practice items',tables:'tables',traps:'error cases',
  start:'Browse all topics',test:'Full test',search:'Search topics…',prog:'Progress',
  cWhy:'Why it confuses',cRules:'How it works',cTable:'At a glance',cTrap:'Common mistakes',cTip:'Memory strategy',cQuiz:'Check yourself',
  prev:'Previous',next:'Next',home:'Home',score:'Score',again:'Try again',
  done:'done',speed:'Speed',voice:'Voice',allTest:'Full test',
  testP:'25 random questions drawn from all 21 topics, with explanations and the topic each one came from.',
  restart:'New set',result:'Result',back:'Back to topics',
  cat:{verb:'Verbs, tenses, moods',prep:'Prepositions',pron:'Pronouns',noun:'Nouns & articles',lex:'Word choice',adv:'Modifiers & comparison',orth:'Spelling & sound'},
  perfect:'Perfect. Move on to the next topic.',good:'Good. Re-read the explanations you missed.',retry:'Read the explanations and try once more.'},
 es:{title:'Español que confunde',tagline:'Los 21 puntos que más fallan los estudiantes de español',
  heroP:'Olvida las medias reglas tipo "permanente vs temporal". Aprende las distinciones que de verdad hacen los nativos. Cada tema trae tabla comparativa, errores frecuentes, estrategia de memoria y ejercicios, y todos los ejemplos se pueden escuchar.',
  topics:'temas',quizzes:'ejercicios',tables:'tablas',traps:'errores',
  start:'Ver todos los temas',test:'Test general',search:'Buscar temas…',prog:'Progreso',
  cWhy:'Por qué confunde',cRules:'Cómo funciona',cTable:'De un vistazo',cTrap:'Errores frecuentes',cTip:'Estrategia',cQuiz:'Comprueba',
  prev:'Anterior',next:'Siguiente',home:'Inicio',score:'Puntos',again:'Repetir',
  done:'hecho',speed:'Velocidad',voice:'Voz',allTest:'Test general',
  testP:'25 preguntas al azar de los 21 temas, con explicación y el tema de origen.',
  restart:'Otras preguntas',result:'Resultado',back:'Volver a los temas',
  cat:{verb:'Verbos y modos',prep:'Preposiciones',pron:'Pronombres',noun:'Sustantivos y artículos',lex:'Léxico',adv:'Modificadores',orth:'Ortografía y sonido'},
  perfect:'¡Perfecto! Pasa al siguiente tema.',good:'Bien. Relee las explicaciones falladas.',retry:'Lee las explicaciones e inténtalo otra vez.'}
};
const CATORDER=['verb','prep','pron','noun','lex','adv','orth'];
let L=localStorage.getItem('cs_lang')||'ko';
let done=JSON.parse(localStorage.getItem('cs_done')||'{}');
let rate=parseFloat(localStorage.getItem('cs_rate')||'0.92');
const t=()=>UI[L];
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const $=s=>document.querySelector(s);

/* ---------- Voice ---------- */
let voices=[],chosen=null;
function pickVoice(){
  voices=speechSynthesis.getVoices().filter(v=>/^es/i.test(v.lang));
  const saved=localStorage.getItem('cs_voice');
  if(saved){const f=voices.find(v=>v.name===saved);if(f){chosen=f;return;}}
  const score=v=>{let s=0;const n=v.name.toLowerCase();
    if(/premium|enhanced|neural|natural|siri/.test(n))s+=6;
    if(/google/.test(n))s+=5;
    if(/monica|mónica|paulina|helena|elvira|jorge|diego|lucia|lucía/.test(n))s+=3;
    if(/^es-ES/i.test(v.lang))s+=2; if(/^es-MX|^es-US/i.test(v.lang))s+=1;
    if(v.localService)s+=1; return s;};
  chosen=voices.sort((a,b)=>score(b)-score(a))[0]||null;
}
speechSynthesis.onvoiceschanged=()=>{pickVoice();renderVoiceSel();};
pickVoice();
function say(text,slow){
  if(!('speechSynthesis'in window))return;
  speechSynthesis.cancel();
  const clean=String(text).replace(/[✗✓→↔—]/g,' ').replace(/\s*\/\s*/g,', ').replace(/\(.*?\)/g,'');
  const u=new SpeechSynthesisUtterance(clean);
  u.lang=chosen?chosen.lang:'es-ES'; if(chosen)u.voice=chosen;
  u.rate=slow?Math.max(.55,rate-0.3):rate; u.pitch=1;
  speechSynthesis.speak(u);
}
function renderVoiceSel(){
  const el=$('#voicesel'); if(!el)return;
  el.innerHTML=voices.map(v=>`<option value="${esc(v.name)}"${chosen&&v.name===chosen.name?' selected':''}>${esc(v.name)} (${v.lang})</option>`).join('')||'<option>—</option>';
}

/* ---------- Building blocks ---------- */
function exRow(es,tr){
  return `<div class="ex">
    <button class="play" data-say="${esc(es)}" title="재생">▶</button>
    <button class="play sp" data-say="${esc(es)}" data-slow="1" title="느리게">🐢</button>
    <div><div class="es">${esc(es)}</div><div class="tr">${esc(tr)}</div></div></div>`;
}
function tableHTML(tb){
  const h=tb.head[L]||tb.head.ko;
  return `<div class="tblscroll"><table class="tbl"><thead><tr>${h.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead>
  <tbody>${tb.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function quizHTML(list,showTopic){
  return list.map((q,i)=>`<div class="q" data-qi="${i}">
    <div class="qn">${showTopic?esc(q._topic)+' · ':''}Q${i+1}</div>
    <div class="qt">${esc(q.q)}</div>
    <div class="opts">${q.opts.map((o,j)=>`<button class="opt" data-q="${i}" data-o="${j}">${esc(o)}</button>`).join('')}</div>
    <div class="exp" id="exp-${i}">${(q.exp[L]||q.exp.ko)}</div></div>`).join('');
}

/* ---------- Views ---------- */
function home(){
  const T=t();
  const totalQ=TOPICS.reduce((a,x)=>a+x.quiz.length,0);
  const totalT=TOPICS.reduce((a,x)=>a+x.table.rows.length,0);
  const totalTr=TOPICS.reduce((a,x)=>a+x.traps.length,0);
  const cards=TOPICS.map(x=>`<button class="tcard" data-go="${x.id}">
     <div class="r">#${x.rank} · ${esc(x.level)}</div><h4>${esc(x.title[L]||x.title.ko)}</h4>
     <p>${esc(x.sub[L]||x.sub.ko)}</p>${done[x.id]?`<div class="done">✓ ${esc(T.done)} ${done[x.id]}%</div>`:''}</button>`).join('');
  return `<section class="card hero">
    <h1>${esc(T.title)}</h1><p class="sub">${esc(T.tagline)}</p>
    <p style="font-size:15px;color:#dde5ff;margin:14px 0 0">${esc(T.heroP)}</p>
    <div class="stats">
      <div class="stat"><b>${TOPICS.length}</b><span>${esc(T.topics)}</span></div>
      <div class="stat"><b>${totalQ}</b><span>${esc(T.quizzes)}</span></div>
      <div class="stat"><b>${totalT}</b><span>${esc(T.tables)}</span></div>
      <div class="stat"><b>${totalTr}</b><span>${esc(T.traps)}</span></div>
    </div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn" style="background:#fff;color:#1f3a93" data-go="${TOPICS[0].id}">${esc(T.start)} →</button>
      <button class="btn" style="background:rgba(255,255,255,.18)" data-go="__test">${esc(T.test)}</button>
    </div></section>
  <section class="card"><h2><span class="ico">⚙</span>${esc(T.voice)}</h2>
    <div class="rate"><label>${esc(T.voice)}</label><select id="voicesel" class="search" style="margin:0;flex:1;min-width:150px"></select></div>
    <div class="rate" style="margin-top:10px"><label>${esc(T.speed)}</label>
      <input type="range" id="raterange" min="0.5" max="1.3" step="0.02" value="${rate}">
      <span id="ratenum" style="font-weight:700;min-width:38px">${rate.toFixed(2)}x</span>
      <button class="btn ghost" data-say="Hola, bienvenido. Vamos a practicar español.">▶ test</button></div>
  </section>
  <section class="card"><h2><span class="ico">☰</span>${esc(T.topics)}</h2><div class="grid">${cards}</div></section>`;
}

function topicView(id){
  const T=t(),x=TOPICS.find(z=>z.id===id);if(!x)return home();
  const i=TOPICS.indexOf(x),prev=TOPICS[i-1],next=TOPICS[i+1];
  return `<section class="card">
    <div class="badges"><span class="badge rk">#${x.rank}</span><span class="badge lv">${esc(x.level)}</span><span class="badge">${esc(T.cat[x.cat])}</span></div>
    <h1 style="margin-top:12px">${esc(x.title[L]||x.title.ko)}</h1>
    <p class="sub">${esc(x.sub[L]||x.sub.ko)}</p>
    <div class="keybox" style="margin-top:16px">${x.key[L]||x.key.ko}</div></section>

  <section class="card"><h2><span class="ico">?</span>${esc(T.cWhy)}</h2><p class="why">${x.why[L]||x.why.ko}</p></section>

  <section class="card"><h2><span class="ico">▦</span>${esc(T.cRules)}</h2>
    ${x.rules.map(r=>`<div class="rule"><h3>${r.t[L]||r.t.ko}</h3><p class="d">${r.d[L]||r.d.ko}</p>${exRow(r.ex,r.tr[L]||r.tr.ko)}</div>`).join('')}
  </section>

  <section class="card"><h2><span class="ico">⇄</span>${esc(T.cTable)}</h2>${tableHTML(x.table)}</section>

  <section class="card"><h2><span class="ico">✕</span>${esc(T.cTrap)}</h2>
    ${x.traps.map(p=>`<div class="trap">
      <div class="bad"><span class="m">✗</span><span>${esc(p.bad)}</span></div>
      <div class="good"><span class="m">✓</span><span>${esc(p.good)}</span>
        <button class="play" style="margin-left:auto" data-say="${esc(p.good)}">▶</button></div>
      <div class="wy">${p.why[L]||p.why.ko}</div></div>`).join('')}
  </section>

  <section class="card"><h2><span class="ico">★</span>${esc(T.cTip)}</h2><div class="tipbox">${x.tip[L]||x.tip.ko}</div></section>

  <section class="card" id="quizbox"><h2><span class="ico">✎</span>${esc(T.cQuiz)}</h2>
    ${quizHTML(x.quiz,false)}
    <div class="qscore"><span id="sc">${esc(T.score)}: 0 / ${x.quiz.length}</span>
      <span id="scmsg" style="font-weight:600;color:var(--ink2);font-size:14px"></span>
      <button class="btn ghost" style="margin-left:auto" data-go="${x.id}">${esc(T.again)}</button></div>
  </section>

  <div class="navrow">
    ${prev?`<button class="btn ghost" data-go="${prev.id}">← ${esc(T.prev)}</button>`:`<button class="btn ghost" data-go="__home">${esc(T.home)}</button>`}
    ${next?`<button class="btn" data-go="${next.id}">${esc(T.next)} →</button>`:`<button class="btn" data-go="__test">${esc(T.test)} →</button>`}
  </div>`;
}

let testSet=[];
function testView(){
  const T=t();
  const pool=[];
  TOPICS.forEach(x=>x.quiz.forEach(q=>pool.push(Object.assign({},q,{_topic:'#'+x.rank+' '+(x.title[L]||x.title.ko)}))));
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  testSet=pool.slice(0,25);
  return `<section class="card"><h1>${esc(T.allTest)}</h1><p class="sub">${esc(T.testP)}</p></section>
  <section class="card" id="quizbox">${quizHTML(testSet,true)}
    <div class="qscore"><span id="sc">${esc(T.score)}: 0 / ${testSet.length}</span>
      <span id="scmsg" style="font-weight:600;color:var(--ink2);font-size:14px"></span>
      <button class="btn" style="margin-left:auto" data-go="__test">${esc(T.restart)}</button></div></section>
  <div class="navrow"><button class="btn ghost" data-go="__home">${esc(T.home)}</button>
    <button class="btn" data-go="${TOPICS[0].id}">${esc(T.back)} →</button></div>`;
}

/* ---------- Sidebar ---------- */
function sidebar(filter){
  const T=t(),f=(filter||'').trim().toLowerCase();
  const pct=Math.round(TOPICS.filter(x=>done[x.id]>=60).length/TOPICS.length*100);
  let html=`<input class="search" id="q" placeholder="${esc(T.search)}" value="${esc(filter||'')}">
   <div class="progwrap"><div class="progtop"><span>${esc(T.prog)}</span><span>${pct}%</span></div>
   <div class="progbar"><i style="width:${pct}%"></i></div></div>
   <button class="tlink${cur==='__home'?' on':''}" data-go="__home"><span class="n">⌂</span><span>${esc(T.home)}</span></button>
   <button class="tlink${cur==='__test'?' on':''}" data-go="__test"><span class="n">✎</span><span>${esc(T.allTest)}</span></button>`;
  CATORDER.forEach(c=>{
    const list=TOPICS.filter(x=>x.cat===c).filter(x=>!f||((x.title[L]||'')+(x.sub[L]||'')+(x.title.ko||'')+(x.sub.ko||'')+x.id).toLowerCase().includes(f));
    if(!list.length)return;
    html+=`<div class="catlab">${esc(T.cat[c])}</div>`;
    list.forEach(x=>{html+=`<button class="tlink${cur===x.id?' on':''}" data-go="${x.id}">
      <span class="n">${x.rank}</span><span>${esc(x.title[L]||x.title.ko)}</span>
      ${done[x.id]>=60?'<span class="chk">✓</span>':''}</button>`;});
  });
  $('#side').innerHTML=html;
}

/* ---------- Router ---------- */
let cur='__home';
function render(id){
  cur=id||'__home';
  const m=$('#main');
  m.innerHTML = cur==='__home'?home():cur==='__test'?testView():topicView(cur);
  sidebar($('#q')?$('#q').value:'');
  renderVoiceSel();
  window.scrollTo({top:0,behavior:'instant'});
  location.hash=cur==='__home'?'':cur;
  $('#side').classList.remove('open');$('#scrim').classList.remove('on');
}

/* ---------- Events ---------- */
let answered={},correct=0;
document.addEventListener('click',e=>{
  const sayBtn=e.target.closest('[data-say]');
  if(sayBtn){say(sayBtn.dataset.say,sayBtn.dataset.slow);return;}
  const go=e.target.closest('[data-go]');
  if(go){answered={};correct=0;render(go.dataset.go);return;}
  const opt=e.target.closest('.opt');
  if(opt){
    const qi=+opt.dataset.q, oi=+opt.dataset.o;
    if(answered[qi])return;
    answered[qi]=true;
    const list = cur==='__test'?testSet:(TOPICS.find(z=>z.id===cur)||{}).quiz||[];
    const q=list[qi];
    const wrap=document.querySelector(`.q[data-qi="${qi}"]`);
    wrap.querySelectorAll('.opt').forEach((b,j)=>{b.disabled=true;
      if(j===q.a)b.classList.add('right'); else if(j===oi)b.classList.add('wrong');});
    $('#exp-'+qi).classList.add('show');
    if(oi===q.a)correct++;
    const tot=list.length,n=Object.keys(answered).length;
    $('#sc').textContent=`${t().score}: ${correct} / ${tot}`;
    if(n===tot){
      const p=Math.round(correct/tot*100);
      $('#scmsg').textContent = p===100?t().perfect:p>=60?t().good:t().retry;
      if(cur!=='__test'){done[cur]=p;localStorage.setItem('cs_done',JSON.stringify(done));sidebar($('#q')?$('#q').value:'');}
    }
    return;
  }
  if(e.target.closest('#menu')){$('#side').classList.add('open');$('#scrim').classList.add('on');return;}
  if(e.target.id==='scrim'){$('#side').classList.remove('open');$('#scrim').classList.remove('on');return;}
  const lg=e.target.closest('[data-lang]');
  if(lg){L=lg.dataset.lang;localStorage.setItem('cs_lang',L);
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===L));
    document.documentElement.lang=L; $('#brandname').textContent=t().title;
    answered={};correct=0;render(cur);return;}
});
document.addEventListener('input',e=>{
  if(e.target.id==='q'){sidebar(e.target.value);return;}
  if(e.target.id==='raterange'){rate=parseFloat(e.target.value);localStorage.setItem('cs_rate',rate);$('#ratenum').textContent=rate.toFixed(2)+'x';return;}
});
document.addEventListener('change',e=>{
  if(e.target.id==='voicesel'){const v=voices.find(x=>x.name===e.target.value);if(v){chosen=v;localStorage.setItem('cs_voice',v.name);}}
});
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(h!==cur){answered={};correct=0;render(h||'__home');}});

/* ---------- Boot ---------- */
document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===L));
document.documentElement.lang=L;
$('#brandname').textContent=t().title;
render(location.hash.slice(1)||'__home');
