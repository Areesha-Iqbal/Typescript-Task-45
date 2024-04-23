// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicianNames = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//To show names with out great
console.log("Magicians Name:");
show_magicians(magicianNames);
//function for adding Great in names
function make_great(magicians) {
    magicians.forEach(function (name) { return console.log("The Great ".concat(name)); });
}
//Show magician names with "The Great" added
console.log("\nGreat Magicians:");
make_great(magicianNames);
