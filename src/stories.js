// Editorial notes are paraphrases of the linked references, not AI-generated history.
// A destination note describes a place; it does not verify a trail or current access.
export const storyReviewed='2026-10-03';
const notes=new Map();
function add(source,label,rows){for(const [name,category,title,text] of rows)notes.set(name,{category,title,text,source,label,reviewed:storyReviewed,scope:'Destination context'});}
const ii=path=>'https://www.incredibleindia.gov.in/en/'+path;
const kt=path=>'https://www.keralatourism.org/ecotourism/trekking-programs/'+path;
const mt=path=>'https://maharashtratourism.gov.in/fort/'+path+'/';
const tn=path=>'https://www.trektamilnadu.com/trail/'+path;
add('https://maharashtratourism.gov.in/adventure-tourism/','Maharashtra Tourism',[
 ['rajmachi','History','Two forts, one name','Rajmachi is a twin-fort destination: Shrivardhan and Manaranjan. The familiar name refers to a fort complex rather than a single fortified summit.'],
 ['kalsubai','Landscape','Maharashtra’s highest point','Kalsubai is Maharashtra’s highest peak. The tourism department highlights its ladders and rocky sections; those features are part of the place’s character, rather than just the view at the top.'],
 ['Harishchandragad','Heritage','More than a cliff viewpoint','The fort complex includes temples, caves and a lake. Its built heritage offers another layer to notice alongside the Sahyadri scenery.'],
 ['Lohagad','Architecture','The scorpion’s tail','Lohagad’s Vinchukata spur is known as the scorpion’s tail. Its distinctive shape helps explain why this fort is remembered for its silhouette as well as its walls.']
]);
add('https://himachaltourism.gov.in/destination/dharamshala/','Himachal Tourism',[
 ['triund','Landscape','A window onto Kangra','Triund belongs to the Dharamshala trekking landscape, where the Dhauladhar range rises above the Kangra valley. The relationship between the ridge and the valley is part of the view’s appeal.']
]);
add('https://karnatakatourism.org/en/experiences/adventure-activities/','Karnataka Tourism',[
 ['kudremukh','Names & nature','A horse-shaped mountain','Karnataka Tourism describes Kudremukh as famous for its horse-shaped peak. Its profile, rather than just its height, is one of the mountain’s defining features.'],
 ['Tadiandamol','Landscape','Kodagu’s high point','Tadiandamol is described as Kodagu district’s highest peak. This distinction concerns Kodagu, rather than Karnataka as a whole.'],
 ['Brahmagiri','Nature','A forest-and-wildlife landscape','The official directory presents Brahmagiri as a forest and wildlife trek. The forest is part of the destination, alongside its summit.'],
 ['Kodachadri','Landscape','A Western Ghats mountain','Kodachadri is listed as a Western Ghats mountain trek, part of the long hill system along India’s western side.'],
 ['Huliyurdurga','Heritage','Rock meets fort country','The tourism directory connects Huliyurdurga in Tumakuru with rock climbing and fort trails, bringing built heritage and a rocky landscape into the same outing.'],
 ['Devarayanadurga','Living culture','Hills and temples together','Devarayanadurga in Tumakuru is presented as a destination of hills, temples and sunrise views. Its religious landscape is part of the place, not merely a backdrop.'],
 ['Skandagiri','Names & nature','Also called Kalavara Durga','Skandagiri is also known as Kalavara Durga. The alternate name helps identify the same place in local accounts.'],
 ['Kumara Parvatha','Nature','Within Pushpagiri’s landscape','The official listing places Kumara Parvatha in Pushpagiri Wildlife Sanctuary. Conservation context matters as much as the mountain’s trekking reputation.']
]);
add('https://uttarkashi.nic.in/tourist-place/dayara-bugyal/','Uttarkashi District Administration',[
 ['dayara','Living culture','A working summer meadow','The district describes shepherds bringing cattle to Dayara in summer and staying until winter approaches. The meadow is part of a seasonal pastoral landscape, as well as a trekking destination.']
]);
add(kt('chembra-trek/14'),'Kerala Tourism',[
 ['chembra','Names & nature','The heart-shaped pond','The pond on Chembra is known as Hridayasarassu, or heart-shaped pond. The official account describes a landscape that shifts from tea plantations to meadow.']
]);
add(ii('andhra-pradesh/visakhapatnam'),'Incredible India · Ministry of Tourism',[
 ['Kambalakonda Wildlife Sanctuary','Nature','Forest beside a coastal city','Visakhapatnam’s official account highlights Kambalakonda as a wildlife sanctuary with diverse plants and animals. It offers a forest dimension to a city often associated with beaches.'],
 ['Araku Valley','Living landscape','Coffee country, not just scenery','Araku’s coffee plantations are part of its identity alongside its waterfalls. The valley combines a cultivated landscape with the surrounding Eastern Ghats.'],
 ['Kailasagiri Hill','Landscape','A city-and-sea perspective','Kailasagiri looks over both Visakhapatnam and its coastline. Its distinctive perspective links an urban landscape with the sea rather than a remote mountain wilderness.']
]);
add(ii('arunachal-pradesh'),'Incredible India · Ministry of Tourism',[
 ['Tawang','Living culture','A monastery landscape','Tawang’s Buddhist monasteries are central to its identity. The official account highlights Tawang Monastery and the surrounding Himalayan landscape together.']
]);
add(ii('arunachal-pradesh/mechuka/samten-yongcha-monastery'),'Incredible India · Ministry of Tourism',[
 ['Mechuka','Living culture','A hilltop hub of devotion','Samten Yongcha Monastery sits on a hilltop in Mechuka. The official account describes a centuries-old Buddhist centre, adding a cultural layer to the valley’s scenery.']
]);
add('https://assamtourism.gov.in/november.php','Assam Tourism',[
 ['Haflong','Landscape','Assam’s hill station','Haflong is Assam’s only hill station, located in Dima Hasao. Its hill-country setting makes it distinctive within a state also known for river plains.']
]);
add(ii('bihar/nalanda/glass-bridge-rajgir'),'Incredible India · Ministry of Tourism',[
 ['Griddhakuta Hill','Living culture','A Buddhist landmark','The official Rajgir account identifies Griddhakuta as a site of Buddhist significance. A visit can be about religious history as well as climbing a hill.'],
 ['Ratnagiri Hill','Architecture','The white pagoda above Rajgir','Ratnagiri Hill is topped by the Vishwa Shanti Stupa, a white peace pagoda. It is a cultural landmark within Rajgir’s broader hill landscape.']
]);
add('https://naturesafarirajgir.bihar.gov.in/website/trekking.php','Rajgir Nature Safari',[
 ['Rajgir Nature Safari','Nature','A nature-safari setting','The official nature-safari website includes trekking as one of its experiences. This entry represents a managed nature destination rather than an independently documented mountain route.']
]);
add(ii('chhattisgarh'),'Incredible India · Ministry of Tourism',[
 ['Kanger Valley National Park','Nature','Bastar’s forest dimension','The official state account places Kanger Valley in the nature landscape around Jagdalpur. Its biodiversity adds a forest story to a region also celebrated for waterfalls.'],
 ['Tirathgarh Waterfall','Names & nature','The milky falls','Tirathgarh is sometimes called the Milky Falls in the tourism account, a reference to the pale appearance of its cascading water.']
]);
add(ii('gujarat'),'Incredible India · Ministry of Tourism',[
 ['Girnar Hills','Living culture','A hill of pilgrimage','Girnar is an important Jain pilgrimage destination. Its temples are part of a living religious landscape, rather than simply summit landmarks.'],
 ['Palitana Hills','Living culture','Sacred hills and temple craft','Palitana is a major Jain pilgrimage destination known for its temples. The climb belongs to a religious landscape with an architectural story.']
]);
add('https://gujarattourism.com/north-zone/sabarkantha/polo-forest.html','Gujarat Tourism',[
 ['Polo Forest','Names & history','A gateway in its name','Gujarat Tourism traces Polo’s name to pol, a Marwari word for gate, relating it to a gateway between Gujarat and Rajasthan.']
]);
add('https://gujarattourism.com/south-zone/dang/saputara.html','Gujarat Tourism',[
 ['Saputara','Living culture','Beyond the lake views','The official account encourages learning about the region’s tribal culture. Saputara’s local communities are part of its story alongside the forest and lake.'],
 ['Don Hill','Landscape','Another corner of Dang','Gujarat Tourism lists Don as a hill-station destination in Dang. It offers another hill-country place to discover alongside the better-known Saputara.']
]);
add('https://gujarattourism.com/central-zone/narmada/shoolpaneshwar-wildlife-sanctuary.html','Gujarat Tourism',[
 ['Zarwani Waterfall','Nature','Inside a protected forest','Zarwani lies within Shoolpaneshwar Wildlife Sanctuary. The official account describes water dropping from rock into a gorge, within a forest conservation landscape.']
]);
add(ii('haryana'),'Incredible India · Ministry of Tourism',[
 ['Morni Hills','Landscape','Two lakes among the hills','The Morni landscape includes two large lakes separated by a small hill. It is an extension of the Shivalik range, with the Ghaggar river in its surroundings.'],
 ['Thapli','Nature','Haryana’s less familiar green side','The official state account names Thapli among its destinations with diverse plants and animals. This is nature context; a detailed historical account has not been established here.'],
 ['Kalesar','Nature','Part of Haryana’s biodiversity story','Kalesar is highlighted among Haryana’s natural destinations. The state’s landscapes range from the Shivaliks to the Aravallis, beyond the plains often associated with Haryana.'],
 ['Adibadri','Nature','A place in a varied landscape','Adibadri appears among Haryana’s flora-and-fauna destinations in the official account. The region’s natural variety is an often overlooked part of the state’s identity.']
]);
add(ii('jharkhand'),'Incredible India · Ministry of Tourism',[
 ['Dalma Wildlife Sanctuary','Nature','A forest near an industrial city','Dalma is a wildlife sanctuary close to Jamshedpur. That proximity offers a different perspective on a city widely associated with industry.'],
 ['Netarhat','Names & landscape','Queen of Chhotanagpur','Netarhat is often called the Queen of Chhotanagpur. The official account places it in Latehar and highlights its sunrise and sunset views.'],
 ['Tapovan','Living culture','A temple amid caves','Tapovan near Deoghar includes the Tapovan Nath Shiva Temple surrounded by caves. This catalogue entry refers to Jharkhand’s Tapovan, not the Himalayan meadow of the same name.']
]);
add(ii('madhya-pradesh/pachmarhi'),'Incredible India · Ministry of Tourism',[
 ['Dhoopgarh','Landscape','Madhya Pradesh’s high point','Dhoopgarh is the highest point in Madhya Pradesh and the Satpura range. Sunrise and sunset views are a distinctive part of its identity.'],
 ['Pandav Caves','Folklore','Five caves and a famous legend','The five sandstone caves are linked with the Pandava legend and Pachmarhi’s name. That association is folklore, rather than proof of who inhabited the caves.'],
 ['Jata Shankar','Folklore','A shrine in natural rock','Jata Shankar is a sacred cave shrine associated with a Shiva legend. Natural rock formations and religious meaning meet at this destination.'],
 ['Bee Falls','Names & landscape','Also known as Jamuna Prapat','Bee Falls is also called Jamuna Prapat. This alternate name helps connect local references to the waterfall within Pachmarhi’s forested landscape.'],
 ['Apsara Vihar','Names & landscape','The fairy pool','Apsara Vihar is known as Fairy Pool. The official account describes a waterfall-and-pool setting, distinct from the area’s hill viewpoints.'],
 ['Satpura National Park','Nature','A mosaic of forest habitats','Pachmarhi’s conservation landscape includes sal, teak and bamboo forests and wildlife such as gaur and sloth bears. This is regional habitat context, not a promise of sightings.']
]);
for(const [name,path,category,title,text] of [
 ['Shivneri','shivneri','History','Where Shivaji was born','Shivneri is the birthplace of Chhatrapati Shivaji Maharaj. Its fortified hill setting and successive gateways provide architectural context for that history.'],
 ['Sinhagad','sinhagad','History','Kondhana before Sinhagad','Sinhagad was formerly called Kondhana. The fort is associated with the Maratha recapture of 1670, adding a historical layer to a familiar Pune outing.'],
 ['Purandar','purandar','History','A royal birthplace','Purandar is the birthplace of Sambhaji Maharaj, Shivaji’s son and successor. Its history extends beyond the treaty that carries the fort’s name.'],
 ['Sajjangad','sajjangad','Living culture','From Parali to Sajjangad','Formerly Parali Fort, Sajjangad became the final abode of Samarth Ramdas. It remains a pilgrimage destination as well as a historic fort.'],
 ['Vishalgad','vishalgad','Names & history','Once known as Khilna','Vishalgad was originally known as Khilna. Its later name means Grand Fort, reflecting the way changing rulers also changed a place’s identity.'],
 ['Narnala','narnala','Landscape','A Satpura fort','Narnala sits in the Satpura range. Maharashtra’s fort landscape reaches beyond the Sahyadris, an easy distinction to miss when browsing state-wide treks.'],
 ['Gawilgad','gawilgad','History','A chapter in the 1803 war','Gawilgad was captured by British forces in December 1803 during the Second Anglo-Maratha War. Its ruins have a history beyond the summit view.'],
 ['Panhala','panhala','History','A fort above a trade corridor','Panhala overlooked a pass linking inland Bijapur with the coast. Its position helps explain why control of this fort mattered to successive powers.'],
 ['Rajgad','rajgad','Architecture','Read the fort through its terraces','Rajgad’s architecture is a key part of its official tourism account. Take time to understand the built landscape as well as the mountain setting.'],
 ['Torna','torna','History','An early conquest of Swarajya','Torna was the first fort captured by Shivaji Maharaj, in 1646. It is also known as Prachandagad, giving this familiar trekking name a second identity.'],
 ['Pratapgad','pratapgad','History','The battle behind the name','Pratapgad is associated with the 1659 confrontation between Shivaji Maharaj and Afzal Khan. Its upper and lower fort sections reflect a layered defensive design.']
])add(mt(path),'Maharashtra Tourism',[[name,category,title,text]]);
add('https://manipurtourism.gov.in/escape-to-the-hills/','Manipur Tourism',[
 ['Shirui Hills','Nature','Home of the Shirui lily','The rare Shirui lily is Manipur’s state flower and is found in the Siroy hill range of Ukhrul. Its local habitat is part of what makes these hills distinctive.'],
 ['Dzukou Valley - Manipur side','Landscape','A valley across state boundaries','Manipur Tourism locates Dzukou at the border with Nagaland in Senapati district. The two catalogue entries describe sides of the same valley, rather than separate valleys.'],
 ['Dzukou Valley - Nagaland side','Landscape','The other side of the same valley','Dzukou spans the Manipur–Nagaland border. This listing represents the Nagaland side; it is not a second independent valley or a verified approach route.']
]);
add(ii('meghalaya'),'Incredible India · Ministry of Tourism',[
 ['Nongriat Root Bridges','Living culture','Living engineering','Nongriat’s root bridges belong to traditions of the Khasi and Jaintia peoples, who train intertwined roots into crossings. They are living structures shaped by people over time.'],
 ['Mawphlang Sacred Grove','Living culture','A forest with cultural memory','Mawphlang’s sacred grove is part of Khasi culture. The official account connects its forest with rare plants and ancient coronation sites.'],
 ['Laitlum','Landscape','A canyon landscape','The official Meghalaya account identifies Laitlum as a canyon landscape. Its appeal comes from the scale of the surrounding terrain, rather than a single summit.']
]);
add('https://www.meghalayatourism.in/experiences/adventure-%26-outdoor/hiking-%26-trekking/the-david-scott-trek/','Meghalaya Tourism',[
 ['David Scott Trail','History','Walking a former trade route','The trail follows part of a colonial-era trade route and is named after an early nineteenth-century British administrator. Meghalaya Tourism also describes megaliths along the way.']
]);
add('https://mizoramtourism.com/top-destination/104','Mizoram Tourism',[
 ['Phawngpui National Park','Names & nature','The Blue Mountain','Phawngpui is also called the Blue Mountain and is Mizoram’s highest peak. Its forest and cliff habitat supports varied birdlife, including Mrs Hume’s pheasant.']
]);
add(ii('mizoram/aizawl/reiek-tourist-resort'),'Incredible India · Ministry of Tourism',[
 ['Reiek Mountain','Living culture','The village below the mountain','The official Reiek account highlights Reiek Village at the mountain’s base. The destination has a community dimension alongside its hill scenery.']
]);
add('https://tourism.nagaland.gov.in/tourism-policy/','Nagaland Tourism · policy document',[
 ['Japfu','Landscape','A mountain in an adventure landscape','Nagaland’s tourism policy identifies Japfu among potential adventure destinations. A policy listing is context for discovery, not evidence of a maintained or open trail.'],
 ['Saramati','Nature','An ecotourism landscape','Saramati appears among Nagaland’s ecotourism destinations in the state policy. The document frames natural and cultural heritage as part of the tourism experience.'],
 ['Benreu','Living culture','More than a trekking waypoint','Benreu is named as an ecotourism destination in the state policy, which connects nature with cultural heritage and local livelihoods.'],
 ['Dzuleke','Living culture','A village-based perspective','Dzuleke appears in the state’s adventure-destination discussion. Village life is another dimension to explore respectfully alongside the landscape.']
]);
add('https://odishatourism.gov.in/content/tourism/en/discover/attractions/forest-wildlife/deomali.html','Odisha Tourism',[
 ['Deomali','Landscape','Odisha’s high point','Deomali, in Koraput, is Odisha’s highest peak. It belongs to the Eastern Ghats, a hill system less often highlighted than the Himalayas or Western Ghats.']
]);
add(ii('punjab/amritsar/harike-wetland-and-bird-sanctuary'),'Incredible India · Ministry of Tourism',[
 ['Harike Wetland','Nature','Where two rivers meet','Harike lies at the confluence of the Beas and Sutlej. Its wetland habitat is important for migratory birds, including visitors from distant northern regions.']
]);
add('https://chandigarh.gov.in/sukhna-wildlife-sanctuary-introduction','Chandigarh Administration',[
 ['Sukhna Lake Nature Trail','History & nature','A lake and its catchment','Sukhna Lake was constructed in 1958. Conservation of the surrounding Shivalik catchment addresses erosion and the silt carried toward the lake.'],
 ['Sukhna Wildlife Sanctuary','Nature','Forest that protects a lake','The sanctuary forms part of Sukhna Lake’s Shivalik catchment. Its conservation story includes soil erosion and silt control, not only wildlife habitat.']
]);
add('https://www.pib.gov.in/PressReleasePage.aspx?PRID=1889230&lang=2&reg=48','Press Information Bureau · Ministry of Home Affairs',[
 ['Mount Manipur National Park','History','Why Mount Harriet became Mount Manipur','The renaming commemorates Manipur’s freedom fighters imprisoned in the Andamans. It connects this island landscape to a history from northeastern India.']
]);
add('https://dnh.gov.in/tourist-place/aquaserene-neertal-tourist-complex-dudhani/','Dadra & Nagar Haveli District Administration',[
 ['Dudhani lakeside','Landscape','A reservoir, not a mountain lake','Dudhani sits beside the Damanganga reservoir. The district account highlights shikara boats, adding a waterside perspective to this outdoor destination.']
]);
add('https://ddd.gov.in/places-centres/vanganga-lake-garden/','UT Administration of Dadra and Nagar Haveli and Daman and Diu',[
 ['Vanganga Lake Garden','Culture & design','A landscape with a film connection','The administration describes Japanese-style bridges connecting the central island and notes the garden’s popularity as a Hindi-film song location.']
]);
add(ii('puducherry/puducherry/exploring-puducherry'),'Incredible India · Ministry of Tourism',[
 ['Promenade Beach walk','Landscape','A rock-lined seafront','Promenade Beach is known for its rock-lined shore. This is an urban coastal walk, with a different character from a sandy beach or a forest trek.']
]);
add(ii('puducherry/puducherry/ousteri-wetland-and-national-park'),'Incredible India · Ministry of Tourism',[
 ['Ousteri Wetland','Nature','A wetland dimension to Puducherry','Ousteri offers a wetland landscape beyond Puducherry’s better-known streets and seafront. The official account presents it as a destination for nature enthusiasts.']
]);
add('https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/leh-ladakh/hemis-wildlife-sanctuary.html','Incredible India · archived destination account',[
 ['Markha Valley','Nature','A valley within Hemis’s habitat','The Hemis conservation landscape includes the Markha catchment and snow-leopard habitat. This is ecological context, not a promise of seeing an animal.'],
 ['Rumbak','Nature','Part of a wider catchment','Rumbak is one of the catchments included in the Hemis conservation landscape. Its setting connects a village-area trek with high-altitude wildlife habitat.']
]);
add(ii('west-bengal/darjeeling/singalila-national-park'),'Incredible India · Ministry of Tourism',[
 ['Sandakphu','Names & nature','A name linked with plants','The official account relates Sandakphu’s name to poisonous plants, possibly Himalayan cobra lilies. This is an attributed explanation of the name, not advice about identifying plants.'],
 ['Phalut','Nature','A ridge in a biodiverse park','Phalut belongs to the Singalila landscape, which includes oak, bamboo, magnolia and rhododendron forests and red-panda habitat. Wildlife sightings are never guaranteed.']
]);
for(const [name,path,category,title,text] of [
 ['Aralam Wildlife Sanctuary','aralam-trekking/16','Nature','A sanctuary forest','Kerala Tourism describes trekking within Aralam Wildlife Sanctuary. The protected forest is the destination, rather than merely a way to reach a viewpoint.'],
 ['Arippa','arippa-mystrica-swamps/20','Nature','A freshwater forest habitat','Arippa’s official ecotourism account highlights Myristica freshwater swamps as a distinctive habitat for endemic vegetation. The overlooked story here is in the lowlands, alongside the forest walk.'],
 ['Bhoothathankettu','old-bhoothathankettu-trek/22','Folklore','Boulders with a story','Local folklore connects the old dam-like boulders with monsters building across the Periyar and being tricked by a rooster. This is a legend, not an engineering history.'],
 ['Chimmony Wildlife Sanctuary','chimmini-trekking/38','Nature','A forest watershed','Chimmony includes the watersheds of the Kurumali and Mupilam rivers. The forest has a water-catchment role alongside its butterfly and bird habitats.'],
 ['Chinnar','thoovanam-marayoor-trek/34','Nature','A rain-shadow forest','Chinnar lies in the Western Ghats’ rain shadow. Its comparatively dry setting is a contrast to the wetter forests often associated with Kerala.'],
 ['Dhoni Waterfalls','trek-dhoni/17','Nature','A reserve-forest waterfall','Dhoni’s waterfall lies within reserve forest near Palakkad. The official account describes teak plantations at the foot of the hills.'],
 ['Eravikulam National Park','eravikulam-eco-tourism/12','Nature','A home for Nilgiri tahr','Eravikulam protects Nilgiri tahr habitat in the Kannan Devan Hills. Its landscape also includes shola forest and grassland associated with neelakurinji flowering.'],
 ['Gavi','gavi-programmes/32','Living landscape','Cardamom within a forest story','Gavi’s official programme includes a cardamom-plantation visit. Its story combines forest scenery with a cultivated landscape, rather than an untouched-wilderness image alone.'],
 ['Kakkayam','urakkuzhi-trekking/39','Nature','A water-shaped landscape','Kakkayam forms part of Malabar Wildlife Sanctuary. The official account links the dam landscape with Urakkuzhi waterfalls and forest biodiversity.'],
 ['Konni - Adavi','konni-adavi-package/33','Living culture','Aanakoodu and river craft','Konni’s wooden elephant kraals are locally called Aanakoodu. Nearby Adavi is associated with coracle boats on the Kallar river, giving the area a distinctive cultural dimension.'],
 ['Kottur','kottur-ecotourism/37','Conservation','An elephant rehabilitation setting','Kottur’s official account highlights an elephant rehabilitation centre and the Neyyar reservoir. Rehabilitation and forest habitat are part of the destination’s identity.'],
 ['Munnar','trekking-munnar/36','Nature','The long wait for blue hills','Neelakurinji is known for mass flowering on a twelve-year cycle. Munnar’s hill identity includes this ecological rhythm, not only tea estates. This note is not a bloom forecast.'],
 ['Nelliyampathy Hills','ecotourism-nelliyampathy/40','Living landscape','Plantations above a reservoir','The official account connects Nelliyampathy with Pothundy reservoir below and tea and coffee plantations above. Water, farming and forest are all part of its landscape.'],
 ['Neyyar','neyyar-packages/21','Living culture','A forest connected to pilgrimage','The Agasthyamala pilgrimage trail passes through Neyyar’s forest landscape. Its cultural significance accompanies the reservoir and protected habitats.'],
 ['Nilambur - Nedumkayam','nedumkayam/13','History & nature','Teak and a biosphere reserve','Nedumkayam belongs to the Nilgiri Biosphere Reserve. The same official account describes nearby Conolly’s Plot, a teak plantation initiated in 1842.'],
 ['Paithalmala','paithalamala-trek/23','Landscape','Between Kannur and Coorg','Paithalmala looks toward Coorg’s valleys on one side and Kannur’s plains on the other. Its forest-to-grassland landscape gives the hill more than one perspective.']
])add(kt(path),'Kerala Tourism',[[name,category,title,text]]);
for(const [name,path,category,title,text] of [
 ['Cairn Hill','cairn-hill-trekking-tamil-nadu','History & nature','Trees from another century','The official account dates Cairn Hill’s old plantation to the 1860s and highlights a British-era watchtower. Its history sits within a moss-covered forest setting.'],
 ['Longwood Shola','long-wood-shola','Conservation','A forest shaped by public care','Longwood Shola’s official account highlights conservation with public participation. This Kotagiri forest is recognised as an Important Bird Area and a Ramsar wetland.'],
 ['Karikayur - Rangasamy Peak','karikayur-to-rangasamy-peak','Nature','More than one forest type','The official listing describes moist-deciduous forest, shola and grassland at Rangasamy Peak. These contrasting habitats are a detail to notice beyond the viewpoint.'],
 ['Manambolly','manambolly','Nature','An Anamalai habitat','Manambolly lies in Anamalai Tiger Reserve between Sholayar Dam and Valparai. The official account highlights habitat for lion-tailed macaques and great hornbills. Sightings are not guaranteed.'],
 ['Aliyar Canal Bank','aliyar-canal-bank','Living landscape','A canal through forest country','This walk follows forested banks of the Aliyar Project canal near Pollachi. A managed waterway and bird habitat share the same landscape.'],
 ['Baraliyar','baraliyar','Living landscape','Village life along the ghat road','Baraliyar sits along the Mettupalayam–Coonoor ghat road. Its official account connects the forest and stream with a neighbouring hill village and rural life.'],
 ['Chinnar Checkpost - Kottar','chinnar-checkpost-kottar','Nature','A riverine habitat','The official account describes scrub, moist-deciduous and riverine habitats, including grizzled giant squirrels. It is a habitat note, not a guarantee of wildlife sightings.'],
 ['Injikadavu','injikadavu','Nature','Kanyakumari beyond the coast','Injikadavu lies in Kanyakumari Wildlife Sanctuary. Its forest shifts between deciduous and evergreen habitats and grassland, revealing a different side of this coastal district.'],
 ['Karaiyar - Moolakasam','karaiyar-moolakasam','Nature','An evergreen reserve landscape','The route lies in the Ambasamudram division of Kalakad Mundanthurai Tiger Reserve. The official account highlights its evergreen ecosystem and distant Agasthya Peak.'],
 ['Courtallam - Shenbagadevi Falls','courtallam-shenbagadevi-falls','Heritage','Inscriptions beside the cascade','The official account highlights historic rock inscriptions and the site’s association with Goddess Shenbaga Devi. Heritage and living religious meaning accompany the waterfall.'],
 ['Theerthaparai','theerthaparai','Nature','Small wings, big landscape','The official trail description highlights hornbills, flowerpeckers and Southern Birdwing butterflies in this Tenkasi forest landscape. These are habitat associations, not promised sightings.'],
 ['Kurangani - Sambalaru','kurangani-sambalaru','Nature','Pasture and shola patches','The official account describes wild pastures and shola patches near Kurangani, with views toward Kolukkumalai. Changes in vegetation are part of this place’s character.'],
 ['Guthirayan Peak','guthirayan-peak','Landscape','The Melagiri high point','Guthirayan is the highest point of the Melagiri Hills. The official account also describes bamboo and mixed-deciduous forest in the surrounding habitat.'],
 ['Nagalur - Sanniyasimalai Peak','nagalur-sanniyasimalai-peak','Nature','A river starts here','The official account identifies Sanniyasimalai as the origin of the Sarabanga river, a Cauvery tributary. The viewpoint is also part of a river’s headwater landscape.'],
 ['Yelagiri - Swamimalai','yelagiri-swamimalai','Living landscape','An Eastern Ghats village setting','Swamimalai belongs to the Eastern Ghats. The official account describes the approach from Mangalam village, linking the hill with its community setting.'],
 ['Gudiyam Caves','gudiyam-caves','Archaeology','A Stone Age connection','Gudiyam is described as an archaeological site with prehistoric stone tools and traces of human activity. Its significance extends beyond the cave scenery.'],
 ['Renugambal Kovil - Kullar Caves','renugambal-kovil-kullar-caves','Archaeology','Dolmens in the Jawadhu Hills','The official account identifies ancient dolmens at this Jawadhu Hills destination. This adds an archaeological layer to a place whose familiar name focuses on caves.']
])add(tn(path),'Trek Tamil Nadu · Forest Department / TNWEC',[[name,category,title,text]]);
add('https://northtripura.nic.in/tourist-place/jampui-hills/','North Tripura District Administration',[
 ['Jampui Hills','Living culture','Orchards and Mizo communities','The district account highlights Jampui’s orange orchards and orchids, along with local Mizo families. The hills are a lived-in cultural landscape, not just a viewpoint.']
]);
add('https://unakoti.nic.in/tourist-place/unakoti-heritage-site/','Unakoti District Administration',[
 ['Unakoti Heritage Site','Folklore','Stone images and a Shiva legend','The district recounts a legend of Shiva cursing companions into stone when they failed to wake. The rock carvings are heritage; the explanation is folklore, not established history.']
]);
add('https://bhoopalapally.telangana.gov.in/gallery/pandavula-guttalu/','Jayashankar Bhupalpally District Administration',[
 ['Pandavula Gutta','Archaeology','Paintings across many periods','The district describes animal figures, geometric designs and coloured pigments in Pandavula Gutta’s rock art, with inscriptions and paintings from later periods too.']
]);
add('https://www.tourism.rajasthan.gov.in/mount-abu.html','Rajasthan Tourism',[
 ['Mount Abu','Nature','Different habitats up the hill','Mount Abu’s official account describes thorny vegetation lower down and greener forest higher up. The changing vegetation is another way to read the hill landscape.'],
 ['Guru Shikhar','Living culture','An Aravalli summit with a shrine','Guru Shikhar is the highest peak of the Aravallis. Its Dattatreya temple adds a living religious dimension to the mountain viewpoint.'],
 ['Toad Rock','Names & landscape','The rock that resembles a toad','Toad Rock takes its name from its naturally toad-like shape beside Nakki Lake. Its identity is about the rock’s form, rather than a built monument.']
]);
add('https://ipr.sikkim.gov.in/Home/PressReleases?slug=press-release-from-forest-environment-department-dzongri-','Sikkim Forest & Environment Department · IPR release',[
 ['Dzongri','Conservation','Part of a heritage landscape','The Dzongri–Goecha La circuit lies in Khangchendzonga National Park, a UNESCO World Heritage Site. The landscape’s conservation status is part of its story.'],
 ['Goecha La','Landscape','A circuit with a shared starting place','The official department release describes the Goecha La–Dzongri trek as beginning at Yuksom. These names belong to a connected trekking landscape, rather than isolated destinations.']
]);
add('https://www.sikkim.gov.in/departments/tourism-civil-aviation-department/heritage-tourism','Government of Sikkim',[
 ['Yuksom trekking area','History','Before it became a trekking base','Yuksom was Sikkim’s first capital. Its role in the former kingdom adds a historical dimension to a place now widely associated with trekking.']
]);
add('https://surguja.gov.in/en/tourist-place/budha-temple/','Surguja District Administration',[
 ['Mainpat','Living culture','A Tibetan community in central India','Mainpat’s district account describes Tibetan resettlement, Buddhist temples and carpet and woollen crafts. This community history adds another layer to its hill scenery.']
]);
add(ii('rural-tourism/cotigao'),'Incredible India · Ministry of Tourism',[
 ['Cotigao','Nature','Goa’s forest side','Cotigao’s identity includes forest wildlife and birds such as hornbills and shamas. The destination shows a quieter ecological side of Goa beyond its beaches.']
]);
add(ii('goa/goa/exploring-the-beauty-of-the-pristine-coastline'),'Incredible India · Ministry of Tourism',[
 ['Dudhsagar Waterfall','Landscape','Water near a state boundary','Dudhsagar lies on the Goa–Karnataka border. Its forest setting gives this waterfall a different context from Goa’s better-known coastal destinations.']
]);
add(ii('himachal-pradesh/kangra/mcleodganj'),'Incredible India · Ministry of Tourism',[
 ['Indrahar Pass','Landscape','Meadow and mountain horizons','The official account describes Indrahar’s meadows with wildflowers and views toward the Pir Panjal. The pass belongs to a broader mountain landscape beyond Dharamshala.'],
 ['Kareri Lake','Nature','Another side of the Kangra landscape','Kareri Lake is highlighted as a nature destination in the official McLeodganj account. It adds a lake landscape to an area often associated with monasteries and hill towns.']
]);
add(ii('himachal-pradesh/manali/11-unforgettable-things-to-do-in-manali'),'Incredible India · Ministry of Tourism',[
 ['Beas Kund','Nature','A river’s high-mountain origin','The official Manali account links the Beas river’s origin with the Beas Kund glacier. The destination is part of a river story that extends far beyond the mountains.']
]);
add('https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/spiti-valley/rock-climbing-and-trekking.html','Incredible India · archived destination account',[
 ['Chandratal','Names & landscape','The Moon Lake','Chandratal is also known as the Moon Lake. The official Spiti account highlights it within a region of high passes and contrasting mountain terrain.']
]);
add('https://himachaltourism.gov.in/destination/kinnaur/','Himachal Tourism',[
 ['Kinner Kailash','Living culture','A sacred mountain in Kinnaur','Kinner Kailash is revered as an abode of Shiva. This is a religious association, distinct from a historical or scientific claim about the mountain.']
]);
add('https://himachaltourism.gov.in/destination/nature-parks/','Himachal Tourism',[
 ['Pin Parvati Pass','Nature','A pass and a river landscape','The official park account links the Pin river’s upper course with Pin-Parvati Pass before it joins the Spiti river. Passes are part of watershed geography, not only crossings.'],
 ['Bhawa Pass','Landscape','A link toward Kinnaur','The official nature-parks account describes Bhawa Pass as a crossing into Bhawa valley in Kinnaur. It connects different parts of Himachal’s mountain landscape.']
]);
add('https://himachaltourism.gov.in/destination/mountaineering-rock-climbing/','Himachal Tourism',[
 ['Friendship Peak','Mountaineering','A climbing-training landscape','Friendship Peak appears among climbing excursions associated with Manali’s mountaineering institute. Its context includes mountaineering training, beyond casual hill walking.']
]);
add(ii('himachal-pradesh/manali/the-best-adventure-experiences-in-manali'),'Incredible India · Ministry of Tourism',[
 ['Hampta Pass','Landscape','Part of Manali’s wider mountain setting','The official Manali adventure account highlights Hampta Pass among the area’s trekking destinations. The town serves as a gateway to a wider mountain landscape.']
]);
add('https://himachaltourism.gov.in/destination/adventure-trekking/','Himachal Tourism',[
 ['Chandratal Baralacha','Landscape','A journey named for two places','Himachal Tourism lists Chandratal Baralacha among its high-mountain treks. This name describes a broader journey, distinct from the catalogue’s Chandratal lake destination.'],
 ['Sach Pass','Landscape','Part of Himachal’s pass country','Sach Pass is named among the state’s high-altitude trekking destinations. The surrounding regional account highlights Chamba and Pangi’s mountain-travel landscape.'],
 ['Bara Bhangal','Landscape','A Kangra trekking landscape','The official state trekking guide places Bara Bhangal among Kangra’s trekking destinations. It belongs to a broader landscape of high mountains and passes.']
]);
add('https://vikarabad.telangana.gov.in/gallery/ananthagiri-hills/','Vikarabad district administration',[
 ['Ananthagiri Hills','Nature','Where the Musi begins','Ananthagiri is the birthplace of the Musi river. These wooded hills belong to Hyderabad’s wider water landscape, beyond their role as a weekend escape.']
]);
add('https://karnatakatourism.org/en/experiences/madhugiri-trek-ascent-to-a-thrilling-affair','Karnataka Tourism',[
 ['Madhugiri','History','A fort on a monolith','Madhugiri combines a monolithic rock hill with a fort. Look at how the built defences follow the shape of the rock, rather than thinking of the destination as only a summit.']
]);
add('https://karnatakatourism.org/en/attractions/channagiri-trek','Karnataka Tourism',[
 ['Channagiri','Landscape','More than one Nandi hill','Channagiri belongs to the wider Nandi Hills range. The official account places it alongside Skandagiri and Brahmagiri: the familiar destination name covers a larger hill landscape.']
]);
add(ii('trips/trip-listing/manipur-marvels'),'Incredible India · Ministry of Tourism',[
 ['Koubru Mountain','Living culture','A revered landscape','The official Manipur itinerary describes Kaubru Mountain as a revered local site. Its cultural meaning deserves attention alongside the mountain scenery; the source uses the spelling “Kaubru”.']
]);
add('https://www.delhitourism.gov.in/dt/biodiversity_parks/aravalli_biodiversity_park.html','Delhi Tourism',[
 ['Aravalli Biodiversity Park','Nature','From mined pits to living collections','Former clay-mining pits were converted into plant conservatories, including medicinal plants, ferns and orchids. This park’s story is also one of ecological restoration within Delhi’s ridge landscape.']
]);
add('https://www.uttarakhandtourism.gov.in/treks-details/Nag%20Tibba%20Trek','Uttarakhand Tourism',[
 ['Nag Tibba','Names & landscape','The Serpent’s Peak','Uttarakhand Tourism gives Nag Tibba’s alternative name as Serpent’s Peak. The name offers a different way to remember this Garhwal destination, beyond a distance or summit height.']
]);
add('https://www.uttarakhandtourism.gov.in/blogs/five-monsoon-treks-in-uttarakhand-you-can-not-miss','Uttarakhand Tourism',[
 ['Chopta - Chandrashila','Living culture','A summit journey through a sacred place','The Chopta–Chandrashila journey is associated with Tungnath, one of the Panch Kedar shrines. The landscape carries pilgrimage significance as well as mountain views.']
]);
add('https://uttarakhandtourism.gov.in/destination/mana','Uttarakhand Tourism',[
 ['Satopanth Lake','Landscape','Part of Mana’s mountain hinterland','The official Mana account places Satopanth among excursions in the village’s mountain hinterland. This lake destination belongs to a wider landscape associated with the upper Alaknanda.']
]);
add('https://uttarakhandtourism.gov.in/treks-details/Pindari%20Glacier%20Trek','Uttarakhand Tourism',[
 ['Pindari Glacier','Living culture','The village before the glacier','Khati is described as the largest and last village on the Pindari and Kafni routes. The approach is a lived-in mountain landscape, not just a passage toward ice.']
]);
add('https://www.uttarakhandtourism.gov.in/destination/auli','Uttarakhand Tourism',[
 ['Auli - Gorson Bugyal','Nature','A meadow with another spelling','Gorson is also written as Gurso Bugyal in the official Auli account. Its meadow setting sits alongside oak and conifer forest, showing the landscape beyond Auli’s skiing identity.']
]);
add('https://rudraprayag.gov.in/river-system/','Rudraprayag district administration',[
 ['Kedarnath - Vasukital','Nature','A lake in a river family','Vasuki Tal is the source of Vasuki Ganga, a tributary of the Mandakini. The lake is part of a downstream river system, rather than an isolated mountain feature.']
]);
add('https://www.uttarakhandtourism.gov.in/destination/govind-national-park','Uttarakhand Tourism',[
 ['Kedarkantha','Nature','The lake before the peak','Juda Ka Talab appears in the official account of the Kedarkantha trek. The small high-altitude lake gives the journey a landscape story beyond the summit.'],
 ['Har ki Dun','Landscape','A hanging valley','The official park account describes Har ki Dun as a hanging valley enclosed by cradling mountains. Its valley form matters as much as the peaks around it.'],
 ['Ruinsara Tal','Nature','Below Banderpunch','The official account places Ruinsara Tal near the Supin’s source, below Banderpunch. Its setting connects a high lake, mountain slopes and a river landscape.'],
 ['Rupin Pass','Landscape','Across state boundaries','The park’s published trekking account links the Rupin journey toward Sangla in Himachal Pradesh. Mountain journeys can cross administrative boundaries while remaining part of a connected landscape.']
]);
add('https://www.uttarakhandtourism.gov.in/treks-details/Kalsi%20Lakhamandal%20Trek','Uttarakhand Tourism',[
 ['Kalsi - Lakhamandal','History','A message carved into rock','Kalsi is associated with Ashoka’s rock edicts, while Lakhamandal is associated with a Shiva temple. This destination pairing connects ancient inscriptions with a continuing religious landscape.']
]);
add('https://www.nature.com/articles/s41467-019-11357-9','Nature Communications · 2019 research paper',[
 ['Roopkund','Research','The skeletons do not tell one simple story','A 2019 ancient-DNA study of 38 Roopkund individuals identified three distinct genetic groups. The research complicates a single, simple explanation of the lake’s human remains.']
]);
add('https://uttarakhandtourism.gov.in/assets/media/Tourist-Map-Uttarakhand-UK.pdf','Uttarakhand Tourism · tourist map',[
 ['Binsar','History','A former royal summer setting','The official tourist map identifies Binsar as a summer capital of the Chand kings. The wooded destination has a political history alongside its present-day nature appeal.'],
 ['Dodital - Yamunotri','Landscape','A lake and a pilgrimage destination','Dodital is marked as a lake on the state’s official tourist map. Its pairing with Yamunotri connects two different kinds of mountain destination; a listed pairing does not establish a navigable route.']
]);
add('https://uttarakhandtourism.gov.in/assets/pdf/Tourism-Policy_0.pdf','Uttarakhand Tourism · policy document',[
 ['Kalindi Khal','Landscape','Between two pilgrimage landscapes','The official trekking listing names a Gangotri–Kalindi Khal–Badrinath journey. Its geographic context connects two well-known pilgrimage destinations; the listing does not confirm present access or conditions.']
]);
add('https://www.uttarakhandtourism.gov.in/page/trekking','Uttarakhand Tourism',[
 ['Sunderdhunga','Living culture','Names along a Kumaon journey','The official trekking account associates Sunderdhunga with Jaitoli, Dudhia Dhaung and Kathalia. These named places give the mountain journey a more local identity than a single destination label.']
]);
add('https://uttarakhandtourism.gov.in/destination/gangotri','Uttarakhand Tourism',[
 ['Gangotri - Gaumukh - Tapovan','Nature','Before the river is called Ganga','The river emerging at Gaumukh is called the Bhagirathi. It takes the name Ganga after meeting the Alaknanda at Devprayag, linking this mountain landscape to a much larger river story.']
]);
add('https://lakshadweep.gov.in/tourist-places/','Lakshadweep administration',[
 ['Bangaram island','Landscape','A teardrop in the archipelago','The official destination account describes Bangaram as a teardrop-shaped island near Agatti and Kavaratti. Its shape and island setting distinguish it from mainland walking destinations.'],
 ['Minicoy island','Landscape','Farther south than the main group','The official account places Minicoy about 200 km south of the main island group. Lakshadweep is a spread-out archipelago, rather than one compact island destination.']
]);
add('https://lakshadweep.gov.in/tourist-place/kalpeni/','Lakshadweep administration',[
 ['Kalpeni island','Nature','One island name, a wider atoll','Kalpeni, the islets Tilakkam and Pitti, and Cheriyam form a single atoll. The destination name describes part of a larger coral-island system.']
]);
add('https://lakshadweep.gov.in/islands/agatti/','Lakshadweep administration',[
 ['Agatti island','Nature','The reef shapes the lagoon','Agatti’s official island account explains that its reef helps maintain calm conditions within the lagoon. The coast is part of a coral-atoll landscape, not simply a beach.']
]);
add('https://odishabiodiversityboard.in/bhs.html','Odisha Biodiversity Board',[
 ['Mahendragiri','Nature','A Biodiversity Heritage Site','Mahendragiri is identified as a Biodiversity Heritage Site by the state biodiversity board. Its importance includes ecological and cultural heritage, beyond a mountain viewpoint.']
]);
add('https://chitrakoot.nic.in/chitrakoot_tourism-2/','Chitrakoot district administration',[
 ['Chitrakoot pilgrimage area','Living culture','Walking as a form of devotion','The circumambulation, or parikrama, of Kamadgiri is a principal pilgrimage attraction. Walking here can be a religious practice as well as an outdoor experience.'],
 ['Hanuman Dhara','Folklore','A story from the Ramayana tradition','The district account associates Hanuman Dhara with Hanuman cooling the fire on his tail after returning from Lanka. This is a religious legend, not an independently verified historical event.']
]);
add('https://mirzapur.nic.in/tourist-place/windom-fall/','Mirzapur district administration',[
 ['Wyndham Falls','History','A colonial-era name','The district account says Wyndham Falls was named after a British-era collector, Wyndham. The source also uses “Windom” in its page title, an example of the place’s differing spellings.']
]);
add('https://wii.gov.in/images/images/documents/publications/rr_2020_siswan_community_reserve_management_plan.pdf','Wildlife Institute of India · management plan 2020–2026',[
 ['Siswan Community Reserve','Geology','The outer Himalayas underfoot','Siswan is part of Punjab’s Shivalik hills. Its management plan describes sandstone and conglomerate formations built from Himalayan debris, connecting this small reserve to a much larger geological story.']
]);
add('https://wbtourism.gov.in/Wildlife/details?id=63e90cfa0e6185b3d60e9407&template_id=1','West Bengal Tourism',[
 ['Buxa Tiger Reserve','Conservation history','A reserve since 1983','Buxa was declared a tiger reserve in 1983, according to West Bengal Tourism. Its protected-area identity has a history beyond the scenery visitors see today.']
]);
add('https://jammutourism.jk.gov.in/exploreJammu-Doda.html','Directorate of Tourism Jammu',[
 ['Bhaderwah','Living culture','Festivals beyond the mountain views','The official regional account highlights Mela Pat, Sobar Dhar Mela, Kud dance and Pahari folk songs. Bhaderwah’s mountain landscape is also a setting for living cultural traditions.'],
 ['Bani - Basholi','Landscape','A ridge between regional places','The official account describes forest and grassland ridges along the Bhaderwah–Bani–Basohli landscape. “Basholi” in the trekking listing is another spelling of Basohli.']
]);
add('https://jammutourism.jk.gov.in/exploreJammu-Kishtwar.html','Directorate of Tourism Jammu',[
 ['Kishtwar','Living culture','A landscape of languages','The regional tourism account highlights Kishtwari, Paddri, Pahari and Gojjri languages. A trekking destination can contain several local identities rather than one uniform mountain culture.']
]);
add('https://jammutourism.jk.gov.in/exploreJammu-PatniTop-Sanasar.html','Directorate of Tourism Jammu',[
 ['Patnitop','Regional history','Temples in the wider journey','The official Patnitop–Sanasar account highlights Krimchi’s old temple complex in the wider travel region. This is regional context, not a claim that the temples are on a Patnitop walking route.']
]);
add('https://jammutourism.jk.gov.in/pdf/Tourism%20Circuits%20in%20Jammu%20Division_compressed%20%281%29.pdf','Directorate of Tourism Jammu · circuits brochure',[
 ['Sarthal','Landscape','A meadow destination','Jammu’s official circuits brochure describes Sarthal as a meadow. This listing concerns the Bani-area outdoor destination; similarly named places should not be assumed to share the same location or story.']
]);
add('https://assamtourism.gov.in/november.php','Assam Tourism',[
 ['Nameri','Nature','A forest and river landscape','The official adventure account pairs Nameri National Park with the Jia Bhoreli river. The destination’s identity includes a river landscape as well as forest.']
]);
add('https://arunachaltourism.com/wp-content/uploads/2021/07/Adventure.pdf','Arunachal Tourism · adventure guide',[
 ['Bailey Trail','History','A colonial survey behind the name','The trail recalls the map-making expedition of F. M. Bailey and H. T. Morshead. The official guide describes their journey from Tibet toward the fortified village of Thembang.']
]);
add('https://environmentandforest.assam.gov.in/information-services/biodiversity-of-assam-0','Assam Environment and Forest Department',[
 ['Garbhanga','Nature','A semi-evergreen forest','The forest department identifies Garbhanga among Assam’s tropical semi-evergreen forests. The name describes a particular forest habitat, rather than a generic green backdrop.']
]);
add('https://mirzapur.nic.in/tourist-places/','Mirzapur district administration',[
 ['Vindhyachal Dham','Living culture','A landscape of devotion','The district account presents Vindhyachal as a Shaktipeeth associated with the goddess Vindhyavasini. This is a religious tradition, distinct from an archaeological claim or a verified historical event.']
]);
add('https://northmiddle.andaman.nic.in/tourist-place/saddle-peak/','North and Middle Andaman district administration',[
 ['Saddle Peak','Landscape','The Andamans’ high point','At 732 metres above sea level, Saddle Peak is the highest point in the Andaman Islands. That is summit elevation, not the elevation gain of any particular walking route.']
]);
add('https://abwls.eforest.delhi.gov.in/index.aspx','Delhi Forest Department · Asola Bhatti sanctuary',[
 ['Asola Bhatti Wildlife Sanctuary','Nature','Old-growth Dhau within the city’s reach','The sanctuary’s official account describes old-growth Dhau forest and an Aravalli Forest Centre. The destination offers a forest identity beyond its often-photographed lakes.']
]);
add('https://tourism.gov.in/sites/default/files/2020-04/20%20year%20perspective%20Plan%20of%20Tamilnadu.pdf','Ministry of Tourism · historical planning report',[
 ['Needle Rock','Landscape','A viewpoint with a wide horizon','The tourism planning report describes Needle Rock’s panoramic view in the Nilgiris. This older landscape description supplies context; it does not establish current access or the endpoint of a published trail.']
]);
add('https://www.trektamilnadu.com/pdf/all_trails.pdf','Tamil Nadu Forest Department · published trail list',[
 ['Karaparai','Catalogue context','A Theni trail, with more to learn','The forest department lists Karaparai in Theni district as a two-way trek. A reliable place-specific historical account has not yet been added; the published listing establishes trail context only.'],
 ['Kodaikanal - Vellagavi','Catalogue context','Two names in a Dindigul journey','The official trail catalogue pairs Kodaikanal and Vellagavi in Dindigul district. Local history and cultural customs need further sourced research before they can be presented as facts here.']
]);
// More references are kept per note rather than inherited from catalogue route metrics.
export function storiesFor(t){const specific=notes.get(t.id)||notes.get(t.name);return specific?[specific]:[];}
export const storyEntries=notes;
