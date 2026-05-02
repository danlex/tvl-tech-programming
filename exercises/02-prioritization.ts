console.log("\nExercise 2: Prioritization\n");

type Initiative = {
  name: string;
  revenueImpact: number;
  effort: number;
};

const initiative: Initiative = {
  name: "Internal Analytics Dashboard",
  revenueImpact: 8,
  effort: 3
};

function shouldPrioritize(item: Initiative): boolean {
  // Change this rule so high-impact, low-effort work returns true.
  return false;
}

const result = shouldPrioritize(initiative);
console.log("Should prioritize:", result);

console.log("\nGoal:");
console.log("- Return true when revenue impact is high");
console.log("- Return true when effort is reasonably low");
