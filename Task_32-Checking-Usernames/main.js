// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//Array of current users
var current_users = ["AreeSha", "Adil", "ALi", "Rabia", "JOHN"];
//Array of new users
var new_users = ["Kashaf", "Areesha", "john", "Zainab", "Ayesha"];
//Loop through new users to check for usernames avalibility
new_users.forEach(function (newAuser) {
    var our_condition = current_users.some(function (currentAuser) { return currentAuser.toLowerCase() === newAuser.toLowerCase(); });
    if (our_condition) {
        console.log("This username ".concat(newAuser, " is already taken! Please write a different username."));
    }
    else {
        console.log("This username ".concat(newAuser, " is available."));
    }
});
