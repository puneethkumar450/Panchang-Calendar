const IST_OFFSET_MINUTES = 330;

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const tithiNames = [
  "Pratipada",
  "Dvitiya",
  "Tritiya",
  "Chaturthi",
  "Panchami",
  "Shashthi",
  "Saptami",
  "Ashtami",
  "Navami",
  "Dashami",
  "Ekadashi",
  "Dvadashi",
  "Trayodashi",
  "Chaturdashi",
  "Purnima",
  "Pratipada",
  "Dvitiya",
  "Tritiya",
  "Chaturthi",
  "Panchami",
  "Shashthi",
  "Saptami",
  "Ashtami",
  "Navami",
  "Dashami",
  "Ekadashi",
  "Dvadashi",
  "Trayodashi",
  "Chaturdashi",
  "Amavasya",
];
const nakshatraNames = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashirsha",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];
const yogaNames = [
  "Vishkambha",
  "Priti",
  "Ayushman",
  "Saubhagya",
  "Shobhana",
  "Atiganda",
  "Sukarma",
  "Dhriti",
  "Shoola",
  "Ganda",
  "Vriddhi",
  "Dhruva",
  "Vyaghata",
  "Harshana",
  "Vajra",
  "Siddhi",
  "Vyatipata",
  "Variyan",
  "Parigha",
  "Shiva",
  "Siddha",
  "Sadhya",
  "Shubha",
  "Shukla",
  "Brahma",
  "Indra",
  "Vaidhriti",
];
const zodiacNames = [
  "Mesha",
  "Vrishabha",
  "Mithuna",
  "Karka",
  "Simha",
  "Kanya",
  "Tula",
  "Vrischika",
  "Dhanu",
  "Makara",
  "Kumbha",
  "Meena",
];
const solarTamilMonths = [
  "Chithirai",
  "Vaikasi",
  "Aani",
  "Aadi",
  "Avani",
  "Purattasi",
  "Aippasi",
  "Karthigai",
  "Margazhi",
  "Thai",
  "Masi",
  "Panguni",
];
const solarBengaliMonths = [
  "Boishakh",
  "Joishtho",
  "Asharh",
  "Shrabon",
  "Bhadro",
  "Ashwin",
  "Kartik",
  "Ogrohayon",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];
const lunarMonthBySunSign = [
  "Vaishakha",
  "Jyeshtha",
  "Ashadha",
  "Shravana",
  "Bhadrapada",
  "Ashwin",
  "Kartika",
  "Margashirsha",
  "Pausha",
  "Magha",
  "Phalguna",
  "Chaitra",
];
const karanaCycle = ["Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti"];

const cities = {
  chennai: { label: "Chennai", lat: 13.0827, lon: 80.2707, stateKey: "tamilNadu", stateLabel: "Tamil Nadu" },
  hyderabad: { label: "Hyderabad", lat: 17.385, lon: 78.4867, stateKey: "telangana", stateLabel: "Telangana" },
  ahmedabad: { label: "Ahmedabad", lat: 23.0225, lon: 72.5714, stateKey: "gujarat", stateLabel: "Gujarat" },
  kolkata: { label: "Kolkata", lat: 22.5726, lon: 88.3639, stateKey: "westBengal", stateLabel: "West Bengal" },
};

const nationalHolidayRules = [
  { month: 0, day: 26, label: "Republic Day" },
  { month: 7, day: 15, label: "Independence Day" },
  { month: 9, day: 2, label: "Gandhi Jayanti" },
];

const publicHolidayRules = [
  { month: 0, day: 1, label: "New Year's Day" },
  { month: 0, day: 14, label: "Makara Sankranti / Pongal" },
  { month: 4, day: 1, label: "May Day" },
  { month: 11, day: 25, label: "Christmas" },
];

const stateHolidayRules = {
  tamilNadu: [
    { month: 0, day: 14, label: "Pongal" },
    { month: 0, day: 15, label: "Thiruvalluvar Day" },
    { month: 0, day: 16, label: "Uzhavar Thirunal" },
    { month: 3, day: 14, label: "Tamil New Year" },
    { month: 4, day: 1, label: "May Day" },
    { month: 6, day: 18, label: "Tamil Nadu Day" },
  ],
  telangana: [
    { month: 0, day: 14, label: "Sankranti" },
    { month: 5, day: 2, label: "Telangana Formation Day" },
  ],
  gujarat: [
    { month: 0, day: 14, label: "Uttarayan" },
    { month: 4, day: 1, label: "Gujarat Day" },
  ],
  westBengal: [
    { month: 0, day: 23, label: "Netaji Jayanti" },
    { month: 3, day: 14, label: "Pohela Boishakh" },
  ],
};

// 2026 India holiday list added from timeanddate.com/holidays/india/2026.
// We map gazetted, central-government, and restricted holiday entries into the
// public holiday bucket so they can be shown with the existing toggle model.
const sourcePublicHolidayRulesByYear = {
  2026: [
    { month: 0, day: 1, label: "New Year's Day" },
    { month: 0, day: 3, label: "Hazarat Ali's Birthday" },
    { month: 0, day: 14, label: "Pongal" },
    { month: 0, day: 14, label: "Makar Sankranti" },
    { month: 0, day: 23, label: "Vasant Panchami" },
    { month: 0, day: 26, label: "Republic Day" },
    { month: 1, day: 1, label: "Guru Ravidas Jayanti" },
    { month: 1, day: 12, label: "Maharishi Dayanand Saraswati Jayanti" },
    { month: 1, day: 15, label: "Maha Shivaratri" },
    { month: 1, day: 19, label: "Shivaji Jayanti" },
    { month: 2, day: 3, label: "Holika Dahana" },
    { month: 2, day: 4, label: "Holi" },
    { month: 2, day: 19, label: "Ugadi" },
    { month: 2, day: 19, label: "Gudi Padwa" },
    { month: 2, day: 20, label: "Jamat Ul-Vida" },
    { month: 2, day: 21, label: "Ramzan Id" },
    { month: 2, day: 26, label: "Rama Navami" },
    { month: 2, day: 31, label: "Mahavir Jayanti" },
    { month: 3, day: 3, label: "Good Friday" },
    { month: 3, day: 5, label: "Easter Day" },
    { month: 3, day: 14, label: "Vaisakhi" },
    { month: 3, day: 14, label: "Mesadi" },
    { month: 3, day: 14, label: "Ambedkar Jayanti" },
    { month: 3, day: 15, label: "Bahag Bihu" },
    { month: 4, day: 1, label: "Buddha Purnima" },
    { month: 4, day: 9, label: "Birthday of Rabindranath" },
    { month: 4, day: 28, label: "Bakrid" },
    { month: 5, day: 26, label: "Muharram/Ashura (Tentative Date)" },
    { month: 6, day: 16, label: "Rath Yatra" },
    { month: 7, day: 15, label: "Independence Day" },
    { month: 7, day: 26, label: "Milad un-Nabi (Tentative Date)" },
    { month: 7, day: 26, label: "Onam" },
    { month: 7, day: 28, label: "Raksha Bandhan" },
    { month: 8, day: 4, label: "Janmashtami" },
    { month: 8, day: 14, label: "Ganesh Chaturthi" },
    { month: 9, day: 2, label: "Mahatma Gandhi Jayanti" },
    { month: 9, day: 18, label: "Maha Saptami" },
    { month: 9, day: 19, label: "Maha Ashtami" },
    { month: 9, day: 20, label: "Dussehra" },
    { month: 9, day: 26, label: "Maharishi Valmiki Jayanti" },
    { month: 9, day: 29, label: "Karaka Chaturthi" },
    { month: 10, day: 8, label: "Naraka Chaturdasi" },
    { month: 10, day: 8, label: "Diwali/Deepavali" },
    { month: 10, day: 9, label: "Govardhan Puja" },
    { month: 10, day: 11, label: "Bhai Duj" },
    { month: 10, day: 15, label: "Chhat Puja (Pratihar Sashthi/Surya Sashthi)" },
    { month: 10, day: 24, label: "Guru Nanak Jayanti" },
    { month: 10, day: 24, label: "Guru Tegh Bahadur's Martyrdom Day" },
    { month: 11, day: 23, label: "Hazarat Ali's Birthday" },
    { month: 11, day: 24, label: "Christmas Eve" },
    { month: 11, day: 25, label: "Christmas" },
  ],
};

const deityThemes = {
  Chithirai: {
    deity: "Meenakshi",
    note: "Chithirai month is celebrated with divine wedding processions and temple festivals.",
    accent: "#c7672b",
  },
  Vaikasi: {
    deity: "Murugan",
    note: "Vaikasi evokes Murugan festivals, valor, and youthful energy.",
    accent: "#b14822",
  },
  Aani: {
    deity: "Nataraja",
    note: "Aani is associated with cosmic dance, rhythm, and sacred renewal.",
    accent: "#8a2d20",
  },
  Aadi: {
    deity: "Amman",
    note: "Aadi honors the goddess through Friday prayers and protective blessings.",
    accent: "#9b2138",
  },
  Avani: {
    deity: "Ganesha",
    note: "Avani brings learning, fresh beginnings, and Vinayaka devotion.",
    accent: "#7f5324",
  },
  Purattasi: {
    deity: "Venkateswara",
    note: "Purattasi is cherished for Saturday worship and devotional offerings.",
    accent: "#7c2417",
  },
  Aippasi: {
    deity: "Lakshmi",
    note: "Aippasi celebrates abundance, light, and the grace of prosperity.",
    accent: "#8c3442",
  },
  Karthigai: {
    deity: "Murugan",
    note: "Karthigai is a radiant month of lamps, fire, and sacred courage.",
    accent: "#c86424",
  },
  Margazhi: {
    deity: "Andal",
    note: "Margazhi carries devotional songs, dawn prayers, and temple beauty.",
    accent: "#6a2b6e",
  },
  Thai: {
    deity: "Surya",
    note: "Thai welcomes harvest blessings and the turning of light toward new beginnings.",
    accent: "#a44b16",
  },
  Masi: {
    deity: "Shiva",
    note: "Masi is inward, contemplative, and deeply linked to Shiva worship.",
    accent: "#584471",
  },
  Panguni: {
    deity: "Murugan",
    note: "Panguni is marked by sacred unions, vows, and temple celebration.",
    accent: "#93501c",
  },
};

const settings = {
  nationalHolidays: false,
  publicHolidays: false,
  stateHolidays: false,
  festivals: false,
  rahu: false,
  ketu: false,
  ekadashi: false,
  zodiac: false,
  tamil: false,
  telugu: false,
  gujarati: false,
  bengali: false,
};

const languages = {
  en: {
    label: "English",
    locale: "en-IN",
    ui: {
      pageTitle: "Panchang Calendar",
      heroEyebrow: "Panchang • Regional Calendars • Daily Muhurtham",
      heroTitle: "Traditional Indian Calendar",
      heroText:
        "A full-year calendar with Panchang details, Rahu Kalam, Yamagandam, Ekadashi, zodiac, and Tamil, Telugu, Gujarati, and Bengali calendar overlays.",
      monthShrine: "Month Shrine",
      year: "Year",
      city: "City",
      language: "Language",
      displayOnCalendar: "Display On Calendar",
      nationalHolidays: "National Holidays",
      publicHolidays: "Public Holidays",
      stateHolidays: "State Holidays",
      festivals: "Festivals",
      rahu: "Rahu Kalam",
      ketu: "Ketu / Yamagandam",
      ekadashi: "Ekadashi",
      zodiac: "Zodiac",
      tamil: "Tamil",
      telugu: "Telugu",
      gujarati: "Gujarati",
      bengali: "Bengali",
      selectedDay: "Selected Day",
      included: "Included",
      included1: "Astronomical tithi, nakshatra, yoga, and karana",
      included2: "Rahu Kalam, Yamagandam, and Gulika by city sunrise/sunset",
      included3: "Separate national, public, and selected-state holidays",
      included4: "Solar Tamil and Bengali dates",
      included5: "Lunar Telugu and Gujarati style month/tithi labels",
      calendarView: "Calendar View",
      previous: "Previous",
      next: "Next",
      tithi: "Tithi",
      nakshatra: "Nakshatra",
      yoga: "Yoga",
      karana: "Karana",
      rasi: "Rasi",
      moonSign: "Moon sign",
      rahuKalam: "Rahu Kalam",
      ketuYamagandam: "Ketu / Yamagandam",
      vratam: "Vratam",
      observance: "Observance",
      sunrise: "Sunrise",
      sunset: "Sunset",
      stateHolidaySuffix: "holidays",
    },
  },
  hi: { label: "हिन्दी", locale: "hi-IN", ui: { pageTitle: "पंचांग कैलेंडर", heroEyebrow: "पंचांग • क्षेत्रीय कैलेंडर • दैनिक मुहूर्त", heroTitle: "पारंपरिक भारतीय कैलेंडर", heroText: "यह वार्षिक कैलेंडर पंचांग विवरण, राहु काल, यमगण्डम, एकादशी, राशि और तमिल, तेलुगु, गुजराती, बंगाली कैलेंडर परतों के साथ आता है।", monthShrine: "मासिक देवालय", year: "वर्ष", city: "शहर", language: "भाषा", displayOnCalendar: "कैलेंडर पर दिखाएं", nationalHolidays: "राष्ट्रीय अवकाश", publicHolidays: "सार्वजनिक अवकाश", stateHolidays: "राज्य अवकाश", festivals: "त्योहार", rahu: "राहु काल", ketu: "केतु / यमगण्डम", ekadashi: "एकादशी", zodiac: "राशि", tamil: "तमिल", telugu: "तेलुगु", gujarati: "गुजराती", bengali: "बंगाली", selectedDay: "चयनित दिन", included: "शामिल", included1: "खगोलीय तिथि, नक्षत्र, योग और करण", included2: "शहर के सूर्योदय-सूर्यास्त के अनुसार राहु काल, यमगण्डम और गुलिक", included3: "अलग राष्ट्रीय, सार्वजनिक और चुने हुए राज्य अवकाश", included4: "सौर तमिल और बंगाली तिथियां", included5: "चंद्र तेलुगु और गुजराती शैली के मास/तिथि लेबल", calendarView: "कैलेंडर दृश्य", previous: "पिछला", next: "अगला", tithi: "तिथि", nakshatra: "नक्षत्र", yoga: "योग", karana: "करण", rasi: "राशि", moonSign: "चंद्र राशि", rahuKalam: "राहु काल", ketuYamagandam: "केतु / यमगण्डम", vratam: "व्रत", observance: "पालन", sunrise: "सूर्योदय", sunset: "सूर्यास्त", stateHolidaySuffix: "अवकाश" } },
  te: { label: "తెలుగు", locale: "te-IN", ui: { pageTitle: "పంచాంగ క్యాలెండర్", heroEyebrow: "పంచాంగం • ప్రాంతీయ క్యాలెండర్లు • దిన ముహూర్తం", heroTitle: "సాంప్రదాయ భారతీయ క్యాలెండర్", heroText: "ఈ వార్షిక క్యాలెండర్‌లో పంచాంగ వివరాలు, రాహు కాలం, యమగండం, ఏకాదశి, రాశి మరియు తమిళ, తెలుగు, గుజరాతి, బెంగాలీ క్యాలెండర్ పొరలు ఉంటాయి.", monthShrine: "మాస దేవాలయం", year: "సంవత్సరం", city: "నగరం", language: "భాష", displayOnCalendar: "క్యాలెండర్‌లో చూపు", nationalHolidays: "జాతీయ సెలవులు", publicHolidays: "ప్రభుత్వ సెలవులు", stateHolidays: "రాష్ట్ర సెలవులు", festivals: "పండుగలు", rahu: "రాహు కాలం", ketu: "కేతు / యమగండం", ekadashi: "ఏకాదశి", zodiac: "రాశి", tamil: "తమిళం", telugu: "తెలుగు", gujarati: "గుజరాతీ", bengali: "బెంగాలీ", selectedDay: "ఎంచుకున్న రోజు", included: "చేర్చినవి", included1: "ఖగోళ తిథి, నక్షత్రం, యోగం, కరణం", included2: "నగర సూర్యోదయం-సూర్యాస్తమయం ఆధారంగా రాహు కాలం, యమగండం, గుళిక", included3: "వేర్వేరు జాతీయ, ప్రజా, రాష్ట్ర సెలవులు", included4: "సౌర తమిళ, బెంగాలీ తేదీలు", included5: "చాంద్రమాన తెలుగు, గుజరాతీ మాస/తిథి లేబుళ్లు", calendarView: "క్యాలెండర్ వీక్షణ", previous: "మునుపటి", next: "తర్వాత", tithi: "తిథి", nakshatra: "నక్షత్రం", yoga: "యోగం", karana: "కరణం", rasi: "రాశి", moonSign: "చంద్ర రాశి", rahuKalam: "రాహు కాలం", ketuYamagandam: "కేతు / యమగండం", vratam: "వ్రతం", observance: "ఆచరణ", sunrise: "సూర్యోదయం", sunset: "సూర్యాస్తమయం", stateHolidaySuffix: "సెలవులు" } },
  ta: { label: "தமிழ்", locale: "ta-IN", ui: { pageTitle: "பஞ்சாங்க நாட்காட்டி", heroEyebrow: "பஞ்சாங்கம் • பிராந்திய நாட்காட்டிகள் • தின முகூர்த்தம்", heroTitle: "பாரம்பரிய இந்திய நாட்காட்டி", heroText: "இந்த வருடாந்திர நாட்காட்டியில் பஞ்சாங்க விவரங்கள், ராகு காலம், யமகண்டம், ஏகாதசி, ராசி மற்றும் தமிழ், தெலுங்கு, குஜராத்தி, பெங்காலி காலண்டர் அடுக்குகள் உள்ளன.", monthShrine: "மாத சன்னதி", year: "ஆண்டு", city: "நகரம்", language: "மொழி", displayOnCalendar: "நாட்காட்டியில் காட்டு", nationalHolidays: "தேசிய விடுமுறை", publicHolidays: "பொது விடுமுறை", stateHolidays: "மாநில விடுமுறை", festivals: "திருவிழாக்கள்", rahu: "ராகு காலம்", ketu: "கேது / யமகண்டம்", ekadashi: "ஏகாதசி", zodiac: "ராசி", tamil: "தமிழ்", telugu: "தெலுங்கு", gujarati: "குஜராத்தி", bengali: "பெங்காலி", selectedDay: "தேர்ந்த நாள்", included: "சேர்க்கப்பட்டவை", included1: "வானியல் திதி, நட்சத்திரம், யோகம், கரணம்", included2: "நகர சூரியோதயம்-அஸ்தமனம் அடிப்படையில் ராகு காலம், யமகண்டம், குளிகை", included3: "தனி தேசிய, பொது, மாநில விடுமுறைகள்", included4: "சூரிய தமிழ் மற்றும் பெங்காலி தேதிகள்", included5: "சந்திர தெலுங்கு மற்றும் குஜராத்தி மாத/திதி குறிச்சொற்கள்", calendarView: "நாட்காட்டி காட்சி", previous: "முந்தைய", next: "அடுத்து", tithi: "திதி", nakshatra: "நட்சத்திரம்", yoga: "யோகம்", karana: "கரணம்", rasi: "ராசி", moonSign: "சந்திர ராசி", rahuKalam: "ராகு காலம்", ketuYamagandam: "கேது / யமகண்டம்", vratam: "விரதம்", observance: "அனுஷ்டാനം", sunrise: "சூரியோதயம்", sunset: "சூரியாஸ்தமனம்", stateHolidaySuffix: "விடுமுறைகள்" } },
  kn: { label: "ಕನ್ನಡ", locale: "kn-IN", ui: { pageTitle: "ಪಂಚಾಂಗ ಕ್ಯಾಲೆಂಡರ್", heroEyebrow: "ಪಂಚಾಂಗ • ಪ್ರಾದೇಶಿಕ ಕ್ಯಾಲೆಂಡರ್‌ಗಳು • ದೈನಂದಿನ ಮುಹೂರ್ತ", heroTitle: "ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಕ್ಯಾಲೆಂಡರ್", heroText: "ಈ ವಾರ್ಷಿಕ ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ಪಂಚಾಂಗ ವಿವರಗಳು, ರಾಹು ಕಾಲ, ಯಮಗಂಡ, ಏಕಾದಶಿ, ರಾಶಿ ಮತ್ತು ತಮಿಳು, ತೆಲುಗು, ಗುಜರಾತಿ, ಬೆಂಗಾಲಿ ಪದರಗಳು ಸೇರಿವೆ.", monthShrine: "ತಿಂಗಳ ದೇವಾಲಯ", year: "ವರ್ಷ", city: "ನಗರ", language: "ಭಾಷೆ", displayOnCalendar: "ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ತೋರಿಸಿ", nationalHolidays: "ರಾಷ್ಟ್ರೀಯ ರಜಾದಿನಗಳು", publicHolidays: "ಸಾರ್ವಜನಿಕ ರಜಾದಿನಗಳು", stateHolidays: "ರಾಜ್ಯ ರಜಾದಿನಗಳು", festivals: "ಹಬ್ಬಗಳು", rahu: "ರಾಹು ಕಾಲ", ketu: "ಕೇತು / ಯಮಗಂಡ", ekadashi: "ಏಕಾದಶಿ", zodiac: "ರಾಶಿ", tamil: "ತಮಿಳು", telugu: "ತೆಲುಗು", gujarati: "ಗುಜರಾತಿ", bengali: "ಬೆಂಗಾಲಿ", selectedDay: "ಆಯ್ದ ದಿನ", included: "ಒಳಗೊಂಡಿರುವುದು", included1: "ಖಗೋಳ ತಿಥಿ, ನಕ್ಷತ್ರ, ಯೋಗ ಮತ್ತು ಕರಣ", included2: "ನಗರದ ಸೂರ್ಯೋದಯ-ಸೂರ್ಯಾಸ್ತ ಆಧಾರಿತ ರಾಹು ಕಾಲ, ಯಮಗಂಡ, ಗುಳಿಕ", included3: "ಪ್ರತ್ಯೇಕ ರಾಷ್ಟ್ರೀಯ, ಸಾರ್ವಜನಿಕ ಮತ್ತು ಆಯ್ದ ರಾಜ್ಯ ರಜಾದಿನಗಳು", included4: "ಸೌರ ತಮಿಳು ಮತ್ತು ಬೆಂಗಾಲಿ ದಿನಾಂಕಗಳು", included5: "ಚಾಂದ್ರ ತೆಲುಗು ಮತ್ತು ಗುಜರಾತಿ ಮಾಸ/ತಿಥಿ ಲೇಬಲ್‌ಗಳು", calendarView: "ಕ್ಯಾಲೆಂಡರ್ ನೋಟ", previous: "ಹಿಂದಿನ", next: "ಮುಂದಿನ", tithi: "ತಿಥಿ", nakshatra: "ನಕ್ಷತ್ರ", yoga: "ಯೋಗ", karana: "ಕರಣ", rasi: "ರಾಶಿ", moonSign: "ಚಂದ್ರ ರಾಶಿ", rahuKalam: "ರಾಹು ಕಾಲ", ketuYamagandam: "ಕೇತು / ಯಮಗಂಡ", vratam: "ವ್ರತ", observance: "ಆಚರಣೆ", sunrise: "ಸೂರ್ಯೋದಯ", sunset: "ಸೂರ್ಯಾಸ್ತ", stateHolidaySuffix: "ರಜಾದಿನಗಳು" } },
  gu: { label: "ગુજરાતી", locale: "gu-IN", ui: { pageTitle: "પંચાંગ કેલેન્ડર", heroEyebrow: "પંચાંગ • પ્રાદેશિક કેલેન્ડરો • દૈનિક મુહૂર્ત", heroTitle: "પરંપરાગત ભારતીય કેલેન્ડર", heroText: "આ વાર્ષિક કેલેન્ડરમાં પંચાંગ વિગતો, રાહુ કાળ, યમગંડમ, એકાદશી, રાશિ અને તમિલ, તેલુગુ, ગુજરાતી, બંગાળી સ્તરો છે.", monthShrine: "માસિક મંદિર", year: "વર્ષ", city: "શહેર", language: "ભાષા", displayOnCalendar: "કેલેન્ડર પર બતાવો", nationalHolidays: "રાષ્ટ્રીય રજાઓ", publicHolidays: "જાહેર રજાઓ", stateHolidays: "રાજ્ય રજાઓ", festivals: "ઉત્સવો", rahu: "રાહુ કાળ", ketu: "કેતુ / યમગંડમ", ekadashi: "એકાદશી", zodiac: "રાશિ", tamil: "તમિલ", telugu: "તેલુગુ", gujarati: "ગુજરાતી", bengali: "બંગાળી", selectedDay: "પસંદ કરેલો દિવસ", included: "સમાવેશિત", included1: "ખગોળીય તિથિ, નક્ષત્ર, યોગ અને કરણ", included2: "શહેરના સૂર્યોદય-સૂર્યાસ્ત મુજબ રાહુ કાળ, યમગંડમ અને ગુલિક", included3: "અલગ રાષ્ટ્રીય, જાહેર અને પસંદ કરેલા રાજ્ય રજાઓ", included4: "સૌર તમિલ અને બંગાળી તારીખો", included5: "ચાંદ્ર તેલુગુ અને ગુજરાતી માસ/તિથિ લેબલ", calendarView: "કેલેન્ડર દૃશ્ય", previous: "પાછલું", next: "આગલું", tithi: "તિથિ", nakshatra: "નક્ષત્ર", yoga: "યોગ", karana: "કરણ", rasi: "રાશિ", moonSign: "ચંદ્ર રાશિ", rahuKalam: "રાહુ કાળ", ketuYamagandam: "કેતુ / યમગંડમ", vratam: "વ્રત", observance: "પાલન", sunrise: "સૂર્યોદય", sunset: "સૂર્યાસ્ત", stateHolidaySuffix: "રજાઓ" } },
  bn: { label: "বাংলা", locale: "bn-IN", ui: { pageTitle: "পঞ্জিকা ক্যালেন্ডার", heroEyebrow: "পঞ্জিকা • আঞ্চলিক ক্যালেন্ডার • দৈনিক মুহূর্ত", heroTitle: "ঐতিহ্যবাহী ভারতীয় ক্যালেন্ডার", heroText: "এই বার্ষিক ক্যালেন্ডারে পঞ্জিকা তথ্য, রাহু কাল, যমগণ্ডম, একাদশী, রাশি এবং তামিল, তেলুগু, গুজরাটি, বাঙালি ক্যালেন্ডার স্তর রয়েছে।", monthShrine: "মাসের মন্দির", year: "বছর", city: "শহর", language: "ভাষা", displayOnCalendar: "ক্যালেন্ডারে দেখান", nationalHolidays: "জাতীয় ছুটি", publicHolidays: "সরকারি ছুটি", stateHolidays: "রাজ্য ছুটি", festivals: "উৎসব", rahu: "রাহু কাল", ketu: "কেতু / যমগণ্ডম", ekadashi: "একাদশী", zodiac: "রাশি", tamil: "তামিল", telugu: "তেলুগু", gujarati: "গুজরাটি", bengali: "বাংলা", selectedDay: "নির্বাচিত দিন", included: "অন্তর্ভুক্ত", included1: "জ্যোতির্বৈজ্ঞানিক তিথি, নক্ষত্র, যোগ এবং করণ", included2: "শহরের সূর্যোদয়-সূর্যাস্ত অনুযায়ী রাহু কাল, যমগণ্ডম এবং গুলিক", included3: "আলাদা জাতীয়, সরকারি এবং নির্বাচিত রাজ্য ছুটি", included4: "সৌর তামিল ও বাংলা তারিখ", included5: "চান্দ্র তেলুগু ও গুজরাটি মাস/তিথি লেবেল", calendarView: "ক্যালেন্ডার ভিউ", previous: "পূর্ববর্তী", next: "পরবর্তী", tithi: "তিথি", nakshatra: "নক্ষত্র", yoga: "যোগ", karana: "করণ", rasi: "রাশি", moonSign: "চন্দ্র রাশি", rahuKalam: "রাহু কাল", ketuYamagandam: "কেতু / যমগণ্ডম", vratam: "ব্রত", observance: "পালন", sunrise: "সূর্যোদয়", sunset: "সূর্যাস্ত", stateHolidaySuffix: "ছুটি" } },
  mr: { label: "मराठी", locale: "mr-IN", ui: { pageTitle: "पंचांग कॅलेंडर", heroEyebrow: "पंचांग • प्रादेशिक कॅलेंडर • दैनिक मुहूर्त", heroTitle: "पारंपरिक भारतीय कॅलेंडर", heroText: "या वार्षिक कॅलेंडरमध्ये पंचांग तपशील, राहू काल, यमगंड, एकादशी, राशी आणि तमिळ, तेलुगू, गुजराती, बंगाली स्तर आहेत.", monthShrine: "मासिक देवस्थान", year: "वर्ष", city: "शहर", language: "भाषा", displayOnCalendar: "कॅलेंडरवर दाखवा", nationalHolidays: "राष्ट्रीय सुट्ट्या", publicHolidays: "सार्वजनिक सुट्ट्या", stateHolidays: "राज्य सुट्ट्या", festivals: "सण", rahu: "राहू काल", ketu: "केतू / यमगंड", ekadashi: "एकादशी", zodiac: "राशी", tamil: "तमिळ", telugu: "तेलुगू", gujarati: "गुजराती", bengali: "बंगाली", selectedDay: "निवडलेला दिवस", included: "समाविष्ट", included1: "खगोलशास्त्रीय तिथी, नक्षत्र, योग आणि करण", included2: "शहराच्या सूर्योदय-सूर्यास्तावर आधारित राहू काल, यमगंड आणि गुलिक", included3: "वेगळ्या राष्ट्रीय, सार्वजनिक आणि निवडलेल्या राज्य सुट्ट्या", included4: "सौर तमिळ आणि बंगाली दिनांक", included5: "चांद्र तेलुगू आणि गुजराती मास/तिथी लेबले", calendarView: "कॅलेंडर दृश्य", previous: "मागील", next: "पुढील", tithi: "तिथी", nakshatra: "नक्षत्र", yoga: "योग", karana: "करण", rasi: "राशी", moonSign: "चंद्र राशी", rahuKalam: "राहू काल", ketuYamagandam: "केतू / यमगंड", vratam: "व्रत", observance: "पालन", sunrise: "सूर्योदय", sunset: "सूर्यास्त", stateHolidaySuffix: "सुट्ट्या" } },
  as: { label: "অসমীয়া", locale: "as-IN", ui: { pageTitle: "পঞ্চাং কেলেণ্ডাৰ", heroEyebrow: "পঞ্চাং • আঞ্চলিক কেলেণ্ডাৰ • দৈনিক মুহূৰ্ত", heroTitle: "পাৰম্পৰিক ভাৰতীয় কেলেণ্ডাৰ", heroText: "এই বাৰ্ষিক কেলেণ্ডাৰত পঞ্চাংৰ তথ্য, ৰাহু কাল, যমগণ্ডম, একাদশী, ৰাশি আৰু তামিল, তেলুগু, গুজৰাটি, বঙালী স্তৰ আছে।", monthShrine: "মাহৰ দেৱালয়", year: "বছৰ", city: "চহৰ", language: "ভাষা", displayOnCalendar: "কেলেণ্ডাৰত দেখুৱাওক", nationalHolidays: "ৰাষ্ট্ৰীয় ছুটি", publicHolidays: "সাৰ্বজনীন ছুটি", stateHolidays: "ৰাজ্য ছুটি", festivals: "উৎসৱ", rahu: "ৰাহু কাল", ketu: "কেতু / যমগণ্ডম", ekadashi: "একাদশী", zodiac: "ৰাশি", tamil: "তামিল", telugu: "তেলুগু", gujarati: "গুজৰাটি", bengali: "বঙালী", selectedDay: "নিৰ্বাচিত দিন", included: "অন্তৰ্ভুক্ত", included1: "জ্যোতিৰ্বৈজ্ঞানিক তিথি, নক্ষত্ৰ, যোগ আৰু কৰণ", included2: "চহৰৰ সূৰ্যোদয়-সূৰ্যাস্ত অনুসৰি ৰাহু কাল, যমগণ্ডম আৰু গুলিক", included3: "পৃথক ৰাষ্ট্ৰীয়, সাৰ্বজনীন আৰু নিৰ্বাচিত ৰাজ্য ছুটি", included4: "সৌৰ তামিল আৰু বঙালী তাৰিখ", included5: "চান্দ্ৰ তেলুগু আৰু গুজৰাটি মাহ/তিথি লেবেল", calendarView: "কেলেণ্ডাৰ দৃশ্য", previous: "পূৰ্বৱৰ্তী", next: "পৰৱৰ্তী", tithi: "তিথি", nakshatra: "নক্ষত্ৰ", yoga: "যোগ", karana: "কৰণ", rasi: "ৰাশি", moonSign: "চন্দ্ৰ ৰাশি", rahuKalam: "ৰাহু কাল", ketuYamagandam: "কেতু / যমগণ্ডম", vratam: "ব্ৰত", observance: "পালন", sunrise: "সূৰ্যোদয়", sunset: "সূৰ্যাস্ত", stateHolidaySuffix: "ছুটি" } },
  or: { label: "ଓଡ଼ିଆ", locale: "or-IN", ui: { pageTitle: "ପଞ୍ଜିକା କ୍ୟାଲେଣ୍ଡର", heroEyebrow: "ପଞ୍ଜିକା • ଅଞ୍ଚଳୀୟ କ୍ୟାଲେଣ୍ଡର • ଦୈନିକ ମୁହୂର୍ତ୍ତ", heroTitle: "ପାରମ୍ପରିକ ଭାରତୀୟ କ୍ୟାଲେଣ୍ଡର", heroText: "ଏହି ବାର୍ଷିକ କ୍ୟାଲେଣ୍ଡରରେ ପଞ୍ଜିକା ବିବରଣୀ, ରାହୁ କାଳ, ଯମଗଣ୍ଡ, ଏକାଦଶୀ, ରାଶି ଏବଂ ତାମିଳ, ତେଲୁଗୁ, ଗୁଜରାଟି, ବେଙ୍ଗାଳୀ ସ୍ତର ରହିଛି।", monthShrine: "ମାସିକ ଦେଉଳ", year: "ବର୍ଷ", city: "ସହର", language: "ଭାଷା", displayOnCalendar: "କ୍ୟାଲେଣ୍ଡରରେ ଦେଖାନ୍ତୁ", nationalHolidays: "ଜାତୀୟ ଛୁଟି", publicHolidays: "ସାର୍ବଜନୀନ ଛୁଟି", stateHolidays: "ରାଜ୍ୟ ଛୁଟି", festivals: "ପର୍ବ", rahu: "ରାହୁ କାଳ", ketu: "କେତୁ / ଯମଗଣ୍ଡ", ekadashi: "ଏକାଦଶୀ", zodiac: "ରାଶି", tamil: "ତାମିଳ", telugu: "ତେଲୁଗୁ", gujarati: "ଗୁଜରାଟି", bengali: "ବେଙ୍ଗାଳୀ", selectedDay: "ଚୟନିତ ଦିନ", included: "ସମ୍ମିଳିତ", included1: "ଖଗୋଳୀୟ ତିଥି, ନକ୍ଷତ୍ର, ଯୋଗ ଏବଂ କରଣ", included2: "ସହରର ସୂର୍ଯ୍ୟୋଦୟ-ସୂର୍ଯ୍ୟାସ୍ତ ଅନୁଯାୟୀ ରାହୁ କାଳ, ଯମଗଣ୍ଡ ଏବଂ ଗୁଳିକ", included3: "ପୃଥକ ଜାତୀୟ, ସାର୍ବଜନୀନ ଏବଂ ଚୟନିତ ରାଜ୍ୟ ଛୁଟି", included4: "ସୌର ତାମିଳ ଏବଂ ବେଙ୍ଗାଳୀ ତାରିଖ", included5: "ଚାନ୍ଦ୍ର ତେଲୁଗୁ ଏବଂ ଗୁଜରାଟି ମାସ/ତିଥି ଲେବେଲ", calendarView: "କ୍ୟାଲେଣ୍ଡର ଦୃଶ୍ୟ", previous: "ପୂର୍ବବର୍ତ୍ତୀ", next: "ପରବର୍ତ୍ତୀ", tithi: "ତିଥି", nakshatra: "ନକ୍ଷତ୍ର", yoga: "ଯୋଗ", karana: "କରଣ", rasi: "ରାଶି", moonSign: "ଚନ୍ଦ୍ର ରାଶି", rahuKalam: "ରାହୁ କାଳ", ketuYamagandam: "କେତୁ / ଯମଗଣ୍ଡ", vratam: "ବ୍ରତ", observance: "ପାଳନ", sunrise: "ସୂର୍ଯ୍ୟୋଦୟ", sunset: "ସୂର୍ଯ୍ୟାସ୍ତ", stateHolidaySuffix: "ଛୁଟି" } },
};

const monthLabel = document.getElementById("month-label");
const calendarGrid = document.getElementById("calendar-grid");
const weekdayRow = document.getElementById("weekday-row");
const yearSelect = document.getElementById("year-select");
const citySelect = document.getElementById("city-select");
const languageSelect = document.getElementById("language-select");
const selectedDateLabel = document.getElementById("selected-date-label");
const selectedMeta = document.getElementById("selected-meta");
const selectedDayList = document.getElementById("selected-day-list");
const deityArt = document.getElementById("deity-art");
const deityMonth = document.getElementById("deity-month");
const deityName = document.getElementById("deity-name");
const deityNote = document.getElementById("deity-note");
const toggleInputs = document.querySelectorAll("[data-setting]");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

const yearlyCache = new Map();

let currentYear = 2026;
let currentMonth = 5;
let currentCity = "chennai";
let currentLanguage = "en";
let selectedKey = null;
const MIN_YEAR = 2026;
const MAX_YEAR = 2099;

function pad(value) {
  return String(value).padStart(2, "0");
}

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function toDegrees(value) {
  return (value * 180) / Math.PI;
}

function sinDeg(value) {
  return Math.sin(toRadians(value));
}

function cosDeg(value) {
  return Math.cos(toRadians(value));
}

function formatKey(year, month, day) {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function getLanguageConfig() {
  return languages[currentLanguage] || languages.en;
}

function t(key) {
  return getLanguageConfig().ui[key] || languages.en.ui[key] || key;
}

function getLocale() {
  return getLanguageConfig().locale;
}

function formatDateHeading(date) {
  return new Intl.DateTimeFormat(getLocale(), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatMonthHeading(year, month) {
  return new Intl.DateTimeFormat(getLocale(), {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month, 1));
}

function createISTDate(year, month, day, hour = 12, minute = 0) {
  return new Date(Date.UTC(year, month, day, hour, minute) - IST_OFFSET_MINUTES * 60000);
}

function dateToJulian(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function getAyanamsa(julianDay) {
  const centuries = (julianDay - 2415020.0) / 36525;
  return 22.460148 + 1.396042 * centuries + 0.000087 * centuries * centuries;
}

function getSunLongitude(julianDay) {
  const days = julianDay - 2451545.0;
  const meanLongitude = normalizeDegrees(280.46 + 0.9856474 * days);
  const meanAnomaly = normalizeDegrees(357.528 + 0.9856003 * days);
  return normalizeDegrees(
    meanLongitude +
      1.915 * sinDeg(meanAnomaly) +
      0.02 * sinDeg(2 * meanAnomaly)
  );
}

function getMoonLongitude(julianDay) {
  const days = julianDay - 2451545.0;
  const meanLongitude = normalizeDegrees(218.316 + 13.176396 * days);
  const moonAnomaly = normalizeDegrees(134.963 + 13.064993 * days);
  const sunAnomaly = normalizeDegrees(357.529 + 0.98560028 * days);
  const meanElongation = normalizeDegrees(297.85 + 12.190749 * days);
  const argumentLatitude = normalizeDegrees(93.272 + 13.22935 * days);

  const longitude =
    meanLongitude +
    6.289 * sinDeg(moonAnomaly) +
    1.274 * sinDeg(2 * meanElongation - moonAnomaly) +
    0.658 * sinDeg(2 * meanElongation) +
    0.214 * sinDeg(2 * moonAnomaly) -
    0.186 * sinDeg(sunAnomaly) -
    0.059 * sinDeg(2 * meanElongation - 2 * moonAnomaly) -
    0.057 * sinDeg(2 * meanElongation - sunAnomaly - moonAnomaly) +
    0.053 * sinDeg(2 * meanElongation + moonAnomaly) +
    0.046 * sinDeg(2 * meanElongation - sunAnomaly) +
    0.041 * sinDeg(sunAnomaly - moonAnomaly) -
    0.035 * sinDeg(meanElongation) -
    0.031 * sinDeg(sunAnomaly + moonAnomaly) -
    0.015 * sinDeg(2 * argumentLatitude - 2 * meanElongation) +
    0.011 * sinDeg(moonAnomaly - 4 * meanElongation);

  return normalizeDegrees(longitude);
}

function getSunriseSunset(year, month, day, latitude, longitude) {
  const zenith = 90.833;
  const dayStart = new Date(Date.UTC(year, month, day));
  const startOfYear = new Date(Date.UTC(year, 0, 0));
  const dayOfYear = Math.floor((dayStart - startOfYear) / 86400000);
  const lngHour = longitude / 15;

  function calculate(isSunrise) {
    const approximateTime = dayOfYear + ((isSunrise ? 6 : 18) - lngHour) / 24;
    const meanAnomaly = 0.9856 * approximateTime - 3.289;
    let trueLongitude =
      meanAnomaly +
      1.916 * sinDeg(meanAnomaly) +
      0.02 * sinDeg(2 * meanAnomaly) +
      282.634;
    trueLongitude = normalizeDegrees(trueLongitude);

    let rightAscension = toDegrees(Math.atan(0.91764 * Math.tan(toRadians(trueLongitude))));
    rightAscension = normalizeDegrees(rightAscension);

    const longitudeQuadrant = Math.floor(trueLongitude / 90) * 90;
    const rightAscensionQuadrant = Math.floor(rightAscension / 90) * 90;
    rightAscension = (rightAscension + longitudeQuadrant - rightAscensionQuadrant) / 15;

    const sinDeclination = 0.39782 * sinDeg(trueLongitude);
    const cosDeclination = Math.cos(Math.asin(sinDeclination));
    const cosHourAngle =
      (cosDeg(zenith) - sinDeclination * sinDeg(latitude)) /
      (cosDeclination * cosDeg(latitude));

    if (cosHourAngle > 1 || cosHourAngle < -1) {
      return null;
    }

    let hourAngle = isSunrise
      ? 360 - toDegrees(Math.acos(cosHourAngle))
      : toDegrees(Math.acos(cosHourAngle));
    hourAngle /= 15;

    const localMeanTime = hourAngle + rightAscension - 0.06571 * approximateTime - 6.622;
    const utcHours = normalizeDegrees((localMeanTime - lngHour) * 15) / 15;
    const totalMinutes = Math.round((utcHours + 5.5) * 60);
    const normalizedMinutes = ((totalMinutes % 1440) + 1440) % 1440;

    return {
      minutes: normalizedMinutes,
      text: formatMinutes(normalizedMinutes),
    };
  }

  return {
    sunrise: calculate(true),
    sunset: calculate(false),
  };
}

function formatMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return new Intl.DateTimeFormat(getLocale(), {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(2026, 0, 1, hours, minutes));
}

function getSegmentWindow(sunriseMinutes, sunsetMinutes, weekdayIndex, segmentTable) {
  const segmentDuration = (sunsetMinutes - sunriseMinutes) / 8;
  const segmentNumber = segmentTable[weekdayIndex] - 1;
  const start = Math.round(sunriseMinutes + segmentDuration * segmentNumber);
  const end = Math.round(start + segmentDuration);
  return `${formatMinutes(start)} - ${formatMinutes(end)}`;
}

function getKaranaName(tithiNumber, fractionWithinTithi) {
  const karanaIndex = (tithiNumber - 1) * 2 + (fractionWithinTithi >= 0.5 ? 2 : 1);

  if (karanaIndex === 1) {
    return "Kimstughna";
  }
  if (karanaIndex >= 58) {
    return ["Shakuni", "Chatushpada", "Nagava"][karanaIndex - 58];
  }

  return karanaCycle[(karanaIndex - 2) % karanaCycle.length];
}

function getPakshaLabel(tithiNumber) {
  return tithiNumber <= 15 ? "Shukla" : "Krishna";
}

function getTithiLabel(tithiNumber) {
  const paksha = getPakshaLabel(tithiNumber);
  return `${paksha} ${tithiNames[tithiNumber - 1]}`;
}

function getLunarMonthName(julianDay) {
  const synodicMonth = 29.530588861;
  const newMoonEpoch = 2451550.1;
  const cycleNumber = Math.floor((julianDay - newMoonEpoch) / synodicMonth);
  const newMoonJulian = newMoonEpoch + cycleNumber * synodicMonth;
  const sunSignAtNewMoon = Math.floor(
    normalizeDegrees(getSunLongitude(newMoonJulian) - getAyanamsa(newMoonJulian)) / 30
  );

  return lunarMonthBySunSign[sunSignAtNewMoon];
}

function getSolarMonthDay(year, month, day, signGetter) {
  const currentSign = signGetter(year, month, day);
  let monthDay = 1;

  for (let offset = 1; offset < 35; offset += 1) {
    const previous = new Date(year, month, day - offset);
    const previousSign = signGetter(
      previous.getFullYear(),
      previous.getMonth(),
      previous.getDate()
    );
    if (previousSign !== currentSign) {
      break;
    }
    monthDay += 1;
  }

  return monthDay;
}

function getFestivalLabels(data) {
  const labels = [];

  if (data.tithiNumber === 15) {
    labels.push("Purnima");
  }
  if (data.tithiNumber === 30) {
    labels.push("Amavasya");
  }
  if (data.tithiNumber === 4 || data.tithiNumber === 19) {
    labels.push("Chaturthi");
  }
  if (data.tithiNumber === 8 || data.tithiNumber === 23) {
    labels.push("Ashtami");
  }
  if (data.tithiNumber === 9 || data.tithiNumber === 24) {
    labels.push("Navami");
  }
  if (data.tithiNumber === 11 || data.tithiNumber === 26) {
    labels.push("Ekadashi Vrat");
  }

  return labels;
}

function addIfMatch(list, isMatch, label) {
  if (isMatch) {
    list.push(label);
  }
}

function getEasterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const easterMonth = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const easterDay = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, easterMonth, easterDay);
}

function matchesDate(date, month, day) {
  return date.getMonth() === month && date.getDate() === day;
}

function uniqueLabels(labels) {
  return [...new Set(labels)];
}

function getRecurringPublicHolidayLabels(year, month, day, lunarMonth, tithiNumber) {
  const labels = [];
  const date = new Date(year, month, day);
  const goodFriday = new Date(getEasterSunday(year));
  goodFriday.setDate(goodFriday.getDate() - 2);

  addIfMatch(labels, month === 11 && day === 25, "Christmas");
  addIfMatch(labels, month === 0 && day === 14, "Makar Sankranti");
  addIfMatch(labels, lunarMonth === "Magha" && tithiNumber === 5, "Vasant Panchami");
  addIfMatch(labels, (lunarMonth === "Magha" || lunarMonth === "Phalguna") && tithiNumber === 29, "Maha Shivaratri");
  addIfMatch(labels, month === 2 && day === 20, "Nowruz");
  addIfMatch(labels, lunarMonth === "Phalguna" && tithiNumber === 15, "Holi");
  addIfMatch(labels, lunarMonth === "Chaitra" && tithiNumber === 9, "Rama Navami");
  addIfMatch(labels, lunarMonth === "Chaitra" && tithiNumber === 1, "Ugadi");
  addIfMatch(labels, lunarMonth === "Chaitra" && tithiNumber === 2, "Cheti Chand");
  addIfMatch(labels, month === 3 && day === 14, "Puthandu");
  addIfMatch(labels, month === 3 && day === 14, "Vishu");
  addIfMatch(labels, month === 3 && day === 14, "Vaisakhi");
  addIfMatch(labels, month === 3 && day === 15, "Bohag Bihu");
  addIfMatch(labels, lunarMonth === "Chaitra" && tithiNumber === 13, "Mahavir Jayanti");
  addIfMatch(labels, matchesDate(goodFriday, month, day), "Good Friday");
  addIfMatch(labels, lunarMonth === "Vaishakha" && tithiNumber === 15, "Buddha Purnima");
  addIfMatch(labels, lunarMonth === "Ashadha" && tithiNumber === 2, "Ratha Yatra");
  addIfMatch(labels, lunarMonth === "Shravana" && tithiNumber === 23, "Krishna Janmashtami");
  addIfMatch(labels, lunarMonth === "Bhadrapada" && tithiNumber === 19, "Ganesh Chaturthi");
  addIfMatch(labels, month === 7 && day >= 21 && day <= 31, "Onam");
  addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 1, "Navaratri");
  addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 10, "Vijayadashami");
  addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 21, "Karva Chauth");
  addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 30, "Diwali");
  addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 6, "Chhath Puja");

  return uniqueLabels(labels);
}

function getRecurringStateHolidayLabels(year, month, day, cityConfig, lunarMonth, tithiNumber) {
  const labels = [];

  if (cityConfig.stateKey === "tamilNadu") {
    addIfMatch(labels, month === 0 && day === 1, "New Year's Day");
    addIfMatch(labels, month === 0 && day === 13, "Bhogi");
    addIfMatch(labels, month === 0 && day === 14, "Pongal");
    addIfMatch(labels, month === 0 && day === 15, "Thiruvalluvar Day");
    addIfMatch(labels, month === 0 && day === 16, "Uzhavar Thirunal");
    addIfMatch(labels, month === 3 && day === 14, "Puthandu");
    addIfMatch(labels, month === 6 && day === 18, "Tamil Nadu Day");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 8, "Ayudha Puja");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 9, "Saraswati Puja");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 10, "Vijayadashami");
    addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 15, "Karthigai Deepam");
  }

  if (cityConfig.stateKey === "telangana") {
    addIfMatch(labels, month === 0 && day === 1, "New Year's Day");
    addIfMatch(labels, month === 0 && day === 13, "Bhogi");
    addIfMatch(labels, month === 0 && day === 14, "Sankranti");
    addIfMatch(labels, lunarMonth === "Chaitra" && tithiNumber === 1, "Ugadi");
    addIfMatch(labels, month === 5 && day === 2, "Telangana Formation Day");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 8, "Bathukamma");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 10, "Maha Navami");
    addIfMatch(labels, lunarMonth === "Shravana" && tithiNumber === 15, "Bonalu");
  }

  if (cityConfig.stateKey === "gujarat") {
    addIfMatch(labels, month === 0 && day === 14, "Uttarayan");
    addIfMatch(labels, month === 4 && day === 1, "Gujarat Day");
    addIfMatch(labels, lunarMonth === "Chaitra" && tithiNumber === 1, "Ugadi");
    addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 1, "Bestu Varas");
    addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 2, "Bhai Dooj");
    addIfMatch(labels, lunarMonth === "Shravana" && tithiNumber === 15, "Raksha Bandhan");
    addIfMatch(labels, lunarMonth === "Vaishakha" && tithiNumber === 3, "Akshaya Tritiya");
  }

  if (cityConfig.stateKey === "westBengal") {
    addIfMatch(labels, month === 0 && day === 23, "Netaji Jayanti");
    addIfMatch(labels, month === 3 && day === 14, "Pohela Boishakh");
    addIfMatch(labels, month === 3 && day === 15, "West Bengal Day");
    addIfMatch(labels, lunarMonth === "Phalguna" && tithiNumber === 15, "Dol Jatra");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 7, "Maha Saptami");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 8, "Durga Ashtami");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 9, "Maha Navami");
    addIfMatch(labels, lunarMonth === "Ashwin" && tithiNumber === 10, "Vijaya Dashami");
    addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 30, "Kali Puja");
    addIfMatch(labels, lunarMonth === "Kartika" && tithiNumber === 15, "Lakshmi Puja");
    addIfMatch(labels, month === 4 && day === 7, "Rabindranath Tagore's Birthday");
  }

  return uniqueLabels(labels);
}

function getHolidayBuckets(year, month, day, cityConfig, lunarMonth, tithiNumber) {
  const national = nationalHolidayRules
    .filter((rule) => rule.month === month && rule.day === day)
    .map((rule) => rule.label);
  const publicHolidays = publicHolidayRules
    .filter((rule) => rule.month === month && rule.day === day)
    .map((rule) => rule.label);
  const sourcePublicHolidays = (sourcePublicHolidayRulesByYear[year] || [])
    .filter((rule) => rule.month === month && rule.day === day)
    .map((rule) => rule.label);
  const recurringPublicHolidays = getRecurringPublicHolidayLabels(
    year,
    month,
    day,
    lunarMonth,
    tithiNumber
  );
  const stateHolidays = (stateHolidayRules[cityConfig.stateKey] || [])
    .filter((rule) => rule.month === month && rule.day === day)
    .map((rule) => rule.label);
  const recurringStateHolidays = getRecurringStateHolidayLabels(
    year,
    month,
    day,
    cityConfig,
    lunarMonth,
    tithiNumber
  );

  const goodFriday = new Date(getEasterSunday(year));
  goodFriday.setDate(goodFriday.getDate() - 2);

  addIfMatch(publicHolidays, matchesDate(goodFriday, month, day), "Good Friday");
  addIfMatch(publicHolidays, lunarMonth === "Magha" && tithiNumber === 29, "Maha Shivaratri");
  addIfMatch(publicHolidays, lunarMonth === "Phalguna" && tithiNumber === 15, "Holi / Dol Purnima");
  addIfMatch(publicHolidays, lunarMonth === "Chaitra" && tithiNumber === 9, "Ram Navami");
  addIfMatch(publicHolidays, lunarMonth === "Chaitra" && tithiNumber === 13, "Mahavir Jayanti");
  addIfMatch(publicHolidays, lunarMonth === "Vaishakha" && tithiNumber === 15, "Buddha Purnima");
  addIfMatch(publicHolidays, lunarMonth === "Shravana" && tithiNumber === 23, "Janmashtami");
  addIfMatch(publicHolidays, lunarMonth === "Ashwin" && tithiNumber === 10, "Vijayadashami");
  addIfMatch(publicHolidays, lunarMonth === "Kartika" && tithiNumber === 30, "Diwali");

  addIfMatch(stateHolidays, cityConfig.stateKey === "telangana" && lunarMonth === "Chaitra" && tithiNumber === 1, "Ugadi");
  addIfMatch(stateHolidays, cityConfig.stateKey === "tamilNadu" && lunarMonth === "Ashwin" && tithiNumber === 9, "Ayudha Pooja");
  addIfMatch(stateHolidays, cityConfig.stateKey === "westBengal" && lunarMonth === "Ashwin" && tithiNumber === 8, "Durga Ashtami");
  addIfMatch(stateHolidays, cityConfig.stateKey === "westBengal" && lunarMonth === "Ashwin" && tithiNumber === 10, "Vijaya Dashami");
  addIfMatch(stateHolidays, cityConfig.stateKey === "gujarat" && lunarMonth === "Kartika" && tithiNumber === 1, "Bestu Varas");

  return {
    national: uniqueLabels(national),
    public: uniqueLabels([...publicHolidays, ...sourcePublicHolidays, ...recurringPublicHolidays]),
    state: uniqueLabels([...stateHolidays, ...recurringStateHolidays]),
  };
}

function buildDayData(year, month, day, cityConfig) {
  const date = new Date(year, month, day);
  const julianDay = dateToJulian(createISTDate(year, month, day, 12));
  const sunLongitude = getSunLongitude(julianDay);
  const moonLongitude = getMoonLongitude(julianDay);
  const ayanamsa = getAyanamsa(julianDay);
  const siderealSun = normalizeDegrees(sunLongitude - ayanamsa);
  const siderealMoon = normalizeDegrees(moonLongitude - ayanamsa);
  const separation = normalizeDegrees(moonLongitude - sunLongitude);
  const tithiNumber = Math.floor(separation / 12) + 1;
  const fractionWithinTithi = (separation % 12) / 12;
  const nakshatraIndex = Math.floor(siderealMoon / (360 / 27));
  const yogaIndex = Math.floor(
    normalizeDegrees(siderealSun + siderealMoon) / (360 / 27)
  );
  const sunSign = Math.floor(siderealSun / 30);
  const moonSign = Math.floor(siderealMoon / 30);
  const sunriseSunset = getSunriseSunset(
    year,
    month,
    day,
    cityConfig.lat,
    cityConfig.lon
  );
  const sunriseMinutes = sunriseSunset.sunrise ? sunriseSunset.sunrise.minutes : 360;
  const sunsetMinutes = sunriseSunset.sunset ? sunriseSunset.sunset.minutes : 1080;
  const weekdayIndex = date.getDay();
  const tamilDay = getSolarMonthDay(year, month, day, (y, m, d) =>
    Math.floor(
      normalizeDegrees(
        getSunLongitude(dateToJulian(createISTDate(y, m, d, 12))) -
          getAyanamsa(dateToJulian(createISTDate(y, m, d, 12)))
      ) / 30
    )
  );
  const bengaliDay = tamilDay;
  const lunarMonth = getLunarMonthName(julianDay);
  const holidayBuckets = getHolidayBuckets(
    year,
    month,
    day,
    cityConfig,
    lunarMonth,
    tithiNumber
  );

  return {
    key: formatKey(year, month, day),
    date,
    gregorianLabel: formatDateHeading(date),
    tithiNumber,
    tithiLabel: getTithiLabel(tithiNumber),
    nakshatra: nakshatraNames[nakshatraIndex],
    yoga: yogaNames[yogaIndex],
    karana: getKaranaName(tithiNumber, fractionWithinTithi),
    paksha: getPakshaLabel(tithiNumber),
    zodiac: zodiacNames[sunSign],
    moonZodiac: zodiacNames[moonSign],
    tamil: `${solarTamilMonths[sunSign]} ${tamilDay}`,
    bengali: `${solarBengaliMonths[sunSign]} ${bengaliDay}`,
    telugu: `${lunarMonth} ${getPakshaLabel(tithiNumber)} ${tithiNames[tithiNumber - 1]}`,
    gujarati: `${lunarMonth} ${getPakshaLabel(tithiNumber)} ${tithiNames[tithiNumber - 1]}`,
    nationalHolidays: holidayBuckets.national,
    publicHolidays: holidayBuckets.public,
    stateHolidays: holidayBuckets.state,
    festivals: getFestivalLabels({ tithiNumber }),
    ekadashi:
      tithiNumber === 11 || tithiNumber === 26
        ? `${lunarMonth} ${getPakshaLabel(tithiNumber)} Ekadashi`
        : null,
    rahu: getSegmentWindow(
      sunriseMinutes,
      sunsetMinutes,
      weekdayIndex,
      [8, 2, 7, 5, 6, 4, 3]
    ),
    ketu: `${getSegmentWindow(
      sunriseMinutes,
      sunsetMinutes,
      weekdayIndex,
      [5, 4, 3, 2, 1, 7, 6]
    )} • Gulika ${getSegmentWindow(
      sunriseMinutes,
      sunsetMinutes,
      weekdayIndex,
      [7, 6, 5, 4, 3, 2, 1]
    )}`,
    sunrise: sunriseSunset.sunrise ? sunriseSunset.sunrise.text : "Unavailable",
    sunset: sunriseSunset.sunset ? sunriseSunset.sunset.text : "Unavailable",
  };
}

function getYearlyData(year, cityKey) {
  const cacheKey = `${year}-${cityKey}`;
  if (yearlyCache.has(cacheKey)) {
    return yearlyCache.get(cacheKey);
  }

  const cityConfig = cities[cityKey];
  const data = {};

  for (let month = 0; month < 12; month += 1) {
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= lastDay; day += 1) {
      const entry = buildDayData(year, month, day, cityConfig);
      data[entry.key] = entry;
    }
  }

  yearlyCache.set(cacheKey, data);
  return data;
}

function getActiveData() {
  return getYearlyData(currentYear, currentCity);
}

function badgeMarkup(type, text) {
  return `<span class="badge ${type}">${text}</span>`;
}

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}

function applyLanguage() {
  const locale = getLocale();
  document.documentElement.lang = currentLanguage;
  document.title = t("pageTitle");

  setText("hero-eyebrow", t("heroEyebrow"));
  setText("hero-title", t("heroTitle"));
  setText("hero-text", t("heroText"));
  setText("month-shrine-label", t("monthShrine"));
  setText("year-label", t("year"));
  setText("city-label", t("city"));
  setText("language-label", t("language"));
  setText("display-options-label", t("displayOnCalendar"));
  setText("toggle-national-holidays", t("nationalHolidays"));
  setText("toggle-public-holidays", t("publicHolidays"));
  setText("toggle-state-holidays", t("stateHolidays"));
  setText("toggle-festivals", t("festivals"));
  setText("toggle-rahu", t("rahu"));
  setText("toggle-ketu", t("ketu"));
  setText("toggle-ekadashi", t("ekadashi"));
  setText("toggle-zodiac", t("zodiac"));
  setText("toggle-tamil", t("tamil"));
  setText("toggle-telugu", t("telugu"));
  setText("toggle-gujarati", t("gujarati"));
  setText("toggle-bengali", t("bengali"));
  setText("selected-day-eyebrow", t("selectedDay"));
  setText("included-eyebrow", t("included"));
  setText("included-item-1", t("included1"));
  setText("included-item-2", t("included2"));
  setText("included-item-3", t("included3"));
  setText("included-item-4", t("included4"));
  setText("included-item-5", t("included5"));
  setText("calendar-view-eyebrow", t("calendarView"));

  prevMonthButton.textContent = t("previous");
  nextMonthButton.textContent = t("next");
  prevMonthButton.setAttribute("aria-label", t("previous"));
  nextMonthButton.setAttribute("aria-label", t("next"));

  languageSelect.value = currentLanguage;
  yearSelect.setAttribute("lang", locale);
  citySelect.setAttribute("lang", locale);
}

function buildWeekdayRow() {
  weekdayRow.innerHTML = "";
  const formatter = new Intl.DateTimeFormat(getLocale(), { weekday: "short" });
  weekdayLabels.forEach((_, index) => {
    const element = document.createElement("div");
    element.className = "weekday";
    element.textContent = formatter.format(new Date(2026, 5, 7 + index));
    weekdayRow.appendChild(element);
  });
}

 function getVisibleBadges(entry) {
   const badges = [];

  if (settings.nationalHolidays) {
    entry.nationalHolidays.forEach((label) => badges.push(badgeMarkup("holiday", label)));
  }
  if (settings.publicHolidays) {
    entry.publicHolidays.forEach((label) => badges.push(badgeMarkup("holiday", label)));
  }
  if (settings.stateHolidays) {
    entry.stateHolidays.forEach((label) => badges.push(badgeMarkup("holiday", label)));
  }
  if (settings.festivals) {
    entry.festivals.slice(0, 2).forEach((label) => badges.push(badgeMarkup("festival", label)));
  }
  if (settings.ekadashi && entry.ekadashi) {
    badges.push(badgeMarkup("ekadashi", "Ekadashi"));
  }
  if (settings.zodiac) {
    badges.push(badgeMarkup("zodiac", entry.zodiac));
  }
  if (settings.tamil) {
    badges.push(badgeMarkup("tamil", entry.tamil));
  }
  if (settings.telugu) {
    badges.push(badgeMarkup("telugu", entry.telugu));
  }
  if (settings.gujarati) {
    badges.push(badgeMarkup("gujarati", entry.gujarati));
  }
   if (settings.bengali) {
     badges.push(badgeMarkup("bengali", entry.bengali));
   }

   return badges.slice(0, 4);
 }

function renderSelectedDay(entry) {
  selectedDateLabel.textContent = entry.gregorianLabel;
  selectedMeta.textContent = `${cities[currentCity].label} • ${t("sunrise")} ${entry.sunrise} • ${t("sunset")} ${entry.sunset}`;

  const items = [
    `${t("tithi")}: ${entry.tithiLabel}`,
    `${t("nakshatra")}: ${entry.nakshatra}`,
    `${t("yoga")}: ${entry.yoga}`,
    `${t("karana")}: ${entry.karana}`,
    settings.zodiac ? `${t("rasi")}: ${entry.zodiac} • ${t("moonSign")}: ${entry.moonZodiac}` : null,
    settings.rahu ? `${t("rahuKalam")}: ${entry.rahu}` : null,
    settings.ketu ? `${t("ketuYamagandam")}: ${entry.ketu}` : null,
    settings.ekadashi && entry.ekadashi ? `${t("vratam")}: ${entry.ekadashi}` : null,
    settings.nationalHolidays && entry.nationalHolidays.length
      ? `${t("nationalHolidays")}: ${entry.nationalHolidays.join(", ")}`
      : null,
    settings.publicHolidays && entry.publicHolidays.length
      ? `${t("publicHolidays")}: ${entry.publicHolidays.join(", ")}`
      : null,
    settings.stateHolidays && entry.stateHolidays.length
      ? `${cities[currentCity].stateLabel} ${t("stateHolidaySuffix")}: ${entry.stateHolidays.join(", ")}`
      : null,
    settings.festivals && entry.festivals.length ? `${t("observance")}: ${entry.festivals.join(", ")}` : null,
    settings.tamil ? `${t("tamil")}: ${entry.tamil}` : null,
    settings.telugu ? `${t("telugu")}: ${entry.telugu}` : null,
    settings.gujarati ? `${t("gujarati")}: ${entry.gujarati}` : null,
    settings.bengali ? `${t("bengali")}: ${entry.bengali}` : null,
  ].filter(Boolean);

  selectedDayList.innerHTML = items
    .map((item) => `<div class="detail-item">${item}</div>`)
    .join("");
}

function createDeityArtwork(theme) {
  const accent = theme.accent;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${accent}" />
          <stop offset="100%" stop-color="#41140f" />
        </linearGradient>
      </defs>
      <rect width="400" height="520" rx="34" fill="url(#sky)" />
      <circle cx="200" cy="145" r="76" fill="rgba(255,214,130,0.23)" />
      <path d="M95 455 Q200 320 305 455" fill="#1d0f0a" opacity="0.76" />
      <path d="M160 325 Q200 238 240 325 L240 430 L160 430 Z" fill="#f7c97d" opacity="0.86" />
      <circle cx="200" cy="205" r="40" fill="#f6d49b" />
      <path d="M145 430 Q200 362 255 430" fill="#a61f1f" opacity="0.9" />
      <path d="M108 122 L200 40 L292 122" fill="none" stroke="#f0c16f" stroke-width="12" stroke-linecap="round" />
      <path d="M130 132 H270" stroke="#f0c16f" stroke-width="8" stroke-linecap="round" />
      <circle cx="200" cy="208" r="10" fill="#6a1c15" />
      <text x="200" y="492" text-anchor="middle" fill="#fff3d2" font-size="28" font-family="Cormorant Garamond, serif">${theme.deity}</text>
    </svg>
  `;

  return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}")`;
}

function updateMonthShrine() {
  const activeData = getActiveData();
  const sampleKey = formatKey(currentYear, currentMonth, 15);
  const monthData = activeData[sampleKey] || Object.values(activeData)[0];
  const theme = deityThemes[monthData.tamil.split(" ")[0]] || deityThemes.Chithirai;

  deityArt.style.backgroundImage = createDeityArtwork(theme);
  deityMonth.textContent = monthData.tamil.split(" ")[0];
  deityName.textContent = theme.deity;
  deityNote.textContent = theme.note;
}

function renderCalendar() {
  const activeData = getActiveData();
  monthLabel.textContent = formatMonthHeading(currentYear, currentMonth);
  calendarGrid.innerHTML = "";
  const dayMonthFormatter = new Intl.DateTimeFormat(getLocale(), {
    month: "2-digit",
    day: "2-digit",
  });

  const firstDay = new Date(currentYear, currentMonth, 1);
  const startOffset = firstDay.getDay();
  const totalGridDays = 42;

  for (let index = 0; index < totalGridDays; index += 1) {
    const dayNumber = index - startOffset + 1;
    const gridDate = new Date(currentYear, currentMonth, dayNumber);
    const inCurrentMonth = gridDate.getMonth() === currentMonth;
    const key = formatKey(
      gridDate.getFullYear(),
      gridDate.getMonth(),
      gridDate.getDate()
    );
    const entry = activeData[key];

    const card = document.createElement("article");
    card.className = "calendar-day";

    if (!inCurrentMonth) {
      card.classList.add("is-muted");
    }
    if (key === selectedKey) {
      card.classList.add("is-selected");
    }

    const summaryLines = [
      `<div class="summary-line">${entry.nakshatra}</div>`,
      settings.rahu ? `<div class="summary-line">${t("rahu")} ${entry.rahu}</div>` : "",
      settings.ketu ? `<div class="summary-line">${t("ketu")} ${entry.ketu.split(" • ")[0]}</div>` : "",
    ]
      .filter(Boolean)
      .join("");

    card.innerHTML = `
      <div class="day-topline">
        <div class="day-number">${gridDate.getDate()}</div>
        <div class="day-month">${dayMonthFormatter.format(gridDate)}</div>
      </div>
      <div class="tithi-line">${entry.tithiLabel}</div>
      <div class="summary-list">${summaryLines}</div>
      <div class="badge-line">${getVisibleBadges(entry).join("")}</div>
    `;

    card.addEventListener("click", () => {
      selectedKey = key;
      renderCalendar();
      renderSelectedDay(entry);
    });

    calendarGrid.appendChild(card);
  }

  updateMonthShrine();
}

function populateSelectors() {
  yearSelect.innerHTML = "";
  for (let year = MIN_YEAR; year <= MAX_YEAR; year += 1) {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    if (year === currentYear) {
      option.selected = true;
    }
    yearSelect.appendChild(option);
  }

  citySelect.innerHTML = Object.entries(cities)
    .map(
      ([key, value]) =>
        `<option value="${key}" ${key === currentCity ? "selected" : ""}>${value.label}</option>`
    )
    .join("");

  languageSelect.innerHTML = Object.entries(languages)
    .map(
      ([key, value]) =>
        `<option value="${key}" ${key === currentLanguage ? "selected" : ""}>${value.label}</option>`
    )
    .join("");
}

function ensureSelectedDay() {
  if (!selectedKey || !getActiveData()[selectedKey]) {
    selectedKey = formatKey(currentYear, currentMonth, 1);
  }
}

function rerender() {
  applyLanguage();
  buildWeekdayRow();
  ensureSelectedDay();
  renderCalendar();
  renderSelectedDay(getActiveData()[selectedKey]);
}

toggleInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    settings[event.target.dataset.setting] = event.target.checked;
    rerender();
  });
});

yearSelect.addEventListener("change", (event) => {
  currentYear = Number(event.target.value);
  currentMonth = 0;
  selectedKey = formatKey(currentYear, currentMonth, 1);
  rerender();
});

citySelect.addEventListener("change", (event) => {
  currentCity = event.target.value;
  selectedKey = formatKey(currentYear, currentMonth, 1);
  rerender();
});

languageSelect.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  rerender();
});

prevMonthButton.addEventListener("click", () => {
  currentMonth = (currentMonth + 11) % 12;
  if (currentMonth === 11) {
    currentYear -= 1;
    if (currentYear < MIN_YEAR) {
      currentYear = MAX_YEAR;
    }
  }
  populateSelectors();
  selectedKey = formatKey(currentYear, currentMonth, 1);
  rerender();
});

nextMonthButton.addEventListener("click", () => {
  currentMonth = (currentMonth + 1) % 12;
  if (currentMonth === 0) {
    currentYear += 1;
    if (currentYear > MAX_YEAR) {
      currentYear = MIN_YEAR;
    }
  }
  populateSelectors();
  selectedKey = formatKey(currentYear, currentMonth, 1);
  rerender();
});

populateSelectors();
selectedKey = formatKey(currentYear, currentMonth, 1);
rerender();
