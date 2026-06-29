// Pack TRANSVERSAL — fondamentaux mobilisés dans tous les modules et tous les stages (AS).
export const fiches = [
  {
    id: "f_mains", mod: "8", type: "geste",
    titre: "L'hygiène des mains",
    resume: "Le geste n°1 de prévention des infections associées aux soins.",
    tags: ["hygiène", "mains", "friction", "SHA", "prévention"],
    html: `
      <p>L'hygiène des mains est la mesure la plus efficace pour prévenir la transmission croisée des micro-organismes.</p>
      <h3>Deux méthodes</h3>
      <ul>
        <li><strong>Friction hydro-alcoolique (FHA)</strong> : méthode de <strong>référence</strong> sur mains <em>non souillées</em> et sèches. 3 mL, friction 20–30 s jusqu'à séchage complet.</li>
        <li><strong>Lavage simple</strong> (eau + savon doux) : si mains <strong>visiblement souillées</strong>, après passage aux toilettes, ou contact avec certains germes (ex. <span class="key" data-term="Clostridioides difficile">C. difficile</span>).</li>
      </ul>
      <div class="callout"><div class="callout-t">Préalables</div>Manches courtes, <strong>aucun bijou</strong> (alliance comprise), ongles courts, sans vernis ni faux ongles.</div>
      <div class="mnemo"><div class="mnemo-t">Les 5 indications (OMS)</div>Avant contact patient · avant geste aseptique · après risque d'exposition à un liquide biologique · après contact patient · après contact avec son environnement.</div>
    `,
    refs: ["Module 8 ; SF2H"],
  },
  {
    id: "f_henderson", mod: "1", type: "cours",
    titre: "Les 14 besoins fondamentaux (Virginia Henderson)",
    resume: "La grille de référence pour observer et accompagner la personne.",
    tags: ["henderson", "besoins", "autonomie", "recueil"],
    html: `
      <p>L'aide-soignant·e aide la personne à satisfaire ses besoins fondamentaux quand elle ne peut plus le faire seule.</p>
      <ol>
        <li>Respirer</li><li>Boire et manger</li><li>Éliminer</li><li>Se mouvoir, bonne posture</li>
        <li>Dormir, se reposer</li><li>Se vêtir / se dévêtir</li><li>Maintenir la température</li>
        <li>Être propre, protéger ses téguments</li><li>Éviter les dangers</li><li>Communiquer</li>
        <li>Agir selon ses croyances</li><li>S'occuper / se réaliser</li><li>Se recréer</li><li>Apprendre</li>
      </ol>
      <div class="callout"><div class="callout-t">En pratique</div>Pour chaque besoin : la personne est-elle <strong>autonome, partiellement ou totalement dépendante</strong> ? On adapte l'aide et on transmet.</div>
    `,
    refs: ["Module 1"],
  },
  {
    id: "f_constantes", mod: "3", type: "cours",
    titre: "Les paramètres vitaux : valeurs normales (adulte)",
    resume: "Ce que l'AS mesure, surveille et transmet.",
    tags: ["constantes", "paramètres vitaux", "surveillance"],
    html: `
      <table class="tbl">
        <tr><th>Paramètre</th><th>Norme adulte</th><th>À signaler à l'IDE</th></tr>
        <tr><td>Pouls (FC)</td><td>60–100 bpm</td><td>&lt; 50 ou &gt; 100, irrégulier</td></tr>
        <tr><td>Tension artérielle</td><td>≈ 120/80 mmHg</td><td>&lt; 90/60 ou &gt; 140/90</td></tr>
        <tr><td>Fréquence respiratoire</td><td>12–20 /min</td><td>&lt; 12 ou &gt; 20, <span class="key" data-term="dyspnée">dyspnée</span></td></tr>
        <tr><td>Température</td><td>36,5–37,5 °C</td><td>≥ 38 (fièvre) / &lt; 36 (hypothermie)</td></tr>
        <tr><td>SpO₂</td><td>≥ 95 %</td><td>&lt; 94 %</td></tr>
      </table>
      <div class="callout warn"><div class="callout-t">Rôle de l'AS</div>Mesurer, noter et <strong>transmettre</strong> ; repérer et <strong>alerter</strong>. L'interprétation diagnostique relève de l'IDE.</div>
    `,
    refs: ["Module 3"],
  },
  {
    id: "f_escarre", mod: "2", type: "cours",
    titre: "Prévenir les escarres",
    resume: "Repérer le risque et agir au quotidien.",
    tags: ["escarre", "prévention", "appui", "peau"],
    html: `
      <p>L'<span class="key" data-term="escarre">escarre</span> est une lésion de la peau due à une pression prolongée sur une zone d'appui (sacrum, talons, hanches…).</p>
      <h3>Facteurs de risque</h3>
      <p>Immobilité, dénutrition, incontinence/macération, âge, troubles de la sensibilité. On évalue avec une échelle (ex. <strong>Braden</strong> ou <strong>Norton</strong>).</p>
      <h3>Actions de l'AS</h3>
      <ul>
        <li><strong>Changements de position</strong> réguliers (≈ toutes les 2–3 h).</li>
        <li>Effleurage doux, peau <strong>propre et sèche</strong>, éviter la macération.</li>
        <li>Matelas/coussins de prévention ; éviter les plis de drap.</li>
        <li>Surveiller les rougeurs qui ne s'effacent pas à la pression → <strong>alerter l'IDE</strong>.</li>
      </ul>
    `,
    refs: ["Module 2 / Module 4"],
  },
];

export const qcm = [
  { mod: "8", q: "Sur des mains non souillées, la méthode d'hygiène de référence est :", options: ["Le lavage au savon doux", "La friction hydro-alcoolique", "Le port de gants", "Le lavage à l'eau seule"], correct: 1, explication: "La friction hydro-alcoolique (FHA) est la référence : plus efficace, plus rapide et mieux tolérée. Le lavage s'impose si les mains sont visiblement souillées.", ref: "Module 8", diff: 1 },
  { mod: "8", q: "Avant un soin, on doit avoir :", options: ["Une alliance et une montre", "Les avant-bras dégagés, sans bijou, ongles courts", "Des faux ongles propres", "Du vernis transparent"], correct: 1, explication: "Manches courtes, aucun bijou (alliance comprise), ongles courts sans vernis ni faux ongles.", ref: "Module 8", diff: 1 },
  { mod: "3", q: "La fréquence respiratoire normale d'un adulte au repos est :", options: ["6–10 /min", "12–20 /min", "20–30 /min", "30–40 /min"], correct: 1, explication: "12 à 20 cycles par minute.", ref: "Module 3", diff: 1 },
  { mod: "3", q: "Une température à 38,5 °C correspond à :", options: ["Une hypothermie", "Une température normale", "De la fièvre (hyperthermie)", "Une valeur impossible"], correct: 2, explication: "≥ 38 °C = fièvre. À transmettre à l'IDE.", ref: "Module 3", diff: 1 },
  { mod: "3", q: "Face à une SpO₂ à 89 %, l'aide-soignant·e doit :", options: ["Ne rien faire, c'est normal", "Transmettre et alerter l'IDE", "Administrer de l'oxygène de sa propre initiative", "Augmenter seul le débit d'O₂"], correct: 1, explication: "< 94 % est anormal : l'AS mesure, transmet et alerte. L'oxygénothérapie relève d'une prescription/IDE.", ref: "Module 3", diff: 2 },
  { mod: "2", q: "Pour prévenir une escarre, l'action principale de l'AS est :", options: ["Masser fortement la rougeur", "Changer la personne de position régulièrement", "Limiter les boissons", "Laisser la peau humide"], correct: 1, explication: "Les changements de position réguliers (≈ toutes les 2–3 h) soulagent les zones d'appui. On garde la peau propre et sèche ; on n'effectue pas de massage appuyé sur une rougeur.", ref: "Module 2", diff: 1 },
  { mod: "1", q: "Combien de besoins fondamentaux compte le modèle de Virginia Henderson ?", options: ["10", "12", "14", "16"], correct: 2, explication: "14 besoins, de « respirer » à « apprendre ».", ref: "Module 1", diff: 1 },
  { mod: "5", q: "Lors d'une manutention, pour protéger son dos il faut :", options: ["Garder les jambes tendues et arrondir le dos", "Fléchir les genoux et garder le dos droit", "Soulever loin du corps", "Tourner le buste brusquement"], correct: 1, explication: "On verrouille la colonne (dos droit), on fléchit les genoux, on rapproche la charge du corps et on évite les torsions.", ref: "Module 5", diff: 1 },
  { mod: "9", q: "Une bonne transmission écrite est :", options: ["Un jugement personnel sur le patient", "Factuelle, datée et signée", "Anonyme et générale", "Effacée chaque jour"], correct: 1, explication: "Les transmissions sont factuelles, sans jugement, datées et signées ; elles assurent continuité et traçabilité.", ref: "Module 9", diff: 1 },
  { mod: "4", q: "Pendant la toilette, l'AS doit notamment :", options: ["Aller vite sans prévenir", "Respecter la pudeur et observer l'état cutané", "Frictionner énergiquement la peau fragile", "Fermer la fenêtre et ouvrir la porte"], correct: 1, explication: "La toilette respecte l'intimité/pudeur, favorise l'autonomie et permet d'observer la peau (rougeurs, lésions) à transmettre.", ref: "Module 4", diff: 1 },
];

export const flashcards = [
  { mod: "8", recto: "Méthode d'hygiène des mains de référence ?", verso: "La friction hydro-alcoolique (sur mains non souillées)." },
  { mod: "8", recto: "Quand laver les mains à l'eau + savon ?", verso: "Mains visiblement souillées, après les toilettes, certains germes (C. difficile)." },
  { mod: "3", recto: "Pouls normal de l'adulte au repos ?", verso: "60 à 100 battements/min." },
  { mod: "3", recto: "FR normale de l'adulte ?", verso: "12 à 20 /min." },
  { mod: "3", recto: "Seuil d'alerte de la SpO₂ ?", verso: "< 94 % (normal ≥ 95 %)." },
  { mod: "3", recto: "À partir de quelle température parle-t-on de fièvre ?", verso: "≥ 38 °C." },
  { mod: "1", recto: "Les 14 besoins : 1er et 14e ?", verso: "1 = Respirer ; 14 = Apprendre." },
  { mod: "2", recto: "Geste clé de prévention des escarres ?", verso: "Changements de position réguliers (≈ toutes les 2–3 h)." },
  { mod: "5", recto: "Principe de base de la manutention ?", verso: "Dos droit, genoux fléchis, charge près du corps, pas de torsion." },
  { mod: "9", recto: "Caractéristiques d'une transmission écrite ?", verso: "Factuelle, sans jugement, datée et signée." },
  { mod: "4", recto: "Que faut-il respecter pendant la toilette ?", verso: "La pudeur/intimité, l'autonomie, et observer l'état cutané." },
  { mod: "8", recto: "Les 3 piliers de l'hygiène ?", verso: "Hygiène des mains, bionettoyage, gestion des déchets." },
];
