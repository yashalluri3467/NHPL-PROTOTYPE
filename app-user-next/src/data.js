// High-fidelity datasets with verified Unsplash image IDs
const hotelImages = [
  "1542314831-068cd1dbfeeb", "1520250497591-112f2f40a3f4", "1445019980597-93fa8acb246c", "1566073771279-63c67c8cf9e6", 
  "1571867427350-f38f17319bb7", "1582719478250-c89cae4dd85b", "1549298916-b41d501d3772", "1522771739844-6a9f6d5f14af",
  "1496417263034-38ec4f0b665a", "1490127338042-36af58d002ae", "1498503182468-399195454643", "1535827848776-44ad5155f06d",
  "1512917774080-9991f1c4c750", "1533105079780-92b9be482077", "1521783988744-80971b6596e3", "1529290690225-9036d07996a0",
  "1505773502611-1344b553c302", "1515362770574-e11a1ad3038a", "1507676184212-d03ab07a01ca", "1444201981596-33f929ec7ee2"
];

const restImages = [
  "1517248135467-4c7edcad34c4", "1555126634-323283e090fa", "1514315384763-ba401779410f", "1467003909585-2f8a72700288",
  "1552566629-130d984c7112", "1550966841-3bb331ac7f03", "1414235077428-338989a2e8c0", "1559339352-11d035aa65de",
  "1504674900247-0877df9cc836", "1537047902294-629c81d70a48", "1544148103-077af2696730", "1484723091739-30a097e8f929",
  "1551218808-94e2183e3839", "1513104890138-7c749659a591", "1551024709-8f23befc6c87"
];

const generateHotels = (city, count) => {
  const names = ["Grand", "Royal", "Emerald", "Sapphire", "Plaza", "Residency", "Heritage", "Classic", "Park", "View", "Orchid", "Elite", "Crystal", "Golden", "Silver", "Imperial", "Dynasty", "Serene", "Heights", "Signature"];
  const areas = ["Main Road", "Station Area", "Bistupur", "Sakchi", "Saraidhela", "Bank More", "Tower Chowk", "Kutchery Road", "Lalpur", "Doranda"];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `${city.toLowerCase()}-h-${i + 1}`,
    name: `NHPL ${names[i % names.length]} ${city}`,
    location: areas[i % areas.length],
    city: city,
    price: `$${Math.floor(Math.random() * 200) + 80}/night`,
    rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(1),
    image: `https://images.unsplash.com/photo-${hotelImages[i % hotelImages.length]}?auto=format&fit=crop&q=80&w=800`
  }));
};

const generateRestaurants = (city, count) => {
  const cuisines = ["North Indian", "Chinese", "South Indian", "Continental", "Fine Dining", "Mughlai", "Fast Food", "Italian", "Thai", "Local Jharkhandi"];
  const names = ["Spice", "Zest", "Flavor", "Kitchen", "Bistro", "Cafe", "Corner", "Boutique", "Plate", "Bite", "Clove", "Saffron", "Basil", "Aroma", "Gourmet"];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `${city.toLowerCase()}-r-${i + 1}`,
    name: `${names[i % names.length]} of ${city}`,
    cuisine: cuisines[i % cuisines.length],
    city: city,
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    time: `${Math.floor(Math.random() * 30) + 15} min`,
    image: `https://images.unsplash.com/photo-${restImages[i % restImages.length]}?auto=format&fit=crop&q=80&w=800`
  }));
};

const generateDrivers = (city, count) => {
  const names = ["Rahul", "Suresh", "Amit", "Vikram", "Deepak", "Anil", "Sunil", "Manish", "Pankaj", "Rakesh"];
  const cars = ["Innova Crysta", "Dzire", "Ertiga", "Honda City", "Scorpio", "Fortuner"];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `${city.toLowerCase()}-d-${i + 1}`,
    name: names[i % names.length],
    car: cars[i % cars.length],
    city: city,
    rating: (Math.random() * (5 - 4.9) + 4.9).toFixed(1),
    trips: Math.floor(Math.random() * 500) + 100,
    status: "Available"
  }));
};

const cities = ["Ranchi", "Jamshedpur", "Dhanbad", "Hazaribagh", "Deoghar", "Netarhat"];

export const APP_DATA = {
  profile: {
    name: "Alex Johnson",
    email: "alex.j@example.com",
    avatar: "AJ",
    membership: "Gold Member",
    recentTrips: 12,
    totalSpent: "$2,450"
  },
  cities: cities,
  hotels: cities.flatMap(city => generateHotels(city, 20)),
  restaurants: cities.flatMap(city => generateRestaurants(city, 15)),
  drivers: cities.flatMap(city => generateDrivers(city, 10)),
  locations: [
    { id: 1, name: "Netarhat", state: "Jharkhand", city: "Netarhat", desc: "Queen of Chotanagpur", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Ranchi", state: "Jharkhand", city: "Ranchi", desc: "City of Waterfalls", image: "https://images.unsplash.com/photo-1595111003429-1991df639965?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Hazaribagh", state: "Jharkhand", city: "Hazaribagh", desc: "The Thousand Gardens", image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Jamshedpur", state: "Jharkhand", city: "Jamshedpur", desc: "The Steel City", image: "https://images.unsplash.com/photo-1621434316041-3827670733a4?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Deoghar", state: "Jharkhand", city: "Deoghar", desc: "Abode of Gods", image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Dhanbad", state: "Jharkhand", city: "Dhanbad", desc: "Coal Capital of India", image: "https://images.unsplash.com/photo-1622329864239-68b209ed2a6d?auto=format&fit=crop&q=80&w=400" }
  ]
};
