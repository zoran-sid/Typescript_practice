type StudyTask = {
  readonly id: string;
  title: string;
  minutes: number;
  status: "todo" | "doing" | "done";
};

type LoadState =
  | { status: "loading" }
  | { status: "success"; tasks: StudyTask[]; totalMinutes: number }
  | { status: "failure"; message: string };

interface TaskRepository {
  load(): Promise<unknown>;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isStudyTask(value: unknown): value is StudyTask {
  return isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.minutes === "number" &&
    Number.isFinite(value.minutes) && value.minutes >= 0 &&
    (value.status === "todo" || value.status === "doing" || value.status === "done");
}

function parseTasks(value: unknown): StudyTask[] | null {
  return Array.isArray(value) && value.every(isStudyTask) ? value : null;
}

async function loadDashboard(repository: TaskRepository): Promise<LoadState> {
  try {
    const value = await repository.load();
    const tasks = parseTasks(value);
    if (tasks === null) return { status: "failure", message: "Task data is invalid" };
    const totalMinutes = tasks.reduce((sum, task) => sum + task.minutes, 0);
    return { status: "success", tasks, totalMinutes };
  } catch (error: unknown) {
    return {
      status: "failure",
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

function render(state: LoadState): string[] {
  switch (state.status) {
    case "loading": return ["State: loading"];
    case "failure": return ["State: failure", `Message: ${state.message}`];
    case "success":
      return [
        "State: success",
        `Tasks: ${state.tasks.length}`,
        `Done: ${state.tasks.filter((task) => task.status === "done").length}`,
        `Minutes: ${state.totalMinutes}`,
      ];
  }
}

class MemoryTaskRepository implements TaskRepository {
  constructor(
    private readonly value: unknown,
    private readonly error: Error | undefined = undefined,
  ) {}

  async load(): Promise<unknown> {
    await Promise.resolve();
    if (this.error !== undefined) throw this.error;
    return this.value;
  }
}

async function runRegressionTests(): Promise<number> {
  let passed = 0;
  const validTasks = [
    { id: "a", title: "Async", minutes: 30, status: "done" },
    { id: "b", title: "Tests", minutes: 45, status: "todo" },
  ];

  const normal = await loadDashboard(new MemoryTaskRepository(validTasks));
  if (normal.status === "success" && normal.tasks.length === 2 && normal.totalMinutes === 75) passed += 1;

  const empty = await loadDashboard(new MemoryTaskRepository([]));
  if (empty.status === "success" && empty.tasks.length === 0 && empty.totalMinutes === 0) passed += 1;

  const invalid = await loadDashboard(new MemoryTaskRepository([{ id: "x", title: "Broken", minutes: "30", status: "todo" }]));
  if (invalid.status === "failure" && invalid.message === "Task data is invalid") passed += 1;

  const offline = await loadDashboard(new MemoryTaskRepository(undefined, new Error("offline")));
  if (offline.status === "failure" && offline.message === "offline") passed += 1;

  return passed;
}

const tasks = [
  { id: "a", title: "Async", minutes: 30, status: "done" },
  { id: "b", title: "Tests", minutes: 45, status: "todo" },
];
for (const line of render({ status: "loading" })) console.log(line);
const finalState = await loadDashboard(new MemoryTaskRepository(tasks));
for (const line of render(finalState)) console.log(line);
console.log(`Tests passed: ${await runRegressionTests()}/4`);
