// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list: string[] = ["Ayesha,", "Samra,", "Anam,"];

for (let i = 0; i < guest_list.length; i++) {
  console.log("\nDear " + guest_list[i]+ " You are invited to the dinner.");
}
