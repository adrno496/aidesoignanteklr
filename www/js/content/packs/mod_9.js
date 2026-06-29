// Pack MODULE 9 — Traitement des informations (transmissions orales et écrites,
// dossier de soins, traçabilité, secret professionnel) — Bloc 5.
// DEAS, arrêté du 10 juin 2021.
export const fiches = [
  {
    id: "f_9_transmissions", mod: "9", type: "cours",
    titre: "Les transmissions orales et écrites",
    resume: "Transmettre une information de soin fiable, claire et tracée pour assurer la continuité et la sécurité de la prise en charge.",
    tags: ["transmissions", "oral", "écrit", "continuité", "observation"],
    html: `
      <p>Les <span class="key" data-term="transmissions">transmissions</span> sont l'ensemble des informations échangées entre soignants pour assurer la <strong>continuité et la sécurité des soins</strong>. Elles peuvent être <strong>orales</strong> ou <strong>écrites</strong>, mais une information importante doit toujours être <strong>tracée par écrit</strong>.</p>
      <h3>Transmissions orales</h3>
      <ul>
        <li>Se font surtout aux <strong>relèves</strong> (changements d'équipe) et lors d'événements urgents.</li>
        <li>Rapides, mais <strong>fragiles</strong> : risque d'oubli, de déformation, de perte d'information.</li>
        <li>Une transmission orale importante doit être <strong>confirmée par un écrit</strong>.</li>
      </ul>
      <h3>Transmissions écrites</h3>
      <ul>
        <li>Inscrites dans le <strong>dossier de soins</strong> (papier ou informatisé).</li>
        <li>Permanentes, datées, signées : elles font <strong>preuve</strong> et permettent le suivi dans le temps.</li>
        <li>Doivent être <strong>factuelles, lisibles, précises et objectives</strong>.</li>
      </ul>
      <h3>Ce que transmet l'AS</h3>
      <ul>
        <li>Ses <strong>observations</strong> : état cutané, douleur exprimée, appétit, hydratation, élimination, sommeil, humeur, autonomie, comportement.</li>
        <li>Les <strong>paramètres qu'il/elle mesure</strong> (température, pouls, fréquence respiratoire, saturation, poids, glycémie capillaire selon protocole) ; leur interprétation et l'adaptation des soins relèvent de l'<strong>IDE</strong>.</li>
        <li>Les soins réalisés et le <strong>refus de soin</strong> éventuel.</li>
        <li>Tout <strong>changement ou signe d'alerte</strong> est transmis sans délai à l'IDE.</li>
      </ul>
      <div class="callout"><div class="callout-t">Fait observé vs interprétation</div>On transmet un <strong>fait</strong> ("n'a pas mangé son déjeuner, dit avoir des nausées"), pas un jugement ("fait son intéressant"). L'écrit doit rester <strong>objectif et non offensant</strong>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — F.L.O.P. (à éviter le contraire)</div>Une bonne transmission est <strong>F</strong>actuelle · <strong>L</strong>isible · <strong>O</strong>bjective · <strong>P</strong>récise (datée/signée).</div>
    `,
    refs: ["Module 9"],
  },
  {
    id: "f_9_cibles_dar", mod: "9", type: "cours",
    titre: "Les transmissions ciblées (méthode DAR)",
    resume: "Structurer l'information écrite autour d'une cible avec Données, Actions et Résultat pour la rendre claire et exploitable.",
    tags: ["transmissions ciblées", "DAR", "cible", "macrocible", "dossier"],
    html: `
      <p>Les <span class="key" data-term="transmissions ciblées">transmissions ciblées</span> sont une méthode d'écriture structurée qui organise l'information autour d'une <strong>cible</strong> (un problème ou un événement précis concernant la personne).</p>
      <h3>La structure D.A.R.</h3>
      <table class="tbl">
        <tr><th>Lettre</th><th>Signification</th><th>Exemple</th></tr>
        <tr><td><strong>D</strong></td><td>Données : ce que l'on observe, les faits</td><td>Refuse de se lever, dit avoir mal au dos (cote 6/10)</td></tr>
        <tr><td><strong>A</strong></td><td>Actions : ce qui est fait</td><td>Installation au fauteuil aidée, IDE prévenue</td></tr>
        <tr><td><strong>R</strong></td><td>Résultat : effet obtenu</td><td>Douleur diminuée, a pu déjeuner assis</td></tr>
      </table>
      <h3>Cible et macrocible</h3>
      <ul>
        <li>La <strong>cible</strong> est un titre court qui résume le problème (ex. "Douleur", "Chute", "Refus de soin").</li>
        <li>La <strong>macrocible</strong> est une synthèse à un moment clé : <strong>entrée</strong>, transfert, retour à domicile, décès. On utilise souvent le repère <span class="key" data-term="MTVED">MTVED</span> (Maladie/Motif, Thérapeutique, Vécu, Environnement, Devenir).</li>
      </ul>
      <div class="callout"><div class="callout-t">Place de l'AS</div>L'AS renseigne surtout les <strong>Données</strong> (observations) et les <strong>Actions/Résultats</strong> relevant de son rôle. Le diagnostic infirmier et l'analyse clinique restent du domaine de l'<strong>IDE</strong>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — D.A.R.</div><strong>D</strong>onnées · <strong>A</strong>ctions · <strong>R</strong>ésultat : "Je vois, je fais, j'évalue".</div>
    `,
    refs: ["Module 9"],
  },
  {
    id: "f_9_dossier_tracabilite", mod: "9", type: "cours",
    titre: "Le dossier de soins et la traçabilité",
    resume: "Le dossier de soins centralise les informations de la personne ; la traçabilité prouve que le soin a bien été réalisé.",
    tags: ["dossier de soins", "traçabilité", "diagramme de soins", "dossier patient", "preuve"],
    html: `
      <p>Le <span class="key" data-term="dossier de soins">dossier de soins</span> (ou dossier patient) regroupe l'ensemble des informations administratives, médicales et soignantes concernant une personne. Il assure la <strong>continuité</strong>, la <strong>coordination</strong> et la <strong>traçabilité</strong> des soins.</p>
      <h3>Contenu du dossier</h3>
      <ul>
        <li>Données administratives et d'identité (<strong>identitovigilance</strong>).</li>
        <li>Données médicales : antécédents, prescriptions, comptes rendus (domaine médical/IDE).</li>
        <li>Données de soins : projet de soin, <strong>diagramme de soins</strong>, transmissions ciblées, surveillances.</li>
      </ul>
      <h3>La traçabilité</h3>
      <p>La <span class="key" data-term="traçabilité">traçabilité</span>, c'est <strong>noter ce qui a été fait, par qui, quand et comment</strong>. Ce qui n'est pas écrit est considéré comme <strong>non fait</strong>.</p>
      <ul>
        <li>L'AS trace les soins qu'il/elle réalise : toilette, repas, change, mobilisation, paramètres mesurés, hydratation, surveillance cutanée.</li>
        <li>Chaque écrit est <strong>daté, horodaté et signé</strong> (nom + fonction).</li>
        <li>Sur le <strong>diagramme de soins</strong>, on coche/valide en temps réel les actes réalisés.</li>
      </ul>
      <h3>Règles d'écriture (papier et informatisé)</h3>
      <ul>
        <li>Écrire <strong>lisiblement</strong>, à l'encre indélébile, sans blanc correcteur sur le papier.</li>
        <li>Une erreur se <strong>barre d'un trait</strong> (l'écrit reste lisible) puis on corrige et on signe.</li>
        <li>En informatique : <strong>ne jamais partager son code/mot de passe</strong>, se déconnecter après usage.</li>
      </ul>
      <div class="callout"><div class="callout-t">Valeur juridique</div>Le dossier est un <strong>document à valeur légale</strong>. Il peut servir de preuve en cas de litige : la qualité des écrits engage la responsabilité du soignant et de l'établissement.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>"<strong>Non écrit = non fait</strong>" et "<strong>Qui ? Quoi ? Quand ? Comment ?</strong>" pour toute trace.</div>
    `,
    refs: ["Module 9"],
  },
  {
    id: "f_9_secret_pro", mod: "9", type: "cours",
    titre: "Secret professionnel, confidentialité et droits du patient",
    resume: "L'AS est tenu·e au secret professionnel ; il/elle ne partage les informations qu'avec l'équipe de soin et dans l'intérêt de la personne.",
    tags: ["secret professionnel", "confidentialité", "secret partagé", "RGPD", "droits du patient"],
    html: `
      <p>L'aide-soignant·e est soumis·e au <span class="key" data-term="secret professionnel">secret professionnel</span>. Toute information connue dans l'exercice (état de santé, vie privée, confidences) est <strong>confidentielle</strong>. Le secret protège la personne soignée, pas le soignant.</p>
      <h3>Le secret partagé</h3>
      <ul>
        <li>Les informations utiles aux soins peuvent être échangées <strong>entre membres de l'équipe</strong> qui prennent en charge la personne : c'est le <span class="key" data-term="secret partagé">secret partagé</span>.</li>
        <li>Seules les informations <strong>strictement nécessaires</strong> à la continuité du soin sont partagées (principe du "besoin d'en connaître").</li>
        <li>On ne parle <strong>jamais d'un patient</strong> dans les couloirs, l'ascenseur, à la cafétéria, en famille ou sur les réseaux sociaux.</li>
      </ul>
      <h3>Confidentialité au quotidien</h3>
      <ul>
        <li>Frapper avant d'entrer, fermer la porte, tirer le rideau pendant les soins (respect de l'<strong>intimité et de la pudeur</strong>).</li>
        <li>Ne pas laisser un dossier ou un écran ouvert visible ; protéger les <strong>données informatiques</strong> (RGPD).</li>
        <li>Ne donner d'informations par téléphone qu'avec prudence : on ne sait pas qui est au bout du fil.</li>
      </ul>
      <h3>Droits de la personne soignée</h3>
      <ul>
        <li>Droit à l'<strong>information</strong> et au <strong>consentement</strong> aux soins.</li>
        <li>Droit d'<strong>accès à son dossier</strong>, droit au respect de la vie privée et de la dignité.</li>
        <li>Possibilité de désigner une <strong>personne de confiance</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">Limites du secret</div>Le secret peut être levé dans des cas prévus par la loi (ex. <strong>signalement de maltraitance</strong> sur une personne vulnérable, danger grave). En cas de doute, l'AS en réfère à l'<strong>IDE ou au cadre</strong>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>"<strong>Je partage avec l'équipe, je me tais à l'extérieur.</strong>" Le bon réflexe : seule l'info utile au soin, aux bonnes personnes.</div>
    `,
    refs: ["Module 9"],
  },
];

export const qcm = [
  {
    mod: "9", q: "À quoi servent principalement les transmissions entre soignants ?",
    options: ["À remplir des statistiques", "À assurer la continuité et la sécurité des soins", "À juger le travail des collègues", "À occuper les temps de relève"],
    correct: 1,
    explication: "Les transmissions (orales et écrites) garantissent la continuité et la sécurité de la prise en charge en partageant les informations utiles entre les membres de l'équipe.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Une transmission orale importante doit toujours être :",
    options: ["Oubliée après la relève", "Confirmée par un écrit dans le dossier", "Communiquée à la famille", "Gardée secrète vis-à-vis de l'IDE"],
    correct: 1,
    explication: "L'oral est fragile (oubli, déformation). Toute information importante transmise oralement doit être tracée par écrit dans le dossier de soins.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Quelle est la meilleure formulation pour une transmission écrite ?",
    options: ["\"M. X est désagréable et capricieux\"", "\"M. X a refusé sa toilette, dit être fatigué\"", "\"M. X fait sa comédie\"", "\"M. X est pénible ce matin\""],
    correct: 1,
    explication: "Une transmission doit être factuelle et objective. On décrit le fait observé (refus de toilette, fatigue exprimée) sans jugement de valeur.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Dans la méthode des transmissions ciblées DAR, que signifie le \"D\" ?",
    options: ["Diagnostic", "Données (les faits observés)", "Décision médicale", "Dossier"],
    correct: 1,
    explication: "DAR = Données (observations/faits) · Actions (ce qui est fait) · Résultat (effet obtenu). L'AS renseigne surtout les Données et les Actions de son champ.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Dans DAR, le \"R\" correspond à :",
    options: ["Rendez-vous", "Risque", "Résultat (effet obtenu)", "Régime alimentaire"],
    correct: 2,
    explication: "Le R désigne le Résultat : l'effet ou l'évolution constaté après l'action (ex. douleur diminuée, a pu se lever).",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Qu'est-ce qu'une \"cible\" dans les transmissions ciblées ?",
    options: ["Le nom du médecin", "Un titre court résumant un problème ou un événement", "Le numéro de chambre", "La date de sortie"],
    correct: 1,
    explication: "La cible est un intitulé bref centrant l'information sur un problème précis (ex. Douleur, Chute, Refus de soin), développé ensuite en DAR.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Une macrocible est utilisée notamment :",
    options: ["À chaque prise de constantes", "À l'entrée ou à la sortie de la personne (synthèse)", "Pour commander les repas", "Pour noter le code wifi"],
    correct: 1,
    explication: "La macrocible est une synthèse rédigée aux moments clés du parcours (entrée, transfert, sortie, décès), souvent selon le repère MTVED.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Le principe \"ce qui n'est pas écrit est considéré comme non fait\" concerne :",
    options: ["La traçabilité des soins", "Le ménage des locaux uniquement", "Les congés du personnel", "Le planning des repas"],
    correct: 0,
    explication: "C'est le principe fondamental de la traçabilité : un soin non tracé est juridiquement réputé non réalisé. D'où l'importance de tout noter, dater et signer.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Comment corrige-t-on une erreur sur un dossier de soins papier ?",
    options: ["On efface au blanc correcteur", "On déchire la page", "On barre d'un seul trait pour garder le texte lisible, puis on corrige et on signe", "On réécrit par-dessus"],
    correct: 2,
    explication: "Sur un document à valeur légale, on ne masque jamais une erreur : on la barre d'un trait (texte initial restant lisible), on note la correction et on signe.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Un écrit dans le dossier de soins doit comporter au minimum :",
    options: ["Une couleur d'encre originale", "La date, l'heure et la signature (nom + fonction)", "Un avis personnel sur le patient", "Le prénom des collègues"],
    correct: 1,
    explication: "Tout écrit doit être daté, horodaté et signé (nom et fonction) pour être identifiable, opposable et exploitable par l'équipe.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Sur le diagramme de soins, l'AS :",
    options: ["Note la prescription médicale", "Valide/coche les actes réalisés relevant de son rôle, en temps réel", "Décide des examens", "Fixe le traitement"],
    correct: 1,
    explication: "Le diagramme de soins permet de valider en temps réel les actes réalisés (toilette, repas, change, mobilisation, paramètres mesurés...). L'AS y trace ce qui relève de son champ.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Le dossier de soins a une valeur :",
    options: ["Purement décorative", "Juridique : il peut servir de preuve", "Facultative", "Réservée à la facturation"],
    correct: 1,
    explication: "Le dossier est un document à valeur légale ; il peut être produit comme preuve en cas de litige et engage la responsabilité des soignants et de l'établissement.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Le secret professionnel a pour but de protéger :",
    options: ["Le soignant", "La personne soignée et sa vie privée", "L'administration", "Le médecin uniquement"],
    correct: 1,
    explication: "Le secret professionnel protège la personne soignée. Le soignant ne divulgue pas les informations connues dans l'exercice de sa fonction.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Qu'est-ce que le \"secret partagé\" ?",
    options: ["Raconter le cas du patient à sa famille", "Échanger entre soignants de l'équipe les seules informations utiles aux soins", "Publier des informations sur les réseaux sociaux", "Tout dire à tout le personnel de l'établissement"],
    correct: 1,
    explication: "Le secret partagé autorise l'échange, entre membres de l'équipe prenant en charge la personne, des informations strictement nécessaires à la continuité des soins.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Une collègue parle d'un patient à voix haute dans l'ascenseur devant des visiteurs. Que faire ?",
    options: ["Continuer la conversation", "L'inviter discrètement à se taire : c'est une rupture de confidentialité", "Donner encore plus de détails", "Filmer la scène"],
    correct: 1,
    explication: "Parler d'un patient dans un lieu public est une rupture du secret/confidentialité. On rappelle discrètement la règle et on poursuit l'échange dans un lieu adapté.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Pour préserver l'intimité lors d'un soin, l'AS doit :",
    options: ["Laisser la porte ouverte", "Frapper, fermer la porte et tirer le rideau", "Appeler des collègues pour assister", "Parler fort dans le couloir"],
    correct: 1,
    explication: "Respecter l'intimité et la pudeur fait partie de la confidentialité : on frappe, on ferme la porte et on tire le rideau avant et pendant le soin.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Concernant le dossier patient informatisé, l'AS doit :",
    options: ["Partager son mot de passe avec les stagiaires", "Laisser sa session ouverte pour gagner du temps", "Utiliser son propre identifiant et se déconnecter après usage", "Noter le code sur l'écran"],
    correct: 2,
    explication: "Chaque professionnel utilise son identifiant personnel (traçabilité de l'auteur) et se déconnecte après usage. On ne partage jamais ses codes (sécurité, RGPD).",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Le secret professionnel peut être levé dans certains cas, notamment :",
    options: ["Pour discuter d'un patient en famille", "En cas de signalement de maltraitance sur une personne vulnérable", "Pour publier une anecdote drôle", "Quand le patient dort"],
    correct: 1,
    explication: "La loi prévoit des dérogations, comme le signalement de maltraitance ou de danger grave pour une personne vulnérable. En cas de doute, l'AS en réfère à l'IDE ou au cadre.",
    ref: "Module 9", diff: 3,
  },
  {
    mod: "9", q: "Parmi ces éléments, lequel l'AS transmet-il/elle légitimement à l'IDE ?",
    options: ["Le diagnostic médical du patient", "L'adaptation de la prescription", "L'observation d'une rougeur cutanée apparue au sacrum", "Le choix du traitement"],
    correct: 2,
    explication: "L'AS transmet ses observations (ex. rougeur au sacrum = risque d'escarre). Le diagnostic, la prescription et le traitement relèvent du médecin et de l'IDE.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Que désigne le repère MTVED dans une macrocible ?",
    options: ["Maladie/Motif, Thérapeutique, Vécu, Environnement, Devenir", "Médecin, Tension, Visite, Examen, Diète", "Matériel, Toilette, Visite, Évaluation, Désinfection", "Mobilité, Transfert, Vie, Élimination, Douleur"],
    correct: 0,
    explication: "MTVED structure la synthèse d'entrée/sortie : Maladie ou Motif, Thérapeutique, Vécu, Environnement, Devenir. Il aide à recueillir une vision globale de la situation.",
    ref: "Module 9", diff: 3,
  },
  {
    mod: "9", q: "La personne désignée par le patient pour l'accompagner et être consultée s'appelle :",
    options: ["Le tuteur", "La personne de confiance", "Le référent qualité", "Le mandataire judiciaire"],
    correct: 1,
    explication: "La personne de confiance peut être désignée par le patient pour l'accompagner dans ses démarches et être consultée s'il ne peut exprimer sa volonté.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Le diagramme de soins et les transmissions ciblées appartiennent à quel document ?",
    options: ["Au planning du personnel", "Au dossier de soins (dossier patient)", "À la fiche de paie", "Au registre des entrées de stock"],
    correct: 1,
    explication: "Le diagramme de soins et les transmissions ciblées sont des outils du dossier de soins, qui centralise toutes les informations de prise en charge de la personne.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Une transmission écrite de qualité doit avant tout être :",
    options: ["Longue et détaillée avec des avis personnels", "Factuelle, objective, lisible et précise", "Rédigée en abréviations connues de soi seul", "Faite de mémoire en fin de journée"],
    correct: 1,
    explication: "L'écrit doit rester factuel, objectif, lisible et précis (daté/signé), et être tracé au plus près du soin pour rester fiable et exploitable.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "À qui l'AS signale-t-il/elle en priorité un signe d'alerte (chute, douleur intense, malaise) ?",
    options: ["À la famille du patient", "À un autre patient", "À l'IDE, sans délai", "On attend la relève du soir"],
    correct: 2,
    explication: "Tout changement d'état ou signe d'alerte est transmis sans délai à l'IDE, qui évalue et décide de la conduite à tenir, en lien avec le médecin si besoin.",
    ref: "Module 9", diff: 1,
  },
  {
    mod: "9", q: "Un proche téléphone et demande des nouvelles de l'état de santé d'un patient. L'AS :",
    options: ["Donne tous les résultats d'examens", "Reste prudent·e : on ne sait pas qui appelle, et l'information médicale relève du médecin/IDE", "Décrit le diagnostic en détail", "Refuse même de confirmer la présence du patient en criant"],
    correct: 1,
    explication: "Par téléphone, on ne peut pas vérifier l'identité de l'interlocuteur. L'AS ne divulgue pas d'informations confidentielles et oriente vers l'IDE ou le médecin pour les éléments médicaux.",
    ref: "Module 9", diff: 2,
  },
  {
    mod: "9", q: "Publier une photo prise au travail avec un patient reconnaissable sur les réseaux sociaux est :",
    options: ["Autorisé si la photo est belle", "Une violation du secret professionnel et du droit à l'image", "Recommandé pour valoriser le service", "Sans conséquence si on masque le nom"],
    correct: 1,
    explication: "Diffuser l'image ou des informations sur un patient constitue une rupture du secret professionnel et une atteinte au droit à l'image. C'est strictement interdit.",
    ref: "Module 9", diff: 2,
  },
];

export const flashcards = [
  { mod: "9", recto: "À quoi servent les transmissions ?", verso: "À assurer la continuité et la sécurité des soins en partageant les informations utiles entre soignants." },
  { mod: "9", recto: "Pourquoi confirmer une transmission orale par un écrit ?", verso: "Parce que l'oral est fragile (oubli, déformation) ; l'écrit fait preuve, reste daté et signé." },
  { mod: "9", recto: "Que signifie DAR ?", verso: "Données (faits observés) · Actions (ce qui est fait) · Résultat (effet obtenu) — méthode des transmissions ciblées." },
  { mod: "9", recto: "Qu'est-ce qu'une cible ?", verso: "Un titre court résumant un problème ou un événement (ex. Douleur, Chute, Refus de soin)." },
  { mod: "9", recto: "Qu'est-ce qu'une macrocible ?", verso: "Une synthèse rédigée aux moments clés (entrée, transfert, sortie, décès), souvent selon MTVED." },
  { mod: "9", recto: "Que signifie MTVED ?", verso: "Maladie/Motif, Thérapeutique, Vécu, Environnement, Devenir — repère pour structurer une macrocible." },
  { mod: "9", recto: "Principe clé de la traçabilité ?", verso: "Ce qui n'est pas écrit est considéré comme non fait." },
  { mod: "9", recto: "Que doit comporter tout écrit du dossier de soins ?", verso: "La date, l'heure et la signature (nom + fonction) de son auteur." },
  { mod: "9", recto: "Comment corriger une erreur sur un dossier papier ?", verso: "La barrer d'un seul trait (texte lisible), corriger et signer. Jamais de blanc correcteur." },
  { mod: "9", recto: "Quelle est la valeur juridique du dossier de soins ?", verso: "C'est un document à valeur légale pouvant servir de preuve en cas de litige." },
  { mod: "9", recto: "Que protège le secret professionnel ?", verso: "La personne soignée et sa vie privée, pas le soignant." },
  { mod: "9", recto: "Qu'est-ce que le secret partagé ?", verso: "L'échange, entre soignants de l'équipe, des seules informations utiles à la continuité des soins." },
  { mod: "9", recto: "Trois gestes pour respecter la confidentialité pendant un soin ?", verso: "Frapper avant d'entrer, fermer la porte, tirer le rideau (intimité et pudeur)." },
  { mod: "9", recto: "Règle pour le dossier informatisé ?", verso: "Identifiant personnel, ne jamais partager son mot de passe, se déconnecter après usage (RGPD)." },
  { mod: "9", recto: "Un cas où le secret peut être levé ?", verso: "Le signalement de maltraitance ou de danger grave sur une personne vulnérable." },
  { mod: "9", recto: "Fait observé ou interprétation : que transmet l'AS ?", verso: "Le fait observé, de façon objective (ex. \"n'a pas mangé, dit avoir des nausées\"), sans jugement." },
  { mod: "9", recto: "Qu'est-ce que la personne de confiance ?", verso: "Une personne désignée par le patient pour l'accompagner et être consultée s'il ne peut s'exprimer." },
  { mod: "9", recto: "Que valide l'AS sur le diagramme de soins ?", verso: "En temps réel, les actes réalisés relevant de son rôle : toilette, repas, change, mobilisation, paramètres mesurés." },
  { mod: "9", recto: "À qui l'AS transmet-il un signe d'alerte (rougeur, douleur, refus) ?", verso: "Sans délai à l'IDE ; le diagnostic et la prescription relèvent du médecin et de l'IDE." },
  { mod: "9", recto: "Peut-on parler d'un patient au téléphone à un proche ?", verso: "Avec prudence : on ne sait pas qui appelle. L'AS ne divulgue rien de confidentiel et oriente vers l'IDE/médecin." },
];
