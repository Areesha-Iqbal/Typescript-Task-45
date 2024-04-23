// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Write a series of conditional tests.

//Creating car variable
let car: string = "sabaru";

//Use comparison Operator
console.log("\nIs car === 'sabaru'? I predict True");
console.log(car === "sabaru");

console.log("\nIs car == 'sabaru'? I predict True");
console.log(car == "sabaru");

console.log("\nIs car !== 'sabaru'? I predict True");
console.log(car !== "honda");

console.log("\nIs car != 'sabaru'? I predict True");
console.log(car != "honda");

console.log("\nIs car !== 'civic'? I predict True");
console.log(car !== "civic");

//False
console.log("\nIs car.lowerCase == 'SABARU'? I predict False");
console.log(car.toLocaleLowerCase() == "civic");

console.log("\nIs car != 'sabaru'? I predict False");
console.log(car != "sabaru");

console.log("\nIs car !== 'sabaru'? I predict False");
console.log(car !== "sabaru");

console.log("\nIs car == 'sabaru'? I predict False");
console.log(car == "honda");

console.log("\nIs car == 'Train'? I predict False");
console.log(car == "Train");
