/* ===== Confusing Spanish — 데이터 (1/4) ===== */
const TOPICS = [
{
 id:'ser-estar', cat:'verb', level:'A1~B1', rank:1,
 title:{ko:'ser vs estar', en:'ser vs estar', es:'ser vs estar'},
 sub:{ko:'"이다"가 두 개인 이유', en:'Two verbs for "to be"', es:'Dos verbos para "ser/estar"'},
 key:{ko:'ser = <b>정체</b>(그것이 무엇인가) · estar = <b>상태</b>(지금 어떠한가)',
      en:'ser = <b>identity</b> (what it is) · estar = <b>state</b> (how it is right now)',
      es:'ser = <b>identidad</b> (qué es) · estar = <b>estado</b> (cómo está ahora)'},
 why:{ko:'교과서는 보통 "영구적 vs 일시적"이라고 가르치지만 이 설명은 자주 깨집니다. <i>Está muerto</i>(죽었다)는 영구적인데 estar를 쓰고, <i>Es joven</i>(젊다)은 일시적인데 ser를 씁니다. 원어민은 "영구/일시"가 아니라 <b>정체 vs 상태</b>로 구분합니다.',
      en:'Textbooks say "permanent vs temporary", but that rule breaks: <i>Está muerto</i> is permanent yet uses estar; <i>Es joven</i> is temporary yet uses ser. Natives split them as <b>identity vs state</b>.',
      es:'Los libros dicen "permanente vs temporal", pero la regla falla: <i>Está muerto</i> es permanente y usa estar. Los nativos distinguen <b>identidad vs estado</b>.'},
 rules:[
  {t:{ko:'ser — 정체·본질 (DOCTOR)',en:'ser — identity (DOCTOR)',es:'ser — identidad (DOCTOR)'},
   d:{ko:'Descripción(묘사) · Ocupación(직업) · Características(특징) · Tiempo(시간/날짜) · Origen(출신) · Relación(관계)',
      en:'Description · Occupation · Characteristics · Time/date · Origin · Relationship',
      es:'Descripción · Ocupación · Características · Tiempo · Origen · Relación'},
   ex:'Soy profesor de español. Es de Colombia. Son las tres.',
   tr:{ko:'저는 스페인어 교사입니다. 그는 콜롬비아 출신입니다. 3시입니다.',en:'I am a Spanish teacher. He is from Colombia. It is three o\u0027clock.',es:'Soy profesor. Él es de Colombia. Son las tres.'}},
  {t:{ko:'estar — 상태·위치 (PLACE)',en:'estar — state (PLACE)',es:'estar — estado (PLACE)'},
   d:{ko:'Posición(자세) · Location(위치) · Action(진행형) · Condition(컨디션) · Emotion(감정)',
      en:'Position · Location · Action (progressive) · Condition · Emotion',
      es:'Posición · Lugar · Acción · Condición · Emoción'},
   ex:'Estoy en casa. Está lloviendo. Estamos cansados.',
   tr:{ko:'나는 집에 있다. 비가 오고 있다. 우리는 피곤하다.',en:'I am at home. It is raining. We are tired.',es:'Estoy en casa. Está lloviendo. Estamos cansados.'}},
  {t:{ko:'장소의 예외: 행사는 ser',en:'Exception: events use ser',es:'Excepción: los eventos con ser'},
   d:{ko:'사람·물건의 위치는 estar, 그러나 <b>행사</b>(파티·수업·회의)의 장소는 ser.',en:'People and things → estar. But the location of an <b>event</b> → ser.',es:'Personas y cosas → estar. El lugar de un <b>evento</b> → ser.'},
   ex:'La fiesta es en mi casa, pero yo estoy en la oficina.',
   tr:{ko:'파티는 우리 집에서 열리는데, 나는 사무실에 있다.',en:'The party is at my house, but I am at the office.',es:'La fiesta es en mi casa, pero estoy en la oficina.'}}
 ],
 table:{head:{ko:['형용사','ser + 형용사','estar + 형용사'],en:['Adjective','ser +','estar +'],es:['Adjetivo','ser +','estar +']},
  rows:[
   ['listo','똑똑하다 / clever','준비됐다 / ready'],
   ['bueno','착하다 / good (person)','맛있다·건강하다 / tasty, well'],
   ['malo','나쁘다 / bad (person)','아프다 / sick'],
   ['aburrido','지루한 사람 / boring','지루함을 느낌 / bored'],
   ['verde','녹색이다 / green','덜 익었다 / unripe'],
   ['rico','부자다 / rich','맛있다 / delicious'],
   ['vivo','영리하다 / sharp','살아 있다 / alive'],
   ['orgulloso','거만하다 / arrogant','자랑스럽다 / proud']
  ]},
 traps:[
  {bad:'Estoy médico.',good:'Soy médico.',why:{ko:'직업은 정체 → 항상 ser.',en:'Professions are identity → always ser.',es:'La profesión es identidad → ser.'}},
  {bad:'Soy en casa.',good:'Estoy en casa.',why:{ko:'사람의 위치는 estar.',en:'Location of a person → estar.',es:'Ubicación de personas → estar.'}},
  {bad:'Estoy de Corea.',good:'Soy de Corea.',why:{ko:'출신 = 정체.',en:'Origin = identity.',es:'El origen es identidad.'}},
  {bad:'La reunión está en la sala 3.',good:'La reunión es en la sala 3.',why:{ko:'회의=행사 → ser.',en:'A meeting is an event → ser.',es:'Una reunión es un evento → ser.'}}
 ],
 tip:{ko:'🔑 <b>"무엇/누구"면 ser, "어때/어디"면 estar.</b> 형용사를 쓸 때 "원래 그런 사람/물건인가?"(ser) vs "지금 그런 상태인가?"(estar)를 물어보세요.',
      en:'🔑 <b>"What/who" → ser. "How/where" → estar.</b>',
      es:'🔑 <b>"Qué/quién" → ser. "Cómo/dónde" → estar.</b>'},
 quiz:[
  {q:'Mi hermana ___ arquitecta.',opts:['es','está'],a:0,exp:{ko:'직업 = ser.',en:'Profession = ser.',es:'Profesión = ser.'}},
  {q:'La sopa ___ muy rica hoy.',opts:['es','está'],a:1,exp:{ko:'"맛있다"는 estar + rica. (es rica = 부자다/고급이다)',en:'"Tastes good" = está rica.',es:'"Sabe bien" = está rica.'}},
  {q:'El concierto ___ en el teatro Colón.',opts:['es','está'],a:0,exp:{ko:'콘서트=행사 → ser.',en:'A concert is an event → ser.',es:'Un concierto es evento → ser.'}},
  {q:'Las manzanas todavía ___ verdes, no las comas.',opts:['son','están'],a:1,exp:{ko:'덜 익었다 = estar verde.',en:'Unripe = estar verde.',es:'No maduras = están verdes.'}},
  {q:'Hoy ___ el 16 de noviembre.',opts:['es','está'],a:0,exp:{ko:'날짜 = ser.',en:'Dates = ser.',es:'Las fechas = ser.'}},
  {q:'¡Qué callado ___ hoy! ¿Te pasa algo?',opts:['eres','estás'],a:1,exp:{ko:'평소와 다른 일시적 상태 → estar.',en:'Unusual temporary state → estar.',es:'Estado inusual → estar.'}}
 ]
},
{
 id:'por-para', cat:'prep', level:'A2~B1', rank:2,
 title:{ko:'por vs para', en:'por vs para', es:'por vs para'},
 sub:{ko:'영어 "for" 하나가 둘로 갈라진다', en:'One English "for", two Spanish words', es:'Un "for" inglés, dos palabras'},
 key:{ko:'por = <b>뒤를 본다</b>(원인·이유·경로·교환) · para = <b>앞을 본다</b>(목적·목적지·수신자·기한)',
      en:'por <b>looks back</b> (cause, route, exchange) · para <b>looks forward</b> (goal, destination, deadline)',
      es:'por <b>mira atrás</b> (causa, ruta) · para <b>mira adelante</b> (meta, destino)'},
 why:{ko:'영어 for, by, through, because of가 모두 por/para로 흩어집니다. 암기 리스트로 외우면 새로운 문장에서 무너지므로, <b>화살표 방향</b>(과거↩ / 미래↪)으로 생각하세요.',
      en:'English for, by, through, because of all map onto por/para. Think of an <b>arrow direction</b> instead of memorizing lists.',
      es:'Piensa en la <b>dirección de la flecha</b> en vez de memorizar listas.'},
 rules:[
  {t:{ko:'por ① 원인·이유 (~때문에)',en:'por ① cause',es:'por ① causa'},d:{ko:'행동을 유발한 과거의 원인.',en:'What triggered the action.',es:'Lo que provocó la acción.'},ex:'Lo hice por amor. Gracias por tu ayuda.',tr:{ko:'사랑 때문에 그걸 했다. 도와줘서 고마워.',en:'I did it out of love. Thanks for your help.',es:'Lo hice por amor.'}},
  {t:{ko:'por ② 경로·통과 (~를 지나)',en:'por ② route / through',es:'por ② ruta'},d:{ko:'공간을 통과하거나 대략적인 범위.',en:'Movement through space, or vague area.',es:'Movimiento por el espacio.'},ex:'Pasamos por Madrid. Vivo por aquí.',tr:{ko:'우리는 마드리드를 거쳐 갔다. 이 근처에 산다.',en:'We went through Madrid. I live around here.',es:'Pasamos por Madrid.'}},
  {t:{ko:'por ③ 교환·대가·단위',en:'por ③ exchange / rate',es:'por ③ intercambio'},d:{ko:'A를 B와 바꿀 때, 가격, 비율.',en:'Swapping A for B, price, rate.',es:'Precio, proporción.'},ex:'Lo compré por 20 euros. Dos veces por semana.',tr:{ko:'20유로에 샀다. 주 2회.',en:'I bought it for 20 euros. Twice a week.',es:'Lo compré por 20 euros.'}},
  {t:{ko:'por ④ 수동태의 행위자 (by)',en:'por ④ agent of passive',es:'por ④ agente'},d:{ko:'~에 의해.',en:'"by" someone.',es:'Hecho por alguien.'},ex:'La novela fue escrita por García Márquez.',tr:{ko:'그 소설은 가르시아 마르케스가 썼다.',en:'The novel was written by García Márquez.',es:'Escrita por García Márquez.'}},
  {t:{ko:'para ① 목적 (~하기 위해)',en:'para ① purpose',es:'para ① propósito'},d:{ko:'para + 동사원형 = ~하기 위해.',en:'para + infinitive = in order to.',es:'para + infinitivo.'},ex:'Estudio para aprobar el examen.',tr:{ko:'시험에 합격하려고 공부한다.',en:'I study in order to pass the exam.',es:'Estudio para aprobar.'}},
  {t:{ko:'para ② 목적지·수신자',en:'para ② destination / recipient',es:'para ② destino'},d:{ko:'향하는 곳, 받는 사람.',en:'Where it heads, who gets it.',es:'Hacia dónde, para quién.'},ex:'Salgo para Lima. Este regalo es para ti.',tr:{ko:'리마로 떠난다. 이 선물은 너를 위한 거야.',en:'I am leaving for Lima. This gift is for you.',es:'Salgo para Lima.'}},
  {t:{ko:'para ③ 기한 (~까지)',en:'para ③ deadline',es:'para ③ plazo'},d:{ko:'마감 시점.',en:'By when.',es:'Fecha límite.'},ex:'Necesito el informe para el viernes.',tr:{ko:'금요일까지 보고서가 필요하다.',en:'I need the report by Friday.',es:'Lo necesito para el viernes.'}},
  {t:{ko:'para ④ 의견·기준 (~에게는 / ~치고는)',en:'para ④ opinion / standard',es:'para ④ opinión'},d:{ko:'비교 기준.',en:'Compared to.',es:'En comparación.'},ex:'Para mí, es demasiado caro. Para ser novato, juega bien.',tr:{ko:'내 생각엔 너무 비싸. 초보치고는 잘한다.',en:'For me it is too expensive. For a beginner, he plays well.',es:'Para mí es muy caro.'}}
 ],
 table:{head:{ko:['상황','por','para'],en:['Situation','por','para'],es:['Situación','por','para']},
  rows:[
   ['이동 / movement','경로 통과 — Paso por el parque','목적지 — Voy para el parque'],
   ['시간 / time','기간·대략 — por tres días','기한 — para el lunes'],
   ['사람 / person','대신·때문 — Lo hago por ti (너를 위해=너 대신)','수신자 — Es para ti (너에게 줄 것)'],
   ['일 / work','trabajar por él = 그를 대신해 일함','trabajar para él = 그의 밑에서 일함'],
   ['이유 / reason','원인 — por el tráfico','목적 — para llegar pronto']
  ]},
 traps:[
  {bad:'Estudio español para mi trabajo... / por mi trabajo?',good:'둘 다 가능 (의미 다름)',why:{ko:'para mi trabajo = 일에 쓰기 위해(목적). por mi trabajo = 직장 때문에(원인).',en:'para = goal; por = cause. Both valid, different meanings.',es:'para = meta; por = causa.'}},
  {bad:'Gracias para tu ayuda.',good:'Gracias por tu ayuda.',why:{ko:'감사의 원인 → por.',en:'Reason for thanks → por.',es:'Motivo → por.'}},
  {bad:'Este libro es por ti.',good:'Este libro es para ti.',why:{ko:'받는 사람 → para.',en:'Recipient → para.',es:'Destinatario → para.'}},
  {bad:'Salimos por Barcelona mañana.',good:'Salimos para Barcelona mañana.',why:{ko:'목적지 → para. (por Barcelona = 바르셀로나를 거쳐)',en:'Destination → para.',es:'Destino → para.'}}
 ],
 tip:{ko:'🔑 문장에 화살표를 그려보세요. 원인→결과의 <b>출발점</b>을 가리키면 por, 결과·목표의 <b>도착점</b>을 가리키면 para.',
      en:'🔑 Draw an arrow: pointing back at the source → por; pointing forward at the target → para.',
      es:'🔑 Flecha hacia atrás → por; hacia adelante → para.'},
 quiz:[
  {q:'Compré este móvil ___ 300 euros.',opts:['por','para'],a:0,exp:{ko:'가격 교환 → por.',en:'Price → por.',es:'Precio → por.'}},
  {q:'Este informe es ___ el director.',opts:['por','para'],a:1,exp:{ko:'수신자 → para.',en:'Recipient → para.',es:'Destinatario → para.'}},
  {q:'No pude salir ___ la lluvia.',opts:['por','para'],a:0,exp:{ko:'원인 → por.',en:'Cause → por.',es:'Causa → por.'}},
  {q:'Trabajo ___ una empresa coreana.',opts:['por','para'],a:1,exp:{ko:'소속(고용주) → para.',en:'Employer → para.',es:'Empleador → para.'}},
  {q:'Caminamos ___ la playa toda la tarde.',opts:['por','para'],a:0,exp:{ko:'해변을 따라/거쳐 → por.',en:'Along/through → por.',es:'A lo largo de → por.'}},
  {q:'___ ser tan joven, toca el piano muy bien.',opts:['Por','Para'],a:1,exp:{ko:'~치고는 (기준) → para.',en:'"For (a young person)" → para.',es:'Comparación → para.'}},
  {q:'La carta fue firmada ___ el presidente.',opts:['por','para'],a:0,exp:{ko:'수동태 행위자 → por.',en:'Passive agent → por.',es:'Agente pasivo → por.'}}
 ]
},
{
 id:'preterito-imperfecto', cat:'verb', level:'A2~B1', rank:3,
 title:{ko:'pretérito vs imperfecto', en:'Preterite vs Imperfect', es:'Pretérito vs Imperfecto'},
 sub:{ko:'과거가 두 개인 이유 (hice vs hacía)', en:'Two past tenses', es:'Dos pasados'},
 key:{ko:'단순과거(hice) = <b>사진</b> 한 장, 끝난 사건 · 불완료(hacía) = <b>동영상</b>, 배경·습관·진행',
      en:'Preterite = a <b>photo</b> (completed event) · Imperfect = a <b>video</b> (background, habit, in progress)',
      es:'Pretérito = <b>foto</b> · Imperfecto = <b>vídeo</b>'},
 why:{ko:'한국어와 영어는 "했다" 하나로 처리하지만, 스페인어는 말하는 사람이 그 사건을 <b>완결된 점</b>으로 보는지 <b>펼쳐진 선</b>으로 보는지를 동사로 표시합니다. 같은 사건도 관점에 따라 둘 다 가능합니다.',
      en:'Spanish marks whether you view the event as a completed <b>point</b> or an unfolding <b>line</b>. The same event can take either, depending on viewpoint.',
      es:'El español marca si ves el evento como <b>punto</b> cerrado o <b>línea</b> abierta.'},
 rules:[
  {t:{ko:'단순과거 — 완결된 사건',en:'Preterite — completed',es:'Pretérito — acción acabada'},d:{ko:'시작과 끝이 있는 일, 횟수가 정해진 일, 이야기의 줄기.',en:'Has a beginning and an end; counted events; the plot.',es:'Tiene inicio y fin; la trama.'},ex:'Ayer fui al cine y vi dos películas.',tr:{ko:'어제 영화관에 가서 영화 두 편을 봤다.',en:'Yesterday I went to the cinema and saw two films.',es:'Ayer fui al cine.'}},
  {t:{ko:'불완료 — 배경·묘사',en:'Imperfect — background',es:'Imperfecto — descripción'},d:{ko:'날씨·나이·외모·감정·시간 묘사, 무대 설정.',en:'Weather, age, looks, feelings, time; setting the scene.',es:'Tiempo, edad, aspecto, emociones.'},ex:'Era de noche y llovía. Yo tenía diez años.',tr:{ko:'밤이었고 비가 내리고 있었다. 나는 열 살이었다.',en:'It was night and raining. I was ten.',es:'Era de noche y llovía.'}},
  {t:{ko:'불완료 — 반복된 습관',en:'Imperfect — habit',es:'Imperfecto — hábito'},d:{ko:'"~하곤 했다". 신호어: siempre, todos los días, cada año, de niño, normalmente.',en:'"used to". Cues: siempre, todos los días, de niño.',es:'"Solía". Pistas: siempre, todos los días.'},ex:'De niño jugaba al fútbol todos los días.',tr:{ko:'어릴 때 매일 축구를 하곤 했다.',en:'As a child I used to play football every day.',es:'De niño jugaba al fútbol.'}},
  {t:{ko:'둘의 결합 — 중단',en:'Combining them',es:'Combinación'},d:{ko:'진행 중(불완료)인데 사건이 끼어들면(단순과거). cuando / mientras.',en:'Imperfect sets the scene; preterite interrupts it.',es:'El imperfecto da el marco; el pretérito interrumpe.'},ex:'Dormía cuando sonó el teléfono.',tr:{ko:'자고 있었는데 전화가 울렸다.',en:'I was sleeping when the phone rang.',es:'Dormía cuando sonó el teléfono.'}}
 ],
 table:{head:{ko:['동사','단순과거 뜻','불완료 뜻'],en:['Verb','Preterite meaning','Imperfect meaning'],es:['Verbo','Pretérito','Imperfecto']},
  rows:[
   ['saber','supe = 알게 됐다 (found out)','sabía = 알고 있었다 (knew)'],
   ['conocer','conocí = 처음 만났다 (met)','conocía = 알고 지냈다 (knew)'],
   ['querer','quise = 하려고 했다 (tried)','quería = 원했다 (wanted)'],
   ['no querer','no quise = 거절했다 (refused)','no quería = 원하지 않았다'],
   ['poder','pude = 해냈다 (managed to)','podía = 할 수 있었다 (was able)'],
   ['tener','tuve que = 실제로 했다','tenía que = 해야 했다(했는지 불명)'],
   ['estar','estuve = 머물렀다(끝남)','estaba = ~한 상태였다']
  ]},
 traps:[
  {bad:'Cuando era niño, fui a la playa todos los veranos.',good:'...iba a la playa todos los veranos.',why:{ko:'반복 습관 → 불완료.',en:'Repeated habit → imperfect.',es:'Hábito → imperfecto.'}},
  {bad:'Ayer estaba en Madrid tres días.',good:'Ayer estuve en Madrid tres días.',why:{ko:'기간이 닫혀 있음(3일로 끝) → 단순과거.',en:'Closed duration → preterite.',es:'Duración cerrada → pretérito.'}},
  {bad:'La conocí muy bien desde la infancia.',good:'La conocía muy bien desde la infancia.',why:{ko:'지속된 상태 → 불완료. conocí는 "처음 만났다".',en:'Ongoing state → imperfect.',es:'Estado continuo → imperfecto.'}},
  {bad:'Mientras estudié, mi madre cocinó.',good:'Mientras estudiaba, mi madre cocinaba.',why:{ko:'동시에 진행되는 두 배경 → 둘 다 불완료.',en:'Two simultaneous backgrounds → both imperfect.',es:'Dos fondos simultáneos → imperfecto.'}}
 ],
 tip:{ko:'🔑 자문해 보세요: <b>"그래서 어떻게 됐어?"</b>에 답하는 문장이면 단순과거(줄기). <b>"그때 분위기가 어땠어?"</b>에 답하면 불완료(배경).',
      en:'🔑 Ask: does it answer "and then what happened?" → preterite. "What was it like?" → imperfect.',
      es:'🔑 "¿Y qué pasó?" → pretérito. "¿Cómo era?" → imperfecto.'},
 quiz:[
  {q:'Cuando ___ (llegar, yo) a casa, mi hermana ___ (ver) la tele.',opts:['llegué / veía','llegaba / vio','llegué / vio'],a:0,exp:{ko:'끼어든 사건=단순과거(llegué), 배경=불완료(veía).',en:'Interrupting event = preterite; background = imperfect.',es:'Interrupción = pretérito; fondo = imperfecto.'}},
  {q:'Anoche ___ (cenar, nosotros) en un restaurante italiano.',opts:['cenamos','cenábamos'],a:0,exp:{ko:'어젯밤에 끝난 단일 사건.',en:'One completed event.',es:'Un evento acabado.'}},
  {q:'Mi abuelo siempre ___ (contar) la misma historia.',opts:['contó','contaba'],a:1,exp:{ko:'siempre = 반복 습관.',en:'siempre = habit.',es:'siempre = hábito.'}},
  {q:'Ayer ___ (saber, yo) que estabas enfermo.',opts:['supe','sabía'],a:0,exp:{ko:'"알게 됐다"는 순간적 사건 → supe.',en:'"Found out" → supe.',es:'"Me enteré" → supe.'}},
  {q:'___ (ser) las ocho cuando ___ (empezar) a nevar.',opts:['Eran / empezó','Fueron / empezaba'],a:0,exp:{ko:'시간 묘사=불완료, 시작 사건=단순과거.',en:'Time = imperfect; onset = preterite.',es:'La hora = imperfecto.'}},
  {q:'Lo ___ (intentar) tres veces pero no ___ (poder) abrirlo.',opts:['intenté / pude','intentaba / podía'],a:0,exp:{ko:'횟수가 정해짐 + 결과 → 둘 다 단순과거.',en:'Counted attempts + outcome → preterite.',es:'Intentos contados → pretérito.'}}
 ]
},
{
 id:'subjuntivo', cat:'verb', level:'B1~B2', rank:4,
 title:{ko:'접속법 vs 직설법', en:'Subjunctive vs Indicative', es:'Subjuntivo vs Indicativo'},
 sub:{ko:'사실이 아니라 "태도"를 말하는 법', en:'Marking attitude, not fact', es:'Marcar la actitud'},
 key:{ko:'직설법 = <b>사실·확신</b>을 보고함 · 접속법 = 사실 여부가 아니라 <b>원함·의심·감정·미실현</b>을 표시함',
      en:'Indicative <b>reports reality</b>. Subjunctive marks <b>wish, doubt, emotion, unrealized</b>.',
      es:'Indicativo = realidad. Subjuntivo = deseo, duda, emoción, no realizado.'},
 why:{ko:'한국어·영어에는 이런 문법 장치가 거의 없어서, 학습자는 "언제 쓰나"를 평생 묻습니다. 핵심은 <b>주절이 종속절의 내용을 사실로 주장하는가</b>입니다. 주장하면 직설법, 주장하지 않으면(원하고·의심하고·평가하고) 접속법.',
      en:'The key question: does the main clause <b>assert</b> the subordinate clause as fact? If yes → indicative. If it only wishes, doubts or evaluates → subjunctive.',
      es:'¿La oración principal <b>afirma</b> el hecho? Sí → indicativo. No → subjuntivo.'},
 rules:[
  {t:{ko:'WEIRDO 신호어',en:'WEIRDO triggers',es:'Disparadores WEIRDO'},d:{ko:'<b>W</b>ishes 소망(querer que, esperar que) · <b>E</b>motions 감정(alegrarse de que, temer que) · <b>I</b>mpersonal 무인칭(es importante que) · <b>R</b>ecommendations 권유(recomendar que, pedir que) · <b>D</b>oubt/Denial 의심·부정(dudar que, no creer que) · <b>O</b>jalá',
     en:'Wishes · Emotions · Impersonal · Recommendations · Doubt/Denial · Ojalá',es:'Deseos · Emociones · Impersonal · Recomendaciones · Duda · Ojalá'},
   ex:'Quiero que vengas. Ojalá llueva. Es importante que lo sepas.',
   tr:{ko:'네가 오기를 원해. 비가 오면 좋겠다. 네가 그걸 아는 게 중요해.',en:'I want you to come. I hope it rains.',es:'Quiero que vengas.'}},
  {t:{ko:'주어가 같으면 que 없이 원형',en:'Same subject → infinitive',es:'Mismo sujeto → infinitivo'},d:{ko:'주절과 종속절의 주어가 같으면 접속법이 아니라 동사원형.',en:'If both clauses share a subject, use the infinitive.',es:'Si el sujeto es el mismo, infinitivo.'},ex:'Quiero ir. (내가 가고 싶다) ↔ Quiero que vayas. (네가 가길 원한다)',tr:{ko:'내가 가고 싶다 ↔ 네가 가길 원한다.',en:'I want to go ↔ I want you to go.',es:'Quiero ir ↔ Quiero que vayas.'}},
  {t:{ko:'미래의 불확실한 시점',en:'Future time clauses',es:'Tiempo futuro'},d:{ko:'cuando, hasta que, en cuanto, antes de que + 아직 안 일어난 일 → 접속법. 이미 반복되는 사실이면 직설법.',en:'cuando / hasta que + not yet happened → subjunctive; habitual fact → indicative.',es:'cuando + no ocurrido → subjuntivo.'},ex:'Cuando llegues, llámame. ↔ Cuando llego, siempre llamo.',tr:{ko:'도착하면 전화해. ↔ 나는 도착하면 항상 전화한다.',en:'When you arrive, call me. ↔ When I arrive I always call.',es:'Cuando llegues, llámame.'}},
  {t:{ko:'미지의 것을 찾을 때 (관계절)',en:'Unknown antecedent',es:'Antecedente desconocido'},d:{ko:'존재가 확인된 것 → 직설법, 아직 찾는 중 → 접속법.',en:'Known thing → indicative; still looking → subjunctive.',es:'Conocido → indicativo; buscado → subjuntivo.'},ex:'Busco un piso que tenga balcón. ↔ Tengo un piso que tiene balcón.',tr:{ko:'발코니 있는 집을 찾는다. ↔ 발코니 있는 집이 있다.',en:'I am looking for a flat that has a balcony.',es:'Busco un piso que tenga balcón.'}},
  {t:{ko:'부정·의심의 뒤집기',en:'Negation flips it',es:'La negación lo cambia'},d:{ko:'creer que + 직설법 / no creer que + 접속법. 반대로 no dudar que는 직설법.',en:'creo que + indicative, no creo que + subjunctive.',es:'Creo que + indicativo; no creo que + subjuntivo.'},ex:'Creo que es verdad. ↔ No creo que sea verdad.',tr:{ko:'사실이라고 생각해. ↔ 사실이라고 생각하지 않아.',en:'I think it is true ↔ I do not think it is true.',es:'Creo que es verdad ↔ No creo que sea verdad.'}}
 ],
 table:{head:{ko:['직설법을 쓰는 표현','접속법을 쓰는 표현'],en:['Indicative','Subjunctive'],es:['Indicativo','Subjuntivo']},
  rows:[
   ['creo que / pienso que','no creo que / no pienso que'],
   ['es verdad que / es evidente que','no es verdad que / es posible que'],
   ['sé que / estoy seguro de que','dudo que / no estoy seguro de que'],
   ['porque (이유)','para que (목적)'],
   ['aunque + 사실(비록 ~지만)','aunque + 가정(설령 ~라도)'],
   ['como (방식, 알고 있음)','como (방식, 아무래도 좋음)'],
   ['siempre que = ~할 때마다','siempre que = ~하는 한(조건)']
  ]},
 traps:[
  {bad:'Quiero que tú vas.',good:'Quiero que tú vayas.',why:{ko:'querer que 다음은 접속법.',en:'querer que + subjunctive.',es:'querer que + subjuntivo.'}},
  {bad:'Quiero que yo vaya.',good:'Quiero ir.',why:{ko:'주어가 같으면 원형.',en:'Same subject → infinitive.',es:'Mismo sujeto → infinitivo.'}},
  {bad:'Cuando llegarás, te ayudo.',good:'Cuando llegues, te ayudo.',why:{ko:'cuando 뒤에는 미래형이 아니라 접속법 현재.',en:'No future tense after cuando → subjunctive.',es:'Nunca futuro tras cuando.'}},
  {bad:'Es posible que es tarde.',good:'Es posible que sea tarde.',why:{ko:'가능성 표현 → 접속법.',en:'Possibility → subjunctive.',es:'Posibilidad → subjuntivo.'}}
 ],
 tip:{ko:'🔑 접속법은 "비현실"이 아니라 <b>"내가 이것을 사실로 주장하지 않는다"</b>는 신호입니다. Me alegro de que hayas venido(네가 온 건 사실!)에도 접속법이 쓰이는 이유가 바로 이것 — 사실을 보고하는 게 아니라 감정을 말하기 때문입니다.',
      en:'🔑 Subjunctive does not mean "unreal". It means "I am not asserting this as news". That is why emotion verbs take it even about true facts.',
      es:'🔑 El subjuntivo no significa "irreal", sino "no lo afirmo como información nueva".'},
 quiz:[
  {q:'Espero que todo ___ bien.',opts:['va','vaya'],a:1,exp:{ko:'esperar que = 소망 → 접속법.',en:'Hope → subjunctive.',es:'Deseo → subjuntivo.'}},
  {q:'Estoy seguro de que ___ la verdad.',opts:['dice','diga'],a:0,exp:{ko:'확신 → 직설법.',en:'Certainty → indicative.',es:'Certeza → indicativo.'}},
  {q:'Te llamo en cuanto ___ del trabajo.',opts:['salgo','salga'],a:1,exp:{ko:'아직 일어나지 않은 미래 시점.',en:'Not yet happened.',es:'Aún no ocurrido.'}},
  {q:'Aunque ___ frío, saldremos. (실제로 추운 상황)',opts:['hace','haga'],a:0,exp:{ko:'실제 사실을 인정 → 직설법.',en:'Acknowledged fact → indicative.',es:'Hecho real → indicativo.'}},
  {q:'No hay nadie que ___ hacerlo mejor.',opts:['puede','pueda'],a:1,exp:{ko:'존재 부정(nadie que) → 접속법.',en:'Nonexistent antecedent → subjunctive.',es:'Antecedente inexistente → subjuntivo.'}},
  {q:'Me alegro de que ___ aprobado el examen.',opts:['has','hayas'],a:1,exp:{ko:'감정 표현 → 사실이라도 접속법.',en:'Emotion → subjunctive even if true.',es:'Emoción → subjuntivo.'}},
  {q:'Lo hago para que tú ___ descansar.',opts:['puedes','puedas'],a:1,exp:{ko:'para que = 목적 → 항상 접속법.',en:'para que always takes subjunctive.',es:'para que siempre subjuntivo.'}}
 ]
},
{
 id:'genero', cat:'noun', level:'A1~A2', rank:5,
 title:{ko:'명사의 성 — 함정들', en:'Noun gender traps', es:'El género: trampas'},
 sub:{ko:'-o면 남성, -a면 여성? 예외가 발목을 잡는다', en:'When -o/-a lies', es:'Cuando -o/-a engañan'},
 key:{ko:'규칙(-o 남성 / -a 여성)은 80%만 맞습니다. <b>남은 20%가 시험과 실전에서 사고를 냅니다.</b>',
      en:'The -o/-a rule is only about 80% reliable. The other 20% causes the errors.',
      es:'La regla -o/-a acierta un 80%. El 20% restante causa los errores.'},
 why:{ko:'한국어에는 문법적 성이 없어 감각이 전혀 없습니다. 게다가 관사·형용사가 모두 성에 따라 바뀌므로 한 번 틀리면 문장 전체가 어긋납니다.',
      en:'Korean and English have no grammatical gender, and articles plus adjectives all agree, so one wrong guess breaks the whole phrase.',
      es:'Sin género gramatical en la lengua materna, un error arrastra todo el sintagma.'},
 rules:[
  {t:{ko:'-ma / -ta / -pa 로 끝나는 그리스어 계열 = 남성',en:'Greek-origin -ma = masculine',es:'-ma de origen griego = masculino'},d:{ko:'el problema, el tema, el sistema, el programa, el idioma, el clima, el poema, el drama, el planeta, el mapa, el día',en:'el problema, el tema, el sistema, el mapa, el día',es:'el problema, el tema, el mapa, el día'},ex:'El problema es el clima, no el sistema.',tr:{ko:'문제는 기후이지 제도가 아니다.',en:'The problem is the climate, not the system.',es:'El problema es el clima.'}},
  {t:{ko:'-o 로 끝나지만 여성',en:'-o but feminine',es:'-o pero femenino'},d:{ko:'la mano, la foto(=fotografía), la moto(=motocicleta), la radio',en:'la mano, la foto, la moto, la radio',es:'la mano, la foto, la moto'},ex:'Dame la mano. Saqué una foto buena.',tr:{ko:'손 좀 줘. 좋은 사진을 찍었다.',en:'Give me your hand.',es:'Dame la mano.'}},
  {t:{ko:'-ión / -dad / -tad / -tud / -umbre / -ie / -sis = 여성',en:'Feminine endings',es:'Terminaciones femeninas'},d:{ko:'la canción, la ciudad, la libertad, la actitud, la costumbre, la serie, la crisis',en:'la canción, la ciudad, la libertad, la crisis',es:'la canción, la ciudad, la crisis'},ex:'La crisis afecta a la ciudad.',tr:{ko:'위기가 도시에 영향을 준다.',en:'The crisis affects the city.',es:'La crisis afecta a la ciudad.'}},
  {t:{ko:'강세 있는 a-/ha- 로 시작하는 여성명사 → el',en:'Stressed a- takes el',es:'a- tónica lleva el'},d:{ko:'el agua, el alma, el área, el hambre — 단수에서만 el, 형용사는 여성! 복수는 las aguas.',en:'el agua fría, las aguas. Article changes, adjective stays feminine.',es:'el agua fría, las aguas.'},ex:'El agua está fría. Las aguas del río.',tr:{ko:'물이 차다. 강물.',en:'The water is cold.',es:'El agua está fría.'}},
  {t:{ko:'성에 따라 뜻이 바뀌는 단어',en:'Gender changes meaning',es:'El género cambia el significado'},d:{ko:'아래 표를 꼭 보세요. 시험 단골.',en:'See the table — a classic exam item.',es:'Mira la tabla.'},ex:'Perdí el papel con la lista.',tr:{ko:'목록이 적힌 종이를 잃었다.',en:'I lost the paper with the list.',es:'Perdí el papel.'}}
 ],
 table:{head:{ko:['단어','남성(el)','여성(la)'],en:['Word','masculine','feminine'],es:['Palabra','masculino','femenino']},
  rows:[
   ['papa','el papa 교황 / the Pope','la papa 감자 / potato'],
   ['papel','el papel 종이·역할','la papel ✗'],
   ['orden','el orden 순서 / order','la orden 명령 / command'],
   ['mañana','el mañana 미래','la mañana 아침'],
   ['cura','el cura 신부','la cura 치료'],
   ['puerto / puerta','el puerto 항구','la puerta 문'],
   ['banco / banca','el banco 은행·벤치','la banca 금융업'],
   ['tema','el tema 주제','la tema ✗'],
   ['capital','el capital 자본','la capital 수도']
  ]},
 traps:[
  {bad:'La problema es grave.',good:'El problema es grave.',why:{ko:'-ma 그리스어 계열 남성.',en:'Greek -ma is masculine.',es:'-ma griego, masculino.'}},
  {bad:'El mano derecho.',good:'La mano derecha.',why:{ko:'mano는 -o지만 여성.',en:'mano is feminine.',es:'mano es femenino.'}},
  {bad:'El agua frío.',good:'El agua fría.',why:{ko:'관사만 el, 형용사는 여성형.',en:'Only the article changes.',es:'Solo el artículo cambia.'}},
  {bad:'Los fotos.',good:'Las fotos.',why:{ko:'foto = fotografía의 축약 → 여성.',en:'foto < fotografía → feminine.',es:'foto < fotografía.'}}
 ],
 tip:{ko:'🔑 새 명사는 반드시 <b>관사와 한 덩어리로</b> 외우세요. "problema"가 아니라 "<b>el</b> problema"로 저장하면 평생 안 틀립니다.',
      en:'🔑 Always store a new noun <b>with its article</b>: not "problema" but "el problema".',
      es:'🔑 Aprende cada sustantivo <b>con su artículo</b>.'},
 quiz:[
  {q:'___ problema no tiene solución fácil.',opts:['El','La'],a:0,exp:{ko:'el problema.',en:'el problema.',es:'el problema.'}},
  {q:'Me duele ___ mano izquierda.',opts:['el','la'],a:1,exp:{ko:'la mano.',en:'la mano.',es:'la mano.'}},
  {q:'___ agua de este pozo está muy ___.',opts:['El / fría','La / frío','El / frío'],a:0,exp:{ko:'el agua + fría.',en:'el agua fría.',es:'el agua fría.'}},
  {q:'El jefe dio ___ orden de salir.',opts:['el','la'],a:1,exp:{ko:'명령 = la orden.',en:'command = la orden.',es:'mandato = la orden.'}},
  {q:'Madrid es ___ capital de España.',opts:['el','la'],a:1,exp:{ko:'수도 = la capital.',en:'capital city = la capital.',es:'la capital.'}},
  {q:'Estudio ___ idioma español.',opts:['el','la'],a:0,exp:{ko:'el idioma (-ma).',en:'el idioma.',es:'el idioma.'}}
 ]
},
{
 id:'gustar', cat:'verb', level:'A1~A2', rank:6,
 title:{ko:'gustar형 동사', en:'Verbs like gustar', es:'Verbos como gustar'},
 key:{ko:'gustar는 "좋아하다"가 아니라 <b>"~에게 마음에 들다"</b>. 좋아하는 <b>대상이 주어</b>가 되고, 사람은 간접목적어가 됩니다.',
      en:'gustar means "to be pleasing to". The <b>thing liked is the subject</b>; the person is the indirect object.',
      es:'gustar = "resultar agradable a". El objeto gustado es el <b>sujeto</b>.'},
 sub:{ko:'주어가 뒤집히는 동사', en:'The verb that flips', es:'El verbo que se invierte'},
 why:{ko:'"나는 커피를 좋아한다"를 그대로 옮기면 <i>Yo gusto el café</i>가 되는데, 이건 "내가 커피에게 마음에 든다"는 뜻입니다. 구조를 <b>통째로</b> 바꿔야 합니다.',
      en:'A literal translation gives <i>Yo gusto el café</i>, which means "I am pleasing to the coffee".',
      es:'La traducción literal da <i>Yo gusto el café</i> = "yo le resulto agradable al café".'},
 rules:[
  {t:{ko:'기본 공식',en:'The formula',es:'La fórmula'},d:{ko:'(A + 사람) + <b>me/te/le/nos/os/les</b> + gusta(n) + <b>주어</b>. 동사는 주어(좋아하는 대상)의 수에 맞춥니다.',en:'(A + person) + IO pronoun + gusta/gustan + subject.',es:'(A + persona) + pronombre + gusta/gustan + sujeto.'},ex:'Me gusta el café. Me gustan los libros.',tr:{ko:'커피가 내 마음에 든다 / 책들이 내 마음에 든다.',en:'I like coffee / I like books.',es:'Me gusta el café.'}},
  {t:{ko:'동사원형이 오면 항상 단수',en:'Infinitives take singular',es:'Infinitivos → singular'},d:{ko:'여러 개의 동사원형이 나열돼도 gusta(단수).',en:'Even several infinitives keep gusta.',es:'Aunque haya varios infinitivos.'},ex:'Me gusta leer y escribir.',tr:{ko:'읽고 쓰는 게 좋다.',en:'I like reading and writing.',es:'Me gusta leer y escribir.'}},
  {t:{ko:'le / les 를 명확히 하려면 A + 사람',en:'Clarify le/les with "a + person"',es:'Aclarar con "a + persona"'},d:{ko:'le는 그/그녀/당신 모두여서 모호 → A María le gusta...처럼 밝힙니다. 이때도 le는 생략 불가.',en:'le is ambiguous, so add "a María" — but keep le.',es:'le es ambiguo; añade "a María" y conserva le.'},ex:'A María le gusta bailar. A mis padres les gusta el cine.',tr:{ko:'마리아는 춤추는 걸 좋아한다.',en:'María likes dancing.',es:'A María le gusta bailar.'}},
  {t:{ko:'강조하려면 A mí / A ti',en:'Emphasis: A mí',es:'Énfasis: A mí'},d:{ko:'"나는 말이야" 같은 강조. <b>A mí</b>이지 <i>A yo</i>가 아닙니다.',en:'Use A mí, not A yo.',es:'A mí, nunca A yo.'},ex:'A mí me gusta, pero a él no le gusta.',tr:{ko:'나는 좋은데 그는 안 좋아한다.',en:'I like it, but he does not.',es:'A mí me gusta, a él no.'}},
  {t:{ko:'같은 구조의 동사들',en:'Same-pattern verbs',es:'Verbos del mismo tipo'},d:{ko:'encantar(아주 좋다) · interesar(관심있다) · importar(중요하다) · molestar(거슬린다) · doler(아프다) · faltar(부족하다) · quedar(남다·어울리다) · parecer(~같다) · aburrir · apetecer(당기다) · convenir · sobrar · costar(힘들다) · preocupar · fascinar · dar igual',
     en:'encantar, interesar, importar, molestar, doler, faltar, quedar, parecer, apetecer, costar, preocupar',es:'encantar, interesar, importar, molestar, doler, faltar, quedar, parecer, apetecer'},
   ex:'Me duelen los pies. Nos faltan dos sillas. ¿Te apetece un café?',tr:{ko:'발이 아프다. 의자 두 개가 부족하다. 커피 당겨?',en:'My feet hurt. We are two chairs short.',es:'Me duelen los pies.'}}
 ],
 table:{head:{ko:['틀린 영어식','올바른 스페인어','직역'],en:['English-style','Correct','Literal'],es:['Calco','Correcto','Literal']},
  rows:[
   ['Yo gusto el café ✗','Me gusta el café','커피가 나에게 마음에 든다'],
   ['Yo gusto los perros ✗','Me gustan los perros','개들이 나에게 마음에 든다'],
   ['Tú gustas bailar ✗','Te gusta bailar','춤추는 게 너에게 마음에 든다'],
   ['Mi pie duele ✗','Me duele el pie','발이 나에게 아프다'],
   ['Necesito dos euros (OK)','Me faltan dos euros','2유로가 나에게 부족하다']
  ]},
 traps:[
  {bad:'Me gusta los gatos.',good:'Me gustan los gatos.',why:{ko:'주어가 복수(los gatos) → gustan.',en:'Plural subject → gustan.',es:'Sujeto plural → gustan.'}},
  {bad:'A yo me gusta.',good:'A mí me gusta.',why:{ko:'전치사 뒤에는 mí.',en:'After a preposition: mí.',es:'Tras preposición: mí.'}},
  {bad:'A María gusta bailar.',good:'A María le gusta bailar.',why:{ko:'le를 생략할 수 없습니다.',en:'le cannot be dropped.',es:'No se omite le.'}},
  {bad:'Yo gusto tú.',good:'Me gustas (tú).',why:{ko:'"내가 너를 좋아해"는 Me gustas. 주어는 tú!',en:'"I like you" = Me gustas.',es:'"Me gustas tú".'}}
 ],
 tip:{ko:'🔑 머릿속에서 먼저 <b>"~가 나에게 마음에 든다"</b>로 한국어를 바꾸고 나서 스페인어를 만드세요. 그 순간 주어가 자동으로 정해집니다.',
      en:'🔑 Rephrase in English as "X is pleasing to me" before you speak.',
      es:'🔑 Piensa "X me resulta agradable" antes de hablar.'},
 quiz:[
  {q:'___ (A nosotros) ___ mucho las películas de terror.',opts:['nos gustan','nos gusta','gustamos'],a:0,exp:{ko:'주어 las películas(복수) → gustan.',en:'Plural subject → gustan.',es:'Plural → gustan.'}},
  {q:'A mi hermano ___ interesa la política.',opts:['le','lo','se'],a:0,exp:{ko:'간접목적격 le.',en:'Indirect object le.',es:'Pronombre le.'}},
  {q:'___ encanta viajar y conocer gente.',opts:['Me','Yo','A mí yo'],a:0,exp:{ko:'동사원형 2개여도 단수 encanta.',en:'Infinitives → singular.',es:'Infinitivos → singular.'}},
  {q:'¿___ duelen las muelas?',opts:['Te','Tú','Tu'],a:0,exp:{ko:'Te duelen las muelas.',en:'Te duelen.',es:'Te duelen.'}},
  {q:'A ellos no ___ importa esperar.',opts:['les','le','los'],a:0,exp:{ko:'복수 사람 → les.',en:'Plural person → les.',es:'les.'}}
 ]
},
{
 id:'se', cat:'pron', level:'A2~B2', rank:7,
 title:{ko:'se의 모든 용법', en:'All the uses of se', es:'Todos los usos de se'},
 sub:{ko:'같은 글자, 전혀 다른 7가지 기능', en:'One word, seven jobs', es:'Una palabra, siete funciones'},
 key:{ko:'se는 <b>한 가지 단어가 아니라 7개의 서로 다른 문법 장치</b>입니다. 문장에서 어떤 se인지 구별하는 훈련이 핵심.',
      en:'se is not one word but <b>seven different devices</b>. The skill is telling them apart.',
      es:'se no es una palabra, son <b>siete mecanismos</b> distintos.'},
 why:{ko:'se가 나오면 학습자는 "재귀구나" 하고 넘어가지만, 실제로는 수동·무인칭·우연·상호·le의 변신 등 전혀 다른 의미일 수 있습니다. 읽기 실력의 큰 분기점입니다.',
      en:'Learners read every se as "reflexive", missing passive, impersonal, accidental, reciprocal and the le→se switch.',
      es:'Muchos leen todo se como reflexivo y pierden los otros usos.'},
 rules:[
  {t:{ko:'① 재귀 (자기 자신에게)',en:'① Reflexive',es:'① Reflexivo'},d:{ko:'주어 = 목적어. 일상 루틴 동사가 많음.',en:'Subject = object.',es:'El sujeto es el objeto.'},ex:'Se lava las manos. Mi hijo se viste solo.',tr:{ko:'그는 손을 씻는다. 아들이 혼자 옷을 입는다.',en:'He washes his hands.',es:'Se lava las manos.'}},
  {t:{ko:'② 상호 (서로)',en:'② Reciprocal',es:'② Recíproco'},d:{ko:'복수 주어가 서로에게. "el uno al otro"로 강조 가능.',en:'Plural subject, to each other.',es:'Sujeto plural, el uno al otro.'},ex:'Se abrazaron. Ana y Luis se escriben todos los días.',tr:{ko:'그들은 서로 껴안았다. 아나와 루이스는 매일 서로에게 편지를 쓴다.',en:'They hugged each other.',es:'Se abrazaron.'}},
  {t:{ko:'③ 무인칭 se (사람들은 일반적으로)',en:'③ Impersonal se',es:'③ se impersonal'},d:{ko:'행위자를 밝히지 않는 일반 진술. <b>동사는 항상 3인칭 단수</b>. 목적어가 "당하는" 대상이 없음.',en:'General statement; verb <b>always singular</b>.',es:'Siempre verbo en singular.'},ex:'Aquí se vive bien. En España se cena tarde. No se puede fumar.',tr:{ko:'여기는 살기 좋다. 스페인에서는 늦게 저녁을 먹는다. 금연.',en:'One lives well here. In Spain people eat late.',es:'Aquí se vive bien.'}},
  {t:{ko:'④ 수동 se (pasiva refleja)',en:'④ Passive se',es:'④ se pasiva'},d:{ko:'사물이 당하는 행동. <b>동사가 그 사물의 수에 일치</b>(단수/복수) — 무인칭과의 결정적 차이!',en:'The verb <b>agrees</b> with the thing acted on.',es:'El verbo concuerda con la cosa.'},ex:'Se vende piso. Se venden pisos. Se habla español.',tr:{ko:'아파트 매매. 아파트들 매매. 스페인어 사용.',en:'Flat for sale / Flats for sale.',es:'Se vende piso / Se venden pisos.'}},
  {t:{ko:'⑤ 우연의 se (내 탓이 아님)',en:'⑤ Accidental se',es:'⑤ se accidental'},d:{ko:'구조: <b>Se + me/te/le... + 동사 + 사물</b>. 동사는 사물에 일치. 책임을 지지 않는 뉘앙스.',en:'Se + IO pronoun + verb + thing. Removes blame.',es:'Se + pronombre + verbo + cosa.'},ex:'Se me cayó el vaso. Se me olvidaron las llaves. Se nos rompió el coche.',tr:{ko:'(실수로) 컵을 떨어뜨렸다. 열쇠를 깜빡했다. 차가 고장 났다.',en:'I dropped the glass (accidentally). I forgot the keys.',es:'Se me cayó el vaso.'}},
  {t:{ko:'⑥ le/les → se (대명사 2개 충돌)',en:'⑥ le/les becomes se',es:'⑥ le/les → se'},d:{ko:'간접목적격 le/les 뒤에 lo/la/los/las가 오면 le가 <b>se</b>로 바뀝니다. (se lo, se la...)',en:'le + lo → se lo (never "le lo").',es:'le + lo → se lo.'},ex:'Le doy el libro → Se lo doy.',tr:{ko:'그에게 책을 준다 → 그에게 그것을 준다.',en:'I give it to him.',es:'Se lo doy.'}},
  {t:{ko:'⑦ 의미를 바꾸는 se (동사의 변신)',en:'⑦ se changes the meaning',es:'⑦ se cambia el significado'},d:{ko:'아래 표 참조. 사전적으로 다른 동사가 됩니다.',en:'See the table.',es:'Ver la tabla.'},ex:'Voy a casa. ↔ Me voy de casa.',tr:{ko:'집에 간다 ↔ 집을 떠난다.',en:'I am going home ↔ I am leaving home.',es:'Voy a casa ↔ Me voy.'}}
 ],
 table:{head:{ko:['동사','기본형','se 붙은 형'],en:['Verb','plain','with se'],es:['Verbo','sin se','con se']},
  rows:[
   ['ir','ir = 가다','irse = 떠나다'],
   ['quedar','quedar = 만나기로 하다','quedarse = 머물다'],
   ['poner','poner = 놓다','ponerse = 입다 / ~해지다'],
   ['volver','volver = 돌아오다','volverse = ~로 변하다'],
   ['dormir','dormir = 잠을 자다','dormirse = 잠들다'],
   ['acordar','acordar = 합의하다','acordarse de = 기억하다'],
   ['llevar','llevar = 가져가다','llevarse = 가져가 버리다 / 잘 지내다'],
   ['meter','meter = 넣다','meterse = 끼어들다'],
   ['parecer','parecer = ~처럼 보이다','parecerse a = ~와 닮다']
  ]},
 traps:[
  {bad:'Se venden piso.',good:'Se vende piso.',why:{ko:'수동 se는 사물의 수에 일치.',en:'Passive se agrees with the noun.',es:'Concordancia con el sustantivo.'}},
  {bad:'Aquí se venden bien.',good:'Aquí se vive bien.',why:{ko:'당하는 사물이 없으면 무인칭 se + 단수.',en:'No object acted on → impersonal, singular.',es:'Sin objeto → impersonal.'}},
  {bad:'Le lo dije.',good:'Se lo dije.',why:{ko:'le + lo → se lo.',en:'le + lo → se lo.',es:'le + lo → se lo.'}},
  {bad:'Yo olvidé las llaves. (문법 OK, 뉘앙스 다름)',good:'Se me olvidaron las llaves.',why:{ko:'우연의 se를 쓰면 "내 잘못이 아니다"는 느낌. 원어민은 이 표현을 훨씬 자주 씁니다.',en:'The accidental se sounds far more natural.',es:'El se accidental suena más natural.'}}
 ],
 tip:{ko:'🔑 구별 비결: <b>동사가 복수로 변하는가?</b> 변하면 수동 se, 안 변하면(항상 단수) 무인칭 se. 그리고 se 바로 뒤에 <b>me/te/le</b>가 붙어 있으면 거의 항상 "우연의 se".',
      en:'🔑 Does the verb go plural? → passive se. Always singular? → impersonal. se + me/te/le → accidental.',
      es:'🔑 ¿El verbo va en plural? → pasiva. ¿Siempre singular? → impersonal.'},
 quiz:[
  {q:'En esta tienda ___ libros usados.',opts:['se venden','se vende'],a:0,exp:{ko:'libros가 복수 → 수동 se, 복수 일치.',en:'Plural noun → se venden.',es:'Plural → se venden.'}},
  {q:'En Corea ___ mucho arroz. (사람들이 쌀을 많이 먹는다)',opts:['se come','se comen'],a:0,exp:{ko:'arroz 단수 → se come.',en:'arroz singular → se come.',es:'arroz singular.'}},
  {q:'___ (우연히 컵이 깨졌다) el vaso.',opts:['Se me rompió','Me rompí','Se rompe me'],a:0,exp:{ko:'우연의 se: Se + me + 동사.',en:'Accidental se.',es:'Se accidental.'}},
  {q:'¿El informe? ___ envié ayer al jefe.',opts:['Se lo','Le lo','Lo le'],a:0,exp:{ko:'le+lo → se lo.',en:'le+lo → se lo.',es:'se lo.'}},
  {q:'Ya es tarde, ___ a casa. (떠난다)',opts:['me voy','voy','me va'],a:0,exp:{ko:'irse = 떠나다.',en:'irse = to leave.',es:'irse = marcharse.'}},
  {q:'Ana y Pedro ___ conocieron en Madrid.',opts:['se','les','los'],a:0,exp:{ko:'상호 se (서로 알게 되다).',en:'Reciprocal se.',es:'Se recíproco.'}}
 ]
},
{
 id:'pronombres', cat:'pron', level:'A2~B1', rank:8,
 title:{ko:'목적격 대명사 lo/la/le', en:'Object pronouns lo/la/le', es:'Pronombres lo/la/le'},
 sub:{ko:'누구를 때렸고 누구에게 줬나', en:'Direct vs indirect', es:'Directo vs indirecto'},
 key:{ko:'직접목적격(무엇을/누구를) = <b>lo, la, los, las</b> · 간접목적격(누구에게) = <b>le, les</b>. 둘이 같이 나오면 순서는 <b>간접 → 직접</b>.',
      en:'Direct = lo/la/los/las. Indirect = le/les. Order: indirect then direct.',
      es:'Directo: lo/la/los/las. Indirecto: le/les. Orden: indirecto + directo.'},
 why:{ko:'한국어는 조사(을/를, 에게)로 구분하고 생략도 자유롭지만, 스페인어는 대명사 자체가 바뀌고 위치가 고정적입니다. 게다가 스페인에서는 사람 남성 직접목적어에 le를 쓰는 <b>leísmo</b>가 표준으로 허용돼 혼란이 더해집니다.',
      en:'Spanish changes the pronoun itself and fixes its position. Spain also allows <b>leísmo</b> (le for male people), adding confusion.',
      es:'En España se admite el <b>leísmo</b> de persona masculina.'},
 rules:[
  {t:{ko:'위치 규칙',en:'Placement',es:'Colocación'},d:{ko:'① 활용된 동사 <b>앞</b>: Lo veo. ② 동사원형·현재분사·긍정명령 <b>뒤에 붙여쓰기</b>: verlo, viéndolo, dímelo. ③ 조동사 구문은 둘 다 가능: Lo quiero ver = Quiero verlo.',
     en:'Before a conjugated verb; attached to infinitives, gerunds and affirmative commands.',es:'Antes del verbo conjugado; pegado a infinitivo, gerundio e imperativo afirmativo.'},
   ex:'Lo quiero ver. = Quiero verlo. Dámelo. Estoy leyéndolo.',tr:{ko:'그것을 보고 싶다. 그걸 나에게 줘. 그걸 읽고 있다.',en:'I want to see it. Give it to me.',es:'Quiero verlo. Dámelo.'}},
  {t:{ko:'두 개가 겹칠 때',en:'Two pronouns',es:'Dos pronombres'},d:{ko:'순서 = <b>간접 + 직접</b>. me lo, te la, nos los... 그리고 le/les + lo → <b>se lo</b>.',en:'Indirect + direct. le/les + lo → se lo.',es:'Indirecto + directo; le+lo → se lo.'},ex:'¿Me lo das? Te las mando hoy. Se lo expliqué.',tr:{ko:'그걸 나에게 줄래? 그것들을 오늘 보낼게. 그에게 그걸 설명했다.',en:'Will you give it to me?',es:'¿Me lo das?'}},
  {t:{ko:'중복 표현 (대명사 + a+사람)',en:'Redundant doubling',es:'Duplicación'},d:{ko:'a mí / a él 등이 문장에 있어도 le/me를 <b>반드시</b> 함께 씁니다. 영어식으로 생략하면 틀립니다.',en:'Even with "a él", you must keep le.',es:'Aunque digas "a él", mantén le.'},ex:'A mí me parece bien. Le di el libro a Juan.',tr:{ko:'내 생각엔 괜찮다. 후안에게 책을 줬다.',en:'It seems fine to me. I gave Juan the book.',es:'A mí me parece bien.'}},
  {t:{ko:'명령문에서의 변화',en:'With commands',es:'Con imperativo'},d:{ko:'긍정명령 → 붙여쓰고 강세 표시가 붙을 수 있음(dímelo). <b>부정명령 → 앞으로</b>(no me lo digas).',en:'Affirmative: attach. Negative: before the verb.',es:'Afirmativo: pegado. Negativo: delante.'},ex:'Dímelo. ↔ No me lo digas.',tr:{ko:'말해줘 ↔ 말하지 마.',en:'Tell me ↔ Do not tell me.',es:'Dímelo ↔ No me lo digas.'}},
  {t:{ko:'중성 lo (문장 전체를 받음)',en:'Neuter lo',es:'lo neutro'},d:{ko:'앞의 문장·개념 전체를 가리킬 때 lo.',en:'Refers back to a whole idea.',es:'Se refiere a una idea entera.'},ex:'—Mañana hay huelga. —Ya lo sé.',tr:{ko:'내일 파업이야. — 알고 있어.',en:'There is a strike tomorrow. — I know.',es:'Ya lo sé.'}}
 ],
 table:{head:{ko:['','직접(을/를)','간접(에게)','전치사 뒤'],en:['','Direct','Indirect','After prep.'],es:['','Directo','Indirecto','Tras prep.']},
  rows:[
   ['yo','me','me','mí'],['tú','te','te','ti'],
   ['él/ella/ud.','lo / la','le','él / ella / usted'],
   ['nosotros','nos','nos','nosotros'],['vosotros','os','os','vosotros'],
   ['ellos/ellas/uds.','los / las','les','ellos / ellas']
  ]},
 traps:[
  {bad:'Lo le di.',good:'Se lo di.',why:{ko:'le + lo는 존재하지 않습니다.',en:'"le lo" does not exist.',es:'No existe "le lo".'}},
  {bad:'Quiero lo ver.',good:'Quiero verlo. / Lo quiero ver.',why:{ko:'동사원형 앞에 떨어뜨려 놓을 수 없습니다.',en:'Cannot float before an infinitive.',es:'No puede ir solo ante infinitivo.'}},
  {bad:'Di el libro a Juan. (대명사 없음)',good:'Le di el libro a Juan.',why:{ko:'간접목적어 중복 표시가 거의 의무.',en:'Doubling is nearly obligatory.',es:'La duplicación es casi obligatoria.'}},
  {bad:'No dímelo.',good:'No me lo digas.',why:{ko:'부정명령에서는 대명사가 앞으로.',en:'Negative commands put pronouns first.',es:'Negativo: pronombres delante.'}}
 ],
 tip:{ko:'🔑 문장을 만들기 전에 한국어로 <b>"누가 / 누구에게 / 무엇을"</b> 세 칸을 채워 보세요. "누구에게"가 있으면 le계열, "무엇을"이 있으면 lo계열입니다.',
      en:'🔑 Fill three slots first: who / to whom / what. "To whom" → le; "what" → lo.',
      es:'🔑 Rellena: quién / a quién / qué.'},
 quiz:[
  {q:'¿La carta? Ya ___ escribí.',opts:['la','le','lo'],a:0,exp:{ko:'carta = 여성 직접목적어 → la.',en:'Feminine direct object → la.',es:'la carta → la.'}},
  {q:'A mis padres ___ llamo todos los domingos.',opts:['los','les','le'],a:0,exp:{ko:'llamar의 대상은 직접목적어 → los. (스페인에서는 les도 허용)',en:'Direct object → los (les accepted in Spain).',es:'Objeto directo → los.'}},
  {q:'¿Las llaves? ___ dejé en la mesa.',opts:['Las','Les','Los'],a:0,exp:{ko:'las llaves → las.',en:'las llaves → las.',es:'las llaves → las.'}},
  {q:'Pregunté a Ana y ___ dije la verdad.',opts:['le','la','lo'],a:0,exp:{ko:'"아나에게 말했다" → 간접 le.',en:'"told to Ana" → le.',es:'Decir a alguien → le.'}},
  {q:'El regalo, ¿___ compraste a tu madre?',opts:['se lo','le lo','lo le'],a:0,exp:{ko:'le + lo → se lo.',en:'se lo.',es:'se lo.'}},
  {q:'No ___ ___ digas a nadie. (그것을 / 그에게)',opts:['se lo','lo se','le lo'],a:0,exp:{ko:'부정명령 + se lo.',en:'No se lo digas.',es:'No se lo digas.'}}
 ]
},
{
 id:'saber-conocer', cat:'lex', level:'A1~A2', rank:9,
 title:{ko:'saber vs conocer', en:'saber vs conocer', es:'saber vs conocer'},
 sub:{ko:'"알다"가 두 개', en:'Two kinds of knowing', es:'Dos formas de saber'},
 key:{ko:'saber = <b>정보·사실·방법</b>을 알다 (머리) · conocer = <b>경험으로 익숙하다</b> (만나봤다·가봤다)',
      en:'saber = facts, information, how-to. conocer = familiarity through experience.',
      es:'saber = datos y habilidades. conocer = familiaridad por experiencia.'},
 why:{ko:'한국어 "알다" 하나가 두 개로 갈라지고, 게다가 과거시제에서 뜻이 또 변합니다(supe=알게 됐다 / conocí=처음 만났다).',
      en:'One verb in English splits in two, and the preterite shifts the meaning again.',
      es:'Un verbo se divide en dos y el pretérito cambia el sentido.'},
 rules:[
  {t:{ko:'saber + 정보',en:'saber + information',es:'saber + información'},d:{ko:'saber que / dónde / cómo / quién + 절. 또는 saber + 동사원형 = ~할 줄 안다.',en:'saber que/dónde/cómo + clause; saber + infinitive = know how to.',es:'saber + que/dónde; saber + infinitivo.'},ex:'Sé que vives aquí. No sé dónde está. Sé nadar.',tr:{ko:'네가 여기 사는 걸 안다. 어디 있는지 모른다. 수영할 줄 안다.',en:'I know you live here. I can swim.',es:'Sé que vives aquí. Sé nadar.'}},
  {t:{ko:'conocer + 사람/장소/작품',en:'conocer + person/place',es:'conocer + persona/lugar'},d:{ko:'사람 목적어 앞에는 <b>전치사 a</b> 필수. 장소는 "가본 적 있다"는 뜻.',en:'Needs personal "a" before people.',es:'Requiere la "a" personal.'},ex:'Conozco a tu hermano. ¿Conoces Sevilla? No conozco esa canción.',tr:{ko:'네 형을 안다. 세비야 가봤어? 그 노래 모른다.',en:'I know your brother. Have you been to Seville?',es:'Conozco a tu hermano.'}},
  {t:{ko:'과거에서의 의미 변화',en:'Preterite meaning shift',es:'Cambio en pretérito'},d:{ko:'supe = (그때) 알게 됐다 · sabía = 알고 있었다 · conocí = 처음 만났다/처음 가봤다 · conocía = 알고 지냈다',en:'supe = found out; conocí = met for the first time.',es:'supe = me enteré; conocí = lo/la conocí por primera vez.'},ex:'Lo supe ayer. La conocí en 2019 y ya la conocía bien en 2020.',tr:{ko:'어제 알게 됐다. 2019년에 처음 만나 2020년엔 잘 알고 있었다.',en:'I found out yesterday.',es:'Lo supe ayer.'}},
  {t:{ko:'불규칙 1인칭 주의',en:'Irregular yo forms',es:'Primera persona irregular'},d:{ko:'saber → <b>sé</b> (sabo ✗) · conocer → <b>conozco</b> (conoco ✗). 접속법: sepa / conozca.',en:'sé, not "sabo"; conozco, not "conoco".',es:'sé y conozco.'},ex:'Yo sé la respuesta y conozco al profesor.',tr:{ko:'나는 답을 알고 교수님을 안다.',en:'I know the answer and I know the professor.',es:'Sé la respuesta y conozco al profesor.'}}
 ],
 table:{head:{ko:['한국어','saber','conocer'],en:['Idea','saber','conocer'],es:['Idea','saber','conocer']},
  rows:[
   ['전화번호를 알다','Sé su número','✗'],
   ['그 사람을 알다','✗','Conozco a esa persona'],
   ['~할 줄 알다','Sé conducir','✗'],
   ['도시에 가본 적 있다','✗','Conozco Lima'],
   ['소식을 알게 됐다','Me supe / Lo supe','✗'],
   ['처음 만났다','✗','Lo conocí ayer']
  ]},
 traps:[
  {bad:'Sé a tu hermano.',good:'Conozco a tu hermano.',why:{ko:'사람은 conocer.',en:'People take conocer.',es:'Personas → conocer.'}},
  {bad:'Conozco que vive aquí.',good:'Sé que vive aquí.',why:{ko:'que절 정보 → saber.',en:'A que-clause → saber.',es:'Cláusula que → saber.'}},
  {bad:'Yo sabo la verdad.',good:'Yo sé la verdad.',why:{ko:'1인칭 불규칙.',en:'Irregular yo form.',es:'Forma irregular.'}},
  {bad:'Conozco nadar.',good:'Sé nadar.',why:{ko:'기술·능력 → saber + 원형.',en:'Skills → saber + infinitive.',es:'Habilidades → saber.'}}
 ],
 tip:{ko:'🔑 <b>"공부해서 알 수 있는 것"이면 saber, "만나거나 가봐야 아는 것"이면 conocer.</b>',
      en:'🔑 If you can learn it by studying → saber. If you must meet or visit it → conocer.',
      es:'🔑 Si se estudia → saber. Si se visita o se trata → conocer.'},
 quiz:[
  {q:'¿___ a la nueva profesora?',opts:['Conoces','Sabes'],a:0,exp:{ko:'사람 + a → conocer.',en:'Person → conocer.',es:'Persona → conocer.'}},
  {q:'No ___ cuánto cuesta.',opts:['sé','conozco'],a:0,exp:{ko:'정보 → saber.',en:'Information → saber.',es:'Información → saber.'}},
  {q:'___ México el año pasado, me encantó.',opts:['Conocí','Supe'],a:0,exp:{ko:'처음 가봤다 → conocí.',en:'Visited for the first time.',es:'Lo visité por primera vez.'}},
  {q:'Ella ___ tocar la guitarra.',opts:['sabe','conoce'],a:0,exp:{ko:'능력 → saber + 원형.',en:'Skill → saber.',es:'Habilidad → saber.'}},
  {q:'Ayer ___ que te casas. ¡Felicidades!',opts:['supe','sabía'],a:0,exp:{ko:'알게 된 순간 → supe.',en:'Found out → supe.',es:'Me enteré → supe.'}}
 ]
},
{
 id:'verb-pairs', cat:'lex', level:'A2~B1', rank:10,
 title:{ko:'헷갈리는 동사 짝 모음', en:'Confusing verb pairs', es:'Parejas de verbos'},
 sub:{ko:'pedir/preguntar, llevar/traer, ir/venir...', en:'The classic pairs', es:'Las parejas clásicas'},
 key:{ko:'대부분의 짝은 <b>"기준점(내가 있는 곳)에서 멀어지나 가까워지나"</b> 또는 <b>"돌아오는 것이 물건인가 정보인가"</b> 하나로 풀립니다.',
      en:'Most pairs resolve with one axis: toward me vs away from me, or thing vs information.',
      es:'Un solo eje: hacia mí o lejos de mí; cosa o información.'},
 why:{ko:'영어 ask, bring, take, come, go가 스페인어에서 쪼개지고, 기준점이 <b>말하는 사람</b>이 아니라 <b>듣는 사람</b>일 때도 있어 더 복잡합니다.',
      en:'English ask/bring/take/come/go split, and the reference point can be the listener.',
      es:'El punto de referencia puede ser el oyente.'},
 rules:[
  {t:{ko:'pedir vs preguntar',en:'pedir vs preguntar',es:'pedir vs preguntar'},d:{ko:'<b>pedir</b> = 물건·행동·허락을 요청(돌아오는 것이 물건). <b>preguntar</b> = 질문하다(돌아오는 것이 정보). preguntar por = ~의 안부를 묻다.',en:'pedir = request a thing; preguntar = ask a question.',es:'pedir = solicitar; preguntar = hacer preguntas.'},ex:'Pedí un café. Pregunté la hora. Preguntó por ti.',tr:{ko:'커피를 주문했다. 시간을 물었다. 네 안부를 물었다.',en:'I ordered a coffee. I asked the time.',es:'Pedí un café.'}},
  {t:{ko:'llevar vs traer',en:'llevar vs traer',es:'llevar vs traer'},d:{ko:'<b>llevar</b> = 여기 → 저기 (가져가다). <b>traer</b> = 저기 → 여기 (가져오다). llevar + 시간 = ~한 지 되었다.',en:'llevar = take away; traer = bring here.',es:'llevar = de aquí a allí; traer = hacia aquí.'},ex:'Llevo el paraguas al trabajo. Tráeme un vaso de agua. Llevo dos años aquí.',tr:{ko:'우산을 직장에 가져간다. 물 한 잔 가져다줘. 여기 산 지 2년 됐다.',en:'Bring me a glass of water. I have been here two years.',es:'Tráeme agua.'}},
  {t:{ko:'ir vs venir',en:'ir vs venir',es:'ir vs venir'},d:{ko:'스페인어 venir는 <b>말하는 사람 쪽으로</b>만 옵니다. 영어 "I am coming!"을 Voy!라고 해야 하는 지점.',en:'Spanish venir only moves toward the speaker. "I am coming" = ¡Voy!',es:'venir solo hacia el hablante. "Ya voy".'},ex:'—¿Vienes a mi casa? —Sí, voy ahora.',tr:{ko:'우리 집에 올래? — 응, 지금 갈게.',en:'Are you coming to my place? — Yes, I am on my way.',es:'—¿Vienes? —Sí, voy.'}},
  {t:{ko:'quedar vs quedarse vs quedar en',en:'quedar / quedarse',es:'quedar / quedarse'},d:{ko:'quedar = 만나기로 하다·남다·어울리다 / quedarse = 머물다 / quedar en = 합의하다',en:'quedar = arrange to meet, be left, suit; quedarse = stay.',es:'quedar = citarse, sobrar; quedarse = permanecer.'},ex:'Quedamos a las 8. Me quedo en casa. Te queda bien ese abrigo.',tr:{ko:'8시에 만나자. 집에 있을게. 그 코트 잘 어울려.',en:'Let us meet at 8. I will stay home. That coat suits you.',es:'Quedamos a las 8.'}},
  {t:{ko:'tomar vs llevar (타다·데려가다)',en:'tomar vs llevar',es:'tomar vs llevar'},d:{ko:'tomar = 마시다·(교통수단을) 타다·(약을) 먹다 / 사람을 데려다주는 건 llevar.',en:'tomar = drink, take transport; llevar someone = drive them.',es:'tomar un taxi; llevar a alguien.'},ex:'Tomé un taxi. Te llevo a casa.',tr:{ko:'택시를 탔다. 집에 데려다줄게.',en:'I took a taxi. I will take you home.',es:'Tomé un taxi. Te llevo.'}},
  {t:{ko:'기타 자주 쓰는 짝',en:'More pairs',es:'Más parejas'},d:{ko:'oír(들리다) / escuchar(듣다·경청) · mirar(보다) / ver(보이다) · dejar(남겨두다·그만두다) / salir(나가다) · poder(할 수 있다) / saber(방법을 안다) · deber(의무) / tener que(필요) · ponerse(되다, 일시적) / volverse(되다, 변화) / hacerse(되다, 노력) / llegar a ser(마침내 되다)',
     en:'oír/escuchar, mirar/ver, dejar/salir, poder/saber, deber/tener que, ponerse/volverse/hacerse',es:'oír/escuchar, mirar/ver, poder/saber, ponerse/volverse/hacerse'},
   ex:'Oigo un ruido pero no escucho la radio. Se puso rojo. Se hizo médico.',tr:{ko:'소리가 들리지만 라디오를 듣고 있진 않다. 얼굴이 빨개졌다. 의사가 되었다.',en:'I hear a noise but am not listening to the radio.',es:'Oigo un ruido.'}}
 ],
 table:{head:{ko:['영어','스페인어 A','스페인어 B'],en:['English','A','B'],es:['Inglés','A','B']},
  rows:[
   ['to ask','pedir (물건 요청)','preguntar (질문)'],
   ['to take / bring','llevar (가져가다)','traer (가져오다)'],
   ['to come','venir (화자 쪽으로)','ir (그 외 방향)'],
   ['to know','saber (사실)','conocer (경험)'],
   ['to hear / listen','oír (들리다)','escuchar (경청)'],
   ['to look / see','mirar (의도적)','ver (지각)'],
   ['to become','ponerse(감정·일시) / volverse(성격변화)','hacerse(노력) / llegar a ser(결국)'],
   ['to leave','salir (나가다)','dejar (두고 가다) / irse (떠나다)'],
   ['to spend','gastar (돈)','pasar (시간)'],
   ['to try','intentar / tratar de (시도)','probar (맛보다·시험해보다)']
  ]},
 traps:[
  {bad:'Pregunté un café.',good:'Pedí un café.',why:{ko:'물건 요청 → pedir.',en:'Requesting a thing → pedir.',es:'Solicitar algo → pedir.'}},
  {bad:'(전화로) ¡Vengo ahora!',good:'¡Voy ahora!',why:{ko:'상대 쪽으로 이동 = ir.',en:'Moving toward the other person → ir.',es:'Hacia el oyente → ir.'}},
  {bad:'Traigo el libro a la biblioteca mañana.',good:'Llevo el libro a la biblioteca mañana.',why:{ko:'여기서 저기로 → llevar.',en:'Away from here → llevar.',es:'De aquí a allí → llevar.'}},
  {bad:'Gasté tres horas allí.',good:'Pasé tres horas allí.',why:{ko:'시간은 pasar.',en:'Time → pasar.',es:'El tiempo se pasa.'}}
 ],
 tip:{ko:'🔑 머릿속에 <b>내 위치를 점으로 찍고 화살표</b>를 그리세요. 화살표가 나에게서 멀어지면 llevar/ir, 나에게 다가오면 traer/venir.',
      en:'🔑 Draw yourself as a dot and add an arrow: away → llevar/ir; toward → traer/venir.',
      es:'🔑 Dibuja una flecha: lejos → llevar/ir; hacia ti → traer/venir.'},
 quiz:[
  {q:'Voy a ___ permiso al jefe.',opts:['pedir','preguntar'],a:0,exp:{ko:'허락 요청 → pedir.',en:'Permission → pedir.',es:'Permiso → pedir.'}},
  {q:'¿Puedes ___ me la sal, por favor? (식탁에서)',opts:['traer','llevar'],a:0,exp:{ko:'내 쪽으로 → traer.',en:'Toward me → traer.',es:'Hacia mí → traer.'}},
  {q:'—¡La cena está lista! —¡Ya ___!',opts:['voy','vengo'],a:0,exp:{ko:'상대 쪽으로 이동 → voy.',en:'Toward the other → voy.',es:'Ya voy.'}},
  {q:'___ dos horas esperando el autobús.',opts:['Llevo','Traigo'],a:0,exp:{ko:'llevar + 시간 = ~한 지 되었다.',en:'llevar + time.',es:'llevar + tiempo.'}},
  {q:'Después del accidente ___ muy nervioso.',opts:['se puso','se hizo'],a:0,exp:{ko:'일시적 감정 변화 → ponerse.',en:'Temporary emotion → ponerse.',es:'Emoción pasajera → ponerse.'}},
  {q:'___ la televisión pero no la ___.',opts:['Oigo / escucho','Escucho / oigo'],a:0,exp:{ko:'oír=들리다, escuchar=경청.',en:'oír = hear; escuchar = listen.',es:'oír vs escuchar.'}}
 ]
},
{
 id:'hay-tener-estar', cat:'verb', level:'A1', rank:11,
 title:{ko:'hay vs estar vs tener', en:'hay / estar / tener', es:'hay / estar / tener'},
 sub:{ko:'"있다"의 세 얼굴', en:'Three ways to say "there is / have"', es:'Tres formas de "haber/estar/tener"'},
 key:{ko:'hay = <b>존재</b>(처음 언급, 불특정) · estar = <b>위치</b>(이미 아는 특정한 것) · tener = <b>소유·신체상태</b>',
      en:'hay = existence (new, indefinite) · estar = location (known, definite) · tener = possession',
      es:'hay = existencia · estar = ubicación de algo conocido · tener = posesión'},
 why:{ko:'한국어 "있다"가 셋을 모두 덮습니다. 특히 <b>관사</b>가 결정적 힌트인데(un/una/숫자/∅ → hay, el/la/소유격 → estar) 이를 모르면 계속 틀립니다.',
      en:'The article is the giveaway: indefinite → hay; definite → estar.',
      es:'El artículo es la clave: indefinido → hay; definido → estar.'},
 rules:[
  {t:{ko:'hay — 불변·단수형만',en:'hay never changes',es:'hay es invariable'},d:{ko:'복수여도 hay. 과거는 había(불완료)/hubo(단순과거), 미래 habrá, 접속법 haya.',en:'Always hay, even with plurals. Past: había / hubo.',es:'Siempre hay; pasado había/hubo.'},ex:'Hay un libro. Hay tres libros. Había mucha gente.',tr:{ko:'책 한 권이 있다. 책 세 권이 있다. 사람이 많았다.',en:'There is a book. There were many people.',es:'Hay un libro. Había mucha gente.'}},
  {t:{ko:'estar — 특정한 것의 위치',en:'estar for known things',es:'estar con lo conocido'},d:{ko:'el/la/mi/este + 명사 → estar.',en:'With el/la/mi/este → estar.',es:'Con el/la/mi → estar.'},ex:'¿Dónde está el libro? Mis llaves están aquí.',tr:{ko:'그 책 어디 있어? 내 열쇠는 여기 있다.',en:'Where is the book? My keys are here.',es:'¿Dónde está el libro?'}},
  {t:{ko:'tener — 소유와 신체·감각 상태',en:'tener for states',es:'tener para estados'},d:{ko:'영어 be + 형용사를 스페인어는 tener + 명사로 표현: tener hambre/sed/frío/calor/sueño/miedo/prisa/razón/suerte/ganas de/cuidado/X años',en:'tener hambre, frío, sueño, miedo, prisa, razón, X años.',es:'tener hambre, frío, sueño, miedo, razón, X años.'},ex:'Tengo hambre y sueño. Tiene veinte años. Tienes razón.',tr:{ko:'배고프고 졸리다. 그는 스무 살이다. 네가 맞다.',en:'I am hungry and sleepy. He is twenty. You are right.',es:'Tengo hambre. Tiene veinte años.'}},
  {t:{ko:'hay que vs tener que vs deber',en:'hay que / tener que / deber',es:'hay que / tener que / deber'},d:{ko:'hay que + 원형 = (일반적으로) ~해야 한다(주어 없음) · tener que = (특정인이) ~해야 한다 · deber = 도덕적 의무',en:'hay que = one must; tener que = X must; deber = ought to.',es:'hay que (general); tener que (personal); deber (moral).'},ex:'Hay que estudiar. Tengo que estudiar. Debes ayudarla.',tr:{ko:'공부해야 한다(일반). 나는 공부해야 한다. 그녀를 도와야 한다.',en:'One must study. I have to study.',es:'Hay que estudiar.'}}
 ],
 table:{head:{ko:['한국어','스페인어','이유'],en:['Idea','Spanish','Why'],es:['Idea','Español','Por qué']},
  rows:[
   ['방에 침대가 있다','Hay una cama en la habitación','불특정, 처음 언급'],
   ['침대는 창가에 있다','La cama está junto a la ventana','특정한 그 침대'],
   ['나는 차가 있다','Tengo un coche','소유'],
   ['나는 춥다','Tengo frío','신체상태 = tener'],
   ['물이 차갑다','El agua está fría','사물의 상태 = estar'],
   ['조심해야 한다','Hay que tener cuidado','일반 의무']
  ]},
 traps:[
  {bad:'Están tres personas en la sala.',good:'Hay tres personas en la sala.',why:{ko:'숫자 = 불특정 → hay.',en:'Numbers → hay.',es:'Números → hay.'}},
  {bad:'Hay el libro en la mesa.',good:'El libro está en la mesa.',why:{ko:'정관사 뒤에는 hay 불가.',en:'hay cannot take a definite article.',es:'hay no admite artículo definido.'}},
  {bad:'Habían muchas personas.',good:'Había muchas personas.',why:{ko:'hay의 과거는 복수형이 없습니다(구어에서는 들리지만 비표준).',en:'había stays singular.',es:'había es invariable.'}},
  {bad:'Soy frío. / Estoy frío.',good:'Tengo frío.',why:{ko:'사람이 추위를 느끼면 tener frío. (Estoy frío = 몸이 차갑다/냉정하다)',en:'A person feeling cold → tener frío.',es:'La persona tiene frío.'}},
  {bad:'Soy 20 años.',good:'Tengo 20 años.',why:{ko:'나이는 tener.',en:'Age → tener.',es:'La edad con tener.'}}
 ],
 tip:{ko:'🔑 명사 앞의 관사를 먼저 보세요. <b>un/una/dos/mucho/∅ → hay</b>, <b>el/la/mi/este → estar</b>. 이 한 가지 체크로 90%가 해결됩니다.',
      en:'🔑 Look at the article: indefinite → hay; definite → estar. That solves 90%.',
      es:'🔑 Mira el artículo: indefinido → hay; definido → estar.'},
 quiz:[
  {q:'___ mucha gente en la plaza.',opts:['Hay','Está','Están'],a:0,exp:{ko:'불특정 존재 → hay.',en:'Indefinite existence → hay.',es:'Existencia → hay.'}},
  {q:'¿Dónde ___ mi móvil?',opts:['está','hay','tiene'],a:0,exp:{ko:'내 휴대폰(특정) → estar.',en:'Known item → estar.',es:'Objeto conocido → estar.'}},
  {q:'___ mucho calor hoy, ¿no? (날씨)',opts:['Hace','Tiene','Está'],a:0,exp:{ko:'날씨는 hacer calor. 사람은 tener calor.',en:'Weather → hacer calor.',es:'El tiempo → hace calor.'}},
  {q:'Mi hija ___ ocho años.',opts:['tiene','es','está'],a:0,exp:{ko:'나이 → tener.',en:'Age → tener.',es:'Edad → tener.'}},
  {q:'___ estudiar más si quieres aprobar. (너는)',opts:['Tienes que','Hay que','Debes de'],a:0,exp:{ko:'특정인 주어 → tener que.',en:'Specific subject → tener que.',es:'Sujeto concreto → tener que.'}}
 ]
},
{
 id:'muy-mucho', cat:'adv', level:'A1~A2', rank:12,
 title:{ko:'muy vs mucho (+ tan/tanto)', en:'muy vs mucho', es:'muy vs mucho'},
 sub:{ko:'"매우"와 "많이"의 자리', en:'"very" vs "a lot"', es:'"muy" y "mucho"'},
 key:{ko:'muy = <b>형용사·부사를 수식</b>(불변) · mucho = <b>명사·동사를 수식</b>(명사 앞에서는 성·수 변화)',
      en:'muy modifies adjectives and adverbs (invariable). mucho modifies nouns and verbs (agrees before nouns).',
      es:'muy ante adjetivos y adverbios; mucho ante sustantivos y verbos.'},
 why:{ko:'한국어 "아주 많이"가 한 덩어리로 느껴져 <i>muy mucho</i>라는 틀린 형태를 만들기 쉽습니다. 또 명사 앞의 mucho는 muchos/mucha/muchas로 변하는데 이걸 놓치기 쉽습니다.',
      en:'Learners produce "muy mucho", which does not exist, and forget mucho agrees before nouns.',
      es:'"muy mucho" no existe; mucho concuerda ante sustantivos.'},
 rules:[
  {t:{ko:'muy + 형용사 / 부사',en:'muy + adj/adv',es:'muy + adjetivo'},d:{ko:'절대 변하지 않습니다.',en:'Never changes form.',es:'Invariable.'},ex:'muy alto, muy cansada, muy bien, muy rápido',tr:{ko:'아주 키 큰, 아주 피곤한, 아주 좋게',en:'very tall, very tired, very well',es:'muy alto, muy bien'}},
  {t:{ko:'mucho + 명사 (성·수 일치)',en:'mucho + noun (agrees)',es:'mucho + sustantivo'},d:{ko:'mucho dinero / mucha agua / muchos libros / muchas casas',en:'mucho dinero, mucha agua, muchos libros.',es:'mucho dinero, mucha agua.'},ex:'Tengo mucho trabajo y muchas reuniones.',tr:{ko:'일이 많고 회의도 많다.',en:'I have a lot of work and many meetings.',es:'Tengo mucho trabajo.'}},
  {t:{ko:'동사 + mucho (불변)',en:'verb + mucho',es:'verbo + mucho'},d:{ko:'동사를 수식할 때는 항상 mucho.',en:'Always mucho after a verb.',es:'Siempre mucho tras el verbo.'},ex:'Trabajo mucho. Me gusta mucho. Llueve mucho.',tr:{ko:'많이 일한다. 아주 좋아한다. 비가 많이 온다.',en:'I work a lot. I like it a lot.',es:'Trabajo mucho.'}},
  {t:{ko:'예외: mucho + 특정 형용사',en:'Exception: mucho + 4 adjectives',es:'Excepción'},d:{ko:'mejor, peor, mayor, menor 앞에서는 muy가 아니라 mucho. (muy mejor ✗)',en:'Before mejor/peor/mayor/menor use mucho.',es:'Ante mejor, peor, mayor, menor → mucho.'},ex:'Este es mucho mejor. Es mucho peor de lo que pensaba.',tr:{ko:'이게 훨씬 낫다. 생각보다 훨씬 나쁘다.',en:'This is much better.',es:'Es mucho mejor.'}},
  {t:{ko:'tan vs tanto (같은 원리)',en:'tan vs tanto',es:'tan vs tanto'},d:{ko:'tan + 형용사/부사 (그렇게 ~한) · tanto + 명사(일치) / 동사 뒤. 비교: tan... como / tanto... como',en:'tan + adj; tanto + noun/verb. tan…como / tanto…como.',es:'tan + adjetivo; tanto + sustantivo.'},ex:'No es tan fácil. No tengo tanto tiempo. Es tan alto como tú.',tr:{ko:'그렇게 쉽지 않다. 그렇게 시간이 많지 않다. 너만큼 키가 크다.',en:'It is not that easy. He is as tall as you.',es:'No es tan fácil.'}},
  {t:{ko:'qué vs cuánto 감탄문',en:'Exclamations',es:'Exclamaciones'},d:{ko:'¡Qué + 형용사! / ¡Cuánto + 명사! / ¡Qué + 명사 + tan/más + 형용사!',en:'¡Qué bonito! ¡Cuánta gente!',es:'¡Qué bonito! ¡Cuánta gente!'},ex:'¡Qué bonito! ¡Cuánta gente! ¡Qué día tan largo!',tr:{ko:'정말 예쁘다! 사람이 정말 많네! 정말 긴 하루야!',en:'How pretty! So many people!',es:'¡Qué bonito!'}}
 ],
 table:{head:{ko:['틀림','맞음','이유'],en:['Wrong','Right','Why'],es:['Mal','Bien','Por qué']},
  rows:[
   ['muy mucho ✗','muchísimo','"아주 많이"는 -ísimo로'],
   ['mucho bien ✗','muy bien','bien은 부사'],
   ['muy dinero ✗','mucho dinero','dinero는 명사'],
   ['muy mejor ✗','mucho mejor','mejor 앞은 mucho'],
   ['Trabajo muy ✗','Trabajo mucho','동사 수식'],
   ['tanto grande ✗','tan grande','형용사 앞은 tan']
  ]},
 traps:[
  {bad:'Estoy muy mucho cansado.',good:'Estoy muy cansado. / Estoy cansadísimo.',why:{ko:'muy와 mucho를 겹쳐 쓸 수 없습니다.',en:'They never stack.',es:'No se combinan.'}},
  {bad:'Hay muy personas.',good:'Hay muchas personas.',why:{ko:'명사 앞 → muchas(여성 복수).',en:'Before a noun → muchas.',es:'Ante sustantivo → muchas.'}},
  {bad:'Me gusta muy.',good:'Me gusta mucho.',why:{ko:'동사 뒤 → mucho.',en:'After a verb → mucho.',es:'Tras verbo → mucho.'}},
  {bad:'Es tanto difícil.',good:'Es tan difícil.',why:{ko:'형용사 앞 → tan.',en:'Before an adjective → tan.',es:'Ante adjetivo → tan.'}}
 ],
 tip:{ko:'🔑 꾸미려는 단어의 <b>품사</b>를 먼저 확인하세요. 형용사·부사 → muy/tan. 명사·동사 → mucho/tanto. 강조를 더 하고 싶으면 <b>-ísimo</b>(guapísimo, muchísimo).',
      en:'🔑 Check the part of speech: adj/adv → muy; noun/verb → mucho. For extra force use -ísimo.',
      es:'🔑 Mira la categoría: adjetivo → muy; sustantivo → mucho.'},
 quiz:[
  {q:'Hoy tengo ___ trabajo.',opts:['mucho','muy'],a:0,exp:{ko:'trabajo = 명사.',en:'Noun → mucho.',es:'Sustantivo → mucho.'}},
  {q:'La película fue ___ interesante.',opts:['muy','mucha'],a:0,exp:{ko:'형용사 → muy.',en:'Adjective → muy.',es:'Adjetivo → muy.'}},
  {q:'Este hotel es ___ mejor que el otro.',opts:['mucho','muy'],a:0,exp:{ko:'mejor 앞 → mucho.',en:'Before mejor → mucho.',es:'Ante mejor → mucho.'}},
  {q:'No había ___ gente en el concierto.',opts:['mucha','muy','mucho'],a:0,exp:{ko:'gente = 여성 단수 → mucha.',en:'gente is feminine → mucha.',es:'gente femenino → mucha.'}},
  {q:'¡No corras ___ rápido!',opts:['tan','tanto'],a:0,exp:{ko:'부사 rápido 앞 → tan.',en:'Before an adverb → tan.',es:'Ante adverbio → tan.'}}
 ]
},
{
 id:'perfecto', cat:'verb', level:'A2~B1', rank:13,
 title:{ko:'he hecho vs hice', en:'Present perfect vs preterite', es:'He hecho vs hice'},
 sub:{ko:'현재완료와 단순과거의 경계 (지역차 포함)', en:'Including regional differences', es:'Con diferencias regionales'},
 key:{ko:'현재완료(he hecho) = <b>현재와 연결된 과거</b>(오늘·이번 주·아직) · 단순과거(hice) = <b>닫힌 과거</b>(어제·작년)',
      en:'Present perfect = past connected to now. Preterite = closed past.',
      es:'Pretérito perfecto = pasado conectado al presente; indefinido = pasado cerrado.'},
 why:{ko:'<b>지역차가 결정적입니다.</b> 스페인(특히 중부)은 현재완료를 매우 자주 쓰지만, 중남미 대부분(멕시코·아르헨티나 등)은 같은 상황에서 단순과거를 씁니다. 시험(DELE)은 스페인 기준이고, 중남미 드라마는 다르게 들리는 이유가 여기 있습니다.',
      en:'Region matters: Spain uses the present perfect far more; most of Latin America uses the preterite in the same contexts.',
      es:'En España se usa mucho más el perfecto; en Hispanoamérica, el indefinido.'},
 rules:[
  {t:{ko:'현재완료의 시간 표현',en:'Perfect time markers',es:'Marcadores del perfecto'},d:{ko:'hoy, esta mañana, esta semana, este mes, este año, últimamente, ya, todavía no, nunca, alguna vez, hace un rato',en:'hoy, esta semana, ya, todavía no, nunca, alguna vez',es:'hoy, esta semana, ya, todavía no, nunca'},ex:'Hoy he desayunado tarde. ¿Has estado alguna vez en Perú?',tr:{ko:'오늘 늦게 아침을 먹었다. 페루에 가본 적 있어?',en:'Today I had breakfast late. Have you ever been to Peru?',es:'Hoy he desayunado tarde.'}},
  {t:{ko:'단순과거의 시간 표현',en:'Preterite markers',es:'Marcadores del indefinido'},d:{ko:'ayer, anoche, la semana pasada, el año pasado, en 2019, hace dos días, entonces',en:'ayer, anoche, el año pasado, en 2019, hace dos días',es:'ayer, anoche, el año pasado, hace dos días'},ex:'Ayer vi a Marta. En 2019 viví en Chile.',tr:{ko:'어제 마르타를 봤다. 2019년에 칠레에 살았다.',en:'Yesterday I saw Marta.',es:'Ayer vi a Marta.'}},
  {t:{ko:'형태: haber + 과거분사',en:'Form: haber + participle',es:'Forma: haber + participio'},d:{ko:'he, has, ha, hemos, habéis, han + -ado/-ido. 둘을 <b>절대 분리하지 않습니다</b>(He no comido ✗ → No he comido).',en:'Never split haber and the participle.',es:'No se separan haber y participio.'},ex:'No he comido todavía. Ya lo hemos terminado.',tr:{ko:'아직 안 먹었다. 이미 끝냈다.',en:'I have not eaten yet.',es:'No he comido todavía.'}},
  {t:{ko:'불규칙 과거분사',en:'Irregular participles',es:'Participios irregulares'},d:{ko:'hacer→hecho, decir→dicho, ver→visto, escribir→escrito, poner→puesto, volver→vuelto, abrir→abierto, romper→roto, morir→muerto, cubrir→cubierto, resolver→resuelto',en:'hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto',es:'hecho, dicho, visto, escrito, puesto, abierto, roto'},ex:'He escrito tres cartas y he roto una.',tr:{ko:'편지 세 통을 썼고 한 통은 찢었다.',en:'I have written three letters.',es:'He escrito tres cartas.'}},
  {t:{ko:'대과거 (había hecho)',en:'Pluperfect',es:'Pluscuamperfecto'},d:{ko:'과거의 어떤 시점보다 <b>더 먼저</b> 일어난 일. había + 과거분사.',en:'Something before another past point.',es:'Anterior a otro pasado.'},ex:'Cuando llegué, ya se habían ido.',tr:{ko:'내가 도착했을 때 그들은 이미 떠나 있었다.',en:'When I arrived they had already left.',es:'Ya se habían ido.'}}
 ],
 table:{head:{ko:['상황','스페인','중남미'],en:['Situation','Spain','Latin America'],es:['Situación','España','Hispanoamérica']},
  rows:[
   ['오늘 아침 일어난 일','Hoy he comido tarde','Hoy comí tarde'],
   ['조금 전','Lo he visto hace un rato','Lo vi hace un rato'],
   ['경험 (가본 적)','¿Has ido a España?','¿Fuiste / Has ido a España?'],
   ['아직 안 한 일','Todavía no he terminado','Todavía no termino / no he terminado'],
   ['어제','Ayer fui (둘 다 동일)','Ayer fui'],
   ['시험(DELE) 기준','현재완료 구분 엄격','—']
  ]},
 traps:[
  {bad:'Ayer he visto a Juan.',good:'Ayer vi a Juan.',why:{ko:'ayer는 닫힌 과거 → 단순과거.',en:'ayer → preterite.',es:'ayer → indefinido.'}},
  {bad:'Hoy fui al médico. (스페인 기준)',good:'Hoy he ido al médico.',why:{ko:'hoy는 현재 구간 → 현재완료. (중남미에서는 fui가 자연스러움)',en:'In Spain hoy takes the perfect.',es:'En España, hoy → perfecto.'}},
  {bad:'He no terminado.',good:'No he terminado.',why:{ko:'부정어는 haber 앞.',en:'no goes before haber.',es:'no antes de haber.'}},
  {bad:'He escribido una carta.',good:'He escrito una carta.',why:{ko:'불규칙 과거분사.',en:'Irregular participle.',es:'Participio irregular.'}}
 ],
 tip:{ko:'🔑 문장에 시간 표현이 있으면 그것만 보세요. <b>"이번/오늘/아직/벌써"</b> → 현재완료, <b>"어제/지난/N년에"</b> → 단순과거. 시간 표현이 없으면 "지금 이 순간과 관계가 있나?"를 물어보세요.',
      en:'🔑 Let the time expression decide. No time marker? Ask whether it still matters now.',
      es:'🔑 Deja que el marcador temporal decida.'},
 quiz:[
  {q:'Esta semana ___ (trabajar, yo) muchísimo. (스페인)',opts:['he trabajado','trabajé'],a:0,exp:{ko:'esta semana = 아직 끝나지 않은 구간.',en:'Unfinished period.',es:'Periodo no acabado.'}},
  {q:'El año pasado ___ (viajar, nosotros) a Japón.',opts:['viajamos','hemos viajado'],a:0,exp:{ko:'닫힌 과거.',en:'Closed past.',es:'Pasado cerrado.'}},
  {q:'¿___ (ver, tú) alguna vez una corrida de toros?',opts:['Has visto','Viste'],a:0,exp:{ko:'alguna vez = 경험 → 현재완료.',en:'Experience → perfect.',es:'Experiencia → perfecto.'}},
  {q:'Cuando llegamos, la película ya ___ (empezar).',opts:['había empezado','ha empezado'],a:0,exp:{ko:'과거보다 더 먼저 → 대과거.',en:'Before another past → pluperfect.',es:'Pluscuamperfecto.'}},
  {q:'Todavía no ___ (hacer, yo) los deberes.',opts:['he hecho','hice'],a:0,exp:{ko:'todavía no → 현재완료.',en:'todavía no → perfect.',es:'todavía no → perfecto.'}}
 ]
},
{
 id:'condicional', cat:'verb', level:'B1~B2', rank:14,
 title:{ko:'조건문 si (가정법)', en:'If-clauses (si)', es:'Oraciones con si'},
 sub:{ko:'세 가지 유형과 금지된 조합', en:'Three types, one forbidden combo', es:'Tres tipos'},
 key:{ko:'si 절에는 <b>미래형과 조건법을 절대 쓰지 않습니다.</b> (Si tendré ✗ / Si tendría ✗)',
      en:'Never use the future or the conditional inside the si-clause.',
      es:'Nunca futuro ni condicional tras si.'},
 why:{ko:'영어 "If I would have..."의 영향과, 한국어 "~라면"이 시제를 구분하지 않는 점 때문에 si 절에 조건법을 넣는 실수가 매우 흔합니다. 원어민은 이 실수를 바로 알아챕니다.',
      en:'Transfer from English "If I would…" makes learners put the conditional after si, which natives notice instantly.',
      es:'El calco de "if I would" lleva al error.'},
 rules:[
  {t:{ko:'제1형 — 현실적 조건 (일어날 수 있다)',en:'Type 1 — real',es:'Tipo 1 — real'},d:{ko:'Si + <b>현재(직설법)</b>, 현재 / 미래 / 명령.',en:'Si + present indicative, then present/future/imperative.',es:'Si + presente, → presente/futuro/imperativo.'},ex:'Si tengo tiempo, te llamo. Si llueve, no saldremos. Si puedes, ven.',tr:{ko:'시간 있으면 전화할게. 비 오면 안 나갈 거야. 가능하면 와.',en:'If I have time, I will call you.',es:'Si tengo tiempo, te llamo.'}},
  {t:{ko:'제2형 — 비현실적 현재/미래 (가능성 낮음)',en:'Type 2 — unlikely',es:'Tipo 2 — improbable'},d:{ko:'Si + <b>접속법 불완료</b>(-ara/-iera), <b>조건법</b>(-ría).',en:'Si + imperfect subjunctive, then conditional.',es:'Si + imperfecto de subjuntivo → condicional.'},ex:'Si tuviera dinero, viajaría por el mundo. Si fuera tú, lo haría.',tr:{ko:'돈이 있으면 세계를 여행할 텐데. 내가 너라면 그걸 할 거야.',en:'If I had money, I would travel the world.',es:'Si tuviera dinero, viajaría.'}},
  {t:{ko:'제3형 — 과거의 후회 (이미 불가능)',en:'Type 3 — past regret',es:'Tipo 3 — pasado irreal'},d:{ko:'Si + <b>접속법 대과거</b>(hubiera + 과거분사), <b>조건법 완료</b>(habría + 과거분사).',en:'Si + pluperfect subjunctive, then conditional perfect.',es:'Si + hubiera + participio → habría + participio.'},ex:'Si hubiera estudiado, habría aprobado.',tr:{ko:'공부했더라면 합격했을 텐데.',en:'If I had studied, I would have passed.',es:'Si hubiera estudiado, habría aprobado.'}},
  {t:{ko:'-ra / -se 형은 자유롭게 교체',en:'-ra and -se are interchangeable',es:'-ra y -se son intercambiables'},d:{ko:'tuviera = tuviese, fuera = fuese. 의미 차이 없음(단, 조건법 대체로 쓰이는 hubiera가 더 흔함).',en:'tuviera = tuviese, no meaning difference.',es:'Sin diferencia de significado.'},ex:'Si fuera / fuese rico...',tr:{ko:'내가 부자라면...',en:'If I were rich…',es:'Si fuera rico...'}},
  {t:{ko:'다른 가정 표현',en:'Other conditional phrases',es:'Otras expresiones'},d:{ko:'como si + 접속법(마치 ~처럼) · ojalá + 접속법 · a menos que / siempre que / con tal de que + 접속법 · de haber + 과거분사(문어)',en:'como si, ojalá, a menos que, siempre que + subjunctive.',es:'como si, ojalá, a menos que + subjuntivo.'},ex:'Habla como si fuera el jefe. Ojalá hubiera venido.',tr:{ko:'그는 마치 사장인 것처럼 말한다. 그가 왔더라면 좋았을 텐데.',en:'He talks as if he were the boss.',es:'Habla como si fuera el jefe.'}}
 ],
 table:{head:{ko:['유형','si 절','주절','뜻'],en:['Type','si clause','Main','Meaning'],es:['Tipo','si','Principal','Sentido']},
  rows:[
   ['1 현실','presente','presente / futuro / imperativo','충분히 가능'],
   ['2 비현실(현재)','imperfecto de subjuntivo','condicional','가능성 낮음·상상'],
   ['3 비현실(과거)','pluscuamperfecto de subj.','condicional compuesto','이미 늦음·후회'],
   ['혼합','hubiera + participio','condicional simple','과거 원인 → 현재 결과']
  ]},
 traps:[
  {bad:'Si tendré tiempo, te llamo.',good:'Si tengo tiempo, te llamo.',why:{ko:'si 뒤에 미래형 금지.',en:'No future after si.',es:'Nunca futuro tras si.'}},
  {bad:'Si tendría dinero, viajaría.',good:'Si tuviera dinero, viajaría.',why:{ko:'si 뒤에 조건법 금지 → 접속법 불완료.',en:'No conditional after si.',es:'Nunca condicional tras si.'}},
  {bad:'Si hubiera estudiado, hubiera aprobado. (구어로는 들림)',good:'Si hubiera estudiado, habría aprobado.',why:{ko:'문법적으로는 habría가 정석. 구어에서 hubiera도 쓰이지만 시험에서는 habría.',en:'habría is the standard main-clause form.',es:'La norma: habría.'}},
  {bad:'Si fuera tú... / Si sería tú...',good:'Si yo fuera tú...',why:{ko:'"내가 너라면" 고정 표현.',en:'Fixed phrase.',es:'Expresión fija.'}}
 ],
 tip:{ko:'🔑 조건법(-ría)은 <b>주절에만</b> 삽니다. si 뒤에 -ría가 보이면 100% 틀립니다. 이 한 가지만 기억해도 가장 흔한 실수를 막습니다.',
      en:'🔑 The conditional lives only in the main clause. A -ría after si is always wrong.',
      es:'🔑 El condicional solo en la principal.'},
 quiz:[
  {q:'Si ___ (poder, yo), te ayudaría ahora mismo.',opts:['pudiera','podría','puedo'],a:0,exp:{ko:'제2형: si + 접속법 불완료.',en:'Type 2.',es:'Tipo 2.'}},
  {q:'Si ___ (llover) mañana, cancelamos el picnic.',opts:['llueve','lloverá','lloviera'],a:0,exp:{ko:'제1형: si + 현재.',en:'Type 1.',es:'Tipo 1.'}},
  {q:'Si lo ___ (saber, yo) antes, no habría venido.',opts:['hubiera sabido','sabría','supiera'],a:0,exp:{ko:'제3형: 과거의 후회.',en:'Type 3.',es:'Tipo 3.'}},
  {q:'Me mira como si no me ___ (conocer).',opts:['conociera','conoce','conocería'],a:0,exp:{ko:'como si + 접속법.',en:'como si + subjunctive.',es:'como si + subjuntivo.'}},
  {q:'Si hubiéramos salido antes, ahora ___ (estar) en casa.',opts:['estaríamos','habríamos estado','estuviéramos'],a:0,exp:{ko:'혼합형: 과거 원인 → 현재 결과(조건법 단순).',en:'Mixed conditional.',es:'Condicional mixto.'}}
 ]
},
{
 id:'articulos', cat:'noun', level:'A1~B1', rank:15,
 title:{ko:'관사 el / un / 무관사', en:'Articles el / un / none', es:'Artículos'},
 sub:{ko:'영어·한국어와 어긋나는 지점들', en:'Where Spanish differs', es:'Donde el español difiere'},
 key:{ko:'스페인어는 영어보다 <b>정관사를 훨씬 많이</b> 씁니다. 일반론·신체·요일·시간·언어에 모두 el/la가 붙습니다.',
      en:'Spanish uses the definite article far more than English: generalizations, body parts, days, times, languages.',
      es:'El español usa más el artículo definido.'},
 why:{ko:'한국어에는 관사가 없고, 영어식 직역을 하면 관사가 사라지거나 반대로 과하게 붙습니다. 특히 "일반적인 ~은"을 표현할 때 영어는 무관사인데 스페인어는 정관사입니다.',
      en:'Korean has no articles; English drops them in generalizations where Spanish keeps them.',
      es:'En generalizaciones el inglés omite el artículo, el español no.'},
 rules:[
  {t:{ko:'일반론 → 정관사 필수',en:'Generalizations take el/la',es:'Generalizaciones con artículo'},d:{ko:'"~라는 것은 일반적으로" → 복수 + 정관사.',en:'"X in general" → definite article.',es:'"X en general" → artículo.'},ex:'Me gusta el café. Los perros son leales. El dinero no da la felicidad.',tr:{ko:'커피를 좋아한다. 개들은 충성스럽다. 돈이 행복을 주지 않는다.',en:'I like coffee. Dogs are loyal.',es:'Me gusta el café.'}},
  {t:{ko:'신체·옷 → 소유격 대신 정관사',en:'Body parts: article, not possessive',es:'Partes del cuerpo con artículo'},d:{ko:'영어 my hands → las manos. 누구의 것인지는 대명사가 알려줍니다.',en:'Spanish says "las manos", the pronoun shows whose.',es:'El pronombre indica el poseedor.'},ex:'Me duele la cabeza. Se lavó las manos. Ponte el abrigo.',tr:{ko:'머리가 아프다. 그는 손을 씻었다. 코트를 입어.',en:'My head hurts. He washed his hands.',es:'Me duele la cabeza.'}},
  {t:{ko:'직업·국적·종교 → 무관사',en:'No article with professions',es:'Sin artículo: profesiones'},d:{ko:'ser + 직업/국적/종교에는 관사를 쓰지 않습니다. 단, 형용사가 붙으면 un이 등장.',en:'ser + profession: no article, unless modified.',es:'ser + profesión: sin artículo.'},ex:'Soy profesor. Es coreana. Es un profesor excelente.',tr:{ko:'나는 교사다. 그녀는 한국인이다. 그는 훌륭한 교사다.',en:'I am a teacher. She is Korean.',es:'Soy profesor.'}},
  {t:{ko:'시간·요일·날짜',en:'Time and days',es:'Horas y días'},d:{ko:'a las tres, el lunes(월요일에), los lunes(월요일마다). 단, hoy es lunes에는 무관사.',en:'a las tres, el lunes, los lunes; but "hoy es lunes".',es:'a las tres, el lunes, los lunes.'},ex:'Nos vemos el viernes a las seis. Los sábados descanso.',tr:{ko:'금요일 6시에 보자. 토요일마다 쉰다.',en:'See you Friday at six.',es:'El viernes a las seis.'}},
  {t:{ko:'언어·과목',en:'Languages',es:'Idiomas'},d:{ko:'El español es difícil. 단, hablar/estudiar/en 뒤에서는 생략 가능: Hablo español.',en:'El español es difícil; but Hablo español.',es:'El español es difícil; hablo español.'},ex:'El japonés me parece difícil, pero hablo coreano.',tr:{ko:'일본어는 어려워 보이지만 한국어는 한다.',en:'Japanese seems hard, but I speak Korean.',es:'El japonés es difícil.'}},
  {t:{ko:'무관사가 되는 경우',en:'When to drop it',es:'Cuándo omitirlo'},d:{ko:'otro/medio/tal/cien/mil 앞에 un을 쓰지 않음 · 추상·불특정 복수 목적어 · con/sin + 명사 · 양을 셀 수 없는 명사 목적어',en:'No un before otro, medio, tal, cien, mil.',es:'Sin un ante otro, medio, tal, cien, mil.'},ex:'Quiero otro café. Hace falta medio kilo. Busco trabajo. Sin problema.',tr:{ko:'커피 하나 더. 반 킬로 필요하다. 일자리를 찾는다.',en:'I want another coffee. Half a kilo.',es:'Quiero otro café.'}}
 ],
 table:{head:{ko:['한국어/영어','틀림','맞음'],en:['English','Wrong','Right'],es:['Inglés','Mal','Bien']},
  rows:[
   ['I like coffee','Me gusta café ✗','Me gusta el café'],
   ['Dogs are loyal','Perros son leales ✗','Los perros son leales'],
   ['My head hurts','Mi cabeza duele ✗','Me duele la cabeza'],
   ['I am a doctor','Soy un médico △','Soy médico'],
   ['another coffee','un otro café ✗','otro café'],
   ['See you Monday','Te veo lunes ✗','Te veo el lunes'],
   ['100 euros','un cien euros ✗','cien euros']
  ]},
 traps:[
  {bad:'Mi pierna duele.',good:'Me duele la pierna.',why:{ko:'신체 부위는 정관사 + 간접목적격.',en:'Article + IO pronoun.',es:'Artículo + pronombre.'}},
  {bad:'Soy un coreano.',good:'Soy coreano.',why:{ko:'국적은 무관사. (un을 붙이면 "한 한국인"이라는 다른 뉘앙스)',en:'Nationality: no article.',es:'Nacionalidad sin artículo.'}},
  {bad:'Voy a comprar un otro libro.',good:'Voy a comprar otro libro.',why:{ko:'otro 앞에는 un 금지.',en:'No un before otro.',es:'Sin un ante otro.'}},
  {bad:'Español es bonito.',good:'El español es bonito.',why:{ko:'주어로 쓰인 언어명은 정관사.',en:'Language as subject takes el.',es:'Idioma como sujeto: el.'}}
 ],
 tip:{ko:'🔑 "이 명사가 <b>종(種) 전체</b>를 말하는가?"라고 물어보세요. 그렇다면 정관사를 붙입니다. 반대로 ser 뒤에서 <b>신분</b>을 말할 때는 벗깁니다.',
      en:'🔑 Talking about the whole category? Add the article. Stating identity after ser? Drop it.',
      es:'🔑 ¿Hablas de la categoría entera? Artículo. ¿Identidad tras ser? Sin artículo.'},
 quiz:[
  {q:'___ niños necesitan dormir mucho. (일반론)',opts:['Los','∅','Unos'],a:0,exp:{ko:'일반론 → 정관사 복수.',en:'Generalization → los.',es:'Generalización → los.'}},
  {q:'Mi padre es ___ ingeniero.',opts:['∅','un','el'],a:0,exp:{ko:'직업 → 무관사.',en:'Profession → no article.',es:'Profesión → sin artículo.'}},
  {q:'Me duele ___ espalda.',opts:['la','mi','una'],a:0,exp:{ko:'신체 → 정관사.',en:'Body part → la.',es:'Cuerpo → la.'}},
  {q:'Tengo clase ___ martes y ___ jueves.',opts:['los / los','∅ / ∅','el / el'],a:0,exp:{ko:'반복되는 요일 → los.',en:'Recurring days → los.',es:'Días repetidos → los.'}},
  {q:'¿Me das ___ vaso de agua?',opts:['un','el','∅'],a:0,exp:{ko:'불특정 하나 → un.',en:'One unspecified → un.',es:'Indefinido → un.'}}
 ]
},
{
 id:'acentos', cat:'orth', level:'A1~B1', rank:16,
 title:{ko:'강세와 띨데 (tilde)', en:'Stress and written accents', es:'Acentuación y tilde'},
 sub:{ko:'점 하나로 뜻이 바뀐다: que vs qué', en:'One mark changes everything', es:'Una tilde lo cambia todo'},
 key:{ko:'강세 규칙은 <b>세 줄</b>로 끝납니다: ① 모음·n·s로 끝나면 끝에서 두 번째 음절 ② 그 외 자음으로 끝나면 마지막 음절 ③ 이 규칙을 벗어나면 띨데를 적는다.',
      en:'Three rules: vowel/n/s → stress the second-to-last syllable; other consonants → last syllable; any exception needs a written accent.',
      es:'Vocal, n o s → penúltima; otras consonantes → última; si no, tilde.'},
 why:{ko:'한국어에는 강세 개념이 없어 띨데를 장식으로 여기기 쉽습니다. 그러나 <b>esta/está, canto/cantó, papa/papá</b>처럼 뜻이 완전히 달라지고, 작문 시험에서 감점 요소입니다.',
      en:'Accents are not decoration: esta/está, canto/cantó, papa/papá differ in meaning.',
      es:'La tilde no es decorativa: esta/está, canto/cantó.'},
 rules:[
  {t:{ko:'① palabras agudas (마지막 음절 강세)',en:'① Final stress',es:'① Agudas'},d:{ko:'n, s, 모음으로 끝나면 띨데. ca-<b>fé</b>, can-<b>ción</b>, co-ra-<b>zón</b>, in-<b>glés</b>',en:'Accent when ending in n, s or a vowel.',es:'Llevan tilde si terminan en n, s o vocal.'},ex:'café, canción, inglés, además, salud(✗ 띨데 없음)',tr:{ko:'커피, 노래, 영어, 게다가, 건강',en:'coffee, song, English',es:'café, canción, inglés'}},
  {t:{ko:'② palabras llanas (끝에서 두 번째)',en:'② Penultimate stress',es:'② Llanas'},d:{ko:'n, s, 모음 <b>이외</b>로 끝나면 띨데. <b>lá</b>-piz, <b>ár</b>-bol, <b>fá</b>-cil, <b>az</b>-ú-car(x)',en:'Accent when NOT ending in n, s or a vowel.',es:'Tilde si no terminan en n, s o vocal.'},ex:'lápiz, árbol, fácil, difícil / casa, libro (띨데 없음)',tr:{ko:'연필, 나무, 쉬운, 어려운',en:'pencil, tree, easy',es:'lápiz, árbol, fácil'}},
  {t:{ko:'③ esdrújulas (끝에서 세 번째) — 항상 띨데',en:'③ Third-from-last: always accented',es:'③ Esdrújulas: siempre tilde'},d:{ko:'예외 없이 전부 띨데.',en:'No exceptions.',es:'Sin excepción.'},ex:'teléfono, música, médico, rápido, sábado, América',tr:{ko:'전화, 음악, 의사, 빠른, 토요일',en:'telephone, music, doctor',es:'teléfono, música, médico'}},
  {t:{ko:'④ tilde diacrítica (뜻 구별용)',en:'④ Diacritic accent',es:'④ Tilde diacrítica'},d:{ko:'아래 표의 단음절 쌍. 의문·감탄사는 직접·간접 모두 띨데: No sé qué hacer.',en:'Monosyllable pairs; question words always accented, even indirect.',es:'Interrogativos siempre con tilde.'},ex:'No sé qué hacer. Dime cuándo vienes. Sí, es para mí.',tr:{ko:'뭘 해야 할지 모르겠다. 언제 오는지 말해줘.',en:'I do not know what to do.',es:'No sé qué hacer.'}},
  {t:{ko:'⑤ 이중모음 분리 (hiato)',en:'⑤ Breaking diphthongs',es:'⑤ Hiato'},d:{ko:'약모음(i,u)에 강세가 오면 띨데로 분리: pa-<b>í</b>s, <b>rí</b>-o, dí-a, con-ti-<b>nú</b>-a',en:'Accent on weak vowel i/u breaks the diphthong.',es:'La tilde rompe el diptongo.'},ex:'país, río, día, oído, continúa',tr:{ko:'나라, 강, 날, 귀, 계속한다',en:'country, river, day',es:'país, río, día'}}
 ],
 table:{head:{ko:['띨데 없음','뜻','띨데 있음','뜻'],en:['No accent','Meaning','Accent','Meaning'],es:['Sin tilde','Sentido','Con tilde','Sentido']},
  rows:[
   ['que','~라는(접속사)','qué','무엇'],
   ['como','~처럼 / 먹는다','cómo','어떻게'],
   ['cuando','~할 때','cuándo','언제'],
   ['donde','~하는 곳','dónde','어디'],
   ['quien','~하는 사람','quién','누구'],
   ['si','만약','sí','네 / 자기 자신'],
   ['se','재귀대명사','sé','나는 안다 / 되어라'],
   ['el','그(관사)','él','그(대명사)'],
   ['tu','너의','tú','너'],
   ['mi','나의','mí','나(전치사 뒤)'],
   ['te','너를','té','차(tea)'],
   ['mas','그러나(문어)','más','더'],
   ['solo','혼자 / 오직','sólo','(현재 권장 안 함)'],
   ['esta','이(this)','está','그는 있다'],
   ['canto','나는 노래한다','cantó','그가 노래했다']
  ]},
 traps:[
  {bad:'No se que hacer.',good:'No sé qué hacer.',why:{ko:'sé(나는 안다) + 간접의문 qué.',en:'sé and indirect qué both need accents.',es:'sé y qué con tilde.'}},
  {bad:'Esta es mi casa y el esta aquí.',good:'Esta es mi casa y él está aquí.',why:{ko:'él(대명사)과 está(동사)에 띨데.',en:'él and está need accents.',es:'él y está con tilde.'}},
  {bad:'Mi hermano canto ayer.',good:'Mi hermano cantó ayer.',why:{ko:'3인칭 단순과거는 띨데 필수. 없으면 "나는 노래한다".',en:'Without the accent it means "I sing".',es:'Sin tilde significa "yo canto".'}},
  {bad:'¿Tu tienes tu libro?',good:'¿Tú tienes tu libro?',why:{ko:'주어 tú에만 띨데.',en:'Only the subject pronoun takes it.',es:'Solo el pronombre sujeto.'}}
 ],
 tip:{ko:'🔑 동사 활용에서 띨데가 <b>의미를 가르는 세 자리</b>를 꼭 기억하세요: ① 1인칭 현재(canto) vs 3인칭 과거(cantó) ② 미래형은 전부 띨데(cantaré, cantarás...) ③ 명령형+대명사(dímelo, cómpralo).',
      en:'🔑 Three key spots: present yo vs preterite él, all future forms, and commands with attached pronouns.',
      es:'🔑 Tres puntos: presente/pretérito, el futuro, el imperativo con pronombres.'},
 quiz:[
  {q:'올바른 표기: "___ es tu padre?"',opts:['Quién','Quien'],a:0,exp:{ko:'의문사 → 띨데.',en:'Question word → accent.',es:'Interrogativo → tilde.'}},
  {q:'"나는 그것을 안다"의 올바른 표기',opts:['Lo sé','Lo se'],a:0,exp:{ko:'saber의 1인칭 sé.',en:'sé with accent.',es:'sé con tilde.'}},
  {q:'teléfono는 어떤 유형?',opts:['esdrújula','llana','aguda'],a:0,exp:{ko:'끝에서 세 번째 음절 강세 → 항상 띨데.',en:'Third-from-last → always accented.',es:'Esdrújula.'}},
  {q:'다음 중 띨데가 필요한 것: casa / lapiz / libro',opts:['lapiz → lápiz','casa → cása','libro → líbro'],a:0,exp:{ko:'z로 끝나고 끝에서 두 번째 강세 → 띨데.',en:'Ends in z with penultimate stress.',es:'Termina en z, llana → tilde.'}},
  {q:'"그가 어제 먹었다"',opts:['Comió ayer','Comio ayer','Como ayer'],a:0,exp:{ko:'3인칭 단순과거 -ió.',en:'Preterite -ió.',es:'Pretérito -ió.'}}
 ]
},
{
 id:'falsos-amigos', cat:'lex', level:'A2~B2', rank:17,
 title:{ko:'거짓짝 (falsos amigos)', en:'False friends', es:'Falsos amigos'},
 sub:{ko:'닮았지만 뜻이 다른 단어들', en:'Look alike, mean different', es:'Se parecen, no significan'},
 key:{ko:'영어와 닮은 단어를 믿지 마세요. <b>embarazada</b>는 "창피한"이 아니라 <b>임신한</b>입니다.',
      en:'Do not trust look-alikes: embarazada means pregnant, not embarrassed.',
      es:'embarazada no es "embarrassed".'},
 why:{ko:'한국 학습자는 영어를 경유해 스페인어를 배우는 경우가 많아, 영어 어휘를 그대로 가져다 쓰면서 오해를 만듭니다. 비즈니스·시험에서 치명적인 오류가 되기도 합니다.',
      en:'Korean learners route through English, importing meanings that do not exist in Spanish.',
      es:'Se importan significados del inglés que no existen.'},
 rules:[
  {t:{ko:'가장 위험한 다섯 개',en:'The dangerous five',es:'Los cinco peligrosos'},d:{ko:'embarazada(임신한), constipado(코감기 걸린), éxito(성공), actualmente(현재), realizar(실행하다)',en:'embarazada, constipado, éxito, actualmente, realizar',es:'embarazada, constipado, éxito, actualmente, realizar'},ex:'Estoy constipado, no puedo respirar. El proyecto fue un éxito.',tr:{ko:'코가 막혀 숨을 못 쉰다. 그 프로젝트는 성공이었다.',en:'I have a cold. The project was a success.',es:'Estoy constipado.'}},
  {t:{ko:'사무실에서 자주 쓰는 함정',en:'Office traps',es:'Trampas de oficina'},d:{ko:'asistir a(참석하다, ≠돕다), apoyar(지지하다), solicitar(신청하다), compromiso(약속·책임), eventualmente(혹시·경우에 따라), discutir(언쟁하다)',en:'asistir, apoyar, solicitar, compromiso, eventualmente, discutir',es:'asistir, apoyar, solicitar, compromiso'},ex:'Asistí a la reunión. Tengo un compromiso a las cinco.',tr:{ko:'회의에 참석했다. 5시에 약속이 있다.',en:'I attended the meeting. I have an appointment at five.',es:'Asistí a la reunión.'}},
  {t:{ko:'자신·성격 관련',en:'Describing people',es:'Describir personas'},d:{ko:'sensible(민감한), simpático(친절한), educado(예의 바른), formal(믿을 만한), gracioso(재미있는)',en:'sensible = sensitive; simpático = nice; educado = polite.',es:'sensible, simpático, educado.'},ex:'Es muy sensible, no le digas eso. ¡Qué simpática es!',tr:{ko:'그는 아주 민감해, 그런 말 하지 마. 정말 친절하다!',en:'He is very sensitive. How nice she is!',es:'Es muy sensible.'}}
 ],
 table:{head:{ko:['스페인어','실제 뜻','영어로 착각','영어 뜻은 스페인어로'],en:['Spanish','Real meaning','Looks like','English word is'],es:['Español','Significado','Parece','La palabra inglesa es']},
  rows:[
   ['embarazada','임신한','embarrassed','avergonzado/-a'],
   ['constipado','코감기 걸린','constipated','estreñido'],
   ['éxito','성공','exit','salida'],
   ['actualmente','현재·요즘','actually','en realidad / de hecho'],
   ['realizar','실행·수행하다','realize','darse cuenta de'],
   ['sensible','민감한','sensible','sensato / razonable'],
   ['librería','서점','library','biblioteca'],
   ['carpeta','폴더·서류철','carpet','alfombra'],
   ['ropa','옷','rope','cuerda'],
   ['sopa','수프','soap','jabón'],
   ['asistir','참석하다','assist','ayudar'],
   ['pretender','의도하다','pretend','fingir'],
   ['soportar','견디다','support','apoyar'],
   ['discutir','언쟁하다','discuss','hablar de / tratar'],
   ['molestar','귀찮게 하다','molest','acosar'],
   ['introducir','삽입하다','introduce (someone)','presentar'],
   ['colegio','초·중등 학교','college','universidad'],
   ['parientes','친척','parents','padres'],
   ['largo','긴','large','grande'],
   ['once','11','once','una vez'],
   ['éxtasis / estar en','—','—','—'],
   ['fábrica','공장','fabric','tela'],
   ['bizarro','용감한(전통)·기괴한(차용)','bizarre','extraño / raro'],
   ['gracioso','재미있는','gracious','amable'],
   ['embarazoso','난처한(상황)','embarrassing','(바로 이 단어!)'],
   ['red','그물·네트워크','red','rojo'],
   ['vaso','컵','vase','jarrón'],
   ['tapa','뚜껑·안주','tap','grifo'],
   ['lentillas','콘택트렌즈','lentils','lentejas'],
   ['eventualmente','혹시·때에 따라','eventually','finalmente / al final']
  ]},
 traps:[
  {bad:'Estoy embarazada por mi error.',good:'Estoy avergonzado/-a por mi error.',why:{ko:'embarazada = 임신한.',en:'embarazada = pregnant.',es:'embarazada = encinta.'}},
  {bad:'Actualmente, no me gusta.',good:'En realidad, no me gusta.',why:{ko:'actualmente = 현재. "사실은"은 en realidad.',en:'actualmente = currently.',es:'actualmente = ahora.'}},
  {bad:'Voy a la librería a estudiar.',good:'Voy a la biblioteca a estudiar.',why:{ko:'librería는 서점.',en:'librería = bookshop.',es:'librería = tienda de libros.'}},
  {bad:'Quiero discutir el proyecto contigo. (언쟁하자는 뜻으로 들림)',good:'Quiero hablar del proyecto contigo.',why:{ko:'discutir는 다투다에 가깝습니다.',en:'discutir leans toward arguing.',es:'discutir = pelear verbalmente.'}}
 ],
 tip:{ko:'🔑 영어와 닮은 단어가 떠올랐을 때 <b>0.5초 멈추고 "이게 정말 그 뜻인가?"</b>를 의심하는 습관을 들이세요. 위 표의 상위 10개만 외워도 창피한 실수의 대부분을 막습니다.',
      en:'🔑 Pause half a second whenever an English look-alike pops into your head.',
      es:'🔑 Duda medio segundo ante cada palabra parecida al inglés.'},
 quiz:[
  {q:'"그 행사는 큰 성공이었다"',opts:['Fue un gran éxito','Fue una gran salida'],a:0,exp:{ko:'éxito = 성공.',en:'éxito = success.',es:'éxito = triunfo.'}},
  {q:'"저는 책을 빌리러 도서관에 갑니다"',opts:['Voy a la biblioteca','Voy a la librería'],a:0,exp:{ko:'도서관 = biblioteca.',en:'library = biblioteca.',es:'biblioteca.'}},
  {q:'"회의에 참석할 거예요"',opts:['Voy a asistir a la reunión','Voy a ayudar la reunión'],a:0,exp:{ko:'asistir a = 참석하다.',en:'asistir a = attend.',es:'asistir a = acudir.'}},
  {q:'"사실은 그렇지 않아요"',opts:['En realidad, no','Actualmente, no'],a:0,exp:{ko:'사실은 = en realidad.',en:'actually = en realidad.',es:'en realidad.'}},
  {q:'"그는 아주 예의 바르다"',opts:['Es muy educado','Es muy sensible'],a:0,exp:{ko:'educado = 예의 바른.',en:'educado = polite.',es:'educado = cortés.'}}
 ]
},
{
 id:'preposiciones', cat:'prep', level:'A2~B1', rank:18,
 title:{ko:'전치사 a / en / de 와 hace·desde', en:'a / en / de, hace vs desde', es:'a / en / de, hace y desde'},
 sub:{ko:'한국어 조사와 일대일이 아니다', en:'Not one-to-one with Korean', es:'No hay correspondencia exacta'},
 key:{ko:'사람 목적어 앞의 <b>a</b>(personal a)는 생략할 수 없고, "~에 있다"는 <b>en</b>, "~로 간다"는 <b>a</b>입니다.',
      en:'The personal a is obligatory; en for static location, a for direction.',
      es:'La "a" personal es obligatoria; en para ubicación, a para dirección.'},
 why:{ko:'한국어 "에/에서/으로"가 스페인어 a/en/de/por로 흩어지고, 영어에는 없는 <b>personal a</b>가 추가되어 한국 학습자가 가장 자주 빠뜨리는 요소입니다.',
      en:'Korean particles split across a/en/de/por, plus Spanish adds the personal a that English lacks.',
      es:'Además existe la "a" personal, ausente en inglés.'},
 rules:[
  {t:{ko:'personal a — 사람이 직접목적어일 때',en:'The personal a',es:'La "a" personal'},d:{ko:'특정 사람·반려동물이 직접목적어면 반드시 a. 불특정하면 생략.',en:'Required before a specific person as direct object.',es:'Obligatoria ante persona concreta.'},ex:'Veo a María. Busco un médico(불특정). Busco al médico(그 의사).',tr:{ko:'마리아를 본다. 의사를 찾는다(아무나). 그 의사를 찾는다.',en:'I see María. I am looking for a doctor.',es:'Veo a María.'}},
  {t:{ko:'a = 방향·시각·간접목적어',en:'a = direction, time, IO',es:'a = dirección, hora'},d:{ko:'ir a, llegar a, a las tres, dar algo a alguien, a la derecha',en:'ir a, a las tres, dar a alguien',es:'ir a, a las tres'},ex:'Voy al cine a las ocho y le doy el libro a Ana.',tr:{ko:'8시에 영화관에 가서 아나에게 책을 준다.',en:'I am going to the cinema at eight.',es:'Voy al cine a las ocho.'}},
  {t:{ko:'en = 위치·교통수단·기간',en:'en = location, transport',es:'en = lugar, transporte'},d:{ko:'estar en, en casa, en el coche / en tren(단, a pie, a caballo), en dos horas(2시간 후)',en:'estar en, en tren, en dos horas (in two hours)',es:'estar en, en tren, en dos horas'},ex:'Estoy en casa. Viajo en tren. Llego en diez minutos.',tr:{ko:'집에 있다. 기차로 여행한다. 10분 후 도착한다.',en:'I am at home. I travel by train.',es:'Estoy en casa.'}},
  {t:{ko:'de = 소유·출신·재료·내용',en:'de = of, from, made of',es:'de = posesión, origen'},d:{ko:'소유격이 없으므로 de를 씁니다: el libro de Juan. de + el = <b>del</b>, a + el = <b>al</b>.',en:'No Saxon genitive; de + el = del.',es:'de + el = del.'},ex:'Es el coche del profesor. Soy de Seúl. Una mesa de madera.',tr:{ko:'교수님의 차다. 서울 출신이다. 나무 테이블.',en:'It is the teacher\u0027s car.',es:'Es el coche del profesor.'}},
  {t:{ko:'hace vs desde vs desde hace',en:'hace / desde / desde hace',es:'hace / desde / desde hace'},d:{ko:'<b>hace + 기간</b> = ~전에(과거 시점) · <b>desde + 시점</b> = ~부터 · <b>desde hace + 기간</b> = ~째 계속 · <b>llevar + 기간 + 현재분사</b> = ~한 지 되었다 · <b>hace + 기간 + que + 현재</b>',
     en:'hace + period = ago; desde + point = since; desde hace + period = for.',es:'hace (hace dos años), desde (desde 2020), desde hace (desde hace dos años).'},
   ex:'Llegué hace dos años. Vivo aquí desde 2020. Estudio español desde hace tres años. Llevo tres años estudiando. Hace tres años que estudio español.',
   tr:{ko:'2년 전에 왔다. 2020년부터 여기 산다. 3년째 스페인어를 공부한다.',en:'I arrived two years ago. I have lived here since 2020.',es:'Llegué hace dos años.'}},
  {t:{ko:'동사가 요구하는 전치사 (암기 필수)',en:'Verb + fixed preposition',es:'Verbos con preposición fija'},d:{ko:'depender <b>de</b> · soñar <b>con</b> · pensar <b>en</b>(생각하다) / pensar <b>de</b>(의견) · acordarse <b>de</b> · olvidarse <b>de</b> · casarse <b>con</b> · enamorarse <b>de</b> · asistir <b>a</b> · empezar <b>a</b> · terminar <b>de</b> · tratar <b>de</b> · consistir <b>en</b> · darse cuenta <b>de</b> · preocuparse <b>por</b> · reírse <b>de</b>',
     en:'depender de, soñar con, pensar en, casarse con, enamorarse de, empezar a, terminar de',es:'depender de, soñar con, pensar en, casarse con'},
   ex:'Pienso en ti. Soñé contigo. Me enamoré de ella. Empecé a trabajar.',tr:{ko:'너를 생각한다. 네 꿈을 꿨다. 그녀와 사랑에 빠졌다. 일을 시작했다.',en:'I think about you. I dreamt about you.',es:'Pienso en ti.'}}
 ],
 table:{head:{ko:['한국어','스페인어','예'],en:['Korean/English','Spanish','Example'],es:['Idea','Español','Ejemplo']},
  rows:[
   ['~에 가다','a','Voy a Madrid'],
   ['~에 있다','en','Estoy en Madrid'],
   ['~에서 왔다','de','Vengo de Madrid'],
   ['~를 지나','por','Paso por Madrid'],
   ['~까지','hasta','Hasta mañana'],
   ['~쪽으로','hacia','Camino hacia el río'],
   ['~와 함께','con','Voy con mi hermano'],
   ['~없이','sin','Café sin azúcar'],
   ['~사이','entre','Entre tú y yo'],
   ['~전에(시간)','hace','Hace dos días'],
   ['~부터','desde','Desde ayer'],
   ['~후에','dentro de','Dentro de una hora']
  ]},
 traps:[
  {bad:'Veo María.',good:'Veo a María.',why:{ko:'사람 직접목적어 → personal a.',en:'Personal a required.',es:'"a" personal obligatoria.'}},
  {bad:'Voy en Madrid.',good:'Voy a Madrid.',why:{ko:'이동 방향 → a.',en:'Direction → a.',es:'Dirección → a.'}},
  {bad:'Vivo aquí desde dos años.',good:'Vivo aquí desde hace dos años.',why:{ko:'기간에는 desde hace.',en:'Period → desde hace.',es:'Duración → desde hace.'}},
  {bad:'Pienso de ti todos los días.',good:'Pienso en ti todos los días.',why:{ko:'생각하다 = pensar en. pensar de는 "~에 대해 어떻게 생각하다".',en:'pensar en = think about.',es:'pensar en.'}},
  {bad:'Estoy en el autobús... / por autobús?',good:'Voy en autobús.',why:{ko:'교통수단 → en (단 a pie).',en:'Transport → en.',es:'Transporte → en.'}}
 ],
 tip:{ko:'🔑 동사는 <b>전치사와 한 덩어리</b>로 외우세요. "pensar"가 아니라 "<b>pensar en</b>", "depender"가 아니라 "<b>depender de</b>"로 저장하면 평생 안 틀립니다.',
      en:'🔑 Learn verbs together with their preposition: not "pensar" but "pensar en".',
      es:'🔑 Aprende el verbo con su preposición.'},
 quiz:[
  {q:'Ayer vi ___ tu hermano en el centro.',opts:['a','∅','en'],a:0,exp:{ko:'사람 목적어 → a.',en:'Personal a.',es:'"a" personal.'}},
  {q:'Estudio español ___ tres años.',opts:['desde hace','desde','hace'],a:0,exp:{ko:'기간 + 현재 계속 → desde hace.',en:'Ongoing period → desde hace.',es:'desde hace.'}},
  {q:'Todo ___ del tiempo que tengas.',opts:['depende','depende en','depende a'],a:0,exp:{ko:'depender de.',en:'depender de.',es:'depender de.'}},
  {q:'La reunión empieza ___ las nueve.',opts:['a','en','de'],a:0,exp:{ko:'시각 → a.',en:'Clock time → a.',es:'La hora → a.'}},
  {q:'Me enamoré ___ ella en el primer día.',opts:['de','con','en'],a:0,exp:{ko:'enamorarse de.',en:'enamorarse de.',es:'enamorarse de.'}},
  {q:'Vuelvo ___ una hora. (1시간 후)',opts:['en / dentro de','hace','desde'],a:0,exp:{ko:'~후에 = en / dentro de.',en:'in an hour → en / dentro de.',es:'dentro de una hora.'}}
 ]
},
{
 id:'imperativo', cat:'verb', level:'A2~B1', rank:19,
 title:{ko:'명령법 (imperativo)', en:'Commands', es:'El imperativo'},
 sub:{ko:'긍정과 부정이 완전히 다른 형태', en:'Positive and negative differ', es:'Afirmativo y negativo'},
 key:{ko:'긍정 명령 tú는 <b>3인칭 현재형</b>(habla), 부정 명령은 <b>접속법</b>(no hables). 형태가 완전히 다릅니다.',
      en:'Affirmative tú = 3rd person present (habla). Negative = subjunctive (no hables).',
      es:'Afirmativo tú = 3ª persona; negativo = subjuntivo.'},
 why:{ko:'학습자는 "habla"의 부정을 "no habla"로 만드는데, 이건 "그는 말하지 않는다"가 됩니다. 또 대명사 위치도 긍정/부정에서 뒤바뀝니다.',
      en:'Learners negate "habla" as "no habla", which means "he does not speak". Pronoun position also flips.',
      es:'"no habla" significa "él no habla".'},
 rules:[
  {t:{ko:'tú 긍정 — 3인칭 단수 현재형',en:'Affirmative tú',es:'Afirmativo tú'},d:{ko:'hablar→habla, comer→come, abrir→abre. 불규칙 8개는 아래 표.',en:'habla, come, abre; 8 irregulars in the table.',es:'habla, come, abre.'},ex:'Habla más despacio. Come la verdura. Abre la ventana.',tr:{ko:'더 천천히 말해. 채소를 먹어. 창문을 열어.',en:'Speak more slowly.',es:'Habla más despacio.'}},
  {t:{ko:'tú 부정 — 접속법 현재 2인칭',en:'Negative tú = subjunctive',es:'Negativo = subjuntivo'},d:{ko:'no hables, no comas, no abras. -ar는 -es, -er/-ir는 -as로 "모음이 바뀌는" 원리.',en:'no hables, no comas, no abras.',es:'no hables, no comas.'},ex:'No hables tan rápido. No comas eso. No abras la puerta.',tr:{ko:'그렇게 빨리 말하지 마. 그걸 먹지 마. 문을 열지 마.',en:'Do not speak so fast.',es:'No hables tan rápido.'}},
  {t:{ko:'usted / ustedes — 모두 접속법',en:'usted / ustedes',es:'usted / ustedes'},d:{ko:'긍정·부정 모두 접속법: hable / no hable, hablen / no hablen. 존댓말 상황에서 핵심.',en:'Both affirmative and negative use the subjunctive.',es:'Siempre subjuntivo.'},ex:'Pase, por favor. No se preocupe. Siéntense aquí.',tr:{ko:'들어오세요. 걱정하지 마세요. 여기 앉으세요.',en:'Come in, please. Do not worry.',es:'Pase, por favor.'}},
  {t:{ko:'nosotros — "~하자"',en:'Let us…',es:'nosotros'},d:{ko:'접속법 1인칭 복수: vamos a + 원형도 가능. 재귀는 -s가 탈락: sentémonos.',en:'Vamos / hablemos; reflexive drops the -s.',es:'Hablemos; sentémonos.'},ex:'¡Vámonos! Hablemos de otra cosa.',tr:{ko:'가자! 다른 얘기 하자.',en:'Let us go! Let us talk about something else.',es:'¡Vámonos!'}},
  {t:{ko:'대명사 위치',en:'Pronoun placement',es:'Colocación de pronombres'},d:{ko:'<b>긍정 → 붙여 쓰기</b>(강세 표시 추가 가능): dímelo, levántate, cómpralo. <b>부정 → 동사 앞</b>: no me lo digas, no te levantes.',en:'Affirmative: attach. Negative: before the verb.',es:'Afirmativo: pegado; negativo: delante.'},ex:'Dímelo. ↔ No me lo digas. Levántate. ↔ No te levantes.',tr:{ko:'말해줘 ↔ 말하지 마. 일어나 ↔ 일어나지 마.',en:'Tell me ↔ Do not tell me.',es:'Dímelo ↔ No me lo digas.'}},
  {t:{ko:'vosotros (스페인)',en:'vosotros (Spain)',es:'vosotros (España)'},d:{ko:'긍정: 원형의 -r → -d (hablad, comed). 재귀는 -d 탈락 + os: levantaos. 부정은 접속법: no habléis.',en:'hablad, comed; reflexive: levantaos; negative: no habléis.',es:'hablad; levantaos; no habléis.'},ex:'Venid aquí. Sentaos. No os preocupéis.',tr:{ko:'여기 와. 앉아. 걱정하지 마.',en:'Come here. Sit down.',es:'Venid aquí. Sentaos.'}}
 ],
 table:{head:{ko:['동사','tú 긍정','tú 부정','usted'],en:['Verb','tú +','tú −','usted'],es:['Verbo','tú +','tú −','usted']},
  rows:[
   ['decir','di','no digas','diga'],
   ['hacer','haz','no hagas','haga'],
   ['ir','ve','no vayas','vaya'],
   ['poner','pon','no pongas','ponga'],
   ['salir','sal','no salgas','salga'],
   ['ser','sé','no seas','sea'],
   ['tener','ten','no tengas','tenga'],
   ['venir','ven','no vengas','venga'],
   ['dar','da','no des','dé'],
   ['estar','está','no estés','esté'],
   ['saber','sabe','no sepas','sepa']
  ]},
 traps:[
  {bad:'No habla tan rápido. (명령 의도)',good:'No hables tan rápido.',why:{ko:'부정 명령은 접속법.',en:'Negative command → subjunctive.',es:'Negativo → subjuntivo.'}},
  {bad:'No dímelo.',good:'No me lo digas.',why:{ko:'부정에서는 대명사가 앞으로.',en:'Pronouns move before the verb.',es:'Pronombres delante.'}},
  {bad:'Hazlo no.',good:'No lo hagas.',why:{ko:'no는 항상 맨 앞.',en:'no always comes first.',es:'no va delante.'}},
  {bad:'Siéntate usted.',good:'Siéntese.',why:{ko:'usted에는 접속법 + se.',en:'usted takes the subjunctive form.',es:'usted → siéntese.'}}
 ],
 tip:{ko:'🔑 <b>부정 명령 = 접속법</b>이라는 한 줄만 기억하세요. 그러면 tú·usted·nosotros·vosotros가 전부 자동으로 풀립니다(긍정 tú만 예외).',
      en:'🔑 Remember one line: negative commands are subjunctive. Only affirmative tú is special.',
      es:'🔑 Todo negativo es subjuntivo; solo el tú afirmativo es especial.'},
 quiz:[
  {q:'"내게 진실을 말해" (tú)',opts:['Dime la verdad','Dices la verdad','Me di la verdad'],a:0,exp:{ko:'decir 긍정 tú = di + me.',en:'di + me = dime.',es:'dime.'}},
  {q:'"걱정하지 마" (tú)',opts:['No te preocupes','No te preocupas','No preocúpate'],a:0,exp:{ko:'부정 명령 → 접속법 + 대명사 앞.',en:'Negative → subjunctive.',es:'Negativo → subjuntivo.'}},
  {q:'"들어오세요" (usted)',opts:['Pase','Pasa','Pases'],a:0,exp:{ko:'usted → 접속법 pase.',en:'usted → pase.',es:'usted → pase.'}},
  {q:'"그것을 사라" (tú)',opts:['Cómpralo','Lo compra','Compra lo'],a:0,exp:{ko:'긍정 명령 + 대명사 붙여쓰기 + 강세.',en:'Attach the pronoun and add the accent.',es:'Cómpralo.'}},
  {q:'"서두르지 마세요" (ustedes)',opts:['No se apresuren','No se apresuran','No apresúrense'],a:0,exp:{ko:'ustedes 부정 → 접속법 + 대명사 앞.',en:'Negative ustedes.',es:'No se apresuren.'}}
 ]
},
{
 id:'comparativos', cat:'adv', level:'A2~B1', rank:20,
 title:{ko:'비교 표현 más que / más de', en:'Comparatives: que vs de', es:'Comparativos: que y de'},
 sub:{ko:'숫자 앞에서는 que가 아니다', en:'Numbers take de', es:'Ante números, de'},
 key:{ko:'비교 대상이 <b>사람·사물</b>이면 <b>que</b>, <b>숫자·수량</b>이면 <b>de</b>.',
      en:'Comparing things → que. Comparing with a number → de.',
      es:'Ante sustantivo → que; ante número → de.'},
 why:{ko:'영어 "more than 20"을 그대로 옮겨 <i>más que 20</i>이라고 쓰기 쉽습니다. 또 mejor/peor/mayor/menor는 más를 붙이지 않는데도 붙이는 실수가 흔합니다.',
      en:'Learners say "más que 20"; also they add más to mejor/peor, which already contain it.',
      es:'"más que 20" es error; mejor ya es comparativo.'},
 rules:[
  {t:{ko:'más/menos + 형용사 + que',en:'más … que',es:'más … que'},d:{ko:'A가 B보다 더 ~하다.',en:'A is more … than B.',es:'A es más … que B.'},ex:'Madrid es más grande que Sevilla.',tr:{ko:'마드리드가 세비야보다 크다.',en:'Madrid is bigger than Seville.',es:'Madrid es más grande que Sevilla.'}},
  {t:{ko:'más/menos de + 숫자',en:'más de + number',es:'más de + número'},d:{ko:'수량과 비교할 때.',en:'With amounts.',es:'Con cantidades.'},ex:'Tengo más de veinte libros. Cuesta menos de diez euros.',tr:{ko:'책이 20권 이상 있다. 10유로 미만이다.',en:'I have more than twenty books.',es:'Más de veinte libros.'}},
  {t:{ko:'불규칙 비교급 — más를 붙이지 않음',en:'Irregular comparatives',es:'Comparativos irregulares'},d:{ko:'bueno→mejor, malo→peor, grande→mayor(나이·중요도), pequeño→menor. (크기는 más grande도 가능)',en:'mejor, peor, mayor, menor — never "más mejor".',es:'mejor, peor, mayor, menor.'},ex:'Este es mejor que aquel. Mi hermano mayor.',tr:{ko:'이것이 저것보다 낫다. 나의 형.',en:'This one is better. My older brother.',es:'Este es mejor.'}},
  {t:{ko:'동등 비교 tan/tanto … como',en:'As … as',es:'tan … como'},d:{ko:'tan + 형용사/부사 + como · tanto(-a/-os/-as) + 명사 + como · 동사 + tanto como',en:'tan + adj + como; tanto + noun + como.',es:'tan + adjetivo + como.'},ex:'Es tan alto como su padre. No tengo tanto dinero como tú. Trabajo tanto como él.',tr:{ko:'아버지만큼 키가 크다. 너만큼 돈이 없다. 그만큼 일한다.',en:'He is as tall as his father.',es:'Tan alto como su padre.'}},
  {t:{ko:'최상급',en:'Superlative',es:'Superlativo'},d:{ko:'el/la/los/las + más + 형용사 + de. 절대최상급은 -ísimo.',en:'el más … de; absolute superlative -ísimo.',es:'el más … de; -ísimo.'},ex:'Es el estudiante más aplicado de la clase. Es guapísima.',tr:{ko:'반에서 가장 성실한 학생이다. 매우 예쁘다.',en:'He is the most diligent student in the class.',es:'El más aplicado de la clase.'}},
  {t:{ko:'cada vez más / cuanto más',en:'More and more',es:'Cada vez más'},d:{ko:'cada vez más = 점점 더 · cuanto más... más... = ~할수록 더',en:'cada vez más; cuanto más … más …',es:'cada vez más; cuanto más… más…'},ex:'Cada vez hace más calor. Cuanto más estudio, más aprendo.',tr:{ko:'점점 더워진다. 공부할수록 더 배운다.',en:'It keeps getting hotter.',es:'Cada vez más calor.'}}
 ],
 table:{head:{ko:['상황','올바른 형태','예'],en:['Case','Form','Example'],es:['Caso','Forma','Ejemplo']},
  rows:[
   ['사물 비교','más … que','más alto que yo'],
   ['숫자 비교','más de','más de cien'],
   ['좋다','mejor que','mejor que nunca'],
   ['나쁘다','peor que','peor que ayer'],
   ['나이 많다','mayor que','mayor que mi hermana'],
   ['동등','tan … como','tan fácil como parece'],
   ['최상','el más … de','el mejor del mundo'],
   ['절대 강조','-ísimo','carísimo, facilísimo']
  ]},
 traps:[
  {bad:'Tengo más que veinte euros.',good:'Tengo más de veinte euros.',why:{ko:'숫자 앞 → de.',en:'Before a number → de.',es:'Ante número → de.'}},
  {bad:'Es más mejor que el otro.',good:'Es mejor que el otro.',why:{ko:'mejor에 이미 "더"가 포함.',en:'mejor already means "better".',es:'mejor ya es comparativo.'}},
  {bad:'Es tanto grande como tú.',good:'Es tan grande como tú.',why:{ko:'형용사 앞 → tan.',en:'Before an adjective → tan.',es:'Ante adjetivo → tan.'}},
  {bad:'Es el más alto en la clase.',good:'Es el más alto de la clase.',why:{ko:'최상급의 범위는 de.',en:'Superlative range takes de.',es:'El superlativo usa de.'}}
 ],
 tip:{ko:'🔑 비교 문장을 쓸 때 <b>que 뒤에 숫자가 오는지</b>만 확인하세요. 숫자면 de로 바꾸고, 형용사가 mejor·peor·mayor·menor면 más를 지우세요.',
      en:'🔑 Check whether a number follows; and delete más before mejor/peor/mayor/menor.',
      es:'🔑 ¿Hay un número? → de. ¿Hay mejor/peor? → quita más.'},
 quiz:[
  {q:'Había ___ mil personas en el estadio.',opts:['más de','más que'],a:0,exp:{ko:'숫자 → de.',en:'Number → de.',es:'Número → de.'}},
  {q:'Tu idea es ___ la mía.',opts:['mejor que','más mejor que','más buena de'],a:0,exp:{ko:'mejor que.',en:'mejor que.',es:'mejor que.'}},
  {q:'No es ___ difícil ___ parece.',opts:['tan / como','tanto / que','más / de'],a:0,exp:{ko:'동등 비교 tan...como.',en:'tan … como.',es:'tan … como.'}},
  {q:'Es la película ___ interesante ___ año.',opts:['más / del','más / en el','la más / que'],a:0,exp:{ko:'최상급 + de + 기간.',en:'Superlative + del.',es:'Superlativo + del.'}},
  {q:'Mi hermana es dos años ___ que yo. (나이가 많다)',opts:['mayor','más grande','más vieja'],a:0,exp:{ko:'나이는 mayor.',en:'Age → mayor.',es:'La edad → mayor.'}}
 ]
},
{
 id:'pronunciacion', cat:'orth', level:'A1~A2', rank:21,
 title:{ko:'발음과 철자의 함정', en:'Pronunciation and spelling traps', es:'Pronunciación y ortografía'},
 sub:{ko:'b/v, ll/y, g/j, c/z, rr, h', en:'b/v, ll/y, g/j, c/z, rr, h', es:'b/v, ll/y, g/j, c/z, rr, h'},
 key:{ko:'스페인어는 "쓰는 대로 읽는" 언어지만, <b>같은 소리를 두 글자로 쓰는 경우</b>(b/v, ll/y, c/z/s)가 받아쓰기를 어렵게 만듭니다.',
      en:'Spanish spelling is regular, but several letters share one sound, which makes dictation hard.',
      es:'Varias letras comparten sonido, lo que dificulta el dictado.'},
 why:{ko:'한국어에는 없는 소리(rr 떨림, j의 목구멍 소리, 스페인의 z/c 치간음)가 있고, 반대로 한국어에 있는 구분(ㅂ/ㅍ, ㅈ/ㅊ)이 스페인어에는 없어 혼동이 양방향으로 일어납니다.',
      en:'Some sounds do not exist in Korean (rr, j, Castilian z), while Korean distinctions do not map onto Spanish.',
      es:'Algunos sonidos no existen en coreano y viceversa.'},
 rules:[
  {t:{ko:'b와 v는 소리가 같다',en:'b and v sound identical',es:'b y v suenan igual'},d:{ko:'둘 다 한국어 ㅂ에 가까운 같은 소리. 영어 v처럼 아랫입술을 물지 않습니다. 철자는 외워야 합니다(vaca / baca).',en:'Both are the same sound; never the English v.',es:'Ambas se pronuncian igual.'},ex:'vaca, barco, vivir, bebé',tr:{ko:'소, 배, 살다, 아기',en:'cow, boat, to live, baby',es:'vaca, barco, vivir'}},
  {t:{ko:'h는 항상 묵음',en:'h is always silent',es:'La h es muda'},d:{ko:'hola는 "올라". 단, ch는 "차" 소리.',en:'hola = "ola"; but ch is a single sound.',es:'hola suena "ola".'},ex:'hola, hombre, ahora, hecho / chico, mucho',tr:{ko:'안녕, 남자, 지금, 사실 / 소년, 많이',en:'hello, man, now / boy, a lot',es:'hola, hombre, ahora'}},
  {t:{ko:'c, z, s — 지역에 따라 다르다',en:'c, z, s differ by region',es:'c, z, s según la región'},d:{ko:'스페인(중북부): za/ce/ci/zo/zu를 영어 th처럼 발음(ceceo 아님, distinción). 중남미·안달루시아: 전부 s 소리(seseo). 둘 다 표준입니다.',en:'Spain distinguishes z/c from s; Latin America pronounces all as s.',es:'En España hay distinción; en América, seseo.'},ex:'cinco, zapato, gracias, corazón',tr:{ko:'다섯, 신발, 감사, 심장',en:'five, shoe, thanks, heart',es:'cinco, zapato, gracias'}},
  {t:{ko:'g와 j',en:'g and j',es:'g y j'},d:{ko:'<b>ge, gi</b>는 j와 같은 목구멍 소리(gente="헨떼"). <b>ga, go, gu</b>는 ㄱ 소리. "게, 기" 소리를 내려면 <b>gue, gui</b>(u는 묵음). u를 발음하려면 <b>güe, güi</b>.',en:'ge/gi = j sound; gue/gui = hard g with silent u; güe/güi pronounces the u.',es:'ge/gi como j; gue/gui con u muda.'},ex:'gente, gigante / gato, guerra, guitarra / pingüino, bilingüe',tr:{ko:'사람들, 거대한 / 고양이, 전쟁, 기타 / 펭귄, 이중언어',en:'people, giant / cat, war, guitar / penguin',es:'gente, guerra, pingüino'}},
  {t:{ko:'r vs rr',en:'r vs rr',es:'r y rr'},d:{ko:'단어 중간의 r은 한 번 튕김(ㄹ), rr과 <b>어두의 r</b>은 떨림(여러 번). caro(비싼) ≠ carro(차).',en:'Single tap vs trill; word-initial r is trilled.',es:'Vibrante simple y múltiple.'},ex:'caro / carro, pero / perro, rosa, Roma',tr:{ko:'비싼/차, 그러나/개, 장미, 로마',en:'expensive/car, but/dog, rose',es:'caro/carro, pero/perro'}},
  {t:{ko:'ll과 y (yeísmo)',en:'ll and y (yeísmo)',es:'ll e y (yeísmo)'},d:{ko:'대부분 지역에서 같은 소리(ㅈ/ㅇ 사이). 아르헨티나·우루과이는 "ㅈ/ㅅ"에 가깝게(sheísmo): calle="까쎼".',en:'Mostly identical; Argentina sounds like "sh".',es:'Casi siempre iguales; en Argentina, "sh".'},ex:'llamar, calle, lluvia / yo, ayer, playa',tr:{ko:'부르다, 거리, 비 / 나, 어제, 해변',en:'to call, street, rain / I, yesterday, beach',es:'llamar, calle, yo'}},
  {t:{ko:'ñ, qu, x',en:'ñ, qu, x',es:'ñ, qu, x'},d:{ko:'ñ = "니"(España="에스빠냐") · qu = ㄲ, u는 묵음(queso="께소") · x는 ks 또는 멕시코 지명에서 h/s(México="메히꼬")',en:'ñ = ny; qu = k with silent u; x varies.',es:'ñ, qu con u muda, x variable.'},ex:'España, mañana, queso, quince, México, examen',tr:{ko:'스페인, 아침/내일, 치즈, 15, 멕시코, 시험',en:'Spain, morning, cheese, fifteen',es:'España, queso, México'}}
 ],
 table:{head:{ko:['최소대립어','뜻 1','뜻 2'],en:['Minimal pair','Meaning 1','Meaning 2'],es:['Par mínimo','Sentido 1','Sentido 2']},
  rows:[
   ['pero / perro','그러나','개'],
   ['caro / carro','비싼','차·수레'],
   ['coro / corro','합창단','나는 달린다'],
   ['casa / caza','집','사냥 (스페인에서 구분)'],
   ['cocer / coser','삶다','바느질하다'],
   ['sueño / sueno','꿈·졸림','나는 소리를 낸다'],
   ['año / ano','해(year)','항문 — ñ 주의!'],
   ['papa / papá','감자·교황','아빠'],
   ['cana / caña','흰머리','갈대·생맥주']
  ]},
 traps:[
  {bad:'"Tengo 25 anos."',good:'Tengo 25 años.',why:{ko:'ñ를 빼면 전혀 다른 뜻이 됩니다. 반드시 ñ를 입력하세요.',en:'Dropping the ñ changes the meaning entirely.',es:'Sin la ñ cambia totalmente.'}},
  {bad:'"Hola"를 "호라"로',good:'"올라"',why:{ko:'h는 묵음.',en:'h is silent.',es:'La h es muda.'}},
  {bad:'"gente"를 "겐떼"로',good:'"헨떼"',why:{ko:'ge/gi는 목구멍 소리.',en:'ge/gi is a throat sound.',es:'ge/gi suena como j.'}},
  {bad:'"guitarra"를 "구이따라"로',good:'"기따ㄹ라"',why:{ko:'gui의 u는 묵음, rr은 떨림.',en:'Silent u, trilled rr.',es:'u muda y rr vibrante.'}}
 ],
 tip:{ko:'🔑 받아쓰기(dictado)를 주 2회만 하세요. b/v, ll/y, c/s/z는 <b>귀로는 구별이 안 되므로 철자를 눈으로 저장</b>해야 합니다. 아래 예문 재생 버튼으로 반복 청취하세요.',
      en:'🔑 Do dictation twice a week: b/v, ll/y and c/s/z cannot be told apart by ear, so store the spelling visually.',
      es:'🔑 Haz dictados: b/v, ll/y y c/s/z no se distinguen de oído.'},
 quiz:[
  {q:'"개"를 뜻하는 단어는?',opts:['perro','pero'],a:0,exp:{ko:'rr = 떨림, 개.',en:'perro = dog.',es:'perro = can.'}},
  {q:'"hola"에서 h는?',opts:['발음하지 않는다','ㅎ으로 발음한다'],a:0,exp:{ko:'h는 항상 묵음.',en:'Always silent.',es:'Siempre muda.'}},
  {q:'"guerra"의 u는?',opts:['발음하지 않는다','우로 발음한다'],a:0,exp:{ko:'gue/gui의 u는 묵음.',en:'Silent in gue/gui.',es:'Muda en gue/gui.'}},
  {q:'중남미에서 "cinco"의 c는?',opts:['s 소리','영어 th 소리'],a:0,exp:{ko:'중남미는 seseo → s.',en:'Latin America: seseo.',es:'En América: seseo.'}},
  {q:'b와 v의 발음 관계는?',opts:['같다','v는 영어처럼 다르다'],a:0,exp:{ko:'스페인어에서 둘은 같은 소리.',en:'Identical in Spanish.',es:'Suenan igual.'}}
 ]
}
];
