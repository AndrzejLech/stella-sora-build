export enum Type{
  IGNIS = 'Ignis',
  AQUA = "Aqua",
  VENTUS = "Ventus",
  LUX = "Lux",
  UMBRA  = "Umbra",
  TERRA  = "Terra",
}

export enum Role {
  MAIN = "Main",
  SUPPORT = "Support",
}

export interface Build {
  name: string,
  type: Type,
  role: Role,
  pink: string[],
  chromatic: string[],
  orange: string[],
}

export const builds : Build[] = [
  {
    name: "Chixia",
    type: Type.IGNIS,
    role: Role.MAIN,
    pink: [
      "Sleepless Flame",
      "Flame-Stained Ink"
    ],
    chromatic: [
      "Flame-Ink Matrix",
      "Ink Brilliance"
    ],
    orange: [
      "Flame Resonance",
      "Scorching Ink",
      "Finishing Touch",
      "Dragon Blaze"
    ]
  },
  {
    name: "Chixia",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Sigil Unleashed: Tiger of the East",
      "Tiger of the East: Blazing Scales",
    ],
    chromatic: [

      "Ink Sigil: Trail Seeker",
      "Ink Sigil: Blood Fed"
    ],
    orange: [
      "Ink Sigil: Raid",
      "Dragon Blaze"
    ]
  },
  {
    name: "Amber",
    type: Type.IGNIS,
    role: Role.MAIN,
    pink: [
      "Precise Temperature Control",
      "Echo of Hospitality"
    ],
    chromatic: [
      "Keen Accent",
      "Grand Finale"
    ],
    orange: [
      "Weakness Mark",
      "Overloaded Spark"
    ]
  },
  {
    name: "Flora",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Ember of Tomorrow",
      "Ashes of the Past"
    ],
    chromatic: [
      "Reinforced Impression",
      "Perfect Acting"
    ],
    orange: [
      "Foreshadowing Verification",
      "Visual Impact",
      "Guest Performer"
    ]
  },
  {
    name: "Kasimira",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Heated Battle"
    ],
    chromatic: [
      "Area Bombardment",
      "Meltdown Threshold"
    ],
    orange: [
      "Army Breaker"
    ]
  },
  {
    name: "Chitose",
    type: Type.AQUA,
    role: Role.MAIN,
    pink: [
      "Mirror Blade",
      "Serpent's Glide"
    ],
    chromatic: [
      "Aqueous Phantasm",
      "Azure Embrace"
    ],
    orange: [
      "Tremble and Fall",
      "Dance of Elegance"
    ]
  },
  {
    name: "Freesia",
    type: Type.AQUA,
    role: Role.SUPPORT,
    pink: [
      "Chill Forecast",
      "Frost Warning"
    ],
    chromatic: [
      "Temporal Revival",
      "Penetrating Chill"
    ],
    orange: [
      "Winter's Grip",
      "Crackling Zero"
    ]
  },
  {
    name: "Shimiao",
    type: Type.AQUA,
    role: Role.MAIN,
    pink: [
      "Stream Embrace"
    ],
    chromatic: [
      "Wave Swirl",
      "Towering Waves"
    ],
    orange: [
      "Roaring Ocean Wave",
      "Stream Mirror"
    ]
  },
  {
    name: "Iris",
    type: Type.AQUA,
    role: Role.SUPPORT,
    pink: [
      "Blizzard: Spread",
      "Blizzard: Vortex"
    ],
    chromatic: [
      "Forced Liquidation",
      "Raging Blizzard"
    ],
    orange: [
      "Prolonged Winter",
      "Sneaky Finisher"
    ]
  },
  {
    name: "Teresa",
    type: Type.AQUA,
    role: Role.SUPPORT,
    pink: [
      "Surge: Infinite",
      "Surge: Immortality"
    ],
    chromatic: [
      "Let Me Help!",
      "Isn't it Awesome!"
    ],
    orange: [
      "I'll Protect You!",
      "How About This!"
    ]
  },
  {
    name: "Nanoha",
    type: Type.VENTUS,
    role: Role.MAIN,
    pink: [
      "Whirling Blade",
      "Bloom Dance"
    ],
    chromatic: [
      "Blossom Shower",
      "Sky Piercer"
    ],
    orange: [
      "Distant Prayer",
      "Splendid Vortex"
    ]
  },
  {
    name: "Noya",
    type: Type.VENTUS,
    role: Role.MAIN,
    pink: [
      "Slash: Windfury",
      "Slash: Blade Storm!"
    ],
    chromatic: [
      "Pebble Storm",
      "Hero's Instinct"
    ],
    orange: [
      "Flurry Stance",
      "Wind Slash"
    ]
  },
  {
    name: "Canace",
    type: Type.VENTUS,
    role: Role.SUPPORT,
    pink: [
      "Grants Speedup Notion",
      "Grants Blooming Esthetics"
    ],
    chromatic: [
      "Cyclone Acceleration",
      "Structure Analysis"
    ],
    orange: [
      "High Pressure Reflux",
      "Storm Eye Expansion",
      "Conundrum Solving"
    ]
  },
  {
    name: "Ann",
    type: Type.VENTUS,
    role: Role.SUPPORT,
    pink: [
      "Wind Banish",
      "Downwind Journey"
    ],
    chromatic: [
      "Wind Erosion Havoc",
      "Windgate Barrier"
    ],
    orange: [
      "Turbulent Flow",
      "Violent Current"
    ]
  },
  {
    name: "Shia",
    type: Type.LUX,
    role: Role.SUPPORT,
    pink: [
      "Kindred Bound",
      "Twin Moons"
    ],
    chromatic: [
      "Dance of the Riptide",
      "Moonfall"
    ],
    orange: [
      "Snowfall's Heartbeat",
      "Eclipse Blast",
      "Counter Current"
    ]
  },
  {
    name: "Minova",
    type: Type.LUX,
    role: Role.MAIN,
    pink: [
      "Board Tricks",
      "Ultimatum"
    ],
    chromatic: [
      "Ashwind Rhythm",
      "Light Burn"
    ],
    orange: [
      "Unyielding Strength",
      "More Than Just Pretty"
    ]
  },
  {
    name: "Minova",
    type: Type.LUX,
    role: Role.SUPPORT,
    pink: [
      "Four-Star Wanted Level",
      "Star Core Crumbled"
    ],
    chromatic: [
      "Radiant Synergy",
      "Perfect Arc"
    ],
    orange: [
      "Three Base Hit",
      "Optimal Hit Zone"
    ]
  },
  {
    name: "Tilia",
    type: Type.LUX,
    role: Role.SUPPORT,
    pink: [
      "Perfect Spiral",
      "Holy Inscription"
    ],
    chromatic: [
      "Brilliant Relay",
      "Blinding Beam"
    ],
    orange: [
      "Trick Boost"
    ]
  },
  {
    name: "Tilia",
    type: Type.LUX,
    role: Role.MAIN,
    pink: [
      "Unity of Offense and Defense",
      "Holy Domain"
    ],
    chromatic: [
      "Light Curtain",
      "Bright Counter"
    ],
    orange: [
      "Wild Spirit",
      "Strike Back",
      "Aegis Blessing"
    ]
  },
  {
    name: "Jinglin",
    type: Type.LUX,
    role: Role.SUPPORT,
    pink: [
      "Thunderbolt: Character",
      "Thunderbolt: Dragon"
    ],
    chromatic: [
      "Complete Sequence",
      "Self-drawn Concealed Hand"
    ],
    orange: [
      "Effortless Mastery",
      "No Ones No Nines"
    ]
  },
  {
    name: "Laru",
    type: Type.LUX,
    role: Role.MAIN,
    pink: [
      "Lance Sweep",
      "Lightning Lance Dance"
    ],
    chromatic: [
      "Electric Chain",
      "Sky Rend"
    ],
    orange: [
      "Cracking Thunderbolt",
      "Lance's Song"
    ]
  },
  {
    name: "Mistique",
    type: Type.UMBRA,
    role: Role.MAIN,
    pink: [
      "Super Long Exposure",
      "Multi-Shot"
    ],
    chromatic: [
      "Cursed Screech",
      "Abominable Fester"
    ],
    orange: [
      "Night Dash",
      "Quick Nightfall",
      "Spotlight Craving",
      "Decisive Movement"
    ]
  },
  {
    name: "Mistique",
    type: Type.UMBRA,
    role: Role.SUPPORT,
    pink: [
      "Stay Happy",
      "Lucky Constitution"
    ],
    chromatic: [
      "The Conjuring",
      "Malice Wraith"
    ],
    orange: [
      "Haunting",
      "Solar Absorption",
      "Shadow Shackle"
    ]
  },
  {
    name: "Cosette",
    type: Type.UMBRA,
    role: Role.SUPPORT,
    pink: [
      "Eclipse Imprint",
      "Abyssal Mark"
    ],
    chromatic: [
      "Dark: Mirage",
      "Dark: Hallucination"
    ],
    orange: [
      "Gift of Darkness",
      "Dark: Vitality",
      "Dark: Demon Mark"
    ]
  },
  {
    name: "Caramel",
    type: Type.UMBRA,
    role: Role.MAIN,
    pink: [
      "Sonic Boom",
      "Rhythm Pulse"
    ],
    chromatic: [
      "Tempo Shift",
      "Earcatch Rift"
    ],
    orange: [
      "Hype Trigger"
    ]
  },
  {
    name: "Coronis",
    type: Type.UMBRA,
    role: Role.MAIN,
    pink: [
      "Shadow Invasion",
      "Phantom Blade"
    ],
    chromatic: [
      "Night Cruise",
      "Roaming Spectre"
    ],
    orange: [
      "Shadow Dash",
      "Dark Veil"
    ]
  },
  {
    name: "Coronis",
    type: Type.UMBRA,
    role: Role.SUPPORT,
    pink: [
      "Skeleton Frenzy",
      "Skeleton Sculpture"
    ],
    chromatic: [
      "Spiritual Tome",
      "Underground Healer"
    ],
    orange: [
      "Tag of Fate"
    ]
  },
  {
    name: "Gerie",
    type: Type.TERRA,
    role: Role.MAIN,
    pink: [
      "Beyond All Control",
      "Avalanche of Stone"
    ],
    chromatic: [
      "Lingering Hunger",
      "Shared Sensation"
    ],
    orange: [
      "Delight in Ruin",
      "Slanderous Strike",
      "No Safeword"
    ]
  },
  {
    name: "Nazuna",
    type: Type.TERRA,
    role: Role.SUPPORT,
    pink: [
      "Arrow of Affection",
      "Sweetheart Bloom"
    ],
    chromatic: [
      "Rain of Passion",
      "Lucky Drop"
    ],
    orange: [
      "Love's True Strike",
      "Honeyed Arrow",
      "Balloonado"
    ]
  },
  {
    name: "Ridge",
    type: Type.TERRA,
    role: Role.SUPPORT,
    pink: [
      "Reblossom",
      "Sense the Stir"
    ],
    chromatic: [
      "N/A"
    ],
    orange: [
      "Root Grasp",
      "Corosive Vines"
    ]
  },
  {
    name: "Fuyuka",
    type: Type.IGNIS,
    role: Role.MAIN,
    pink: [
      "Kitty punch",
      "Multi-Shot"
    ],
    chromatic: [
      "Finishing Blow",
    ],
    orange: [
      "Combo Punch",
      "Bold Challenge",
      "Swirling Counterattack",
      "Peak Performance",
      "Ironfist Blow",
    ]
  },
  {
    name: "Snowish Laru (Fuyuka)",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Fire Downpour",
      "Special Ammo"
    ],
    chromatic: [
      "Fire Tale Rule",
      "Two-Gun Salute",
    ],
    orange: [
      "Celebration Resumed",
      "Toy Army",
      "Uplifting Shot",
    ]
  },
  {
    name: "Flora (Fuyuka)",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Ember of Tomorrow",
      "Ember Rekindled"
    ],
    chromatic: [
      "Reinforced Impression",
      "Perfect Acting",
    ],
    orange: [
      "Lethal Inferno",
      "Guest Performer",
      "Foreshadowing Verification",
    ]
  },
  {
    name: "Flora (S. Laru)",
    type: Type.IGNIS,
    role: Role.MAIN,
    pink: [
      "Spiral Dance",
      "Ending Song"
    ],
    chromatic: [
      "Perception fo Psyche",
    ],
    orange: [
      "Lethal Inferno",
      "Emotional Catharsis",
      "Home Court Dominance",
      "Hero's Halo",
    ]
  },
  {
    name: "Snowish Laru (Flora)",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Fire Downpour",
      "Special Ammo"
    ],
    chromatic: [
      "Two-Gun Salute",
      "Fire Tale Rule",
    ],
    orange: [
      "Uplifting Shot",
      "Ammo Rain",
      "Toy Army",
    ]
  },
  {
    name: "Chixia (Flora)",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Crimson Dragon: Convergence",
      "Crimson Dragon: Chant",
    ],
    chromatic: [
      "Sigil Unleashed: Flame Glow",
      "Ink Sigil: Ambush",
    ],
    orange: [
      "Ink Sigil: Horn Call",
      "Ink Sigil: Barrier Construct",
    ]
  },
  {
    name: "Kasimira (Flora)",
    type: Type.IGNIS,
    role: Role.SUPPORT,
    pink: [
      "Heated Battle",
      "Area Bombardment"
    ],
    chromatic: [
      "Meltdown Threshold",
    ],
    orange: [
      "Shocking Bombardment",
      "Surprise Gift",
      "Army Breaker",
    ]
  },
] as const