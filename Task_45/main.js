"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//Define a function to create a car object with optional options..
function createCar(manufacturer, modelName, ...extraOptions) {
    const myCar = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOptions));
    return myCar;
}
//Call the function to create a car object
let answer = createCar("Toyota", "Corolla", { color: "Black" }, { features: ["Power window", "Sunroof"] });
//Print the car object
console.log(answer);
// type car = {
//   manufacturer: string;
//   model: string;
//   [key: string]: any;
// };
// function createCar(
//   manufacturer: string,
//   model: string,
//   optional: Record<string, any>
// ): car {
//   return {
//     manufacturer,
//     model,
//     ...optional,
//   };
// }
// const myCar: car = createCar("Toyota","Corolla",{color: "Black", year:"2024",Sunroof:"True"});
// console.log(myCar);
