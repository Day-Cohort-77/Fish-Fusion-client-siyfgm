import { fishes } from "./database.js";

export const boatInventory = () => {
  const fish = [];

  for (let counter = 0; counter < 3; counter++) {
    const randomFishId = Math.floor(Math.random() * fishes.length);
    fish.push(fishes[randomFishId]);
  }
  return fish;
};
