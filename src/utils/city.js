const famousCities = [
  "New York City, USA",
  "London, UK",
  "Paris, France",
  "Tokyo, Japan",
  "Rome, Italy",
  "Sydney, Australia",
  "Beijing, China",
  "Istanbul, Turkey",
  "Dubai, UAE",
  "Rio de Janeiro, Brazil",
  "Moscow, Russia",
  "Los Angeles, USA",
  "Cairo, Egypt",
  "Barcelona, Spain",
  "Mumbai, India",
  "Buenos Aires, Argentina",
  "Berlin, Germany",
  "Amsterdam, Netherlands",
  "Seoul, South Korea",
  "Toronto, Canada",
  "Bangkok, Thailand",
  "Prague, Czech Republic",
  "Athens, Greece",
  "Vienna, Austria",
  "San Francisco, USA",
  "Florence, Italy",
  "Singapore City, Singapore",
  "Edinburgh, UK",
  "Cape Town, South Africa",
  "Vancouver, Canada",
  "Stockholm, Sweden",
  "Reykjavik, Iceland",
  "Mexico City, Mexico",
  "Jerusalem, Israel",
  "Budapest, Hungary",
  "Kyoto, Japan",
  "Dubrovnik, Croatia",
  "Marrakech, Morocco",
  "Helsinki, Finland",
  "Zurich, Switzerland",
  "Copenhagen, Denmark",
  "Havana, Cuba",
  "Oslo, Norway",
  "Kuala Lumpur, Malaysia",
  "San Diego, USA",
  "Porto, Portugal",
  "Auckland, New Zealand",
  "Brussels, Belgium",
  "Warsaw, Poland",
  "St. Petersburg, Russia",
  "Nice, France",
  "Lviv, Ukraine",
  "Chengdu, China",
  "Seville, Spain",
  "Philadelphia, USA",
  "Brasília, Brazil",
  "Antalya, Turkey",
  "Kyoto, Japan",
  "Marseille, France",
  "Nara, Japan",
  "Chiang Mai, Thailand",
  "Hangzhou, China",
  "Giza, Egypt",
  "Valletta, Malta",
  "Tbilisi, Georgia",
  "Ljubljana, Slovenia",
  "Salvador, Brazil",
  "Santiago, Chile",
  "Cusco, Peru",
  "Ho Chi Minh City, Vietnam",
  "Lahore, Pakistan",
  "Jaipur, India",
  "Tallinn, Estonia",
  "Bucharest, Romania",
  "Doha, Qatar",
  "Siem Reap, Cambodia",
  "Casablanca, Morocco",
  "Hanoi, Vietnam",
  "Busan, South Korea",
  "Quebec City, Canada",
  "Nairobi, Kenya",
  "Adelaide, Australia",
  "Innsbruck, Austria",
  "Lhasa, Tibet",
  "Yangon, Myanmar",
  "Porto Alegre, Brazil",
  "Quebec City, Canada",
  "Belgrade, Serbia",
  "Baku, Azerbaijan",
  "La Paz, Bolivia",
  "Bruges, Belgium",
  "Sarajevo, Bosnia and Herzegovina",
  "Novi Sad, Serbia",
  "Odessa, Ukraine",
  "Ulaanbaatar, Mongolia",
  "Riga, Latvia",
  "Cork, Ireland",
  "Tirana, Albania",
  "Durban, South Africa",
  "Dar es Salaam, Tanzania",
];

export function getRandomCity() {
  const randomIndex = Math.floor(Math.random() * famousCities.length);
  return famousCities[randomIndex];
}

const travelWords = [
  "adventure",
  "visit",
  "visiter",
  "journey",
  "destination",
  "expedition",
  "explore",
  "trip",
  "voyage",
  "trek",
  "tour",
  "roam",
  "wander",
  "travel",
  "excursion",
  "passage",
  "discovery",
  "itinerary",
  "crossing",
  "pilgrimage",
  "safari",
  "migration",
  "odyssey",
  "flight",
  "cruise",
  "trekking",
  "backpacking",
  "sightseeing",
  "transit",
  "commute",
  "hike",
  "jet-setting",
  "globe-trotting",
  "ramble",
  "stroll",
  "drive",
  "navigation",
  "circumnavigation",
  "piloting",
  "roaming",
  "touring",
  "transfer",
  "wandering",
  "excursion",
  "crossing",
  "road trip",
  "expedition",
  "aventure",
  "visite",
  "voyage",
  "destination",
  "expédition",
  "explorer",
  "voyage",
  "voyage",
  "trek",
  "tour",
  "errer",
  "flâner",
  "voyage",
  "excursion",
  "passage",
  "découverte",
  "itinéraire",
  "traversée",
  "pèlerinage",
  "safari",
  "migration",
  "odyssée",
  "vol",
  "croisière",
  "randonnée",
  "randonnée",
  "tourisme",
  "transit",
  "commuter",
  "randonnée",
  "globetrotter",
  "vagabonder",
  "promenade",
  "conduire",
  "navigation",
  "circumnavigation",
  "pilotage",
  "errance",
  "tourisme",
  "transfert",
  "errance",
  "excursion",
  "traversée",
  "voyage sur route",
  "expédition",
  "français",
];

export function checkForTravelWords(phrase) {
  const words = phrase.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (travelWords.includes(word)) {
      return true;
    }
  }
  return false;
}