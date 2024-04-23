// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//Making a function
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
//Calling a function with by default values
make_shirt();
//Calling a function now with Medium size and default message
make_shirt("Medium");
//Calling a function now with Small size and also different message
make_shirt("Small", "I Love Python");
