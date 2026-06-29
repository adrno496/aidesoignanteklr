// Pack COMPLÉMENTAIRE — Gestes de l'AS étape par étape (toilette, change, lit occupé,
// repas/fausses routes, escarre, installation/transferts). DEAS arrêté du 10 juin 2021, mod 4.
export const fiches = [
  {
    id: "fx_gestes_as_plus_protocole_gestes", mod: "4", type: "cours",
    titre: "Gestes du quotidien : déroulé pas à pas et points de vigilance",
    resume: "Le déroulé chronologique précis de la toilette au lit, du change, du lit occupé et de l'aide au repas, avec les pièges à éviter.",
    tags: ["toilette", "change", "lit occupé", "repas", "ergonomie"],
    html: `<p>Tout geste de la vie quotidienne suit une logique constante : <strong>préparer</strong> (matériel, environnement, personne), <strong>réaliser</strong> dans l'ordre du plus propre au plus sale, <strong>observer</strong>, puis <strong>installer et transmettre</strong>. Cette fiche détaille les étapes fines et les erreurs fréquentes.</p>

<h3>Toilette complète au lit : enchaînement</h3>
<p>Avant tout, on regroupe le matériel pour ne jamais laisser la personne seule en cours de soin, on règle le lit à hauteur du bassin du soignant, on ferme la porte et on prévient la personne. On utilise <strong>deux cuvettes</strong> idéalement (haut du corps / bas du corps) et on change l'eau dès qu'elle est sale ou froide.</p>
<table class="tbl">
<tr><th>Étape</th><th>Geste précis</th></tr>
<tr><td>1. Visage</td><td>Yeux <strong>sans savon</strong>, du coin interne vers l'externe, zone de gant propre par œil ; puis front, joues, nez, oreilles, cou.</td></tr>
<tr><td>2. Membres supérieurs</td><td>Du poignet vers l'épaule, on n'oublie pas <span class="key" data-term="espaces interdigitaux">les espaces entre les doigts</span> et les aisselles. Séchage soigneux.</td></tr>
<tr><td>3. Thorax / abdomen</td><td>Vérifier les plis sous-mammaires et l'ombilic (zones de macération).</td></tr>
<tr><td>4. Membres inférieurs</td><td>Jusqu'aux pieds, espaces interdigitaux séchés (prévention mycose), observation des talons.</td></tr>
<tr><td>5. Dos / siège</td><td>Sur le côté (décubitus latéral) : lavage du dos, observation du <span class="key" data-term="sacrum">sacrum</span>. <strong>Ni massage ni friction</strong> des zones d'appui (le massage est proscrit car il aggrave l'ischémie).</td></tr>
<tr><td>6. Région génito-anale</td><td><strong>En dernier</strong>, gant et serviette dédiés ; chez la femme, lavage d'avant en arrière.</td></tr>
</table>
<div class="callout"><div class="callout-t">Erreur classique</div>Repasser sur une zone propre avec un gant ayant servi à une zone sale. On garde une <strong>face de gant par zone</strong> et on change de gant pour le siège.</div>

<h3>Change de protection : sécuriser sans macération</h3>
<ul>
<li>Vérifier le besoin avec respect ; expliquer le geste.</li>
<li>Tourner la personne en <span class="key" data-term="décubitus latéral">décubitus latéral</span>, retirer la protection souillée enroulée vers l'intérieur.</li>
<li>Nettoyer, <strong>rincer et sécher parfaitement</strong> : une peau humide se fragilise. Pas de talc dans les plis (forme des grumeaux abrasifs).</li>
<li>Poser la protection propre bien centrée, sans serrer ni plisser au niveau des cuisses.</li>
<li>Observer couleur, odeur, présence de selles (description via l'<span class="key" data-term="échelle de Bristol">échelle de Bristol</span>), rougeurs.</li>
</ul>

<h3>Aide au repas et prévention des fausses routes</h3>
<p>La fausse route est l'inhalation d'aliment dans les voies respiratoires : risque vital. L'AS prévient et alerte ; l'adaptation de texture est décidée par l'équipe (IDE, médecin, orthophoniste, diététicien·ne).</p>
<ul>
<li>Installer la personne <strong>assise, tête légèrement fléchie</strong> (menton vers la poitrine) : jamais en arrière.</li>
<li>Environnement calme, sans précipitation ; vérifier prothèses dentaires en place et lunettes.</li>
<li>Petites bouchées, vérifier la déglutition avant la suivante, ne pas faire parler pendant la déglutition.</li>
<li>Eau gélifiée ou texture adaptée si prescrite ; rester assis <strong>20 à 30 minutes après</strong>.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« ASSIS-PENCHÉ-PETIT-LENT »</strong> : Assis bien droit, tête Penchée en avant, Petites bouchées, rythme Lent. Quatre réflexes anti-fausse route.</div>

<div class="callout"><div class="callout-t">Limites de l'AS</div>L'AS ne pose pas de sonde, n'évalue pas un trouble de déglutition par test instrumental, ne pose pas de diagnostic : il observe, sécurise et transmet. Ces actes relèvent de l'IDE et de l'équipe.</div>`,
    refs: ["Référentiel DEAS bloc 1, arrêté du 10 juin 2021"]
  },

  {
    id: "fx_gestes_as_plus_escarre_outils", mod: "4", type: "cours",
    titre: "Prévention de l'escarre : repérage, échelles et positionnements",
    resume: "Reconnaître les stades, situer les zones d'appui selon la position et appliquer les mesures de prévention validées.",
    tags: ["escarre", "Braden", "positionnement", "prévention", "appui"],
    html: `<p>L'<span class="key" data-term="escarre">escarre</span> est une lésion par <strong>ischémie</strong> : la pression prolongée écrase les tissus entre l'os et le plan d'appui et coupe la circulation. L'AS est en première ligne pour le repérage car il voit la peau à chaque soin.</p>

<h3>Les facteurs de risque</h3>
<ul>
<li><strong>Pression</strong> : appui prolongé sans changement de position.</li>
<li><strong>Cisaillement</strong> : tissus tiraillés quand on glisse la personne au lieu de la soulever.</li>
<li><strong>Frottement</strong> : peau qui frotte contre les draps.</li>
<li><strong>Macération</strong> : humidité (transpiration, urine) qui fragilise la peau.</li>
<li>Aggravants : dénutrition, déshydratation, immobilité, âge, troubles de la sensibilité.</li>
</ul>

<h3>Zones à risque selon la position</h3>
<table class="tbl">
<tr><th>Position</th><th>Zones d'appui à surveiller</th></tr>
<tr><td>Décubitus dorsal</td><td>Sacrum, talons, occiput, coudes, omoplates.</td></tr>
<tr><td>Décubitus latéral</td><td>Trochanter (hanche), malléole (cheville), oreille, épaule, genou.</td></tr>
<tr><td>Position assise</td><td>Ischions (fesses), sacrum, talons.</td></tr>
</table>

<h3>Repérer le stade (description, pas diagnostic)</h3>
<table class="tbl">
<tr><th>Stade</th><th>Aspect observable</th></tr>
<tr><td>Stade 1</td><td>Rougeur qui <strong>ne blanchit pas</strong> à la pression du doigt, peau intacte.</td></tr>
<tr><td>Stade 2</td><td>Atteinte superficielle : phlyctène (cloque) ou abrasion.</td></tr>
<tr><td>Stade 3</td><td>Perte de substance atteignant le tissu sous-cutané.</td></tr>
<tr><td>Stade 4</td><td>Atteinte profonde : muscle, tendon ou os visible.</td></tr>
</table>
<div class="callout"><div class="callout-t">Réflexe stade 1</div>Une rougeur qui ne blanchit pas = alerte. On <strong>supprime l'appui</strong> sur la zone et on signale immédiatement à l'IDE. Plus on agit tôt, plus c'est réversible.</div>

<h3>Échelles d'évaluation du risque</h3>
<p>Le risque est coté avec une échelle validée : <span class="key" data-term="Braden">Braden</span> ou Norton. L'AS y contribue par ses observations ; le score guide la fréquence des changements de position.</p>

<h3>Mesures de prévention</h3>
<ul>
<li><strong>Changements de position</strong> réguliers (rythme adapté au risque et à la prescription), en variant les points d'appui.</li>
<li><strong>Soulever, jamais glisser</strong> (anti-cisaillement) : drap de glissement, alèse, lève-personne.</li>
<li>Peau propre, <strong>sèche</strong>, hydratée ; linge sans pli ni miette.</li>
<li>Décharge des talons (coussin sous les mollets pour les faire « flotter »).</li>
<li>Matériel d'aide : matelas à air, coussin de positionnement (sur prescription/protocole).</li>
<li>Surveiller alimentation et hydratation, les transmettre.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« Ne JAMAIS frotter, masser, chauffer ni refroidir »</strong> une zone à risque : ces gestes anciens aggravent l'ischémie. La seule réponse efficace est de <strong>supprimer la pression</strong> (changement de position) et d'alerter.</div>`,
    refs: ["Référentiel DEAS bloc 1, arrêté du 10 juin 2021", "Recommandations prévention escarre HAS"]
  },

  {
    id: "fx_gestes_as_plus_transferts", mod: "4", type: "geste",
    titre: "Installation et transferts : ergonomie et sécurité",
    resume: "Mobiliser la personne en sécurité pour elle et pour le soignant, avec les bons principes de manutention.",
    tags: ["transfert", "manutention", "ergonomie", "installation", "sécurité"],
    html: `<p>Mobiliser une personne, c'est protéger <strong>deux corps</strong> : celui de la personne aidée et celui du soignant. Les principes de manutention préviennent à la fois les chutes et les troubles musculo-squelettiques (TMS) de l'AS.</p>

<h3>Avant tout transfert</h3>
<ul>
<li>Évaluer les <strong>capacités restantes</strong> de la personne : on fait <strong>avec</strong> elle, pas à sa place.</li>
<li>Vérifier l'environnement : sol sec, chaussures fermées, freins du lit et du fauteuil bloqués, espace dégagé.</li>
<li>Prévenir et expliquer ; convenir d'un signal (« à trois, on se lève »).</li>
<li>Régler la hauteur du lit ; prévoir une aide ou un matériel si besoin (ne jamais forcer seul).</li>
</ul>

<h3>Principes de manutention pour le soignant</h3>
<ul>
<li><strong>Dos droit, fléchir les genoux</strong> : la force vient des jambes, pas des lombaires.</li>
<li>Pieds écartés (polygone de sustentation large), un pied dans le sens du mouvement.</li>
<li>Charge près du corps, mouvement dans l'axe, sans torsion du tronc.</li>
<li>Utiliser le poids et les appuis de la personne ; éviter de la soulever entièrement quand un transfert assisté suffit.</li>
</ul>

<h3>Aides techniques (selon protocole)</h3>
<table class="tbl">
<tr><th>Matériel</th><th>Usage</th></tr>
<tr><td>Drap / alèse de glissement</td><td>Réhausser ou tourner sans cisailler ni frotter la peau.</td></tr>
<tr><td>Planche de transfert</td><td>Passage lit ↔ fauteuil quand la personne participe partiellement.</td></tr>
<tr><td>Disque / guidon de verticalisation</td><td>Aider au pivot pour une personne qui tient debout un instant.</td></tr>
<tr><td>Lève-personne / verticalisateur</td><td>Personne très dépendante : suit la formation et le protocole de l'établissement.</td></tr>
</table>

<h3>Installation au lit et au fauteuil</h3>
<ul>
<li>Position confortable, alignement physiologique, articulations soutenues.</li>
<li>Varier les points d'appui (prévention escarre), décharger les talons.</li>
<li>Au fauteuil : pieds posés (cale-pieds ou sol), dos calé, à portée de sonnette, eau et effets personnels accessibles.</li>
<li>Remettre le lit en <strong>position basse</strong> avec barrières si indiquées, sonnette à portée.</li>
</ul>
<div class="callout"><div class="callout-t">Sécurité</div>Les barrières de lit relèvent d'une décision d'équipe (contention = prescription). En cas de doute sur une mobilisation, on demande de l'aide plutôt que de risquer une chute ou une lombalgie.</div>`,
    refs: ["Référentiel DEAS bloc 1, arrêté du 10 juin 2021", "Recommandations manutention / prévention TMS"]
  }
];

export const qcm = [
  { mod: "4", q: "Pourquoi utiliser idéalement deux cuvettes (ou deux temps d'eau) lors d'une toilette au lit ?", options: ["Pour aller plus vite", "Pour séparer le lavage du haut du corps de celui du bas et limiter la contamination", "C'est une obligation légale", "Pour économiser le savon"], correct: 1,
    explication: "Séparer haut et bas du corps (et changer l'eau souillée) respecte le principe du plus propre au plus sale et limite la diffusion des germes. C'est une bonne pratique d'hygiène, pas une obligation réglementaire.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Lors du change, pourquoi éviter le talc dans les plis cutanés ?", options: ["Il sent mauvais", "Humidifié, il forme des grumeaux abrasifs et favorise la macération", "Il est trop cher", "Il colore la peau"], correct: 1,
    explication: "Au contact de l'humidité, le talc s'agglomère en grumeaux qui frottent et entretiennent la macération, fragilisant la peau. On privilégie un séchage soigneux.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Quelle position de la tête prévient le mieux les fausses routes pendant le repas ?", options: ["Tête en extension vers l'arrière", "Tête tournée sur le côté", "Tête légèrement fléchie en avant, menton vers la poitrine", "Tête posée à plat"], correct: 2,
    explication: "La flexion antérieure de la tête (menton vers la poitrine) ferme mieux les voies respiratoires lors de la déglutition. L'extension arrière, au contraire, augmente le risque de fausse route.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Combien de temps faire rester la personne assise après un repas à risque de fausse route ?", options: ["Immédiatement allongée", "20 à 30 minutes", "5 secondes", "Au moins 3 heures"], correct: 1,
    explication: "Rester assis 20 à 30 minutes après le repas limite le reflux et le risque d'inhalation. Allonger trop vite favorise la fausse route et le reflux.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Qui décide de l'adaptation de la texture des aliments (mixé, eau gélifiée) ?", options: ["L'AS seul, à son initiative", "L'équipe : médecin, IDE, orthophoniste, diététicien·ne", "La famille", "Le brancardier"], correct: 1,
    explication: "L'AS observe et alerte mais ne prescrit pas. L'adaptation de texture résulte d'une décision d'équipe (médecin, IDE, orthophoniste, diététicien·ne).", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Une rougeur qui ne blanchit pas à la pression du doigt correspond à :", options: ["Une peau saine", "Un érythème sans gravité", "Une escarre de stade 1", "Une mycose"], correct: 2,
    explication: "La rougeur qui ne s'efface pas à la pression signe une souffrance tissulaire débutante : escarre de stade 1. Il faut supprimer l'appui et alerter immédiatement.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "En décubitus latéral, quelle zone d'appui est particulièrement à risque d'escarre ?", options: ["Le sacrum", "Le trochanter (hanche) et la malléole", "L'occiput", "Les omoplates"], correct: 1,
    explication: "Couché sur le côté, l'appui se déplace : trochanter (saillie de la hanche), malléole (cheville), épaule, oreille et genou deviennent les points à risque. Le sacrum et l'occiput sont surtout à risque en décubitus dorsal.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Quelle échelle est utilisée pour évaluer le risque d'escarre ?", options: ["Bristol", "Glasgow", "Braden ou Norton", "Apgar"], correct: 2,
    explication: "Braden et Norton cotent le risque d'escarre. Bristol décrit les selles, Glasgow l'état de conscience, Apgar la vitalité du nouveau-né.", ref: "Référentiel DEAS bloc 1", diff: 3 },

  { mod: "4", q: "Pourquoi soulever la personne plutôt que la glisser sur le drap ?", options: ["Pour gagner du temps", "Pour éviter le cisaillement des tissus, facteur d'escarre", "Pour faire moins de bruit", "Cela n'a pas d'importance"], correct: 1,
    explication: "Glisser la personne crée un cisaillement entre la peau et les plans profonds, qui favorise l'escarre. On la soulève (drap de glissement, alèse) au lieu de la traîner.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Quel geste est désormais proscrit sur une zone à risque d'escarre ?", options: ["L'effleurage doux", "Le massage appuyé de la zone rougie", "L'observation de la peau", "Le changement de position"], correct: 1,
    explication: "Le massage des zones d'appui est proscrit : il aggrave l'ischémie et la lésion, comme l'application de chaud ou de froid. La mesure efficace est de supprimer l'appui et d'alerter.", ref: "Recommandations prévention escarre HAS", diff: 2 },

  { mod: "4", q: "Comment décharger efficacement les talons d'une personne alitée ?", options: ["En posant un coussin directement sous les talons", "En plaçant un coussin sous les mollets pour faire flotter les talons", "En surélevant la tête du lit", "En croisant ses jambes"], correct: 1,
    explication: "On place le coussin sous les mollets pour suspendre les talons dans le vide (décharge complète). Un coussin directement sous les talons maintient au contraire la pression.", ref: "Recommandations prévention escarre HAS", diff: 2 },

  { mod: "4", q: "Lors d'un transfert, d'où le soignant doit-il tirer sa force ?", options: ["Du dos en se penchant", "Des jambes, en fléchissant les genoux et gardant le dos droit", "Des bras uniquement", "Des épaules en torsion"], correct: 1,
    explication: "Le verrouillage du dos et la flexion des genoux font porter l'effort sur les membres inférieurs, prévenant les lombalgies et TMS. On évite toute torsion du tronc.", ref: "Recommandations manutention / prévention TMS", diff: 1 },

  { mod: "4", q: "Avant un transfert lit-fauteuil, quelle vérification est indispensable ?", options: ["Ouvrir la fenêtre", "Bloquer les freins du lit et du fauteuil", "Baisser la lumière", "Retirer les chaussures de la personne"], correct: 1,
    explication: "Les freins du lit et du fauteuil bloqués évitent que le support ne se dérobe pendant le transfert. La personne garde des chaussures fermées et antidérapantes.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Quel matériel permet de réhausser une personne au lit sans cisailler la peau ?", options: ["Une planche de transfert", "Un drap ou une alèse de glissement", "Un guidon de verticalisation", "Un déambulateur"], correct: 1,
    explication: "Le drap/alèse de glissement permet de remonter ou tourner la personne en réduisant le cisaillement et le frottement. La planche sert au passage lit-fauteuil, le guidon au pivot debout.", ref: "Recommandations manutention / prévention TMS", diff: 2 },

  { mod: "4", q: "Quel principe résume la posture du soignant face au maintien de l'autonomie lors d'un transfert ?", options: ["Tout faire à la place de la personne", "Faire avec la personne en mobilisant ses capacités restantes", "Laisser la personne se débrouiller seule", "Aller le plus vite possible"], correct: 1,
    explication: "On mobilise les capacités restantes : faire AVEC, pas À LA PLACE. Cela entretient l'autonomie et réduit l'effort du soignant, tout en sécurisant le geste.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "La pose et la surveillance instrumentale d'une contention par barrières de lit relèvent :", options: ["De l'AS seul", "D'une décision d'équipe / prescription", "De la famille", "Du brancardier"], correct: 1,
    explication: "La contention (dont les barrières dans un but de contention) suppose une évaluation et une prescription : c'est une décision d'équipe. L'AS l'applique et surveille selon le protocole.", ref: "Référentiel DEAS bloc 1", diff: 3 },

  { mod: "4", q: "Pourquoi sécher soigneusement les espaces interdigitaux des pieds ?", options: ["Pour le confort uniquement", "Pour prévenir la macération et les mycoses", "Pour réchauffer les pieds", "Ce n'est pas nécessaire"], correct: 1,
    explication: "L'humidité résiduelle entre les orteils favorise la macération et les mycoses. Un séchage minutieux fait partie de la prévention cutanée.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Lors de la toilette, comment garder le gant propre entre deux zones ?", options: ["Utiliser la même face pour tout", "Changer de face de gant par zone et changer de gant pour le siège", "Ne jamais changer de gant", "Tremper le gant sale dans l'eau propre"], correct: 1,
    explication: "Une face de gant par zone, et un gant dédié pour la région génito-anale, évitent la contamination croisée. Tremper un gant sale dans l'eau propre la souille.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Au fauteuil, quelle installation prévient l'inconfort et les complications ?", options: ["Pieds dans le vide, dos non calé", "Pieds posés, dos calé, sonnette et effets à portée", "Glissé vers l'avant du siège", "Sans aucun appui"], correct: 1,
    explication: "Pieds posés (sol ou cale-pieds), dos calé, alignement correct, sonnette et effets accessibles : on prévient glissement, escarre ischiatique et sentiment d'abandon.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Face à une personne qui tousse fortement et efficacement pendant le repas, l'AS doit :", options: ["Lui taper fort dans le dos aussitôt", "L'encourager à tousser et la surveiller sans interférer", "Lui donner à boire immédiatement", "La coucher à plat"], correct: 1,
    explication: "Une toux efficace est le meilleur mécanisme d'expulsion : on encourage et on surveille. On n'intervient (manœuvres) que si la toux devient inefficace ou si l'obstruction est complète, et on alerte.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Pourquoi régler le lit à hauteur du soignant avant la toilette ou le change ?", options: ["Pour mieux voir la personne", "Pour prévenir les troubles musculo-squelettiques du soignant", "Pour que la personne soit plus haute", "Sans raison particulière"], correct: 1,
    explication: "Travailler à bonne hauteur (dos droit) prévient les lombalgies et TMS du soignant. On remet ensuite le lit en position basse et sécurisée.", ref: "Recommandations manutention / prévention TMS", diff: 1 },

  { mod: "4", q: "Lors de la réfection d'un lit occupé, quelle technique permet de changer les draps en sécurité ?", options: ["Asseoir la personne au bord du lit sans surveillance", "Tourner la personne en décubitus latéral et rouler le drap sale le long du dos avant de dérouler le propre", "Soulever entièrement la personne à bout de bras", "Retirer tout le linge d'un coup en tirant"], correct: 1,
    explication: "On installe la personne sur le côté (barrière opposée relevée), on enroule drap sale et propre dans le creux du dos, puis on tourne la personne de l'autre côté pour terminer. Cela évite de la lever et limite le cisaillement.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Dans quel ordre lave-t-on les zones du corps lors de la toilette ?", options: ["De la zone la plus sale vers la plus propre", "Du plus propre au plus sale, en terminant par la région génito-anale", "Sans ordre particulier", "Toujours par les pieds"], correct: 1,
    explication: "Le principe du plus propre au plus sale guide la toilette : visage en premier, région génito-anale en dernier, avec un gant/serviette dédiés pour le siège. Cela limite la contamination croisée.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Pourquoi l'AS observe-t-il la peau à chaque toilette et chaque change ?", options: ["Par simple habitude", "Parce qu'il est en première ligne pour repérer précocement une rougeur ou une escarre débutante", "Pour remplir un quota", "Ce n'est pas son rôle"], correct: 1,
    explication: "Voyant la peau à chaque soin, l'AS repère précocement les signes (rougeur ne blanchissant pas, macération, phlyctène) et les transmet. Le repérage précoce conditionne la réversibilité.", ref: "Référentiel DEAS bloc 1", diff: 1 }
];

export const flashcards = [
  { mod: "4", recto: "Pourquoi deux cuvettes lors d'une toilette au lit ?", verso: "Séparer le lavage du haut et du bas du corps, et changer l'eau souillée : principe du plus propre au plus sale." },
  { mod: "4", recto: "Pourquoi pas de talc dans les plis cutanés ?", verso: "Humidifié, il forme des grumeaux abrasifs et entretient la macération. On privilégie le séchage." },
  { mod: "4", recto: "Position de la tête anti-fausse route ?", verso: "Tête légèrement fléchie en avant, menton vers la poitrine. Jamais en extension arrière." },
  { mod: "4", recto: "Aide-mémoire des 4 réflexes anti-fausse route ?", verso: "ASSIS - PENCHÉ - PETIT - LENT : assis droit, tête penchée, petites bouchées, rythme lent." },
  { mod: "4", recto: "Qui décide de l'adaptation de texture (mixé, eau gélifiée) ?", verso: "L'équipe : médecin, IDE, orthophoniste, diététicien·ne. L'AS observe et alerte." },
  { mod: "4", recto: "Zones d'appui à risque en décubitus latéral ?", verso: "Trochanter (hanche), malléole (cheville), épaule, oreille, genou." },
  { mod: "4", recto: "Quels stades d'escarre du 1 au 4 ?", verso: "1 rougeur ne blanchissant pas ; 2 phlyctène/abrasion ; 3 atteinte sous-cutanée ; 4 muscle/tendon/os." },
  { mod: "4", recto: "Comment décharger les talons d'une personne alitée ?", verso: "Coussin sous les mollets pour faire flotter les talons (pas directement sous les talons)." },
  { mod: "4", recto: "Gestes proscrits sur une zone à risque d'escarre ?", verso: "Massage appuyé, application de chaud ou de froid. On supprime l'appui." },
  { mod: "4", recto: "D'où le soignant tire-t-il sa force en transfert ?", verso: "Des jambes : genoux fléchis, dos droit, pas de torsion du tronc." },
  { mod: "4", recto: "Vérification indispensable avant un transfert lit-fauteuil ?", verso: "Bloquer les freins du lit et du fauteuil ; sol sec, chaussures fermées." },
  { mod: "4", recto: "Matériel pour réhausser sans cisailler la peau ?", verso: "Drap ou alèse de glissement." },
  { mod: "4", recto: "Posture face à l'autonomie en mobilisation ?", verso: "Faire AVEC la personne en mobilisant ses capacités restantes, pas à sa place." },
  { mod: "4", recto: "Les barrières de lit comme contention relèvent de ?", verso: "Une décision d'équipe / prescription. L'AS applique et surveille." },
  { mod: "4", recto: "Pourquoi sécher les espaces entre les orteils ?", verso: "Prévenir la macération et les mycoses." },
  { mod: "4", recto: "Réfection d'un lit occupé : principe ?", verso: "Tourner la personne en décubitus latéral, rouler drap sale + propre dans le creux du dos, puis tourner de l'autre côté. On ne la lève pas." },
  { mod: "4", recto: "Ordre de lavage à la toilette ?", verso: "Du plus propre au plus sale : visage d'abord, région génito-anale en dernier (gant et serviette dédiés)." },
  { mod: "4", recto: "Zones d'appui en décubitus dorsal ?", verso: "Sacrum, talons, occiput, coudes, omoplates." },
  { mod: "4", recto: "Que faire devant une rougeur stade 1 ?", verso: "Supprimer l'appui (changer de position) et alerter l'IDE immédiatement. Plus c'est précoce, plus c'est réversible." }
];
