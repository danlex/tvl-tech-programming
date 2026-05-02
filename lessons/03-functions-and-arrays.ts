console.log("\nLesson 3: Functions and arrays\n");

const teamMembers: string[] = ["Ana", "Mihai", "Sara", "Jon"];

function welcomeManager(name: string): string {
  return `Hello ${name}, here is your team overview.`;
}

console.log(welcomeManager("Elena"));

console.log("\nTeam members:");
for (const member of teamMembers) {
  console.log("-", member);
}

function countPeople(names: string[]): number {
  return names.length;
}

console.log("\nHeadcount:", countPeople(teamMembers));

console.log("\nA function is a reusable instruction. An array is a list.");
