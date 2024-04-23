// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//Write a function
function make_shirt(size, text) {
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
//Call the function
make_shirt("Large", "Hello world");
make_shirt("Medium", "Hello world");
make_shirt("Small", "Hello world");
