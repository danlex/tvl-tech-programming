console.log("\nSolution 1: Weekly report\n");

const completedTasks: number = 7;
const blockedTasks: number = 2;

function buildWeeklyMessage(completed: number, blocked: number): string {
  return `We completed ${completed} tasks and ${blocked} are blocked.`;
}

const report = buildWeeklyMessage(completedTasks, blockedTasks);
console.log(report);
