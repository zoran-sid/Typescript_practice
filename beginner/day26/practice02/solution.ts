// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
import { loadDashboard } from "../dashboard.js";
import { MemoryTaskRepository } from "../repository.js";
import type { LoadState } from "../types.js";
function render(state: LoadState): string[] {
  switch (state.status) {
    case "loading":
      // TODO 1：当前 state 是 loading；返回包含“State: loading”的一行数组。
      // 下面的 [] 表示暂时没有输出，不是最终渲染结果。
      return [];
    case "failure":
      // TODO 2：当前分支可读取 state.message；返回 failure 状态行和消息行。
      // 下面的 [] 会丢掉错误信息，完成时要替换。
      return [];
    case "success":
      // TODO 3：从 state.tasks 计算总项数与 done 项数，并读取 state.totalMinutes；
      // 返回 success 状态和题目要求的三项统计。下面的 [] 是临时空输出。
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
