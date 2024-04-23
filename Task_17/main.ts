// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//Array of guest list
let guestList: string[] = ["Ayesha,", "Samra,", "Anam,"];

//1 guest cannot come, invite someone else in her place
let absent_Guest: string = "Ayesha";
let new_Guest: string = "Anila";
guestList[0] = new_Guest;

//Ayesha did not come to dinner
//console.log(`\nMiss ${absent_Guest} is not coming to the dinner.`);

//We have big table arrangement so we are inviting 3 more guests.
console.log("\nGood News! We find Big Table so we are inviting 3 more guests.");

//Add one guest to the beginning
guestList.unshift("Alisha");
//Add one guest to the middle
guestList.splice(2, 0, "Hamna");
//Add one guest to the end
guestList.push("Iqra");

//Printing an invitation message to each guests
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " +
      guestList[i] +
      " You are invited to the dinner."
  );
}

//We could not arrange the big table, there is only capacity for 2 guests
console.log(
  "\nSorry.. We can not arrange a big table, only 2 peoples will be invited."
);

//Using while-loop to remove guests from the array until only two names remain 
while (guestList.length > 2) {
  let remove_guest = guestList.pop();
  console.log(`Dear ${remove_guest}, You are not invited for Dinner.`);
}

//Inviting 2 guests.
console.log("\nInvitations to the last 2 Guest");

//Sending ainvitations to the last two guest on the list 
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear " + guestList[i] + " You are still invited."
  );
}
//Remove last two Guest from the list
guestList.splice(0, 2);
console.log("\nEmpty list", guestList);

