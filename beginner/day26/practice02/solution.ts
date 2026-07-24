// 解题结构提示：已有模块可复用，渲染分支请沿 TODO 补全。
import { loadDashboard } from "../dashboard.js";
import { MemoryTaskRepository } from "../repository.js";
import type { LoadState } from "../types.js";
function render(state: LoadState): string[] {
  switch (state.status) {
    case "loading":
      // TODO 1：返回 loading 输出行。
      return [];
    case "failure":
      // TODO 2：输出 failure 与 message。
      return [];
    case "success":
      // TODO 3：输出任务数、完成数和总分钟。
      return [];
  }
}
const repository = new MemoryTaskRepository([
  { id: "a", title: "Async", minutes: 30, status: "done" },
  { id: "b", title: "Tests", minutes: 45, status: "todo" },
]);
for (const line of render({ status: "loading" })) console.log(line);
const finalState = await loadDashboard(repository);
for (const line of render(finalState)) console.log(line);
