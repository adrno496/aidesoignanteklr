// Pack MODULE 10 — Travail en équipe pluriprofessionnelle, qualité et gestion des risques
// Bloc 5. DEAS, référentiel arrêté du 10 juin 2021 (modifié).
export const fiches = [
  {
    id: "f_10_equipe_pluripro", mod: "10", type: "cours",
    titre: "Le travail en équipe pluriprofessionnelle",
    resume: "Coopérer avec les autres professionnels autour d'un projet de soin commun, chacun dans son champ de compétences.",
    tags: ["équipe", "pluriprofessionnel", "coopération", "rôles", "coordination"],
    html: `
      <p>Le soin est un <strong>travail collectif</strong>. L'aide-soignant·e agit au sein d'une équipe pluriprofessionnelle, sous la responsabilité et en <span class="key" data-term="collaboration">collaboration</span> avec l'infirmier·e (IDE).</p>
      <h3>Qui compose l'équipe ?</h3>
      <ul>
        <li><strong>Soignants</strong> : AS, IDE, cadre de santé, médecin.</li>
        <li><strong>Rééducateurs et médico-techniques</strong> : kinésithérapeute, ergothérapeute, psychomotricien·ne, diététicien·ne, orthophoniste.</li>
        <li><strong>Accompagnement social et psychologique</strong> : psychologue, assistant·e de service social.</li>
        <li><strong>Logistique et hôtellerie</strong> : ASH (agent des services hospitaliers), agents de bionettoyage, brancardiers.</li>
      </ul>
      <h3>Place et limites de l'AS</h3>
      <ul>
        <li>L'AS réalise les <strong>soins d'hygiène, de confort, l'aide à la vie quotidienne, la mobilisation, la mesure des paramètres vitaux, l'observation</strong>.</li>
        <li>Il·elle agit <strong>en collaboration avec l'IDE</strong> et lui rend compte ; les actes infirmiers (injections, pansements complexes, préparation et administration des médicaments, calcul de doses) relèvent de l'<strong>IDE</strong>.</li>
        <li>Chacun reste dans son <strong>champ de compétences</strong> : connaître le rôle des autres évite les erreurs et les oublis.</li>
      </ul>
      <h3>Outils de coordination</h3>
      <ul>
        <li>Les <strong>transmissions</strong> (orales et écrites), le <strong>dossier de soins</strong>, les <strong>relèves</strong> entre équipes.</li>
        <li>Les <strong>réunions de service</strong>, les <strong>staffs</strong> pluriprofessionnels, le <strong>projet de soin personnalisé</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">Coopérer, ce n'est pas tout faire</div>Bien travailler en équipe, c'est aussi <strong>alerter et passer le relais</strong> à la bonne personne (IDE, cadre, médecin) quand une situation dépasse son champ.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — C.O.R.</div><strong>C</strong>ommuniquer · <strong>O</strong>bserver et transmettre · <strong>R</strong>especter le rôle de chacun.</div>
    `,
    refs: ["Module 10"],
  },
  {
    id: "f_10_transmissions", mod: "10", type: "cours",
    titre: "Les transmissions et le dossier de soins",
    resume: "Transmettre des informations fiables, datées et tracées pour assurer la continuité et la sécurité des soins.",
    tags: ["transmissions", "dossier de soins", "traçabilité", "continuité", "DAR"],
    html: `
      <p>Les <span class="key" data-term="transmissions">transmissions</span> garantissent la <strong>continuité des soins</strong> : ce qui n'est pas transmis (ou pas tracé) est considéré comme non fait.</p>
      <h3>Deux formes complémentaires</h3>
      <ul>
        <li><strong>Transmissions orales</strong> : lors des relèves, ciblées sur l'essentiel et les priorités.</li>
        <li><strong>Transmissions écrites</strong> : tracées dans le <strong>dossier de soins</strong> (papier ou informatisé), datées, signées, lisibles.</li>
      </ul>
      <h3>Transmissions ciblées : la méthode DAR</h3>
      <table class="tbl">
        <tr><th>Lettre</th><th>Signification</th><th>Exemple</th></tr>
        <tr><td><strong>D</strong></td><td>Données (ce qu'on observe)</td><td>« Refuse de manger depuis 2 repas. »</td></tr>
        <tr><td><strong>A</strong></td><td>Actions (ce qu'on a fait)</td><td>« Proposé une collation, prévenu l'IDE. »</td></tr>
        <tr><td><strong>R</strong></td><td>Résultat (ce qu'on observe ensuite)</td><td>« A pris un yaourt. »</td></tr>
      </table>
      <h3>Qualité d'une bonne transmission</h3>
      <ul>
        <li><strong>Factuelle et objective</strong> : décrire les faits, pas les jugements (« a pleuré » plutôt que « capricieux »).</li>
        <li><strong>Précise et datée</strong> : heure, paramètres chiffrés, contexte.</li>
        <li><strong>Confidentielle</strong> : respect du <strong>secret professionnel</strong>, pas de transmission dans les lieux de passage.</li>
        <li>Toute donnée <strong>anormale</strong> (chute, douleur, fièvre, comportement inhabituel) est transmise sans délai à l'IDE.</li>
      </ul>
      <div class="callout"><div class="callout-t">Écrit = preuve</div>Le dossier de soins a une <strong>valeur juridique</strong>. On n'efface pas, on ne surcharge pas : on barre proprement et on date la correction.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — D.A.R.</div><strong>D</strong>onnée · <strong>A</strong>ction · <strong>R</strong>ésultat : la cible bien transmise.</div>
    `,
    refs: ["Module 10"],
  },
  {
    id: "f_10_qualite", mod: "10", type: "cours",
    titre: "La démarche qualité en établissement",
    resume: "Améliorer en continu la sécurité et la satisfaction grâce aux protocoles, à la traçabilité et à l'évaluation des pratiques.",
    tags: ["qualité", "protocole", "certification", "amélioration continue", "PDCA"],
    html: `
      <p>La <span class="key" data-term="démarche qualité">démarche qualité</span> vise à offrir des soins <strong>sûrs, efficaces et adaptés</strong>, dans une logique d'<strong>amélioration continue</strong>.</p>
      <h3>Les outils de la qualité</h3>
      <ul>
        <li><strong>Protocoles et procédures</strong> : la « bonne façon » de réaliser un soin (ex. protocole de prévention des escarres, de bionettoyage). On les applique et on les met à jour.</li>
        <li><strong>Traçabilité</strong> : noter ce qui est fait (soins, surveillance, bionettoyage) pour prouver et suivre.</li>
        <li><strong>Indicateurs</strong> : taux de chutes, d'escarres, satisfaction des personnes soignées.</li>
        <li><strong>Évaluation des pratiques</strong> : audits, questionnaires, retours d'expérience (RETEX).</li>
      </ul>
      <h3>La roue de l'amélioration continue (PDCA)</h3>
      <table class="tbl">
        <tr><th>Étape</th><th>Sens</th></tr>
        <tr><td><strong>Plan</strong></td><td>Planifier / prévoir l'action</td></tr>
        <tr><td><strong>Do</strong></td><td>Faire / mettre en œuvre</td></tr>
        <tr><td><strong>Check</strong></td><td>Vérifier / évaluer les résultats</td></tr>
        <tr><td><strong>Act</strong></td><td>Réagir / ajuster et corriger</td></tr>
      </table>
      <h3>La certification</h3>
      <ul>
        <li>Les établissements de santé sont évalués par la <strong>HAS</strong> (Haute Autorité de Santé) via la <strong>certification</strong>.</li>
        <li>Chaque professionnel, y compris l'AS, <strong>participe</strong> à la qualité : appliquer les protocoles, tracer, signaler les anomalies.</li>
      </ul>
      <div class="callout"><div class="callout-t">La qualité, l'affaire de tous</div>Un protocole n'a de valeur que s'il est <strong>réellement appliqué</strong> par chacun, chaque jour.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — P.D.C.A.</div><strong>P</strong>lan (planifier) · <strong>D</strong>o (faire) · <strong>C</strong>heck (vérifier) · <strong>A</strong>ct (ajuster).</div>
    `,
    refs: ["Module 10"],
  },
  {
    id: "f_10_gestion_risques", mod: "10", type: "cours",
    titre: "La gestion des risques et la sécurité des soins",
    resume: "Prévenir les évènements indésirables, les signaler et participer à la vigilance pour sécuriser la personne soignée.",
    tags: ["gestion des risques", "EIAS", "signalement", "vigilance", "sécurité"],
    html: `
      <p>La <span class="key" data-term="gestion des risques">gestion des risques</span> vise à <strong>prévenir, repérer et corriger</strong> tout ce qui peut nuire à la personne soignée ou au professionnel.</p>
      <h3>L'évènement indésirable</h3>
      <ul>
        <li>Un <strong>évènement indésirable associé aux soins (EIAS)</strong> est un fait inattendu qui a causé (ou aurait pu causer) un dommage : chute, erreur, fausse route, brûlure, escarre.</li>
        <li>Le <strong>« presque accident »</strong> (évènement évité de justesse) se signale aussi : il permet d'éviter l'accident réel.</li>
        <li>Un EIAS particulièrement grave (décès, mise en jeu du pronostic vital) est un <strong>évènement indésirable grave (EIG)</strong>.</li>
      </ul>
      <h3>Le signalement</h3>
      <ul>
        <li>Tout EIAS se <strong>déclare</strong> (fiche d'évènement indésirable / FEI) : c'est une démarche <strong>non punitive</strong> qui sert à comprendre et améliorer, pas à sanctionner.</li>
        <li>L'AS <strong>alerte l'IDE et le cadre</strong>, sécurise la personne et trace les faits.</li>
      </ul>
      <h3>Principaux risques en service</h3>
      <table class="tbl">
        <tr><th>Risque</th><th>Prévention par l'AS</th></tr>
        <tr><td>Chute</td><td>Sol sec, sonnette accessible, chaussage adapté, surveillance</td></tr>
        <tr><td>Infection (IAS)</td><td>Hygiène des mains, bionettoyage, précautions standard</td></tr>
        <tr><td>Erreur d'identité</td><td>Vérifier l'identité avant tout soin (identitovigilance)</td></tr>
        <tr><td>Fausse route / dénutrition</td><td>Installation, texture adaptée, surveillance des repas</td></tr>
        <tr><td>Escarre</td><td>Changes de position, observation des points d'appui</td></tr>
      </table>
      <h3>Les vigilances sanitaires</h3>
      <ul>
        <li><strong>Identitovigilance</strong> : sécuriser l'identité (bon soin à la bonne personne).</li>
        <li><strong>Matériovigilance</strong> : signaler un dispositif médical défectueux.</li>
        <li><strong>Pharmacovigilance, hémovigilance</strong> : suivies par l'IDE et le médecin ; l'AS qui observe un effet anormal le <strong>transmet</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">Signaler n'est pas accuser</div>La culture de sécurité repose sur la <strong>déclaration sans crainte</strong> : on apprend des erreurs pour ne pas les répéter.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — S.A.S.</div><strong>S</strong>écuriser la personne · <strong>A</strong>lerter l'IDE/cadre · <strong>S</strong>ignaler (tracer la FEI).</div>
    `,
    refs: ["Module 10"],
  },
];
export const qcm = [
  { mod: "10", q: "L'aide-soignant·e réalise ses soins :", options: ["De façon totalement autonome, sans rendre compte", "En collaboration avec l'infirmier·e et sous sa responsabilité", "Uniquement sur ordre du médecin", "Sans jamais communiquer avec l'équipe"], correct: 1,
    explication: "L'AS agit dans le cadre du rôle propre de l'IDE, en collaboration avec lui·elle, et lui rend compte de ses observations.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Parmi ces actes, lequel relève de l'infirmier·e et NON de l'AS ?", options: ["Aide à la toilette", "Mesure de la température", "Réalisation d'une injection", "Installation pour le repas"], correct: 2,
    explication: "Les injections sont des actes infirmiers. L'AS reste dans le champ des soins d'hygiène, de confort et de surveillance des paramètres vitaux.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Que signifie le sigle DAR utilisé dans les transmissions ciblées ?", options: ["Diagnostic - Acte - Résultat", "Données - Actions - Résultat", "Douleur - Alerte - Réaction", "Dossier - Archive - Relève"], correct: 1,
    explication: "DAR = Données (ce qu'on observe), Actions (ce qu'on a fait), Résultat (ce qu'on observe ensuite). C'est la structure d'une transmission ciblée.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Une transmission de qualité doit être :", options: ["Basée sur le ressenti et le jugement", "Factuelle, objective, datée et tracée", "Faite uniquement à l'oral", "Réservée aux médecins"], correct: 1,
    explication: "On décrit des faits objectifs, datés et tracés dans le dossier de soins. Les jugements de valeur sont à proscrire.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Concernant le dossier de soins, on peut dire que :", options: ["Il n'a aucune valeur légale", "Ce qui n'est pas tracé est considéré comme non fait", "On peut effacer librement les erreurs", "Seul le médecin y a accès"], correct: 1,
    explication: "Le dossier de soins a une valeur juridique : la traçabilité prouve les soins réalisés. Une erreur se barre proprement et se date, on n'efface pas.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Un évènement indésirable associé aux soins (EIAS) doit être :", options: ["Caché pour éviter une sanction", "Signalé via une fiche d'évènement indésirable", "Ignoré s'il n'a pas causé de dommage", "Réglé seul par l'AS sans en parler"], correct: 1,
    explication: "Tout EIAS, même un presque-accident, se déclare via une FEI. La démarche est non punitive et vise l'amélioration de la sécurité.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "La démarche qualité repose notamment sur :", options: ["L'improvisation de chacun", "Des protocoles appliqués et la traçabilité", "L'absence d'évaluation", "Le secret entre services"], correct: 1,
    explication: "La qualité s'appuie sur des protocoles validés, leur application réelle, la traçabilité et l'évaluation continue des pratiques.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Le cycle PDCA d'amélioration continue correspond à :", options: ["Planifier - Faire - Vérifier - Ajuster", "Prévoir - Décider - Classer - Archiver", "Préparer - Distribuer - Contrôler - Annuler", "Poser - Discuter - Conclure - Agir"], correct: 0,
    explication: "PDCA = Plan (planifier), Do (faire), Check (vérifier), Act (ajuster). C'est la roue de Deming de l'amélioration continue.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Quel organisme évalue les établissements de santé par la certification ?", options: ["La CAF", "La HAS (Haute Autorité de Santé)", "L'URSSAF", "La CPAM"], correct: 1,
    explication: "La HAS (Haute Autorité de Santé) conduit la certification des établissements de santé, démarche d'évaluation de la qualité et de la sécurité.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "L'identitovigilance consiste à :", options: ["Surveiller les dispositifs médicaux", "Sécuriser l'identité de la personne avant un soin", "Vérifier les médicaments", "Contrôler les visiteurs"], correct: 1,
    explication: "L'identitovigilance garantit que le bon soin est délivré à la bonne personne, en vérifiant systématiquement son identité.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Face à un dispositif médical défectueux, l'AS relève de quelle vigilance pour le signaler ?", options: ["Hémovigilance", "Pharmacovigilance", "Matériovigilance", "Biovigilance"], correct: 2,
    explication: "La matériovigilance concerne les dispositifs médicaux : un matériel défectueux ou dangereux doit être signalé.", ref: "Module 10", diff: 3 },
  { mod: "10", q: "Pour prévenir une chute chez une personne âgée, l'AS doit :", options: ["Laisser le sol mouillé", "Éloigner la sonnette", "Maintenir le sol sec et la sonnette accessible", "Retirer les barrières systématiquement"], correct: 2,
    explication: "Sol sec, sonnette à portée, chaussage adapté, éclairage et surveillance sont des mesures de prévention des chutes relevant de l'AS.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Un « presque accident » (évènement évité de justesse) :", options: ["Ne se signale jamais", "Se signale aussi car il permet de prévenir l'accident réel", "Concerne uniquement le médecin", "Doit être oublié rapidement"], correct: 1,
    explication: "Signaler les presque-accidents permet d'identifier les failles avant qu'un dommage réel ne survienne : c'est un pilier de la culture de sécurité.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Le secret professionnel impose à l'AS de :", options: ["Parler des patients dans l'ascenseur", "Transmettre les informations uniquement aux personnes habilitées", "Diffuser les dossiers à la famille librement", "Publier les observations en ligne"], correct: 1,
    explication: "Les informations relatives à la personne soignée sont confidentielles et partagées seulement entre professionnels habilités, dans l'intérêt du soin.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Parmi ces professionnels, lequel intervient dans la rééducation motrice ?", options: ["Le diététicien", "Le kinésithérapeute", "L'assistant social", "Le psychologue"], correct: 1,
    explication: "Le kinésithérapeute prend en charge la rééducation motrice. Connaître le rôle de chacun facilite la coopération en équipe.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "La culture de sécurité dans un établissement est dite :", options: ["Punitive : on sanctionne celui qui signale", "Non punitive : on apprend des erreurs sans accuser", "Secrète : on cache les incidents", "Individuelle : chacun gère seul"], correct: 1,
    explication: "Une culture de sécurité positive est non punitive : déclarer un évènement vise à comprendre et améliorer, pas à sanctionner.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Pour prévenir une infection associée aux soins, le geste le plus efficace de l'AS est :", options: ["Aérer une fois par semaine", "L'hygiène des mains entre chaque soin", "Porter des gants en permanence", "Changer de tenue une fois par mois"], correct: 1,
    explication: "L'hygiène des mains (lavage ou friction hydro-alcoolique) entre chaque soin est la mesure de base de prévention des infections associées aux soins.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Lors d'une relève entre équipes, l'AS doit transmettre :", options: ["Tout ce qui lui passe par la tête", "Les informations essentielles et les priorités pour la continuité des soins", "Uniquement les ragots du service", "Rien, car l'écrit suffit"], correct: 1,
    explication: "La relève orale est ciblée sur l'essentiel et les priorités, en complément des transmissions écrites, pour assurer la continuité des soins.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Quand une situation dépasse le champ de compétences de l'AS, il·elle doit :", options: ["Agir quand même seul·e", "Alerter et passer le relais à l'IDE ou au cadre", "Attendre sans rien dire", "Demander à la famille de décider"], correct: 1,
    explication: "Travailler en équipe, c'est aussi savoir alerter et passer le relais à la bonne personne (IDE, cadre, médecin) quand la situation dépasse son rôle.", ref: "Module 10", diff: 1 },
  { mod: "10", q: "Le projet de soin personnalisé est :", options: ["Décidé par l'AS seul·e", "Élaboré en équipe pluriprofessionnelle autour de la personne", "Imposé sans tenir compte de la personne", "Réservé au médecin"], correct: 1,
    explication: "Le projet de soin personnalisé est construit en équipe pluriprofessionnelle, en associant la personne soignée et ses besoins.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Parmi ces indicateurs de qualité, lequel concerne directement la prévention assurée par l'AS ?", options: ["Le taux d'escarres", "Le chiffre d'affaires", "Le nombre de réunions", "Le coût des repas"], correct: 0,
    explication: "Le taux d'escarres est un indicateur de qualité des soins ; la prévention (changes de position, observation des points d'appui) relève notamment de l'AS.", ref: "Module 10", diff: 3 },
  { mod: "10", q: "Face à un effet anormal d'un médicament (relevant de la pharmacovigilance), l'AS doit :", options: ["Adapter elle·lui-même la dose", "Le transmettre sans délai à l'IDE", "Arrêter le traitement de sa propre initiative", "Ne rien dire car ce n'est pas son rôle"], correct: 1,
    explication: "La pharmacovigilance est suivie par l'IDE et le médecin. L'AS n'adapte ni n'arrête un traitement : elle observe et transmet sans délai tout effet anormal.", ref: "Module 10", diff: 2 },
  { mod: "10", q: "Qu'est-ce qu'un évènement indésirable grave (EIG) ?", options: ["Un simple retard dans un soin", "Un EIAS ayant entraîné un décès ou mis en jeu le pronostic vital", "Une réunion de service", "Un protocole non rédigé"], correct: 1,
    explication: "Un EIG est un évènement indésirable associé aux soins particulièrement grave (décès, mise en jeu du pronostic vital, déficit) ; il fait l'objet d'un signalement spécifique.", ref: "Module 10", diff: 3 },
  { mod: "10", q: "Le rôle de l'AS dans la démarche qualité est de :", options: ["Rédiger seul·e les protocoles de l'établissement", "Appliquer les protocoles, tracer et signaler les anomalies", "Décider de la certification", "Réaliser les audits financiers"], correct: 1,
    explication: "L'AS participe à la qualité en appliquant réellement les protocoles, en traçant ses actes et en signalant les écarts ; elle ne rédige pas seule les protocoles.", ref: "Module 10", diff: 2 },
];
export const flashcards = [
  { mod: "10", recto: "L'AS réalise-t-il·elle des injections ?", verso: "Non. Les injections sont des actes infirmiers. L'AS reste dans les soins d'hygiène, de confort, de surveillance et d'observation." },
  { mod: "10", recto: "Que signifie DAR ?", verso: "Données, Actions, Résultat : structure d'une transmission ciblée." },
  { mod: "10", recto: "Pourquoi tracer dans le dossier de soins ?", verso: "Ce qui n'est pas tracé est considéré comme non fait. Le dossier a une valeur juridique." },
  { mod: "10", recto: "Qu'est-ce qu'un EIAS ?", verso: "Un évènement indésirable associé aux soins : fait inattendu ayant causé ou pu causer un dommage (chute, erreur, fausse route...)." },
  { mod: "10", recto: "Qu'est-ce qu'un EIG ?", verso: "Un évènement indésirable grave : EIAS ayant entraîné un décès, mis en jeu le pronostic vital ou causé un déficit." },
  { mod: "10", recto: "Que signifie PDCA ?", verso: "Plan (planifier), Do (faire), Check (vérifier), Act (ajuster) : la roue de l'amélioration continue (roue de Deming)." },
  { mod: "10", recto: "Quel organisme certifie les établissements de santé ?", verso: "La HAS (Haute Autorité de Santé)." },
  { mod: "10", recto: "Qu'est-ce que l'identitovigilance ?", verso: "Sécuriser l'identité de la personne pour délivrer le bon soin à la bonne personne." },
  { mod: "10", recto: "Quelle vigilance pour un dispositif médical défectueux ?", verso: "La matériovigilance." },
  { mod: "10", recto: "La déclaration d'un évènement indésirable est-elle punitive ?", verso: "Non, elle est non punitive : on apprend des erreurs pour les éviter, sans sanctionner." },
  { mod: "10", recto: "Geste de base contre les infections associées aux soins ?", verso: "L'hygiène des mains (lavage ou friction hydro-alcoolique) entre chaque soin." },
  { mod: "10", recto: "Trois mesures AS de prévention des chutes ?", verso: "Sol sec, sonnette accessible, chaussage adapté (+ éclairage et surveillance)." },
  { mod: "10", recto: "Que faire quand une situation dépasse le champ de l'AS ?", verso: "Alerter et passer le relais à l'IDE ou au cadre, sécuriser la personne et tracer." },
  { mod: "10", recto: "Une transmission doit être... ?", verso: "Factuelle, objective, précise, datée, tracée et confidentielle." },
  { mod: "10", recto: "Qui élabore le projet de soin personnalisé ?", verso: "L'équipe pluriprofessionnelle, en associant la personne soignée." },
  { mod: "10", recto: "Rôle du kinésithérapeute ?", verso: "La rééducation motrice." },
  { mod: "10", recto: "Pourquoi signaler un presque-accident ?", verso: "Pour identifier les failles et prévenir l'accident réel avant qu'il ne survienne." },
  { mod: "10", recto: "Que fait l'AS face à un effet anormal d'un médicament ?", verso: "Elle l'observe et le transmet sans délai à l'IDE ; elle n'adapte ni n'arrête jamais un traitement." },
];
