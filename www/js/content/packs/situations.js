export const cas = [
  {
    id: "cas_ehpad_toilette_refus",
    mod: "4",
    titre: "Toilette du matin en EHPAD",
    niveau: "Début de formation",
    contexte: "EHPAD, secteur protégé. Vous êtes élève AS encadré·e par une AS référente lors de la toilette du matin.",
    situation: "Mme Lefèvre, 84 ans, atteinte d'arthrose, est habituellement souriante. Ce matin, lorsque vous entrez pour la toilette, elle détourne le visage, croise les bras et dit : « Laissez-moi tranquille, pas aujourd'hui. » Sa peau est intacte, elle n'a pas de fièvre.",
    questions: [
      {
        q: "Quelle est la première attitude à adopter face à ce refus ?",
        type: "qcm",
        options: [
          "Procéder quand même rapidement à la toilette pour respecter l'horaire",
          "Accepter le refus, rester calme et chercher à en comprendre la cause par le dialogue",
          "Appeler aussitôt le médecin pour une prescription de sédatif",
          "Quitter la chambre et noter « toilette refusée » sans rien ajouter"
        ],
        correct: 1,
        corrige: "Le refus de soin est un droit. L'AS reste bienveillant·e, ne force pas, dialogue pour identifier la cause (douleur, fatigue, pudeur, humeur) et propose une alternative ou un report. La contrainte est une maltraitance."
      },
      {
        q: "Que pouvez-vous proposer pour favoriser l'adhésion de Mme Lefèvre ?",
        type: "qcm",
        options: [
          "Lui dire qu'elle n'aura pas de petit-déjeuner si elle refuse",
          "Reporter d'un moment, proposer une toilette partielle ou la laisser participer à son rythme",
          "Faire la toilette pendant qu'une collègue la maintient",
          "Insister verbalement jusqu'à ce qu'elle cède"
        ],
        correct: 1,
        corrige: "On respecte le rythme de la personne : report, toilette partielle (visage, mains), participation active. On préserve l'autonomie et la dignité, jamais de chantage ni de contention."
      },
      {
        q: "Comment assurez-vous la traçabilité et la continuité des soins ?",
        type: "open",
        corrige: "Observer (attitude, signes de douleur, état cutané), agir dans le champ AS (proposer report/alternative, surveiller), transmettre par écrit et oral le refus, son contexte et l'éventuelle cause, alerter l'IDE si douleur, fièvre ou changement de comportement inhabituel."
      }
    ],
    demarche: "Respecter le refus, dialoguer pour en comprendre l'origine, proposer un report ou une toilette adaptée, préserver dignité et autonomie, tracer et transmettre, alerter l'IDE si signe clinique associé."
  },
  {
    id: "cas_domicile_had_pansement",
    mod: "4",
    titre: "Intervention à domicile (HAD)",
    niveau: "Stage avancé",
    contexte: "Hospitalisation à domicile (HAD). Vous accompagnez l'AS du service au domicile d'un patient pour les soins d'hygiène.",
    situation: "M. Bahri, 67 ans, vit seul, porteur d'un pansement à la jambe refait quotidiennement par l'IDE. Pendant la toilette, vous remarquez que le pansement est souillé, malodorant, et que le tour du pansement est rouge et chaud. M. Bahri se plaint d'une douleur nouvelle.",
    questions: [
      {
        q: "Face à ce pansement souillé et à la rougeur, que faites-vous dans votre champ de compétence ?",
        type: "qcm",
        options: [
          "Vous retirez le pansement et le refaites vous-même",
          "Vous poursuivez la toilette en évitant la zone, observez précisément et alertez l'IDE",
          "Vous appliquez une pommade trouvée dans la salle de bain",
          "Vous ne dites rien car ce n'est pas votre rôle"
        ],
        correct: 1,
        corrige: "La réfection du pansement et l'évaluation de la plaie relèvent de l'IDE. L'AS ne touche pas au pansement, protège la zone, observe (rougeur, chaleur, odeur, douleur) et transmet/alerte sans délai."
      },
      {
        q: "Quels éléments d'observation devez-vous transmettre ?",
        type: "open",
        corrige: "Aspect du pansement (souillé, odeur), signes locaux (rougeur, chaleur), douleur nouvelle exprimée, éventuelle fièvre ou état général. Transmettre précisément à l'IDE coordinatrice de l'HAD et tracer dans le dossier."
      },
      {
        q: "Quelle précaution d'hygiène est essentielle à domicile ?",
        type: "qcm",
        options: [
          "Réutiliser le gant de toilette du patient sans le laver",
          "Respecter l'hygiène des mains, utiliser du matériel propre et adapter les précautions standard",
          "Ouvrir grand les fenêtres et désinfecter toute la maison",
          "Porter des gants pour tout, y compris parler au patient"
        ],
        correct: 1,
        corrige: "À domicile, on applique les précautions standard : hygiène des mains (friction hydroalcoolique), matériel propre/à usage unique, gestion des déchets, en s'adaptant à l'environnement du patient."
      }
    ],
    demarche: "Ne pas toucher au pansement (champ IDE), réaliser la toilette en protégeant la plaie, observer finement les signes d'infection, appliquer les précautions standard, alerter et tracer auprès de l'IDE HAD."
  },
  {
    id: "cas_court_sejour_post_op",
    mod: "4",
    titre: "Court séjour : retour de bloc",
    niveau: "Début de formation",
    contexte: "Service de chirurgie (court séjour). Vous êtes élève AS et participez à la surveillance d'un patient revenu du bloc opératoire.",
    situation: "Mme Roussel, 58 ans, est de retour de bloc après une intervention abdominale il y a 2 heures. Elle est somnolente, pâle, dit avoir « la tête qui tourne ». Elle est perfusée et porte une sonde urinaire.",
    questions: [
      {
        q: "Quels paramètres pouvez-vous surveiller dans votre champ AS ?",
        type: "qcm",
        options: [
          "Modifier le débit de la perfusion vous-même",
          "Surveiller coloration, conscience, confort, diurèse de la poche, et mesurer les constantes selon protocole",
          "Retirer la sonde urinaire si elle gêne",
          "Administrer un antalgique en comprimé"
        ],
        correct: 1,
        corrige: "L'AS surveille l'état général : coloration, niveau de conscience, douleur, confort, aspect/quantité des urines dans la poche, et prend les constantes (pouls, TA, température, saturation) selon protocole. Il ne touche pas à la perfusion ni à la sonde et n'administre aucun médicament."
      },
      {
        q: "Mme Roussel devient plus pâle et somnolente : que faites-vous ?",
        type: "qcm",
        options: [
          "Vous la laissez dormir et repassez dans une heure",
          "Vous alertez immédiatement l'IDE et restez auprès d'elle en la surveillant",
          "Vous la levez pour la stimuler",
          "Vous lui donnez à boire un grand verre d'eau"
        ],
        correct: 1,
        corrige: "Aggravation de la pâleur et de la somnolence en post-opératoire = signe d'alerte (hémorragie, hypotension). L'AS alerte sans délai l'IDE, ne lève pas la patiente, ne fait pas boire (risque si reprise au bloc) et assure une surveillance rapprochée."
      },
      {
        q: "Quelle est l'importance des transmissions ici ?",
        type: "open",
        corrige: "Transmettre l'heure d'observation, les constantes mesurées, l'évolution de la coloration et de la conscience, la douleur, la diurèse. Transmissions précises et tracées pour assurer la continuité de la surveillance post-op et alerter l'IDE devant tout signe d'aggravation."
      }
    ],
    demarche: "Surveiller l'état général et les constantes selon protocole, repérer les signes d'alerte post-op, ne pas intervenir sur perfusion/sonde/traitement, alerter l'IDE immédiatement, tracer et transmettre."
  },
  {
    id: "cas_handicap_repas_autonomie",
    mod: "4",
    titre: "Accompagnement en foyer (handicap)",
    niveau: "Début de formation",
    contexte: "Foyer d'accueil médicalisé (handicap). Vous êtes élève AS et accompagnez un résident au moment du repas.",
    situation: "Théo, 29 ans, en situation de polyhandicap, a des difficultés de préhension mais peut porter certains aliments à la bouche. L'équipe valorise son autonomie. Au déjeuner, il commence à manger seul mais se fatigue vite et certains aliments tombent.",
    questions: [
      {
        q: "Quelle posture d'accompagnement adoptez-vous ?",
        type: "qcm",
        options: [
          "Faire manger Théo entièrement pour aller plus vite",
          "Stimuler et accompagner son autonomie en adaptant l'aide (couverts ergonomiques, guidance) et en l'aidant quand il fatigue",
          "Le laisser se débrouiller seul sans surveillance",
          "Mixer tous les aliments par principe"
        ],
        correct: 1,
        corrige: "On vise le maintien et la valorisation de l'autonomie : matériel adapté, installation correcte, guidance, et aide progressive quand la fatigue apparaît, tout en respectant le rythme et les capacités de la personne."
      },
      {
        q: "Quel risque devez-vous particulièrement surveiller pendant le repas ?",
        type: "qcm",
        options: [
          "Le risque de fausse route, en surveillant l'installation et la déglutition",
          "Le risque que les autres résidents soient jaloux",
          "Le risque que le repas soit trop long",
          "Le risque de salir la table"
        ],
        correct: 0,
        corrige: "Chez une personne polyhandicapée, le risque de fausse route est majeur. L'AS installe la personne assise, tête légèrement penchée en avant, va à son rythme, surveille la déglutition et adapte la texture selon les prescriptions."
      },
      {
        q: "Comment contribuez-vous au suivi nutritionnel de Théo ?",
        type: "open",
        corrige: "Observer les quantités réellement ingérées, l'appétit, la fatigue, les éventuelles toux/fausses routes. Transmettre par écrit et oral, signaler à l'IDE toute baisse de prise alimentaire ou difficulté de déglutition, dans le respect du projet personnalisé."
      }
    ],
    demarche: "Installer correctement, favoriser l'autonomie avec du matériel adapté, prévenir la fausse route, accompagner au rythme de la personne, observer les apports et transmettre, alerter l'IDE en cas de difficulté."
  },
  {
    id: "cas_fin_de_vie_confort",
    mod: "4",
    titre: "Accompagnement de fin de vie",
    niveau: "Stage avancé",
    contexte: "Unité de soins palliatifs. Vous êtes élève AS auprès d'un patient en fin de vie et de sa famille.",
    situation: "M. Dupré, 79 ans, est en phase palliative avancée. Il est conscient par moments, a la bouche sèche, semble inconfortable. Sa fille, présente, est très anxieuse et vous demande « s'il souffre ».",
    questions: [
      {
        q: "Quels soins de confort relèvent de votre champ AS ?",
        type: "qcm",
        options: [
          "Augmenter la morphine pour le soulager",
          "Assurer soins de bouche, installation confortable, prévention d'escarre, présence et écoute",
          "Décider d'arrêter l'alimentation",
          "Annoncer à la fille le pronostic vital"
        ],
        correct: 1,
        corrige: "L'AS assure les soins de confort : soins de bouche (sécheresse), installation et changements de position, prévention des escarres, hygiène douce, présence rassurante. L'adaptation des traitements et les informations médicales relèvent du médecin/IDE."
      },
      {
        q: "Comment repérez-vous un inconfort ou une douleur chez M. Dupré ?",
        type: "open",
        corrige: "Observer les signes non verbaux : grimaces, gémissements, crispation, agitation, position antalgique, modification de la respiration. Transmettre ces observations à l'IDE pour évaluation et adaptation du traitement antalgique, dans le champ AS d'observation et d'alerte."
      },
      {
        q: "Comment répondez-vous à l'anxiété de la fille ?",
        type: "qcm",
        options: [
          "« Ne vous inquiétez pas, il ne sent plus rien »",
          "L'écouter avec empathie, l'informer dans votre champ (soins de confort réalisés) et orienter ses questions médicales vers l'IDE/le médecin",
          "Lui dire qu'il reste peu de temps",
          "Lui demander de sortir de la chambre"
        ],
        correct: 1,
        corrige: "L'AS accueille l'émotion de la famille avec empathie, explique les soins de confort prodigués, mais n'aborde pas le pronostic ni l'évaluation médicale : il oriente ces questions vers l'IDE et le médecin, et peut proposer un soutien (psychologue, bénévoles)."
      }
    ],
    demarche: "Prodiguer les soins de confort (bouche, positionnement, prévention escarre), repérer et transmettre les signes d'inconfort/douleur, accompagner la personne et sa famille avec empathie, orienter les questions médicales vers l'IDE/médecin."
  },
  {
    id: "cas_chute_personne_agee",
    mod: "4",
    titre: "Chute d'un résident",
    niveau: "Début de formation",
    contexte: "EHPAD, couloir du service. Vous êtes élève AS et entendez un bruit puis découvrez un résident au sol.",
    situation: "M. Gontran, 88 ans, est retrouvé allongé au sol près de sa chambre. Il est conscient, se plaint de la hanche droite et n'arrive pas à se relever. Vous êtes le premier sur place.",
    questions: [
      {
        q: "Quelle est la conduite immédiate la plus adaptée ?",
        type: "qcm",
        options: [
          "Relever rapidement M. Gontran seul pour le rassurer",
          "Ne pas le mobiliser, le rassurer, évaluer son état et alerter l'IDE sans délai",
          "Le laisser au sol et continuer votre tournée",
          "Lui donner un antalgique pour la douleur"
        ],
        correct: 1,
        corrige: "Devant une chute avec douleur de hanche, on ne relève pas la personne (risque de fracture). L'AS sécurise, rassure, couvre, observe (conscience, douleur, déformation, plaie) et alerte immédiatement l'IDE qui évaluera avant toute mobilisation."
      },
      {
        q: "Quels éléments d'observation transmettez-vous à l'IDE ?",
        type: "open",
        corrige: "Circonstances et heure de la chute, état de conscience, douleur et sa localisation, position du membre (déformation, rotation, raccourcissement), plaies/saignements, capacité à bouger, comportement habituel vs actuel. Tracer et déclarer l'événement (fiche de signalement)."
      },
      {
        q: "Après la prise en charge, quelle démarche de prévention adoptez-vous ?",
        type: "qcm",
        options: [
          "Attacher M. Gontran à son fauteuil pour qu'il ne tombe plus",
          "Repérer et signaler les facteurs de risque (sol glissant, chaussage, éclairage, vertiges) et participer à la prévention des chutes",
          "Lui interdire de se lever seul désormais",
          "Considérer que cela n'arrivera plus"
        ],
        correct: 1,
        corrige: "La prévention des chutes passe par le repérage des facteurs de risque (environnement, chaussage, éclairage, troubles de l'équilibre) et leur signalement à l'équipe. La contention n'est pas une réponse de première intention et augmente d'autres risques."
      }
    ],
    demarche: "Ne pas mobiliser, sécuriser et rassurer, observer l'état clinique, alerter immédiatement l'IDE, tracer et déclarer la chute, puis participer à la prévention des récidives."
  },
  {
    id: "cas_escarre_prevention",
    mod: "4",
    titre: "Prévention d'escarre",
    niveau: "Stage avancé",
    contexte: "Service de médecine. Vous êtes élève AS et participez à la surveillance cutanée d'un patient alité.",
    situation: "Mme Lacroix, 76 ans, est alitée depuis plusieurs jours, dénutrie et peu mobile. Lors de la toilette, vous observez une rougeur au niveau du sacrum qui ne disparaît pas à la pression du doigt.",
    questions: [
      {
        q: "Que signifie une rougeur qui ne blanchit pas à la pression ?",
        type: "qcm",
        options: [
          "Une simple irritation sans importance",
          "Un signe d'escarre débutante (stade 1) à signaler et à prendre en charge",
          "Une allergie au savon",
          "Un coup de soleil"
        ],
        correct: 1,
        corrige: "Une rougeur persistante qui ne blanchit pas à la pression est un signe d'escarre de stade 1. C'est un signal d'alerte qui impose des mesures de prévention renforcées et une transmission immédiate à l'IDE."
      },
      {
        q: "Quelles actions de prévention relèvent de votre champ AS ?",
        type: "qcm",
        options: [
          "Percer la rougeur et appliquer un pansement",
          "Changements de position réguliers, effleurage doux, peau propre et sèche, hydratation/alimentation surveillées, matériel anti-escarre",
          "Masser énergiquement la zone rouge",
          "Laisser la patiente dans la même position pour ne pas la déranger"
        ],
        correct: 1,
        corrige: "L'AS met en œuvre les mesures de prévention : changements de position planifiés (toutes 2-3 h), maintien d'une peau propre et sèche, effleurage doux (pas de massage sur la rougeur), surveillance des apports, installation sur support adapté. La friction vigoureuse est proscrite."
      },
      {
        q: "Comment articulez-vous observation, transmission et alerte ?",
        type: "open",
        corrige: "Observer et décrire la lésion (localisation, taille, couleur, stade apparent), surveiller les autres points d'appui, mettre en place les mesures de prévention dans le champ AS, transmettre par écrit et oral, alerter l'IDE pour évaluation et prescription des soins/pansements et adaptation nutritionnelle."
      }
    ],
    demarche: "Repérer la rougeur non blanchissante (escarre stade 1), appliquer les mesures de prévention (positionnement, peau saine, effleurage, support), surveiller les apports, transmettre et alerter l'IDE pour la prise en charge de la plaie."
  },
  {
    id: "cas_denutrition_repas",
    mod: "4",
    titre: "Repas et dénutrition",
    niveau: "Début de formation",
    contexte: "EHPAD, salle à manger. Vous êtes élève AS chargé·e d'accompagner les résidents au déjeuner.",
    situation: "Mme Hervé, 90 ans, mange de moins en moins depuis une semaine. Aujourd'hui, elle repousse son plateau après quelques bouchées, dit ne pas avoir faim et a perdu du poids récemment.",
    questions: [
      {
        q: "Quelle attitude favorise la prise alimentaire de Mme Hervé ?",
        type: "qcm",
        options: [
          "La forcer à finir son assiette",
          "Installer un cadre agréable, fractionner, proposer ses goûts, enrichir si prescrit et l'accompagner sans la presser",
          "Retirer le plateau immédiatement et passer au suivant",
          "Lui dire qu'elle sera hospitalisée si elle ne mange pas"
        ],
        correct: 1,
        corrige: "Pour stimuler l'appétit : installation confortable, ambiance calme, respect des goûts, repas fractionnés et enrichis (si prescrit), présentation appétissante, accompagnement patient. On ne force jamais et on n'utilise pas la menace."
      },
      {
        q: "Comment participez-vous au repérage de la dénutrition ?",
        type: "open",
        corrige: "Observer et noter les quantités réellement ingérées (surveillance alimentaire), repérer la perte de poids, la fatigue, le refus alimentaire répété. Renseigner la fiche de surveillance, peser selon protocole, transmettre et alerter l'IDE pour évaluation et adaptation (compléments, texture, suivi diététique)."
      },
      {
        q: "Quel professionnel alertez-vous et pourquoi ?",
        type: "qcm",
        options: [
          "Personne, c'est normal de moins manger en vieillissant",
          "L'IDE, car la baisse d'appétit et la perte de poids nécessitent une évaluation et un suivi",
          "La famille uniquement",
          "Le service technique"
        ],
        correct: 1,
        corrige: "Une baisse d'appétit persistante avec perte de poids est un signe de dénutrition à ne pas banaliser. L'AS transmet ses observations et alerte l'IDE, qui pourra solliciter le médecin et la diététicienne."
      }
    ],
    demarche: "Favoriser la prise alimentaire (cadre, goûts, fractionnement, enrichissement prescrit), surveiller et tracer les apports et le poids, ne jamais forcer, transmettre et alerter l'IDE devant les signes de dénutrition."
  },
  {
    id: "cas_demence_desorientation",
    mod: "4",
    titre: "Désorientation et démence",
    niveau: "Stage avancé",
    contexte: "Unité protégée Alzheimer (EHPAD). Vous êtes élève AS en fin d'après-midi auprès d'une résidente désorientée.",
    situation: "Mme Caron, 82 ans, atteinte de la maladie d'Alzheimer, est agitée en fin de journée. Elle cherche sa mère décédée, veut « rentrer à la maison », et devient anxieuse, déambulant dans le couloir.",
    questions: [
      {
        q: "Quelle communication adoptez-vous face à cette désorientation ?",
        type: "qcm",
        options: [
          "La contredire : « Votre mère est morte depuis longtemps »",
          "Adopter une attitude rassurante, valider son émotion, détourner doucement l'attention et la sécuriser",
          "L'enfermer dans sa chambre",
          "Hausser le ton pour qu'elle comprenne"
        ],
        correct: 1,
        corrige: "Face à la désorientation, on ne confronte pas brutalement la personne à la réalité (cela majore l'angoisse). On valide l'émotion, on rassure, on parle calmement, on détourne l'attention (diversion, activité) et on assure sa sécurité."
      },
      {
        q: "Comment gérez-vous la déambulation en toute sécurité ?",
        type: "qcm",
        options: [
          "Attacher Mme Caron pour qu'elle arrête de marcher",
          "Sécuriser l'environnement, l'accompagner dans sa déambulation, surveiller et proposer une activité apaisante",
          "La laisser sortir seule du service",
          "L'isoler totalement des autres résidents"
        ],
        correct: 1,
        corrige: "La déambulation est un besoin fréquent. On sécurise l'environnement (espace adapté, surveillance des sorties), on accompagne sans contraindre, on propose une activité apaisante. La contention est une mesure d'exception, jamais une réponse de confort."
      },
      {
        q: "Quels éléments observez-vous et transmettez-vous ?",
        type: "open",
        corrige: "Repérer le moment et les déclencheurs de l'agitation (« syndrome du coucher du soleil »), l'intensité, ce qui apaise, l'état général (douleur, faim, soif, besoin d'aller aux toilettes pouvant déclencher l'agitation). Transmettre à l'équipe et à l'IDE pour adapter l'accompagnement et écarter une cause physique."
      }
    ],
    demarche: "Communiquer avec calme et bienveillance, valider l'émotion sans confronter, sécuriser et accompagner la déambulation, rechercher un déclencheur (douleur, besoin), éviter la contention, observer et transmettre à l'IDE."
  },
  {
    id: "cas_bionettoyage_chambre",
    mod: "4",
    titre: "Hygiène et bionettoyage",
    niveau: "Début de formation",
    contexte: "Service hospitalier. Vous êtes élève AS chargé·e du bionettoyage d'une chambre après le départ d'un patient.",
    situation: "La chambre 12 vient d'être libérée. Vous devez réaliser le bionettoyage avant l'arrivée d'un nouveau patient. Le patient précédent n'était pas en isolement particulier.",
    questions: [
      {
        q: "Dans quel ordre réalisez-vous le bionettoyage ?",
        type: "qcm",
        options: [
          "Du plus sale vers le plus propre, en finissant par le sol",
          "Du plus propre vers le plus sale et du haut vers le bas, en terminant par le sol",
          "Peu importe l'ordre tant que tout est lavé",
          "On commence toujours par les sanitaires puis on touche au lit"
        ],
        correct: 1,
        corrige: "Le bionettoyage se fait du plus propre vers le plus sale et du haut vers le bas, en terminant par le sol et par les zones les plus contaminées (sanitaires en dernier). On évite ainsi de recontaminer les surfaces déjà nettoyées."
      },
      {
        q: "Quelles précautions d'hygiène appliquez-vous pendant le bionettoyage ?",
        type: "qcm",
        options: [
          "Réutiliser la même lavette pour toutes les surfaces et toutes les chambres",
          "Hygiène des mains, port d'EPI adaptés, matériel propre/à usage unique par zone, dilution correcte des produits",
          "Mélanger eau de Javel et détergent pour plus d'efficacité",
          "Nettoyer sans gants pour aller plus vite"
        ],
        correct: 1,
        corrige: "On respecte l'hygiène des mains, le port d'EPI (gants, tablier), l'usage de lavettes différenciées par zone (codage couleur), le respect des dilutions et temps de contact des produits. Ne jamais mélanger les produits (risque toxique)."
      },
      {
        q: "Quelle est la différence entre nettoyage, désinfection et bionettoyage ?",
        type: "open",
        corrige: "Le nettoyage élimine les salissures visibles (détergent). La désinfection réduit les micro-organismes (désinfectant). Le bionettoyage associe nettoyage + désinfection selon une méthode et un ordre précis, pour obtenir un niveau de propreté microbiologique adapté au milieu de soins. Tracer le bionettoyage réalisé."
      }
    ],
    demarche: "Préparer le matériel et les EPI, respecter l'hygiène des mains, nettoyer du propre vers le sale et du haut vers le bas, différencier les lavettes par zone, respecter dilutions/temps de contact, tracer le bionettoyage."
  },
  {
    id: "cas_domicile_aide_change",
    mod: "4",
    titre: "Change et protection à domicile",
    niveau: "Début de formation",
    contexte: "Service d'aide à domicile / SSIAD. Vous accompagnez l'AS chez une personne dépendante pour les soins d'hygiène.",
    situation: "Mme Olivier, 86 ans, incontinente, vit chez elle avec l'aide d'un SSIAD. Lors du change, vous constatez une rougeur et une irritation au niveau du siège, ainsi qu'une protection saturée portée depuis trop longtemps.",
    questions: [
      {
        q: "Quelle est la bonne pratique lors du change ?",
        type: "qcm",
        options: [
          "Laisser la protection saturée si la personne ne se plaint pas",
          "Réaliser une toilette intime douce, sécher soigneusement, changer la protection et préserver l'intimité et la dignité",
          "Frotter énergiquement la zone irritée",
          "Mettre deux protections superposées pour espacer les changes"
        ],
        correct: 1,
        corrige: "On réalise une toilette intime douce (sens avant vers arrière), un séchage soigneux (l'humidité macère la peau), un change adapté à la fréquence des besoins, en respectant l'intimité et la dignité. On ne superpose pas les protections et on ne frotte pas la peau lésée."
      },
      {
        q: "Que faites-vous face à la rougeur et à l'irritation du siège ?",
        type: "open",
        corrige: "Observer et décrire la lésion (rougeur, étendue, peau lésée ou non), assurer une hygiène douce et un séchage parfait, favoriser des changes plus fréquents, signaler à l'IDE/coordinateur du SSIAD qui évaluera (risque d'escarre, prescription de soins). Appliquer une protection cutanée seulement si prescrite."
      },
      {
        q: "Comment respectez-vous la dignité de Mme Olivier ?",
        type: "qcm",
        options: [
          "Faire le change porte ouverte pour aller vite",
          "Préserver l'intimité (porte fermée, draps), expliquer les gestes, solliciter sa participation et adopter une attitude respectueuse",
          "Parler d'elle à la troisième personne devant elle",
          "Ignorer ses remarques pendant le soin"
        ],
        correct: 1,
        corrige: "Le respect de la dignité est essentiel : on ferme la porte, on couvre la personne, on explique chaque geste, on sollicite sa participation et on adopte une communication respectueuse. Le soin d'hygiène intime est un moment de vulnérabilité à protéger."
      }
    ],
    demarche: "Réaliser une toilette intime douce et un séchage soigneux, changer la protection selon les besoins, observer l'état cutané, préserver intimité et dignité, transmettre et alerter l'IDE/SSIAD en cas d'irritation ou de risque d'escarre."
  },
  {
    id: "cas_court_sejour_isolement",
    mod: "4",
    titre: "Précautions complémentaires (isolement)",
    niveau: "Stage avancé",
    contexte: "Service de médecine. Vous êtes élève AS auprès d'un patient placé en précautions complémentaires contact.",
    situation: "M. Faure, 70 ans, est porteur d'une bactérie multirésistante (BMR). Des précautions complémentaires « contact » sont mises en place. Vous devez réaliser sa toilette et refaire son lit.",
    questions: [
      {
        q: "Quelles précautions complémentaires « contact » appliquez-vous ?",
        type: "qcm",
        options: [
          "Aucune précaution particulière n'est nécessaire",
          "Hygiène des mains, port de gants et de tablier/surblouse à usage unique, matériel dédié à la chambre, gestion adaptée du linge et des déchets",
          "Porter uniquement un masque",
          "Demander à la famille de faire la toilette"
        ],
        correct: 1,
        corrige: "Pour les précautions « contact » : friction hydroalcoolique avant/après, port de gants et de tablier/surblouse à usage unique, matériel dédié au patient, élimination des déchets et du linge selon la filière, sans oublier l'hygiène des mains au retrait des EPI."
      },
      {
        q: "Dans quel ordre retirez-vous les EPI en sortant de la chambre ?",
        type: "qcm",
        options: [
          "Peu importe, l'essentiel est de tout enlever",
          "Retirer gants puis tablier/surblouse, réaliser l'hygiène des mains, en respectant l'ordre pour ne pas se contaminer",
          "Garder les gants jusqu'à la chambre suivante",
          "Se laver les mains avant de retirer les gants"
        ],
        correct: 1,
        corrige: "On retire les EPI dans l'ordre limitant la contamination (gants puis tablier/surblouse), puis on réalise l'hygiène des mains. Les EPI ne sortent pas de la chambre et l'hygiène des mains conclut toujours la séquence."
      },
      {
        q: "Comment conciliez-vous précautions et qualité de l'accompagnement ?",
        type: "open",
        corrige: "Appliquer rigoureusement les précautions sans stigmatiser le patient : expliquer le sens des mesures, maintenir une relation chaleureuse, éviter l'isolement affectif. Observer l'état général, organiser les soins pour limiter les entrées/sorties, tracer, et alerter l'IDE devant tout signe clinique. L'hygiène protège le patient et les autres."
      }
    ],
    demarche: "Appliquer les précautions complémentaires contact (hygiène des mains, gants, tablier/surblouse, matériel dédié, gestion linge/déchets), respecter l'ordre de retrait des EPI, maintenir une relation bienveillante, observer, tracer et transmettre."
  }
];
