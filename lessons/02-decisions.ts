console.log("\nLesson 2: Decisions with if statements\n");

const blockedProjects: number = 2;

if (blockedProjects === 0) {
  console.log("Everything is moving.");
} else if (blockedProjects <= 2) {
  console.log("A few projects need attention.");
} else {
  console.log("Escalation is needed.");
}

const budgetLeft: number = 15000;

if (budgetLeft > 10000) {
  console.log("There is room for one more investment.");
} else {
  console.log("Keep spending tight this month.");
}

console.log("\nProgramming often means turning decision rules into code.");
