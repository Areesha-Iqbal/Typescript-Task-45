// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var guest_list = ["Ayesha,", "Samra,", "Anam,"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear " +
        guest_list[i] +
        "\nYou are invited to the dinner.");
}
var absent_Guest = "Ayesha";
var new_Guest = "Anila";
guest_list[0] = new_Guest;
console.log("\nMiss ".concat(absent_Guest, " is not coming to the dinner."));
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nDear " +
        guest_list[i] +
        "\nYou are still invited to the dinner.");
}
