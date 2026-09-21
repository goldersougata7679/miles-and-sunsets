const treks = [
  {
    id: 1,
    name: "Sandakphu Trek",
    slug: "sandakphu-trek",
    destination: "Darjeeling",
    durationLabel: "6 Days",
    difficulty: "Moderate",
    maxAltitude: "3,636 m",
    price: 12999,
    rating: 4.9,
    coverImage: "/images/treks/sandakphu.jpg",
    overview: "The Sandakphu trek offers the most spectacular view of four of the world's five highest peaks: Everest, Kangchenjunga, Lhotse, and Makalu. Trek through dense rhododendron forests and experience the unique Indo-Nepal border culture.",
    itinerary: [
      { day: 1, title: "NJP/Bagdogra to Manebhanjan", description: "Arrive at NJP railway station or Bagdogra airport. Drive to Manebhanjan (approx 4 hours). Rest and acclimatize." },
      { day: 2, title: "Manebhanjan to Tumling", description: "Begin the trek. A steep climb through beautiful pine forests brings you to Tumling, located right on the border of India and Nepal." },
      { day: 3, title: "Tumling to Kalipokhri", description: "Trek through Singalila National Park. You will pass by the holy black water lake of Kalipokhri." },
      { day: 4, title: "Kalipokhri to Sandakphu", description: "The final push to the summit. Witness the breathtaking panorama of the Sleeping Buddha mountain range." }
    ]
  },
  {
    id: 2,
    name: "Goechala Trek",
    slug: "goechala-trek",
    destination: "Sikkim",
    durationLabel: "11 Days",
    difficulty: "Difficult",
    maxAltitude: "4,940 m",
    price: 18500,
    rating: 4.8,
    coverImage: "/images/treks/goechala.jpg",
    overview: "Get up close and personal with Mt. Kangchenjunga. The Goechala trek is a high-altitude adventure taking you through the heart of Sikkim's raw, untouched wilderness, featuring beautiful alpine lakes and dense forests.",
    itinerary: [
      { day: 1, title: "Arrive in Yuksom", description: "Drive from NJP/Bagdogra to Yuksom, the historical first capital of Sikkim and the base camp for our trek." },
      { day: 2, title: "Yuksom to Sachen", description: "Trek through dense, damp forests filled with moss and ancient trees. Listen to the Prek Chu river roaring below." }
    ]
  },
  {
    id: 3,
    name: "Everest Base Camp",
    slug: "everest-base-camp",
    destination: "Nepal",
    durationLabel: "14 Days",
    difficulty: "Difficult",
    maxAltitude: "5,364 m",
    price: 55000,
    rating: 5.0,
    coverImage: "/images/treks/ebc.jpg",
    overview: "The ultimate trekking pilgrimage. Walk in the footsteps of legendary mountaineers, experience Sherpa culture, and stand at the base of the world's highest mountain.",
    itinerary: [
      { day: 1, title: "Fly to Lukla, Trek to Phakding", description: "Experience the thrilling flight to Lukla. Begin the gentle trek down to the village of Phakding." },
      { day: 2, title: "Phakding to Namche Bazaar", description: "Cross the famous Hillary Suspension Bridge and make the steep climb up to the bustling Sherpa capital of Namche Bazaar." }
    ]
  },
  
];

export default treks;