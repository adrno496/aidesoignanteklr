export const fiches = [
  { id: "fx_mod_3_plus_constantes", mod: "3", type: "cours",
    titre: "Mesurer les constantes : technique, valeurs usuelles et pièges",
    resume: "Comment l'AS mesure correctement pouls, TA, température, fréquence respiratoire et SpO2, et reconnaît une valeur anormale.",
    tags: ["constantes", "pouls", "tension", "spo2"],
    html: `<h3>Le rôle de l'aide-soignant·e</h3>
<p>L'AS <strong>mesure les constantes</strong> dans le cadre de sa collaboration avec l'infirmier·ère, <strong>transcrit</strong> les valeurs et <strong>alerte</strong> en cas d'anomalie. L'AS ne pose pas de diagnostic et n'adapte aucun traitement : il/elle <span class="key" data-term="observe">observe</span>, <span class="key" data-term="mesure">mesure</span> et <span class="key" data-term="transmet">transmet</span>.</p>

<h3>Valeurs usuelles chez l'adulte au repos</h3>
<table class="tbl">
<tr><th>Constante</th><th>Valeur usuelle adulte</th><th>Mesure</th></tr>
<tr><td><span class="key" data-term="pouls">Pouls</span> (FC)</td><td>60 à 100 battements/min</td><td>Radial, 1 min, patient au repos</td></tr>
<tr><td><span class="key" data-term="tension artérielle">TA</span></td><td>≈ 120/80 mmHg</td><td>Brassard adapté, bras soutenu au niveau du cœur</td></tr>
<tr><td><span class="key" data-term="température">Température</span></td><td>36,1 à 37,2 °C</td><td>Selon le site (axillaire, tympanique…)</td></tr>
<tr><td><span class="key" data-term="fréquence respiratoire">FR</span></td><td>12 à 20 cycles/min</td><td>Comptée discrètement, sans prévenir le patient</td></tr>
<tr><td><span class="key" data-term="spo2">SpO2</span></td><td>≥ 95 %</td><td>Capteur au doigt, sans vernis, extrémité chaude</td></tr>
</table>

<h3>Pièges de mesure fréquents</h3>
<ul>
<li><strong>Brassard trop petit</strong> ou bras non soutenu : TA faussement élevée.</li>
<li><strong>FR comptée en prévenant le patient</strong> : il modifie sa respiration, valeur faussée. On la compte en gardant la main sur le poignet, après le pouls.</li>
<li><strong>SpO2 sur ongle verni, extrémité froide ou patient agité</strong> : signal absent ou faux.</li>
<li><strong>Température juste après une boisson chaude/froide</strong> ou un effort : valeur peu fiable.</li>
</ul>

<div class="callout"><div class="callout-t">Toujours noter le contexte</div>Une valeur seule ne suffit pas : préciser l'heure, la position (couché/assis), l'activité récente, et la comparer aux valeurs habituelles du patient.</div>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>PT-FRS</strong> » : <strong>P</strong>ouls, <strong>T</strong>ension, <strong>F</strong>réquence respiratoire, <strong>R</strong>espiration (SpO2), <strong>S</strong>aturation… le bilan de base que l'AS surveille à chaque tour.</div>`,
    refs: ["DEAS arrêté du 10 juin 2021 – Bloc 1 / module 3", "Référentiel d'activités AS – mesure des paramètres vitaux"] },

  { id: "fx_mod_3_plus_douleur", mod: "3", type: "cours",
    titre: "Évaluer et transmettre la douleur",
    resume: "Repérer la douleur, utiliser les échelles adaptées et transmettre une information utile à l'IDE.",
    tags: ["douleur", "EVA", "EVS", "Algoplus"],
    html: `<h3>La douleur, ce que l'AS repère</h3>
<p>La douleur est <strong>ce que le patient dit qu'elle est</strong>. L'AS la <span class="key" data-term="repère">repère</span>, aide à l'<span class="key" data-term="évaluer">évaluer</span> et la <strong>transmet</strong>, mais ne prescrit ni n'administre d'antalgique (rôle IDE/médecin).</p>

<h3>Les échelles selon le patient</h3>
<table class="tbl">
<tr><th>Échelle</th><th>Type</th><th>Pour qui</th></tr>
<tr><td><span class="key" data-term="EVA">EVA</span></td><td>Auto-évaluation (réglette 0–10)</td><td>Patient communicant</td></tr>
<tr><td><span class="key" data-term="EN">EN</span> (numérique)</td><td>Auto-évaluation 0 à 10 à l'oral</td><td>Patient communicant</td></tr>
<tr><td><span class="key" data-term="EVS">EVS</span> (verbale simple)</td><td>Auto : nulle/faible/modérée/intense</td><td>Difficulté avec les chiffres</td></tr>
<tr><td><span class="key" data-term="Algoplus">Algoplus</span></td><td>Hétéro-évaluation (observation)</td><td>Personne âgée non communicante</td></tr>
<tr><td><span class="key" data-term="Doloplus">Doloplus</span></td><td>Hétéro-évaluation</td><td>Douleur chronique du sujet âgé</td></tr>
</table>

<h3>Signes observables quand la personne ne parle pas</h3>
<ul>
<li>Visage : grimace, front plissé, regard fixe.</li>
<li>Comportement : agitation, repli, refus de soins, cris à la mobilisation.</li>
<li>Corps : position antalgique, protection d'une zone, raideur.</li>
<li>Modification des habitudes : sommeil, appétit, communication.</li>
</ul>

<div class="callout"><div class="callout-t">L'AS et la mobilisation</div>Beaucoup de douleurs se révèlent au moment de la toilette ou du lever. Signaler une douleur déclenchée par les soins permet à l'IDE d'anticiper un antalgique avant le soin.</div>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo « OPQRST »</div><strong>O</strong>ù, <strong>P</strong>rovoquée/calmée par quoi, <strong>Q</strong>ualité (brûlure, serrement…), <strong>R</strong>égion/irradiation, <strong>S</strong>évérité (0–10), <strong>T</strong>emps (depuis quand, évolution).</div>`,
    refs: ["DEAS arrêté du 10 juin 2021 – module 3", "HAS – évaluation de la douleur"] },

  { id: "fx_mod_3_plus_alerte", mod: "3", type: "cours",
    titre: "Signes d'alerte et transmissions ciblées",
    resume: "Reconnaître ce qui doit déclencher une alerte immédiate et transmettre l'information de façon structurée.",
    tags: ["signes d'alerte", "transmissions", "urgence"],
    html: `<h3>Quand alerter sans attendre l'IDE ?</h3>
<p>Certaines situations imposent une <strong>alerte immédiate</strong> de l'infirmier·ère (ou du dispositif d'urgence selon le protocole). L'AS ne reste jamais seul·e face à un signe grave.</p>
<ul>
<li><strong>Respiratoire</strong> : essoufflement nouveau, lèvres/extrémités bleutées (cyanose), SpO2 qui chute, encombrement.</li>
<li><strong>Circulatoire</strong> : malaise, pâleur, sueurs, douleur thoracique, pouls très rapide/très lent ou irrégulier.</li>
<li><strong>Neurologique</strong> : confusion brutale, perte de connaissance, difficulté à parler, asymétrie du visage, faiblesse d'un côté.</li>
<li><strong>Température</strong> : fièvre élevée ou hypothermie, frissons.</li>
<li><strong>Autres</strong> : chute, saignement, vomissements répétés, refus d'alimentation prolongé, modification brutale du comportement.</li>
</ul>

<div class="callout"><div class="callout-t">Signes d'AVC – agir vite</div>Asymétrie du <strong>visage</strong>, faiblesse d'un <strong>bras</strong>, trouble de la <strong>parole</strong> → alerte immédiate. Chaque minute compte.</div>

<h3>Transmettre une information utile</h3>
<p>Une bonne transmission est <strong>factuelle, datée et précise</strong>. On distingue les <span class="key" data-term="transmissions ciblées">transmissions ciblées</span> (méthode <strong>DAR</strong>) des transmissions orales lors des relèves.</p>
<table class="tbl">
<tr><th>DAR</th><th>Contenu</th></tr>
<tr><td><strong>D</strong>onnées</td><td>Ce qui est observé/mesuré (faits, chiffres, propos du patient)</td></tr>
<tr><td><strong>A</strong>ction</td><td>Ce qui a été fait (installation, surveillance, alerte IDE)</td></tr>
<tr><td><strong>R</strong>ésultat</td><td>Effet observé / évolution</td></tr>
</table>

<div class="callout"><div class="callout-t">Subjectif vs objectif</div>« Le patient va mal » n'est pas une transmission. « À 14h, patient assis, pâle, sueurs, dit avoir la tête qui tourne, pouls 110, IDE prévenue » l'est.</div>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo « SAED »</div>Pour alerter clairement : <strong>S</strong>ituation, <strong>A</strong>ntécédents/contexte, <strong>É</strong>valuation (ce que je constate), <strong>D</strong>emande (ce que j'attends de l'IDE).</div>`,
    refs: ["DEAS arrêté du 10 juin 2021 – module 3", "HAS – SAED, un guide pour faciliter la communication entre professionnels"] },
];

export const qcm = [
  { mod: "3", q: "Quelle est la valeur usuelle de la fréquence cardiaque (pouls) chez l'adulte au repos ?", options: ["40 à 60 bpm", "60 à 100 bpm", "100 à 120 bpm", "120 à 140 bpm"], correct: 1,
    explication: "Chez l'adulte au repos, le pouls se situe normalement entre 60 et 100 battements par minute. En dessous on parle de bradycardie, au-dessus de tachycardie : à signaler à l'IDE.", ref: "Module 3 – paramètres vitaux", diff: 1 },

  { mod: "3", q: "À partir de quelle valeur la SpO2 est-elle généralement considérée comme normale chez l'adulte sans pathologie respiratoire ?", options: ["≥ 80 %", "≥ 85 %", "≥ 90 %", "≥ 95 %"], correct: 3,
    explication: "Une SpO2 ≥ 95 % est habituellement considérée comme normale. Une chute doit être signalée. Attention : chez certains patients insuffisants respiratoires chroniques, l'objectif est fixé plus bas par le médecin.", ref: "Module 3 – oxymétrie", diff: 2 },

  { mod: "3", q: "Comment l'AS doit-il compter la fréquence respiratoire ?", options: ["En prévenant le patient pour qu'il respire normalement", "Discrètement, sans prévenir le patient", "En demandant au patient de respirer fort", "Uniquement avec un appareil"], correct: 1,
    explication: "La respiration étant en partie volontaire, prévenir le patient la modifie. On la compte discrètement, par exemple en gardant la main sur le poignet comme pour prendre le pouls.", ref: "Module 3 – fréquence respiratoire", diff: 1 },

  { mod: "3", q: "Un brassard à tension trop petit pour le bras du patient entraîne :", options: ["Une TA faussement basse", "Une TA faussement élevée", "Aucune incidence", "Une mesure impossible uniquement"], correct: 1,
    explication: "Un brassard trop étroit surestime la tension. Il faut choisir un brassard adapté à la circonférence du bras et soutenir le bras au niveau du cœur.", ref: "Module 3 – mesure de la TA", diff: 2 },

  { mod: "3", q: "L'échelle Algoplus est utilisée pour :", options: ["L'auto-évaluation d'un adulte communicant", "L'hétéro-évaluation de la douleur chez la personne âgée non communicante", "Mesurer la température", "Évaluer le risque de chute"], correct: 1,
    explication: "Algoplus est une échelle d'hétéro-évaluation par observation (visage, regard, plaintes, corps, comportement), adaptée à la personne âgée ne pouvant pas s'auto-évaluer.", ref: "Module 3 – évaluation de la douleur", diff: 2 },

  { mod: "3", q: "Un patient communicant peut situer sa douleur de 0 à 10 sur une réglette : de quelle échelle s'agit-il ?", options: ["EVS", "Algoplus", "EVA", "Doloplus"], correct: 2,
    explication: "L'EVA (échelle visuelle analogique) est une auto-évaluation où le patient positionne un curseur sur une réglette graduée de 0 à 10. Elle suppose un patient capable de comprendre et de communiquer.", ref: "Module 3 – échelles de douleur", diff: 1 },

  { mod: "3", q: "Quelle valeur de température axillaire correspond à une fourchette usuelle ?", options: ["34 à 35 °C", "36,1 à 37,2 °C", "38 à 39 °C", "39 à 40 °C"], correct: 1,
    explication: "La température normale se situe autour de 36,1 à 37,2 °C, en sachant qu'elle varie selon le site de mesure et le moment de la journée. Au-delà de 38 °C on parle de fièvre.", ref: "Module 3 – température", diff: 1 },

  { mod: "3", q: "Face à une asymétrie soudaine du visage, une faiblesse d'un bras et des troubles de la parole, l'AS doit :", options: ["Attendre la prochaine relève pour le signaler", "Donner à boire au patient", "Alerter immédiatement l'IDE", "Coucher le patient et ne rien dire"], correct: 2,
    explication: "Ces trois signes évoquent un AVC : c'est une urgence. L'AS alerte immédiatement l'IDE/le dispositif d'urgence selon le protocole. On ne fait pas boire (risque de fausse route).", ref: "Module 3 – signes d'alerte neurologiques", diff: 2 },

  { mod: "3", q: "Dans la méthode DAR de transmission ciblée, que représente le « D » ?", options: ["Diagnostic", "Données observées", "Décision médicale", "Douleur"], correct: 1,
    explication: "DAR = Données (ce qui est observé/mesuré), Action (ce qui a été fait), Résultat (effet/évolution). L'AS transmet des données factuelles, pas un diagnostic.", ref: "Module 3 – transmissions ciblées", diff: 2 },

  { mod: "3", q: "Quelle transmission est la plus correcte ?", options: ["« Le patient va mal »", "« Le patient est fatigué »", "« À 14h, patient pâle, sueurs, dit avoir des vertiges, pouls 110, IDE prévenue »", "« Tout va bien »"], correct: 2,
    explication: "Une bonne transmission est factuelle, datée, chiffrée et précise l'action menée. Les formulations vagues ne permettent pas à l'équipe d'agir.", ref: "Module 3 – qualité des transmissions", diff: 1 },

  { mod: "3", q: "Le « S » de la méthode SAED utilisée pour alerter signifie :", options: ["Symptôme", "Situation", "Surveillance", "Soin"], correct: 1,
    explication: "SAED = Situation, Antécédents/contexte, Évaluation (ce que je constate), Demande (ce que j'attends). C'est un outil recommandé par la HAS pour structurer une alerte entre professionnels.", ref: "Module 3 – HAS, SAED", diff: 2 },

  { mod: "3", q: "Concernant la mesure de la SpO2, quel élément peut fausser la valeur ?", options: ["Un doigt chaud", "Un capteur bien positionné", "Du vernis à ongles sur le doigt mesuré", "Un patient calme"], correct: 2,
    explication: "Le vernis à ongles, une extrémité froide, une mauvaise perfusion ou l'agitation peuvent fausser ou empêcher la mesure de SpO2. On choisit un doigt propre, chaud et sans vernis.", ref: "Module 3 – oxymétrie", diff: 1 },

  { mod: "3", q: "Quel signe respiratoire impose une alerte immédiate ?", options: ["Une respiration régulière et calme", "Une coloration bleutée des lèvres (cyanose)", "Une légère toux occasionnelle", "Une respiration nasale"], correct: 1,
    explication: "La cyanose (lèvres/extrémités bleutées) traduit un manque d'oxygène : c'est un signe d'alerte qui impose de prévenir l'IDE sans délai, souvent associé à une chute de SpO2 et un essoufflement.", ref: "Module 3 – signes d'alerte respiratoires", diff: 2 },

  { mod: "3", q: "Pour mesurer correctement la TA, le bras du patient doit être :", options: ["Pendant le long du corps", "Levé au-dessus de la tête", "Soutenu, au niveau du cœur", "Serré contre le thorax"], correct: 2,
    explication: "Le bras doit être soutenu et placé au niveau du cœur. Un bras trop bas surestime la TA, un bras trop haut la sous-estime.", ref: "Module 3 – mesure de la TA", diff: 2 },

  { mod: "3", q: "Une douleur qui apparaît surtout lors de la toilette ou du lever doit être :", options: ["Ignorée car elle est passagère", "Transmise à l'IDE pour anticiper une prise en charge avant le soin", "Traitée par l'AS avec un antalgique", "Notée seulement en fin de semaine"], correct: 1,
    explication: "Signaler une douleur déclenchée par les soins permet à l'IDE d'anticiper un antalgique avant le soin. L'AS ne donne jamais d'antalgique de sa propre initiative.", ref: "Module 3 – douleur et mobilisation", diff: 2 },

  { mod: "3", q: "Quel énoncé décrit correctement le rôle de l'AS vis-à-vis des constantes ?", options: ["Il interprète les résultats et adapte le traitement", "Il mesure, transcrit et alerte en cas d'anomalie", "Il prescrit des examens complémentaires", "Il pose le diagnostic"], correct: 1,
    explication: "L'AS mesure les paramètres, les transcrit et alerte l'IDE en cas d'anomalie. L'interprétation, l'adaptation du traitement et le diagnostic relèvent de l'IDE et du médecin.", ref: "Module 3 – rôle de l'AS", diff: 1 },

  { mod: "3", q: "Une température de 35 °C avec frissons doit faire évoquer :", options: ["Une situation banale sans intérêt", "Une hypothermie à signaler", "Une hyperthermie", "Une tension élevée"], correct: 1,
    explication: "Une température basse (hypothermie) est un signe d'alerte au même titre que la fièvre. Elle doit être signalée à l'IDE, surtout chez la personne âgée fragile.", ref: "Module 3 – température, signes d'alerte", diff: 2 },

  { mod: "3", q: "Quelle est la fréquence respiratoire usuelle chez l'adulte au repos ?", options: ["4 à 8 cycles/min", "12 à 20 cycles/min", "25 à 35 cycles/min", "40 à 50 cycles/min"], correct: 1,
    explication: "La fréquence respiratoire normale de l'adulte au repos est de 12 à 20 cycles par minute. Une FR trop rapide (polypnée) ou trop lente est un signe à transmettre.", ref: "Module 3 – fréquence respiratoire", diff: 1 },

  { mod: "3", q: "Pour décrire précisément une douleur, le moyen mnémotechnique OPQRST aide à explorer notamment :", options: ["La couleur de la peau uniquement", "L'heure du repas", "Le siège, ce qui la provoque/calme, sa qualité, son intensité et son évolution", "Le poids du patient"], correct: 2,
    explication: "OPQRST = Où, Provoquée/calmée par quoi, Qualité, Région/irradiation, Sévérité (0–10), Temps. Cela aide l'AS à recueillir une description utile à transmettre.", ref: "Module 3 – caractériser la douleur", diff: 3 },

  { mod: "3", q: "Pourquoi une valeur de constante isolée est-elle insuffisante ?", options: ["Parce qu'elle est toujours fausse", "Parce qu'elle doit être interprétée avec le contexte et comparée aux valeurs habituelles", "Parce que seule l'IDE peut la lire", "Parce qu'elle ne sert qu'aux statistiques"], correct: 1,
    explication: "Une valeur prend son sens avec le contexte (heure, position, activité récente, état du patient) et en comparaison avec les valeurs habituelles. C'est l'évolution qui alerte autant que le chiffre.", ref: "Module 3 – surveillance clinique", diff: 3 },

  { mod: "3", q: "Devant un patient inconnu trouvé inconscient au sol, la première action de l'AS est :", options: ["Le relever seul rapidement", "Le faire boire", "Alerter immédiatement et ne pas le mobiliser inutilement", "Lui donner un médicament"], correct: 2,
    explication: "Devant une perte de connaissance, on alerte immédiatement (IDE/secours selon protocole), on protège la personne et on ne la mobilise pas inutilement. On ne donne ni à boire ni de médicament.", ref: "Module 3 – conduite face à l'urgence", diff: 2 },
];

export const flashcards = [
  { mod: "3", recto: "Valeur usuelle du pouls chez l'adulte au repos ?", verso: "60 à 100 battements/min." },
  { mod: "3", recto: "SpO2 normale chez l'adulte sans pathologie respiratoire ?", verso: "≥ 95 %." },
  { mod: "3", recto: "Fréquence respiratoire usuelle de l'adulte au repos ?", verso: "12 à 20 cycles/min." },
  { mod: "3", recto: "Pourquoi compter la FR sans prévenir le patient ?", verso: "La respiration étant en partie volontaire, prévenir le patient la modifie et fausse la mesure." },
  { mod: "3", recto: "Que signifie DAR ?", verso: "Données, Action, Résultat : structure d'une transmission ciblée." },
  { mod: "3", recto: "Que signifie SAED ?", verso: "Situation, Antécédents/contexte, Évaluation, Demande : outil pour structurer une alerte." },
  { mod: "3", recto: "Échelle de douleur pour une personne âgée non communicante ?", verso: "Algoplus (hétéro-évaluation par observation) ou Doloplus pour la douleur chronique." },
  { mod: "3", recto: "L'AS peut-il donner un antalgique de sa propre initiative ?", verso: "Non. Il repère, évalue et transmet la douleur ; la prescription/administration relève de l'IDE et du médecin." },
  { mod: "3", recto: "Trois signes évoquant un AVC à reconnaître vite ?", verso: "Asymétrie du visage, faiblesse d'un bras, trouble de la parole." },
  { mod: "3", recto: "Que traduit une cyanose des lèvres ?", verso: "Un manque d'oxygène : signe d'alerte respiratoire imposant une alerte immédiate." },
  { mod: "3", recto: "Comment positionner le bras pour mesurer la TA ?", verso: "Bras soutenu, au niveau du cœur, avec un brassard adapté à sa circonférence." },
  { mod: "3", recto: "Effet d'un brassard trop petit sur la mesure de TA ?", verso: "TA faussement élevée (surestimée)." },
  { mod: "3", recto: "Pourquoi une constante isolée ne suffit-elle pas ?", verso: "Elle doit être interprétée avec le contexte et comparée aux valeurs habituelles du patient ; l'évolution compte autant que le chiffre." },
  { mod: "3", recto: "Que rappelle le moyen OPQRST ?", verso: "Où, Provoquée/calmée par quoi, Qualité, Région/irradiation, Sévérité (0–10), Temps." },
  { mod: "3", recto: "Première action devant un patient inconscient au sol ?", verso: "Alerter immédiatement, protéger la personne, ne pas la mobiliser inutilement, ne rien faire boire." },
];
