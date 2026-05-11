export const APP_DATA = {
  profile: {
    name: "Alex Johnson",
    email: "alex.j@example.com",
    avatar: "AJ",
    membership: "Gold Member",
    recentTrips: 12,
    totalSpent: "$2,450"
  },
  travel: [
    { 
      id: 1, 
      title: "Premium Ride", 
      desc: "On-demand luxury black sedan with professional chauffeurs.", 
      image: "/src/assets/ride_premium_car.png", 
      price: "$15.00 base",
      type: "ride"
    },
    { 
      id: 2, 
      title: "City Tour Guide", 
      desc: "Private 4-hour walking tour with local historians.", 
      image: "/src/assets/hotel_luxury.png", // Reusing for variety if needed
      price: "$85.00",
      type: "guide"
    }
  ],
  hotels: [
    { 
      id: 1, 
      name: "NHPL Grand Plaza", 
      location: "Downtown Core", 
      price: "$299/night", 
      rating: "4.9", 
      image: "/src/assets/hotel_luxury.png" 
    },
    { 
      id: 2, 
      name: "Sapphire Bay Resort", 
      location: "Coastal Boulevard", 
      price: "$450/night", 
      rating: "5.0", 
      image: "/src/assets/hotel_luxury.png" 
    }
  ],
  restaurants: [
    { 
      id: 1, 
      name: "Velvet Clove", 
      cuisine: "Fine Dining", 
      rating: "4.8", 
      time: "25 min", 
      image: "/src/assets/restaurant_fine_dining.png" 
    },
    { 
      id: 2, 
      name: "Oceanic Sushi", 
      cuisine: "Japanese", 
      rating: "4.9", 
      time: "40 min", 
      image: "/src/assets/restaurant_fine_dining.png" 
    }
  ]
};
