type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };

type StudyTask = {
  readonly id: string;
  title: string;
  minutes: number;
  state: TaskState;
};

type ImportResult =
  | { ok: true; tasks: StudyTask[]; rejected: number }
  | { ok: false; message: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isTaskState(value: unknown): value is TaskState {
  if (!isRecord(value)) return false;
  if (value.status === "todo") return true;
  if (value.status === "doing") return typeof value.startedAt === "string";
  if (value.status === "done") {
    return typeof value.startedAt === "string" && typeof value.completedAt === "string";
  }
  return false;
}

function isStudyTask(value: unknown): value is StudyTask {
  return isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.minutes === "number" &&
    Number.isFinite(value.minutes) && value.minutes >= 0 &&
    isTaskState(value.state);
}

function importTasks(text: string): ImportResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, message: "JSON format is invalid" };
  }
  if (!Array.isArray(parsed)) return { ok: false, message: "Task list must be an array" };
  const tasks = parsed.filter(isStudyTask);
  return { ok: true, tasks, rejected: parsed.length - tasks.length };
}

function describeState(state: TaskState): string {
  switch (state.status) {
    case "todo": return "todo";
    case "doing": return `doing since ${state.startedAt}`;
    case "done": return `done at ${state.completedAt}`;
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
  console.log(`Total planned minutes: ${result.tasks.reduce((sum, task) => sum + task.minutes, 0)}`);
}
const invalidJson = importTasks("{");
if (!invalidJson.ok) console.log(`Invalid JSON: ${invalidJson.message}`);
