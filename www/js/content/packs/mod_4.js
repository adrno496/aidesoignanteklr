export const fiches = [
  { id: "f_4_hygiene", mod: "4", type: "geste",
    titre: "Soins d'hygiène corporelle : toilette et confort",
    resume: "Réaliser une toilette adaptée respectant l'autonomie, la pudeur et la sécurité de la personne.",
    tags: ["hygiène", "toilette", "confort", "pudeur"],
    html: `<h3>Buts de la toilette</h3>
<ul>
<li>Assurer la <strong>propreté</strong> et le <strong>confort</strong> de la personne.</li>
<li>Prévenir les infections et l'altération cutanée (<span class="key" data-term="escarre">escarre</span>, macération, mycoses).</li>
<li>Stimuler l'<strong>autonomie</strong> et maintenir l'<strong>image de soi</strong>.</li>
<li>Moment privilégié d'<span class="key" data-term="observation">observation</span> et de relation.</li>
</ul>
<h3>Principes à respecter</h3>
<ul>
<li><strong>Pudeur et intimité</strong> : porte fermée, paravent, ne découvrir que la zone lavée.</li>
<li><strong>Consentement</strong> et information avant chaque geste.</li>
<li><strong>Sécurité</strong> : eau à environ 37 °C, prévention des chutes, gants à usage unique pour les zones souillées.</li>
<li><strong>Du plus propre vers le plus sale</strong> : visage en premier, périnée en dernier.</li>
<li>Rincer, <strong>sécher en tamponnant</strong> (surtout les plis) sans frotter.</li>
</ul>
<table class="tbl">
<tr><th>Type de toilette</th><th>Quand</th></tr>
<tr><td>Toilette complète au lit</td><td>Personne alitée, dépendante</td></tr>
<tr><td>Toilette au lavabo / partielle</td><td>Personne semi-autonome</td></tr>
<tr><td>Douche / bain</td><td>Personne plus autonome (surveillance)</td></tr>
</table>
<div class="callout"><div class="callout-t">Ordre de la toilette (du propre au sale)</div>
Visage et cou → bras et mains → thorax → abdomen → dos → membres inférieurs → parties génitales et siège en dernier.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<strong>« Haut puis bas, propre puis sale »</strong> : on commence toujours par le visage et on finit par le périnée, en changeant le gant et l'eau si besoin.</div>
<h3>Soin de bouche et hygiène buccodentaire</h3>
<ul>
<li>Brossage des dents ou nettoyage des prothèses (rangées dans une boîte étiquetée la nuit).</li>
<li>Bouche sèche : humidifier, hydrater les lèvres ; observer mycose, aphtes, douleur.</li>
</ul>`,
    refs: ["Module 4"] },

  { id: "f_4_elimination", mod: "4", type: "cours",
    titre: "Aide à l'élimination urinaire et fécale",
    resume: "Accompagner l'élimination, observer selles et urines et repérer les anomalies à transmettre.",
    tags: ["élimination", "urines", "selles", "observation"],
    html: `<h3>Élimination urinaire</h3>
<ul>
<li>Aide au bassin, à l'urinal, accompagnement aux toilettes en respectant l'intimité.</li>
<li>Observer la <span class="key" data-term="diurese">diurèse</span> (quantité), la couleur, l'odeur, la présence de sang (hématurie).</li>
<li><strong>Anomalies à signaler à l'IDE</strong> : urines troubles/odorantes, douleur, brûlures, absence d'urines.</li>
</ul>
<table class="tbl">
<tr><th>Terme</th><th>Signification</th></tr>
<tr><td>Pollakiurie</td><td>Mictions fréquentes en petite quantité</td></tr>
<tr><td>Dysurie</td><td>Difficulté/douleur à uriner</td></tr>
<tr><td>Incontinence</td><td>Fuites involontaires</td></tr>
<tr><td>Anurie / oligurie</td><td>Absence / faible quantité d'urines</td></tr>
<tr><td>Globe vésical</td><td>Vessie pleine non vidée (urgence à signaler)</td></tr>
</table>
<h3>Élimination fécale</h3>
<ul>
<li>Observer la <strong>fréquence</strong>, la <strong>consistance</strong> et la <strong>couleur</strong> des selles.</li>
<li><span class="key" data-term="constipation">Constipation</span> : selles rares et dures ; surveiller, favoriser hydratation, fibres et mobilisation.</li>
<li><span class="key" data-term="diarrhee">Diarrhée</span> : selles liquides fréquentes ; risque de déshydratation et d'altération cutanée.</li>
<li><strong>Selles à signaler</strong> : noires (méléna), avec sang rouge, glaireuses, fécalome suspecté.</li>
</ul>
<div class="callout"><div class="callout-t">Échelle de Bristol</div>
Outil d'observation décrivant la consistance des selles, du type 1 (billes dures, constipation) au type 7 (liquide, diarrhée). Le type 3-4 correspond à une selle normale.</div>
<h3>Rôle de l'AS et collaboration</h3>
<ul>
<li>L'AS aide, observe, mesure et transmet ; il participe au change et à la prévention cutanée.</li>
<li><strong>Pose, ablation et surveillance d'une sonde urinaire = rôle IDE.</strong> L'AS surveille le sac, le débit et l'absence de coudure et transmet toute anomalie.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<strong>« QQCO »</strong> pour décrire selles et urines : <strong>Q</strong>uantité, <strong>Q</strong>ualité (aspect), <strong>C</strong>ouleur, <strong>O</strong>deur.</div>`,
    refs: ["Module 4"] },

  { id: "f_4_alimentation", mod: "4", type: "cours",
    titre: "Aide à l'alimentation, hydratation et prévention des fausses routes",
    resume: "Aider au repas en sécurité, surveiller hydratation et dénutrition, prévenir les fausses routes.",
    tags: ["alimentation", "hydratation", "fausse route", "dénutrition"],
    html: `<h3>Aide au repas</h3>
<ul>
<li>Installer la personne <strong>assise, tronc redressé</strong> (90°), tête légèrement penchée en avant.</li>
<li>Adapter la <strong>texture</strong> (normal, haché, mixé, eau gélifiée) selon la prescription.</li>
<li>Respecter le rythme, ne pas presser ; vérifier prothèses dentaires et hygiène des mains.</li>
<li>Stimuler l'autonomie : couverts adaptés, présentation appétissante, environnement calme.</li>
</ul>
<h3>Prévention des fausses routes</h3>
<div class="callout"><div class="callout-t">Signes d'une fausse route</div>
Toux, étouffement, voix mouillée, cyanose, détresse respiratoire. <strong>Stopper l'alimentation, alerter, ne pas faire boire.</strong> En cas d'obstruction : manœuvres de désobstruction et appel à l'aide.</div>
<ul>
<li>Position assise, petites bouchées, ne pas parler en mangeant.</li>
<li>Eau gélifiée ou eau épaissie en cas de troubles de la déglutition (<span class="key" data-term="dysphagie">dysphagie</span>).</li>
</ul>
<h3>Surveillance de l'hydratation et de la dénutrition</h3>
<ul>
<li><span class="key" data-term="deshydratation">Déshydratation</span> : pli cutané persistant, langue sèche, urines foncées rares, confusion. Personne âgée à risque +++.</li>
<li><span class="key" data-term="denutrition">Dénutrition</span> : perte de poids, fonte musculaire, fatigue, escarres. Surveiller le <strong>poids</strong> et les ingesta/excreta.</li>
<li>Proposer à boire régulièrement, noter ce qui est réellement consommé.</li>
</ul>
<table class="tbl">
<tr><th>Texture</th><th>Indication</th></tr>
<tr><td>Normale</td><td>Déglutition normale</td></tr>
<tr><td>Hachée / molle</td><td>Mastication difficile</td></tr>
<tr><td>Mixée lisse</td><td>Troubles de la déglutition</td></tr>
<tr><td>Eau gélifiée / épaissie</td><td>Risque de fausse route aux liquides</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<strong>« ASSIS »</strong> avant chaque repas : <strong>A</strong>ssise droite, <strong>S</strong>écurité (déglutition), <strong>S</strong>timuler, <strong>I</strong>nstaller le matériel adapté, <strong>S</strong>urveiller (toux).</div>`,
    refs: ["Module 4"] },

  { id: "f_4_evaluation", mod: "4", type: "cours",
    titre: "Évaluation, réajustement des soins et démarche de soins",
    resume: "Observer, mesurer, évaluer le résultat d'un soin et réajuster en collaboration avec l'équipe.",
    tags: ["évaluation", "réajustement", "constantes", "transmissions"],
    html: `<h3>La démarche d'évaluation et de réajustement</h3>
<p>Après chaque soin, l'AS évalue le <strong>résultat obtenu</strong> et adapte sa pratique : c'est le <span class="key" data-term="reajustement">réajustement</span>. Il s'inscrit dans la démarche de soins menée avec l'IDE.</p>
<ul>
<li><strong>Observer</strong> : état cutané, douleur, comportement, autonomie, confort.</li>
<li><strong>Mesurer</strong> les paramètres dans le champ de l'AS.</li>
<li><strong>Comparer</strong> au résultat attendu et aux valeurs habituelles de la personne.</li>
<li><strong>Réajuster</strong> : adapter la texture, le matériel, l'installation, l'aide apportée.</li>
<li><strong>Transmettre</strong> à l'oral et à l'écrit (transmissions ciblées).</li>
</ul>
<h3>Mesure des paramètres vitaux (rôle AS)</h3>
<table class="tbl">
<tr><th>Paramètre</th><th>Valeurs usuelles adulte</th></tr>
<tr><td>Température</td><td>36,5 à 37,5 °C</td></tr>
<tr><td>Pouls (FC)</td><td>60 à 100 bpm</td></tr>
<tr><td>Fréquence respiratoire</td><td>12 à 20 / min</td></tr>
<tr><td>Pression artérielle</td><td>environ 120/80 mmHg</td></tr>
<tr><td>Saturation (SpO₂)</td><td>≥ 95 %</td></tr>
</table>
<div class="callout"><div class="callout-t">Transmissions ciblées : DAR</div>
<strong>D</strong>onnées (ce qu'on observe) → <strong>A</strong>ctions (ce qu'on fait) → <strong>R</strong>ésultat (effet obtenu). Les transmissions doivent être factuelles, datées, signées.</div>
<h3>Limites de l'AS</h3>
<ul>
<li>L'AS <strong>mesure et transmet</strong> ; il ne pose pas de diagnostic et n'interprète pas seul.</li>
<li>Toute valeur anormale ou aggravation est <strong>signalée immédiatement à l'IDE</strong>.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<strong>« OMERT »</strong> : <strong>O</strong>bserver, <strong>M</strong>esurer, <strong>E</strong>valuer, <strong>R</strong>éajuster, <strong>T</strong>ransmettre.</div>`,
    refs: ["Module 4"] },
];

export const qcm = [
  { mod: "4", q: "Dans quel ordre réalise-t-on une toilette complète ?", options: ["Du plus sale vers le plus propre", "Du plus propre vers le plus sale (visage d'abord, périnée en dernier)", "Toujours les pieds en premier", "L'ordre n'a pas d'importance"], correct: 1,
    explication: "On lave du plus propre vers le plus sale pour limiter la diffusion des germes : visage et cou en premier, parties génitales et siège en dernier, en changeant le gant et l'eau.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Quelle est la température d'eau recommandée pour une toilette ?", options: ["Environ 20 °C", "Environ 37 °C", "Environ 50 °C", "Le plus chaud possible"], correct: 1,
    explication: "L'eau doit être à environ 37 °C (température corporelle) pour le confort et la sécurité, en évitant tout risque de brûlure. On vérifie toujours la température avant le contact avec la peau.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Pour préserver la pudeur pendant la toilette, l'AS doit :", options: ["Découvrir entièrement la personne pour aller plus vite", "Ne découvrir que la zone en cours de lavage, porte fermée", "Laisser la porte ouverte pour surveiller", "Faire la toilette devant les autres résidents"], correct: 1,
    explication: "Le respect de la pudeur impose de fermer la porte, d'utiliser un paravent si besoin et de ne dénuder que la partie du corps en train d'être lavée.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Comment sécher la peau, en particulier les plis ?", options: ["En frottant énergiquement", "En tamponnant délicatement", "On laisse sécher à l'air seulement", "Au sèche-cheveux chaud"], correct: 1,
    explication: "On sèche en tamponnant sans frotter, surtout dans les plis (aisselles, sous les seins, aine, espaces interdigitaux), pour éviter la macération et l'altération cutanée.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Le terme « pollakiurie » désigne :", options: ["L'absence d'urines", "Des mictions fréquentes en petite quantité", "Une douleur en urinant", "Du sang dans les urines"], correct: 1,
    explication: "La pollakiurie correspond à des mictions anormalement fréquentes, souvent en faible quantité. À ne pas confondre avec la dysurie (difficulté à uriner) ou l'hématurie (sang dans les urines).", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Que signifie « anurie » ?", options: ["Urines abondantes", "Absence quasi totale d'émission d'urines", "Urines foncées", "Incontinence nocturne"], correct: 1,
    explication: "L'anurie est l'absence ou la quasi-absence d'urines (l'oligurie étant une faible quantité). C'est une anomalie grave à signaler immédiatement à l'IDE.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Concernant la sonde urinaire, l'aide-soignant :", options: ["La pose lui-même", "La retire si elle est bouchée", "Surveille le sac, le débit, l'absence de coudure et transmet", "Décide d'arrêter la surveillance"], correct: 2,
    explication: "La pose, l'ablation et la gestion de la sonde urinaire relèvent de l'IDE. L'AS surveille (débit, aspect des urines, coudure, fixation, sac sous le niveau de la vessie) et transmet toute anomalie.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Une selle décrite comme « noire et goudronneuse » (méléna) doit :", options: ["Être considérée comme normale", "Être signalée immédiatement à l'IDE", "Être ignorée si la personne va bien", "Être nettoyée sans rien dire"], correct: 1,
    explication: "Le méléna (selles noires, collantes, malodorantes) peut traduire un saignement digestif haut. C'est une anomalie à transmettre sans délai à l'IDE.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Pour décrire selles et urines, le moyen mnémo « QQCO » signifie :", options: ["Quantité, Qualité, Couleur, Odeur", "Quand, Qui, Comment, Où", "Quantité, Quotidien, Confort, Observation", "Qualité, Quotité, Cause, Origine"], correct: 0,
    explication: "QQCO aide l'AS à structurer son observation : Quantité, Qualité (aspect/consistance), Couleur et Odeur, pour des transmissions précises.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Quelle position installer pour aider une personne à manger en sécurité ?", options: ["Allongée à plat", "Assise, tronc redressé, tête légèrement penchée en avant", "Couchée sur le côté", "Demi-assise tête en arrière"], correct: 1,
    explication: "La position assise tronc redressé (90°), tête légèrement fléchie vers l'avant, facilite la déglutition et réduit le risque de fausse route. On évite l'extension de la tête en arrière.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Face à une fausse route avec toux pendant le repas, l'AS doit d'abord :", options: ["Faire boire un grand verre d'eau", "Stopper l'alimentation et alerter", "Continuer le repas plus vite", "Allonger la personne à plat"], correct: 1,
    explication: "On arrête immédiatement l'alimentation, on ne fait pas boire, on surveille et on alerte. En cas d'obstruction des voies aériennes, on applique les manœuvres de désobstruction et on appelle de l'aide.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Quel produit est adapté à une personne ayant une fausse route aux liquides ?", options: ["De l'eau plate à volonté", "De l'eau gélifiée ou épaissie", "Des boissons gazeuses", "Aucune boisson"], correct: 1,
    explication: "L'eau gélifiée ou épaissie ralentit l'écoulement et sécurise la déglutition en cas de dysphagie aux liquides. La texture est adaptée selon la prescription / l'évaluation orthophonique.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Quels signes évoquent une déshydratation chez la personne âgée ?", options: ["Peau souple et urines claires", "Pli cutané persistant, langue sèche, urines foncées, confusion", "Prise de poids rapide", "Œdèmes des jambes"], correct: 1,
    explication: "La déshydratation se repère par un pli cutané qui persiste, une langue et une bouche sèches, des urines rares et foncées, parfois de la confusion. La personne âgée est particulièrement à risque.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "La dénutrition se surveille notamment par :", options: ["La couleur des cheveux", "Le suivi du poids et des ingesta", "Le nombre de visiteurs", "La taille des chaussures"], correct: 1,
    explication: "Le suivi du poids, l'observation des quantités réellement mangées (ingesta), la fonte musculaire et la fatigue permettent de repérer une dénutrition, facteur de risque d'escarres.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Quelle est la valeur usuelle de la fréquence cardiaque (pouls) chez l'adulte au repos ?", options: ["30 à 50 bpm", "60 à 100 bpm", "100 à 140 bpm", "140 à 180 bpm"], correct: 1,
    explication: "Le pouls normal de l'adulte au repos se situe entre 60 et 100 battements par minute. En dehors de ces bornes (bradycardie/tachycardie), on transmet à l'IDE.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Quelle valeur de SpO₂ est considérée comme normale chez l'adulte ?", options: ["≥ 95 %", "Environ 80 %", "Environ 70 %", "Entre 50 et 60 %"], correct: 0,
    explication: "Une saturation en oxygène (SpO₂) normale est supérieure ou égale à 95 %. En dessous, il faut alerter l'IDE car cela peut traduire une hypoxie.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "La température corporelle usuelle de l'adulte se situe entre :", options: ["34 et 35 °C", "36,5 et 37,5 °C", "38 et 39 °C", "39 et 40 °C"], correct: 1,
    explication: "La température normale est d'environ 36,5 à 37,5 °C. Au-delà de 38 °C on parle de fièvre (hyperthermie), en dessous de 35 °C d'hypothermie : à signaler.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Dans la transmission ciblée DAR, le « R » correspond à :", options: ["Rendez-vous", "Résultat / réévaluation de l'action", "Rappel des consignes", "Rythme cardiaque"], correct: 1,
    explication: "DAR = Données (ce qu'on observe), Actions (ce qu'on a fait), Résultat (l'effet obtenu et la réévaluation). Cela structure une transmission factuelle et tracée.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Le réajustement d'un soin consiste à :", options: ["Refaire exactement le même soin sans réfléchir", "Adapter sa pratique après avoir évalué le résultat obtenu", "Déléguer le soin à la famille", "Arrêter tout soin"], correct: 1,
    explication: "Le réajustement est l'adaptation du soin (matériel, installation, texture, aide) après évaluation du résultat, en lien avec l'équipe. Il s'inscrit dans la démarche de soins.", ref: "Module 4", diff: 2 },

  { mod: "4", q: "Devant une pression artérielle anormalement basse mesurée chez un résident, l'AS doit :", options: ["Modifier le traitement", "Transmettre immédiatement à l'IDE", "Donner à boire de l'alcool", "Ne rien faire car ce n'est pas son rôle"], correct: 1,
    explication: "L'AS mesure et transmet : il n'interprète pas seul et ne modifie aucun traitement. Toute valeur anormale doit être signalée sans délai à l'IDE pour évaluation.", ref: "Module 4", diff: 1 },

  { mod: "4", q: "Pour limiter le risque de fausse route, on conseille de :", options: ["Faire de grandes bouchées rapides", "Donner de petites bouchées et ne pas parler en mangeant", "Faire manger allongé", "Faire manger en marchant"], correct: 1,
    explication: "Petites bouchées, rythme lent, position assise, environnement calme et ne pas parler/rire pendant la déglutition réduisent le risque de fausse route.", ref: "Module 4", diff: 1 },
];

export const flashcards = [
  { mod: "4", recto: "Dans quel sens réalise-t-on la toilette ?", verso: "Du plus propre vers le plus sale : visage d'abord, parties génitales et siège en dernier." },
  { mod: "4", recto: "Température de l'eau pour la toilette ?", verso: "Environ 37 °C (vérifiée avant le contact avec la peau)." },
  { mod: "4", recto: "Comment sécher les plis cutanés ?", verso: "En tamponnant, sans frotter, pour éviter la macération." },
  { mod: "4", recto: "Que signifie pollakiurie ?", verso: "Mictions fréquentes en petite quantité." },
  { mod: "4", recto: "Que signifie dysurie ?", verso: "Difficulté ou douleur à uriner." },
  { mod: "4", recto: "Qu'est-ce que l'anurie ?", verso: "Absence quasi totale d'émission d'urines (à signaler à l'IDE)." },
  { mod: "4", recto: "Qu'est-ce qu'un méléna ?", verso: "Selles noires et goudronneuses traduisant un saignement digestif : à signaler vite." },
  { mod: "4", recto: "Que mesure le moyen mnémo QQCO ?", verso: "Quantité, Qualité, Couleur, Odeur des selles et urines." },
  { mod: "4", recto: "Position pour aider à manger en sécurité ?", verso: "Assise, tronc redressé, tête légèrement penchée en avant." },
  { mod: "4", recto: "Premier réflexe en cas de fausse route ?", verso: "Stopper l'alimentation, ne pas faire boire, surveiller et alerter." },
  { mod: "4", recto: "Boisson adaptée en cas de fausse route aux liquides ?", verso: "Eau gélifiée ou eau épaissie." },
  { mod: "4", recto: "Signes de déshydratation chez la personne âgée ?", verso: "Pli cutané persistant, langue sèche, urines foncées rares, confusion." },
  { mod: "4", recto: "Comment surveiller la dénutrition ?", verso: "Suivi du poids et des ingesta (quantités réellement mangées)." },
  { mod: "4", recto: "Pouls normal de l'adulte au repos ?", verso: "60 à 100 battements par minute." },
  { mod: "4", recto: "SpO₂ normale chez l'adulte ?", verso: "Supérieure ou égale à 95 %." },
  { mod: "4", recto: "Que signifie DAR dans les transmissions ?", verso: "Données, Actions, Résultat." },
  { mod: "4", recto: "Que veut dire réajuster un soin ?", verso: "Adapter sa pratique après avoir évalué le résultat obtenu." },
  { mod: "4", recto: "La sonde urinaire : rôle AS ou IDE ?", verso: "Pose et ablation = IDE ; l'AS surveille (débit, aspect, coudure, sac) et transmet." },
];
