// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals:string[]= ["Cat","Dog","Rabbit"];

//For loop print each animals name
for(let animal of animals){
    console.log(animal);
}
//Print a statement about each animal
for(let animal of animals){
    console.log(`A ${animal} can be a good pet.`);
}
//expressing a general thought about pets
console.log("\nAll of these animals can make great pets with the right care.");

