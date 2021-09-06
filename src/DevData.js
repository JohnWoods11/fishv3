function DevData(castsWanted) {
  console.log("hello world");
  let devData = {};
  let lakes = [
    {
      name: "Holton",
      coordinates: { latitude: 52.341, longitude: 1.529 },
      weather: { data: null, lastUpdated: null },
      lakes: [
        {
          name: "Holton",
          castIndexes: [],
          duration: 0,
          catches: 0,
          heaviestCatch: { weight: 0, species: null },
          fish: [30, 20, 10, 40],
        },
      ],
    },
    {
      name: "Alderby",
      coordinates:  { latitude: 52.479, longitude: 1.592 },
      weather: { data: null, lastUpdated: null },
      lakes: [
        {
          name: "Alderby",
          castIndexes: [],
          duration: 0,
          catches: 0,
          heaviestCatch: { weight: 0, species: null },
          fish: [10, 60, 10, 20],
        },
      ],
    },
    {
      name: "Henstead",
      coordinates:  { latitude: 52.425, longitude: 1.636 },
      weather: { data: null, lastUpdated: null },
      lakes: [
        {
          name: "Henstead",
          castIndexes: [],
          duration: 0,
          catches: 0,
          heaviestCatch: { weight: 0, species: null },
          fish: [40, 40, 0, 20],
        },
      ],
    },
    {
      name: "Wisset",
      coordinates:  { latitude: 52.350, longitude: 1.460 },
      weather: { data: null, lastUpdated: null },
      lakes: [
        {
          name: "Wisset",
          coordinates: null,
          castIndexes: [],
          duration: 0,
          catches: 0,
          heaviestCatch: { weight: 0, species: null },
          fish: [30, 30, 10, 30],
        },
      ],
    },
  ];
  let species = [
    {
      name: "Carp",
      castIndexes: [],
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
      stylePref: [0.3, 0.6, 0, 0.8],
      baitPref: [0.6, 0.5, 0.4, 0],
    },
    {
      name: "Roach",
      castIndexes: [],
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
      stylePref: [0.8, 0.2, 0.1, 0.3],
      baitPref: [0.6, 0.8, 0.2, 0],
    },
    {
      name: "Pike",
      castIndexes: [],
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
      stylePref: [0.4, 0.4, 0.8, 0.6],
      baitPref: [0.3, 0.5, 0, 0.8],
    },
    {
      name: "Perch",
      castIndexes: [],
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
      stylePref: [0.3, 0.3, 0.7, 0.4],
      baitPref: [0.4, 0.5, 0.4, 0.8],
    },
  ];
  let baits = [
    {
      name: "Sweetcorn",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
    {
      name: "Maggots",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
    {
      name: "Bread",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
    {
      name: "Lure",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
  ];
  let styles = [
    {
      name: "Float",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
    {
      name: "Ledger",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
    {
      name: "Spin",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
    {
      name: "Feeder",
      castIndexes: [],
      duration: 0,
      catches: 0,
      heaviestCatch: { weight: 0, species: null },
    },
  ];
  let devCasts = [];

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  for (let i = 0; i < castsWanted; i++) {
    //create cast
    //get lake
    let castLake = getRandomInt(lakes.length);
    //get cast type
    let castBait = getRandomInt(baits.length);
    let castStyle = getRandomInt(styles.length);

    //cast times 31557600000ms = 1y
    let today = Date.now();

    let castCastTime = today - getRandomInt(31557600000);
    let castDuration = getRandomInt(20000000) + 40000;
    let castReelInTime = castCastTime + castDuration;

    let catchTime = new Date();
    catchTime.setMilliseconds(castReelInTime);
    let hourMultiplier = 0;
    let dayMultiplier = 0;
    //multipliers decrease chance
    //equation produces realistic catch/time data
    hourMultiplier = Math.abs(catchTime.getUTCHours() - 12);
    hourMultiplier = (hourMultiplier + 1) / 6;

    //equation produces realistic catch/date data
    dayMultiplier = Math.abs(catchTime.getUTCMonth() - 7);
    dayMultiplier = dayMultiplier + 1;
    let castCatch = 0;
    if (getRandomInt(dayMultiplier * hourMultiplier) < 1) {
      castCatch = 1;
    }

    //cast user variables

    let castSpecies = getRandomInt(100);
    let previousSpecies = 0;
    let castWeight = Number((Math.random() * 250).toFixed(2));

    for (let i = 0; i < lakes[castLake].lakes[0].fish.length; i++) {
      let speciesDivider = lakes[castLake].lakes[0].fish[i];
      speciesDivider += previousSpecies;

      if (castSpecies <= speciesDivider) {
        castSpecies = i;
        break;
      } else {
        previousSpecies = speciesDivider;
      }
    }

    let catchBaitPref = species[castSpecies].baitPref[castBait];
    let catchStylePref = species[castSpecies].stylePref[castStyle];

    let variableMultiplier = (catchBaitPref + catchStylePref) / 2;
    if (variableMultiplier < 0.5) {
      castCatch = 0;
      castSpecies = null;
      castWeight = 0;
    }

    //add cast to cast history
    devCasts.push({
      catch: castCatch,
      castTime: castCastTime,
      reelInTime: castReelInTime,
      duration: castDuration,
      lake: castLake,
      bait: castBait,
      style: castStyle,
      species: castSpecies,
      weight: castWeight,
    });

    //link used variables to cast history entry

    lakes[castLake].lakes[0].castIndexes.push(i);
    baits[castBait].castIndexes.push(i);
    styles[castStyle].castIndexes.push(i);
    if (castCatch) {
      species[castSpecies].castIndexes.push(i);
    }

    //update variable data
    lakes[castLake].lakes[0].duration += castDuration;
    lakes[castLake].lakes[0].catches += castCatch;
    if (castWeight > lakes[castLake].lakes[0].heaviestCatch.weight) {
      lakes[castLake].lakes[0].heaviestCatch.species =
        species[castSpecies].name;
      lakes[castLake].lakes[0].heaviestCatch.weight = castWeight.toFixed(2);
    }
    baits[castBait].duration += castDuration;
    baits[castBait].catches += castCatch;
    if (castWeight > baits[castBait].heaviestCatch.weight) {
      baits[castBait].heaviestCatch.species = species[castSpecies].name;
      baits[castBait].heaviestCatch.weight = castWeight.toFixed(2);
    }
    styles[castStyle].duration += castDuration;
    styles[castStyle].catches += castCatch;
    if (castWeight > styles[castStyle].heaviestCatch.weight) {
      styles[castStyle].heaviestCatch.species = species[castSpecies].name;
      styles[castStyle].heaviestCatch.weight = castWeight.toFixed(2);
    }
    if (castSpecies !== null) {
      if (castWeight > species[castSpecies].heaviestCatch.weight) {
        species[castSpecies].heaviestCatch.species = species[castSpecies].name;
        species[castSpecies].heaviestCatch.weight = castWeight.toFixed(2);
      }
    }
    if (castCatch) {
      species[castSpecies].catches++;
    }
  }
  devData.castHistory = devCasts;
  devData.lakes = lakes;
  devData.baits = baits;
  devData.styles = styles;
  devData.species = species;

  return devData;
}

export default DevData;
