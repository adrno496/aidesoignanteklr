// Pack MODULE 9 PLUS — Traitement des informations (complément)
// Transmissions, dossier de soins, traçabilité, outils numériques, secret professionnel.
// DEAS, référentiel arrêté du 10 juin 2021 (modifié). Contenu COMPLÉMENTAIRE de mod_9.js.
export const fiches = [
  {
    id: "fx_mod_9_plus_observation_objective", mod: "9", type: "cours",
    titre: "Observer et transmettre des faits objectifs (sans interprétation)",
    resume: "Distinguer le fait observé du jugement et structurer une transmission orale fiable (SBAR / ISBAR).",
    tags: ["observation", "objectivité", "SBAR", "transmission orale", "subjectif"],
    html: `<p>La qualité d'une transmission dépend d'abord de la qualité de l'<span class="key" data-term="observation">observation</span>. L'aide-soignant·e (AS) transmet ce qu'il·elle <strong>voit, entend, mesure, sent</strong>, pas ce qu'il·elle suppose. Confondre un <strong>fait</strong> avec une <strong>interprétation</strong> peut induire l'équipe en erreur.</p>
<h3>Fait objectif vs interprétation</h3>
<table class="tbl">
<tr><th>Interprétation (à éviter seule)</th><th>Fait objectif (à transmettre)</th></tr>
<tr><td>« Il va mal »</td><td>« Pâle, sueurs, dit avoir mal à la poitrine, n'a pas pu se lever »</td></tr>
<tr><td>« Elle est agressive »</td><td>« A crié, refusé la toilette, repoussé ma main à deux reprises »</td></tr>
<tr><td>« Il a bien mangé »</td><td>« A mangé la totalité du plat et du dessert, a bu 2 verres d'eau »</td></tr>
<tr><td>« Elle est déshydratée »</td><td>« Urines foncées, langue sèche, a bu &lt; 1 verre depuis ce matin »</td></tr>
</table>
<p>Le <strong>diagnostic</strong> (« déshydratation », « infection »…) relève du médecin ; l'AS décrit les <strong>signes</strong> qui orientent l'IDE et le médecin.</p>
<div class="callout"><div class="callout-t">Données quantifiées</div>Une transmission gagne en valeur quand elle est <strong>chiffrée et située dans le temps</strong> : « a bu 3 verres entre 8 h et 14 h », « 2 selles liquides depuis cette nuit », « refus du petit-déjeuner à 8 h 15 ». On évite les termes vagues (« un peu », « beaucoup », « comme d'habitude »).</div>
<h3>Structurer l'oral : la trame SBAR (ou ISBAR)</h3>
<p>Pour une transmission orale ciblée, notamment lors d'un appel à l'IDE ou en situation d'urgence relative, une trame aide à ne rien oublier :</p>
<ul>
<li><strong>S — Situation</strong> : qui, où, ce qui se passe maintenant (« M. X, chambre 12, dit avoir mal au ventre »).</li>
<li><strong>B — Background / contexte</strong> : éléments utiles (opéré hier, ne mange plus depuis ce matin).</li>
<li><strong>A — Assessment / observation</strong> : ce que j'ai observé et mesuré (faciès crispé, pouls rapide, pas de selle depuis 3 jours).</li>
<li><strong>R — Recommandation / demande</strong> : ce que je propose ou demande (« je vous appelle pour que vous veniez l'évaluer »).</li>
</ul>
<p>Le <strong>I</strong> de ISBAR ajoute l'<span class="key" data-term="identification">identification</span> de l'appelant et du patient en début d'échange (vérifier qu'on parle bien du bon patient).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>S-B-A-R = « Situation, Bilan-contexte, Analyse-observation, Recommandation »</strong>. Astuce : on raconte d'abord <em>où on en est</em>, puis <em>d'où ça vient</em>, puis <em>ce qu'on voit</em>, et enfin <em>ce qu'on attend de l'autre</em>.</div>
<p>Attention : SBAR structure l'<strong>oral</strong>, alors que DAR (Données-Actions-Résultat) structure surtout l'<strong>écrit ciblé</strong>. Les deux sont complémentaires.</p>`,
    refs: ["DEAS arrêté du 10 juin 2021 - bloc 1, compétence transmission", "HAS - Saed/SBAR, un guide pour faciliter la communication entre professionnels de santé"]
  },
  {
    id: "fx_mod_9_plus_dossier_numerique_rgpd", mod: "9", type: "cours",
    titre: "Dossier numérique, identitovigilance et RGPD au quotidien de l'AS",
    resume: "Sécuriser l'usage du dossier patient informatisé, vérifier l'identité et appliquer le RGPD côté aide-soignant·e.",
    tags: ["RGPD", "DPI", "identitovigilance", "numérique", "confidentialité"],
    html: `<p>Le <span class="key" data-term="dossier patient informatisé">dossier patient informatisé (DPI)</span> remplace de plus en plus le papier. Les règles de traçabilité restent les mêmes, mais s'y ajoutent des règles de <strong>sécurité informatique</strong> et de <strong>protection des données</strong>.</p>
<h3>Mes bons réflexes sur le DPI</h3>
<ul>
<li><strong>Mon identifiant, mon affaire</strong> : je me connecte avec mon propre compte. Je ne partage jamais mon mot de passe ; un collègue ne saisit pas sous mon nom.</li>
<li><strong>Je me déconnecte</strong> en quittant le poste : tout ce qui est saisi sous ma session m'engage.</li>
<li><strong>Je saisis en temps réel</strong> les actes relevant de mon rôle (toilette, repas, change, mobilisation, paramètres mesurés).</li>
<li><strong>Traçabilité automatique</strong> : chaque saisie est horodatée et nominative ; les accès sont enregistrés (qui a ouvert quel dossier, quand).</li>
<li><strong>Écran tourné</strong> : je veille à ce que l'écran ne soit pas visible des visiteurs ou d'autres patients.</li>
</ul>
<div class="callout"><div class="callout-t">RGPD en pratique</div>Le <span class="key" data-term="RGPD">RGPD</span> (règlement général sur la protection des données) et le secret professionnel imposent que l'accès au dossier soit <strong>limité aux personnes qui participent à la prise en charge</strong>. Consulter par curiosité le dossier d'un proche, d'un voisin, d'une personne connue ou d'un soignant hospitalisé est <strong>interdit</strong> et tracé : c'est une faute, même sans rien divulguer.</div>
<h3>L'identitovigilance : le bon soin au bon patient</h3>
<p>L'<span class="key" data-term="identitovigilance">identitovigilance</span> est l'ensemble des mesures qui garantissent qu'un soin, un repas, une transmission ou un examen correspond bien au <strong>bon patient</strong>. Une erreur d'identité peut entraîner une erreur grave (mauvais régime, mauvais examen).</p>
<ul>
<li>Vérifier l'identité avec des <strong>questions ouvertes</strong> : « Pouvez-vous me dire votre nom et votre date de naissance ? » plutôt que « Vous êtes bien M. Durand ? ».</li>
<li>Contrôler le <strong>bracelet d'identification</strong> quand il existe (nom, prénom, date de naissance), surtout avant un transfert, un repas à régime particulier, un brancardage.</li>
<li>Utiliser l'<strong>identité de naissance</strong> de référence ; signaler toute incohérence (deux patients homonymes, bracelet illisible).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« Nom + Date de naissance, toujours par le patient lui-même »</strong> : on fait dire son identité, on ne l'affirme pas à sa place. Méfiance avec les <strong>homonymes</strong> et les personnes désorientées qui répondent « oui » à tout.</div>
<h3>Le numérique ne fait pas tout</h3>
<p>L'outil informatique facilite le partage, mais ne remplace ni la <strong>relève orale</strong> ni le <strong>jugement professionnel</strong> : une donnée chiffrée doit être <strong>regardée et comprise</strong>, pas seulement saisie. Un dossier bien rempli mais une alerte non dite à l'IDE reste un défaut de continuité.</p>`,
    refs: ["DEAS arrêté du 10 juin 2021 - bloc 5 et bloc 1", "RGPD - Règlement (UE) 2016/679", "HAS / référentiel national d'identitovigilance (RNIV)"]
  },
  {
    id: "fx_mod_9_plus_tracabilite_refus_evenement", mod: "9", type: "cours",
    titre: "Tracer un refus, un événement indésirable et un acte non réalisé",
    resume: "Savoir quoi écrire, quand et comment lors d'un refus de soin, d'une chute ou d'un soin non réalisé.",
    tags: ["traçabilité", "refus de soin", "événement indésirable", "chute", "FEI"],
    html: `<p>« Ce qui n'est pas écrit est considéré comme non fait » : ce principe vaut aussi pour les <strong>situations négatives ou inhabituelles</strong>. Un refus, une absence, une chute ou un soin <strong>non réalisé</strong> doivent eux aussi être tracés — sans quoi l'équipe et la justice ne peuvent comprendre ce qui s'est passé.</p>
<h3>Tracer un refus de soin</h3>
<p>La personne a le droit de <strong>refuser un soin</strong> (consentement, droits du patient). L'AS ne force pas ; il·elle informe, propose à nouveau plus tard, et <strong>transmet</strong>. On écrit :</p>
<ul>
<li>le <strong>fait</strong> : « refus de la toilette à 9 h », « a recraché ses compléments », « refuse de se lever » ;</li>
<li>les <strong>mots du patient</strong> si possible, entre guillemets : « dit être trop fatigué » ;</li>
<li>l'<strong>action</strong> menée : information donnée, nouvelle proposition, IDE prévenu·e ;</li>
<li>le <strong>résultat</strong> : refus maintenu / accepté un peu plus tard.</li>
</ul>
<div class="callout"><div class="callout-t">Refus répété = alerte</div>Un refus isolé est un droit ; un <strong>refus répété</strong> (de manger, de boire, de se lever, de prendre un traitement) est un <strong>signe d'alerte</strong> à signaler à l'IDE, car il peut traduire une douleur, une dépression, un syndrome de glissement ou un effet indésirable.</div>
<h3>Tracer un acte non réalisé</h3>
<p>Si un soin prévu n'a pas pu être fait (patient absent pour examen, sorti, endormi, refus), on ne laisse <strong>jamais la case vide</strong> sans explication : on note <strong>pourquoi</strong> il n'a pas été réalisé et ce qui a été transmis. La case vide laisse croire à un oubli.</p>
<h3>Événement indésirable : déclarer pour améliorer</h3>
<p>Une <span class="key" data-term="événement indésirable">chute</span>, une erreur, un dommage évité de justesse relèvent de la <strong>déclaration d'événement indésirable</strong> (souvent appelée <span class="key" data-term="FEI">FEI</span> : fiche d'événement indésirable). Sa logique est l'<strong>amélioration de la sécurité</strong>, pas la sanction.</p>
<table class="tbl">
<tr><th>Étape</th><th>Geste de l'AS</th></tr>
<tr><td>1. Sécuriser</td><td>Protéger la personne, ne pas la relever seul·e si traumatisme suspecté, alerter l'IDE.</td></tr>
<tr><td>2. Observer</td><td>Noter heure, lieu, circonstances, plainte, signes visibles (plaie, hématome, impotence).</td></tr>
<tr><td>3. Transmettre</td><td>Oralement à l'IDE sans délai, puis par écrit (transmission ciblée).</td></tr>
<tr><td>4. Déclarer</td><td>Renseigner la FEI selon la procédure du service ; rester <strong>factuel</strong>, sans accusation.</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Devant un événement : <strong>« Sécuriser → Observer → Signaler → Tracer (FEI) »</strong>. La FEI n'est pas une punition : <strong>« on déclare pour soigner le système »</strong>.</div>
<p>La FEI et la déclaration restent dans une logique <strong>professionnelle</strong> ; le déclarant de bonne foi est protégé. Les actes médicaux (prescription d'examen après chute, antalgique) relèvent du médecin et de l'IDE.</p>`,
    refs: ["DEAS arrêté du 10 juin 2021 - blocs 1 et 5", "Loi du 4 mars 2002 relative aux droits des malades (consentement)", "Code de la santé publique - gestion des risques associés aux soins"]
  }
];

export const qcm = [
  {
    mod: "9", q: "Parmi ces formulations de transmission, laquelle est la plus objective ?",
    options: ["« Le patient va mal ce matin »", "« Le patient est pénible »", "« Pâle, sueurs, dit avoir mal à la poitrine, n'a pas pu se lever »", "« Il fait sa comédie »"],
    correct: 2,
    explication: "Une transmission de qualité décrit des faits observables et mesurables (pâleur, sueurs, douleur exprimée, incapacité constatée). « Va mal », « pénible », « comédie » sont des jugements subjectifs inexploitables et risqués.",
    ref: "DEAS arrêté du 10 juin 2021 - bloc 1", diff: 1
  },
  {
    mod: "9", q: "La trame SBAR sert surtout à structurer :",
    options: ["Une transmission orale (ex. un appel à l'IDE)", "Le calcul d'une dose de médicament", "Le bionettoyage d'une chambre", "La désinfection des mains"],
    correct: 0,
    explication: "SBAR (Situation, Background/contexte, Assessment/observation, Recommandation) est un outil pour structurer une communication orale entre soignants et ne rien oublier d'essentiel.",
    ref: "HAS - Saed/SBAR", diff: 2
  },
  {
    mod: "9", q: "Dans SBAR, la lettre « R » (Recommandation) correspond à :",
    options: ["Le résumé des antécédents", "Ce que je propose ou demande à l'interlocuteur", "Le résultat de la prise de sang", "Le règlement intérieur du service"],
    correct: 1,
    explication: "Le « R » formule la demande ou la proposition (« je vous appelle pour que vous veniez l'évaluer »). C'est l'attente concrète vis-à-vis de l'interlocuteur.",
    ref: "HAS - Saed/SBAR", diff: 2
  },
  {
    mod: "9", q: "Pour transmettre l'hydratation d'un patient, la meilleure formulation est :",
    options: ["« A bu un peu »", "« A bu comme d'habitude »", "« A bu 3 verres d'eau entre 8 h et 14 h »", "« Semble bien hydraté »"],
    correct: 2,
    explication: "Une donnée chiffrée et située dans le temps est exploitable et comparable. « Un peu », « comme d'habitude » ou « semble bien hydraté » sont vagues ou relèvent d'une interprétation.",
    ref: "DEAS arrêté du 10 juin 2021 - bloc 1", diff: 1
  },
  {
    mod: "9", q: "Un collègue vous demande votre identifiant et votre mot de passe pour saisir vite ses soins dans le dossier informatisé. Vous :",
    options: ["Acceptez pour lui rendre service", "Refusez : chacun se connecte avec son propre compte", "Lui notez sur un papier collé à l'écran", "Acceptez si c'est l'IDE qui le demande"],
    correct: 1,
    explication: "Le compte est strictement personnel : tout ce qui est saisi sous votre session vous engage. Partager son mot de passe est une faute de sécurité, quel que soit le demandeur.",
    ref: "RGPD / charte informatique de l'établissement", diff: 1
  },
  {
    mod: "9", q: "Consulter par curiosité, dans le dossier informatisé, le dossier d'un voisin hospitalisé que vous ne soignez pas est :",
    options: ["Autorisé car vous travaillez dans l'établissement", "Autorisé si vous ne divulguez rien", "Interdit et tracé : accès non justifié par la prise en charge", "Autorisé avec l'accord du voisin par téléphone"],
    correct: 2,
    explication: "L'accès au dossier est limité aux professionnels participant à la prise en charge. Toute consultation non justifiée est une faute, est tracée informatiquement et peut être sanctionnée, même sans divulgation.",
    ref: "RGPD - Règlement (UE) 2016/679 ; secret professionnel", diff: 2
  },
  {
    mod: "9", q: "L'identitovigilance désigne :",
    options: ["La surveillance des constantes vitales", "Les mesures qui garantissent que le bon soin va au bon patient", "La traçabilité du matériel stérile", "La vérification des dates de péremption"],
    correct: 1,
    explication: "L'identitovigilance regroupe l'ensemble des mesures évitant les erreurs d'identité du patient (mauvais repas, mauvais examen, confusion d'homonymes).",
    ref: "Référentiel national d'identitovigilance (RNIV)", diff: 2
  },
  {
    mod: "9", q: "Pour vérifier l'identité d'un patient avant un soin à risque, la bonne pratique est :",
    options: ["Lui demander « Vous êtes bien M. Durand ? »", "Lui faire dire son nom et sa date de naissance", "Se fier au numéro de chambre", "Demander au voisin de lit"],
    correct: 1,
    explication: "On utilise une question ouverte pour faire énoncer l'identité par le patient lui-même (nom + date de naissance). Une question fermée fait dire « oui » à une personne désorientée ; la chambre et le voisin ne sont pas fiables.",
    ref: "Référentiel national d'identitovigilance (RNIV)", diff: 2
  },
  {
    mod: "9", q: "Une personne refuse sa toilette ce matin. La conduite correcte de l'AS est de :",
    options: ["La forcer car l'hygiène est obligatoire", "Respecter le refus, le tracer et en informer l'IDE", "Ne rien noter puisque le soin n'a pas eu lieu", "Le signaler uniquement à la famille"],
    correct: 1,
    explication: "Le patient a le droit de refuser un soin. L'AS n'use pas de la contrainte, propose à nouveau plus tard, trace le refus (fait + mots du patient + action) et informe l'IDE. Ne rien noter laisserait croire à un oubli.",
    ref: "Loi du 4 mars 2002 (consentement) ; DEAS bloc 1", diff: 1
  },
  {
    mod: "9", q: "Un patient refuse de boire, de manger et de se lever depuis deux jours. Ce refus répété doit être :",
    options: ["Considéré comme un simple caprice", "Signalé à l'IDE comme signe d'alerte", "Ignoré tant qu'il n'y a pas de fièvre", "Géré par l'AS seul·e sans transmission"],
    correct: 1,
    explication: "Un refus isolé est un droit, mais un refus répété peut traduire une douleur, une dépression, un syndrome de glissement ou un effet indésirable : c'est un signe d'alerte à transmettre sans délai à l'IDE.",
    ref: "DEAS arrêté du 10 juin 2021 - bloc 1", diff: 2
  },
  {
    mod: "9", q: "Un soin prévu n'a pas pu être réalisé car le patient était à un examen. Sur le dossier, l'AS :",
    options: ["Laisse la case vide", "Coche comme si le soin avait été fait", "Note que le soin n'a pas été fait et pourquoi", "Attend le lendemain pour décider"],
    correct: 2,
    explication: "On ne laisse jamais une case vide sans explication, car cela ressemble à un oubli. On trace l'acte non réalisé et son motif (patient absent pour examen), ce qui assure la continuité.",
    ref: "DEAS bloc 5 - traçabilité", diff: 1
  },
  {
    mod: "9", q: "La déclaration d'un événement indésirable (FEI) a pour but principal :",
    options: ["De sanctionner le soignant fautif", "D'améliorer la sécurité et de prévenir la récidive", "De prévenir les médias", "De réduire le salaire en cas d'erreur"],
    correct: 1,
    explication: "La FEI s'inscrit dans une démarche d'amélioration de la sécurité des soins, non de sanction. Le déclarant de bonne foi est protégé ; on analyse le système pour éviter que cela se reproduise.",
    ref: "Code de la santé publique - gestion des risques associés aux soins", diff: 2
  },
  {
    mod: "9", q: "Vous découvrez un patient au sol, conscient, se plaignant de la hanche. Le premier réflexe est de :",
    options: ["Le relever rapidement seul·e", "Sécuriser, ne pas le mobiliser et alerter l'IDE", "Le laisser et finir votre tournée", "Remplir d'abord la fiche d'événement indésirable"],
    correct: 1,
    explication: "Devant une chute avec plainte douloureuse, on ne relève pas seul·e (risque d'aggraver une lésion), on protège la personne et on alerte l'IDE. La traçabilité et la FEI viennent ensuite.",
    ref: "DEAS bloc 1 - sécurité ; gestion des risques", diff: 2
  },
  {
    mod: "9", q: "Dans une transmission, « le patient est déshydraté » est :",
    options: ["Un fait observé par l'AS", "Une interprétation/diagnostic ; l'AS décrit plutôt les signes", "Une donnée chiffrée", "Une macrocible"],
    correct: 1,
    explication: "« Déshydraté » est un diagnostic qui relève du médecin. L'AS transmet les signes observés (urines foncées, langue sèche, faible prise de boisson) qui orientent l'IDE et le médecin.",
    ref: "DEAS arrêté du 10 juin 2021 - bloc 1", diff: 2
  },
  {
    mod: "9", q: "Le « I » de la variante ISBAR (par rapport à SBAR) ajoute :",
    options: ["L'inventaire du matériel", "L'identification de l'appelant et du patient", "L'injection à réaliser", "L'isolement du patient"],
    correct: 1,
    explication: "ISBAR commence par l'Identification : se présenter et confirmer de quel patient on parle, ce qui réduit les erreurs d'identité au moment de l'échange.",
    ref: "HAS - Saed/SBAR ; identitovigilance", diff: 3
  },
  {
    mod: "9", q: "À propos de l'écran du dossier informatisé en chambre, l'AS doit :",
    options: ["Le laisser visible pour gagner du temps", "Veiller à ce qu'il ne soit pas vu des visiteurs et se déconnecter en partant", "Le partager avec la famille pour l'informer", "L'éteindre seulement le soir"],
    correct: 1,
    explication: "La confidentialité s'applique aussi à l'écran : il ne doit pas être visible de tiers, et l'AS se déconnecte en quittant le poste pour qu'aucune saisie ne se fasse sous son compte.",
    ref: "RGPD ; secret professionnel", diff: 1
  },
  {
    mod: "9", q: "Concernant la relève orale entre équipes et le dossier informatisé :",
    options: ["Le DPI rend la relève orale inutile", "La relève orale complète le dossier ; les deux sont nécessaires", "Seule la relève orale fait foi", "On choisit l'un ou l'autre selon l'humeur"],
    correct: 1,
    explication: "L'outil numérique facilite le partage mais ne remplace pas l'échange oral ni le jugement professionnel : une alerte doit aussi être dite, pas seulement saisie. Écrit et oral se complètent.",
    ref: "DEAS bloc 5 - continuité des soins", diff: 2
  },
  {
    mod: "9", q: "Lors d'un refus, la meilleure façon de tracer la parole du patient est :",
    options: ["De résumer en disant « il n'est pas coopérant »", "De rapporter ses mots entre guillemets : « dit être trop fatigué »", "De ne rien écrire pour ne pas le stigmatiser", "D'écrire votre propre avis sur lui"],
    correct: 1,
    explication: "Rapporter les mots du patient entre guillemets reste factuel et utile à l'équipe, sans jugement. « Pas coopérant » est une étiquette subjective ; ne rien écrire nuit à la continuité.",
    ref: "DEAS arrêté du 10 juin 2021 - bloc 1", diff: 2
  },
  {
    mod: "9", q: "Quelle donnée l'AS transmet-il/elle de façon la plus exploitable ?",
    options: ["« Beaucoup de selles »", "« Selles bizarres »", "« 2 selles liquides depuis cette nuit »", "« Transit normal »"],
    correct: 2,
    explication: "Chiffrer (nombre), qualifier objectivement (liquides) et situer dans le temps (depuis cette nuit) rend la transmission précise et comparable. « Beaucoup », « bizarres » ou « normal » sont vagues.",
    ref: "DEAS bloc 1 - observation", diff: 1
  },
  {
    mod: "9", q: "Dans la déclaration d'un événement indésirable, l'AS doit rédiger :",
    options: ["De façon factuelle, sans accuser de collègue", "En désignant le responsable", "En minimisant les faits", "Rien, car c'est le rôle du cadre"],
    correct: 0,
    explication: "La FEI doit rester factuelle et objective : décrire ce qui s'est passé, pas désigner un coupable. La démarche vise l'analyse du système, pas la mise en cause d'une personne.",
    ref: "Gestion des risques associés aux soins", diff: 2
  },
  {
    mod: "9", q: "Pour éviter une erreur d'homonymie (deux patients de même nom), l'AS s'appuie surtout sur :",
    options: ["Le numéro de chambre", "La date de naissance (et le bracelet) en plus du nom", "L'allure de la personne", "Le prénom uniquement"],
    correct: 1,
    explication: "La date de naissance associée au nom, vérifiée via le bracelet et énoncée par le patient, permet de distinguer des homonymes. La chambre, l'allure ou le seul prénom ne suffisent pas.",
    ref: "Référentiel national d'identitovigilance (RNIV)", diff: 3
  }
];

export const flashcards = [
  { mod: "9", recto: "Fait objectif ou interprétation : « il est agressif » ?", verso: "Interprétation. Fait à transmettre : « a crié, refusé la toilette, repoussé ma main à deux reprises »." },
  { mod: "9", recto: "Que signifie SBAR ?", verso: "Situation · Background (contexte) · Assessment (observation) · Recommandation — trame pour structurer une transmission orale." },
  { mod: "9", recto: "SBAR ou DAR : lequel structure surtout l'oral ?", verso: "SBAR structure l'oral (ex. appel à l'IDE) ; DAR structure surtout l'écrit ciblé." },
  { mod: "9", recto: "Pourquoi chiffrer et dater une transmission ?", verso: "Pour qu'elle soit précise, comparable et exploitable : « a bu 3 verres entre 8 h et 14 h » plutôt que « un peu »." },
  { mod: "9", recto: "Peut-on partager son mot de passe du dossier informatisé ?", verso: "Jamais. Le compte est personnel ; tout ce qui est saisi sous ma session m'engage." },
  { mod: "9", recto: "Consulter le dossier d'un proche qu'on ne soigne pas ?", verso: "Interdit et tracé : accès non justifié par la prise en charge, faute même sans divulgation (RGPD + secret)." },
  { mod: "9", recto: "Qu'est-ce que l'identitovigilance ?", verso: "L'ensemble des mesures garantissant que le bon soin va au bon patient (éviter les erreurs d'identité)." },
  { mod: "9", recto: "Comment vérifier l'identité d'un patient ?", verso: "Lui faire dire son nom et sa date de naissance (question ouverte), vérifier le bracelet ; ne pas se fier à la chambre." },
  { mod: "9", recto: "Que faire face à un refus de soin ?", verso: "Respecter le refus, ne pas forcer, proposer à nouveau plus tard, le tracer (fait + mots du patient) et informer l'IDE." },
  { mod: "9", recto: "Un refus répété de boire/manger/se lever, c'est quoi ?", verso: "Un signe d'alerte à signaler à l'IDE : possible douleur, dépression, syndrome de glissement ou effet indésirable." },
  { mod: "9", recto: "Un soin prévu non réalisé : que noter ?", verso: "Ne jamais laisser la case vide : tracer que le soin n'a pas été fait et pourquoi (patient absent, refus…)." },
  { mod: "9", recto: "À quoi sert une FEI (fiche d'événement indésirable) ?", verso: "À améliorer la sécurité des soins et prévenir la récidive — pas à sanctionner. Le déclarant de bonne foi est protégé." },
  { mod: "9", recto: "Patient au sol, conscient, douleur à la hanche : 1er réflexe ?", verso: "Sécuriser, ne pas le relever seul·e (risque de lésion), alerter l'IDE ; tracer et déclarer ensuite." },
  { mod: "9", recto: "Que faut-il vérifier pour éviter une erreur d'homonyme ?", verso: "Le nom ET la date de naissance, via le bracelet et énoncés par le patient ; jamais le seul numéro de chambre." },
  { mod: "9", recto: "Le dossier numérique remplace-t-il la relève orale ?", verso: "Non : écrit et oral se complètent ; une alerte doit être dite à l'IDE, pas seulement saisie." }
];
