// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList: string[] = ["Anila,", "Samra,", "Anam,"];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    "\nDear " +
      guestList[i] +
      " You are invited to the dinner."
  );
}

console.log("\nGood News! We find Big Table so we are inviting 3 more guests.");

//Add one guest to the beginning
guestList.unshift("Alisha,");
//Add one guest to the middle
guestList.splice(2, 0, "Hamna,");
//Add one guest to the end
guestList.push("Iqra,");

for (let i = 0; i < guestList.length; i++) {
  console.log(
    "\nDear " +
      guestList[i] +
      " You are invited to the dinner."
  );
}
