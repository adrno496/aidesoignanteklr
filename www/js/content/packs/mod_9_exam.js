export const cas = [
  {
    id: "mod_9_exam_chute_personne_agee",
    mod: "9",
    titre: "Chute d'une personne âgée en EHPAD : transmissions de l'événement",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en EHPAD, dans une unité de 30 résidents. Vous travaillez en binôme avec une infirmière (IDE) et sous la responsabilité du cadre de santé. Les transmissions se font de façon écrite (dossier de soins informatisé, cibles selon le modèle DAR) et orales (relèves d'équipe).",
    situation: "Mme Renaud, 84 ans, est résidente depuis 3 ans. Antécédents : maladie d'Alzheimer au stade modéré, hypertension artérielle, ostéoporose, port de lunettes. Elle est autonome pour la marche avec un déambulateur mais présente des troubles de l'équilibre. Ce matin à 9h15, alors que vous l'aidez à la toilette, vous la retrouvez assise au sol dans sa salle de bains, consciente, se plaignant de douleurs à la hanche droite. Constantes relevées : TA 145/85 mmHg, pouls 88/min, saturation 97 % en air ambiant, pas de plaie visible. Elle ne se souvient pas de la façon dont elle est tombée. Vous ne pouvez pas la relever seul(e).",
    questions: [
      {
        q: "Quelles sont les premières actions à mettre en oeuvre immédiatement face à cette chute, dans votre champ de compétences d'aide-soignant(e) ?",
        type: "open",
        corrige: "Ne pas relever seul(e) la résidente pour éviter d'aggraver une éventuelle lésion. Rester auprès d'elle, la rassurer et la couvrir. Évaluer son état : conscience, douleur, mobilité des membres, recherche d'une déformation ou impossibilité de bouger la jambe. Relever les constantes (TA, pouls, saturation). Alerter immédiatement l'IDE et appeler à l'aide un collègue. Ne pas mobiliser la hanche douloureuse. Transmettre oralement et tracer l'événement."
      },
      {
        q: "Quelles informations précises devez-vous transmettre à l'IDE concernant cette chute ?",
        type: "open",
        corrige: "L'heure de la découverte, le lieu (salle de bains), les circonstances (chute non vue, résidente retrouvée au sol). L'état de conscience (consciente, orientée ou non). La plainte (douleur hanche droite). Les constantes mesurées. L'absence de plaie visible. Le fait que la résidente ne se souvient pas de la chute. L'impossibilité de la relever seul(e). Le caractère factuel, objectif et chronologique des informations."
      },
      {
        q: "La transmission ciblée selon le modèle DAR comporte trois éléments. Lequel de ces ensembles correspond aux lettres D, A et R ?",
        type: "qcm",
        options: [
          "Diagnostic, Action, Résultat",
          "Données, Actions, Résultat",
          "Décision, Application, Réévaluation",
          "Description, Alerte, Régulation"
        ],
        correct: 1,
        corrige: "Le modèle DAR correspond à Données (informations recueillies sur la cible), Actions (soins et interventions réalisés) et Résultat (évolution observée). Le diagnostic relève du champ médical, pas de l'aide-soignant(e)."
      },
      {
        q: "Pourquoi est-il essentiel de tracer cet événement par écrit dans le dossier de soins, au-delà de la transmission orale ?",
        type: "open",
        corrige: "L'écrit assure la traçabilité, la continuité et la sécurité des soins. Il constitue une preuve juridique (le dossier de soins est un document opposable). Il permet la transmission de l'information à toute l'équipe pluridisciplinaire, y compris l'équipe de nuit ou de relève qui n'a pas assisté à l'événement. Il sert à la déclaration d'un événement indésirable et au suivi (déclaration de chute, réévaluation du risque de chute). L'oral seul est volatil et source d'oubli ou de déformation de l'information."
      },
      {
        q: "Concernant la transmission d'informations, quelle affirmation est exacte au regard du secret professionnel ?",
        type: "qcm",
        options: [
          "L'aide-soignant(e) peut transmettre les informations sur la résidente à sa famille sans restriction.",
          "Le partage d'informations est limité aux professionnels participant à la prise en charge et à ce qui est nécessaire au soin.",
          "Les transmissions orales en relève peuvent se faire dans le couloir devant les visiteurs.",
          "Le secret professionnel ne s'applique pas aux aides-soignants."
        ],
        correct: 1,
        corrige: "Le secret professionnel s'impose à l'aide-soignant(e). Le partage d'informations doit être limité aux seuls professionnels concourant à la prise en charge et restreint à ce qui est strictement nécessaire à la continuité des soins. Les transmissions ne doivent pas se faire devant des tiers."
      }
    ],
    demarche: "Sécuriser la résidente sans la relever, évaluer son état et la rassurer, relever les constantes, alerter sans délai l'IDE. Transmettre oralement de façon factuelle et chronologique, puis tracer par écrit dans le dossier de soins (transmission ciblée DAR), participer à la déclaration de chute et à la réévaluation du risque de chute. Respecter le secret professionnel et la confidentialité."
  },
  {
    id: "mod_9_exam_releve_constantes_post_op",
    mod: "9",
    titre: "Surveillance post-opératoire : recueil et transmission des constantes",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) dans un service de chirurgie orthopédique, en collaboration avec l'IDE référente du secteur. Vous participez à la surveillance des patients selon le rôle qui vous est délégué et la planification des soins.",
    situation: "M. Lemoine, 67 ans, a été opéré hier d'une prothèse totale de hanche (PTH) gauche. Antécédents : diabète de type 2 traité, surpoids. Ce matin lors de votre tour de surveillance à 8h, vous relevez : température 38,4 °C, TA 110/70 mmHg, pouls 96/min, saturation 95 %. Le patient signale une douleur évaluée à 6/10 sur l'échelle numérique. Le pansement de hanche est légèrement souillé de sérosités. Le patient transpire et se dit fatigué. La veille à 20h, sa température était à 37,1 °C.",
    questions: [
      {
        q: "Parmi les éléments recueillis, lesquels constituent des signes d'alerte à transmettre sans délai à l'IDE ?",
        type: "open",
        corrige: "La température à 38,4 °C (fièvre) en augmentation par rapport à la veille (37,1 °C), évoquant un risque infectieux. La tachycardie (pouls 96/min) et la saturation à 95 %. La douleur cotée à 6/10, non soulagée. Le pansement souillé de sérosités. Les sueurs et la fatigue. Ces éléments associés doivent être signalés rapidement à l'IDE car ils peuvent traduire une complication (infection, hémorragie)."
      },
      {
        q: "Comment devez-vous formuler la transmission orale de ces constantes pour qu'elle soit fiable et exploitable ?",
        type: "open",
        corrige: "De façon précise, factuelle et objective (chiffres exacts, heure du relevé), sans interprétation médicale ni diagnostic. En comparant à la valeur de référence antérieure (température passée de 37,1 à 38,4 °C). En hiérarchisant : annoncer d'abord l'élément le plus urgent. En décrivant l'état clinique observé (sueurs, fatigue, aspect du pansement, douleur cotée sur l'échelle). En s'assurant que l'IDE a bien reçu et compris l'information (communication ascendante vérifiée)."
      },
      {
        q: "Sur quel support l'aide-soignant(e) consigne-t-il habituellement les constantes recueillies ?",
        type: "qcm",
        options: [
          "Uniquement sur un papier libre gardé dans sa poche",
          "Sur la feuille de surveillance / le diagramme de soins du dossier patient",
          "Sur la prescription médicale",
          "Sur le cahier de liaison destiné à la famille"
        ],
        correct: 1,
        corrige: "Les constantes sont consignées sur la feuille de surveillance ou le diagramme de soins intégré au dossier patient (papier ou informatisé), qui assure la traçabilité et la continuité des soins. Le papier libre n'est pas un support fiable ni opposable."
      },
      {
        q: "Quel est l'intérêt de comparer les constantes du matin avec celles relevées la veille ?",
        type: "open",
        corrige: "La comparaison permet d'objectiver une évolution et de repérer une dégradation (ici, l'ascension thermique). Elle donne du sens à la donnée isolée : une valeur prend toute sa signification dans une tendance. Elle aide l'équipe à détecter précocement une complication, à adapter la surveillance et à orienter la décision médicale. C'est le principe de la surveillance dans la durée et de la continuité des soins."
      },
      {
        q: "Une transmission de qualité doit répondre à plusieurs critères. Quelle proposition n'est PAS un critère d'une bonne transmission ?",
        type: "qcm",
        options: [
          "Être factuelle et objective",
          "Être datée et signée (traçabilité)",
          "Comporter un jugement de valeur sur le patient",
          "Être claire, concise et compréhensible"
        ],
        correct: 2,
        corrige: "Une transmission ne doit jamais comporter de jugement de valeur ni d'appréciation subjective sur le patient. Elle doit rester factuelle, objective, datée, signée, claire et concise pour garantir fiabilité et respect de la personne."
      }
    ],
    demarche: "Relever les constantes avec rigueur, repérer les signes d'alerte et leur évolution par rapport aux valeurs antérieures, transmettre sans délai et de façon hiérarchisée à l'IDE, tracer les données sur le diagramme de soins de façon datée et signée. Rester dans le champ de compétences : recueil et signalement, sans diagnostic ni interprétation médicale."
  },
  {
    id: "mod_9_exam_releve_equipe_continuite",
    mod: "9",
    titre: "Relève d'équipe et continuité des soins en service de médecine",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) de l'équipe de jour dans un service de médecine. Vous assurez la transmission de fin de poste à l'équipe de nuit lors de la relève orale, en présence de l'IDE.",
    situation: "Vous prenez en charge Mme Faure, 76 ans, hospitalisée pour déshydratation et confusion. Antécédents : insuffisance cardiaque, troubles cognitifs débutants. Durant votre poste : elle a bu 3 verres d'eau, refusé son déjeuner, présenté un épisode de désorientation à 15h avec tentative de se lever seule (risque de chute). Diurèse faible. Elle porte une perfusion en cours. Le médecin a demandé une surveillance de la diurèse et des apports hydriques. Vous devez transmettre ces éléments à l'équipe de nuit.",
    questions: [
      {
        q: "Quels sont les éléments essentiels à transmettre à l'équipe de nuit pour assurer la continuité des soins de Mme Faure ?",
        type: "open",
        corrige: "L'identité et le motif d'hospitalisation (déshydratation, confusion). Les apports hydriques de la journée (3 verres d'eau) et le refus du déjeuner. La présence de la perfusion en cours. L'épisode de désorientation de 15h et la tentative de lever seule, avec le risque de chute à surveiller. La diurèse faible. La consigne médicale de surveillance des entrées et sorties (diurèse, apports). Les surveillances à poursuivre la nuit. L'information doit être organisée, factuelle et hiérarchisée par priorité."
      },
      {
        q: "Pourquoi la relève (transmission orale en fin de poste) est-elle un temps essentiel de la prise en charge ?",
        type: "open",
        corrige: "Elle garantit la continuité et la sécurité des soins 24h/24 en assurant le passage d'informations entre équipes. Elle permet de transmettre l'état du patient, les soins réalisés, les surveillances en cours et les consignes à poursuivre. Elle évite les ruptures de prise en charge, les oublis et les doublons. Elle complète la transmission écrite et permet un échange, des questions et une compréhension partagée au sein de l'équipe pluridisciplinaire."
      },
      {
        q: "Concernant le risque de chute identifié, quelle attitude est la plus adaptée pour la transmission ?",
        type: "qcm",
        options: [
          "Ne pas en parler car la patiente n'est finalement pas tombée",
          "Le signaler clairement à l'équipe de nuit pour renforcer la surveillance",
          "L'écrire seulement si une chute survient réellement",
          "En informer uniquement la famille"
        ],
        correct: 1,
        corrige: "Le risque de chute doit être clairement transmis à l'équipe de nuit, oralement et par écrit, afin de renforcer la surveillance et la prévention, même en l'absence de chute effective. La prévention repose sur l'anticipation du risque."
      },
      {
        q: "Lors de la relève, l'aide-soignant(e) doit transmettre des informations relevant de son champ. Laquelle des informations suivantes ne relève PAS de sa compétence à transmettre ?",
        type: "qcm",
        options: [
          "Les apports hydriques et l'état de la diurèse observée",
          "Le refus alimentaire et l'épisode de désorientation",
          "Le diagnostic médical et la modification du traitement",
          "Le comportement et le risque de chute observés"
        ],
        correct: 2,
        corrige: "Le diagnostic médical et la modification du traitement relèvent du médecin et de l'IDE. L'aide-soignant(e) transmet ses observations (apports, élimination, comportement, état général, refus alimentaire, risques) dans le cadre de son rôle de collaboration et de surveillance."
      },
      {
        q: "Comment vous assurez-vous que l'information transmise oralement a bien été comprise par l'équipe de nuit ?",
        type: "open",
        corrige: "En transmettant dans un lieu calme, sans interruption ni bruit, en utilisant un vocabulaire clair et précis. En vérifiant la bonne réception : reformulation par l'interlocuteur, possibilité de poser des questions, validation des points importants. En s'appuyant sur la transmission écrite (dossier de soins) en parallèle, pour pallier les oublis et permettre une consultation ultérieure. La communication doit être une boucle vérifiée, pas un simple envoi d'information."
      }
    ],
    demarche: "Préparer la relève en organisant les informations (identité, motif, soins réalisés, surveillances en cours, risques, consignes médicales). Transmettre oralement de façon hiérarchisée et factuelle dans un cadre calme, vérifier la compréhension par reformulation, et appuyer la transmission orale sur l'écrit du dossier de soins pour assurer la continuité et la sécurité des soins 24h/24."
  }
];
