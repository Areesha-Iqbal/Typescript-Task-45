// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Array of magician’s names
let magicians: string[] = ["Dynamo", "Criss Angel", "Teller", "Ricky Jay"];

function show_magicians(magicians: string[]) {
  magicians.forEach((name) => {
    console.log(name);
  });
}
//Call the function to show the magician's names
show_magicians(magicians);
