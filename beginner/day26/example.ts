import { loadDashboard } from "./dashboard.js";
import { MemoryTaskRepository } from "./repository.js";
import type { LoadState } from "./types.js";

function render(state: LoadState): string[] {
  switch (state.status) {
    case "loading":
      return ["State: loading"];
    case "failure":
      return ["State: failure", `Message: ${state.message}`];
    case "success":
      return [
        "State: success",
        `Tasks: ${state.tasks.length}`,
        `Done: ${state.tasks.filter((task) => task.status === "done").length}`,
        `Minutes: ${state.totalMinutes}`,
      ];
  }
}

const repository = new MemoryTaskRepository([
  { id: "a", title: "Async", minutes: 30, status: "done" },
  { id: "b", title: "Tests", minutes: 45, status: "todo" },
]);

for (const line of render({ status: "loading" })) console.log(line);
const finalState = await loadDashboard(repository);
for (const line of render(finalState)) console.log(line);
