// Region coordinates are approximate browsing anchors, never trailheads or routes.
export const catalogueChecked='2026-10-03';
export const states=[
['Andhra Pradesh','Eastern Ghats',15.9,79.7],['Arunachal Pradesh','Northeast',28.1,94.4],['Assam','Northeast',26.2,92.9],['Bihar','Eastern India',25.6,85.6],['Chhattisgarh','Central India',21.3,81.9],['Goa','Western Ghats',15.3,74.0],['Gujarat','Western India',22.5,71.5],['Haryana','Northern India',29.0,76.0],['Himachal Pradesh','Himalayas',31.8,77.2],['Jharkhand','Eastern India',23.6,85.3],['Karnataka','Western Ghats',14.5,75.8],['Kerala','Western Ghats',10.8,76.3],['Madhya Pradesh','Central India',23.5,78.5],['Maharashtra','Sahyadris',19.3,75.7],['Manipur','Northeast',24.7,93.9],['Meghalaya','Northeast',25.5,91.3],['Mizoram','Northeast',23.2,92.9],['Nagaland','Northeast',26.1,94.6],['Odisha','Eastern Ghats',20.9,85.1],['Punjab','Northern India',31.1,75.3],['Rajasthan','Aravallis',26.6,73.8],['Sikkim','Himalayas',27.5,88.5],['Tamil Nadu','Southern Hills',11.1,78.6],['Telangana','Deccan',18.1,79.0],['Tripura','Northeast',23.9,91.7],['Uttar Pradesh','Northern India',26.8,80.9],['Uttarakhand','Himalayas',30.1,79.2],['West Bengal','Eastern India',24.0,88.0],
['Andaman and Nicobar Islands','Islands',11.7,92.7,'UT'],['Chandigarh','Northern India',30.7,76.8,'UT'],['Dadra and Nagar Haveli and Daman and Diu','Western India',20.3,73.0,'UT'],['Delhi','Northern India',28.6,77.2,'UT'],['Jammu and Kashmir','Himalayas',33.7,75.0,'UT'],['Ladakh','Himalayas',34.2,77.5,'UT'],['Lakshadweep','Islands',10.6,72.6,'UT'],['Puducherry','Coastal India',11.9,79.8,'UT']
].map(([name,region,lat,lng,kind])=>({name,region,lat,lng,kind:kind||'State',code:name.split(/\s+/).filter(s=>!['and','of'].includes(s)).map(s=>s[0]).slice(0,3).join('')}));
export const regionNames=[...new Set(states.map(s=>s.region))];
const images={Mountain:'photo-1454496522488-7a8e488e8606',Forest:'photo-1441974231531-c6227db76b6e',Fort:'photo-1464822759023-fed622ff2c3b',Waterfall:'photo-1433086966358-54859d0ed716',Coastal:'photo-1473116763249-2faaef81ccda',Meadow:'photo-1472396961693-142e6e269027'};
export const landscape=(type)=>`https://images.unsplash.com/${images[type]||images.Forest}?auto=format&fit=crop&w=900&q=85`;
const entries=[];
const add=(state,names,source,sourceLabel,type='Mountain',sourceScope='Destination names only')=>{const s=states.find(x=>x.name===state);for(const name of names.split('|'))entries.push({id:(state+'-'+name).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,''),name,state,area:state,region:s.region,type,source,sourceLabel,sourceScope,sourceChecked:catalogueChecked,provenance:'sourced',difficulty:'Not rated',distance:null,gain:null,duration:null,lat:null,lng:null,season:'Not documented in this catalogue',tag:type.toUpperCase()+' / INDIA',image:landscape(type),description:`An outdoor destination in ${state}. Start with its official source, then confirm a suitable route and current access locally.`,notes:'Exact trailhead, permitted route, ascent and current conditions are not documented here. This listing is for discovery, not navigation. Verify access and any guide or permit requirements with the responsible authority.'})};
add('Andhra Pradesh','Kambalakonda Wildlife Sanctuary|Araku Valley|Kailasagiri Hill','https://www.incredibleindia.gov.in/en/andhra-pradesh/visakhapatnam','Incredible India','Forest');
add('Arunachal Pradesh','Bailey Trail','https://arunachaltourism.com/wp-content/uploads/2021/07/Adventure.pdf','Arunachal Tourism adventure brochure');
add('Arunachal Pradesh','Mechuka|Tawang','https://www.incredibleindia.gov.in/en/arunachal-pradesh','Incredible India');
add('Assam','Haflong','https://assamtourism.gov.in/Haflong.php','Assam Tourism');
add('Assam','Garbhanga|Nameri','https://www.advantageassam.assam.gov.in/sectors/tourism','Government of Assam tourism overview','Forest');
add('Bihar','Rajgir Nature Safari','https://naturesafarirajgir.bihar.gov.in/website/trekking.php','Rajgir Nature Safari','Forest');
add('Bihar','Griddhakuta Hill|Ratnagiri Hill','https://www.incredibleindia.gov.in/en/bihar/nalanda/glass-bridge-rajgir','Incredible India');
add('Chhattisgarh','Kanger Valley National Park|Tirathgarh Waterfall','https://www.incredibleindia.gov.in/en/chhattisgarh','Incredible India','Forest');
add('Chhattisgarh','Mainpat','https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/states/chhattisgarh.html','Incredible India archive','Meadow');
add('Goa','Dudhsagar Waterfall','https://dudhsagartrekking.com/','Goa Tourism Development Corporation','Waterfall');
add('Goa','Cotigao','https://www.incredibleindia.gov.in/en/rural-tourism','Incredible India rural destinations','Forest');
add('Gujarat','Girnar Hills|Palitana Hills','https://www.incredibleindia.gov.in/en/gujarat','Incredible India');
add('Gujarat','Polo Forest|Saputara|Don Hill|Zarwani Waterfall','https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/states/gujarat/things-to-do/tourist-attractions.html','Incredible India archive','Forest');
add('Haryana','Morni Hills|Thapli|Kalesar|Adibadri','https://www.incredibleindia.gov.in/en/haryana','Incredible India','Forest');
add('Himachal Pradesh','Indrahar Pass|Beas Kund|Chandratal|Kinner Kailash|Kareri Lake|Pin Parvati Pass|Bhawa Pass|Friendship Peak|Hampta Pass|Chandratal Baralacha|Sach Pass|Bara Bhangal','https://himachaltourism.gov.in/destination/adventure-trekking/','Himachal Tourism');
add('Jharkhand','Dalma Wildlife Sanctuary|Netarhat|Tapovan','https://www.incredibleindia.gov.in/en/jharkhand','Incredible India','Forest');
add('Karnataka','Tadiandamol|Brahmagiri|Kodachadri|Huliyurdurga|Devarayanadurga|Madhugiri|Channagiri|Skandagiri|Kumara Parvatha','https://karnatakatourism.org/en/experiences/adventure-activities/','Karnataka Tourism');
add('Kerala','Aralam Wildlife Sanctuary|Arippa|Bhoothathankettu|Chimmony Wildlife Sanctuary|Chinnar|Dhoni Waterfalls|Eravikulam National Park|Gavi|Kakkayam|Konni - Adavi|Kottur|Munnar|Nelliyampathy Hills|Neyyar|Nilambur - Nedumkayam|Paithalmala','https://www.keralatourism.org/ecotourism/trekking-programs','Kerala Tourism ecotourism programme directory','Forest');
add('Madhya Pradesh','Dhoopgarh|Pandav Caves|Jata Shankar|Bee Falls|Apsara Vihar','https://www.incredibleindia.gov.in/en/madhya-pradesh/pachmarhi','Incredible India','Forest');
add('Madhya Pradesh','Satpura National Park','https://www.incredibleindia.gov.in/en/madhya-pradesh/pachmarhi/satpura-national-park','Incredible India','Forest');
add('Maharashtra','Harishchandragad|Lohagad|Purandar|Sajjangad|Shivneri|Sinhagad|Vishalgad|Narnala|Gawilgad|Panhala','https://maharashtratourism.gov.in/adventure-tourism/','Maharashtra Tourism destination directory','Fort');
add('Maharashtra','Rajgad','https://maharashtratourism.gov.in/fort/rajgad/','Maharashtra Tourism','Fort');
add('Maharashtra','Torna','https://maharashtratourism.gov.in/fort/torna/','Maharashtra Tourism','Fort');
add('Maharashtra','Pratapgad','https://maharashtratourism.gov.in/fort/pratapgad/','Maharashtra Tourism','Fort');
add('Manipur','Shirui Hills|Koubru Mountain','https://manipurtourism.gov.in/escape-to-the-hills/','Manipur Tourism');
Object.assign(entries.find(t=>t.name==='Koubru Mountain'),{source:'https://www.incredibleindia.gov.in/en/trips/trip-listing/manipur-marvels',sourceLabel:'Incredible India Manipur itinerary'});
add('Manipur','Dzukou Valley - Manipur side','https://www.incredibleindia.gov.in/en/manipur','Incredible India','Meadow');
add('Meghalaya','David Scott Trail|Nongriat Root Bridges|Mawphlang Sacred Grove|Laitlum','https://www.incredibleindia.gov.in/en/meghalaya','Incredible India','Forest');
add('Mizoram','Phawngpui National Park','https://mizoramtourism.com/top-destination/104','Mizoram Tourism');
add('Mizoram','Reiek Mountain','https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/states/mizoram.html','Incredible India archive');
add('Nagaland','Dzukou Valley - Nagaland side|Japfu|Saramati|Dzuleke|Benreu','https://tourism.nagaland.gov.in/tourism-policy/','Nagaland Tourism destination policy');
add('Odisha','Deomali','https://odishatourism.gov.in/content/tourism/en/discover/attractions/forest-wildlife/deomali.html','Odisha Tourism');
add('Odisha','Mahendragiri','https://odishatourism.gov.in/content/tourism/en/experience/event/mahendragiri-eco-adventure-fest-2026.html','Odisha Tourism 2026 event reference');
add('Punjab','Siswan Community Reserve','https://wii.gov.in/images/images/documents/publications/rr_2020_siswan_community_reserve_management_plan.pdf','Wildlife Institute of India management plan','Forest');
add('Punjab','Harike Wetland','https://www.incredibleindia.gov.in/en/punjab/amritsar/harike-wetland-and-bird-sanctuary','Incredible India','Forest');
add('Rajasthan','Mount Abu|Guru Shikhar|Toad Rock','https://www.tourism.rajasthan.gov.in/mount-abu.html','Rajasthan Tourism');
add('Sikkim','Dzongri|Goecha La|Yuksom trekking area','https://www.sikkim.gov.in/departments/tourism-civil-aviation-department/adventure-tourism','Government of Sikkim');
add('Telangana','Ananthagiri Hills|Pandavula Gutta','https://www.tourism.telangana.gov.in/page/adventure','Telangana Tourism');
add('Tripura','Jampui Hills','https://northtripura.nic.in/tourist-place/jampui-hills/','North Tripura district administration','Meadow');
add('Tripura','Unakoti Heritage Site','https://unakoti.nic.in/tourist-place/unakoti-heritage-site/','Unakoti district administration','Forest');
add('Uttar Pradesh','Chitrakoot pilgrimage area','https://chitrakoot.nic.in/chitrakoot_tourism-2/','Chitrakoot district administration');
entries.at(-1).notes='The Chitrakoot region spans Uttar Pradesh and Madhya Pradesh. This entry is a discovery area, not a route restricted to one state. Confirm the actual destination, walking route and current access locally.';
add('Uttar Pradesh','Vindhyachal Dham|Wyndham Falls','https://mirzapur.nic.in/tourist-places/','Mirzapur district administration','Forest');
add('Madhya Pradesh','Hanuman Dhara','https://satna.nic.in/en/gallery/chitrakoot-dham/','Satna district administration');
add('Uttarakhand','Nag Tibba|Chopta - Chandrashila|Satopanth Lake|Pindari Glacier|Auli - Gorson Bugyal|Kedarnath - Vasukital|Kedarkantha|Kalsi - Lakhamandal|Roopkund|Binsar|Kalindi Khal|Dodital - Yamunotri|Sunderdhunga|Gangotri - Gaumukh - Tapovan','https://www.uttarakhandtourism.gov.in/page/trekking','Uttarakhand Tourism trek directory');
add('Uttarakhand','Har ki Dun|Ruinsara Tal|Rupin Pass','https://uttarakhandtourism.gov.in/destination/govind-national-park','Uttarakhand Tourism');
add('West Bengal','Sandakphu','https://www.incredibleindia.gov.in/en/west-bengal/darjeeling/sandakphu','Incredible India');
add('West Bengal','Phalut','https://www.incredibleindia.gov.in/en/west-bengal/darjeeling/bagdogra','Incredible India');
add('West Bengal','Buxa Tiger Reserve','https://wbtourism.gov.in/Wildlife/details?id=63e90cfa0e6185b3d60e9407&template_id=1','West Bengal Tourism','Forest');
add('Andaman and Nicobar Islands','Saddle Peak','https://www.andamantourism.gov.in/admin-pannel/docfile/70-Final%20Bird%20Watching_compressed.pdf','Andaman Tourism birdwatching brochure');
add('Andaman and Nicobar Islands','Mount Manipur National Park','https://www.incredibleindia.gov.in/en','Incredible India national park directory','Forest');
add('Chandigarh','Sukhna Lake Nature Trail','https://www.incredibleindia.gov.in/en/chandigarh','Incredible India','Forest');
add('Chandigarh','Sukhna Wildlife Sanctuary','https://chandigarh.gov.in/sukhna-wildlife-sanctuary','Chandigarh administration','Forest');
add('Dadra and Nagar Haveli and Daman and Diu','Dudhani lakeside|Vanganga Lake Garden','https://ddd.gov.in/places-centres/vanganga-lake-garden/','UT administration','Forest');
entries.find(t=>t.name==='Dudhani lakeside').source='https://dnh.gov.in/tourist-place/aquaserene-neertal-tourist-complex-dudhani/';
add('Delhi','Asola Bhatti Wildlife Sanctuary','https://www.delhitourism.gov.in/entertainment/parks_delhi.html','Delhi Tourism','Forest');
add('Delhi','Aravalli Biodiversity Park','https://delhitourism.gov.in/dt/biodiversity_parks.html','Delhi Tourism','Forest');
add('Jammu and Kashmir','Patnitop|Bhaderwah|Kishtwar|Sarthal|Bani - Basholi','https://jammutourism.jk.gov.in/Adventure.html','Directorate of Tourism Jammu');
add('Ladakh','Markha Valley|Rumbak','https://tourism.gov.in/sites/default/files/2023-03/usq.1904%20for%2016.03.2023.pdf','Ministry of Tourism destination annexure');
add('Lakshadweep','Agatti island|Bangaram island|Minicoy island|Kalpeni island','https://lakshadweep.gov.in/tourist-places/','Lakshadweep administration','Coastal');
add('Puducherry','Ousteri Wetland','https://www.incredibleindia.gov.in/en/puducherry/puducherry/ousteri-wetland-and-national-park','Incredible India','Forest');
add('Puducherry','Promenade Beach walk','https://www.incredibleindia.gov.in/en/puducherry/puducherry/exploring-puducherry','Incredible India','Coastal');
// These are outdoor discovery places, not all confirmed trekking routes.
entries.forEach(t=>t.kind=['Coastal','Forest'].includes(t.type)?'Outdoor place':'Trek destination');
// A compact selection from the TN Forest Department route table. Duration is the
// published value; elevation is absent. Current access still needs verification.
const tn=[
['Cairn Hill','The Nilgiris','Easy',3,2,'one way'],['Longwood Shola','The Nilgiris','Easy',3,2,'two way'],['Karikayur - Rangasamy Peak','The Nilgiris','Challenging',8,6,'two way'],['Needle Rock','The Nilgiris','Challenging',4,2,'one way'],['Manambolly','Coimbatore','Easy',10,4,'one way'],['Aliyar Canal Bank','Coimbatore','Moderate',8,3,'one way'],['Baraliyar','Coimbatore','Easy',4,2,'one way'],['Chinnar Checkpost - Kottar','Tiruppur','Easy',4,2,'two way'],['Injikadavu','Kanniyakumari','Moderate',18,8,'one way'],['Karaiyar - Moolakasam','Tirunelveli','Easy',4,2,'one way'],['Courtallam - Shenbagadevi Falls','Tenkasi','Easy',3,2,'two way'],['Theerthaparai','Tenkasi','Easy',6,3,'two way'],['Kurangani - Sambalaru','Theni','Moderate',5,2,'one way'],['Karaparai','Theni','Moderate',9,4,'two way'],['Kodaikanal - Vellagavi','Dindigul','Challenging',12,6,'two way'],['Guthirayan Peak','Krishnagiri','Challenging',11,6,'two way'],['Nagalur - Sanniyasimalai Peak','Salem','Easy',5,2,'two way'],['Yelagiri - Swamimalai','Tirupattur','Easy',6,3,'two way'],['Gudiyam Caves','Thiruvallur','Easy',9,4,'two way'],['Renugambal Kovil - Kullar Caves','Tiruvannamalai','Easy',12,6,'two way']
];
for(const [name,district,difficulty,distance,duration,traverse] of tn){add('Tamil Nadu',name,'https://www.trektamilnadu.com/pdf/all_trails.pdf','Tamil Nadu Forest Department route table','Forest','Published route name, district, category, traverse, distance and duration');Object.assign(entries.at(-1),{area:district+', Tamil Nadu',difficulty,distance,duration,traverse,kind:'Published trail',metricsSource:'Published catalogue; no elevation data',notes:`The source labels this route ${traverse}. Published distance and duration are catalogue values, not live conditions. Confirm the currently bookable route and access with Trek Tamil Nadu. The source category “Tough” is displayed as “Challenging”.`})}
export const sourcedTreks=entries;
