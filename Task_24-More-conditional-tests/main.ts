// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Tests for equality and inequality with strings
let apple: string = "apple";
console.log("\nIs apple is equal to apple");
console.log(apple === "apple"); //true

console.log("\nIs apple is not equal to apple");
console.log(apple != "apple"); //false

//Tests using the lowercase function
let uppercaseApple = "APPLE";
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple"); //true

console.log("\nAPPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple"); //false

//Numerical tests
let ten = 10;
let twenty = 20;

//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty); //False

//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty); //True

//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0); //True

//Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10); //False

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5); //true

//Less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10); //false

//Tests using "and" and "or" operators
//Using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); //true
console.log("\ntwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30); //false

//Using || (OR)
console.log("\n20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20); //true
console.log("\n20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20); //false

// Test whether an item is in a array
let fruits: string[] = ["Mango", "Banana", "Orange"];
console.log("\nIs Orange include in my fruits array");
console.log(fruits.includes("Orange")); //true
console.log("\nIs Orange not include in my fruits array");
console.log(!fruits.includes("Orange")); //false
