// Pack MÉTHODOLOGIE DES ÉPREUVES (DEAS) — comment réussir évaluations, stages et oral.
export const fiches = [
  {
    id: "meth_etude_situation", mod: "3", type: "cours",
    titre: "Méthode : réussir une étude de situation (DEAS)",
    resume: "La trame attendue pour analyser une situation et proposer une conduite.",
    tags: ["méthodologie", "étude de situation", "certification"],
    html: `
      <p>L'étude de situation évalue ta capacité à <strong>observer, agir dans ton rôle et transmettre</strong>.</p>
      <h3>La trame</h3>
      <ol>
        <li><strong>Présenter la personne</strong> : âge, autonomie, contexte, ce qui est dit/observé.</li>
        <li><strong>Repérer les éléments importants</strong> : besoins perturbés (14 besoins), <span class="key" data-term="signes d'alerte">signes d'alerte</span>, risques (chute, escarre, fausse route, dénutrition).</li>
        <li><strong>Proposer ta conduite</strong> : actions de l'AS justifiées (hygiène, confort, mobilisation, surveillance), dans le respect de la pudeur et de la sécurité.</li>
        <li><strong>Transmettre et alerter</strong> : ce que tu notes, ce que tu dis à l'IDE, à quel moment tu alertes.</li>
      </ol>
      <div class="callout warn"><div class="callout-t">Reste dans ton champ</div>Mets en avant la <strong>collaboration avec l'IDE</strong> : repérer et transmettre est une compétence, pas une faiblesse. Pas d'acte IDE (injection, calcul de doses).</div>
    `,
    refs: ["Méthodologie — étude de situation"],
  },
  {
    id: "meth_conduite", mod: "4", type: "cours",
    titre: "Méthode : construire une conduite à tenir",
    resume: "Sécuriser → observer → agir → transmettre.",
    tags: ["conduite à tenir", "méthodologie", "soins"],
    html: `
      <ol>
        <li><strong>Sécuriser</strong> la personne et l'environnement.</li>
        <li><strong>Observer / évaluer</strong> : constantes (ce que l'AS mesure), douleur, état cutané, comportement.</li>
        <li><strong>Agir dans ton rôle</strong> : soins d'hygiène et de confort, installation, mobilisation, aide à l'alimentation/élimination.</li>
        <li><strong>Transmettre</strong> oralement et par écrit (transmissions ciblées D-A-R) et <strong>alerter l'IDE</strong> si besoin.</li>
      </ol>
      <div class="mnemo"><div class="mnemo-t">Réflexe</div>« Sécuriser – Observer – Agir – Transmettre ». En cas de doute ou d'anomalie : on alerte l'IDE.</div>
    `,
    refs: ["Champ de compétences AS"],
  },
  {
    id: "meth_stage", mod: "9", type: "cours",
    titre: "Méthode : réussir l'évaluation en stage et le portfolio",
    resume: "Le stage = la moitié du diplôme. Comment le valider.",
    tags: ["stage", "portfolio", "compétences", "méthodologie"],
    html: `
      <ul>
        <li><strong>Prépare tes objectifs</strong> de stage dès le début (avec le tuteur).</li>
        <li><strong>Montre ta progression</strong> : pose des questions, propose-toi, analyse tes gestes.</li>
        <li><strong>Remplis le portfolio</strong> au fil de l'eau (situations vécues, ce que tu as appris).</li>
        <li><strong>Sois fiable</strong> : ponctualité, hygiène, respect du secret professionnel et de la personne.</li>
        <li><strong>Demande des retours</strong> réguliers pour te réajuster avant l'évaluation finale.</li>
      </ul>
      <div class="callout"><div class="callout-t">Bon à savoir</div>Chaque bloc de compétences se valide indépendamment : cible les compétences encore fragiles pendant le stage.</div>
    `,
    refs: ["Stages DEAS / portfolio"],
  },
  {
    id: "meth_oral", mod: "6", type: "cours",
    titre: "Méthode : préparer l'oral / les mises en situation",
    resume: "Structurer sa présentation et gérer les questions du jury.",
    tags: ["oral", "certification", "méthodologie"],
    html: `
      <ul>
        <li><strong>Déroule une conduite</strong> : sécuriser → observer → agir (champ AS) → transmettre/alerter.</li>
        <li><strong>Parle clairement</strong>, regarde le jury, respire.</li>
        <li><strong>Justifie</strong> tes gestes (« je fais ça parce que… »).</li>
        <li><strong>Connais tes limites</strong> : ce qui relève de l'IDE, quand alerter.</li>
        <li>Anticipe : « pourquoi cet ordre ? », « quels risques ? », « que transmets-tu ? ».</li>
      </ul>
    `,
    refs: ["Certification — oral / mises en situation"],
  },
  {
    id: "meth_temps_stress", mod: "1", type: "cours",
    titre: "Méthode : gérer son temps et son stress",
    resume: "Régularité avant, organisation le jour J.",
    tags: ["organisation", "stress", "révision", "méthodologie"],
    html: `
      <h3>Avant</h3>
      <ul><li>Flashcards <strong>tous les jours</strong> (mieux que tout réviser la veille).</li><li>Planifie tes échéances (onglet <strong>Planning</strong>) et cible tes <strong>points faibles</strong>.</li><li>Relie chaque savoir à une situation de stage concrète.</li></ul>
      <h3>Le jour J</h3>
      <ul><li>Lis tout le sujet, répartis ton temps.</li><li>Commence par ce que tu maîtrises.</li><li>Respire (inspire 4s / expire 6s) pour faire baisser le stress.</li><li>Garde 5 min pour relire.</li></ul>
    `,
    refs: ["Méthodologie de travail"],
  },
];
