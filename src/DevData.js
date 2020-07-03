function DevData(castsWanted) {
  console.log("hello world");
  let devData = {};
  let lakes = [
    { name: "Holton", lakes: [{ name: "Holton", castIndexes: [] }] },
    { name: "Alderby", lakes: [{ name: "Alderby", castIndexes: [] }] },
    { name: "Henstead", lakes: [{ name: "Henstead", castIndexes: [] }] },
    { name: "Wisset", lakes: [{ name: "Wisset", castIndexes: [] }] },
  ];
  let species = [
    { name: "Carp", castIndexes: [] },
    { name: "Roach", castIndexes: [] },
    { name: "Pike", castIndexes: [] },
    { name: "Perch", castIndexes: [] },
  ];
  let baits = [
    { name: "Sweetcorn", castIndexes: [] },
    { name: "Maggots", castIndexes: [] },
    { name: "Bread", castIndexes: [] },
    { name: "Lure", castIndexes: [] },
  ];
  let styles = [
    {
      name: "Float",
      castIndexes: [],
    },
    {
      name: "Ledger",
      castIndexes: [],
    },
    {
      name: "Spin",
      castIndexes: [],
    },
    {
      name: "Feeder",
      castIndexes: [],
    },
  ];
  let devCasts = [];

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  for (let i = 0; i < castsWanted; i++) {
    let castLake = getRandomInt(lakes.length);
    let castBait = getRandomInt(baits.length);
    let castStyle = getRandomInt(styles.length);
    let castSpecies = getRandomInt(species.length);
    devCasts.push({
      lake: castLake,
      bait: castBait,
      style: castStyle,
      species: castSpecies,
    });

    lakes[castLake].lakes[0].castIndexes.push(i);
    baits[castBait].castIndexes.push(i);
    styles[castStyle].castIndexes.push(i);
    species[castSpecies].castIndexes.push(i);
  }
  devData.castHistory = devCasts;
  devData.lakes = lakes;
  devData.baits = baits;
  devData.styles = styles;
  devData.species = species;

  return devData;
}

export default DevData;
