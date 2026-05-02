console.log("\nSolution 2: Prioritization\n");

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
  return item.revenueImpact >= 7 && item.effort <= 4;
}

const result = shouldPrioritize(initiative);
console.log("Should prioritize:", result);
