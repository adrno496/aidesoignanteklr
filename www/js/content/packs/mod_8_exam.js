export const cas = [
  {
    id: "mod_8_exam_bionettoyage_chambre",
    mod: "8",
    titre: "Bionettoyage d'une chambre en départ d'un patient porteur de BMR",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) dans un service de médecine. Vous travaillez en binôme avec l'infirmière. Le cadre de santé vous confie la remise en état d'une chambre après le départ d'un patient.",
    situation: "Mme L., 78 ans, vient de quitter le service après une hospitalisation de trois semaines. Elle était porteuse d'une bactérie multirésistante (BMR) de type SARM (staphylocoque doré résistant à la méticilline) identifiée sur un prélèvement d'escarre sacrée. La chambre était en précautions complémentaires de type contact. Vous devez réaliser le bionettoyage complet de la chambre (sol, surfaces, mobilier, sanitaires) avant l'arrivée d'un nouveau patient prévue en début d'après-midi. Le chariot de ménage et les produits détergents-désinfectants sont disponibles dans le local dédié.",
    questions: [
      {
        q: "Définissez ce qu'est le bionettoyage et précisez les trois opérations qu'il associe.",
        type: "open",
        corrige: "Le bionettoyage est un procédé qui vise à réduire la contamination microbiologique des surfaces. Il associe trois opérations : 1) le nettoyage (action mécanique et détergent qui élimine les salissures et la matière organique), 2) le rinçage (si nécessaire selon le produit), et 3) la désinfection (destruction des micro-organismes par un produit désinfectant). On retient souvent la séquence nettoyer puis désinfecter, ou l'emploi d'un produit détergent-désinfectant en une seule étape."
      },
      {
        q: "Dans quel ordre devez-vous procéder pour bionettoyer la chambre ? Justifiez la logique du sens du nettoyage.",
        type: "open",
        corrige: "On procède du plus propre vers le plus sale et du haut vers le bas. Ordre attendu : surfaces hautes et mobilier (table, adaptable, barrières de lit, poignées, interrupteurs) avant les surfaces basses, puis le sol en terminant par la zone près de la porte, et les sanitaires en dernier. Logique : éviter de recontaminer une zone déjà nettoyée, ne pas recroiser les zones propres avec le matériel sale, et terminer par le point le plus contaminé (WC) pour ne pas disséminer les germes."
      },
      {
        q: "Quels équipements de protection individuelle (EPI) portez-vous pour réaliser ce bionettoyage en chambre de précautions contact ?",
        type: "open",
        corrige: "Tenue professionnelle propre, gants à usage unique (gants de ménage adaptés au produit), tablier ou surblouse à usage unique pour protéger la tenue, et si risque de projection un masque et des lunettes. Hygiène des mains par friction hydro-alcoolique avant et après le retrait des EPI. Les EPI sont retirés et éliminés dans la chambre avant d'en sortir."
      },
      {
        q: "Concernant la technique de lavage du sol avec la méthode au mouillé, quelle affirmation est exacte ?",
        type: "qcm",
        options: [
          "On utilise le même bandeau de lavage pour plusieurs chambres afin d'économiser le matériel",
          "On utilise un bandeau de lavage à usage unique ou décontaminé, propre à la chambre, jeté ou envoyé en traitement après usage",
          "Le balayage à sec est recommandé pour soulever d'abord la poussière",
          "On nettoie de la porte vers le fond de la chambre"
        ],
        correct: 1,
        corrige: "Le balayage à sec est proscrit en milieu de soins car il remet la poussière et les micro-organismes en suspension dans l'air ; on lui préfère le balayage humide. Le bandeau est à usage unique ou décontaminé et dédié à la chambre. On lave du fond vers la porte pour sortir en marche arrière sans repasser sur le sol propre. Réponse B."
      },
      {
        q: "Une fois le bionettoyage terminé, quelles précautions et quelle traçabilité devez-vous assurer avant l'arrivée du nouveau patient ?",
        type: "open",
        corrige: "Laisser respecter le temps de séchage et le temps de contact du désinfectant. Aérer la chambre. Réaliser l'hygiène des mains après retrait des EPI. Nettoyer et décontaminer le matériel de ménage et le chariot. Renseigner la fiche de traçabilité du bionettoyage (date, heure, identité de l'agent, type de nettoyage réalisé : départ/quotidien). Signaler que la chambre est prête à l'IDE ou au cadre. Vérifier le réapprovisionnement (linge, consommables)."
      }
    ],
    demarche: "Le jury attend : préparation (tenue, EPI, chariot, produits), hygiène des mains, respect du principe propre vers sale et haut vers bas, balayage humide puis lavage du sol du fond vers la porte, sanitaires en dernier, respect du temps de contact, décontamination du matériel, traçabilité et transmission. En situation BMR départ, il s'agit d'un nettoyage approfondi de type bionettoyage de sortie."
  },
  {
    id: "mod_8_exam_precautions_complementaires",
    mod: "8",
    titre: "Mise en place de précautions complémentaires gouttelettes",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de gériatrie. Vous prenez votre poste du matin et l'infirmière vous transmet l'installation d'un nouveau patient.",
    situation: "M. R., 84 ans, est admis pour une fièvre à 38,9 degrés, une toux et un encombrement bronchique évoluant depuis 48 heures. Antécédents : BPCO et insuffisance cardiaque. Le médecin suspecte une grippe et prescrit la mise en place de précautions complémentaires de type gouttelettes en attendant les résultats du test. Le patient est installé en chambre individuelle. Constantes à l'entrée : température 38,9 degrés, fréquence respiratoire 24/min, saturation 92 pour cent en air ambiant, fréquence cardiaque 96/min, tension 138/82 mmHg.",
    questions: [
      {
        q: "Rappelez la différence entre précautions standard et précautions complémentaires.",
        type: "open",
        corrige: "Les précautions standard s'appliquent à tout patient quel que soit son statut infectieux, en permanence et par tout soignant : hygiène des mains, port de gants/tablier selon le risque de contact avec liquides biologiques, gestion du linge et des déchets, prévention des AES. Les précautions complémentaires s'ajoutent aux précautions standard pour un patient porteur ou suspect d'un agent infectieux transmissible ; elles sont de trois types selon le mode de transmission : contact (C), gouttelettes (G) et air (A)."
      },
      {
        q: "Quelles mesures concrètes mettez-vous en place pour des précautions complémentaires gouttelettes ?",
        type: "open",
        corrige: "Chambre individuelle (ou regroupement de patients porteurs du même agent), signalisation à la porte. Port d'un masque chirurgical par le soignant dès l'entrée dans la chambre (transmission à courte distance, environ 1 à 2 mètres). Port d'un masque chirurgical par le patient lors des déplacements hors de la chambre, qui sont limités. Hygiène des mains par friction hydro-alcoolique. Tablier et gants selon précautions standard si contact avec liquides biologiques. Information du patient et de l'entourage."
      },
      {
        q: "Quel type de masque le soignant doit-il porter pour entrer dans la chambre de M. R. ?",
        type: "qcm",
        options: [
          "Un masque FFP2",
          "Un masque chirurgical (type II)",
          "Aucun masque n'est nécessaire",
          "Un masque en tissu personnel"
        ],
        correct: 1,
        corrige: "Pour les précautions gouttelettes, le masque chirurgical suffit car la transmission se fait par des gouttelettes de grande taille à courte distance. Le masque FFP2 est réservé aux précautions de type air (tuberculose, rougeole, certains gestes générateurs d'aérosols). Réponse B."
      },
      {
        q: "M. R. a une saturation à 92 pour cent. En tant qu'aide-soignant, que faites-vous de cette donnée et quel est votre rôle de surveillance ?",
        type: "open",
        corrige: "La saturation à 92 pour cent est basse et doit être transmise sans délai à l'IDE car elle relève du rôle infirmier/médical (oxygénothérapie éventuelle). Mon rôle AS : mesurer et tracer les constantes dans mon champ de compétence, surveiller la fréquence et l'aspect respiratoire (essoufflement, cyanose, encombrement, coloration), installer le patient en position demi-assise pour faciliter la respiration, surveiller la température et alerter en cas d'aggravation. Toute donnée anormale est transmise immédiatement."
      },
      {
        q: "Comment organisez-vous l'élimination des déchets et du linge dans cette chambre ?",
        type: "open",
        corrige: "Les déchets de soins potentiellement contaminés (mouchoirs, masques, protections) sont éliminés dans la filière DASRI (déchets d'activités de soins à risques infectieux), sac jaune, dans la chambre. Le linge est évacué dans le sac à linge prévu, fermé dans la chambre, sans le poser au sol ni le secouer. On ne sort pas le matériel de la chambre sans précaution. Hygiène des mains après manipulation et retrait des EPI avant de quitter la chambre."
      }
    ],
    demarche: "Le jury attend : application systématique des précautions standard, ajout des précautions gouttelettes (chambre seule, signalisation, masque chirurgical, hygiène des mains, masque au patient en déplacement), surveillance clinique respiratoire dans le champ AS avec transmission immédiate des anomalies à l'IDE, gestion correcte des déchets DASRI et du linge, information du patient. Posture de collaboration et de traçabilité."
  },
  {
    id: "mod_8_exam_hygiene_mains_aes",
    mod: "8",
    titre: "Hygiène des mains et conduite à tenir devant un accident d'exposition au sang",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de chirurgie. Vous réalisez une toilette et réfectionnez le lit d'un patient opéré la veille.",
    situation: "M. T., 56 ans, opéré d'une prothèse de hanche, présente un pansement de cicatrice légèrement souillé. En refaisant le lit, vous vous piquez le doigt avec une aiguille à suture qui avait été laissée par mégarde dans les draps. La piqûre saigne légèrement. Le patient n'a pas de pathologie infectieuse connue mais son statut sérologique n'est pas documenté. Il est 9 h 30, l'IDE est dans le service et le médecin du travail est joignable.",
    questions: [
      {
        q: "Citez et décrivez les étapes immédiates de la conduite à tenir face à cet accident d'exposition au sang (AES).",
        type: "open",
        corrige: "1) Ne pas faire saigner en pressant la plaie, mais nettoyer immédiatement à l'eau et au savon puis rincer. 2) Désinfecter par trempage ou application d'un antiseptique (par exemple dérivé chloré type Dakin, ou polyvidone iodée) pendant au moins 5 minutes. 3) Alerter et se signaler sans délai (IDE, cadre). 4) Consulter en urgence un médecin référent (médecine du travail ou urgences) dans les meilleurs délais, idéalement dans les 4 heures, pour évaluer le risque et un éventuel traitement post-exposition. 5) Évaluer le statut sérologique du patient source (avec son accord). 6) Déclarer l'accident du travail dans les délais légaux et assurer la traçabilité."
      },
      {
        q: "Quelle est la première action à réaliser immédiatement après la piqûre ?",
        type: "qcm",
        options: [
          "Presser fortement la plaie pour faire sortir le sang",
          "Nettoyer la plaie à l'eau et au savon puis appliquer un antiseptique",
          "Mettre un pansement sec et continuer le soin",
          "Attendre la fin du service pour en parler à l'IDE"
        ],
        correct: 1,
        corrige: "Il ne faut pas faire saigner en pressant (risque d'aggraver les microlésions). On nettoie immédiatement à l'eau et au savon, on rince, puis on applique un antiseptique avec temps de contact. La déclaration et la consultation médicale suivent rapidement. Réponse B."
      },
      {
        q: "Quelles sont les indications de l'hygiène des mains (les moments clés) lors des soins ?",
        type: "open",
        corrige: "Les cinq indications selon les recommandations : 1) avant de toucher le patient, 2) avant un geste aseptique, 3) après un risque d'exposition à un liquide biologique, 4) après avoir touché le patient, 5) après avoir touché l'environnement du patient. La friction hydro-alcoolique est la technique de référence sur mains visuellement propres et sèches ; le lavage au savon est requis si les mains sont visiblement souillées."
      },
      {
        q: "Quelles mesures de prévention auraient pu éviter cet AES ? Quel est votre rôle dans la prévention des AES au quotidien ?",
        type: "open",
        corrige: "Prévention : élimination immédiate des objets piquants/coupants dans un collecteur à objets piquants tranchants (boîte DASRI rigide) au plus près du soin, ne jamais recapuchonner une aiguille, ne pas laisser de matériel piquant dans un lit ou dans le linge, vérifier l'environnement avant la réfection du lit, port de gants. Rôle AS : signaler tout matériel oublié, respecter les circuits de tri, vérifier les draps et l'environnement, appliquer les précautions standard, et participer au signalement des dysfonctionnements."
      },
      {
        q: "Pourquoi la déclaration de cet AES est-elle indispensable même si le patient ne présente pas de pathologie infectieuse connue ?",
        type: "open",
        corrige: "Le statut sérologique du patient n'est pas documenté : l'absence de pathologie connue ne garantit pas l'absence de virus transmissibles (VIH, hépatites B et C). La déclaration permet : l'évaluation médicale du risque, la mise en route éventuelle d'un traitement post-exposition dans les délais, la réalisation des sérologies de référence et de suivi du soignant, la reconnaissance en accident du travail (protection des droits), et l'analyse de l'événement pour éviter sa récidive. Ne jamais minimiser ni différer."
      }
    ],
    demarche: "Le jury attend : réaction immédiate et correcte (nettoyage eau/savon, antiseptique, ne pas presser), signalement sans délai, consultation médicale rapide, déclaration en accident du travail, traçabilité. Articulation avec la prévention des AES (collecteur OPCT, non-recapuchonnage, vérification de l'environnement, précautions standard) et maîtrise des indications de l'hygiène des mains."
  },
  {
    id: "mod_8_exam_chaine_infection",
    mod: "8",
    titre: "Prévention des infections associées aux soins : analyse d'une chaîne de transmission",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en EHPAD. Une réunion d'équipe est consacrée à une suspicion d'épidémie de gastro-entérite dans une unité.",
    situation: "Dans l'unité où vous travaillez, plusieurs résidents présentent depuis 24 heures des diarrhées et des vomissements. Mme P., 88 ans, dépendante et alitée, est la troisième résidente atteinte ce matin. Une infection à norovirus est suspectée par le médecin coordonnateur. L'équipe doit limiter la diffusion de l'épidémie dans l'établissement. Vous êtes chargé(e) des soins de plusieurs résidents au cours de la matinée.",
    questions: [
      {
        q: "Décrivez les maillons de la chaîne épidémiologique (chaîne de transmission de l'infection).",
        type: "open",
        corrige: "La chaîne de transmission comporte : 1) un agent infectieux (ici le norovirus), 2) un réservoir (le résident malade, ses selles et vomissures), 3) une porte de sortie (voies digestives), 4) un mode de transmission (manuportage, contact avec surfaces souillées, voie féco-orale), 5) une porte d'entrée chez l'hôte (voie orale), 6) un hôte réceptif (résidents âgés, fragiles, dépendants). Rompre un seul maillon permet de stopper la transmission ; l'action la plus accessible au soignant est l'hygiène des mains et l'hygiène de l'environnement."
      },
      {
        q: "Quelles précautions complémentaires mettez-vous en place pour une suspicion de gastro-entérite à norovirus ?",
        type: "open",
        corrige: "Précautions complémentaires de type contact renforcées : chambre individuelle ou regroupement des malades, signalisation. Hygiène des mains au LAVAGE simple au savon (le norovirus est peu sensible aux produits hydro-alcooliques ; le lavage élimine mécaniquement le virus). Port de gants et de tablier/surblouse à usage unique pour les soins. Bionettoyage renforcé des surfaces et sanitaires avec un produit actif (eau de Javel diluée). Gestion stricte des excreta et du linge. Limitation des déplacements des résidents malades et information du personnel et des visiteurs."
      },
      {
        q: "Pour l'hygiène des mains face au norovirus, quelle technique privilégier ?",
        type: "qcm",
        options: [
          "La friction hydro-alcoolique seule, plus rapide",
          "Le lavage des mains au savon et à l'eau",
          "Aucune mesure particulière n'est requise",
          "Le port de gants dispense de l'hygiène des mains"
        ],
        correct: 1,
        corrige: "Le norovirus est un virus nu peu sensible aux solutions hydro-alcooliques. On privilégie le lavage des mains au savon et à l'eau, qui élimine mécaniquement le virus. Le port de gants ne remplace jamais l'hygiène des mains, qui doit être réalisée après leur retrait. Réponse B."
      },
      {
        q: "Dans quel ordre organisez-vous votre tournée de soins du matin pour limiter la transmission croisée ? Justifiez.",
        type: "open",
        corrige: "On organise la tournée du plus propre vers le plus contaminé : prendre en charge en premier les résidents sains ou non infectés, puis en dernier les résidents malades (dont Mme P.). Cela évite de transporter l'agent infectieux des malades vers les non-malades. Entre chaque résident : retrait des EPI, élimination des déchets, hygiène des mains. Matériel dédié au résident malade si possible. Justification : rompre le maillon de la transmission manuportée et croisée."
      },
      {
        q: "Quelles sont les transmissions et la traçabilité que vous assurez en tant qu'AS dans ce contexte épidémique ?",
        type: "open",
        corrige: "Transmettre sans délai à l'IDE tout nouveau résident symptomatique (nombre de selles, vomissements, signes de déshydratation : sécheresse, asthénie, baisse des prises alimentaires et hydriques), surveiller l'hydratation et l'état général dans le champ AS. Tracer les selles, les apports hydriques, les soins réalisés et les mesures d'hygiène appliquées. Participer au signalement de l'épidémie selon la procédure de l'établissement (équipe opérationnelle d'hygiène, médecin coordonnateur). Informer ses collègues et les visiteurs des mesures barrières."
      }
    ],
    demarche: "Le jury attend : compréhension de la chaîne de transmission et identification du maillon à rompre, mise en place des précautions contact renforcées spécifiques au norovirus (lavage des mains au savon, EPI, bionettoyage à l'eau de Javel, gestion des excreta), organisation de la tournée du propre vers le sale, surveillance de la déshydratation, transmission et traçabilité, contribution au signalement de l'épidémie. Posture rigoureuse de prévention des infections associées aux soins."
  }
];
