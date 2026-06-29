export const fiches = [
  { id: "fx_mod_5_plus_principes_prevention_tms", mod: "5", type: "cours",
    titre: "Prévention des TMS chez l'aide-soignant·e : les principes d'ergonomie", resume: "Comprendre les troubles musculo-squelettiques et appliquer les principes de prévention lors des manutentions.", tags: ["TMS","ergonomie","prévention","manutention","dos"],
    html: `<p>La manutention des personnes représente l'une des premières causes de <span class="key" data-term="TMS">troubles musculo-squelettiques (TMS)</span> et de lombalgies chez les soignant·e·s. Prévenir, c'est protéger à la fois le patient ET le professionnel.</p>
<h3>Qu'est-ce qu'un TMS ?</h3>
<p>Les <strong>TMS</strong> sont des atteintes des muscles, tendons, nerfs et articulations liées à des contraintes physiques répétées : efforts excessifs, postures contraignantes, gestes répétitifs, port de charges. Localisations fréquentes chez l'AS : <strong>rachis lombaire</strong> (lombalgie), épaule, poignet, genou.</p>
<div class="callout"><div class="callout-t">Facteurs de risque</div><ul>
<li><strong>Biomécaniques</strong> : torsion du tronc, flexion du dos, charge éloignée du corps, gestes répétés.</li>
<li><strong>Organisationnels</strong> : manque de temps, sous-effectif, locaux exigus.</li>
<li><strong>Psychosociaux</strong> : stress, absence de matériel adapté.</li>
</ul></div>
<h3>Les grands principes d'économie d'effort</h3>
<table class="tbl">
<tr><th>Principe</th><th>Application concrète</th></tr>
<tr><td>Garder le dos droit</td><td>Plier les genoux et les hanches, pas le dos. On utilise la force des cuisses.</td></tr>
<tr><td>Rapprocher la charge</td><td>Travailler au plus près du corps : le bras de levier diminue la contrainte lombaire.</td></tr>
<tr><td>Élargir le polygone de sustentation</td><td>Écarter les pieds (un devant, un derrière) pour stabiliser l'équilibre.</td></tr>
<tr><td>Verrouiller le rachis</td><td>Contracter les abdominaux (gainage) pour protéger les disques intervertébraux.</td></tr>
<tr><td>Éviter la torsion</td><td>Pivoter avec les pieds plutôt que de tourner le tronc.</td></tr>
<tr><td>Régler le plan de travail</td><td>Monter le lit à hauteur des hanches avant tout soin.</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : « D.O.S. »</div><p><strong>D</strong>os droit · <strong>O</strong>bjet (ou personne) près de soi · <strong>S</strong>tabilité des appuis (pieds écartés).</p></div>
<h3>La règle d'or : ne jamais soulever, faire glisser</h3>
<p>On privilégie le <strong>glissement</strong>, le <strong>roulement</strong> et le <strong>pivotement</strong> plutôt que le portage. Le mouvement naturel de la personne est exploité au maximum (relever la tête, plier les genoux, pousser sur les talons).</p>
<div class="callout"><div class="callout-t">Avant chaque manutention</div><ul>
<li>Évaluer les capacités de la personne (peut-elle participer ?).</li>
<li>Vérifier le matériel (freins du lit/fauteuil, hauteur, aides techniques).</li>
<li>Informer et obtenir la coopération de la personne.</li>
<li>Se positionner et anticiper le trajet.</li>
</ul></div>
<p>La démarche de référence en France est <span class="key" data-term="PRAP">PRAP 2S</span> (Prévention des Risques liés à l'Activité Physique, secteur Sanitaire et Social) et la méthode <span class="key" data-term="ALM">ALM</span> (Accompagnement à la Mobilité), qui visent à rendre la personne actrice de son déplacement.</p>`,
    refs: ["DEAS arrêté 10 juin 2021 - Bloc 1 / Module 5","INRS - Prévention des TMS dans le secteur sanitaire et social","Démarche PRAP 2S (INRS)"] },

  { id: "fx_mod_5_plus_transferts_et_techniques", mod: "5", type: "cours",
    titre: "Transferts et mobilisations : techniques sécurisées", resume: "Réaliser les principaux transferts en sécurité, en favorisant la participation de la personne.", tags: ["transfert","lit-fauteuil","rehaussement","mobilisation","sécurité"],
    html: `<p>Un <span class="key" data-term="transfert">transfert</span> est le passage de la personne d'une surface à une autre (lit vers fauteuil, fauteuil vers WC...). Il s'anticipe, se prépare et se réalise en exploitant les ressources de la personne.</p>
<h3>Évaluer avant d'agir</h3>
<p>L'AS apprécie le niveau d'autonomie : la personne est-elle <strong>autonome</strong>, <strong>semi-autonome</strong> (participe partiellement) ou <strong>dépendante</strong> (transfert passif) ? Cette évaluation conditionne le choix de la technique et du matériel.</p>
<table class="tbl">
<tr><th>Niveau</th><th>Aide apportée</th><th>Matériel possible</th></tr>
<tr><td>Autonome</td><td>Surveillance, sécurisation</td><td>Barre d'appui, canne</td></tr>
<tr><td>Semi-autonome</td><td>Guidage, soutien partiel</td><td>Disque de transfert, planche, guidon de transfert</td></tr>
<tr><td>Dépendant·e</td><td>Transfert assuré par le matériel</td><td>Lève-personne, drap de glisse</td></tr>
</table>
<h3>Le rehaussement au lit</h3>
<p>Pour remonter une personne glissée vers le pied du lit : à <strong>deux soignant·e·s</strong> de préférence, lit à plat et à hauteur des hanches, drap de glisse ou alèse de transfert sous le siège. On demande à la personne de fléchir les genoux et de pousser sur ses talons si elle le peut. Mouvement de glissement coordonné (compte à voix haute), jamais de soulèvement par les aisselles.</p>
<div class="callout"><div class="callout-t">À proscrire</div><ul>
<li>Tirer la personne par les bras ou sous les aisselles (risque de luxation d'épaule, douleur).</li>
<li>Manutention à dos courbé et en torsion.</li>
<li>Transfert sans avoir freiné lit et fauteuil.</li>
</ul></div>
<h3>Transfert lit vers fauteuil (personne semi-autonome)</h3>
<ul>
<li>Positionner le fauteuil freiné, du côté le plus solide de la personne, à un angle de 30 à 45 degrés.</li>
<li>Asseoir la personne au bord du lit (passage en position assise jambes pendantes), vérifier l'absence de vertige.</li>
<li>Pieds de la personne bien à plat, soignant·e face à elle, genoux fléchis, prise au niveau du bassin/ceinture (jamais le cou ni les aisselles).</li>
<li>Bascule du poids vers l'avant, pivotement par les pieds, descente contrôlée dans le fauteuil.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : « FREINS »</div><p><strong>F</strong>reins vérifiés · <strong>R</strong>essources de la personne · <strong>E</strong>nvironnement dégagé · <strong>I</strong>nformer/coopérer · <strong>N</strong>iveau du lit réglé · <strong>S</strong>écuriser (chaussures, sol sec).</p></div>
<div class="callout"><div class="callout-t">Confort et observation</div><p>Pendant et après le transfert, l'AS observe : douleur, pâleur, malaise, état cutané (points d'appui), bonne installation. Toute anomalie est transmise oralement et tracée. Le geste de mobilisation est aussi un temps d'évaluation et de relation.</p></div>`,
    refs: ["DEAS arrêté 10 juin 2021 - Module 5","HAS - Mobilisation et prévention des chutes","Référentiel AS - mobilisation et installation"] },

  { id: "fx_mod_5_plus_aides_techniques", mod: "5", type: "cours",
    titre: "Aides techniques : lève-personne et drap de glisse", resume: "Utiliser en sécurité le lève-personne et le drap de glisse pour les transferts.", tags: ["lève-personne","drap-de-glisse","aide-technique","sangle","verticalisateur"],
    html: `<p>Les aides techniques réduisent fortement la charge physique du soignant et augmentent la sécurité de la personne. Leur usage relève des compétences de l'AS dans le cadre du rôle propre et des protocoles de l'établissement.</p>
<h3>Le lève-personne (lève-malade)</h3>
<p>Le <span class="key" data-term="lève-personne">lève-personne</span> est un appareil mécanique ou électrique qui soulève une personne <strong>très dépendante</strong> à l'aide d'une <strong>sangle</strong> (ou hamac). Il est indiqué pour les transferts passifs (lit-fauteuil, sol-lit après chute, vers la baignoire).</p>
<table class="tbl">
<tr><th>Étape</th><th>Point de vigilance</th></tr>
<tr><td>Choisir la sangle</td><td>Taille adaptée à la personne, en bon état (coutures, sangles non effilochées).</td></tr>
<tr><td>Installer la sangle</td><td>Positionnée correctement (dos, cuisses) en roulant la personne sur le côté ; jamais sous les seules aisselles.</td></tr>
<tr><td>Accrocher</td><td>Vérifier tous les points d'attache aux crochets avant tout levage.</td></tr>
<tr><td>Lever</td><td>Soulever doucement, rester à proximité, rassurer ; bras croisés de la personne sur sa poitrine.</td></tr>
<tr><td>Déplacer / descendre</td><td>Roues débloquées pour rouler, freinées pour le levage. Descente lente et accompagnée.</td></tr>
</table>
<div class="callout"><div class="callout-t">Sécurité du lève-personne</div><ul>
<li>Toujours vérifier la <strong>charge maximale</strong> de l'appareil et la <strong>batterie</strong> (modèle électrique).</li>
<li>Personne TOUJOURS surveillée pendant la suspension ; ne jamais s'éloigner.</li>
<li>À deux soignant·e·s recommandé pour sécuriser et rassurer.</li>
<li>Vérifier le <strong>verrouillage</strong> des sangles : c'est la cause n°1 d'incidents.</li>
</ul></div>
<p>Le <strong>verticalisateur</strong> (lève-personne actif) est une variante : la personne doit pouvoir s'appuyer sur ses jambes et garder un minimum de tonus du tronc. Il sert aux transferts assis-debout et stimule les capacités restantes.</p>
<h3>Le drap de glisse</h3>
<p>Le <span class="key" data-term="drap de glisse">drap de glisse</span> est un tissu à très faible coefficient de friction (souvent en double épaisseur formant un tube) qui permet de <strong>déplacer la personne sans la soulever</strong> : rehaussement, retournement, translation lit-brancard.</p>
<ul>
<li>Réduit l'effort de glissement et le cisaillement cutané (prévention des escarres).</li>
<li>Se place sous la personne par retournement latéral.</li>
<li>Se retire après usage (un drap de glisse ne reste pas sous la personne en continu).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : choisir l'aide</div><p><strong>Soulever</strong> une personne passive = lève-personne. <strong>Glisser</strong> une personne sur un plan = drap de glisse. <strong>Faire lever debout</strong> = verticalisateur.</p></div>
<div class="callout"><div class="callout-t">Hygiène et entretien</div><p>Sangles et draps de glisse sont, selon les protocoles, à usage individuel ou décontaminés entre patients (bionettoyage). On vérifie l'état du matériel avant chaque usage et on signale tout défaut. La maintenance des appareils relève d'un contrôle technique périodique réglementaire.</p></div>`,
    refs: ["DEAS arrêté 10 juin 2021 - Module 5","INRS - Aides techniques à la manutention des personnes","Recommandations bionettoyage du matériel partagé"] },
];

export const qcm = [
  { mod: "5", q: "Que signifie l'abréviation TMS ?", options: ["Trouble Moteur Sévère","Trouble Musculo-Squelettique","Technique de Manutention Sécurisée","Transfert Mécanisé Standard"], correct: 1,
    explication: "Les TMS (Troubles Musculo-Squelettiques) touchent muscles, tendons, nerfs et articulations. Ils constituent la première cause de maladie professionnelle reconnue dans le secteur du soin, notamment les lombalgies.", ref: "INRS - TMS secteur sanitaire et social", diff: 1 },

  { mod: "5", q: "Lors d'un effort de manutention, quel est le bon positionnement du dos ?", options: ["Dos courbé pour rapprocher la charge","Dos droit, en pliant les genoux","Dos en torsion pour pivoter vite","Peu importe si l'effort est bref"], correct: 1,
    explication: "On garde le dos droit (rachis verrouillé par le gainage abdominal) et on plie les genoux pour utiliser la force des cuisses. La flexion et la torsion du rachis lombaire sont les principaux facteurs de lombalgie.", ref: "PRAP 2S - principes d'économie d'effort", diff: 1 },

  { mod: "5", q: "Pourquoi faut-il rapprocher la charge (ou la personne) de son corps ?", options: ["Pour aller plus vite","Pour diminuer le bras de levier et la contrainte lombaire","Pour des raisons d'hygiène","Cela n'a aucune importance"], correct: 1,
    explication: "Plus la charge est éloignée du tronc, plus le bras de levier augmente et plus la contrainte sur les disques intervertébraux lombaires est grande. Travailler au plus près du corps protège le rachis.", ref: "PRAP 2S - biomécanique du rachis", diff: 2 },

  { mod: "5", q: "Avant un transfert lit-fauteuil, quel élément de sécurité est indispensable ?", options: ["Baisser le lit au plus bas","Vérifier que les freins du lit ET du fauteuil sont bloqués","Retirer les barrières","Allonger la personne complètement"], correct: 1,
    explication: "Le freinage du lit et du fauteuil évite que les surfaces ne se dérobent pendant le transfert, ce qui provoquerait une chute. C'est un préalable systématique avant toute mobilisation.", ref: "HAS - prévention des chutes / mobilisation", diff: 1 },

  { mod: "5", q: "Pour relever ou rehausser une personne dans son lit, que ne faut-il JAMAIS faire ?", options: ["Mettre le lit à plat","La tirer par les bras ou sous les aisselles","Lui demander de plier les genoux","Utiliser un drap de glisse"], correct: 1,
    explication: "Tirer une personne par les bras ou sous les aisselles expose à une luxation d'épaule et à des douleurs. On privilégie le glissement avec une aide technique et la participation de la personne (pousser sur les talons).", ref: "Référentiel AS - mobilisation", diff: 1 },

  { mod: "5", q: "À quoi sert principalement un drap de glisse ?", options: ["À soulever une personne dans les airs","À déplacer une personne sans la soulever","À immobiliser une personne agitée","À protéger le lit de l'incontinence"], correct: 1,
    explication: "Le drap de glisse a un très faible coefficient de friction : il permet de faire glisser la personne (rehaussement, retournement, translation lit-brancard) sans portage, réduisant l'effort du soignant et le cisaillement cutané.", ref: "INRS - aides techniques à la manutention", diff: 1 },

  { mod: "5", q: "Le lève-personne est principalement indiqué pour :", options: ["Une personne autonome qui marche seule","Une personne très dépendante lors d'un transfert passif","Une personne qui refuse de se lever","Toute personne, systématiquement"], correct: 1,
    explication: "Le lève-personne soulève une personne très dépendante, incapable de participer au transfert (transfert passif). Pour une personne pouvant s'appuyer sur ses jambes, on préfère un verticalisateur qui stimule ses capacités.", ref: "INRS - manutention des personnes", diff: 2 },

  { mod: "5", q: "Quelle est la cause la plus fréquente d'incident avec un lève-personne ?", options: ["Une batterie trop pleine","Un mauvais verrouillage / accrochage des sangles","Un sol trop propre","Une personne trop coopérante"], correct: 1,
    explication: "Le défaut de vérification de l'accrochage et du verrouillage des sangles aux crochets est la principale cause de chute lors du levage. On contrôle systématiquement tous les points d'attache avant de soulever.", ref: "INRS - sécurité d'usage des lève-personnes", diff: 2 },

  { mod: "5", q: "La différence entre un lève-personne classique et un verticalisateur est que le verticalisateur :", options: ["Ne nécessite aucune participation","Exige que la personne puisse prendre appui sur ses jambes","Est réservé aux enfants","Fonctionne sans électricité uniquement"], correct: 1,
    explication: "Le verticalisateur (lève-personne actif) demande à la personne de s'appuyer sur ses jambes et de garder un minimum de tonus du tronc. Il favorise les transferts assis-debout et stimule les capacités restantes.", ref: "INRS - aides techniques", diff: 2 },

  { mod: "5", q: "Pour élargir son polygone de sustentation lors d'une manutention, l'AS doit :", options: ["Rapprocher ses pieds l'un de l'autre","Écarter les pieds, un devant un derrière","Se mettre sur la pointe des pieds","Croiser les jambes"], correct: 1,
    explication: "Écarter les pieds (souvent un en avant, un en arrière) agrandit la surface d'appui au sol (polygone de sustentation) et améliore l'équilibre et la stabilité pendant l'effort.", ref: "PRAP 2S - équilibre et stabilité", diff: 1 },

  { mod: "5", q: "Pendant qu'une personne est suspendue dans le lève-personne, l'AS doit :", options: ["S'éloigner pour préparer le fauteuil","Rester à proximité et la surveiller en permanence","Lui demander de se débrouiller","Bloquer toutes les roues pour rouler"], correct: 1,
    explication: "On ne quitte jamais une personne suspendue : surveillance et présence rassurante sont obligatoires. Les roues sont freinées pendant le levage, mais débloquées pour rouler ; à deux soignants c'est plus sûr.", ref: "INRS - sécurité lève-personne", diff: 1 },

  { mod: "5", q: "Quel mouvement faut-il éviter pour protéger son rachis lombaire ?", options: ["Pivoter en déplaçant les pieds","Tourner le tronc en torsion","Plier les genoux","Contracter les abdominaux"], correct: 1,
    explication: "La torsion du tronc (rotation du rachis sous charge) est très délétère pour les disques intervertébraux. On pivote en déplaçant les pieds, le tronc et le bassin alignés.", ref: "PRAP 2S - biomécanique", diff: 1 },

  { mod: "5", q: "Avant de mobiliser une personne, l'AS doit d'abord :", options: ["Appeler l'IDE systématiquement","Évaluer ses capacités et obtenir sa coopération","Lui donner un médicament","Fermer la porte à clé"], correct: 1,
    explication: "L'évaluation des capacités (autonome, semi-autonome, dépendante) et l'information/coopération de la personne conditionnent le choix de la technique. La personne est rendue actrice de son déplacement (approche ALM/PRAP).", ref: "Démarche ALM - mobilité", diff: 2 },

  { mod: "5", q: "À quelle hauteur régler le lit avant un soin ou une manutention au lit ?", options: ["Le plus bas possible","À hauteur des hanches du soignant","À hauteur des épaules","Peu importe"], correct: 1,
    explication: "Régler le plan de travail à hauteur des hanches évite de se pencher (flexion du dos) et préserve le rachis. C'est un principe d'ergonomie fondamental avant tout soin au lit.", ref: "PRAP 2S - réglage du plan de travail", diff: 1 },

  { mod: "5", q: "Lors d'un transfert lit-fauteuil, où l'AS doit-elle placer ses mains sur la personne ?", options: ["Autour du cou","Sous les aisselles uniquement","Au niveau du bassin / de la ceinture","Sur les poignets"], correct: 2,
    explication: "La prise au niveau du bassin ou de la ceinture (parfois ceinture de transfert) est sûre et efficace. La prise au cou ou sous les aisselles est dangereuse (douleur, luxation, strangulation).", ref: "Référentiel AS - transferts", diff: 2 },

  { mod: "5", q: "Le drap de glisse contribue à prévenir les escarres parce qu'il :", options: ["Réchauffe la peau","Réduit le cisaillement cutané lors des déplacements","Désinfecte la peau","Hydrate la peau"], correct: 1,
    explication: "En supprimant la friction et le cisaillement lors des rehaussements et retournements, le drap de glisse protège la peau fragile des forces de cisaillement, qui sont un facteur d'escarre.", ref: "HAS - prévention des escarres", diff: 2 },

  { mod: "5", q: "Que doit faire l'AS d'un drap de glisse après le déplacement de la personne ?", options: ["Le laisser sous la personne en permanence","Le retirer après usage","Le jeter systématiquement","Le mettre sous l'oreiller"], correct: 1,
    explication: "Le drap de glisse se retire après le déplacement : laissé sous la personne, il favoriserait des glissements involontaires et de l'instabilité. C'est une aide ponctuelle, pas un dispositif permanent.", ref: "INRS - usage des draps de glisse", diff: 2 },

  { mod: "5", q: "Lequel de ces gestes relève de l'IDE et non de l'AS lors de la mobilisation ?", options: ["Installer confortablement la personne","Observer l'état cutané","La pose ou la dépose d'une attelle plâtrée prescrite","Transmettre une douleur observée"], correct: 2,
    explication: "L'AS installe, mobilise, observe et transmet (rôle propre / collaboration). La pose d'un dispositif d'immobilisation sur prescription relève de l'IDE ou du médecin. L'AS peut surveiller le dispositif et signaler les anomalies.", ref: "DEAS - répartition des rôles AS/IDE", diff: 3 },

  { mod: "5", q: "Avant un transfert, après avoir assis la personne au bord du lit, l'AS doit vérifier :", options: ["La couleur des murs","L'absence de vertige ou de malaise orthostatique","La marque du fauteuil","L'heure du repas"], correct: 1,
    explication: "Le passage en position assise puis debout peut provoquer une hypotension orthostatique (vertige, pâleur, malaise). On marque un temps d'observation jambes pendantes avant de poursuivre le transfert.", ref: "HAS - prévention des chutes", diff: 2 },

  { mod: "5", q: "Concernant l'entretien des sangles et draps de glisse, l'AS doit :", options: ["Les utiliser sans jamais les vérifier","Contrôler leur état avant chaque usage et signaler tout défaut","Les utiliser même s'ils sont effilochés","Décider seule de la maintenance technique de l'appareil"], correct: 1,
    explication: "L'AS vérifie l'intégrité du matériel (coutures, sangles, crochets) avant chaque usage et signale tout défaut. Le matériel partagé est décontaminé selon les protocoles. La maintenance technique périodique relève d'un contrôle réglementaire spécialisé.", ref: "INRS - vérification du matériel de manutention", diff: 2 },

  { mod: "5", q: "Quelle démarche de prévention vise à rendre la personne actrice de son déplacement ?", options: ["Le portage systématique","L'Accompagnement à la Mobilité (ALM)","L'immobilisation préventive","Le repos strict au lit"], correct: 1,
    explication: "La méthode ALM (Accompagnement à la Mobilité), associée à la démarche PRAP 2S, exploite les capacités restantes de la personne pour la rendre actrice de son déplacement, réduisant l'effort du soignant et préservant l'autonomie.", ref: "INRS - démarche ALM / PRAP 2S", diff: 3 },
];

export const flashcards = [
  { mod: "5", recto: "Que signifie TMS ?", verso: "Trouble Musculo-Squelettique : atteinte des muscles, tendons, nerfs et articulations liée aux contraintes physiques répétées." },
  { mod: "5", recto: "Quel est le geste de référence : soulever ou glisser ?", verso: "Faire glisser (ou rouler, pivoter) plutôt que soulever, en exploitant les capacités de la personne." },
  { mod: "5", recto: "Comment protéger son dos lors d'un effort ?", verso: "Garder le dos droit, plier les genoux, gainer les abdominaux, rapprocher la charge du corps." },
  { mod: "5", recto: "Pourquoi rapprocher la charge de son corps ?", verso: "Pour réduire le bras de levier et donc la contrainte sur les disques lombaires." },
  { mod: "5", recto: "Que faut-il toujours vérifier avant un transfert lit-fauteuil ?", verso: "Que les freins du lit ET du fauteuil sont bloqués, et la hauteur du lit réglée." },
  { mod: "5", recto: "Où NE PAS saisir une personne lors d'un transfert ?", verso: "Ni au cou ni sous les aisselles : prise au bassin / à la ceinture." },
  { mod: "5", recto: "À quoi sert le drap de glisse ?", verso: "À déplacer la personne sans la soulever (rehaussement, retournement, translation), en réduisant friction et cisaillement." },
  { mod: "5", recto: "Pour qui est indiqué le lève-personne ?", verso: "Une personne très dépendante, lors d'un transfert passif." },
  { mod: "5", recto: "Quelle est la cause n°1 d'incident avec un lève-personne ?", verso: "Le mauvais accrochage / verrouillage des sangles. On vérifie tous les points d'attache avant de lever." },
  { mod: "5", recto: "Différence lève-personne / verticalisateur ?", verso: "Le verticalisateur exige que la personne prenne appui sur ses jambes (transfert actif assis-debout)." },
  { mod: "5", recto: "Que surveiller quand une personne est suspendue au lève-personne ?", verso: "Rester à proximité et la surveiller en permanence ; ne jamais s'éloigner." },
  { mod: "5", recto: "Quel mouvement du tronc faut-il éviter ?", verso: "La torsion (rotation) sous charge ; on pivote en déplaçant les pieds." },
  { mod: "5", recto: "À quelle hauteur régler le lit avant un soin ?", verso: "À hauteur des hanches du soignant pour éviter de se pencher." },
  { mod: "5", recto: "Que faire du drap de glisse après le déplacement ?", verso: "Le retirer : il ne reste pas en permanence sous la personne." },
  { mod: "5", recto: "Que signifie la démarche PRAP 2S / ALM ?", verso: "Prévention des Risques liés à l'Activité Physique et Accompagnement à la Mobilité : rendre la personne actrice de son déplacement." },
];
