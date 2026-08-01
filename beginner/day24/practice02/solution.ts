type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };
type StudyTask = { readonly id: string; title: string; minutes: number; state: TaskState };
type ImportResult = { ok: true; tasks: StudyTask[] } | { ok: false; message: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isTaskState(value: unknown): value is TaskState {
  if (!isRecord(value)) return false;
  if (value.status === "todo") return true;
  if (value.status === "doing") return typeof value.startedAt === "string";
  return value.status === "done"
    && typeof value.startedAt === "string"
    && typeof value.completedAt === "string";
}

function isStudyTask(value: unknown): value is StudyTask {
  return isRecord(value)
    && typeof value.id === "string"
    && typeof value.title === "string"
    && typeof value.minutes === "number"
    && Number.isFinite(value.minutes)
    && value.minutes >= 0
    && isTaskState(value.state);
}

function importTasks(text: string): ImportResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text) as unknown;
  } catch {
    return { ok: false, message: "JSON format is invalid" };
  }
  if (!Array.isArray(parsed) || !parsed.every(isStudyTask)) {
    return { ok: false, message: "Task data is invalid" };
  }
  return { ok: true, tasks: parsed };
}

function describeState(state: TaskState): string {
  switch (state.status) {
    case "todo": return "todo";
    case "doing": return `doing since ${state.startedAt}`;
    case "done": return `done at ${state.completedAt}`;
  }
}

const text = JSON.stringify([
  { id: "ts-24", title: "Validate data", minutes: 45, state: { status: "doing", startedAt: "09:00" } },
  { id: "ts-25", title: "Build report", minutes: 60, state: { status: "todo" } },
]);

// 调用关系：成功 JSON -> importTasks -> result -> 第一项、总分钟 -> 输出。
const result = importTasks(text);
if (result.ok) {
  const first = result.tasks[0];
  const totalMinutes = result.tasks.reduce((sum, task) => sum + task.minutes, 0);
  console.log(`Import succeeded: ${result.tasks.length} tasks`);
  console.log(first ? `First: ${first.title} (${describeState(first.state)})` : "First: none");
  console.log(`Total planned minutes: ${totalMinutes}`);
} else {
  console.log(`Import failed: ${result.message}`);
}

const invalidText = JSON.stringify([
  { id: "broken", title: "Broken", minutes: "45", state: { status: "todo" } },
]);
const invalidResult = importTasks(invalidText);
if (!invalidResult.ok) console.log(`Invalid import: ${invalidResult.message}`);
