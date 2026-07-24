// 解题结构提示：模型、边界与控制流保留；验证细节请完成 TODO。
type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };
type StudyTask = { readonly id: string; title: string; minutes: number; state: TaskState };
type ImportResult =
  | { ok: true; tasks: StudyTask[]; rejected: number }
  | { ok: false; message: string };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：同时检查非 null 与 object。
  return false;
}
function isTaskState(value: unknown): value is TaskState {
  // TODO 2：先确认对象，再按 status 验证各状态独有字段。
  return false;
}
function isStudyTask(value: unknown): value is StudyTask {
  // TODO 3：组合基础字段、有限非负分钟数与嵌套状态验证。
  return false;
}
function importTasks(text: string): ImportResult {
  let parsed: unknown;
  try { parsed = JSON.parse(text) as unknown; }
  catch { return { ok: false, message: "TODO: JSON 解析失败信息" }; }
  // TODO 4：确认数组，筛出合法任务，并计算 rejected。
  return { ok: false, message: "TODO: 验证导入结果" };
}
function describeState(state: TaskState): string {
  switch (state.status) {
    case "todo":
      // TODO 5：返回 todo 描述。
      return "";
    case "doing":
      // TODO 6：使用 startedAt。
      return "";
    case "done":
      // TODO 7：使用 completedAt。
      return "";
  }
}
const incomingText = JSON.stringify([
  { id: "a", title: "Plan", minutes: 30, state: { status: "todo" } },
  { id: "b", title: "Practice", minutes: 45, state: { status: "doing", startedAt: "09:00" } },
  { id: "c", title: "Review", minutes: 30, state: { status: "done", startedAt: "10:00", completedAt: "10:30" } },
  { id: "d", title: "Broken", minutes: "20", state: { status: "todo" } },
]);
const result = importTasks(incomingText);
if (result.ok) {
  console.log(`Import succeeded: ${result.tasks.length} tasks`);
  console.log(`Rejected: ${result.rejected}`);
  for (const task of result.tasks) console.log(`${task.title}: ${describeState(task.state)}`);
  // TODO 8：合计有效任务的分钟数。
}
const invalidJson = importTasks("{");
if (!invalidJson.ok) console.log(`Invalid JSON: ${invalidJson.message}`);
