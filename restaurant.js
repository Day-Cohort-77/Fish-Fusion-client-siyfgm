const { forChef, mongersInventory } = require("./fishMonger.js");

function todaysMenuHtml(item) {
  return `<h2>${item.species}</h2>
        <section class="menu__item">${item.species} Soup</section>
        <section class="menu__item">${item.species} Sandwich</section>
        <section class="menu__item">Grilled ${item.species}</section>
    `;
}

function generateTodaysMenus(itemsArray) {
  // Map over each item in the array, generating HTML for each one
  const menuHTML = itemsArray.map((item) => todaysMenuHtml(item));
  // Join all the HTML strings together
  return menuHTML.join("");
}

function fishMenu(chefBudget) {
  const menuItems = forChef(mongersInventory, chefBudget);
  const allMenusHTML = generateTodaysMenus(menuItems);

  // Build the complete HTML structure
  const finalMenu = `<h1>Menu</h1>
<article class="menu">
    ${allMenusHTML}
</article>`;

  return finalMenu;
}

module.exports = { fishMenu };