const { boatInventory } = require("./fishingBoat.js");
const wholeSale = boatInventory();

const mongerInventory = (fishAvailable) => {
  const fishBought = [];
  const speciesSeen = new Set();
  
  for (let fish of fishAvailable) {
    if (speciesSeen.has(fish.species)) {
      continue;
    }
    // Monger buys exactly 10 fish if price is right and enough available
    if (fish.price <= 7.5 && fish.amount >= 10) {
      speciesSeen.add(fish.species);
      const purchasedFish = {
        ...fish,
        amount: 10  // Always buy exactly 10
      };
      fishBought.push(purchasedFish);
    }
  }
  return fishBought;
}

const forChef = (fishArray, chefBudget) => {
  return fishArray.filter((fish) => fish.price <= chefBudget).map(fish => ({
    ...fish,
    amount: Math.round(fish.amount / 2) // Calculate 50% of monger's amount
  }));
}

const mongersInventory = mongerInventory(wholeSale);

module.exports = { forChef, mongersInventory };