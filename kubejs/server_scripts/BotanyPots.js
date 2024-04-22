ServerEvents.recipes(event => {
  const trees = JsonIO.read('kubejs/globals/trees.json').trees;
  trees.forEach(tree => {
    event.custom({
      type: "botanypots:crop",
      seed: { item: tree.sapling },
      categories: ["dirt"],
      growthTicks: 2400,
      display: { block: tree.sapling },
      drops: [
        {
          output: { item: tree.log },
          chance: 1.0,
          minRolls: 2,
          maxRolls: 3
        },
        {
          output: { item: tree.sapling },
          chance: 0.05
        }
      ].concat(tree.extras.map(x => ({ output: { item: x }, chance: 0.25 })))
    });
  });
});