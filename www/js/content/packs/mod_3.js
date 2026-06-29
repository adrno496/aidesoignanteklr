export const fiches = [
  { id: "f_3_constantes", mod: "3", type: "cours",
    titre: "Les constantes (paramètres vitaux) : mesure et valeurs de référence",
    resume: "Mesurer fiablement température, pouls, fréquence respiratoire, tension, SpO2 et glycémie capillaire dans le champ de l'aide-soignant.",
    tags: ["constantes", "paramètres vitaux", "mesure", "valeurs normales"],
    html: `<h3>Que mesure l'aide-soignant ?</h3>
<p>L'AS recueille les <span class="key" data-term="paramètres vitaux">paramètres vitaux</span> dans le cadre d'une collaboration avec l'IDE (protocole ou consigne), puis les <strong>transmet</strong>. Il ne pose pas de diagnostic mais repère les écarts et <strong>alerte</strong> en cas d'anomalie.</p>
<table class="tbl">
<tr><th>Paramètre</th><th>Valeurs de référence (adulte)</th><th>Outil</th></tr>
<tr><td>Température</td><td>36,1 à 37,2 °C</td><td>Thermomètre (frontal, tympanique, axillaire, buccal)</td></tr>
<tr><td>Pouls / fréquence cardiaque</td><td>60 à 100 batt/min</td><td>Palpation radiale, oxymètre de pouls</td></tr>
<tr><td>Fréquence respiratoire</td><td>12 à 20 cycles/min</td><td>Observation du thorax (discrète)</td></tr>
<tr><td>Pression artérielle</td><td>environ 120/80 mmHg</td><td>Tensiomètre à brassard</td></tr>
<tr><td><span class="key" data-term="SpO2">SpO2</span> (saturation)</td><td>95 à 100 %</td><td>Oxymètre de pouls (au doigt)</td></tr>
<tr><td>Glycémie capillaire</td><td>0,70 à 1,10 g/L à jeun</td><td>Lecteur de glycémie</td></tr>
</table>
<div class="callout"><div class="callout-t">Bonnes pratiques de mesure</div>
<ul>
<li><strong>Repos</strong> 5 à 10 min avant la tension ; personne assise ou allongée au calme, bras soutenu à hauteur du cœur, brassard de taille adaptée.</li>
<li>Compter le <strong>pouls sur 1 minute</strong> (ou 30 s x 2 si régulier), noter le rythme (régulier/irrégulier) et l'amplitude.</li>
<li>Mesurer la <strong>FR discrètement</strong> : si la personne se sait observée, sa respiration change.</li>
<li>SpO2 : doigt propre, sans vernis foncé, bien réchauffé ; une mauvaise perfusion ou des extrémités froides faussent la mesure.</li>
</ul></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<p><strong>« TP-FR-TSG »</strong> pour ne rien oublier : <strong>T</strong>empérature, <strong>P</strong>ouls, <strong>FR</strong> (respiration), <strong>T</strong>ension, <strong>S</strong>pO2, <strong>G</strong>lycémie.</p></div>
<h3>Ce qui relève de l'IDE</h3>
<p>L'AS ne pratique pas d'injection, ne calcule pas de doses et n'adapte aucun traitement. La mesure de la glycémie capillaire se fait dans le cadre d'une <strong>collaboration avec l'IDE</strong>. Toute valeur anormale (glycémie, SpO2, tension, etc.) est <strong>transmise immédiatement</strong> à l'IDE.</p>`,
    refs: ["Module 3"] },

  { id: "f_3_observation", mod: "3", type: "cours",
    titre: "Observation clinique et transmissions",
    resume: "Observer la personne avec méthode et transmettre des informations fiables, datées et factuelles.",
    tags: ["observation", "transmissions", "DAR", "ciblées"],
    html: `<h3>Observer, c'est un soin</h3>
<p>L'<span class="key" data-term="observation">observation</span> mobilise les sens : regarder (couleur, comportement, mobilité), écouter (plaintes, respiration), toucher (chaleur, moiteur), sentir (odeurs), et comparer à l'état habituel de la personne.</p>
<h3>Quoi observer au quotidien ?</h3>
<ul>
<li><strong>Aspect général</strong> : teint (pâleur, rougeur, <span class="key" data-term="cyanose">cyanose</span>, ictère), état de conscience, comportement.</li>
<li><strong>Peau</strong> : sécheresse, œdème, rougeur d'appui, plaie, escarre débutante.</li>
<li><strong>Élimination</strong> : couleur/quantité des urines, selles (diarrhée, constipation).</li>
<li><strong>Alimentation/hydratation</strong> : appétit, prise de boissons, signes de déshydratation.</li>
<li><strong>Comportement/humeur</strong> : agitation, repli, confusion, douleur.</li>
</ul>
<div class="callout"><div class="callout-t">Transmission de qualité</div>
<p>Une transmission est <strong>factuelle</strong> (ce que j'observe, pas mon interprétation), <strong>datée et signée</strong>, <strong>précise</strong> et <strong>transmise au bon moment</strong>. Distinguer le <em>fait observé</em> ("a refusé son repas") de l'<em>opinion</em> ("il fait un caprice").</p></div>
<div class="mnemo"><div class="mnemo-t">Transmissions ciblées : DAR</div>
<p><strong>D</strong>onnées (ce que j'observe) / <strong>A</strong>ction (ce que j'ai fait dans mon champ) / <strong>R</strong>ésultat (effet observé). Ex. : D : douleur jambe cotée 6/10 — A : installation antalgique, IDE prévenue — R : après antalgique donné par l'IDE, douleur cotée 3/10.</p></div>
<h3>Outils</h3>
<p>Transmissions orales (relèves) et écrites (dossier de soins, fiches, logiciel). L'écrit a une <strong>valeur juridique</strong> : ne jamais inventer, ne pas effacer (rature lisible et signée). Le secret professionnel s'applique à toutes ces informations.</p>`,
    refs: ["Module 3"] },

  { id: "f_3_douleur", mod: "3", type: "cours",
    titre: "Évaluation et repérage de la douleur",
    resume: "Repérer, évaluer avec les échelles adaptées et transmettre la douleur, y compris chez la personne non communicante.",
    tags: ["douleur", "EVA", "EN", "Algoplus", "Doloplus"],
    html: `<h3>La douleur, ce que dit la personne</h3>
<p>La douleur est <strong>subjective</strong> : c'est toujours la personne qui en est l'experte. L'AS la prend en compte, contribue à son évaluation et la transmet. La douleur est un <span class="key" data-term="signe d'alerte">signe d'alerte</span>.</p>
<h3>Échelles d'auto-évaluation (personne qui communique)</h3>
<table class="tbl">
<tr><th>Échelle</th><th>Principe</th></tr>
<tr><td><span class="key" data-term="EVA">EVA</span> (visuelle analogique)</td><td>Réglette, curseur de 0 (aucune) à 10 (maximale)</td></tr>
<tr><td><span class="key" data-term="EN">EN</span> (numérique)</td><td>La personne note sa douleur de 0 à 10</td></tr>
<tr><td>EVS (verbale simple)</td><td>Absente / faible / modérée / intense / extrême</td></tr>
</table>
<h3>Hétéro-évaluation (personne non communicante)</h3>
<p>Chez la personne âgée non communicante (troubles cognitifs, démence, absence de parole), on utilise des échelles d'observation comportementale comme <span class="key" data-term="Algoplus">Algoplus</span> (douleur aiguë) ou <span class="key" data-term="Doloplus">Doloplus</span> (douleur chronique) : on observe le visage, les cris/plaintes, les positions antalgiques, la protection des zones, la mimique.</p>
<div class="callout"><div class="callout-t">Signes non verbaux à repérer</div>
<ul>
<li>Visage crispé, front plissé, grimaces.</li>
<li>Position recroquevillée, protection d'une zone, refus de mobilisation.</li>
<li>Gémissements, cris, agressivité, agitation ou au contraire repli.</li>
<li>Refus alimentaire, troubles du sommeil.</li>
</ul></div>
<div class="mnemo"><div class="mnemo-t">Réflexe AS</div>
<p>Je <strong>repère</strong>, je <strong>cote</strong> (échelle adaptée), je <strong>transmets</strong> à l'IDE, je <strong>réévalue</strong> après les mesures de confort (installation, soulagement). L'AS ne prescrit ni n'administre l'antalgique : c'est le rôle IDE/médecin.</p></div>`,
    refs: ["Module 3"] },

  { id: "f_3_signes_alerte", mod: "3", type: "cours",
    titre: "Signes d'alerte et conduite à tenir",
    resume: "Reconnaître les situations qui nécessitent une alerte rapide de l'IDE et la conduite immédiate de l'AS.",
    tags: ["signes d'alerte", "urgence", "détresse", "alerte"],
    html: `<h3>Détecter ce qui s'aggrave</h3>
<p>L'AS est souvent le premier auprès du patient : son rôle de <span class="key" data-term="vigilance">vigilance</span> est essentiel. Tout écart par rapport à l'état habituel doit faire alerter.</p>
<table class="tbl">
<tr><th>Domaine</th><th>Signes d'alerte</th></tr>
<tr><td>Respiration</td><td>Essoufflement, FR &gt; 25 ou &lt; 10/min, <span class="key" data-term="cyanose">cyanose</span> (lèvres bleues), SpO2 &lt; 90 %, tirage</td></tr>
<tr><td>Circulation</td><td>Pouls très rapide/lent, irrégulier, pâleur, sueurs, malaise, douleur thoracique</td></tr>
<tr><td>Conscience</td><td>Somnolence inhabituelle, confusion, perte de connaissance, propos incohérents</td></tr>
<tr><td>Température</td><td>Fièvre &gt; 38,5 °C, hypothermie &lt; 35 °C, frissons</td></tr>
<tr><td>Neuro</td><td>Bouche déviée, faiblesse d'un côté, trouble de la parole (évoquer un AVC)</td></tr>
<tr><td>Digestif/urinaire</td><td>Vomissements répétés, sang dans les selles/urines, absence d'urine</td></tr>
</table>
<div class="callout"><div class="callout-t">Réflexe AVC : FAST</div>
<p><strong>F</strong>ace (visage dévié) — <strong>A</strong>rm (bras qui tombe) — <strong>S</strong>peech (parole troublée) — <strong>T</strong>ime (alerter en urgence, chaque minute compte).</p></div>
<h3>Conduite à tenir de l'AS</h3>
<ul>
<li><strong>Ne pas paniquer, rester près de la personne</strong> et la rassurer.</li>
<li><strong>Évaluer rapidement</strong> : conscience, respiration, couleur.</li>
<li><strong>Alerter immédiatement l'IDE</strong> (et le 15 selon protocole/gravité).</li>
<li><strong>Installer en sécurité</strong> : position adaptée (PLS si inconsciente qui respire, demi-assise si gêne respiratoire).</li>
<li><strong>Ne rien donner à boire ni à manger</strong> si trouble de conscience ou avant avis.</li>
<li><strong>Transmettre</strong> précisément l'heure et les signes observés.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Avant tout</div>
<p><strong>Protéger – Alerter – Secourir</strong> : sécuriser la personne, prévenir l'IDE/le 15, puis appliquer les gestes de mon champ de compétence.</p></div>`,
    refs: ["Module 3"] },
];

export const qcm = [
  { mod: "3", q: "Quelle est la fourchette de valeurs normales du pouls chez l'adulte au repos ?", options: ["40 à 60 batt/min", "60 à 100 batt/min", "100 à 140 batt/min", "20 à 40 batt/min"], correct: 1,
    explication: "Le pouls (fréquence cardiaque) normal de l'adulte au repos se situe entre 60 et 100 battements/min. En dessous on parle de bradycardie, au-dessus de tachycardie : ces anomalies sont à transmettre à l'IDE.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "La saturation en oxygène (SpO2) normale chez l'adulte est :", options: ["entre 70 et 80 %", "entre 85 et 90 %", "entre 95 et 100 %", "exactement 50 %"], correct: 2,
    explication: "Une SpO2 normale est comprise entre 95 et 100 %. En dessous de 90 %, c'est un signe d'alerte qui impose de prévenir l'IDE rapidement.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "Pour mesurer la fréquence respiratoire de façon fiable, l'AS doit :", options: ["Prévenir la personne et lui demander de respirer à fond", "Compter discrètement sans que la personne s'en aperçoive", "Mesurer uniquement la nuit", "Demander à la personne de compter elle-même"], correct: 1,
    explication: "On mesure la FR de façon discrète : si la personne se sait observée, elle modifie sa respiration. On compte les mouvements du thorax sur une minute, idéalement à la suite de la prise du pouls.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Avant de prendre la tension artérielle, il faut :", options: ["Faire marcher la personne", "Laisser la personne au repos quelques minutes, assise, bras soutenu", "Mesurer juste après un repas copieux", "Serrer le brassard le plus fort possible"], correct: 1,
    explication: "Un repos de 5 à 10 minutes, en position assise ou allongée, bras détendu et soutenu à hauteur du cœur, avec un brassard de taille adaptée, conditionne la fiabilité de la mesure.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "La température corporelle normale d'un adulte est approximativement :", options: ["34 °C", "36 à 37,2 °C", "38,5 °C", "40 °C"], correct: 1,
    explication: "La température normale se situe autour de 36 à 37,2 °C. Au-delà de 38 °C on parle de fièvre, en dessous de 35 °C d'hypothermie : deux situations à transmettre.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "Concernant l'évaluation de la douleur, quelle affirmation est correcte ?", options: ["L'AS décide si la personne a vraiment mal", "La douleur est subjective : la personne en est l'experte", "Seul le médecin peut repérer la douleur", "La douleur ne se mesure pas"], correct: 1,
    explication: "La douleur est par essence subjective : c'est la personne qui la ressent et la décrit. L'AS la prend en compte, l'évalue avec une échelle adaptée et la transmet à l'IDE.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "Quelle échelle est adaptée pour évaluer la douleur d'une personne âgée non communicante ?", options: ["EVA (échelle visuelle analogique)", "EN (échelle numérique)", "Algoplus ou Doloplus (hétéro-évaluation)", "Échelle verbale simple"], correct: 2,
    explication: "Chez une personne non communicante, on utilise des échelles d'hétéro-évaluation comportementale comme Algoplus (douleur aiguë) ou Doloplus (douleur chronique), basées sur l'observation du visage, des plaintes et des positions.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Sur l'EVA et l'EN, le score 0 correspond à :", options: ["Une douleur maximale", "Une douleur modérée", "L'absence de douleur", "Une douleur insupportable"], correct: 2,
    explication: "Sur ces échelles de 0 à 10, 0 signifie aucune douleur et 10 la douleur maximale imaginable.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "Une transmission écrite de qualité doit être :", options: ["Interprétative et basée sur des suppositions", "Factuelle, datée, précise et signée", "Effacée si une erreur est faite", "Rédigée de mémoire en fin de semaine"], correct: 1,
    explication: "La transmission doit rapporter des faits observés, être datée, précise et signée. Elle a une valeur juridique : on ne l'efface pas (rature lisible et signée) et on ne l'invente pas.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Dans la méthode des transmissions ciblées DAR, la lettre D signifie :", options: ["Diagnostic", "Données (ce que j'observe)", "Décision", "Douleur"], correct: 1,
    explication: "DAR = Données (observations), Action (ce qui a été fait), Résultat (effet observé). L'AS n'établit pas de diagnostic.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Le terme « cyanose » désigne :", options: ["Une rougeur de la peau", "Une coloration bleutée des lèvres et extrémités", "Une peau jaune", "Une transpiration abondante"], correct: 1,
    explication: "La cyanose est une coloration bleutée de la peau et des muqueuses (lèvres, ongles) traduisant un manque d'oxygène. C'est un signe d'alerte à transmettre d'urgence.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Face à une personne qui présente subitement un visage dévié, un bras qui tombe et une parole troublée, on évoque :", options: ["Une simple fatigue", "Un AVC : alerte immédiate", "Une crise de faim", "Rien d'inquiétant"], correct: 1,
    explication: "Ces trois signes (Face, Arm, Speech du test FAST) évoquent un AVC. Le Time est essentiel : il faut alerter immédiatement, chaque minute compte.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Devant une personne inconsciente qui respire normalement, en attendant les secours, on l'installe :", options: ["Assise bien droite", "En position latérale de sécurité (PLS)", "À plat sur le ventre", "Debout"], correct: 1,
    explication: "La PLS protège les voies aériennes d'une personne inconsciente qui respire en évitant l'inhalation. On alerte l'IDE/le 15 et on surveille la respiration.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Une glycémie capillaire trouvée nettement anormale par l'AS doit :", options: ["Être corrigée par l'AS avec du sucre ou de l'insuline sans en parler", "Être transmise immédiatement à l'IDE", "Être ignorée si la personne va bien", "Attendre la prochaine relève écrite"], correct: 1,
    explication: "L'AS peut mesurer la glycémie capillaire en collaboration avec l'IDE mais n'adapte aucun traitement (pas d'insuline, pas de calcul de dose). Une valeur anormale est transmise sans délai à l'IDE.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Quelle valeur de fréquence respiratoire constitue un signe d'alerte chez l'adulte ?", options: ["16 cycles/min", "14 cycles/min", "Plus de 25 ou moins de 10 cycles/min", "18 cycles/min"], correct: 2,
    explication: "La FR normale est de 12 à 20/min. Au-delà de 25 (polypnée) ou en dessous de 10 (bradypnée), c'est une alerte à transmettre rapidement à l'IDE.", ref: "Module 3", diff: 3 },

  { mod: "3", q: "Quel signe doit faire suspecter une douleur chez une personne âgée non communicante ?", options: ["Un sourire détendu", "Un visage crispé, des positions antalgiques, des gémissements", "Un bon appétit", "Un sommeil paisible"], correct: 1,
    explication: "Chez la personne non communicante, la douleur s'exprime par des signes comportementaux : visage crispé, protection d'une zone, gémissements, agitation ou repli, refus alimentaire.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Parmi ces actes, lequel relève de l'IDE et NON de l'AS ?", options: ["Mesurer la température", "Observer la couleur des urines", "Réaliser une injection d'insuline", "Compter le pouls"], correct: 2,
    explication: "L'injection (insuline ou autre) est un acte infirmier. L'AS mesure les constantes, observe et transmet, mais n'administre pas de médicament injectable.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "La glycémie capillaire à jeun chez un adulte est normalement comprise entre :", options: ["0,30 et 0,50 g/L", "0,70 et 1,10 g/L", "2,00 et 3,00 g/L", "0,10 et 0,30 g/L"], correct: 1,
    explication: "La glycémie à jeun normale se situe entre 0,70 et 1,10 g/L. En dessous on parle d'hypoglycémie, au-dessus à jeun d'hyperglycémie : ces valeurs sont transmises à l'IDE.", ref: "Module 3", diff: 3 },

  { mod: "3", q: "Lorsqu'une personne présente une gêne respiratoire et reste consciente, quelle installation favoriser ?", options: ["Allongée à plat", "Demi-assise (position assise/relevée)", "Sur le ventre", "En PLS"], correct: 1,
    explication: "La position demi-assise facilite la respiration en libérant le diaphragme. On rassure la personne, on alerte l'IDE et on surveille la SpO2 et la couleur.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Lors d'un malaise, la priorité immédiate de l'AS est de :", options: ["Aller terminer ses autres tâches d'abord", "Rester auprès de la personne, évaluer et alerter l'IDE", "Donner à boire systématiquement", "Faire marcher la personne"], correct: 1,
    explication: "On reste auprès de la personne, on évalue conscience/respiration/couleur et on alerte l'IDE (ou le 15). On ne donne rien à boire en cas de trouble de conscience.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Une fièvre est généralement définie par une température corporelle supérieure à :", options: ["37,0 °C", "38,0 °C", "39,5 °C", "41,0 °C"], correct: 1,
    explication: "On parle de fièvre au-delà de 38 °C. Une fièvre élevée (> 38,5 °C) avec frissons est un signe d'alerte à transmettre, surtout chez la personne fragile.", ref: "Module 3", diff: 1 },

  { mod: "3", q: "Sur quelle durée l'AS compte-t-il idéalement le pouls quand le rythme est irrégulier ?", options: ["Sur 10 secondes seulement", "Sur une minute complète", "Sur 5 secondes", "Il ne le compte pas"], correct: 1,
    explication: "Quand le rythme est irrégulier, on compte le pouls sur une minute entière pour une mesure fiable, et on note le caractère irrégulier à transmettre à l'IDE.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Quel élément peut fausser une mesure de SpO2 à l'oxymètre de pouls ?", options: ["Un doigt bien réchauffé et propre", "Du vernis à ongles foncé ou des extrémités froides", "Une bonne perfusion périphérique", "Une lumière douce dans la pièce"], correct: 1,
    explication: "Le vernis foncé, des ongles sales, une mauvaise perfusion ou des extrémités froides faussent la lecture de la SpO2. On installe le capteur sur un doigt propre, sans vernis et réchauffé.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Une transmission orale ou écrite doit distinguer le fait de l'opinion. Lequel est un FAIT observé ?", options: ["« Il fait un caprice »", "« Madame a refusé son repas de midi »", "« Elle est désagréable »", "« Il exagère sa douleur »"], correct: 1,
    explication: "« A refusé son repas » est un fait observable et factuel. Les autres propositions sont des interprétations ou des jugements qui n'ont pas leur place dans une transmission.", ref: "Module 3", diff: 2 },

  { mod: "3", q: "Vrai ou faux : l'aide-soignant peut adapter seul une dose de traitement si une constante est anormale.", options: ["Vrai, s'il a de l'expérience", "Faux : il transmet à l'IDE qui décide avec le médecin", "Vrai, la nuit en l'absence d'IDE", "Vrai pour les traitements oraux"], correct: 1,
    explication: "L'AS n'adapte jamais un traitement ni une dose. Devant une constante anormale, il alerte et transmet à l'IDE, seule habilitée à agir avec le médecin.", ref: "Module 3", diff: 1 },
];

export const flashcards = [
  { mod: "3", recto: "Valeurs normales du pouls chez l'adulte au repos ?", verso: "60 à 100 battements/min." },
  { mod: "3", recto: "Valeurs normales de la SpO2 ?", verso: "95 à 100 %. Alerte si < 90 %." },
  { mod: "3", recto: "Fréquence respiratoire normale de l'adulte ?", verso: "12 à 20 cycles/min. Alerte si > 25 ou < 10." },
  { mod: "3", recto: "Température corporelle normale ?", verso: "Environ 36 à 37,2 °C. Fièvre au-delà de 38 °C, hypothermie < 35 °C." },
  { mod: "3", recto: "Glycémie capillaire normale à jeun ?", verso: "0,70 à 1,10 g/L." },
  { mod: "3", recto: "Pourquoi mesurer la fréquence respiratoire discrètement ?", verso: "Parce que si la personne se sait observée, elle modifie sa respiration." },
  { mod: "3", recto: "Que signifie DAR (transmissions ciblées) ?", verso: "Données (ce que j'observe), Action (ce que j'ai fait), Résultat (l'effet observé)." },
  { mod: "3", recto: "Qu'est-ce que la cyanose ?", verso: "Coloration bleutée des lèvres et extrémités, signe d'un manque d'oxygène. Signe d'alerte." },
  { mod: "3", recto: "Quelle échelle de douleur pour une personne non communicante ?", verso: "Hétéro-évaluation : Algoplus (douleur aiguë) ou Doloplus (douleur chronique)." },
  { mod: "3", recto: "Sur l'EVA/EN, que valent 0 et 10 ?", verso: "0 = aucune douleur ; 10 = douleur maximale imaginable." },
  { mod: "3", recto: "Que signifie FAST pour repérer un AVC ?", verso: "Face (visage dévié), Arm (bras qui tombe), Speech (parole troublée), Time (alerter d'urgence)." },
  { mod: "3", recto: "Position d'une personne inconsciente qui respire, en attendant les secours ?", verso: "Position latérale de sécurité (PLS)." },
  { mod: "3", recto: "Position à favoriser en cas de gêne respiratoire (personne consciente) ?", verso: "Demi-assise, pour faciliter la respiration." },
  { mod: "3", recto: "Que fait l'AS face à une glycémie ou une constante anormale ?", verso: "Il transmet immédiatement à l'IDE ; il n'adapte aucun traitement et ne fait pas d'injection." },
  { mod: "3", recto: "Une transmission écrite a-t-elle une valeur juridique ?", verso: "Oui : elle doit être factuelle, datée, signée ; on ne l'efface pas (rature lisible)." },
  { mod: "3", recto: "Trois signes comportementaux de douleur chez la personne âgée non communicante ?", verso: "Visage crispé, position antalgique/protection d'une zone, gémissements ou agitation." },
  { mod: "3", recto: "Priorité de l'AS lors d'un malaise ?", verso: "Rester auprès de la personne, évaluer (conscience, respiration, couleur) et alerter l'IDE/le 15." },
  { mod: "3", recto: "Conditions d'une bonne prise de tension ?", verso: "Repos 5 à 10 min, personne assise/allongée au calme, bras soutenu à hauteur du cœur, brassard adapté." },
  { mod: "3", recto: "Que faut-il éviter de donner à une personne avec un trouble de conscience ?", verso: "Ne rien donner à boire ni à manger : risque de fausse route. Alerter et installer en sécurité." },
];
