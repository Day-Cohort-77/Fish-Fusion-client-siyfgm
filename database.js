/**
 * Fish inventory database
 * This module exports an array of fish objects that represent the available inventory.
 * Each fish object contains the following properties:
 * - id: Unique identifier for the fish
 * - species: Type of fish
 * - weight: Weight of the fish in pounds
 * - price: Price per pound in dollars
 * - amount: Number of this type of fish in inventory
 */

function randomAmount(min, max) {
  return Math.random() * (max - min) + min;
}

export const fishes = [
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: Math.round(randomAmount(1, 50))},
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: Math.round(randomAmount(1, 50))},
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: Math.round(randomAmount(1, 50))},
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: Math.round(randomAmount(1, 50))},
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: Math.round(randomAmount(1, 50))},
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: Math.round(randomAmount(1, 50))},
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: Math.round(randomAmount(1, 50))},
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: Math.round(randomAmount(1, 50))},
];
