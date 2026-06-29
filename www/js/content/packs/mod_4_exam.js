export const cas = [
  {
    id: "mod_4_exam_toilette_hemiplegie",
    mod: "4",
    titre: "Toilette au lit d'une personne hémiplégique après AVC",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de médecine neurologique, en poste du matin. Vous agissez sous la responsabilité de l'infirmière, en collaboration avec elle.",
    situation: "Monsieur D., 72 ans, est hospitalisé depuis 5 jours pour un accident vasculaire cérébral ischémique ayant entraîné une hémiplégie droite. Antécédents : hypertension artérielle, diabète de type 2, surpoids. Il est partiellement dépendant : il ne peut pas mobiliser son côté droit, comprend les consignes mais s'exprime avec difficulté (dysarthrie). Ce matin, ses constantes sont : TA 138/82 mmHg, pouls 76/min, température 37,0 °C, glycémie capillaire 1,40 g/L. Il est alité, porte une protection (incontinence urinaire transitoire), et présente une rougeur persistante au niveau du sacrum qui ne blanchit pas à la pression. Il appréhende d'être mobilisé et craint de tomber. Vous devez réaliser sa toilette complète au lit.",
    questions: [
      {
        q: "Quels sont les buts et les principes fondamentaux à respecter lors de cette toilette au lit ?",
        type: "open",
        corrige: "Buts : assurer la propreté et le confort, prévenir l'altération cutanée et les infections, stimuler l'autonomie restante, maintenir l'image de soi, et profiter du soin comme moment d'observation et de relation. Principes : informer le patient et recueillir son consentement, respecter la pudeur et l'intimité (porte fermée, ne découvrir que la zone lavée), garantir la sécurité (eau à environ 37 °C, prévention des chutes, gants à usage unique pour les zones souillées), laver du plus propre vers le plus sale (visage en premier, périnée en dernier), rincer puis sécher en tamponnant surtout les plis, et solliciter la participation du côté valide (gauche) pour favoriser l'autonomie.",
      },
      {
        q: "La rougeur persistante au sacrum qui ne blanchit pas à la pression doit vous alerter. De quoi s'agit-il et quelles mesures de prévention mettez-vous en place ?",
        type: "open",
        corrige: "Il s'agit d'une escarre débutante au stade 1 (rougeur ne s'effaçant pas à la pression / érythème non blanchissant). Mesures de prévention : signaler immédiatement à l'IDE, mettre en place des changements de position réguliers (toutes les 2 à 3 heures) en alternant les appuis, installer un matelas ou un dispositif anti-escarre, éviter tout massage de la zone rougie, maintenir une peau propre et sèche (lutter contre la macération liée à l'incontinence en changeant la protection régulièrement), veiller à une bonne hydratation et à un apport nutritionnel adapté, surveiller les autres points d'appui (talons, occiput, coudes), et tracer l'observation et les actions dans le dossier de soins.",
      },
      {
        q: "Dans quel ordre devez-vous réaliser la toilette pour respecter la règle du plus propre vers le plus sale ?",
        type: "qcm",
        options: [
          "Parties génitales et siège, puis dos, puis thorax, puis visage",
          "Visage et cou, membres supérieurs, thorax et abdomen, dos, membres inférieurs, parties génitales et siège en dernier",
          "Membres inférieurs d'abord, puis le visage, puis le siège",
          "L'ordre n'a pas d'importance tant que tout est lavé",
        ],
        correct: 1,
        corrige: "On lave du plus propre vers le plus sale et du haut vers le bas : visage et cou, membres supérieurs et mains, thorax et abdomen, dos, membres inférieurs, puis parties génitales et siège en dernier. On change le gant et l'eau si besoin pour éviter la contamination.",
      },
      {
        q: "Comment habiller et déshabiller Monsieur D. en tenant compte de son hémiplégie droite ?",
        type: "open",
        corrige: "Règle à connaître : on déshabille en commençant par le membre sain (côté gauche) et on habille en commençant par le membre atteint (côté droit, paralysé). Ce principe permet d'étirer le moins possible le membre déficitaire et de faciliter le passage du vêtement. On manipule le côté atteint avec douceur en soutenant l'articulation (épaule, coude), sans tirer sur le bras hémiplégique pour éviter douleur et subluxation de l'épaule. Mnémotechnique : \\\"le sain se déshabille en premier, le malade s'habille en premier\\\".",
      },
      {
        q: "Quels éléments d'observation recueillis pendant la toilette devez-vous transmettre à l'infirmière ?",
        type: "open",
        corrige: "État cutané : la rougeur sacrée non blanchissante (escarre stade 1), l'état des autres points d'appui, l'hydratation et l'intégrité de la peau, la présence de plis macérés. État général : douleur exprimée ou repérée, fatigue, capacité de participation et autonomie du côté valide, difficultés d'élocution. Élimination : aspect des urines, fréquence des changes, incontinence. Comportement : appréhension, anxiété, qualité de la communication. Constantes anormales éventuelles. Toute transmission doit être orale à l'IDE et tracée par écrit dans le dossier de soins (transmissions ciblées).",
      },
    ],
    demarche: "Préparer le matériel et l'environnement (chambre chauffée, porte fermée, matériel à portée). Informer le patient et obtenir son consentement. Réaliser la toilette du haut vers le bas et du propre vers le sale, en sollicitant le côté valide. Surveiller en continu l'état cutané (escarre sacrée), prévenir l'altération cutanée par les changements de position et la gestion de l'incontinence. Habiller en commençant par le côté atteint. Installer le patient confortablement et en sécurité. Transmettre les observations à l'IDE et tracer le soin.",
  },
  {
    id: "mod_4_exam_refus_toilette_alzheimer",
    mod: "4",
    titre: "Refus de toilette chez une personne désorientée",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en EHPAD, en poste du matin. Vous intervenez dans le respect du projet d'accompagnement personnalisé de la résidente.",
    situation: "Madame R., 86 ans, vit en EHPAD depuis 2 ans. Elle est atteinte d'une maladie d'Alzheimer à un stade modéré à sévère. Antécédents : ostéoporose, troubles du comportement avec agitation en fin de matinée. Ce matin, lorsque vous vous présentez pour la toilette, elle refuse catégoriquement, repousse votre main, crie et semble apeurée. Elle n'est pas habillée et présente une odeur d'urine. Ses constantes de la veille étaient normales. Elle est habituellement plus calme en début de matinée et appréciait autrefois de se laver elle-même au lavabo.",
    questions: [
      {
        q: "Face à ce refus de soin, quelle attitude relationnelle adoptez-vous et que ne devez-vous surtout pas faire ?",
        type: "open",
        corrige: "Attitude attendue : rester calme, ne pas forcer ni contraindre physiquement, respecter le refus dans l'immédiat, se présenter et expliquer simplement le soin avec des phrases courtes, adopter une communication bienveillante (voix douce, sourire, contact visuel, gestes lents et annoncés). Chercher à comprendre la cause du refus (peur, douleur, pudeur, fatigue, incompréhension). Différer le soin et proposer de revenir plus tard, en s'adaptant au rythme et aux habitudes de la résidente (elle est plus calme en début de matinée). Ce qu'il ne faut pas faire : imposer la toilette de force, hausser le ton, infantiliser, agir brusquement ou laisser la personne dans un état d'inconfort sans rien transmettre. La contrainte sans justification relève de la maltraitance.",
      },
      {
        q: "Quels facteurs peuvent expliquer ce refus et comment pouvez-vous favoriser l'acceptation du soin ?",
        type: "open",
        corrige: "Facteurs possibles : troubles cognitifs (incompréhension du soin, vécu intrusif), peur, sentiment d'atteinte à la pudeur et à l'intimité, douleur (ostéoporose), inconfort, environnement anxiogène, approche trop rapide ou non annoncée, horaire inadapté. Pour favoriser l'acceptation : respecter les habitudes de vie et le rythme (intervenir en début de matinée quand elle est calme), préserver et stimuler l'autonomie en lui proposant de se laver elle-même au lavabo comme avant, fragmenter le soin, détourner l'attention par la parole ou un objet familier, garantir la pudeur (ne découvrir que la zone lavée), assurer une eau à bonne température, et solliciter au besoin l'IDE ou un collègue. Une diversion bienveillante et le respect des habitudes augmentent l'adhésion.",
      },
      {
        q: "Le refus de soin d'une personne, même atteinte de troubles cognitifs, impose à l'aide-soignant de :",
        type: "qcm",
        options: [
          "Réaliser la toilette de force pour garantir l'hygiène",
          "Respecter le refus, ne pas contraindre, rechercher la cause, différer le soin et transmettre",
          "Ignorer la résidente toute la journée",
          "Demander à la famille de signer une décharge avant tout soin",
        ],
        correct: 1,
        corrige: "Le respect de la personne et de son consentement prime. On ne contraint jamais physiquement : on respecte le refus, on en recherche la cause, on diffère et on adapte le soin, puis on transmet à l'IDE. Forcer relève de la maltraitance ; à l'inverse, négliger durablement l'hygiène constitue aussi une négligence à signaler.",
      },
      {
        q: "Pourquoi est-il important de maintenir et de stimuler l'autonomie de Madame R. lors de la toilette ?",
        type: "open",
        corrige: "Stimuler l'autonomie permet de préserver les capacités restantes le plus longtemps possible (prévention de la dépendance et du déclin fonctionnel), de maintenir l'estime de soi et l'image de soi, de respecter la dignité de la personne, et de réduire l'angoisse en lui redonnant un rôle actif et un sentiment de contrôle. Concrètement : lui laisser faire ce qu'elle peut (se laver le visage, les mains), guider et accompagner plutôt que faire à sa place, valoriser ses réussites. Cela s'inscrit dans la démarche de bientraitance et le projet d'accompagnement personnalisé.",
      },
      {
        q: "Quelles informations transmettez-vous à l'équipe à la suite de cet épisode de refus ?",
        type: "open",
        corrige: "Transmettre : le refus de soin et son contexte (heure, attitude, agitation, peur), les causes suspectées (douleur, incompréhension, horaire inadapté), les actions menées (soin différé, attitude apaisante) et leur résultat, l'état d'hygiène (odeur d'urine, change à réaliser), l'état cutané si observé, et toute évolution du comportement. La transmission est orale à l'IDE et écrite dans le dossier (transmissions ciblées), afin d'adapter le projet personnalisé et d'assurer la continuité et la cohérence de l'accompagnement par toute l'équipe.",
      },
    ],
    demarche: "Évaluer la situation sans dramatiser, respecter le refus et ne jamais contraindre. Rechercher la cause (douleur, peur, pudeur, horaire). Adapter l'approche : communication bienveillante, respect des habitudes et du rythme, stimulation de l'autonomie, préservation de la pudeur. Différer et proposer de nouveau le soin au moment opportun. Assurer a minima l'hygiène et le confort (change). Transmettre oralement et par écrit pour réajuster le projet personnalisé. S'inscrire dans une démarche de bientraitance.",
  },
  {
    id: "mod_4_exam_constipation_elimination",
    mod: "4",
    titre: "Aide à l'élimination et surveillance d'un trouble du transit",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de soins de suite et de réadaptation (SSR), en collaboration avec l'infirmière sous la responsabilité de laquelle vous agissez.",
    situation: "Madame B., 78 ans, est en SSR après une fracture du col du fémur opérée il y a 10 jours. Elle est en cours de rééducation à la marche mais reste peu mobile et alitée une grande partie de la journée. Antécédents : hypertension, constipation chronique. Traitement antalgique morphinique depuis l'intervention. Elle se plaint de douleurs abdominales, de ballonnements et n'a pas été à la selle depuis 4 jours. Elle boit peu et mange peu de fibres. Ses constantes sont normales. Elle exprime une gêne et une inquiétude à propos de son transit.",
    questions: [
      {
        q: "Quels facteurs expliquent le trouble du transit présenté par Madame B. ?",
        type: "open",
        corrige: "Facteurs identifiables : immobilité et alitement prolongés (la sédentarité ralentit le transit), traitement antalgique morphinique (les opioïdes sont fortement constipants), âge avancé, antécédent de constipation chronique, faible hydratation (boit peu), alimentation pauvre en fibres, douleur et appréhension à se déplacer aux toilettes. L'association de ces facteurs explique l'absence de selles depuis 4 jours, les douleurs abdominales et les ballonnements.",
      },
      {
        q: "Quelles actions relevant de votre rôle d'aide-soignant pouvez-vous mettre en place pour favoriser le transit ?",
        type: "open",
        corrige: "Actions relevant du rôle AS : encourager et aider à l'hydratation (proposer régulièrement à boire, viser un apport suffisant sauf contre-indication), favoriser une alimentation riche en fibres (fruits, légumes, céréales complètes) en lien avec l'équipe, stimuler la mobilisation et la marche selon les capacités, installer la résidente dans une position physiologique pour aller à la selle (position assise aux toilettes plutôt que le bassin si possible, respect de l'intimité et du temps nécessaire), respecter les habitudes d'élimination, masser éventuellement l'abdomen sur prescription/protocole, et transmettre. Tout laxatif ou lavement relève de la prescription et est administré par l'IDE.",
      },
      {
        q: "Que devez-vous observer et transmettre concernant l'élimination de Madame B. ?",
        type: "open",
        corrige: "Observer et transmettre : la date et l'heure des dernières selles, l'aspect des selles (consistance, couleur, présence de sang, de glaires), leur quantité et leur fréquence, la présence de douleurs abdominales, de ballonnements, de nausées ou de vomissements, l'aspect du ventre (distension), les bruits émis par la patiente, l'aspect et la quantité des urines. Surveiller l'apparition de signes d'alerte (fécalome, occlusion : arrêt total des selles et des gaz, vomissements). Transmission orale à l'IDE et écrite dans le dossier de soins.",
      },
      {
        q: "L'absence de selles depuis plusieurs jours avec ballonnements et douleurs abdominales peut évoluer vers une complication grave qu'il faut savoir repérer. Laquelle ?",
        type: "qcm",
        options: [
          "Une déshydratation isolée",
          "Un fécalome pouvant aller jusqu'à l'occlusion intestinale (fausse diarrhée de débordement, arrêt des selles et des gaz, vomissements)",
          "Une infection urinaire",
          "Une hypertension artérielle",
        ],
        correct: 1,
        corrige: "Une constipation négligée peut évoluer vers un fécalome (accumulation de selles dures dans le rectum), voire une occlusion intestinale. Signes d'alerte : douleurs et distension abdominales, arrêt des selles et des gaz, vomissements, et parfois une fausse diarrhée de débordement (selles liquides s'écoulant autour du fécalome). C'est une urgence à signaler immédiatement à l'IDE.",
      },
      {
        q: "Comment respectez-vous la dignité et l'intimité de Madame B. lors de l'aide à l'élimination ?",
        type: "open",
        corrige: "Respecter l'intimité et la pudeur : fermer la porte, installer un paravent, ne découvrir que le nécessaire, frapper avant d'entrer. Laisser à la personne le temps et le calme nécessaires, ne pas la presser, lui assurer une sonnette à portée. Privilégier une installation physiologique et digne (toilettes ou chaise percée plutôt que bassin si l'état le permet). Assurer ensuite l'hygiène (toilette périnéale du propre vers le sale), changer la protection, aérer, et préserver une attitude non jugeante. Recueillir le consentement et expliquer les gestes maintiennent la dignité de la personne.",
      },
    ],
    demarche: "Repérer les facteurs de risque de constipation (immobilité, opioïdes, hydratation, fibres). Mettre en oeuvre les actions du rôle AS : hydratation, mobilisation, alimentation adaptée, installation physiologique, respect des habitudes et de l'intimité. Surveiller l'élimination et repérer les signes d'alerte (fécalome, occlusion). Transmettre à l'IDE oralement et par écrit. Tout traitement médicamenteux relève de la prescription et de l'IDE.",
  },
];
