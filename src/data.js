import img from "./assets/landscapes/char-dham-1.jpg";
import img2 from "./assets/landscapes/travel-style-1.jpg";
import img3 from "./assets/landscapes/mountains-4.jpg";

export const destinations = [
	{
		title: "Char Dham",
		img: "./assets/char-dham-1.jpg",
		link: "/destinations/char-dham",
	},
	{
		title: "Do Dham",
		img: "./assets/char-dham-2.jpg",
		link: "/destinations/do-dham",
	},
	{
		title: "Kedarnath",
		img: "./assets/char-dham-3.jpg",
		link: "/destinations/kedarnath",
	},
];

export const travelStyles = [
	{
		title: "Family Travel",
		img: "/src/assets/travel-style-1.jpg",
		link: "/travel-styles/family-travel",
	},
	{
		title: "Pilgrimage Tour",
		img: "/src/assets/mountains-4.jpg",
		link: "/travel-styles/pilgrimage-tour",
	},
	{
		title: "Honeymoons",
		img: "/src/assets/mountains-5.jpg",
		link: "/travel-styles/honeymoons",
	},
	{
		title: "Home Stay",
		img: "/src/assets/travel-style-1.jpg",
		link: "/travel-styles/home-stay",
	},
	{
		title: "Hill Stations",
		img: "/src/assets/travel-style-2.jpg",
		link: "/travel-styles/hill-stations",
	},
];

export const about = [
	{
		title: "Our Story",
		img: "/src/assets/char-dham.jpg",
		link: "/about/our-story",
	},
	{
		title: "Why book with Navicrow?",
		img: "/src/assets/moutains2.jpg",
		link: "/about/why-book-with-navicrow",
	},
	{
		title: "Kedarnath",
		img: "/src/assets/travel-style.jpg",
		link: "/about/sustainability",
	},
	{
		title: "Fixed Departures",
		img: "/src/assets/travel-style-1.jpg",
		link: "/about/our-team",
	},
];

export const chardhamPackages = [
	{
		title: "Char Dham via Haridwar",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img,
		link: "/package/chardham-via-haridwar",
	},
	{
		title: "Char Dham via Delhi",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img2,
		link: "/package/chardham-via-delhi",
	},
	{
		title: "Char Dham via Chopta",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img,
		link: "/package/chardham-via-chopta",
	},
	{
		title: "Char Dham via Helicopter",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img3,
		link: "/package/chardham-via-helicopter",
	},
];

export const dodhamPackages = [
	{
		title: "Do Dham via Haridwar",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img,
		link: "/package/dodham-via-haridwar",
	},
	{
		title: "Do Dham via Delhi",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img2,
		link: "/package/dodham-via-delhi",
	},
	{
		title: "Do Dham via Chopta",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img,
		link: "/package/dodham-via-chopta",
	},
	{
		title: "Do Dham via Helicopter",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img3,
		link: "/package/dodham-via-helicopter",
	},
];

export const kedarnathPackages = [
	{
		title: "Kedarnath",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img,
		link: "/package/kedarnath",
	},
	{
		title: "Kedarnath via Delhi",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img2,
		link: "/package/kedarnath-via-delhi",
	},
	{
		title: "Kedarnath via Tempo",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img,
		link: "/package/kedarnath-via-tempo",
	},
	{
		title: "Kedarnath via Helicopter",
		subtitle:
			"Embark on a transformative spiritual journey with our immersive pilgrimage travel style package.",
		img: img3,
		link: "/package/kedarnath-via-helicopter",
	},
];

export const packages = {
	"chardham-via-haridwar": {
		title: "Chardham via Haridwar",
		price: 18000,
		duration: 10,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"In the morning, after breakfast, you will proceed to Uttarkashi via Dharasu. Uttarkashi is a religious town with significant temples, including the famous Vishwanath Temple. You can explore these religious places and also enjoy the serene surroundings. Overnight stay at a hotel in Uttarkashi.",
				"After breakfast, you will proceed to Gangotri, the second dham of the Char Dham Yatra. En route, you will pass through Gangnani, where you can take a dip in the holy hot water spring. Upon reaching Gangotri, you can visit the Gangotri Temple and explore the nearby places. Later, you will return to Uttarkashi. Overnight stay at a hotel in Uttarkashi.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},

	"chardham-via-delhi": {
		title: "Chardham via Delhi",
		price: 22000,
		duration: 10,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Delhi to Haridwar and Haridwar to Barkot",
			"Barkot, Yamunotri, and Harsil",
			"Uttarkashi, Gangotri, and Phata",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival at the Delhi Railway Station or Airport, our representative will be there to pick you up. You will then begin your journey towards Haridwar. After reaching Haridwar, freshen up and proceed to explore the ancient temples in the city, such as Mansa Devi and Chandi Devi. In the evening, witness the religious Ganga Aarti ceremony at Har ki Pauri. Overnight stay in Haridwar.",
				"Start your day early and continue your journey towards the first dham, Yamunotri. On the way, you have the option to explore the scenic hill station of Mussoorie. After reaching Barkot, take in the mesmerizing beauty of the snow-capped peaks. Spend the night at a hotel in Barkot.",
			],
			[
				"After an early breakfast, begin your journey towards Yamunotri. Trek for 5 kilometers from Janki Chatti to Yamunotri, where you can take a dip in the holy Suryakund and worship the ancient Divyashila. After darshan, return to Janki Chatti and drive back to Barkot. Enjoy dinner and an overnight stay at the hotel.",
				"In the morning, have breakfast and proceed to Harsil via Uttarkashi. Harsil is renowned for its natural beauty and the majestic views of the Deodar trees. En route, you can also visit the Vishwanath Temple and the Gangnani Hot Water Spring. Reach Harsil by evening and spend the night at a hotel, surrounded by the serene surroundings.",
			],
			[
				"After breakfast, proceed to Harsil via Uttarkashi. Harsil is known for its natural beauty and majestic views of Deodar trees. Enroute, you can visit Vishwanath Temple and Gangnani Hot Water Spring. Reach Harsil by evening and stay overnight at a hotel.",
				"The next day, after breakfast, proceed towards Gangotri. Take a holy dip in the sacred river Ganges and visit places like Surya Kund and Bhagirath Shila. Return to Uttarkashi and overnight stay at a hotel.",
			],
			[
				"After breakfast, proceed towards Gangotri from Uttarkashi. Take a holy dip in the sacred River Ganges and visit the Gangotri Temple. Explore nearby attractions like Surya Kund and Bhagirath Shila. Return to Uttarkashi and enjoy an overnight stay at a hotel.",
				"After breakfast, continue your journey towards Phata via Tilwara and Lambgaon. Along the way, enjoy the beautiful views of the Mandakini River and visit the Ardh Narishwar Temple in Guptkashi. Reach Phata by evening and spend the night at a hotel.",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	"chardham-via-chopta": {
		title: "Chardham via Chopta",
		price: 22000,
		duration: 11,
		tripHighlights: [
			"Kedarnath Temple: Located at an altitude of 3600 meters, Kedarnath Temple is one of the 12 Jyotirlingas of Lord Shiva and an important site of the Chota Chardham Yatra.",
			"Badrinath Temple: Situated on the banks of the Alaknanda River, Badrinath Temple is dedicated to Lord Vishnu and is a significant pilgrimage site in the Chardham circuit.",
			"Gangotri: A small town known for the Gangotri Temple, it holds great religious importance as it is believed to be the place where the River Ganga descended from heaven.",
			"Yamunotri Temple: Located in the Garhwal Himalayas, Yamunotri Temple is dedicated to Goddess Yamuna and is one of the four sacred sites of the Chota Chardham pilgrimage.",
			"Chopta: A picturesque destination in Uttarakhand, Chopta is popular among trekkers as it serves as the base camp for treks to Tungnath, Deoria Tal, and Chandrashila. It offers breathtaking views of snow-covered peaks like Trishul, Nanda Devi, and Chaukhamba.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"On the first day, you will be greeted by a representative from One India Tourism at Haridwar Railway Station. From there, you will embark on a 7-hour drive to Barkot via Mussoorie, with the option to visit Kempty Falls along the way. Upon reaching Barkot, you will check-in to your hotel and have the rest of the day at leisure.",
				"The following day, you will be transferred to Jankichatti to begin the trek to Yamunotri. After a 6-kilometer trek or by using pony/doli (at your own cost), you will reach Yamunotri. Take a holy dip in the natural hot water spring or in the icy cold waters of the Yamuna River. You can also cook rice in the hot water spring and offer prayers at the mythological Divya Shila.",
			],
			[
				"On day three, you will depart early morning for Uttarkashi, which is approximately a 4-hour drive. After checking in at the hotel, you can take some rest and then visit the famous Kashi Vishwanath temple in Uttarkashi. Enjoy an overnight stay at the hotel.",
				"On day four, after breakfast, you will drive to Gangotri, approximately 24 kilometers away. As you drive parallel to the Bhagirathi River, you can enjoy the beauty of nature. Upon arrival in Gangotri, take a holy dip in the icy cold waters of the Bhagirathi River and perform pooja and Hindu rites at the riverbank. Visit the Mata Ganga temple, Lord Shiva, Hanuman, Vinayka, and Bhagirath Maharaj darshan, and then return to Uttarkashi for an overnight stay.",
			],
			[
				"Day five begins with checking out from the hotel in Uttarkashi and driving towards Guptkashi or Phata, which is approximately a 9-hour drive covering around 223 kilometers. Upon arrival, you will check in to the hotel and complete the registration process for visiting Kedarnath. Enjoy an overnight stay at the hotel.",
				"On day six, you will have an early morning check-out and proceed to Gaurikund or Phata, the starting point for the trek or helipad. From here, you will begin the journey to Kedarnath, either on foot or by using a helicopter, doli (palanquin), or pony (at your own cost). The trek is approximately 18 kilometers. After performing pooja and darshan at the sacred shrine of Shri Kedarnath ji, you will return to Guptkashi or Phata for an overnight stay at the hotel.",
			],
			[
				"On day seven, after breakfast, you will check out from the camp in Kedarnath and make your way back to Guptkashi or Phata, covering a distance of approximately 27 kilometers by trekking or using alternative means of transportation.",
				"Day eight takes you on a drive to Chopta, a picturesque destination loved by nature enthusiasts and adventure seekers. It is considered a paradise with its beautiful meadows and the opportunity for trekking. You will embark on a trek to Tungnath, one of the five Kedars, located at an elevation of 3,680 meters.",
			],
			[
				"Day nine begins with checking out from the hotel and continuing the journey to Pandukeshwar or Badrinath, covering a distance of approximately 185 kilometers in around six hours. En route, you will have the opportunity to visit Karanprayag, Nandprayag, Vishnu Prayag, and Joshimath, where the Narshimha Temple is located. On day ten, start your morning with a visit to the Badrinath Temple and take a holy dip in the Taptkund. Explore the temple and witness the various deities worshipped there, including Badrivishal, Ganesh, Kubera, Garuda, Narada, Udhhav, Nar, Narayan, Laxmimata, Hanuman, Ghantakarn, and Kaamdhenu.",

				"Finally, on day eleven, drive back to Rishikesh. Along the way, you will have the opportunity to witness the confluence of the Bhagirathi and Alaknanda rivers in Devprayag. Once in Rishikesh, visit the magnificent ashrams and the famous Ram Jhula and Laxman Jhula. Explore places like Shivanand Ashram, Gita Bhavan, and Pramarth Niketan. Afterward, proceed to Haridwar and drop off at the railway station, concluding your Chardham Yatra",
			],
		],
	},
	"chardham-via-helicopter": {
		title: "Chardham via Helicopter",
		price: 190000,
		duration: 6,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1", "2", "3", "4", "5", "6"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon arrival at Dehradun airport or railway station our informed driver cum guide will receive you and transfer you to our luxurious hotel for complimentary stay including dinner and breakfast",
				"Spend the day to relax after smooth check-in process and sleep homely for an exciting tomorrow.",
			],
			[
				"Upon arrival at Kharsali (Yamunotri), you are welcomed by our handlers; they will unload your baggage and take you to the hotel. Relish a fresh breakfast and leave for VIP darshan in palki to yamunotri temple which is around 5 km trek. Enjoy your palki ride with the glory of nature!",
				"After divine darshan you’ll return to hotel by lunch time. Have your lunch and spend few hours of relax. In Evening pay a visit to ancient Shani Temple nearby and spend the night at your hotel, after having dinner.",
			],
			[
				"Enter the most beautiful valleys in Uttarakhand, called the mini Switzerland, Gangotri. Our handlers will take you to the nearby Luxurious hotel. After an Early morning breakfast, you’ll leave for Gangotri temple VIP darshan in Cab which is 20 kms away from hotel.Tune yourself to the high altitude and enjoy the picturesque paradise on earth; Gangotri Dham.",
				"You’ll get all the basic and leisure facilities such as a premium accommodation with ensuite washrooms, delicious vegetarian food, Short walks and local sightseeing around the beautiful unexplored valley. Your second day of chardham yatra package by helicopter ends with a freshly prepared dinner and an evening bonfire before falling asleep.",
			],
			[
				"You will arrive at Guptkashi helipad from Gangotri, after changing the chopper you’ll fly for KEDARNATH which is 10 minutes flying from Guptkashi. As you reach the kedarnath, You will witness the beauty of changing colors in the sky.",
				"Our handlers shall take you for VIP darshan at kedarnath. Your stay is arranged at Guptkashi , After darshan we will take you back at Guptkashi and take you to the Hotel Villa Aadhya.",
			],
			[
				"On the fifth day of your chardham package itinerary, you’ll be heading to Badrinath and on the way you’ll see the deep valleys and majestic view of lofty Himalayas. Upon arrival at Badrinath helipad, our handlers will transfer you to the Hotel Sarovar Portico where you can relish your lunch and pay visit to Badri Narayan VIP darshan.",
				"In the evening, spend a leisurely hours in the Mana Village which is near to religious site of Badrinath. End your day with the comfortable stay and delectable dinner at your hotel.",
			],
			[
				"In the morning after having a hearty breakfast, bow your head to Badri Narayan temple and fly back to Dehradun with positive vibes and pleasant memories of Chardham Yatra by helicopter package.",
				"In the morning after having a hearty breakfast, bow your head to Badri Narayan temple and fly back to Dehradun with positive vibes and pleasant memories of Chardham Yatra by helicopter package.",
			],
		],
	},
	"dodham-via-haridwar": {
		title: "Chardham via Haridwar",
		price: 18000,
		duration: 11,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	"dodham-via-delhi": {
		title: "Dodham via Delhi",
		price: 18000,
		duration: 11,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	"dodham-via-chopta": {
		title: "Dodham via Chopta",
		price: 18000,
		duration: 10,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	"dodham-via-helicopter": {
		title: "Dodham via Helicopter",
		price: 18000,
		duration: 11,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	kedarnath: {
		title: "Kedarnath",
		price: 18000,
		duration: 11,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	"kedarnath-via-delhi": {
		title: "Kedarnath via Delhi",
		price: 18000,
		duration: 11,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	"kedarnath-via-tempo": {
		title: "Kedarnath via Tempo",
		price: 18000,
		duration: 11,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
	"kedarnath-via-helicopter": {
		title: "Kedarnath via Helicopter",
		price: 18000,
		duration: 11,
		tripHighlights: [
			"Yamunotri Dham – Snuggled in Uttarkashi district of Uttarakhand at an altitude of 3,293 m above sea level.",
			"Gangotri Dham – Perched at an altitude of 3,100 m above sea level, Gangotri temple is situated in Uttarkashi district at a distance of 285 km from Haridwar and 280 km away from Dehradun.",
			"Kedarnath Dham – Located in the Rudra Himalayan Ranges near Mandakini River, Kedarnath is settled amidst the mountain scape of the Rudraprayag district. From Dehradun, Kedarnath Temple is 274 km and from Haridwar, Kedarnath is around 245 km.",
			"Badrinath Dham – Snuggled between Nar and Narayan mountain ranges, Badrinath is situated in the Chamoli district. The distance from Badrinath is 300 km and from Haridwar and from Dehradun, Badrinath is 334 km.",
		],
		included: [
			"Breakfast and Dinner.",
			"1 Night accommodation in hotel in Kedarnath.",
			"2 Nights accommodation in Barkot, Uttarkashi, Phata, Pipalkoti each.",
			"All transfers and sightseeing as per itinerary.",
			"All applicable fuel, toll taxes, parking fees and driver’s allowances.",
		],
		excluded: [
			"All personal expenses, optional tours and extra meals",
			"Camera fees, alcoholic/non-alcoholic beverages and starters",
			"Medical and travel insurance",
			"Room Heater Charges will be Extra in hotels",
		],

		days: ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 10"],
		titles: [
			"Haridwar to Barkot and Yamunotri",
			"Barkot to Uttarkashi and Gangotri",
			"Uttarkashi to Guptkashi and Kedarnath",
			"Kedarnath, Guptkashi, Pipalkoti",
			"Badrinath and Risihikesh",
		],
		desc: [
			"Embark on a thrilling Char Dham adventure as you journey from Haridwar to Barkot, mesmerized by the scenic beauty of Dehradun and Mussoorie. Trek through mystical trails to reach Yamunotri, immersing yourself in its divine aura.",
			"Indulge in spiritual bliss as you traverse from Barkot to Uttarkashi, where ancient temples await your reverence. Explore the sacred abode of Gangotri, surrounded by majestic Himalayan vistas, leaving you awe-inspired.",
			"Embark on a soul-stirring journey from Uttarkashi to Guptkashi, immersing yourself in the serenity of the Ardh Narishwar Temple. Trek amidst snow-clad peaks and lush meadows to reach the divine land of Kedarnath.",
			"Trace your steps back from the heavenly abode of Kedarnath, immersing your soul in the spiritual essence. Travel from Guptkashi to Pipalkoti, encountering the confluence of sacred rivers, a sight to behold.",
			"Embark on a transcendent pilgrimage as you proceed from Pipalkoti to Badrinath, basking in the divine aura of the sacred temple. Conclude your enchanting journey in Rishikesh, where the holy Ganges welcomes you with open arms.",
		],

		itinerary: [
			[
				"Upon your arrival in Haridwar, the driver will pick you up and drive you to Barkot via Dehradun. You can enjoy the scenic beauty of the route and make a stop at Mussoorie, a popular hill station. After reaching Barkot, you can witness the mesmerizing snow-capped peaks. Overnight stay at a hotel in Barkotn.",
				"After an early breakfast, you will start your journey towards Yamunotri, the first dham (sacred place) of the Char Dham Yatra. You will proceed to Janki Chatti, from where you will begin a 5 km trek to Yamunotri. Along the way, you can take a dip in the holy Suryakund and worship the ancient Divyashila. After the darshan (worship), you will return to Janki Chatti and then drive back to Barkot. Overnight stay at a hotel in Barkot.",
			],
			[
				"On the fifth day, After breakfast, you will proceed towards Guptkashi via Tilwara. On the way, you can visit the Ardh Narishwar Temple in Guptkashi. Guptkashi is a scenic town located on the way to Kedarnath. You will reach Guptkashi by evening and stay overnight at a hotel.",
				"On the sixth day, there are two options to reach Kedarnath from Guptkashi. Option 1 is to take a helicopter ride from Guptkashi, Phata, or Sersi (depending on the helicopter ticket) and visit the Kedarnath Temple for darshan. Option 2 is to trek from Gaurikund to Kedarnath, which involves a 14 km trek. After the darshan, you will stay overnight at a hotel in Kedarnath.",
			],
			[
				"In the morning, you should start the return trek from Kedarnath to Gaurikund. From Gaurikund, you will reach Sonprayag by evening. Our driver will pick you up from Sonprayag and proceed to Guptkashi. Overnight stay in Guptkashi.",
				"After breakfast, you will travel towards Pipalkoti. On the way, you can visit the confluence of Alaknanda and Mandakini rivers at Karnprayag and Rudraprayag. Enjoy the beautiful landscapes and reach Pipalkoti by evening. Overnight stay at a hotel in Pipalkoti",
			],
			[
				"After breakfast, you will proceed towards Badrinath via Joshimath. En route, you can witness the ancient landmarks and enjoy the fresher view of the Himalayas. Upon reaching Badrinath, you can visit the famous Badrinath Temple and seek blessings. After the darshan, you can explore Mana Village, the last village on the Indian side before the Tibetan border. You can also visit Ved Vyas Gufa (cave) and Bheem Pul (bridge). Return to Pipalkoti by evening. Overnight stay in Pipalkoti.",
				"After breakfast, you will head back to Rishikesh. Along the way, you can witness the origin of the Ganga River, where the Bhagirathi and Alaknanda rivers meet at Devprayag. Enjoy the serene atmosphere and the confluence of these two sacred rivers. Finally, our driver will drop you off at the airport, railway station, or your hotel in Rishikesh, marking the end of your trip.",
			],
		],
	},
};

export const policy = [
	{
		title: "Privacy Policy of Navicrow Holidays",
		content:
			"Navicrow Holidays an online Travel Portal that provides information on various cities of the world and recommend hotels, vacation Rentals, travel packages, cruises etc through visitors opinion. Our Web site is part of Navicrow Holidays and the same is based out of Uttarakhand, Uttaranchal, india.\n\n We believe in our visitors for giving their opinion / views on any subject and the same is not biased. We are taking all measures to ensure that all the personal information shared by our visitor shall remains confidential. We recommend our visitors that before submitting they submit their personal information on our Web site, please read this Policy carefully to learn about our privacy practices. Please read this private policy of www.navicrowholidays.com, we assume that you are accepting the practices described herein.",
	},
	{
		title: "Privacy Policy",
		content:
			"Once a visitor provides his personal information like name, email id, Phone number, Address , User Id & Passwords, or any other travel related information, the same is stored in our database and the is protected at our end and we take all measure to ensure that the information is not disclosed to any third party who is not affiliated with Navicrow Holidays. Only Authorized employees of Navicrow Holidays are allowed to manage such personal information and the same is protected through number of firewalls to stop leakage of the same. Although the visitor has option not to provide all or any of the information to us, but some general information is required in order for you to enjoy the benefits of being a registered member. Visitors of www.navicrowholidays.com will have an option to provide contact information of their friends & family on our Web site. It is recommended that visitor should take the consent of friends & Family before providing the same to www.navicrowholidays.com.\n\n Navicrow Holidays also obtain both personal and non-personal information of people around the world from their partners and affiliated. In case you don't want us to write you, you can always opt for unsubscribe option and we will not use that information again. Although the same will remain idle in our database.\n\n Navicrow Holidays automatically pulls out some information about your computer when you browse www.navicrowholidays.com from your computer i.e., we procure session data, that includes your IP address, Web browser software. Through this private policy, Navicrow Holidays assume that it has sole rights to collect information about your online activity on www.navicrowholidays.com, such as content viewed and pages visited. The information collected is just to understand the interests of our users and help them by giving better services by adding new features on the page visited. The same information helps us tying up with hotels, Airlines and other places to procure better deals for you directly or by way of advertisement.\n\n Navicrow Holidays has a policy not to disclose visitors personal information with any third parties who are not affiliated with us. Although if any link on Navicrow Holidays takes you to another website then we recommend you to see the private policy of that particular website too.",
	},
	{
		title: "Data protection Rules of Various Countries",
		content:
			"Although Navicrow Holidays assure all the visitors that data is protected and all information shall remain confidential but if you are visiting www.navicrowholidays.com from outside India, please be aware that the data protection laws of India might not be the same as in your country. At the same time, please be assured that Navicrow Holidays takes all possible measure and uses internal firewalls to ensure that your privacy / Data is protected.",
	},
	{
		title: "Children's private Policy",
		content:
			"Navicrow Holidays can be accessed by visitors in general in any part of the world at the same time it does not offer services to children under the age of 13 years. If any Visitor with an age less than 13 years becomes our member, we generally delete or destroy such information as soon as we come to know of the same fact.",
	},
	{
		title: "Changes to Private Policy",
		content:
			"Navicrow Holidays reserves sole rights to add / modify the private policy at any time. Although we update our visitors such changes through emails but we still recommend visitors of our site to read private policy periodically before using the site. In case of any information on data protection, You can always write to us at: sales@navicrowholidays.com We would be glad to help you as soon as possible.",
	},
];

export const terms = [
	{
		title: "Terms of use of Navicrow Holidays",
		content:
			"We invite and welcome visitors on www.navicrowholidays.com website. This aim of this Website is to assist customers to gather travel information, post reviews /opinions on their travel related experiences / issues, engage them in travel related forums so that they gather maximum information on the travel industry / countries/ cities around the world. By accessing or using www.navicrowholidays.com in any manner, it is considered that you have agreed to be bound by the Agreement, as if you had signed this agreement. Please read the Agreement carefully. If you do not accept all of these terms and conditions, please do not use this Website. We suggest visitors of www.navicrowholidays.com to return to this page periodically to review the most current version of the Agreement. www.navicrowholidays.com reserves the right at any time, at our sole discretion, to change or otherwise modify the Agreement without prior notice, and your continued access or use of this Website signifies your acceptance of the updated or modified Agreement.",
	},
	{
		title: "Prices",
		content:
			"All Prices displayed for the Products and Services on Navicrow Holidays are subject to change without Prior information or notice and prices you see while making the booking may not be final until the full Payment for the Product or Service is made at the end of the Booking Process.\n\n  Prices on www.navicrowholidays.com shall be inclusive OR exclusive of Booking Fee, Hotel taxes, Airport taxes, Port taxes or any other applicable Government taxes (GST and VAT), etc. Availability of any Product or Service is subject to change at any point in time even while finalizing the booking, which can lead to Price variation, depending upon the basis of available room type in the Hotel, flight booking class, Cruise Cabin, etc at that point in time.",
	},
	{
		title: "Booking and Payments",
		content:
			'All Online Payments that happen for any of the Products or Services booked on www.navicrowholidays.com are secure. Navicrow Holidays does not store the Credit / Debit or any other Payment Card details of any customer in the database or in any data backup system. Once you are ready to transact you are transferred directly to the Bank Website. The card details are captured on the Bank Website and not in Navicrow Holidays. Navicrow Holidays takes no responsibility, in case of any misuse of Credit Card by whomsoever.\n\n  Navicrow Holidays acts as an agent for its third party providers and distributors for all products and services purchased by you on this website. You may place bookings for or may make purchases of products and services online at this site. A contract for the sale and purchase of products and services may be made online at this site by your acceptance of the products and services offered on the site (the "Contract") by third party providers and/or distributors and/or where stated, Navicrow Holidays, and you hereby agree to waive any rights to challenge the validity or enforceability of Contracts entered into on this site on the grounds that it was made in electronic form instead of by paper and/or signed or sealed.\n\n Please note that by indicating your acceptance to purchase any product or service offered on the website, you are obligated to complete such transactions. You are prohibited from indicating your acceptance to purchase products and services where you do not intend to complete such transactions. You may not purchase goods or services that you are prohibited from purchasing or possessing by any applicable Indian or local laws. The responsibility for ensuring compliance with all applicable laws shall be yours alone. By submitting an order to purchase goods or services, you represent and warrant that you have the legal right to purchase, utilise and/or possess such goods or services In case any user is booking a ticket/hotel or any other online services via a credit/debit/gift card which is not directly in the name of the person availing these services - www.navicrowholidays.com reserves the right to cancel/hold the said service till the time proper verification is provided. In case you are booking using someone else`s credit/debit/gift card - you are requested to send us a copy of the card used (at the following email id: sales@navicrowholidays.com or call us at 8954766781) a photo identification card of the person in whose name the card is, as well as the person in whose name the services are being provided and an authority letter from the said credit/debit/gift card holder.  In case any of the above mentioned conditions are not met, www.navicrowholidays.com reserves the right to declare such transactions as fraudulent and cancel/hold the service provided. It also holds the right to charge the requisite Cancellation Charges that may be applicable before refunding any such amount.',
	},
	{
		title: "Amendment to booking & purchase",
		content:
			"Kindly read and note the Terms & Conditions for amendment in bookings and Purchases, while making the booking or Purchase, which may vary for each product and service. If you don't find any Terms and conditions regarding the amendment policy, you may NOT change your booking or purchase online. Kindly call our Customer care team to know the amendment policy and do the necessary amendment.",
	},
	{
		title: "Cancellation & refunds",
		content:
			"Cancellation of Bookings and Cancellation Policy differs for each Product OR Service. When you make a booking, kindly view Terms & Conditions of each Product OR Service, which reflects the Cancellation, Refund with Booking Terms & Conditions. You can cancel the purchased product or service online on our Website - www.navicrowholidays.com . If you find difficulty in cancelling, you can get the same cancelled by calling our customer care team. Cancellation at your request may require a minimum processing time, subject to specific terms and conditions applicable to the type of Product or Service booked & purchased.\n\n You can cancel the purchased product or service online on our Website - www.navicrowholidays.com . If you find difficulty in cancelling, you can get the same cancelled by calling our customer care team. Cancellation at your request may require a minimum processing time, subject to specific terms and conditions applicable to the type of Product or Service booked & purchased.\n\n There may be full Cancellation penalty on the Products or services booked and purchased, which are Non-utilized or Cancelled after the Cancellation deadline mentioned in the Terms and Conditions, while making the purchase.\n\n You agree to bear the full cost of any booking, cancellation and administration fees for any products or services booked but not utilized for any reason. In some cases, Navicrow Holidays may charge cancellation or amendment fees in addition to those imposed by travel services providers.\n\n Navicrow Holidays reserves the right to decline any booking or purchase for any reason and shall not be held liable for any resulting claims of losses, damages or compensation. In such an event, Navicrow Holidays shall refund to you all unutilized money collected from you for that purchase.\n\n For Bookings and Purchases, which has already been paid by you, when cancelled, refunds will be made (based on the Refund Policy, mentioned in Terms and Conditions, while making the booking or at the time of Purchase). For Air ticket, it may take between 30 - 45 working days and for the Hotels it may take between 10 - 15 working days for the amount to get credited into your account. Refund policy may vary for every Product and Service\n\n The preceding refund timeline is a guide for your reference only and shall not be binding upon Navicrow Holidays.",
	},
	{
		title: "Duplicate bookings",
		content:
			"You agree that multiple duplicate bookings for the same traveller/s are not allowed and may result in damage and loss to Navicrow Holidays, which you will bear in full.",
	},
	{
		title: "Products & services",
		content:
			"Products & Services statements on this Website are for general description purposes only and not all the Products or Services are available in every state or country. You can send us an enquiry by clicking our Contact us or Send Query section, we will provide you with the details regarding terms & conditions, exclusions, products and services applicable for you. Please note the Products and Services that can be booked and purchased on the Website\n\n 1. Hotels -When you make a Hotel booking on the website, kindly go through the fact sheet with terms and conditions carefully to ensure the amenities present in the hotel or the category of the hotel is as per your requirement. Navicrow Holidays keeps updating the fact sheets with terms and conditions of the hotels, however it is dependent on the hotel to provide us with the updated information. Renovation at hotels is normally undertaken at sole discretion of hotels and not necessarily is informed to us. In case of any disputes, Navicrow Holidays shall not be held liable for any disruption in information\n\n 2. Sightseeing Tours - There is a choice of Seat in Coach (SIC) sightseeing and Private sightseeing tours. Seat in Coach tours / transfers may have a waiting time at the airport / hotels. Seat In Coach tours are as per the fixed timings and does not allow you to stop at any site of interest to you, which are not a Part of the Program, as Seat in Coach tours are fixed with a Schedule. You have to make a choice according to your requirement and budget. Entrance Fees at the monuments or places of Interest are not included in the Sightseeing tours unless and until specified.\n\n 3. Airlines - There is a choice to book low cost airlines and full service airlines options. Low Cost Airlines do not have all the services on board in the flight, so kindly choose the airlines carefully and please read the terms & conditions / cancellation Policy before making any purchase of the airlines ticket. There are paper tickets / e-tickets that will be issued to you and both are valid to travel by the airlines. With E-tickets, there is a mandatory requirement of Original identity Photo Card for you to carry and show at the check-in counter of the Airport. Navicrow Holidays is only an Intermediary party and hence takes no responsibility in case of any delay, change in route or cancellation in the flight due to any reasons.\n\n 4. Holidays - Kindly read the Terms & conditions with the Inclusions, Package Itinerary and other details before making any purchase of the Holiday Packages. In case if the Package is not as per your requirement or suits your needs, we can also customize the same for you. Kindly click on the Send Query of the Website with all the details like Hotel Category, No. of Nights, no. of pax, destinations would like to visit, etc and our Customer Care team will get back to you with the Package\n\n 5. Car Rental (Self drive or Chauffeur drive) - Please read the Terms & conditions before making any purchase of this service. Navicrow Holidays takes no responsibility in case of any break down of the car or the quality of car is not up to the level and delays due to bad traffic conditions, any penalty due to speed by the driver or by yourself, etc.\n\n 6. Travel Insurance - Navicrow Holidays strongly recommends insurance cover and safety for all the traveller/s travelling domestic or outside the Country. Traveller/s can purchase the travel Insurance on the Website. Please read the terms and conditions given by the Insurance Provider before issuing the same. Navicrow Holidays takes no responsibility and liability on the claims and disputes whatsoever as mentioned by the Insurance Provider.",
	},
	{
		title: "Delivery of products & services",
		content:
			"1. Hotels - When a Hotel booking is made and purchased on the Website, it gives an instant confirmation after the Payment is made completely and you will receive the hotel confirmation voucher in your mentioned email id. Voucher give details about the Hotel Address, Telephone number, Hotel Confirmation number, Meal Plan, Payment details, Supplier details, other relevant important information etc. Voucher is to be given to the Hotel at the Check-in counter.\n\n 2. Sightseeing Tours -When a sightseeing tour is booked and purchased online, an Instant confirmation voucher is issued and you will receive the same in your mentioned email id after the Payment is made completely. Voucher gives details about the pick-up time, pick-up point, date of the sightseeing tour, supplier details, Payment details, other relevant important information etc. There is a choice of Seat in Coach (SIC) sightseeing and Private sightseeing tours. Seat in Coach tours / transfers may have waiting time at the airport / hotels.\n\n 3. Airlines E-tickets - An E-ticket is a paperless electronic document with a unique confirmation number given to passengers in place of Paper ticket. Passengers are required to produce the unique confirmation number print-out at the airlines check-in counter to get the boarding pass.\n\n How to receive an E-ticket? After the complete Payment is made online via credit / debit or any other Payment Card, your e-ticket details will be mailed to you at your email address mentioned at the time of making the Purchase. In case if you don't have an email address, the details will be given to you over the phone or you can come to pick up your e ticket from our office or directly from the airlines counter at the airport by giving them the unique confirmation number - PNR\n\n Paper Tickets - Some of the airlines are still issuing Paper tickets. You will receive the booking confirmation number immediately after you have made full Payment online. All the paper tickets will be dispatched to the delivery address mentioned at the time of making the Purchase. It takes 3 working days to receive the Paper ticket at your address from the day of making the purchase. Navicrow Holidays would not be responsible in case if the customer is not present at the address at the time of delivery.\n\n 4. Holidays - Holiday Packages takes minimum 24 Hours in getting the Confirmation, once the Payment is made online on the Website, our customer care team will get in touch with you and will mail you the confirmation vouchers along with the day to day program at the email address mentioned by you at the time of making the Purchase or in case if there is no email ID, vouchers will be delivered at your address within 3 working days at no additional cost. Navicrow Holidays would not be responsible in case if the customer is not present at the address at the time of delivery.\n\n 5. Rail and Cruises - When a Rail or Cruise booking is made and purchased on the Website, it gives an instant confirmation after the Payment is made completely and you will receive the rail confirmation ticket or Cruise voucher in your email id mentioned at the time of making the purchase . If you don't have an email Id, you can call our Customer Care team and can get the same collected from our Office or it can also be delivered at your doorstep at an additional cost.\n\n 6. Car Rental (Self drive or Chauffeur drive) - It takes minimum 4 - 5 Hours for the Car rental confirmation. Once the Payment is made online, our customer care team will get in touch with you and give you the confirmation details over the phone and will also email you the confirmation voucher.\n\n 7. Travel Insurance - Travel Insurance Policy will be issued and mailed to you instantly at an email Id given at the time of making the purchase. In case if you don't have an email Id, you can get the details from our Customer Care Team and same can be collected from our Office or can be delivered at your doorstep at an additional cost.",
	},
	{
		title: "Third party travel service providers",
		content:
			"You may be bound by terms and conditions imposed by the travel service providers for whom Navicrow Holidays acts as an agent including conditions of carriage, refund and cancellation policies of airlines, cruise lines, car rental companies, hotels, vacation rentals, etc.\n\n Navicrow Holidays is not liable for any claims against non-fulfilment or unsatisfactory fulfilment of products and services purchased on your behalf by Navicrow Holidays from these third party providers and distributors, such as, but not limited to, airlines, hotels, tour operators, car rental companies, insurance companies, and other entities. Sometimes, Hotels, when they are in a overbooking situation, they move the booked Passengers to some other Hotel and also with the airlines and other service providers may overbook passengers on their flights or re-schedule flight times, in such incidents Navicrow Holidays takes no responsibility and should not be liable for any looses, damages that may take place due to the above situation",
	},
	{
		title: "Terms & conditions for product & services",
		content:
			"Some of the Products and Services have special governing Terms & Conditions, which shall apply in addition to the Terms and Conditions mentioned separately for each product and service. It is important that you read the obtain the information related to these specific Products and Services as they may contain exclusions of limitations of liability and other terms and conditions, including restrictions on amendment or cancellation. Some of these terms and conditions for specific products and services shall include terms and conditions found on your screens and when using any part of this website.",
	},
	{
		title: "Jurisdiction",
		content:
			"In the event of any dispute, the dispute shall be referred to the sole arbitrator to be appointed by Navicrow Holidays in Delhi and the matter shall be subjected to the jurisdiction of Delhi Courts only.",
	},
	{
		title: "Passport, visa & health requirement ",
		content:
			"It is mandatory requirement for most of the Countries; foreign nationals coming into the country must hold Passport with a validity of minimum 06 Months. Visa and Health regulations are different from country to country. It is the sole responsibility of an Individual Traveller to ensure the submission of complete documentation and medical requirements to the Country Embassy / consulate they are visiting. Navicrow Holidays takes no responsibility in any rejections or declining of the Visa issuance due to any reasons.\n\n Visa/Immigration :\n\n 1. www.navicrowholidays.com is only a facilitator and is not directly responsible for your Visa and Immigration facilities\n\n 2. Please be advised that Immigration and Visa are directly in the jurisdiction of the respective embassies & consulate. www.navicrowholidays.com or any of its third-party vendors do not guarantee the confirmation of any Visas or related documents.\n\n 3. We advise you to go through the immigration and travel rules and regulations of the country and ensure that you have the requisite documents, transit permits and permissions for your holiday. www.navicrowholidays.com will not be responsible in any manner for the same.\n\n 4. Navicrow Holidays customers are advised to check for Airport Charges (if any) at various international destinations apart from India. Navicrow Holidays shall not be responsible to pay any such charges at various destinations that the customer is travelling to.\n\n Navicrow Holidays reserves the right to decline any booking or purchase for any reason and shall not be liable for any resulting claims for losses, damages or compensation. In such an event, Navicrow Holidays shall refund to you all the Unutilized Payment collected after deducting the Booking Fee / Administration charges / Cancellation Charges (if applicable) for that purchase.",
	},
	{
		title: "Content submission",
		content:
			'Navicrow Holidays, enable users to submit, post, exchange, transmit or make available for inclusion information, ideas, opinions, images, photos or other materials (collectively "Content"). You agree that Responsibility for all the Content made Posted or available on Navicrow Holidays is your responsibility. Navicrow Holidays, its partners, affiliates, subsidiaries or employees shall in no way be held liable and responsible for any content posted by you or any third party. Navicrow Holidays at its discretion can refuse to post or remove the contents posted by you for any reason including, without limitation, violation of these terms or if it is otherwise deemed to be unlawful or objectionable.\n\n When the content is posted by you, you give permission without any charges to Navicrow Holidays an unrestricted license to use, copy, modify, reformate, translate, display publically, republish whole or part of the Content for any purpose of Commercial use or in connection with any other services offered or in Promotion by Navicrow Holidays\n\n You also confirm that you have all rights to license the Content you posted on the Website for the purposes mentioned above.',
	},
	{
		title:
			"Use of the website - Visitors / Users of this Website hereby agree upon following terms.",
		content:
			"1. Information/ experience posted by you on Navicrow Holidays is true, accurate, current and complete and it is not a biased opinion for any reason due to personal enmity\n\n 2. If you have a Navicrow Holidays account, you will safeguard your account information and will supervise and be completely responsible for any use of your account by anyone other than you.\n\n 3. You must be 13 years of age or older in order to register for an account and contribute to our website. Navicrow Holidays does not knowingly collect the information of anyone under the age of 13. Navicrow Holidays retain sole right and has sole discretion to deny access to anyone to this Website and the services we offer, at any time and for any reason, including, but not restricted to, for violation of this Agreement.",
	},
	{
		title: "Prohibited activites on the site",
		content:
			'The content and information related to messages, data, information, text, music, sound, photos, graphics, video, maps, icons, software, code or other material on this website, as well as the infrastructure used to provide such content and information, becomes proprietary rights of Navicrow Holidays. You agree that the information posted by you is true and complete to your knowledge and is not biased. You also agree not to:\n\n 1. Use this Website or its contents for any commercial purpose;\n\n 2. Access, monitor or copy any content or information of this Website using any robot, spider, scraper or other automated means or any manual process for any purpose without our written permission;\n\n 3. Violate the restrictions in any robot exclusion headers on this Website or bypass or circumvent other measures employed to prevent or limit access to this Website;\n\n 4. Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure;\n\n 5. Deep-link to any portion of this Website for any purpose without our express written permission; or\n\n 6. "Frame", "Mirror" or otherwise incorporate any part of this Website into any other website without our prior written authorization.\n\n 7. Attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software programs used by Navicrow Holidays in connection with the Website or the services',
	},
	{
		title: "Reviews, comments",
		content:
			"Navicrow Holidays aim is to update travelers by real time experiences of other travelers. We are thankful to our visitors for writing their experiences on this site. Please be informed that after posting content on this Website by any way, including any review, questions, comments, suggestions, ideas etc., you grant Navicrow Holidays and its affiliates a nonexclusive, royalty-free, perpetual, transferable, irrevocable and fully sub licensable right to (a) use, reproduce, modify, adapt, translate, distribute, publish, create derivative works from and publicly display and perform such submissions throughout the world in any media and (b) use the name that you submit in connection with such submissions. You acknowledge that Navicrow Holidays may choose to provide attribution of your comments or reviews at our discretion. You further grant Navicrow Holidays the right to pursue at law any person or entity that violates your or Navicrow Holidays rights in the Submissions by a breach of this Agreement. You also acknowledge and agree that all Content Submitted / posted on the website by you are non-confidential and non-proprietary once it is posted. Navicrow Holidays has just provided interactive areas on the site as a platform for discussions but at the same time all the visitors of Navicrow Holidays are solely responsible for use of interactive areas of the site and are using at their own risk\n\n All the visitors and user of www.navicrowholidays.com undertakes not to place / upload / transmit, store, create\n\n 1. Any message, data, information, content , music, sound, photos, graphics, code or any other material that is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing, threatening, invasive of privacy or publicity rights, abusive, inflammatory, fraudulent or otherwise objectionable;\n\n 2. Content that would constitute, encourage or provide instructions for a criminal offense, violate the rights of any party, or that would otherwise create liability or violate any local, state, national or international law\n\n 3. Content that may infringe any patent, trademark, trade secret, copyright or other intellectual or proprietary right of any party;\n\n 4. Content that impersonates any person or entity or otherwise misrepresents your affiliation with a person or entity, including Navicrow Holidays;\n\n 5. Unsolicited promotions, political campaigning, advertising, contests, raffles, or solicitations;\n\n 6. Private information of any third party, including, without limitation, surname (family name) addresses, phone numbers, email addresses, Social Security numbers and credit card numbers;\n\n 7. Viruses, corrupted data or other harmful, disruptive or destructive files;\n\n 8. Content that is unrelated to the topic of the Interactive Area(s) in which such Content is posted; or\n\n 9. Content or links to content that, in the sole judgment of Navicrow Holidays, (a) violates the previous subsections herein, (b) is objectionable, (c) which restricts or inhibits any other person from using or enjoying the Interactive Areas or the Site, or (d) which may expose Navicrow Holidays or its affiliates or its users to any harm or liability of any type.\n\n Navicrow Holidays takes no responsibility and assumes no liability for any Content posted, stored or uploaded by you or any visitors / third party, or for any loss or damage thereto, nor is Navicrow Holidays liable for any mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography or profanity you may encounter.\n\n Navicrow Holidays has just provided an interactive platform and is not liable for any statements, representations or Content provided by its users in any public forum, personal home page or other Interactive Area.  \n\n Navicrow Holidays reserves the sole right to remove, screen or edit without notice any Content posted or stored on the Site at any time and for any reason, and you are solely responsible for creating backup copies of and replacing any Content you post or store on the Site at your sole cost and expense.\n\n If it is determined that you retain moral rights (including rights of attribution or integrity) in the Content, you hereby declare that (a) you do not require that any personally identifying information be used in connection with the Content, or any derivative works of or upgrades or updates thereto; (b) you have no objection to the publication, use, modification, deletion and exploitation of the Content by Navicrow Holidays or its licensees, successors and assigns; (c) you forever waive and agree not to claim or assert any entitlement to any and all moral rights of an author in any of the Content; and (d) you forever release Navicrow Holidays , and its licensees, successors and assigns, from any claims that you could otherwise assert against Navicrow Holidays by virtue of any such moral rights.\n\n Any use of the Interactive Areas or other portions of the Site in violation of the foregoing violates these Site Terms and may result in, among other things, termination or suspension of your rights to use the Interactive Areas and/or the Site. In order to cooperate with legitimate governmental requests, subpoenas or court orders, to protect Navicrow Holidays systems and customers, or to ensure the integrity and operation of Navicrow Holidays business and systems, Navicrow Holidays may access and disclose any information it considers necessary or appropriate, including, without limitation, user profile information (i.e. name, email address, etc.), IP addressing and traffic information, usage history, and posted Content. Navicrow Holidays's may right to disclose any such information shall take precedence over any terms of Navicrow Holidays's Privacy Policy. Navicrow Holidays suggest to all its visitors and users of the site / passengers to investigate and whether review / content placed is correct or just an opinion. Navicrow Holidays will not be responsible for any wrong information placed on the site IS NOT ACCOUNTABLE FOR DAMAGES OR LOSSES THAT MAY RESULT FROM TRAVEL TO SUCH DESTINATIONS.",
	},
	{
		title: "Liability disclaimer",
		content:
			'THE CONTENT, INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES PUBLISHED ON THIS WEBSITE MAY INCLUDE INACCURACIES OR ERRORS.Navicrow Holidays , ITS SUBSIDIARIES / PARENT COMPANY AND CORPORATE AFFILIATES, DO NOT GUARANTEE THE ACCURACY OF, AND DISCLAIM ALL LIABILITY FOR ANY ERRORS OR OTHER INACCURACIES RELATING TO THE INFORMATION AND DESCRIPTION OF THE HOTEL, AIR, CRUISE, CAR AND ANY OTHER TRAVEL PRODUCTS DISPLAYED ON THIS WEBSITE (INCLUDING, WITHOUT LIMITATION, THE PRICING, PHOTOGRAPHS, LIST OF HOTEL AMENITIES, GENERAL PRODUCT DESCRIPTIONS, ETC.).\n\n Navicrow Holidays MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY OF THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES CONTAINED ON THIS WEBSITE FOR ANY PURPOSE, AND THE INCLUSION OR OFFERING OF ANY PRODUCTS OR SERVICES ON THIS WEBSITE DOES NOT CONSTITUTE ANY ENDORSEMENT OR RECOMMENDATION OF SUCH PRODUCTS OR SERVICES BY THE Navicrow Holidays. ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. Navicrow Holidays DISCLAIM ALL WARRANTIES AND CONDITIONS THAT THIS WEBSITE, ITS SERVERS OR ANY EMAIL SENT FROM Navicrow Holidays, ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. Navicrow Holidays HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES, INCLUDING ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON INFRINGEMENT.\n\n IN NO EVENT SHALL Navicrow Holidays (ITS OFFICERS, DIRECTORS AND AFFILIATES/ PARTNERS) BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF, OR IN ANY WAY CONNECTED WITH, YOUR ACCESS TO, DISPLAY OF OR USE OF THIS WEBSITE OR WITH THE DELAY OR INABILITY TO ACCESS, DISPLAY OR USE THIS WEBSITE (INCLUDING, BUT NOT LIMITED TO, YOUR RELIANCE UPON OPINIONS APPEARING ON THIS WEB SITE; ANY COMPUTER VIRUSES, INFORMATION, SOFTWARE, LINKED SITES, PRODUCTS, AND SERVICES OBTAINED THROUGH THIS WEBSITE; OR OTHERWISE ARISING OUT OF THE ACCESS TO, DISPLAY OF OR USE OF THIS WEBSITE) WHETHER BASED ON A THEORY OF NEGLIGENCE, CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, AND EVEN IF Navicrow Holidays HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n\n The limitation of liability reflects the allocation of risk between the parties. The limitations specified in this section will survive and apply even if any limited remedy specified in these terms is found to have failed of its essential purpose. The limitations of liability provided in these terms inure to the benefit of Navicrow Holidays.',
	},
	{
		title: "Indemnification",
		content:
			"You agree to defend and indemnify Navicrow Holidays and its affiliates and any of their officers, directors, employees and agents from and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature including but not limited to reasonable legal and accounting fees, brought by third parties as a result of:\n\n 1. your breach of this Agreement or the documents referenced herein;\n\n 2. your violation of any law or the rights of a third party; or\n\n 3 your use of this Website.",
	},
	{
		title: "Links to third-party sites",
		content:
			"This Website may contain hyperlinks to websites operated by parties other than Navicrow Holidays. Such hyperlinks are provided for your reference only. We do not control such websites and are not responsible for their contents or the privacy or other practices of such websites.",
	},
	{
		title: "Currency converter",
		content:
			"Currency rates are based on various publicly available sources and should be used as guidelines only. Rates may not be verified as accurate, and actual rates may be different from what is being displayed. The information supplied by this application is believed to be accurate, but Navicrow Holidays, and/or its affiliates do not warrant or guarantee such accuracy. When using this information for any financial purpose, we advise you to consult a qualified professional to verify the accuracy of the currency rates. We do not authorize the use of this information for any purpose other than your personal use and you are expressly prohibited from the resale, redistribution, and use of this information for commercial purposes.",
	},
	{
		title: "Copyright and trademark notices",
		content:
			"All contents of this Website are: 2010 Navicrow Holidays All rights reserved. Navicrow Holidays is not responsible for content on websites operated by parties other than Navicrow Holidays. Navicrow Holidays, logo and Navicrow Holidays Family - Cartoon Characters and all other product or service names or slogans displayed on the Site are registered and/or common law trademarks of Navicrow Holidays, and/or its suppliers or licensors, and may not be copied, imitated or used, in whole or in part, without the prior written permission of Navicrow Holidays or the applicable trademark holder. In addition, the look and feel of the Site, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of Navicrow Holidays and may not be copied, imitated or used, in whole or in part, without the prior written permission of Navicrow Holidays. All other trademarks, registered trademarks, product names and company names or logos mentioned in the Site are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by Navicrow Holidays.\n\n Other logos and product and company names mentioned herein may be the trademarks of their respective owners.\n\n If you are aware of an infringement of either your brand or our brand, please let us know by e-mailing us at sales@navicrowholidays.com.\n\n You agree that all claims you may have against Navicrow Holidays arising from or relating to the Site must be heard and resolved in a court of competent subject matter jurisdiction located in Delhi India. Use of this Website is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including, without limitation, this paragraph.\n\n You agree that no joint venture, agency, partnership, or employment relationship exists between you and Navicrow Holidays and/or Affiliates as a result of this Agreement or use of this Website.\n\n Our performance of this Agreement is subject to existing laws and legal process, and nothing contained in this Agreement limits our right to comply with law enforcement or other governmental or legal requests or requirements relating to your use of this Website or information provided to or gathered by us with respect to such use. To the extent allowed by applicable law, you agree that you will bring any claim or cause of action arising from or relating to your access or use of this Website within two (2) years from the date on which such claim or action arose or accrued or such claim or cause of action will be irrevocably waived.\n\n If any part of this Agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remaining provisions in the Agreement shall continue in effect.\n\n This Agreement (and any other terms and conditions referenced herein) constitutes the entire agreement between you and Navicrow Holidays with respect to this Website and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the customer and Navicrow Holidays with respect to this Website. A printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.\n\n Fictitious names of companies, products, people, characters, and/or data mentioned on this Website are not intended to represent any real individual, company, product, or event. Any rights not expressly granted herein are reserved.",
	},
	{
		title: "service help",
		content:
			"For answers to your questions, you can write to us at: sales@navicrowholidays.com",
	},
];
