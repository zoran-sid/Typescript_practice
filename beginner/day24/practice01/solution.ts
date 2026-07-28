// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };
type StudyTask = { readonly id: string; title: string; minutes: number; state: TaskState };
type ImportResult =
  | { ok: true; tasks: StudyTask[]; rejected: number }
  | { ok: false; message: string };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查当前 value 不是 null 且 typeof 为 object。
  // 返回 true 是向 TypeScript 承诺这两项运行时检查都通过；false 表示不能按对象读字段。
  // 下面的 false 会暂时拒绝所有输入，完成时要替换为实际检查结果。
  return false;
}
function isTaskState(value: unknown): value is TaskState {
  // TODO 2：先用 isRecord 检查 value，再按 status 验证：todo 无时间要求，
  // doing 的 startedAt 必须是 string，done 的 startedAt/completedAt 都必须是 string。
  // true 承诺当前值符合 TaskState 的某一完整分支；false 表示至少一项没通过。
  // 下面的 false 只是“全部拒绝”的占位结果。
  return false;
}
function isStudyTask(value: unknown): value is StudyTask {
  // TODO 3：检查 value 是对象，id/title 是 string，minutes 是有限且不小于 0 的 number，
  // 并让 value.state 通过 isTaskState。true 才承诺整个 value 可当作 StudyTask。
  // 下面的 false 会拒绝合法任务，完成时要替换为整组检查结果。
  return false;
}
function importTasks(text: string): ImportResult {
  let parsed: unknown;
  try { parsed = JSON.parse(text) as unknown; }
  catch {
    // TODO 4：这里处理无法解析的 text；把占位消息替换成题目指定的 "JSON format is invalid"。
    return { ok: false, message: "TODO: JSON 解析失败信息" };
  }
  // TODO 5：先确认 parsed 是数组；顶层错误返回失败。
  // 数组合法时用 isStudyTask 分出 tasks，并把原项数减去 tasks.length 存进 rejected。
  // 下面的失败对象只是尚未完成数组验证与汇总时的占位返回值。
  return { ok: false, message: "TODO: 验证导入结果" };
}
function describeState(state: TaskState): string {
  switch (state.status) {
    case "todo":
      // TODO 6：当前分支已确定 status 为 todo；返回题目指定的 todo 描述。
      // 空字符串是占位值。
      return "";
    case "doing":
      // TODO 7：当前分支可安全读取 state.startedAt；把它放进“doing since 时间”。
      // 空字符串是占位值。
      return "";
    case "done":
      // TODO 8：当前分支可安全读取 state.completedAt；把它放进“done at 时间”。
      // 空字符串是占位值。
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
  // TODO 9：只遍历 result.tasks，把每个 task.minutes 累加成 totalMinutes 并按题目格式输出。
}
const invalidJson = importTasks("{");
if (!invalidJson.ok) console.log(`Invalid JSON: ${invalidJson.message}`);
