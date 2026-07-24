// 解题结构提示：此题采用“全部有效才导入”的边界策略。
type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };
type StudyTask = { readonly id: string; title: string; minutes: number; state: TaskState };
type ImportResult = { ok: true; tasks: StudyTask[] } | { ok: false; message: string };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：排除 null 并检查 object。
  return false;
}
function isTaskState(value: unknown): value is TaskState {
  // TODO 2：按 status 验证对应时间字段。
  return false;
}
function isStudyTask(value: unknown): value is StudyTask {
  // TODO 3：验证 id、title、minutes 与 state。
  return false;
}
function importTasks(text: string): ImportResult {
  let parsed: unknown;
  try { parsed = JSON.parse(text) as unknown; }
  catch { return { ok: false, message: "TODO: JSON 解析失败信息" }; }
  // TODO 4：要求 parsed 是数组且 every(isStudyTask)，成功时返回任务数组。
  return { ok: false, message: "TODO: 数据验证失败信息" };
}
function describeState(state: TaskState): string {
  // TODO 5：用完整 switch 描述三种状态。
  return "";
}
const text = JSON.stringify([
  { id: "ts-24", title: "Validate data", minutes: 45, state: { status: "doing", startedAt: "09:00" } },
  { id: "ts-25", title: "Build report", minutes: 60, state: { status: "todo" } },
]);
const result = importTasks(text);
if (result.ok) {
  const first = result.tasks[0];
  // TODO 6：合计 totalMinutes；处理 first 可能不存在。
  console.log(first ? describeState(first.state) : "First: none");
} else console.log(`Import failed: ${result.message}`);
