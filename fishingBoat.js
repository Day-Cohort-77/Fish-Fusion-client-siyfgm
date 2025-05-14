/**
 * Fishing Boat Module
 * This module simulates a fishing boat that collects random fish from the inventory.
 */

// Import the fish inventory from the database module
import { fishes } from "./database.js";

/**
 * boatInventory function
 * Simulates a fishing trip by randomly selecting **unique** fish from the available inventory.
 *
 * Returns an array containing randomly selected fish objects (no duplicates)
 */
export const boatInventory = () => {
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
