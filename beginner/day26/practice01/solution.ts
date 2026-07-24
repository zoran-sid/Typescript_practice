// 解题结构提示：异步边界、状态联合、渲染与测试位置已保留。
type StudyTask = { readonly id: string; title: string; minutes: number; status: "todo" | "doing" | "done" };
type LoadState =
  | { status: "loading" }
  | { status: "success"; tasks: StudyTask[]; totalMinutes: number }
  | { status: "failure"; message: string };
interface TaskRepository { load(): Promise<unknown>; }
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查非 null 对象。
  return false;
}
function isStudyTask(value: unknown): value is StudyTask {
  // TODO 2：验证全部字段、分钟范围与状态字面量。
  return false;
}
function parseTasks(value: unknown): StudyTask[] | null {
  // TODO 3：空数组应合法；非数组或任一坏元素返回 null。
  return null;
}
async function loadDashboard(repository: TaskRepository): Promise<LoadState> {
  try {
    const value = await repository.load();
    // TODO 4：parseTasks 后构造 success 或数据错误 failure，并统计分钟。
    return { status: "failure", message: "TODO: 处理加载结果" };
  } catch (error: unknown) {
    // TODO 5：先收窄 error，再构造可读的 failure。
    return { status: "failure", message: "TODO: 处理异步错误" };
  }
}
function render(state: LoadState): string[] {
  switch (state.status) {
    case "loading":
      // TODO 6：返回 loading 行。
      return [];
    case "failure":
      // TODO 7：返回状态与 message。
      return [];
    case "success":
      // TODO 8：返回任务数、完成数与分钟。
      return [];
  }
}
class MemoryTaskRepository implements TaskRepository {
  constructor(private readonly value: unknown, private readonly error: Error | undefined = undefined) {}
  async load(): Promise<unknown> {
    await Promise.resolve();
    if (this.error !== undefined) return Promise.reject(this.error);
    return this.value;
  }
}
async function runRegressionTests(): Promise<number> {
  // TODO 9：分别覆盖正常、空数组、坏数据与拒绝 Promise；通过后才计数。
  return Promise.resolve(0);
}
const tasks = [
  { id: "a", title: "Async", minutes: 30, status: "done" },
  { id: "b", title: "Tests", minutes: 45, status: "todo" },
];
for (const line of render({ status: "loading" })) console.log(line);
const finalState = await loadDashboard(new MemoryTaskRepository(tasks));
for (const line of render(finalState)) console.log(line);
console.log(`Tests passed: ${await runRegressionTests()}/4`);
