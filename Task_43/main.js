"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Create an Array
let magicianNames = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];
//A function that creates a copy of an array
function copyArray(arr) {
    return [...arr];
}
let copyMagicianArray = copyArray(magicianNames);
//Function with out great
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(name));
}
//To show names with out great
console.log("(Original Array) Magicians name:");
show_magicians(magicianNames);
//function for adding Great in names
function make_great(magicians) {
    magicians.forEach((name) => console.log(`The Great ${name}`));
}
//Show magician names with "The Great" added
console.log('\n(Copy Array) Magicians name with "The Great:"');
make_great(copyMagicianArray);
