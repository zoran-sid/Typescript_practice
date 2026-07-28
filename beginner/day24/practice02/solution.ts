// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };
type StudyTask = { readonly id: string; title: string; minutes: number; state: TaskState };
type ImportResult = { ok: true; tasks: StudyTask[] } | { ok: false; message: string };
function isRecord(value: unknown): value is Record<string, unknown> {
  // TODO 1：检查 value 不是 null 且 typeof 为 object。
  // true 承诺这两项检查已通过，false 表示不能安全读取字段；下面的 false 只是全拒绝占位。
  return false;
}
function isTaskState(value: unknown): value is TaskState {
  // TODO 2：先确认 value 是对象，再按 todo/doing/done 检查各自需要的时间字段。
  // true 承诺当前值完整符合其中一个 TaskState 分支，false 表示不符合；下面的 false 要替换。
  return false;
}
function isStudyTask(value: unknown): value is StudyTask {
  // TODO 3：验证 value 的 id/title、有限非负 minutes，并让 state 通过 isTaskState。
  // true 才能把当前值收窄为 StudyTask；下面的 false 会暂时拒绝所有任务。
  return false;
}
function importTasks(text: string): ImportResult {
  let parsed: unknown;
  try { parsed = JSON.parse(text) as unknown; }
  catch {
    // TODO 4：text 无法解析时，把占位消息换成明确的 JSON 失败说明。
    return { ok: false, message: "TODO: JSON 解析失败信息" };
  }
  // TODO 5：要求 parsed 是数组且每一项都通过 isStudyTask；全部通过才返回 ok: true 和 tasks。
  // 任一项失败时返回 ok: false。下面的失败对象只是未完成验证时的占位。
  return { ok: false, message: "TODO: 数据验证失败信息" };
}
function describeState(state: TaskState): string {
  // TODO 6：用 state.status 的完整 switch 返回三种描述；
  // doing 读取 startedAt，done 读取 completedAt。下面的空字符串未区分任何状态，必须替换。
  return "";
}
const text = JSON.stringify([
  { id: "ts-24", title: "Validate data", minutes: 45, state: { status: "doing", startedAt: "09:00" } },
  { id: "ts-25", title: "Build report", minutes: 60, state: { status: "todo" } },
]);
const result = importTasks(text);
if (result.ok) {
  const first = result.tasks[0];
  // TODO 7：从 result.tasks 累加 minutes 得到 totalMinutes 并输出；
  // first 来自索引 0，先处理 undefined；存在时把 first.title 与
  // describeState(first.state) 组合成“First: 标题 (状态描述)”，替换下面只输出状态的占位写法。
  console.log(first ? describeState(first.state) : "First: none");
} else console.log(`Import failed: ${result.message}`);
// TODO 8：再创建一批 minutes 为字符串的 JSON，交给 importTasks；
// 失败分支按“Invalid import: 消息”输出。不要复用上面的成功 result 假装测试坏数据。
