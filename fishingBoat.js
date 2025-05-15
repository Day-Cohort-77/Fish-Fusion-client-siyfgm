/**
 * Fishing Boat Module
 * This module simulates a fishing boat that collects random fish from the inventory.
 
 * This module exports an array of fish objects that represent the available inventory.
 * Each fish object contains the following properties:
 * - id: Unique identifier for the fish
 * - species: Type of fish
 * - weight: Weight of the fish in pounds
 * - price: Price per pound in dollars
 * - amount: Number of this type of fish in inventory
 */
const fishes = [
  { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
  { id: 2, species: "Mackerel", weight: 3, price: 4.1, amount: 48 },
  { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
  { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
  { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
  { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
  { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
  { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 },
];

const boatInventory = () => {
  // Initialize an empty array to store the selected fish
  const fish = [];
  // Keep selecting fish until we have 8 unique ones
  while (fish.length < 8) {
    // Generate a random index between 0 and the length of the fishes array
    const randomFishId = Math.floor(Math.random() * fishes.length);
    const caughtFish = fishes[randomFishId];
    // Check if the selected fish is already in our collection
    let isDuplicate = false;
    for (let counter = 0; counter < fish.length; counter++) {
      if (fish[counter].id === caughtFish.id) {
        isDuplicate = true;
        break;
      }
    }
    // If it's not a duplicate, add it to the collection
    if (isDuplicate === false) {
      fish.push(caughtFish);
    }
  }
  // Return the array of unique fish
  return fish;
};

module.exports = { boatInventory };
