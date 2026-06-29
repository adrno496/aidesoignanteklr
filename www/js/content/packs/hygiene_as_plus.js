export const fiches = [
  {
    id: "fx_hygiene_as_plus_precautions",
    mod: "8",
    type: "cours",
    titre: "Précautions standard et complémentaires : la logique en chaîne",
    resume: "Comprendre l'articulation entre précautions standard (toujours) et complémentaires (selon l'agent et sa transmission).",
    tags: ["precautions", "isolement", "transmission"],
    html: `<p>L'hygiène hospitalière repose sur deux niveaux qui s'<strong>additionnent</strong> : les <span class="key" data-term="precautions standard">précautions standard</span> s'appliquent <strong>en permanence, pour tous les patients</strong>, quel que soit leur statut infectieux connu ou non. Les <span class="key" data-term="precautions complementaires">précautions complémentaires</span> s'y <strong>ajoutent</strong> (elles ne les remplacent jamais) quand un agent infectieux particulier est suspecté ou confirmé.</p>
<h3>Les précautions standard : le socle</h3>
<ul>
<li><strong>Hygiène des mains</strong> avant et après tout contact patient.</li>
<li><strong>Port de gants</strong> au contact de sang, liquides biologiques, muqueuses, peau lésée.</li>
<li><strong>Tablier / surblouse</strong> si risque de projection ou de souillure de la tenue.</li>
<li><strong>Masque + lunettes</strong> si risque de projection au visage.</li>
<li><strong>Gestion des excreta</strong> sans éclaboussure, et <strong>tri du linge et des déchets</strong> au plus près du soin.</li>
<li><strong>Prévention des AES</strong> (accidents d'exposition au sang) : ne jamais recapuchonner, collecteur à portée de main.</li>
</ul>
<h3>Les trois types de précautions complémentaires</h3>
<table class="tbl">
<tr><th>Type</th><th>Sigle</th><th>Mode de transmission</th><th>EPI clé en plus</th></tr>
<tr><td>Contact</td><td>PCC</td><td>Mains, surfaces, matériel</td><td>Gants + tablier/surblouse</td></tr>
<tr><td>Gouttelettes</td><td>PCG</td><td>Sécrétions respiratoires &gt; 5 µm, &lt; 1-2 m</td><td>Masque chirurgical</td></tr>
<tr><td>Air</td><td>PCA</td><td>Particules &lt; 5 µm en suspension prolongée</td><td>Appareil de protection respiratoire (FFP2)</td></tr>
</table>
<div class="callout"><div class="callout-t">Rôle de l'aide-soignant·e</div>L'AS applique et fait respecter les précautions, prépare la chambre, signale les ruptures de stock d'EPI, organise le matériel dédié et participe au bionettoyage renforcé. La <strong>prescription</strong> de la mise en isolement relève du médecin ; sa <strong>levée</strong> aussi.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« CGA »</strong> = Contact (gants), Gouttelettes (chirurgical), Air (FFP2). Plus la particule est petite (A), plus le masque doit filtrer fin.</div>
<p>Une <span class="key" data-term="signalisation">signalisation</span> claire à l'entrée de la chambre (logo couleur, pictogramme) informe sans jamais nommer le germe, pour respecter le <strong>secret professionnel</strong>.</p>`,
    refs: ["SF2H, Précautions standard 2017", "Arrêté du 10 juin 2021 relatif au DEAS, module 8"]
  },
  {
    id: "fx_hygiene_as_plus_mains_epi",
    mod: "8",
    type: "cours",
    titre: "Hygiène des mains et habillage/déshabillage des EPI",
    resume: "Maîtriser les indications de l'hygiène des mains et l'ordre sécurisé de retrait des EPI.",
    tags: ["hygiene-mains", "EPI", "friction"],
    html: `<p>L'hygiène des mains est la mesure la plus efficace pour rompre la <span class="key" data-term="transmission croisee">transmission croisée</span>. La <span class="key" data-term="friction hydroalcoolique">friction hydro-alcoolique</span> (FHA) est la technique de référence : plus rapide, mieux tolérée et plus efficace que le lavage simple sur mains <strong>non souillées et sèches</strong>.</p>
<h3>Quand pratiquer l'hygiène des mains : les 5 indications</h3>
<ul>
<li>Avant de toucher un patient.</li>
<li>Avant un geste propre ou aseptique.</li>
<li>Après un risque d'exposition à un liquide biologique.</li>
<li>Après avoir touché un patient.</li>
<li>Après contact avec l'environnement du patient.</li>
</ul>
<div class="callout"><div class="callout-t">FHA ou lavage ?</div>On <strong>lave</strong> les mains à l'eau et au savon (et non par FHA) quand elles sont <strong>visiblement souillées</strong>, après passage aux toilettes, et en cas de germes résistant à l'alcool comme <strong>Clostridioides difficile</strong> (spores) et la gale. La FHA reste la règle dans tous les autres cas.</div>
<h3>Pré-requis d'efficacité</h3>
<ul>
<li>Mains et avant-bras <strong>sans bijou</strong>, ni montre, ni alliance.</li>
<li><strong>Ongles courts</strong>, sans vernis ni faux ongles.</li>
<li>Manches courtes (« tenue mains nues sous le coude »).</li>
</ul>
<h3>Ordre d'habillage et de déshabillage des EPI</h3>
<table class="tbl">
<tr><th>Habillage (mettre)</th><th>Déshabillage (retirer)</th></tr>
<tr><td>1. Hygiène des mains</td><td>1. Gants</td></tr>
<tr><td>2. Surblouse / tablier</td><td>2. Hygiène des mains</td></tr>
<tr><td>3. Masque</td><td>3. Surblouse / tablier</td></tr>
<tr><td>4. Lunettes</td><td>4. Lunettes puis masque</td></tr>
<tr><td>5. Gants (par-dessus les manches)</td><td>5. Hygiène des mains</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>On retire <strong>du plus sale au plus propre</strong> : les <strong>gants d'abord</strong> (les plus contaminés), le <strong>masque en dernier</strong> (zone de protection respiratoire), et on encadre par une hygiène des mains.</div>
<p>Le masque se retire <strong>par les élastiques</strong>, jamais par la partie filtrante. On ne touche jamais l'avant d'un EPI considéré contaminé.</p>`,
    refs: ["OMS, Mes 5 indications à l'hygiène des mains", "SF2H, recommandations friction hydro-alcoolique"]
  },
  {
    id: "fx_hygiene_as_plus_bmr_bhre",
    mod: "8",
    type: "cours",
    titre: "BMR et BHRe : enjeux et conduite de l'aide-soignant·e",
    resume: "Distinguer BMR et BHRe et appliquer les mesures de prévention dans le rôle AS.",
    tags: ["BMR", "BHRe", "isolement"],
    html: `<p>Les <span class="key" data-term="BMR">BMR</span> (bactéries multi-résistantes) résistent à plusieurs familles d'antibiotiques mais gardent des options de traitement ; exemples classiques : <strong>SARM</strong> (staphylocoque doré résistant à la méticilline) et <strong>EBLSE</strong> (entérobactérie produisant une bêta-lactamase à spectre étendu).</p>
<p>Les <span class="key" data-term="BHRe">BHRe</span> (bactéries hautement résistantes émergentes) sont bien plus préoccupantes : très peu, voire plus, d'antibiotiques efficaces. On y trouve les <strong>EPC</strong> (entérobactéries productrices de carbapénémases) et les <strong>ERG</strong> (entérocoques résistants aux glycopeptides / vancomycine).</p>
<table class="tbl">
<tr><th></th><th>BMR</th><th>BHRe</th></tr>
<tr><td>Résistance</td><td>Multiple, options restantes</td><td>Quasi totale, urgence de santé publique</td></tr>
<tr><td>Réservoir</td><td>Patient, soignant, environnement</td><td>Surtout tube digestif</td></tr>
<tr><td>Mesures</td><td>Précautions contact</td><td>Contact renforcé + dépistage entourage + parfois personnel dédié</td></tr>
</table>
<div class="callout"><div class="callout-t">Dépistage</div>Le portage se recherche souvent par <strong>écouvillonnage rectal</strong> chez les patients à risque (hospitalisation à l'étranger dans l'année). L'AS aide à l'installation et au confort du patient ; le prélèvement relève de l'IDE et l'analyse du laboratoire.</div>
<h3>Au quotidien, l'AS</h3>
<ul>
<li>Applique les <strong>précautions complémentaires contact</strong> : gants + surblouse à chaque entrée de soin.</li>
<li>Dédie au patient le <strong>matériel</strong> (tensiomètre, thermomètre, brassard).</li>
<li>Renforce le <strong>bionettoyage</strong> des surfaces et points de contact (poignées, barrières, adaptable).</li>
<li>Veille à la <strong>gestion rigoureuse des excreta</strong>, principal vecteur des BHRe digestives.</li>
<li><strong>Transmet</strong> tout incident (rupture d'isolement, fuite de selles) et organise un <strong>regroupement géographique</strong> si décidé par l'équipe.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>BHRe = « Beaucoup d'Hôpital, Résistance extrême »</strong> : émergentes, surtout digestives, mesures renforcées avec dépistage de l'entourage.</div>`,
    refs: ["HCSP, prévention de la transmission des BHRe 2019", "SF2H, maîtrise de la diffusion des BMR"]
  }
];

export const qcm = [
  {
    mod: "8",
    q: "À qui s'appliquent les précautions standard ?",
    options: ["Aux seuls patients porteurs d'une BMR", "À tous les patients, en permanence", "Uniquement en réanimation", "Seulement en cas de germe confirmé"],
    correct: 1,
    explication: "Les précautions standard s'appliquent à TOUS les patients, en toutes circonstances, quel que soit leur statut infectieux connu ou non. Elles constituent le socle auquel s'ajoutent éventuellement les précautions complémentaires.",
    ref: "SF2H, Précautions standard 2017",
    diff: 1
  },
  {
    mod: "8",
    q: "Les précautions complémentaires :",
    options: ["Remplacent les précautions standard", "S'ajoutent aux précautions standard", "Sont décidées par l'aide-soignant", "Concernent uniquement les visiteurs"],
    correct: 1,
    explication: "Les précautions complémentaires ne remplacent jamais les précautions standard : elles s'y additionnent. Leur mise en place relève d'une prescription médicale.",
    ref: "SF2H, Précautions standard 2017",
    diff: 1
  },
  {
    mod: "8",
    q: "Quel EPI clé caractérise les précautions complémentaires gouttelettes ?",
    options: ["Le masque FFP2", "Le masque chirurgical", "Les lunettes seules", "La surblouse stérile"],
    correct: 1,
    explication: "Les gouttelettes (> 5 µm) tombent à courte distance (1 à 2 m) : un masque chirurgical suffit. Le FFP2 est réservé à la transmission par voie aérienne (particules < 5 µm).",
    ref: "SF2H, précautions complémentaires gouttelettes",
    diff: 1
  },
  {
    mod: "8",
    q: "Pour les précautions complémentaires AIR (ex. tuberculose pulmonaire bacillifère), le soignant porte :",
    options: ["Un masque chirurgical", "Un appareil de protection respiratoire FFP2", "Aucun masque", "Uniquement des gants"],
    correct: 1,
    explication: "La transmission aérienne implique de très fines particules restant longtemps en suspension : seul un appareil de protection respiratoire de type FFP2, ajusté, filtre efficacement.",
    ref: "SF2H, précautions complémentaires air",
    diff: 2
  },
  {
    mod: "8",
    q: "Parmi les 5 indications de l'hygiène des mains, laquelle est correcte ?",
    options: ["Une seule fois en début de service", "Après contact avec l'environnement du patient", "Seulement si les mains sont sales", "Uniquement avant le repas du patient"],
    correct: 1,
    explication: "Les 5 indications incluent : avant de toucher le patient, avant un geste aseptique, après risque d'exposition, après avoir touché le patient, et après contact avec son environnement.",
    ref: "OMS, Mes 5 indications à l'hygiène des mains",
    diff: 1
  },
  {
    mod: "8",
    q: "Dans quel cas faut-il LAVER les mains à l'eau et au savon plutôt qu'une friction hydro-alcoolique ?",
    options: ["Mains visiblement souillées", "Mains propres et sèches", "Avant de toucher un patient", "Toujours, en routine"],
    correct: 0,
    explication: "La friction hydro-alcoolique est la technique de référence sur mains propres et sèches. Le lavage à l'eau et au savon s'impose quand les mains sont visiblement souillées, après les toilettes, et pour certains germes (C. difficile, gale).",
    ref: "SF2H, recommandations friction hydro-alcoolique",
    diff: 2
  },
  {
    mod: "8",
    q: "Face à un patient atteint d'infection à Clostridioides difficile, l'hygiène des mains recommandée est :",
    options: ["Friction hydro-alcoolique seule", "Lavage à l'eau et au savon", "Aucune mesure particulière", "Gel parfumé"],
    correct: 1,
    explication: "Les spores de C. difficile résistent à l'alcool. La friction hydro-alcoolique est inefficace sur les spores : un lavage mécanique à l'eau et au savon est nécessaire pour les éliminer.",
    ref: "SF2H, prévention des infections à C. difficile",
    diff: 3
  },
  {
    mod: "8",
    q: "Dans quel ordre retire-t-on les EPI en sortie de chambre ?",
    options: ["Masque, gants, surblouse", "Gants, hygiène des mains, surblouse, masque", "Surblouse, masque, gants", "Lunettes, gants, masque sans hygiène des mains"],
    correct: 1,
    explication: "On retire du plus sale au plus propre : gants d'abord (les plus contaminés), puis hygiène des mains, surblouse, lunettes, et enfin le masque (zone respiratoire) ; on termine par une hygiène des mains.",
    ref: "SF2H, habillage/déshabillage des EPI",
    diff: 2
  },
  {
    mod: "8",
    q: "Comment retire-t-on un masque correctement ?",
    options: ["En le saisissant par la partie filtrante", "Par les élastiques, sans toucher l'avant", "En soufflant dessus", "En le glissant sous le menton pour le réutiliser"],
    correct: 1,
    explication: "L'avant du masque est considéré contaminé. On le retire par les élastiques ou les attaches, sans toucher la partie filtrante, puis on le jette et on réalise une hygiène des mains.",
    ref: "SF2H, port et retrait du masque",
    diff: 1
  },
  {
    mod: "8",
    q: "Quel pré-requis est indispensable à l'efficacité de l'hygiène des mains ?",
    options: ["Porter une alliance discrète", "Avoir des ongles courts, sans vernis ni faux ongles", "Garder sa montre", "Avoir les manches longues baissées"],
    correct: 1,
    explication: "Bijoux, montre, alliance, vernis et faux ongles abritent des micro-organismes et empêchent une friction efficace. La tenue 'mains nues sous le coude' avec ongles courts est requise.",
    ref: "SF2H, recommandations hygiène des mains",
    diff: 1
  },
  {
    mod: "8",
    q: "Que signifie l'acronyme BMR ?",
    options: ["Bactérie moyennement résistante", "Bactérie multi-résistante", "Bonne mesure de réanimation", "Bactérie maladive rare"],
    correct: 1,
    explication: "BMR = bactérie multi-résistante : elle résiste à plusieurs familles d'antibiotiques mais conserve des options thérapeutiques. Exemples : SARM, EBLSE.",
    ref: "SF2H, maîtrise de la diffusion des BMR",
    diff: 1
  },
  {
    mod: "8",
    q: "Les BHRe se distinguent des BMR principalement par :",
    options: ["Leur sensibilité à tous les antibiotiques", "Une résistance quasi totale, urgence de santé publique", "Leur absence de contagiosité", "Leur localisation cutanée exclusive"],
    correct: 1,
    explication: "Les BHRe (bactéries hautement résistantes émergentes, ex. EPC, ERG) ne laissent quasiment plus d'options antibiotiques. Elles imposent des mesures renforcées et le dépistage de l'entourage.",
    ref: "HCSP, prévention de la transmission des BHRe 2019",
    diff: 2
  },
  {
    mod: "8",
    q: "Quel exemple correspond à une BHRe ?",
    options: ["SARM", "EBLSE", "Entérobactérie productrice de carbapénémase (EPC)", "Streptocoque banal"],
    correct: 2,
    explication: "Les EPC et les ERG (entérocoques résistants aux glycopeptides) sont des BHRe. Le SARM et l'EBLSE sont des BMR plus 'classiques'.",
    ref: "HCSP, prévention de la transmission des BHRe 2019",
    diff: 2
  },
  {
    mod: "8",
    q: "Le principal réservoir des BHRe est le plus souvent :",
    options: ["La peau du visage", "Le tube digestif", "Les cheveux", "Les voies urinaires uniquement"],
    correct: 1,
    explication: "Les BHRe sont majoritairement des bactéries digestives. La gestion rigoureuse des excreta et le dépistage par écouvillonnage rectal sont donc centraux.",
    ref: "HCSP, prévention de la transmission des BHRe 2019",
    diff: 2
  },
  {
    mod: "8",
    q: "Pour un patient en précautions contact pour BMR, l'aide-soignant·e doit :",
    options: ["Partager le matériel entre les chambres", "Dédier le matériel de soin au patient", "Ne porter ni gants ni surblouse", "Réduire le bionettoyage"],
    correct: 1,
    explication: "On dédie au patient le matériel (tensiomètre, thermomètre, brassard), on porte gants et surblouse à chaque soin, et on renforce le bionettoyage des points de contact.",
    ref: "SF2H, précautions complémentaires contact",
    diff: 1
  },
  {
    mod: "8",
    q: "Qui prescrit la mise en place et la levée d'un isolement ?",
    options: ["L'aide-soignant·e", "Le médecin", "Le brancardier", "La famille du patient"],
    correct: 1,
    explication: "La prescription et la levée des précautions complémentaires (isolement) relèvent du médecin. L'AS les applique, les fait respecter et signale les anomalies.",
    ref: "Arrêté du 10 juin 2021, DEAS module 8",
    diff: 1
  },
  {
    mod: "8",
    q: "La signalisation à l'entrée d'une chambre en isolement doit :",
    options: ["Indiquer le nom du germe à tous", "Informer sans nommer le germe (secret professionnel)", "Être absente pour ne pas inquiéter", "Mentionner le diagnostic complet du patient"],
    correct: 1,
    explication: "Un pictogramme ou logo couleur informe les soignants et visiteurs des précautions à prendre, sans divulguer le germe ni le diagnostic, dans le respect du secret professionnel.",
    ref: "SF2H, signalisation des précautions complémentaires",
    diff: 2
  },
  {
    mod: "8",
    q: "Concernant la prévention des accidents d'exposition au sang (AES), il faut :",
    options: ["Recapuchonner les aiguilles à deux mains", "Ne jamais recapuchonner et avoir un collecteur à portée", "Jeter les aiguilles dans la poubelle classique", "Laisser le matériel piquant sur l'adaptable"],
    correct: 1,
    explication: "On ne recapuchonne jamais une aiguille ; le collecteur d'objets piquants/coupants/tranchants doit être à portée de main et jamais rempli au-delà de la limite. La pose d'aiguilles relève de l'IDE.",
    ref: "SF2H, prévention des AES",
    diff: 2
  },
  {
    mod: "8",
    q: "Le dépistage du portage de BHRe se fait souvent par :",
    options: ["Prise de sang réalisée par l'AS", "Écouvillonnage rectal selon protocole", "Radiographie pulmonaire", "Test urinaire à domicile"],
    correct: 1,
    explication: "Le portage digestif des BHRe se recherche par écouvillonnage rectal chez les patients à risque (ex. hospitalisation à l'étranger dans l'année). Le prélèvement et l'analyse relèvent de l'IDE et du laboratoire ; l'AS aide à l'installation et au confort du patient.",
    ref: "HCSP, dépistage des BHRe",
    diff: 3
  },
  {
    mod: "8",
    q: "Quel facteur de risque oriente vers un dépistage BHRe à l'admission ?",
    options: ["Avoir plus de 80 ans", "Une hospitalisation à l'étranger dans l'année précédente", "Être végétarien", "Avoir une tension élevée"],
    correct: 1,
    explication: "Un antécédent d'hospitalisation à l'étranger dans les 12 derniers mois (ou un contact avec un porteur connu) est un facteur de risque majeur justifiant un dépistage BHRe à l'admission.",
    ref: "HCSP, prévention de la transmission des BHRe 2019",
    diff: 3
  },
  {
    mod: "8",
    q: "Lors du retrait des EPI, où réalise-t-on impérativement une hygiène des mains ?",
    options: ["Jamais pendant le retrait", "Juste après le retrait des gants, et à la toute fin", "Uniquement avant d'entrer", "Seulement le matin"],
    correct: 1,
    explication: "On réalise une hygiène des mains immédiatement après avoir retiré les gants (mains potentiellement contaminées lors du retrait) puis une dernière fois après le retrait complet des EPI.",
    ref: "SF2H, habillage/déshabillage des EPI",
    diff: 2
  }
];

export const flashcards = [
  { mod: "8", recto: "Précautions standard : pour qui et quand ?", verso: "Pour tous les patients, en permanence, quel que soit le statut infectieux connu ou non." },
  { mod: "8", recto: "Les précautions complémentaires remplacent-elles les standard ?", verso: "Non, elles s'y ajoutent. Elles ne suppriment jamais le socle des précautions standard." },
  { mod: "8", recto: "Les 3 types de précautions complémentaires ?", verso: "Contact (gants + surblouse), Gouttelettes (masque chirurgical), Air (masque FFP2)." },
  { mod: "8", recto: "Quel masque pour la transmission aérienne (ex. tuberculose) ?", verso: "Un appareil de protection respiratoire FFP2, bien ajusté." },
  { mod: "8", recto: "FHA ou lavage si mains visiblement souillées ?", verso: "Lavage à l'eau et au savon : la friction hydro-alcoolique ne convient pas sur mains sales." },
  { mod: "8", recto: "Hygiène des mains face à Clostridioides difficile ?", verso: "Lavage à l'eau et au savon : les spores résistent à l'alcool." },
  { mod: "8", recto: "Ordre de retrait des EPI ?", verso: "Gants, hygiène des mains, surblouse, lunettes, masque, hygiène des mains (du plus sale au plus propre)." },
  { mod: "8", recto: "Comment retirer un masque ?", verso: "Par les élastiques, sans toucher la partie filtrante, puis hygiène des mains." },
  { mod: "8", recto: "BMR : définition et exemples ?", verso: "Bactérie multi-résistante (options restantes). Ex. : SARM, EBLSE." },
  { mod: "8", recto: "BHRe : définition et exemples ?", verso: "Bactérie hautement résistante émergente (quasi aucune option). Ex. : EPC, ERG." },
  { mod: "8", recto: "Principal réservoir des BHRe ?", verso: "Le tube digestif : gestion rigoureuse des excreta essentielle." },
  { mod: "8", recto: "Qui prescrit et lève un isolement ?", verso: "Le médecin. L'AS l'applique, le fait respecter et signale les anomalies." },
  { mod: "8", recto: "La signalisation de chambre doit-elle nommer le germe ?", verso: "Non : elle informe par pictogramme sans divulguer le germe, secret professionnel oblige." },
  { mod: "8", recto: "Pré-requis pour une hygiène des mains efficace ?", verso: "Ongles courts sans vernis ni faux ongles, pas de bijou/montre/alliance, manches courtes." },
  { mod: "8", recto: "Geste interdit pour prévenir un AES ?", verso: "Recapuchonner une aiguille ; collecteur OPCT à portée de main, jamais surrempli." }
];
