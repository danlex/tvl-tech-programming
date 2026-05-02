console.log("\nLesson 4: Objects and types\n");

type Project = {
  name: string;
  owner: string;
  priority: "low" | "medium" | "high";
  isBlocked: boolean;
};

const project: Project = {
  name: "Customer Portal Refresh",
  owner: "Irina",
  priority: "high",
  isBlocked: false
};

console.log("Project:", project.name);
console.log("Owner:", project.owner);
console.log("Priority:", project.priority);
console.log("Blocked:", project.isBlocked);

if (project.priority === "high" && project.isBlocked) {
  console.log("This needs executive attention.");
} else {
  console.log("This project is manageable right now.");
}

console.log("\nTypes help us describe what kind of data is allowed.");
