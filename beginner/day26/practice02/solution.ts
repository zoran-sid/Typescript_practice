import { loadDashboard } from "../dashboard.js";
import { MemoryTaskRepository } from "../repository.js";
import type { LoadState } from "../types.js";

function render(state: LoadState): string[] {
  switch (state.status) {
    case "loading":
      return ["State: loading"];
    case "failure":
      return ["State: failure", `Message: ${state.message}`];
    case "success": {
      const done = state.tasks.filter((task) => task.status === "done").length;
      return [
        "State: success",
        `Tasks: ${state.tasks.length}`,
        `Done: ${done}`,
        `Minutes: ${state.totalMinutes}`,
      ];
    }
  }
}

const repository = new MemoryTaskRepository([
  { id: "a", title: "Async", minutes: 30, status: "done" },
  { id: "b", title: "Tests", minutes: 45, status: "todo" },
]);

for (const line of render({ status: "loading" })) console.log(line);
// 调用关系：repository -> await loadDashboard -> finalState -> render -> 输出。
const finalState = await loadDashboard(repository);
for (const line of render(finalState)) console.log(line);

const invalidRepository = new MemoryTaskRepository([
  { id: "broken", title: "Broken", minutes: "45", status: "todo" },
]);
const invalidState = await loadDashboard(invalidRepository);
for (const line of render(invalidState)) console.log(line);
