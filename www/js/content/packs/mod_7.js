// Pack MODULE 7 — Accompagnement des personnes en formation et communication avec les pairs
// (tutorat, travail en équipe) — Bloc 3, 21 h. DEAS, arrêté du 10 juin 2021.
export const fiches = [
  {
    id: "f_7_tutorat", mod: "7", type: "cours",
    titre: "Le tutorat et l'accompagnement en formation",
    resume: "Accueillir, guider et évaluer une personne en formation dans le respect de son niveau et des règles professionnelles.",
    tags: ["tutorat", "accompagnement", "stagiaire", "encadrement", "transmission"],
    html: `
      <p>L'aide-soignant·e expérimenté·e peut <strong>accompagner une personne en formation</strong> (élève AS, agent en intégration, nouvel arrivant) sur son lieu de travail. Le tutorat est une compétence du <span class="key" data-term="Bloc 3">Bloc 3</span> du DEAS.</p>
      <h3>Les trois temps de l'accompagnement</h3>
      <ul>
        <li><strong>L'accueil</strong> : présenter le service, l'équipe, les locaux, les règles, le matériel ; mettre en confiance.</li>
        <li><strong>L'accompagnement au quotidien</strong> : montrer, faire faire sous surveillance, expliquer le sens des soins, répondre aux questions.</li>
        <li><strong>L'évaluation et le bilan</strong> : repérer les acquis et les difficultés, faire des retours réguliers (feed-back), valoriser les progrès.</li>
      </ul>
      <h3>Adapter sa posture</h3>
      <ul>
        <li>Partir du <strong>niveau réel</strong> de la personne (objectifs de stage, progression attendue).</li>
        <li>Donner du sens : expliquer le <em>pourquoi</em> du geste, pas seulement le <em>comment</em>.</li>
        <li>Laisser une <strong>place pour l'erreur encadrée</strong> : on corrige sans dévaloriser, on sécurise le soin et la personne soignée.</li>
        <li>Rester dans son champ : un·e AS encadre sur les <strong>soins relevant de l'AS</strong> ; les actes infirmiers sont encadrés par l'IDE.</li>
      </ul>
      <div class="callout"><div class="callout-t">Tuteur ≠ évaluateur unique</div>Le tuteur de proximité accompagne au quotidien ; l'<strong>évaluation des compétences</strong> en stage associe le tuteur, le maître de stage et le formateur de l'institut.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — A.M.E.</div><strong>A</strong>ccueillir · <strong>M</strong>ontrer/accompagner · <strong>É</strong>valuer (bilan + feed-back).</div>
    `,
    refs: ["Module 7"],
  },
  {
    id: "f_7_equipe", mod: "7", type: "cours",
    titre: "Le travail en équipe pluriprofessionnelle",
    resume: "Coopérer avec les autres soignants et professionnels autour d'un projet de soin commun.",
    tags: ["équipe", "pluriprofessionnel", "coopération", "rôles", "IDE"],
    html: `
      <p>Le soin est un <strong>travail collectif</strong>. L'aide-soignant·e agit au sein d'une équipe pluriprofessionnelle, sous la responsabilité et en <span class="key" data-term="collaboration">collaboration</span> avec l'infirmier·e.</p>
      <h3>Qui compose l'équipe ?</h3>
      <ul>
        <li><strong>Soignants</strong> : AS, IDE, cadre de santé, médecin.</li>
        <li><strong>Rééducateurs et autres</strong> : kinésithérapeute, ergothérapeute, psychologue, diététicien·ne, assistant·e social·e, ASH, agents de service.</li>
      </ul>
      <h3>Rôle de l'AS dans l'équipe</h3>
      <ul>
        <li><strong>Observer</strong> la personne soignée et <strong>alerter</strong> l'IDE sur tout changement.</li>
        <li><strong>Transmettre</strong> les informations utiles (oral + écrit).</li>
        <li><strong>Participer</strong> aux relèves, réunions de service et au projet de soin / projet de vie.</li>
        <li><strong>Respecter le champ de compétences</strong> de chacun : l'AS ne réalise pas d'actes relevant de l'IDE (injections, calcul de doses, préparation et administration des médicaments, soins techniques infirmiers).</li>
      </ul>
      <div class="callout"><div class="callout-t">Coopération efficace</div>Une bonne équipe repose sur la <strong>confiance</strong>, le respect des rôles, une communication claire et la résolution constructive des désaccords (jamais devant la personne soignée).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — C.O.R.</div><strong>C</strong>ommuniquer · <strong>O</strong>bserver/alerter · <strong>R</strong>especter les rôles.</div>
    `,
    refs: ["Module 7"],
  },
  {
    id: "f_7_communication", mod: "7", type: "cours",
    titre: "Communiquer avec les pairs et transmettre",
    resume: "Échanger des informations fiables et utiles entre soignants, à l'oral et à l'écrit.",
    tags: ["communication", "transmissions", "relève", "écrit", "secret professionnel"],
    html: `
      <p>La communication entre professionnels assure la <strong>continuité et la sécurité des soins</strong>. Elle s'appuie sur des transmissions <strong>orales</strong> (relèves) et <strong>écrites</strong> (dossier de soin).</p>
      <h3>Une transmission de qualité</h3>
      <ul>
        <li><strong>Fiable</strong> : faits observés, mesurés, datés et signés (pas d'interprétation hasardeuse).</li>
        <li><strong>Précise et concise</strong> : aller à l'essentiel, vocabulaire professionnel.</li>
        <li><strong>Tracée</strong> : tout ce qui est transmis à l'écrit a une valeur légale.</li>
      </ul>
      <h3>Les transmissions ciblées (DAR)</h3>
      <table class="tbl">
        <tr><th>Lettre</th><th>Signification</th><th>Exemple</th></tr>
        <tr><td><strong>D</strong></td><td>Données (ce que j'observe/recueille)</td><td>« Refuse de se lever, grimace au mouvement. »</td></tr>
        <tr><td><strong>A</strong></td><td>Actions (ce que je fais)</td><td>« Installé confortablement, IDE prévenue. »</td></tr>
        <tr><td><strong>R</strong></td><td>Résultats (effet de l'action)</td><td>« Apaisé après installation. »</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Secret professionnel</div>Les informations se partagent <strong>uniquement entre professionnels concernés</strong> par la prise en charge (secret partagé), jamais dans les couloirs, l'ascenseur ou à l'extérieur.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — Transmettre = D.A.R.</div><strong>D</strong>onnées · <strong>A</strong>ctions · <strong>R</strong>ésultats.</div>
    `,
    refs: ["Module 7"],
  },
  {
    id: "f_7_conflits", mod: "7", type: "cours",
    titre: "Gérer les désaccords et donner un feed-back",
    resume: "Communiquer de façon constructive en cas de tension ou pour aider une personne à progresser.",
    tags: ["conflit", "feed-back", "communication", "écoute", "respect"],
    html: `
      <p>Travailler et accompagner, c'est aussi savoir gérer les <strong>désaccords</strong> et faire des <strong>retours constructifs</strong> sans blesser ni dévaloriser.</p>
      <h3>Donner un feed-back utile</h3>
      <ul>
        <li>Partir de <strong>faits précis</strong> et observables, pas de jugements sur la personne.</li>
        <li>Valoriser ce qui est réussi avant de pointer ce qui est à améliorer.</li>
        <li>Proposer des <strong>pistes concrètes</strong> de progression.</li>
        <li>Choisir un moment et un lieu adaptés (jamais devant la personne soignée ou ses proches).</li>
      </ul>
      <h3>En cas de conflit dans l'équipe</h3>
      <ul>
        <li>Garder une <strong>communication respectueuse</strong>, écouter le point de vue de l'autre.</li>
        <li>Centrer l'échange sur le <strong>problème</strong> et l'intérêt de la personne soignée, pas sur les personnes.</li>
        <li>Si besoin, faire appel au <strong>cadre de santé</strong> comme tiers/médiateur.</li>
      </ul>
      <div class="callout"><div class="callout-t">La priorité reste le soin</div>Un désaccord ne doit jamais compromettre la sécurité ni le confort de la personne soignée, ni se régler devant elle.</div>
    `,
    refs: ["Module 7"],
  },
];
export const qcm = [
  {
    mod: "7", q: "Le tutorat assuré par un·e aide-soignant·e relève de quel bloc de compétences du DEAS ?",
    options: ["Bloc 1", "Bloc 2", "Bloc 3", "Bloc 4"], correct: 2,
    explication: "Le Module 7 (accompagnement des personnes en formation et communication avec les pairs) appartient au Bloc 3 du référentiel DEAS (arrêté du 10 juin 2021).",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Quel est le premier temps de l'accompagnement d'un·e stagiaire dans un service ?",
    options: ["L'évaluation finale", "L'accueil et la présentation du service", "La sanction des erreurs", "La rédaction du bilan de stage"], correct: 1,
    explication: "L'accueil (présentation du service, de l'équipe, des locaux et des règles) est le premier temps : il met la personne en confiance et pose le cadre de l'accompagnement.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Lorsqu'il accompagne un·e élève AS, sur quels soins l'aide-soignant·e tuteur encadre-t-il en priorité ?",
    options: ["Les injections intraveineuses", "Les soins relevant du champ de l'AS (hygiène, confort, mobilisation, observation)", "Le calcul des doses de médicaments", "La pose de perfusions"], correct: 1,
    explication: "Le tuteur AS encadre sur les soins relevant de son propre champ (hygiène, confort, aide à la vie quotidienne, mobilisation, mesure des constantes, observation). Les actes infirmiers sont encadrés par l'IDE.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Face à une erreur d'un·e stagiaire pendant un soin, quelle attitude est la plus pédagogique ?",
    options: ["L'humilier devant l'équipe pour qu'il retienne", "Sécuriser le soin, corriger calmement et expliquer sans dévaloriser", "Ignorer l'erreur pour ne pas le vexer", "Lui interdire tout soin pour le reste du stage"], correct: 1,
    explication: "On sécurise d'abord la personne soignée, puis on corrige l'erreur calmement et on l'explique. L'erreur encadrée fait partie de l'apprentissage ; la dévalorisation est contre-productive.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Qui évalue les compétences acquises par un·e élève AS en stage ?",
    options: ["Uniquement le tuteur de proximité", "Le tuteur, le maître de stage et le formateur de l'institut, de façon concertée", "Uniquement le médecin du service", "L'élève lui-même seul"], correct: 1,
    explication: "L'évaluation associe le tuteur de proximité (accompagnement quotidien), le maître de stage (responsable de l'organisation) et le formateur de l'IFAS. Le tuteur n'est pas l'évaluateur unique.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Sous la responsabilité de quel professionnel l'aide-soignant·e exerce-t-il et collabore-t-il ?",
    options: ["Le médecin uniquement", "L'infirmier·e (IDE)", "Le kinésithérapeute", "Le directeur de l'établissement"], correct: 1,
    explication: "L'AS agit en collaboration et sous la responsabilité de l'infirmier·e, dans le cadre du rôle propre infirmier. Il l'alerte sur tout changement observé.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Dans la méthode des transmissions ciblées DAR, que signifie la lettre « D » ?",
    options: ["Diagnostic médical", "Données (observations recueillies)", "Décision du médecin", "Durée du soin"], correct: 1,
    explication: "DAR = Données (ce que j'observe/recueille), Actions (ce que je fais), Résultats (effet de l'action). « D » correspond aux Données observées.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Quelle transmission écrite est correcte et professionnelle ?",
    options: ["« Madame X est pénible ce matin. »", "« Madame X refuse de se lever, grimace à la mobilisation du genou droit. »", "« Madame X fait sûrement une crise. »", "« Rien à signaler, comme d'habitude. »"], correct: 1,
    explication: "Une transmission doit rapporter des faits observés, précis et objectifs (« refuse de se lever, grimace à la mobilisation »), sans jugement de valeur ni interprétation hasardeuse.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Quelle est la valeur des transmissions écrites dans le dossier de soin ?",
    options: ["Aucune, ce sont des notes personnelles", "Elles ont une valeur légale et engagent le professionnel", "Elles sont facultatives si la relève orale a eu lieu", "Elles peuvent être effacées librement"], correct: 1,
    explication: "Les écrits du dossier de soin ont une valeur légale : ils sont datés, signés et engagent la responsabilité du professionnel. Ils assurent la traçabilité et la continuité des soins.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Le secret professionnel partagé autorise à échanger des informations sur une personne soignée :",
    options: ["Avec tout le personnel de l'établissement", "Uniquement entre professionnels concernés par sa prise en charge", "Avec la famille sans restriction", "Dans les couloirs si c'est discret"], correct: 1,
    explication: "Le secret partagé limite l'échange aux seuls professionnels participant à la prise en charge, et aux seules informations nécessaires. Jamais dans les lieux de passage ni à l'extérieur.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Quel est le moment privilégié pour transmettre oralement les informations à l'équipe suivante ?",
    options: ["Le repas du personnel", "La relève (transmission orale entre équipes)", "Dans l'ascenseur", "Devant la personne soignée"], correct: 1,
    explication: "La relève est le temps organisé de transmission orale entre l'équipe qui termine et celle qui prend le relais. Elle complète les transmissions écrites et assure la continuité des soins.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Un désaccord survient entre deux soignants devant une personne soignée. Quelle conduite tenir ?",
    options: ["Régler le conflit immédiatement devant elle", "Différer la discussion à un moment et un lieu adaptés, hors de sa présence", "Laisser la personne soignée trancher", "Cesser de se parler le reste de la journée"], correct: 1,
    explication: "Un désaccord ne se règle jamais devant la personne soignée (sécurité et climat de confiance). On le diffère dans un lieu adapté, en restant respectueux et centré sur le problème.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Quel professionnel peut jouer le rôle de tiers/médiateur en cas de conflit persistant dans l'équipe ?",
    options: ["Le brancardier", "Le cadre de santé", "Le visiteur", "Un autre patient"], correct: 1,
    explication: "Le cadre de santé encadre l'équipe et peut intervenir comme tiers/médiateur pour aider à résoudre un conflit, dans l'intérêt de la qualité et de la sécurité des soins.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Quelle caractéristique définit un feed-back constructif à un·e stagiaire ?",
    options: ["Il porte sur la personnalité du stagiaire", "Il s'appuie sur des faits précis et propose des pistes d'amélioration", "Il se limite à pointer les erreurs", "Il est donné devant les familles"], correct: 1,
    explication: "Un feed-back constructif part de faits observables, valorise les réussites, propose des pistes concrètes de progression et se donne dans un cadre approprié, sans juger la personne.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Parmi ces professionnels, lequel NE fait PAS partie de l'équipe de rééducation/soin de support ?",
    options: ["Kinésithérapeute", "Ergothérapeute", "Diététicien·ne", "Aucun, tous y participent"], correct: 3,
    explication: "Kinésithérapeute, ergothérapeute et diététicien·ne participent tous à la prise en charge pluriprofessionnelle de la personne. L'AS coopère avec l'ensemble de ces professionnels.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "L'aide-soignant·e observe une rougeur sur le sacrum d'un résident. Quelle est la bonne conduite ?",
    options: ["Ne rien dire pour ne pas inquiéter", "Transmettre l'observation à l'IDE et la tracer dans le dossier", "Décider seul d'un traitement", "Attendre la visite du médecin la semaine suivante"], correct: 1,
    explication: "L'AS observe et alerte : il transmet immédiatement l'observation à l'IDE et la trace dans le dossier. Le traitement éventuel relève de l'IDE/du médecin, pas de l'AS.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Donner du sens à un soin lors de l'encadrement d'un·e stagiaire signifie :",
    options: ["Lui montrer seulement le geste à reproduire", "Lui expliquer le « pourquoi » du soin, pas seulement le « comment »", "Lui demander d'aller vite", "Le laisser deviner seul l'objectif"], correct: 1,
    explication: "Accompagner, c'est expliquer le sens du soin (le pourquoi) afin que le stagiaire comprenne et ne se contente pas de reproduire un geste mécaniquement.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Sur quels éléments l'accompagnement d'un·e stagiaire doit-il s'appuyer pour fixer les attentes ?",
    options: ["Sur l'humeur du tuteur", "Sur les objectifs de stage et le niveau réel de progression de la personne", "Sur la durée du trajet domicile-travail", "Sur l'ancienneté du tuteur uniquement"], correct: 1,
    explication: "On adapte l'accompagnement aux objectifs de stage et au niveau réel de la personne, en respectant sa progression attendue selon son année/parcours de formation.",
    ref: "Module 7", diff: 2,
  },
  {
    mod: "7", q: "Quel est l'intérêt majeur des transmissions (orales et écrites) entre soignants ?",
    options: ["Remplir du papier", "Assurer la continuité et la sécurité des soins", "Surveiller les collègues", "Faire passer le temps pendant la relève"], correct: 1,
    explication: "Les transmissions garantissent que chaque équipe dispose des informations nécessaires : elles assurent la continuité et la sécurité de la prise en charge.",
    ref: "Module 7", diff: 1,
  },
  {
    mod: "7", q: "Une bonne coopération d'équipe repose principalement sur :",
    options: ["La compétition entre soignants", "La confiance, le respect des rôles et une communication claire", "Le fait de tout faire seul", "L'absence de réunions"], correct: 1,
    explication: "Le travail d'équipe efficace repose sur la confiance mutuelle, le respect du champ de compétences de chacun et une communication claire, au service de la personne soignée.",
    ref: "Module 7", diff: 1,
  },
];
export const flashcards = [
  { mod: "7", recto: "À quel bloc du DEAS appartient le Module 7 ?", verso: "Au Bloc 3 (accompagnement des personnes en formation et communication avec les pairs)." },
  { mod: "7", recto: "Quels sont les trois temps de l'accompagnement d'un·e stagiaire ?", verso: "L'accueil, l'accompagnement au quotidien, l'évaluation/bilan (mnémo A.M.E.)." },
  { mod: "7", recto: "Sous la responsabilité de qui l'AS exerce-t-il ?", verso: "Sous la responsabilité et en collaboration avec l'infirmier·e (IDE)." },
  { mod: "7", recto: "Que signifie DAR dans les transmissions ciblées ?", verso: "Données (observées), Actions (réalisées), Résultats (effet de l'action)." },
  { mod: "7", recto: "Qu'est-ce que le secret professionnel partagé ?", verso: "Échanger des informations uniquement entre professionnels concernés par la prise en charge, et seulement celles utiles au soin." },
  { mod: "7", recto: "Quelle valeur ont les transmissions écrites ?", verso: "Une valeur légale : datées, signées, elles engagent le professionnel et tracent les soins." },
  { mod: "7", recto: "Qu'est-ce que la relève ?", verso: "Le temps de transmission orale entre l'équipe qui termine et celle qui prend le relais." },
  { mod: "7", recto: "Le tuteur AS est-il le seul à évaluer le stagiaire ?", verso: "Non : l'évaluation associe le tuteur, le maître de stage et le formateur de l'institut." },
  { mod: "7", recto: "Comment réagir face à l'erreur d'un·e stagiaire ?", verso: "Sécuriser le soin, corriger calmement et expliquer sans dévaloriser : l'erreur encadrée fait partie de l'apprentissage." },
  { mod: "7", recto: "Où ne JAMAIS régler un désaccord entre soignants ?", verso: "Jamais devant la personne soignée ni ses proches ; on diffère dans un lieu adapté." },
  { mod: "7", recto: "Qui peut servir de médiateur dans un conflit d'équipe ?", verso: "Le cadre de santé." },
  { mod: "7", recto: "Quelles qualités définissent une bonne transmission ?", verso: "Fiable (faits), précise, concise, datée, signée et tracée." },
  { mod: "7", recto: "Quel est le rôle clé de l'AS dans l'équipe vis-à-vis de l'IDE ?", verso: "Observer et alerter l'IDE sur tout changement de l'état de la personne." },
  { mod: "7", recto: "Que veut dire « donner du sens » à un soin en encadrement ?", verso: "Expliquer le « pourquoi » du soin, pas seulement le « comment »." },
  { mod: "7", recto: "Qu'est-ce qu'un feed-back constructif ?", verso: "Un retour basé sur des faits précis, valorisant les réussites et proposant des pistes d'amélioration." },
  { mod: "7", recto: "Sur quoi adapter l'accompagnement d'un·e stagiaire ?", verso: "Sur ses objectifs de stage et son niveau réel de progression." },
];
