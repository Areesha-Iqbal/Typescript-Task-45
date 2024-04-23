//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name = "Areesha iqbal";
console.log("Lower case=", person_name.toLowerCase());
console.log("Upper case=", person_name.toUpperCase());
console.log("Title case=", person_name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
