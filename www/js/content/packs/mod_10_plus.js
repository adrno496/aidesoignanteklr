export const fiches = [
  { id: "fx_mod_10_plus_equipe_pluripro", mod: "10", type: "cours",
    titre: "L'équipe pluriprofessionnelle et la place de l'aide-soignant·e",
    resume: "Comprendre les rôles, la coordination et la juste place de l'AS dans une équipe de soins.",
    tags: ["équipe", "coordination", "rôle propre", "collaboration"],
    html: `<p>Le soin de qualité repose sur une <strong>équipe pluriprofessionnelle</strong> : chaque métier apporte une compétence spécifique, complémentaire et coordonnée autour de la personne soignée. L'aide-soignant·e y exerce <strong>sous la responsabilité de l'infirmier·e</strong>, en collaboration et dans le cadre du <span class="key" data-term="rôle propre infirmier">rôle propre infirmier</span>.</p>
    <h3>Qui fait quoi ?</h3>
    <table class="tbl">
      <tr><th>Professionnel</th><th>Mission principale</th></tr>
      <tr><td>Médecin</td><td>Diagnostic, prescription, stratégie thérapeutique.</td></tr>
      <tr><td>Infirmier·e (IDE)</td><td>Rôle propre + actes sur prescription : <span class="key" data-term="injection">injections</span>, pansements complexes, surveillance clinique, distribution des médicaments.</td></tr>
      <tr><td>Aide-soignant·e (AS)</td><td>Soins d'hygiène, de confort, aide à la vie quotidienne, mobilisation, mesure des constantes, observation, transmissions.</td></tr>
      <tr><td>Kinésithérapeute</td><td>Rééducation motrice et respiratoire.</td></tr>
      <tr><td>Ergothérapeute</td><td>Autonomie, aides techniques, aménagement.</td></tr>
      <tr><td>Diététicien·ne</td><td>Adaptation et surveillance de l'alimentation.</td></tr>
      <tr><td>Psychologue / Assistant·e social·e</td><td>Soutien psychologique, accompagnement des démarches.</td></tr>
    </table>
    <div class="callout"><div class="callout-t">La juste place de l'AS</div>L'AS ne réalise <strong>jamais</strong> d'acte relevant de l'IDE (injection, calcul de dose, pansement complexe). Mais il·elle est souvent le professionnel <strong>le plus présent</strong> auprès de la personne : ses observations sont précieuses et doivent <strong>toujours</strong> être transmises à l'IDE.</div>
    <h3>Outils de coordination</h3>
    <ul>
      <li><strong>Transmissions ciblées</strong> (méthode des cibles) écrites et orales.</li>
      <li><span class="key" data-term="staff">Réunions pluriprofessionnelles</span> (staff, synthèses, relèves d'équipe).</li>
      <li><strong>Projet de soins / projet personnalisé</strong> co-construit avec la personne.</li>
      <li><strong>Dossier de soins</strong> : support commun, partagé et tracé.</li>
    </ul>
    <div class="mnemo"><div class="mnemo-t">Moyen mnémo : « COOP »</div><strong>C</strong>ommuniquer · <strong>O</strong>bserver · <strong>O</strong>rganiser · <strong>P</strong>artager. Les 4 piliers du travail d'équipe.</div>
    <div class="callout"><div class="callout-t">Secret professionnel partagé</div>Les informations ne se partagent qu'entre professionnels concernés par la prise en charge, et uniquement ce qui est utile au soin. Le <strong>secret professionnel</strong> reste la règle.</div>`,
    refs: ["Arrêté du 10 juin 2021 relatif au DEAS, module 10", "Code de la santé publique, art. R.4311-3 à R.4311-5 (collaboration AS/IDE)"] },

  { id: "fx_mod_10_plus_demarche_qualite", mod: "10", type: "cours",
    titre: "Démarche qualité et amélioration continue des soins",
    resume: "Principes de la qualité en santé et contribution concrète de l'aide-soignant·e.",
    tags: ["qualité", "PDCA", "certification", "protocoles"],
    html: `<p>La <span class="key" data-term="démarche qualité">démarche qualité</span> vise à délivrer des soins <strong>sûrs, efficaces, adaptés et respectueux</strong> de la personne, tout en améliorant en continu les pratiques. Elle est une obligation des établissements de santé et médico-sociaux.</p>
    <h3>La roue de l'amélioration continue (PDCA)</h3>
    <table class="tbl">
      <tr><th>Étape</th><th>Signification</th><th>Exemple AS</th></tr>
      <tr><td>Plan (Planifier)</td><td>Identifier un problème, fixer un objectif.</td><td>Repérer que des chutes surviennent la nuit.</td></tr>
      <tr><td>Do (Faire)</td><td>Mettre en œuvre l'action.</td><td>Appliquer un protocole de prévention des chutes.</td></tr>
      <tr><td>Check (Vérifier)</td><td>Mesurer les résultats.</td><td>Compter les chutes après l'action.</td></tr>
      <tr><td>Act (Ajuster)</td><td>Corriger et pérenniser.</td><td>Adapter et généraliser ce qui marche.</td></tr>
    </table>
    <div class="mnemo"><div class="mnemo-t">Moyen mnémo : « PDCA »</div><strong>P</strong>lanifier · <strong>D</strong>évelopper (faire) · <strong>C</strong>ontrôler · <strong>A</strong>juster. La roue de Deming qui « tourne » sans fin.</div>
    <h3>Les outils de la qualité au quotidien</h3>
    <ul>
      <li><strong>Protocoles et procédures</strong> : référentiels à appliquer (bionettoyage, prévention escarres…).</li>
      <li><span class="key" data-term="check-list">Check-lists</span> : sécuriser les étapes (ex. avant un transfert).</li>
      <li><strong>Indicateurs qualité</strong> : taux d'escarres, satisfaction des usagers, etc.</li>
      <li><strong>Évaluation des pratiques professionnelles (EPP)</strong> et audits.</li>
      <li><span class="key" data-term="certification HAS">Certification HAS</span> : évaluation externe périodique de l'établissement.</li>
    </ul>
    <div class="callout"><div class="callout-t">Le rôle de l'AS dans la qualité</div>Appliquer rigoureusement les protocoles, signaler les écarts, participer aux audits, tracer ses actes et soigner la <strong>traçabilité</strong> : un soin non tracé est, sur le plan qualité, un soin qui n'a pas eu lieu.</div>
    <div class="callout"><div class="callout-t">Qualité = sécurité du patient</div>La qualité n'est pas un « plus » administratif : elle protège directement la personne soignée (moins d'erreurs, moins d'infections, plus de respect).</div>`,
    refs: ["Haute Autorité de Santé – Référentiel de certification des établissements de santé", "Arrêté du 10 juin 2021 relatif au DEAS, module 10"] },

  { id: "fx_mod_10_plus_risques_eis", mod: "10", type: "cours",
    titre: "Gestion des risques et signalement des événements indésirables",
    resume: "Identifier, prévenir et signaler les événements indésirables dans une culture de sécurité.",
    tags: ["risques", "EIG", "signalement", "vigilance", "culture sécurité"],
    html: `<p>La <span class="key" data-term="gestion des risques">gestion des risques</span> consiste à <strong>anticiper, repérer et réduire</strong> tout ce qui peut nuire à la personne soignée, aux professionnels ou à l'établissement. Elle s'appuie sur une <strong>culture de sécurité</strong> non punitive : on signale pour apprendre, pas pour sanctionner.</p>
    <h3>Vocabulaire essentiel</h3>
    <table class="tbl">
      <tr><th>Terme</th><th>Définition</th></tr>
      <tr><td><span class="key" data-term="événement indésirable">Événement indésirable (EI)</span></td><td>Situation qui s'écarte du résultat attendu et peut nuire à la personne.</td></tr>
      <tr><td><span class="key" data-term="EIG">Événement indésirable grave (EIG)</span></td><td>EI entraînant un préjudice grave (décès, mise en jeu du pronostic vital, séquelle, hospitalisation).</td></tr>
      <tr><td><span class="key" data-term="presque-accident">Presque-accident (near miss)</span></td><td>Incident évité de justesse, sans conséquence — à signaler aussi car porteur d'enseignement.</td></tr>
      <tr><td>Risque a priori</td><td>Risque anticipé avant qu'il ne survienne (prévention).</td></tr>
      <tr><td>Risque a posteriori</td><td>Analyse après la survenue (retour d'expérience).</td></tr>
    </table>
    <h3>Les vigilances sanitaires</h3>
    <ul>
      <li><strong>Pharmacovigilance</strong> : effets indésirables des médicaments.</li>
      <li><strong>Matériovigilance</strong> : dysfonctionnements des dispositifs médicaux (lit, lève-malade…).</li>
      <li><strong>Hémovigilance, identitovigilance</strong> : sécurité transfusionnelle et d'identité.</li>
    </ul>
    <div class="callout"><div class="callout-t">Que signale l'AS ?</div>Chute, erreur évitée, escarre débutante, fugue, fausse route, défaut de matériel, comportement inhabituel, erreur d'<span class="key" data-term="identitovigilance">identité</span>… <strong>En cas de doute, on signale.</strong> Le signalement n'est pas une délation : c'est un acte professionnel responsable.</div>
    <h3>Comment signaler ?</h3>
    <ul>
      <li>Sécuriser d'abord la personne et alerter l'IDE / le cadre.</li>
      <li>Renseigner la <span class="key" data-term="fiche d'événement indésirable">fiche d'événement indésirable (FEI)</span> : faits objectifs, date, heure, lieu, sans jugement ni recherche de coupable.</li>
      <li>Tracer dans le dossier de soins.</li>
      <li>Participer au <strong>retour d'expérience (REX)</strong> si demandé.</li>
    </ul>
    <div class="mnemo"><div class="mnemo-t">Moyen mnémo : « SART »</div><strong>S</strong>écuriser la personne · <strong>A</strong>lerter l'IDE / le cadre · <strong>R</strong>enseigner la fiche d'événement indésirable · <strong>T</strong>racer dans le dossier de soins (puis participer au retour d'expérience).</div>
    <div class="callout"><div class="callout-t">Culture juste, non punitive</div>Une erreur signalée permet de corriger une organisation défaillante. Cacher une erreur expose à un nouvel accident plus grave. La transparence protège tout le monde.</div>`,
    refs: ["Décret n°2016-1606 du 25 nov. 2016 relatif à la déclaration des EIG", "Haute Autorité de Santé – Gestion des risques associés aux soins", "Arrêté du 10 juin 2021 relatif au DEAS, module 10"] },
];

export const qcm = [
  { mod: "10", q: "Sous la responsabilité de quel professionnel l'aide-soignant·e exerce-t-il·elle ses soins ?", options: ["Du médecin", "De l'infirmier·e", "Du cadre administratif", "Du kinésithérapeute"], correct: 1,
    explication: "L'AS travaille en collaboration et sous la responsabilité de l'infirmier·e, dans le cadre du rôle propre infirmier (art. R.4311-4 du CSP).", ref: "CSP art. R.4311-4", diff: 1 },

  { mod: "10", q: "Parmi ces actes, lequel ne relève PAS de l'aide-soignant·e ?", options: ["L'aide à la toilette", "La mesure de la température", "Une injection sous-cutanée", "L'observation et la transmission"], correct: 2,
    explication: "L'injection est un acte infirmier (rôle propre ou sur prescription). L'AS n'effectue jamais d'injection ni de calcul de dose. Les trois autres relèvent bien de sa compétence.", ref: "Référentiel DEAS module 10", diff: 1 },

  { mod: "10", q: "Que signifie le sigle PDCA dans la démarche qualité ?", options: ["Prévoir, Décider, Contrôler, Agir", "Plan, Do, Check, Act", "Patient, Diagnostic, Care, Action", "Protocole, Données, Conformité, Audit"], correct: 1,
    explication: "PDCA (roue de Deming) signifie Plan (planifier), Do (faire), Check (vérifier), Act (ajuster) : c'est le cycle d'amélioration continue.", ref: "HAS – Amélioration continue de la qualité", diff: 2 },

  { mod: "10", q: "Un événement indésirable grave (EIG) se caractérise par :", options: ["Une simple anomalie sans conséquence", "Un préjudice grave : décès, séquelle, hospitalisation, pronostic vital engagé", "Une réclamation d'un usager", "Un retard dans les transmissions"], correct: 1,
    explication: "L'EIG entraîne un préjudice grave pour la personne (décès, mise en jeu du pronostic vital, déficit fonctionnel, hospitalisation ou prolongation). Il fait l'objet d'une déclaration réglementée.", ref: "Décret n°2016-1606 du 25 nov. 2016", diff: 2 },

  { mod: "10", q: "Qu'est-ce qu'un « presque-accident » (near miss) ?", options: ["Un accident mortel", "Un incident évité de justesse sans conséquence", "Une erreur volontaire", "Un acte refusé par le patient"], correct: 1,
    explication: "Le presque-accident est un événement qui aurait pu nuire mais a été évité. Il doit être signalé car il révèle une faille avant qu'un accident réel ne se produise.", ref: "HAS – Gestion des risques associés aux soins", diff: 2 },

  { mod: "10", q: "Dans une culture de sécurité « juste », le signalement d'une erreur vise principalement à :", options: ["Sanctionner le responsable", "Comprendre et corriger l'organisation pour éviter la récidive", "Alimenter le dossier disciplinaire", "Rassurer la famille"], correct: 1,
    explication: "La culture de sécurité est non punitive : on signale pour analyser les causes et améliorer le système, pas pour punir un individu. La transparence protège les patients.", ref: "HAS – Culture de sécurité", diff: 2 },

  { mod: "10", q: "Quel outil sert de support commun, partagé et tracé entre les professionnels d'une équipe ?", options: ["Le planning des congés", "Le dossier de soins", "Le règlement intérieur", "La fiche de paie"], correct: 1,
    explication: "Le dossier de soins est le support partagé où sont tracées observations, soins et transmissions, garantissant la continuité et la coordination des soins.", ref: "Référentiel DEAS module 10", diff: 1 },

  { mod: "10", q: "La matériovigilance concerne :", options: ["Les effets indésirables des médicaments", "Les dysfonctionnements des dispositifs médicaux", "La sécurité transfusionnelle", "L'identité des patients"], correct: 1,
    explication: "La matériovigilance surveille les incidents liés aux dispositifs médicaux (lit médicalisé, lève-malade, fauteuil…). La pharmacovigilance concerne les médicaments, l'hémovigilance la transfusion, l'identitovigilance l'identité.", ref: "Code de la santé publique – vigilances sanitaires", diff: 2 },

  { mod: "10", q: "Face à une escarre débutante repérée pendant la toilette, l'AS doit :", options: ["Appliquer une pommade de son choix", "Ne rien dire pour ne pas inquiéter", "Transmettre immédiatement l'observation à l'IDE et la tracer", "Attendre la prochaine certification"], correct: 2,
    explication: "L'observation d'une rougeur ou d'une escarre débutante doit être transmise sans délai à l'IDE et tracée. L'AS ne prescrit ni n'applique de traitement de sa propre initiative.", ref: "Référentiel DEAS modules 1 et 10", diff: 1 },

  { mod: "10", q: "L'identitovigilance a pour but de :", options: ["Surveiller les médicaments", "Prévenir les erreurs d'identité du patient", "Contrôler les visiteurs", "Gérer les stocks"], correct: 1,
    explication: "L'identitovigilance prévient les erreurs liées à l'identification du patient (bon soin, au bon patient). Vérifier l'identité avant un soin en fait partie.", ref: "HAS – Identitovigilance", diff: 2 },

  { mod: "10", q: "Quelle information NE doit PAS figurer dans une fiche d'événement indésirable ?", options: ["La date et l'heure des faits", "Les faits objectifs constatés", "Un jugement sur la personne responsable", "Le lieu de survenue"], correct: 2,
    explication: "La fiche d'événement indésirable décrit des faits objectifs, sans jugement ni recherche de coupable. Elle vise l'analyse et la prévention, pas la sanction.", ref: "HAS – Déclaration des événements indésirables", diff: 2 },

  { mod: "10", q: "Le secret professionnel partagé permet de transmettre :", options: ["Toute information à tout le personnel", "Uniquement ce qui est utile au soin, entre professionnels concernés", "Des informations à la famille sans accord", "Les données médicales sur les réseaux sociaux"], correct: 1,
    explication: "Le partage d'informations se limite à ce qui est nécessaire au soin et aux seuls professionnels participant à la prise en charge. Le secret professionnel reste la règle.", ref: "CSP art. L.1110-4", diff: 2 },

  { mod: "10", q: "La certification des établissements de santé est conduite par :", options: ["L'Assurance maladie", "La Haute Autorité de Santé (HAS)", "Le ministère de l'Intérieur", "Les ordres professionnels"], correct: 1,
    explication: "La HAS conduit la certification, évaluation externe périodique mesurant la qualité et la sécurité des soins de l'établissement.", ref: "HAS – Certification des établissements de santé", diff: 2 },

  { mod: "10", q: "Parmi ces situations, laquelle est un événement indésirable à signaler ?", options: ["Une chute d'un résident", "Une fausse route lors d'un repas", "Un défaut de fonctionnement d'un lève-malade", "Toutes ces situations"], correct: 3,
    explication: "Chute, fausse route, défaut de matériel sont tous des événements indésirables à signaler. En cas de doute, on signale toujours.", ref: "HAS – Gestion des risques", diff: 1 },

  { mod: "10", q: "Le « retour d'expérience » (REX) après un événement indésirable consiste à :", options: ["Punir l'auteur de l'erreur", "Analyser collectivement les causes pour éviter la récidive", "Classer la fiche sans suite", "Informer la presse"], correct: 1,
    explication: "Le retour d'expérience est une analyse collective des causes profondes d'un événement, afin de tirer des enseignements et améliorer les pratiques.", ref: "HAS – Retour d'expérience", diff: 2 },

  { mod: "10", q: "Dans l'équipe, le professionnel chargé du diagnostic et de la prescription est :", options: ["L'aide-soignant·e", "L'infirmier·e", "Le médecin", "L'ergothérapeute"], correct: 2,
    explication: "Le diagnostic et la prescription relèvent du médecin. L'IDE applique les prescriptions et exerce son rôle propre, l'AS collabore aux soins de la vie quotidienne.", ref: "Référentiel DEAS module 10", diff: 1 },

  { mod: "10", q: "Pourquoi la traçabilité des soins est-elle essentielle à la qualité ?", options: ["Pour remplir du papier", "Parce qu'un soin non tracé est considéré comme non réalisé", "Pour ralentir l'équipe", "Uniquement pour la facturation"], correct: 1,
    explication: "La traçabilité prouve la réalisation du soin, assure la continuité, permet l'analyse en cas de problème et constitue un élément central de la qualité et de la sécurité.", ref: "HAS – Qualité et traçabilité", diff: 1 },

  { mod: "10", q: "Quel professionnel intervient principalement pour la rééducation motrice et respiratoire ?", options: ["Le diététicien", "Le kinésithérapeute", "L'assistant social", "Le psychologue"], correct: 1,
    explication: "Le kinésithérapeute assure la rééducation motrice et respiratoire. Le diététicien gère l'alimentation, l'assistant social les démarches, le psychologue le soutien psychique.", ref: "Référentiel DEAS module 10", diff: 1 },

  { mod: "10", q: "La méthode des transmissions ciblées permet de :", options: ["Allonger les écrits inutilement", "Structurer l'information autour de cibles (problème, données, actions, résultats)", "Supprimer le dossier de soins", "Éviter de parler à l'IDE"], correct: 1,
    explication: "Les transmissions ciblées structurent l'information autour d'une cible avec données, actions et résultats, rendant la transmission claire, utile et exploitable par l'équipe.", ref: "HAS – Transmissions ciblées", diff: 2 },

  { mod: "10", q: "Un événement indésirable grave associé aux soins doit être déclaré :", options: ["Jamais", "Selon une procédure réglementée auprès des autorités compétentes", "Seulement à la famille", "Uniquement en réunion de service"], correct: 1,
    explication: "Depuis le décret de 2016, les EIG associés aux soins font l'objet d'une déclaration obligatoire à l'agence régionale de santé selon une procédure définie.", ref: "Décret n°2016-1606 du 25 nov. 2016", diff: 3 },

  { mod: "10", q: "L'analyse « a priori » d'un risque signifie :", options: ["Analyser après l'accident", "Anticiper et prévenir le risque avant qu'il survienne", "Ignorer le risque", "Sanctionner après coup"], correct: 1,
    explication: "L'analyse a priori anticipe les risques pour les prévenir (ex. protocole anti-chute). L'analyse a posteriori intervient après la survenue d'un événement.", ref: "HAS – Méthodes de gestion des risques", diff: 3 },

  { mod: "10", q: "Face à un dysfonctionnement répété d'un lit médicalisé, l'AS doit :", options: ["Continuer à l'utiliser sans rien dire", "Le réparer elle-même", "Signaler le dysfonctionnement (matériovigilance) et sécuriser la personne", "Le jeter"], correct: 2,
    explication: "Un dispositif défaillant relève de la matériovigilance : il faut sécuriser la personne, retirer/signaler le matériel et renseigner une fiche, sans tenter une réparation hors compétence.", ref: "Code de la santé publique – matériovigilance", diff: 2 },
];

export const flashcards = [
  { mod: "10", recto: "Sous la responsabilité de qui l'AS exerce-t-il·elle ?", verso: "De l'infirmier·e (IDE), dans le cadre du rôle propre infirmier." },
  { mod: "10", recto: "Que signifie PDCA ?", verso: "Plan (planifier), Do (faire), Check (vérifier), Act (ajuster) : la roue de l'amélioration continue." },
  { mod: "10", recto: "Qu'est-ce qu'un EIG ?", verso: "Événement indésirable grave : préjudice grave (décès, séquelle, pronostic vital, hospitalisation)." },
  { mod: "10", recto: "Qu'est-ce qu'un presque-accident (near miss) ?", verso: "Un incident évité de justesse, sans conséquence, mais à signaler car porteur d'enseignement." },
  { mod: "10", recto: "Que surveille la matériovigilance ?", verso: "Les dysfonctionnements des dispositifs médicaux (lit, lève-malade, fauteuil…)." },
  { mod: "10", recto: "Que surveille la pharmacovigilance ?", verso: "Les effets indésirables des médicaments." },
  { mod: "10", recto: "À quoi sert l'identitovigilance ?", verso: "À prévenir les erreurs d'identification du patient (bon soin, au bon patient)." },
  { mod: "10", recto: "Pourquoi tracer un soin ?", verso: "Un soin non tracé est considéré comme non réalisé : la traçabilité assure continuité, sécurité et preuve." },
  { mod: "10", recto: "Que doit contenir une fiche d'événement indésirable ?", verso: "Des faits objectifs (date, heure, lieu), sans jugement ni recherche de coupable." },
  { mod: "10", recto: "Qui conduit la certification des établissements de santé ?", verso: "La Haute Autorité de Santé (HAS)." },
  { mod: "10", recto: "Qu'est-ce que le secret professionnel partagé ?", verso: "Partager uniquement ce qui est utile au soin, entre professionnels concernés par la prise en charge." },
  { mod: "10", recto: "Réflexe SART en cas d'événement indésirable ?", verso: "Sécuriser la personne, Alerter l'IDE/le cadre, Renseigner la fiche d'événement indésirable, Tracer dans le dossier (puis retour d'expérience)." },
  { mod: "10", recto: "Analyse a priori vs a posteriori d'un risque ?", verso: "A priori = anticiper/prévenir avant ; a posteriori = analyser après la survenue (retour d'expérience)." },
  { mod: "10", recto: "L'AS peut-il·elle réaliser une injection ?", verso: "Non, jamais : c'est un acte infirmier. L'AS ne fait ni injection ni calcul de dose." },
  { mod: "10", recto: "But d'une culture de sécurité « juste » ?", verso: "Signaler pour comprendre et corriger l'organisation, pas pour sanctionner l'individu." },
];
