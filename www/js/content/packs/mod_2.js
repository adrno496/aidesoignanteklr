// Pack MODULE 2 — Repérage et prévention des situations à risque
// (chutes, escarres, maltraitance, infection). Bloc 1, 21 h. (DEAS, arrêté 10 juin 2021)

export const fiches = [
  {
    id: "f_2_chutes", mod: "2", type: "cours",
    titre: "Prévention des chutes de la personne âgée",
    resume: "Repérer les facteurs de risque et agir au quotidien pour prévenir la chute.",
    tags: ["chute", "prévention", "personne âgée", "mobilité", "sécurité"],
    html: `
      <p>La <span class="key" data-term="chute">chute</span> est la première cause d'accident de la vie courante chez la personne âgée. Elle peut entraîner fractures (col du fémur), perte d'autonomie, peur de retomber (<span class="key" data-term="syndrome post-chute">syndrome post-chute</span>) et grabatisation.</p>
      <h3>Facteurs de risque</h3>
      <ul>
        <li><strong>Intrinsèques (liés à la personne)</strong> : âge, troubles de l'équilibre et de la marche, baisse de la vue, hypotension orthostatique, dénutrition, troubles cognitifs, antécédent de chute.</li>
        <li><strong>Extrinsèques (liés à l'environnement)</strong> : sol glissant ou encombré, tapis, mauvais éclairage, chaussures inadaptées, mobilier instable, absence de barre d'appui.</li>
        <li><strong>Iatrogènes</strong> : certains traitements (somnifères, hypotenseurs) — la gestion relève de l'IDE et du médecin ; l'AS <strong>observe et transmet</strong> les somnolences ou vertiges.</li>
      </ul>
      <h3>Rôle de l'aide-soignant·e</h3>
      <ul>
        <li>Sécuriser l'environnement : éclairage, sol sec, chemin dégagé, sonnette à portée, frein du lit/fauteuil.</li>
        <li>Chaussage fermé et antidérapant, lunettes propres, aides techniques à portée (canne, déambulateur).</li>
        <li>Accompagner les déplacements, prévenir l'hypotension (se lever en deux temps).</li>
        <li>Surveiller et transmettre tout changement de comportement ou de mobilité.</li>
      </ul>
      <div class="callout"><div class="callout-t">Si la personne chute</div>Ne pas relever seul·e brutalement : rassurer, évaluer la douleur et la mobilité, appeler l'IDE, ne pas mobiliser si suspicion de fracture, tracer l'événement (heure, circonstances, état).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo « SOL »</div><strong>S</strong>ol sec et dégagé · <strong>O</strong>bjets à portée (sonnette, lunettes) · <strong>L</strong>umière suffisante.</div>
    `,
    refs: ["Module 2"],
  },
  {
    id: "f_2_escarres", mod: "2", type: "cours",
    titre: "Prévention des escarres",
    resume: "Comprendre, repérer et prévenir l'escarre par les soins de prévention.",
    tags: ["escarre", "appui", "peau", "prévention", "mobilisation"],
    html: `
      <p>L'<span class="key" data-term="escarre">escarre</span> est une lésion de la peau et des tissus due à une <strong>pression prolongée</strong> sur un point d'appui, souvent au niveau d'une saillie osseuse, chez une personne immobilisée.</p>
      <h3>Mécanisme et facteurs favorisants</h3>
      <ul>
        <li><strong>Pression</strong>, <strong>cisaillement</strong> et <strong>friction</strong> + <strong>macération</strong> (humidité).</li>
        <li>Immobilité, dénutrition et déshydratation, incontinence, troubles de la sensibilité, âge, mauvais état général.</li>
      </ul>
      <h3>Zones à risque</h3>
      <ul>
        <li>En décubitus dorsal : sacrum, talons, occiput, coudes, omoplates.</li>
        <li>En position assise : ischions.</li>
        <li>En décubitus latéral : trochanters, malléoles, oreilles.</li>
      </ul>
      <h3>Repérage des stades</h3>
      <table class="tbl">
        <tr><th>Stade</th><th>Aspect</th></tr>
        <tr><td>Stade 1</td><td>Rougeur qui ne blanchit pas à la pression (peau intacte)</td></tr>
        <tr><td>Stade 2</td><td>Atteinte superficielle : phlyctène ou ulcération peu profonde</td></tr>
        <tr><td>Stade 3</td><td>Atteinte du tissu sous-cutané (perte de toute l'épaisseur de la peau)</td></tr>
        <tr><td>Stade 4</td><td>Atteinte profonde : muscle, tendon ou os visibles</td></tr>
      </table>
      <h3>Prévention par l'AS</h3>
      <ul>
        <li><strong>Changements de position</strong> réguliers (env. toutes les 2 à 3 h selon protocole).</li>
        <li><strong>Effleurage</strong> doux des points d'appui (sans masser ni frictionner une rougeur).</li>
        <li>Matelas/coussins anti-escarre, peau propre et sèche, linge sans plis ni miettes.</li>
        <li>Hydratation de la peau, surveillance de l'alimentation et des apports hydriques.</li>
        <li>Observation quotidienne de la peau et transmission immédiate de toute rougeur.</li>
      </ul>
      <div class="callout"><div class="callout-t">À ne pas faire</div>Pas de massage appuyé ni de glaçons/sèche-cheveux sur les points d'appui : ces gestes aggravent la lésion. Les soins de plaie constituée relèvent de l'IDE.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo « les 4 piliers »</div><strong>Mobiliser</strong> · <strong>Observer la peau</strong> · <strong>Maintenir propre et sec</strong> · <strong>Nourrir et hydrater</strong>.</div>
    `,
    refs: ["Module 2"],
  },
  {
    id: "f_2_maltraitance", mod: "2", type: "cours",
    titre: "Repérage de la maltraitance et bientraitance",
    resume: "Reconnaître les formes de maltraitance et adopter une posture bientraitante.",
    tags: ["maltraitance", "bientraitance", "signalement", "vulnérabilité", "dignité"],
    html: `
      <p>La <span class="key" data-term="maltraitance">maltraitance</span> est une violence ou une négligence qui porte atteinte à la dignité, à l'intégrité ou aux droits d'une personne vulnérable. La <span class="key" data-term="bientraitance">bientraitance</span> est la démarche inverse : respecter la personne, ses choix et son rythme.</p>
      <h3>Formes de maltraitance</h3>
      <ul>
        <li><strong>Physique</strong> : coups, contention abusive, brusquerie.</li>
        <li><strong>Psychologique</strong> : humiliation, infantilisation, menaces, chantage.</li>
        <li><strong>Négligences</strong> : passives (oubli) ou actives (privation de soins, de nourriture, d'hygiène).</li>
        <li><strong>Financière</strong>, <strong>sexuelle</strong>, <strong>médicamenteuse</strong>, atteinte aux droits civiques.</li>
      </ul>
      <h3>Signes d'alerte</h3>
      <ul>
        <li>Hématomes inexpliqués, dénutrition, hygiène négligée, peur, repli, anxiété en présence de certaines personnes.</li>
      </ul>
      <h3>Conduite de l'AS</h3>
      <ul>
        <li><strong>Observer, tracer et transmettre</strong> des faits objectifs (sans interpréter ni accuser).</li>
        <li>Alerter l'IDE et la hiérarchie ; obligation de signaler une situation préoccupante.</li>
        <li>S'interroger aussi sur ses propres pratiques (maltraitance « ordinaire » : tutoiement non consenti, soin précipité).</li>
      </ul>
      <div class="callout"><div class="callout-t">Cadre</div>Toute personne, y compris l'AS, a l'obligation de signaler les mauvais traitements infligés à une personne vulnérable. Le secret professionnel ne s'oppose pas au signalement de faits de maltraitance.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo « bientraitance »</div><strong>Respecter</strong> le rythme · <strong>Informer</strong> et demander l'accord · <strong>Préserver l'intimité</strong> · <strong>Écouter</strong>.</div>
    `,
    refs: ["Module 2"],
  },
  {
    id: "f_2_infection", mod: "2", type: "cours",
    titre: "Prévention du risque infectieux (IAS)",
    resume: "Comprendre la chaîne de transmission et appliquer les précautions standard.",
    tags: ["infection", "IAS", "précautions standard", "hygiène", "transmission"],
    html: `
      <p>Une <span class="key" data-term="infection associée aux soins">infection associée aux soins (IAS)</span> survient au cours ou à la suite d'une prise en charge. Sa prévention repose sur la rupture de la <strong>chaîne de transmission</strong>.</p>
      <h3>La chaîne de transmission</h3>
      <ul>
        <li><strong>Réservoir</strong> (humain, matériel, environnement) → <strong>porte de sortie</strong> → <strong>mode de transmission</strong> (contact, gouttelettes, air) → <strong>porte d'entrée</strong> → <strong>hôte réceptif</strong>.</li>
        <li>Casser un seul maillon suffit à empêcher l'infection : c'est tout l'objet de l'hygiène.</li>
      </ul>
      <h3>Les précautions standard (pour tout patient, tout le temps)</h3>
      <ul>
        <li><strong>Hygiène des mains</strong> : friction hydro-alcoolique de référence ; lavage si mains souillées.</li>
        <li><strong>Port de gants</strong> si contact avec liquides biologiques, muqueuses, peau lésée (1 patient = 1 paire).</li>
        <li><strong>Tablier/surblouse</strong>, <strong>masque</strong> et <strong>lunettes</strong> selon le risque de projection.</li>
        <li>Gestion du linge, des déchets (DASRI) et des excreta ; bionettoyage des surfaces.</li>
        <li>Tenue professionnelle propre, manches courtes, pas de bijoux, ongles courts.</li>
      </ul>
      <h3>Précautions complémentaires (en plus des standard)</h3>
      <table class="tbl">
        <tr><th>Type</th><th>Exemple</th><th>Mesure clé</th></tr>
        <tr><td>Contact (C)</td><td>BMR, gale</td><td>Gants + tablier, chambre individuelle</td></tr>
        <tr><td>Gouttelettes (G)</td><td>Grippe</td><td>Masque chirurgical</td></tr>
        <tr><td>Air (A)</td><td>Tuberculose</td><td>Masque FFP2, chambre à pression négative</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Rôle de l'AS</div>Appliquer rigoureusement les protocoles d'hygiène, signaler tout signe d'infection (fièvre, rougeur, écoulement) et transmettre. L'antibiothérapie et les prélèvements relèvent du médecin et de l'IDE.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo « C-G-A »</div><strong>C</strong>ontact = gants/tablier · <strong>G</strong>outtelettes = masque chirurgical · <strong>A</strong>ir = FFP2.</div>
    `,
    refs: ["Module 2"],
  },
];

export const qcm = [
  {
    mod: "2", q: "Parmi ces éléments, lequel est un facteur de risque de chute EXTRINSÈQUE ?",
    options: ["Un trouble de l'équilibre", "Une baisse de la vue", "Un tapis non fixé au sol", "Une hypotension orthostatique"],
    correct: 2,
    explication: "Un facteur extrinsèque est lié à l'environnement : tapis, sol glissant, mauvais éclairage. Les troubles de l'équilibre, de la vue et l'hypotension sont des facteurs intrinsèques (liés à la personne).",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Que doit faire en priorité l'aide-soignant·e qui découvre une personne au sol après une chute ?",
    options: ["La relever rapidement seul·e", "La rassurer, évaluer douleur/mobilité et alerter l'IDE", "Lui donner à boire", "La remettre au lit sans rien dire"],
    correct: 1,
    explication: "On ne relève jamais brutalement ni seul·e en cas de doute. On rassure, on évalue la douleur et la mobilité, on alerte l'IDE, on ne mobilise pas en cas de suspicion de fracture, et on trace l'événement.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Le syndrome post-chute se caractérise principalement par :",
    options: ["Une fracture du col du fémur", "Une peur de retomber entraînant un repli et une perte d'autonomie", "Une infection urinaire", "Une escarre du sacrum"],
    correct: 1,
    explication: "Le syndrome post-chute associe peur de retomber, perte de confiance et réduction des déplacements, favorisant la grabatisation. La mobilisation et la réassurance sont essentielles.",
    ref: "Module 2", diff: 2,
  },
  {
    mod: "2", q: "Comment l'aide-soignant·e peut-elle prévenir l'hypotension orthostatique lors du lever ?",
    options: ["Lever la personne très vite", "Faire lever la personne en deux temps (assise puis debout)", "Lui interdire de se lever", "Augmenter son traitement"],
    correct: 1,
    explication: "Le lever en deux temps (s'asseoir au bord du lit quelques instants avant de se mettre debout) limite la chute de tension. Modifier un traitement n'est pas du rôle de l'AS.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Qu'est-ce qu'une escarre ?",
    options: ["Une infection de la peau", "Une lésion due à une pression prolongée sur un point d'appui", "Une allergie cutanée", "Une brûlure"],
    correct: 1,
    explication: "L'escarre est une lésion ischémique de la peau et des tissus due à une pression prolongée, le plus souvent sur une saillie osseuse, chez une personne immobilisée.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Chez une personne alitée en décubitus dorsal, quelles zones sont les plus exposées à l'escarre ?",
    options: ["Les ischions", "Le sacrum et les talons", "Les trochanters", "Le bout des doigts"],
    correct: 1,
    explication: "En décubitus dorsal, les points d'appui à risque sont le sacrum, les talons, l'occiput, les coudes et les omoplates. Les ischions concernent la position assise, les trochanters le décubitus latéral.",
    ref: "Module 2", diff: 2,
  },
  {
    mod: "2", q: "Une rougeur qui ne blanchit pas à la pression sur un talon correspond à :",
    options: ["Une escarre de stade 1", "Une escarre de stade 3", "Une mycose", "Une plaie infectée"],
    correct: 0,
    explication: "Le stade 1 est une rougeur persistante (érythème qui ne blanchit pas à la pression) sur peau encore intacte. C'est le premier signe d'alerte à transmettre immédiatement.",
    ref: "Module 2", diff: 2,
  },
  {
    mod: "2", q: "Face à une rougeur sur un point d'appui, l'aide-soignant·e doit :",
    options: ["Masser énergiquement la zone", "Appliquer un glaçon", "Soulager l'appui, observer et transmettre", "Appliquer un sèche-cheveux chaud"],
    correct: 2,
    explication: "Il faut supprimer/réduire l'appui (changement de position), surveiller et transmettre. Masser, glacer ou chauffer une rougeur aggrave la lésion : ces gestes sont proscrits.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Quel facteur général favorise l'apparition d'une escarre ?",
    options: ["Une bonne hydratation", "La dénutrition et la déshydratation", "Une activité physique régulière", "Une peau bien hydratée"],
    correct: 1,
    explication: "La dénutrition et la déshydratation fragilisent la peau et les tissus. D'où l'importance de surveiller alimentation et apports hydriques dans la prévention des escarres.",
    ref: "Module 2", diff: 2,
  },
  {
    mod: "2", q: "Quel rythme de changement de position est généralement recommandé chez une personne à risque d'escarre (selon protocole) ?",
    options: ["Toutes les 2 à 3 heures", "Une fois par jour", "Toutes les 12 heures", "Jamais, pour ne pas la déranger"],
    correct: 0,
    explication: "Les changements de position toutes les 2 à 3 heures environ (selon le protocole et l'état de la personne) répartissent les points d'appui et réduisent le risque d'escarre.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Oublier de changer la protection d'une personne incontinente toute une journée est une forme de :",
    options: ["Maltraitance physique", "Négligence", "Maltraitance financière", "Bientraitance"],
    correct: 1,
    explication: "La privation ou l'oubli de soins d'hygiène relève de la négligence (maltraitance par défaut de soin). La macération favorise de plus les escarres et les infections.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Tutoyer systématiquement une personne âgée sans son accord et la presser pendant la toilette relève de :",
    options: ["Une pratique normale", "La maltraitance dite « ordinaire »", "La bientraitance", "Un soin de qualité"],
    correct: 1,
    explication: "Le tutoiement non consenti, l'infantilisation et la précipitation constituent une maltraitance « ordinaire » : des atteintes banalisées à la dignité. La bientraitance suppose respect et consentement.",
    ref: "Module 2", diff: 2,
  },
  {
    mod: "2", q: "Lorsqu'une aide-soignante suspecte une maltraitance, que doit-elle transmettre ?",
    options: ["Son interprétation des faits", "Des accusations nominatives", "Des faits objectifs observés (lésions, comportements)", "Rien, par secret professionnel"],
    correct: 2,
    explication: "On transmet des faits objectifs, datés et précis, sans interpréter ni accuser. Le secret professionnel ne s'oppose pas au signalement d'une maltraitance ; il y a obligation de signaler.",
    ref: "Module 2", diff: 2,
  },
  {
    mod: "2", q: "La bientraitance se traduit par :",
    options: ["Faire le soin le plus vite possible", "Respecter le rythme, l'intimité et le consentement de la personne", "Décider à la place de la personne", "Ignorer ses demandes"],
    correct: 1,
    explication: "La bientraitance repose sur le respect du rythme, des choix, de l'intimité et du consentement, ainsi que sur l'écoute. C'est une démarche centrée sur la personne.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Qu'est-ce qu'une infection associée aux soins (IAS) ?",
    options: ["Une infection présente avant l'hospitalisation", "Une infection survenant au cours ou à la suite d'une prise en charge", "Une allergie médicamenteuse", "Une maladie génétique"],
    correct: 1,
    explication: "Une IAS survient au cours ou au décours d'une prise en charge (soins, hospitalisation) et n'était ni présente ni en incubation au début de cette prise en charge.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Les précautions standard s'appliquent :",
    options: ["Seulement aux patients infectés", "À tous les patients, en permanence", "Uniquement au bloc opératoire", "Seulement la nuit"],
    correct: 1,
    explication: "Les précautions standard s'appliquent à tout patient, en permanence, quel que soit son statut infectieux connu ou non. Elles sont la base de la prévention des IAS.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Pour casser la chaîne de transmission d'une infection, il faut :",
    options: ["Agir sur tous les maillons en même temps obligatoirement", "Rompre au moins un maillon de la chaîne", "Attendre la fièvre", "Isoler systématiquement tous les patients"],
    correct: 1,
    explication: "Rompre un seul maillon (réservoir, transmission, porte d'entrée, hôte réceptif) suffit à empêcher l'infection. L'hygiène des mains agit sur le mode de transmission par contact.",
    ref: "Module 2", diff: 2,
  },
  {
    mod: "2", q: "Quelle précaution complémentaire est requise pour entrer dans la chambre d'un patient atteint de tuberculose pulmonaire (transmission par voie aérienne) ?",
    options: ["Un masque chirurgical", "Un masque FFP2", "Des gants uniquement", "Aucune précaution"],
    correct: 1,
    explication: "Les précautions « Air » (ex. tuberculose) imposent un masque de protection respiratoire FFP2 et idéalement une chambre à pression négative. Le masque chirurgical suffit pour les gouttelettes (ex. grippe).",
    ref: "Module 2", diff: 3,
  },
  {
    mod: "2", q: "Quand l'aide-soignant·e doit-elle porter des gants à usage unique ?",
    options: ["En permanence avec chaque patient", "En cas de contact avec des liquides biologiques, muqueuses ou peau lésée", "Jamais", "Seulement pour faire les lits"],
    correct: 1,
    explication: "Les gants se portent lors d'un risque de contact avec sang, liquides biologiques, muqueuses ou peau lésée : une paire par patient et par soin. Ils ne remplacent pas l'hygiène des mains.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Quelle est la mesure d'hygiène la plus efficace pour prévenir la transmission croisée des micro-organismes ?",
    options: ["Le port de gants", "L'hygiène des mains", "Le port d'un masque", "Le bionettoyage des sols"],
    correct: 1,
    explication: "L'hygiène des mains (friction hydro-alcoolique en référence) est la mesure la plus efficace contre la transmission croisée. Elle reste indispensable même avec des gants.",
    ref: "Module 2", diff: 1,
  },
  {
    mod: "2", q: "Face à une rougeur, un écoulement ou une fièvre chez un résident, l'aide-soignant·e doit :",
    options: ["Prescrire un antibiotique", "Réaliser un prélèvement bactériologique", "Observer, transmettre à l'IDE et tracer", "Ne rien faire"],
    correct: 2,
    explication: "L'AS observe les signes d'infection, les transmet à l'IDE et les trace. La prescription d'antibiotiques et les prélèvements relèvent du médecin et de l'IDE.",
    ref: "Module 2", diff: 2,
  },
];

export const flashcards = [
  { mod: "2", recto: "Différence entre facteur de chute intrinsèque et extrinsèque ?", verso: "Intrinsèque = lié à la personne (équilibre, vue, hypotension) ; extrinsèque = lié à l'environnement (sol, tapis, éclairage, chaussures)." },
  { mod: "2", recto: "Qu'est-ce que le syndrome post-chute ?", verso: "Peur de retomber après une chute, entraînant repli, réduction des déplacements et risque de perte d'autonomie (grabatisation)." },
  { mod: "2", recto: "Que faire si une personne est retrouvée au sol ?", verso: "Rassurer, évaluer douleur et mobilité, ne pas mobiliser si suspicion de fracture, alerter l'IDE, tracer l'événement." },
  { mod: "2", recto: "Définition d'une escarre ?", verso: "Lésion de la peau et des tissus due à une pression prolongée sur un point d'appui chez une personne immobilisée." },
  { mod: "2", recto: "Trois facteurs mécaniques de l'escarre ?", verso: "Pression, cisaillement et friction, aggravés par la macération (humidité)." },
  { mod: "2", recto: "Points d'appui à risque en décubitus dorsal ?", verso: "Sacrum, talons, occiput, coudes, omoplates." },
  { mod: "2", recto: "À quoi correspond une escarre de stade 1 ?", verso: "Une rougeur persistante qui ne blanchit pas à la pression, sur peau encore intacte." },
  { mod: "2", recto: "Gestes interdits sur une rougeur d'appui ?", verso: "Masser énergiquement, appliquer un glaçon ou de l'air chaud : ils aggravent la lésion." },
  { mod: "2", recto: "Quatre piliers de la prévention des escarres ?", verso: "Mobiliser (changer de position), observer la peau, maintenir propre et sec, nourrir et hydrater." },
  { mod: "2", recto: "Cite trois formes de maltraitance.", verso: "Physique, psychologique, négligence (et aussi financière, sexuelle, médicamenteuse, atteinte aux droits)." },
  { mod: "2", recto: "Qu'est-ce que la bientraitance ?", verso: "Démarche de respect de la personne : son rythme, ses choix, son intimité, son consentement et son écoute." },
  { mod: "2", recto: "Que transmet l'AS en cas de suspicion de maltraitance ?", verso: "Des faits objectifs, datés et précis, sans interpréter ni accuser ; alerte IDE et hiérarchie (obligation de signalement)." },
  { mod: "2", recto: "Qu'est-ce qu'une IAS ?", verso: "Une infection associée aux soins : infection survenant au cours ou à la suite d'une prise en charge." },
  { mod: "2", recto: "À qui s'appliquent les précautions standard ?", verso: "À tous les patients, en permanence, quel que soit leur statut infectieux." },
  { mod: "2", recto: "Mesure d'hygiène la plus efficace contre la transmission croisée ?", verso: "L'hygiène des mains (friction hydro-alcoolique de référence)." },
  { mod: "2", recto: "Quel masque pour les précautions « Air » (ex. tuberculose) ?", verso: "Un masque FFP2 (le masque chirurgical suffit pour les gouttelettes, ex. grippe)." },
  { mod: "2", recto: "Quand porter des gants à usage unique ?", verso: "En cas de contact avec sang, liquides biologiques, muqueuses ou peau lésée : une paire par patient et par soin." },
];
