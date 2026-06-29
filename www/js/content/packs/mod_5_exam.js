export const cas = [
  {
    id: "mod_5_exam_transfert_lit_fauteuil",
    mod: "5",
    titre: "Transfert lit-fauteuil d'une patiente hémiplégique",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) dans un service de neurologie. Vous travaillez en binôme avec une autre AS sous la responsabilité de l'infirmière.",
    situation: "Mme Lefèvre, 72 ans, est hospitalisée depuis 6 jours pour un accident vasculaire cérébral (AVC) ischémique sylvien droit. Elle présente une hémiplégie gauche avec un côté droit sain et fonctionnel. Constantes du jour : TA 138/82 mmHg, pouls 78/min, température 36,8 °C, saturation 97 % en air ambiant. Elle est consciente, coopérante, mais présente une légère négligence du côté gauche. Le médecin a prescrit la mise au fauteuil pour la journée. Mme Lefèvre mesure 1,62 m pour 68 kg. Elle a peur de tomber. Le kinésithérapeute a noté qu'elle peut participer activement avec son hémicorps droit. Vous devez organiser le premier transfert du lit au fauteuil.",
    questions: [
      {
        q: "Citez les vérifications et préparations à réaliser AVANT de débuter le transfert de Mme Lefèvre.",
        type: "open",
        corrige: "Avant le transfert : vérifier la prescription médicale de mise au fauteuil ; s'assurer de l'absence de contre-indication et de l'état clinique stable (constantes). Préparer l'environnement : freiner le lit, régler sa hauteur (au niveau des hanches du soignant / position assise au bord adaptée), dégager l'espace, placer le fauteuil du côté SAIN (côté droit), freiner le fauteuil et relever les accoudoirs / repose-pieds escamotables. Préparer le matériel d'aide si besoin (drap de glisse, planche, ceinture de transfert). Vérifier la tenue de la patiente : chaussures fermées antidérapantes, vêtements adaptés. Informer et expliquer le déroulement à la patiente pour obtenir sa participation et la rassurer. Vérifier la présence et la coordination du binôme. S'assurer de sa propre tenue (chaussures, dos protégé).",
      },
      {
        q: "Pourquoi place-t-on le fauteuil du côté sain (côté droit) de la patiente hémiplégique ?",
        type: "qcm",
        options: [
          "Pour des raisons d'organisation de la chambre uniquement",
          "Pour que la patiente pivote et prenne appui sur son hémicorps valide et sécurise le transfert",
          "Parce que le côté hémiplégique doit toujours rester contre le mur",
          "Cela n'a aucune importance, les deux côtés se valent",
        ],
        correct: 1,
        corrige: "On installe le fauteuil du côté sain pour que la patiente pivote vers son côté valide et puisse prendre appui sur son membre inférieur et supérieur droits fonctionnels. Cela sécurise le transfert, favorise sa participation active et réduit le risque de chute, le côté hémiplégique ne pouvant pas assurer l'appui.",
      },
      {
        q: "Décrivez les principes de sécurité et d'ergonomie (économie d'effort, prévention du mal de dos) que vous devez appliquer pour vous-même et pour la patiente pendant le transfert.",
        type: "open",
        corrige: "Pour le soignant : pieds écartés (polygone de sustentation large), un pied en avant, fléchir les genoux et les hanches en gardant le dos droit (ne pas se pencher dos courbé), garder la charge près de soi, verrouiller la ceinture abdominale, utiliser la force des jambes et non du dos, accompagner le mouvement sans tirer brusquement, se coordonner verbalement avec le binôme (top de départ commun). Pour la patiente : la faire participer au maximum (poussée sur son côté sain), lui demander de pencher le buste en avant lors du redressement, lui faire poser les pieds bien à plat, l'inciter à se tenir si possible. Utiliser les aides techniques (ceinture de transfert, drap de glisse) quand elles diminuent l'effort. Surveiller l'absence de douleur, de malaise (hypotension orthostatique) et la bonne tolérance.",
      },
      {
        q: "Une fois Mme Lefèvre installée au fauteuil, quels éléments de surveillance et de confort devez-vous assurer ?",
        type: "open",
        corrige: "Vérifier l'installation : dos calé au fond du fauteuil, bassin bien positionné, pieds posés à plat ou sur repose-pieds, bras hémiplégique soutenu (coussin / accoudoir) pour éviter la subluxation d'épaule et l'œdème, alignement du tronc. Prévenir le risque de chute : freins, sangle ou tablette si prescrite/nécessaire, sonnette à portée du côté sain. Surveiller la tolérance : recherche de signes d'hypotension orthostatique (pâleur, vertiges, malaise), coloration, niveau de conscience, confort, douleur. Prévenir les points d'appui / escarres en limitant la durée de station assise selon prescription et en réinstallant. Mettre à disposition ses affaires du côté valide. Transmettre à l'IDE et tracer (heure de mise au fauteuil, tolérance).",
      },
    ],
    demarche: "Démarche attendue : 1) Recueil de données et vérification de la prescription et de l'état clinique. 2) Préparation de l'environnement et du matériel (lit freiné, fauteuil côté sain freiné, aides techniques). 3) Information et participation de la patiente. 4) Réalisation du transfert en binôme coordonné, avec gestes ergonomiques et appui sur l'hémicorps sain. 5) Installation confortable et sécurisée au fauteuil (positionnement du bras hémiplégique, prévention chute et escarre). 6) Surveillance de la tolérance et transmissions écrites et orales à l'IDE.",
  },
  {
    id: "mod_5_exam_releve_personne_au_sol",
    mod: "5",
    titre: "Conduite à tenir devant une personne âgée retrouvée au sol",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) de nuit en EHPAD. En entrant dans la chambre pour une ronde, vous découvrez un résident au sol.",
    situation: "M. Garnier, 84 ans, résident en EHPAD, est retrouvé au sol près de son lit à 2 h du matin. Il est conscient, répond à vos questions mais est confus et se plaint de douleurs à la hanche droite. Il présente des antécédents d'ostéoporose et de troubles de l'équilibre, et est sous anticoagulant (traitement par AVK). Vous constatez une attitude antalgique de la jambe droite qui paraît raccourcie et en rotation externe. TA mesurée au sol 142/80 mmHg, pouls 92/min. Aucune plaie visible à la tête mais le résident dit s'être cogné. Vous êtes seul(e) dans la chambre, l'infirmière de nuit est dans le bâtiment.",
    questions: [
      {
        q: "Devant cette situation, quelle est votre première conduite à tenir ? Faut-il relever immédiatement M. Garnier ? Justifiez.",
        type: "open",
        corrige: "NE PAS relever immédiatement le résident. Première conduite : rester auprès de lui, le rassurer, évaluer son état (conscience, douleur, mobilité, plaies). Devant une suspicion de fracture (jambe raccourcie en rotation externe, douleur de hanche, terrain ostéoporotique) et un possible traumatisme crânien sous anticoagulant, il faut alerter immédiatement l'IDE / le cadre de la procédure et ne pas mobiliser le membre suspect. Le relever sans évaluation risquerait d'aggraver une fracture ou une lésion. Sécuriser l'environnement, couvrir le résident pour éviter le refroidissement, ne pas le laisser seul. Transmettre les éléments observés.",
      },
      {
        q: "Quels signes vous font suspecter une fracture du col du fémur droit ?",
        type: "qcm",
        options: [
          "Une jambe allongée et en rotation interne",
          "Un membre raccourci, en rotation externe, avec douleur et impotence fonctionnelle",
          "Une absence totale de douleur et une mobilité normale",
          "Une simple rougeur du talon",
        ],
        correct: 1,
        corrige: "La fracture du col du fémur se traduit classiquement par un membre inférieur raccourci, en rotation externe, associé à une douleur vive de la hanche/aine et une impotence fonctionnelle (impossibilité de se lever ou de bouger la jambe). Le terrain ostéoporotique et la chute confortent la suspicion.",
      },
      {
        q: "Pourquoi le traitement anticoagulant (AVK) de M. Garnier majore-t-il la gravité potentielle de cette chute ?",
        type: "open",
        corrige: "Sous AVK, le sang coagule moins : tout traumatisme expose à un risque hémorragique majoré. En cas de choc à la tête (le résident dit s'être cogné), il existe un risque d'hémorragie intracrânienne (hématome) pouvant se révéler à retardement : il faut une surveillance neurologique rapprochée (conscience, pupilles, vomissements, céphalées). Un saignement interne au niveau du foyer de fracture ou des hématomes étendus est également possible. Cela impose une alerte médicale, une surveillance renforcée et la traçabilité de l'horaire de la chute.",
      },
      {
        q: "Une fois la fracture écartée par l'équipe et un relevage autorisé, citez les principes d'un relevage sécurisé d'une personne au sol non blessée.",
        type: "open",
        corrige: "Relevage sécurisé : s'assurer de l'absence de blessure / de l'accord soignant ou IDE, faire participer la personne si elle le peut, travailler à plusieurs ou avec une aide technique (sangle de relevage, lève-personne, fauteuil de relevage). Procéder par étapes progressives : passage en position assise au sol, puis à genoux/quatre pattes avec appui sur une chaise solide et calée, puis redressement. Respecter l'ergonomie du soignant (dos droit, genoux fléchis, charge près de soi, polygone large, coordination par un top commun). Vérifier l'environnement (sol sec, espace dégagé, freins). Après relevage : réinstaller confortablement, reprendre les constantes, surveiller, tracer la chute et alerter pour réévaluation.",
      },
    ],
    demarche: "Démarche attendue : 1) Évaluer sans mobiliser (conscience, douleur, déformation, plaies, constantes). 2) Ne pas relever en cas de suspicion de fracture / traumatisme. 3) Alerter l'IDE et déclencher la procédure de chute. 4) Sécuriser et réchauffer le résident, surveiller (notamment neurologique car AVK). 5) Tracer l'événement (heure, circonstances, état). 6) Réaliser un relevage adapté seulement après autorisation, avec aides techniques et ergonomie. 7) Participer à la prévention des récidives (cause de la chute, environnement).",
  },
  {
    id: "mod_5_exam_prevention_lombalgie_manutention",
    mod: "5",
    titre: "Prévention des troubles musculo-squelettiques en manutention",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de médecine gériatrique. Vous accompagnez un stagiaire AS qui se plaint de douleurs lombaires après une journée de manutentions.",
    situation: "Au cours du service, vous devez prendre en charge plusieurs résidents dépendants : rehaussement dans le lit de Mme Roux (75 kg, totalement dépendante, GIR 1), changes au lit, installation au fauteuil. Le stagiaire vous confie qu'il a mal au dos et qu'il soulève souvent les patients à bras. Vous remarquez qu'il travaille seul, dos courbé, sans utiliser le drap de glisse ni le lève-personne disponibles dans le service. Le service est équipé de lits à hauteur variable, de draps de glisse, d'un verticalisateur et d'un lève-personne sur roulettes.",
    questions: [
      {
        q: "Quels sont les principes de base de l'ergonomie (principes de sécurité physique et d'économie d'effort) à respecter lors de toute manutention de personne ?",
        type: "open",
        corrige: "Principes : régler le plan de travail à bonne hauteur (lit à hauteur variable au niveau du bassin) ; adopter une position stable avec polygone de sustentation large (pieds écartés, un pied devant) ; garder le dos droit et fléchir les genoux et les hanches plutôt que de courber le dos ; garder la charge / le résident le plus près possible de soi ; verrouiller les abdominaux et le bassin ; utiliser la force des membres inférieurs ; éviter les torsions du tronc (pivoter avec les pieds) ; rechercher la participation active de la personne ; travailler en binôme et se coordonner ; utiliser systématiquement les aides techniques adaptées ; alterner les tâches et faire des pauses. Objectif : protéger son dos et celui du patient et prévenir les TMS / lombalgies.",
      },
      {
        q: "Pour le rehaussement dans le lit de Mme Roux (75 kg, GIR 1, ne peut pas participer), quelle est l'aide technique la plus adaptée et pourquoi ?",
        type: "qcm",
        options: [
          "Aucune aide, on soulève à deux à bras",
          "Le drap de glisse, qui réduit les frottements et l'effort de soulèvement",
          "Le verticalisateur, car la patiente peut se mettre debout",
          "On laisse la patiente glisser seule",
        ],
        correct: 1,
        corrige: "Le drap de glisse (alèse de transfert) est l'aide adaptée pour rehausser dans le lit une personne ne pouvant pas participer : il diminue fortement les frottements et permet de faire glisser plutôt que de soulever, réduisant l'effort et le risque de TMS. Le verticalisateur est inadapté ici (GIR 1, ne peut se mettre debout). Le geste se fait à deux avec coordination.",
      },
      {
        q: "Quelles conséquences les mauvaises pratiques du stagiaire (soulever à bras, dos courbé, seul) peuvent-elles avoir, et quels conseils lui donnez-vous ?",
        type: "open",
        corrige: "Conséquences : risque de troubles musculo-squelettiques (lombalgies, lumbago, hernie discale, atteintes d'épaule), fatigue, accidents du travail, arrêts, mais aussi risque pour le patient (chute, douleur, inconfort, lésion cutanée). Conseils : ne jamais soulever à bras une personne dépendante ; régler la hauteur du lit ; utiliser systématiquement les aides techniques (drap de glisse, lève-personne, verticalisateur) ; travailler en binôme ; appliquer les principes ergonomiques (dos droit, genoux fléchis, charge près de soi, pas de torsion) ; faire participer le résident dès que possible ; signaler ses douleurs, demander une formation gestes et postures, et alterner les tâches. Mettre en avant le bénéfice pour le soignant et pour le résident.",
      },
      {
        q: "Citez les principales aides techniques de manutention que vous pouvez utiliser en service et indiquez une situation d'utilisation pour chacune.",
        type: "open",
        corrige: "Lit à hauteur variable : régler le plan de travail à bonne hauteur pour tout soin/manutention. Drap de glisse / alèse de transfert : rehausser ou retourner une personne dépendante au lit en limitant le soulèvement. Lève-personne (sur sangle/harnais) : transfert lit-fauteuil ou relevage d'une personne ne pouvant pas du tout se mettre debout. Verticalisateur : aider à la mise debout et au transfert d'une personne pouvant prendre appui sur ses jambes mais ne pouvant se lever seule. Planche de transfert : transfert assis lit-fauteuil pour une personne au tronc stable. Disque / plateau tournant : faciliter le pivotement lors d'un transfert debout. Ceinture de transfert : sécuriser la prise et accompagner un transfert où la personne participe. Guidon / barre d'appui, déambulateur : aide au lever et à la marche.",
      },
    ],
    demarche: "Démarche attendue : 1) Évaluer le degré de dépendance et de participation de chaque personne (GIR, capacités). 2) Choisir l'aide technique adaptée à la situation et au matériel disponible. 3) Préparer l'environnement (hauteur de lit, freins, espace, matériel). 4) Appliquer les principes ergonomiques et travailler en binôme. 5) Faire participer le résident. 6) Surveiller le confort et la sécurité. 7) Adopter une démarche de prévention des TMS (formation gestes et postures, signalement, alternance des tâches).",
  },
  {
    id: "mod_5_exam_mobilisation_postop_prevention",
    mod: "5",
    titre: "Première mobilisation et lever en post-opératoire",
    niveau: "Examen",
    contexte: "Vous êtes aide-soignant(e) en service de chirurgie orthopédique. Vous intervenez en collaboration avec l'IDE pour le premier lever d'un opéré.",
    situation: "M. Petit, 68 ans, a été opéré la veille d'une prothèse totale de hanche (PTH) droite. La prescription médicale autorise le premier lever ce jour avec appui selon protocole, en présence de l'IDE pour la première fois. Le patient est porteur d'une perfusion, d'un redon et d'une sonde urinaire. Constantes : TA 126/76 mmHg, pouls 80/min, température 37,1 °C, douleur évaluée à 3/10 après antalgique. Il appréhende de se lever et craint la douleur. Le déambulateur est à disposition. Le kinésithérapeute a indiqué les mouvements à proscrire pour protéger la prothèse.",
    questions: [
      {
        q: "Avant le premier lever de M. Petit, quels éléments devez-vous vérifier et préparer ?",
        type: "open",
        corrige: "Vérifier la prescription médicale du lever et les consignes (appui autorisé, mouvements interdits liés à la PTH). S'assurer que la douleur est contrôlée (antalgique pris, évaluation) et que les constantes sont stables. Vérifier et sécuriser les dispositifs : perfusion, redon, sonde urinaire (clamper/vider si besoin, dégager les tubulures pour éviter l'arrachage). Préparer l'environnement : lit freiné et à bonne hauteur, espace dégagé, déambulateur à proximité, fauteuil prêt et freiné, chaussures fermées antidérapantes. Informer le patient, le rassurer, expliquer le déroulement et la participation attendue. S'assurer de la présence de l'IDE et de la coordination. Procéder par étapes en surveillant l'hypotension orthostatique.",
      },
      {
        q: "Après une prothèse totale de hanche, quel mouvement faut-il proscrire pour éviter une luxation de la prothèse ?",
        type: "qcm",
        options: [
          "La marche avec déambulateur",
          "La flexion de hanche au-delà de 90°, l'adduction (croiser les jambes) et la rotation interne",
          "La position allongée sur le dos",
          "Le port de chaussures antidérapantes",
        ],
        correct: 1,
        corrige: "Après une PTH (voie postérieure le plus souvent), il faut éviter la flexion de hanche supérieure à 90°, l'adduction (croiser les jambes / ramener la jambe vers l'axe du corps) et la rotation interne, car la combinaison de ces mouvements expose à un risque de luxation de la prothèse. On installe un coussin d'abduction si besoin et on adapte les transferts en conséquence.",
      },
      {
        q: "Lors du passage de la position couchée à debout, quels signes de mauvaise tolérance devez-vous surveiller, et que faites-vous s'ils apparaissent ?",
        type: "open",
        corrige: "Signes d'hypotension orthostatique / mauvaise tolérance : pâleur, sueurs, vertiges, sensation de malaise, vision trouble, nausées, accélération du pouls, baisse de la TA, propos confus. Conduite : procéder par paliers (assis au bord du lit quelques instants avant le lever), surveiller en permanence. Si signes de malaise : arrêter la mobilisation, rasseoir ou recoucher le patient en sécurité, surélever les jambes si besoin, le rassurer, prendre les constantes et alerter l'IDE / le médecin. Ne jamais forcer. Tracer la tolérance du lever dans le dossier.",
      },
      {
        q: "Quels sont les bénéfices d'un lever et d'une mobilisation précoces en post-opératoire ?",
        type: "open",
        corrige: "Bénéfices : prévention des complications de décubitus / d'immobilité : prévention des complications thrombo-emboliques (phlébite, embolie pulmonaire) par stimulation du retour veineux, prévention des escarres, prévention de l'encombrement bronchique et des complications respiratoires, prévention de la constipation et de la stase urinaire, maintien de la masse et de la force musculaires, entretien des amplitudes articulaires, reprise de l'autonomie et bénéfice psychologique (moral, reprise de confiance). Le lever précoce favorise une récupération plus rapide et la sortie. Il doit rester adapté à la prescription et à la tolérance du patient.",
      },
    ],
    demarche: "Démarche attendue : 1) Vérifier la prescription, le contrôle de la douleur et la stabilité clinique. 2) Sécuriser les dispositifs médicaux (perfusion, redon, sonde). 3) Préparer l'environnement et le matériel (déambulateur, chaussures, fauteuil). 4) Informer et rassurer le patient. 5) Réaliser le lever par paliers avec l'IDE, en respectant les mouvements interdits de la PTH et l'ergonomie. 6) Surveiller la tolérance (hypotension orthostatique, douleur). 7) Réinstaller en sécurité et transmettre / tracer le résultat du premier lever.",
  },
];
