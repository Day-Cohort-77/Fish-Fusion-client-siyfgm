# The Fish Restaurant

## Importing Functions

Since the restaurant needs to see which fish are available at the fishmonger market, it will need to import the function that is exported from that module.

## Restaurant Menu

This module must import and invoke the function that is exported by the fish monger module. This module should also define a function that build an HTML version of their daily menu. The function should return the generated HTML string. The function must be named `fishMenu`.

1. Each day, the chef visits the monger and specifies the maximum price she is able to spend per fish.
1. This price must be passed as an argument to the `fishMenu` function so that it can be passed along to the fishmonger function when the chef buys the fish.
1. If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory. This constraint will require you to update your fish monger logic!
1. The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.
    * Tuna Soup
    * Tuna Sandwich
    * Grilled Tuna
1. Your HTML structure must match the example below. Use the same elements and the same class names.
    ```html
    <h1>Menu</h1>
    <article class="menu">
        <h2>Tuna</h2>
        <section class="menu__item">Tuna Soup</section>
        <section class="menu__item">Tuna Sandwich</section>
        <section class="menu__item">Grilled Tuna</section>
    </article>
    ```

1. What is the overall goal?
 to provide a menu that only shows the fish the restaurant has currently.
2. How many modules will be involved to make the goal happen?
 3, fishing boat, fishmonger, and restaurant.
3. what is the responsibility of each module?
    fishingBoat- catches the fish and stores that value in a function called boatInventory
                 exports that function to the fishMonger.
    fishMonger - import boatInventory from the fishingboat module.
               - define the function mongerInventory
               - constraints for the fishmonger(buys 10 of each fish that is less than $7.50 in price and     has a quantity of atleast 10).
               - The mongerInventory function should be passed the value of the boatInventory function. 
               - it should then use logic to filter the array and store the acceptable outputs in a new array.
               - It should also define a new function called forChef that is passed the return value of the mongerInventory. 
               - The chefs price limit should be passed in as an argument to the forChef function. 
               - the forChef function should use logic to filter through the mongers inventory and store all acceptable fish in a new array.
               - The forChef function should be exported 
               
    restaurant -import forChef function
               -The chef of the restaurant declaires the max budget per fish
               -