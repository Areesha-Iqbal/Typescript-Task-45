"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//Define a function with a rest parameter that accept items arguments representing our sandwich
function make_sandwich(...items) {
    console.log("\nMaking your sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich !\n");
}
//Call the function 3 times using a different number of arguments
make_sandwich("Chicken", "Egg", "Cheese");
make_sandwich("Beef", "Lettuce", "Tomato", "Butter");
make_sandwich("Bread", "Chicken", "Butter", "Mayo");
