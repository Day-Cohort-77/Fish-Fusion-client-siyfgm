const dailyPriceLimit = 3.49;
const { fishMenu } = require("./restaurant.js");

// Generate menu with the daily price limit
const todaysMenu = fishMenu(dailyPriceLimit);

// Display the menu
console.log("\n=== Fish Market Daily Report ===\n");
console.log(todaysMenu);