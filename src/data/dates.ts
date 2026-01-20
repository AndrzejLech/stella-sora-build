export interface Activity {
  location: string;
  description: string;
}

export interface CharacterCard {
  name: string;
  activities: Activity[];
}

export const dates: CharacterCard[] = [
  {
    name: 'Amber',
    activities: [
      { location: 'Academy', description: 'Cafeteria' },
      { location: 'Port', description: 'How about doing some night fishing?' },
    ],
  },
  {
    name: 'Ann',
    activities: [
      { location: 'Cave', description: 'Keep exploring deeper.' },
      { location: 'Market', description: "There's an event you can join in the game area." },
    ],
  },
  {
    name: 'Canace',
    activities: [
      { location: 'Academy', description: 'Cafeteria' },
      { location: 'Cave', description: 'Keep exploring deeper.' },
    ],
  },
  {
    name: 'Caramel',
    activities: [
      { location: 'Market', description: "Haven't been to that area yet" },
      { location: 'Port', description: 'Take a small boat out for some coastal sightseeing.' },
    ],
  },
  {
    name: 'Chitose',
    activities: [
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
      { location: 'Port', description: 'Take a small boat out for some coastal sightseeing.' },
    ],
  },
  {
    name: 'Chixia',
    activities: [
      { location: 'Cave', description: 'Keep exploring deeper.' },
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
    ],
  },
  {
    name: 'Coronis',
    activities: [
      { location: 'Academy', description: 'Library' },
      { location: 'Cave', description: 'Keep exploring deeper.' },
    ],
  },
  {
    name: 'Cosette',
    activities: [
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
      { location: 'Market', description: "Haven't been to that area yet" },
    ],
  },
  {
    name: 'Flora',
    activities: [
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
      { location: 'Market', description: 'See the show over there' },
    ],
  },
  {
    name: 'Freesia',
    activities: [
      { location: 'Cave', description: "Don't go any deeper. Stop here and take a rest." },
      { location: 'Dessert Shop', description: "It's still early. Chat a bit longer." },
    ],
  },
  {
    name: 'Fuyuka',
    activities: [
      { location: 'Cave', description: "Don't go any deeper. Stop here and take a rest." },
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
    ],
  },
  {
    name: 'Gerie',
    activities: [
      { location: 'Cave', description: 'Keep exploring deeper.' },
      { location: 'Port', description: 'Take a small boat out for some coastal sightseeing.' },
    ],
  },
  {
    name: 'Iris',
    activities: [
      { location: 'Academy', description: 'Library' },
      { location: 'Dessert Shop', description: "It's still early. Chat a bit longer." },
    ],
  },
  {
    name: 'Jinglin',
    activities: [
      { location: 'Cave', description: "Don't go any deeper. Stop here and take a rest" },
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
    ],
  },
  {
    name: 'Kasimira',
    activities: [
      { location: 'Cave', description: 'Keep exploring deeper.' },
      { location: 'Market', description: "There's an event you can join in the game area." },
    ],
  },
  {
    name: 'Laru',
    activities: [
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
      { location: 'Port', description: 'How about doing some night fishing?' },
    ],
  },
  {
    name: 'Minova',
    activities: [
      { location: 'Academy', description: 'Library' },
      { location: 'Cave', description: 'Keep exploring deeper.' },
    ],
  },
  {
    name: 'Mistique',
    activities: [
      { location: 'Cave', description: 'Keep exploring deeper.' },
      { location: 'Academy', description: 'Library' },
    ],
  },
  {
    name: 'Nanoha',
    activities: [
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
      { location: 'Market', description: "There's an event you can join in the game area." },
    ],
  },
  {
    name: 'Nazuka',
    activities: [
      { location: 'Market', description: "What's that? Looks suspicious." },
      { location: 'Port', description: 'Take a small boat out for some coastal sightseeing.' },
    ],
  },
  {
    name: 'Nazuna',
    activities: [
      { location: 'Market', description: "There's an event you can join in the game area." },
      { location: 'Port', description: 'How about doing some night fishing?' },
    ],
  },
  {
    name: 'Noya',
    activities: [
      { location: 'Cave', description: "Don't go any deeper. Stop here and take a rest" },
      { location: 'Market', description: "There's a show over there." },
    ],
  },
  {
    name: 'Ridge',
    activities: [
      { location: 'Cave', description: "Don't go any deeper. Stop here and take a rest" },
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
    ],
  },
  {
    name: 'Shia',
    activities: [
      { location: 'Cave', description: 'Keep exploring deeper.' },
      { location: 'Port', description: 'Take a small boat out for some coastal sightseeing.' },
    ],
  },
  {
    name: 'Shimiao',
    activities: [
      { location: 'Dessert Shop', description: "Haven't had enough. Let's order some more." },
      { location: 'Market', description: "There's an event you can join in the game area." },
    ],
  },
  {
    name: 'Teresa',
    activities: [
      { location: 'Cave', description: 'Keep exploring deeper.' },
      { location: 'Market', description: "Haven't been to that area yet." },
    ],
  },
  {
    name: 'Tilia',
    activities: [
      { location: 'Dessert Shop', description: 'Take part in the raffle inside the store.' },
      { location: 'Market', description: "What's that? Looks suspicious." },
    ],
  },
  {
    name: 'Snowish Laru',
    activities: [
      { location: 'Market', description: 'Haven\'t been to that area yet.' },
      { location: 'Port', description: "How about doing some night fishing?" },
    ],
  },
  {
    name: 'Firenze',
    activities: [
      { location: 'Acadeny', description: 'Getting hungry. Gonna go to the cafeteria.' },
      { location: 'Port', description: "How about doing some night fishing?" },
    ],
  },
];