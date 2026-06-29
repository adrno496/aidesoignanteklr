export const cas = [
  {
    id: "mod_3_exam_post_op_hemorragie",
    mod: "3",
    titre: "Surveillance post-opératoire après prothèse totale de hanche",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de chirurgie orthopédique. Vous travaillez en binôme avec l'infirmière (IDE) qui vous a délégué la prise des constantes.",
    situation: "Mme L., 78 ans, a été opérée ce matin d'une prothèse totale de hanche droite. Antécédents : hypertension artérielle traitée, diabète de type 2. De retour dans sa chambre depuis 2 heures, elle est porteuse d'un redon, d'une perfusion et d'une sonde urinaire. À votre prise de constantes de 16h, vous mesurez : pression artérielle 92/55 mmHg (référence du matin 145/85), pouls 112 battements/min, fréquence respiratoire 22/min, SpO2 94 % en air ambiant, température 36,2 °C. Mme L. est pâle, légèrement agitée et vous dit avoir soif. Vous notez que le redon s'est rempli abondamment de sang rouge depuis votre dernier passage et que le pansement est souillé.",
    questions: [
      {
        q: "Relevez et interprétez les éléments anormaux que vous avez observés (constantes et signes cliniques), en restant dans votre champ de compétence d'aide-soignant(e).",
        type: "open",
        corrige: "Éléments anormaux à relever : pression artérielle effondrée (92/55) très inférieure à la référence du matin (hypotension) ; pouls accéléré à 112/min (tachycardie) ; fréquence respiratoire augmentée à 22/min (polypnée) ; SpO2 abaissée à 94 %. Signes cliniques associés : pâleur, agitation, soif. Signes locaux : redon qui se remplit abondamment de sang rouge et pansement souillé. L'AS constate et décrit ces écarts par rapport aux valeurs de référence (constantes basses/élevées, signes de mauvaise tolérance) mais ne pose pas de diagnostic : il/elle ne dit pas 'hémorragie' ou 'choc' en termes médicaux, c'est l'IDE et le médecin qui interprètent. L'AS signale une situation qui sort de la normale.",
      },
      {
        q: "Quelle est votre conduite immédiate face à cette situation ?",
        type: "open",
        corrige: "Conduite attendue : ne pas quitter la patiente / rester auprès d'elle et la rassurer ; alerter immédiatement et sans délai l'IDE (situation d'urgence) ; transmettre oralement les constantes chiffrées et les signes observés (saignement du redon, pansement souillé, pâleur, agitation) ; ne pas donner à boire malgré la soif sans accord soignant (risque de reprise au bloc) ; surveiller la patiente en attendant l'IDE ; tracer les constantes et l'heure dans le dossier. L'AS ne modifie pas le débit de perfusion et n'interprète pas : il/elle mesure, alerte et transmet.",
      },
      {
        q: "Parmi ces valeurs, laquelle correspond à une fréquence cardiaque NORMALE au repos chez l'adulte ?",
        type: "qcm",
        options: ["45 battements/min", "75 battements/min", "112 battements/min", "130 battements/min"],
        correct: 1,
        corrige: "La fréquence cardiaque normale de l'adulte au repos se situe entre 60 et 100 battements/min ; 75/min est dans la norme. 45 évoque une bradycardie, 112 et 130 des tachycardies.",
      },
      {
        q: "À qui et comment devez-vous transmettre cette situation ? Citez l'intérêt d'une transmission ciblée et écrite.",
        type: "open",
        corrige: "Transmission orale immédiate à l'IDE (caractère urgent), puis transmission écrite et tracée dans le dossier de soins. Intérêt : assurer la continuité et la traçabilité des soins, permettre à l'IDE et au médecin de réagir vite, garder une trace horodatée des constantes et de leur évolution, sécuriser la prise en charge et la relève d'équipe. La transmission doit être précise, factuelle, chiffrée (valeurs, heure) et porter sur ce qui est observé, sans interprétation médicale.",
      },
    ],
    demarche: "Reconnaître une situation d'urgence à partir des constantes (hypotension + tachycardie + polypnée) et des signes de mauvaise tolérance (pâleur, agitation, soif) associés à un saignement visible. Rester auprès de la patiente, alerter sans délai l'IDE, transmettre des données chiffrées et factuelles, ne rien donner per os, surveiller et tracer. L'AS mesure et alerte ; l'IDE et le médecin interprètent et décident.",
  },
  {
    id: "mod_3_exam_personne_agee_fievre",
    mod: "3",
    titre: "Hyperthermie chez une personne âgée en EHPAD",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en EHPAD. Vous réalisez la tournée des constantes du matin sous la responsabilité de l'IDE.",
    situation: "M. R., 86 ans, vit en EHPAD. Antécédents : maladie d'Alzheimer au stade modéré, troubles de la déglutition. Depuis hier, l'équipe le trouve plus somnolent et il a peu mangé. Ce matin, il refuse son petit-déjeuner. Vous mesurez : température 39,1 °C (tympanique), pouls 105/min, pression artérielle 110/70 mmHg, fréquence respiratoire 24/min, SpO2 91 % en air ambiant. Sa peau est chaude, ses lèvres sont sèches, il tousse et présente des marbrures aux genoux.",
    questions: [
      {
        q: "Identifiez les constantes et signes qui doivent vous alerter dans cette situation.",
        type: "open",
        corrige: "Constantes anormales : température élevée à 39,1 °C (hyperthermie/fièvre) ; pouls accéléré à 105/min (tachycardie) ; fréquence respiratoire augmentée à 24/min (polypnée) ; SpO2 abaissée à 91 % (désaturation). Signes cliniques à relever : somnolence inhabituelle, refus alimentaire, peau chaude, lèvres sèches (signe de déshydratation possible), toux, marbrures aux genoux. L'AS décrit ces écarts à la normale et signale une dégradation de l'état général sans poser de diagnostic (ne dit pas 'pneumopathie' ni 'sepsis' : c'est le rôle de l'IDE et du médecin).",
      },
      {
        q: "Quelles actions relèvent de votre rôle d'aide-soignant(e) pour ce résident ? Citez-en au moins quatre.",
        type: "open",
        corrige: "Actions du rôle AS : transmettre immédiatement les constantes et signes à l'IDE ; surveiller et re-mesurer les constantes selon la demande de l'IDE ; mesures de confort face à la fièvre (découvrir le résident, aérer, proposer à boire en tenant compte des troubles de la déglutition et après avis IDE, hydratation adaptée) ; assurer la surveillance de la conscience et de la respiration ; installer le résident confortablement (position demi-assise pour le confort respiratoire) ; surveiller la prise hydrique et alerter sur le refus alimentaire ; tracer les observations dans le dossier. L'AS applique des mesures de confort et de surveillance ; il/elle n'administre pas d'antipyrétique de sa propre initiative.",
      },
      {
        q: "À partir de quelle valeur de température parle-t-on classiquement d'hyperthermie (fièvre) chez l'adulte ?",
        type: "qcm",
        options: ["37,0 °C", "37,5 °C", "38,0 °C", "39,5 °C"],
        correct: 2,
        corrige: "On parle classiquement de fièvre à partir de 38,0 °C. Entre 37,5 et 38 °C on évoque une fébricule ; la température normale est d'environ 36,5 à 37,5 °C.",
      },
      {
        q: "Pourquoi la prise de température et de SpO2 doit-elle s'accompagner d'une observation clinique globale chez la personne âgée ?",
        type: "open",
        corrige: "Chez la personne âgée, les signes peuvent être atypiques ou discrets : un changement de comportement (somnolence, refus alimentaire, confusion), des marbrures, une polypnée ou une désaturation peuvent traduire une aggravation avant même une fièvre franche. La SpO2 et la température seules ne suffisent pas : l'observation de la conscience, de la coloration, de l'hydratation et du comportement complète le recueil. L'AS rapporte un faisceau d'éléments concordants à l'IDE, qui interprète l'ensemble. Cela permet un repérage précoce de la dégradation.",
      },
      {
        q: "Le résident présente des troubles de la déglutition. Que devez-vous prendre en compte avant de lui proposer à boire ?",
        type: "open",
        corrige: "Avant de proposer à boire, l'AS doit tenir compte du risque de fausse route lié aux troubles de la déglutition : installer le résident en position assise / tête légèrement penchée en avant, proposer de petites quantités, adapter la texture (eau gélifiée si prescrit), ne jamais faire boire un résident somnolent ou peu vigilant, et solliciter l'avis de l'IDE compte tenu de la somnolence. La sécurité prime : en cas de doute sur la vigilance, ne pas faire boire et alerter l'IDE.",
      },
    ],
    demarche: "Repérer une dégradation de l'état général chez une personne âgée à partir de constantes anormales (fièvre, tachycardie, polypnée, désaturation) et de signes atypiques (somnolence, refus alimentaire, marbrures). Transmettre sans délai à l'IDE, appliquer des mesures de confort et de surveillance, sécuriser l'hydratation face aux troubles de la déglutition, tracer. L'AS mesure, surveille et transmet ; l'IDE interprète et décide de la conduite médicale.",
  },
  {
    id: "mod_3_exam_diabete_malaise",
    mod: "3",
    titre: "Malaise et mesure de la glycémie capillaire chez un patient diabétique",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de médecine. L'IDE vous a demandé de surveiller M. T. et de réaliser, selon le protocole du service et dans le cadre de la collaboration, la mesure de la glycémie capillaire.",
    situation: "M. T., 62 ans, diabétique de type 1 sous insuline, est hospitalisé pour un bilan. En fin de matinée, alors que vous l'aidez à la toilette, il devient pâle, transpire abondamment (sueurs), tremble et vous dit se sentir faible et avoir la tête qui tourne. Il est conscient mais a du mal à se concentrer. Vous mesurez : pouls 98/min, pression artérielle 128/78 mmHg, SpO2 98 %. Vous réalisez une glycémie capillaire qui affiche 0,45 g/L (2,5 mmol/L). Le patient n'a pas terminé son petit-déjeuner ce matin.",
    questions: [
      {
        q: "Que vous évoquent l'ensemble des signes présentés par M. T. et la valeur de glycémie mesurée ? Restez dans votre champ d'aide-soignant(e).",
        type: "open",
        corrige: "L'AS relève un ensemble de signes évocateurs : pâleur, sueurs, tremblements, sensation de faiblesse, vertiges, difficulté de concentration, chez un patient diabétique sous insuline qui n'a pas fini de manger. La glycémie capillaire est basse à 0,45 g/L (valeur normale à jeun environ 0,70 à 1,10 g/L). L'AS constate une glycémie basse et des signes de malaise correspondant à une hypoglycémie, et surtout signale immédiatement à l'IDE. L'AS rapporte la valeur chiffrée et les signes ; le diagnostic et la conduite thérapeutique relèvent de l'IDE / du médecin. L'AS reste factuel et ne modifie pas le traitement.",
      },
      {
        q: "Quelle est votre conduite à tenir immédiate, dans le cadre de la collaboration avec l'IDE et du protocole du service ?",
        type: "open",
        corrige: "Conduite : rester auprès du patient, le rassurer et l'installer en sécurité (assis/allongé pour éviter une chute) ; alerter immédiatement l'IDE et transmettre la valeur de glycémie et les signes ; le patient étant conscient et capable de déglutir, appliquer le resucrage selon le protocole du service (sucre / jus de fruit / produit sucré per os) ; ne jamais faire absorber quoi que ce soit si le patient présente des troubles de conscience (risque de fausse route) ; surveiller l'évolution, recontrôler la glycémie selon protocole/demande IDE ; tracer l'épisode, l'heure, la valeur et les actions. L'AS agit dans le cadre du protocole et sous la responsabilité de l'IDE.",
      },
      {
        q: "Quelle est la valeur usuelle de la glycémie capillaire à jeun chez l'adulte ?",
        type: "qcm",
        options: ["0,30 à 0,50 g/L", "0,70 à 1,10 g/L", "1,40 à 1,80 g/L", "2,00 à 2,50 g/L"],
        correct: 1,
        corrige: "La glycémie à jeun normale chez l'adulte est d'environ 0,70 à 1,10 g/L. En dessous d'environ 0,60 à 0,70 g/L on parle d'hypoglycémie ; une glycémie à jeun nettement élevée oriente vers une hyperglycémie.",
      },
      {
        q: "Citez les précautions d'hygiène et de sécurité à respecter lors de la réalisation d'une glycémie capillaire.",
        type: "open",
        corrige: "Précautions : hygiène des mains et port de gants ; vérifier l'identité du patient et l'adéquation du matériel (lecteur, bandelettes non périmées) ; nettoyer/sécher le site de ponction (face latérale de la pulpe du doigt), ne pas piquer sur une peau souillée ; utiliser un autopiqueur à usage unique ou usage unique par patient ; ne jamais recapuchonner la lancette ; éliminer immédiatement le matériel piquant dans le collecteur d'objets perçants (DASRI) ; tracer la valeur. Respect du protocole du service et prévention des accidents d'exposition au sang.",
      },
      {
        q: "Si vous découvriez M. T. inconscient, que feriez-vous ? Que ne feriez-vous surtout PAS ?",
        type: "open",
        corrige: "Si le patient est inconscient : ne RIEN donner par la bouche (ni sucre, ni boisson) en raison du risque majeur de fausse route ; alerter immédiatement l'IDE / déclencher l'alerte (urgence) ; assurer la sécurité du patient, le mettre en position latérale de sécurité s'il respire, surveiller la conscience et la respiration en attendant les secours/IDE. La prise en charge de l'hypoglycémie chez un patient inconscient (resucrage IV, glucagon) relève de l'IDE et du médecin, pas de l'AS.",
      },
    ],
    demarche: "Reconnaître un faisceau de signes de malaise hypoglycémique chez un diabétique (pâleur, sueurs, tremblements, vertiges) confirmé par une glycémie capillaire basse mesurée dans le cadre du protocole. Sécuriser le patient, alerter l'IDE, appliquer le resucrage per os seulement si le patient est conscient et peut déglutir, ne rien donner par voie orale si troubles de conscience, surveiller, recontrôler et tracer. L'AS mesure et applique le protocole ; l'IDE interprète et décide.",
  },
];
