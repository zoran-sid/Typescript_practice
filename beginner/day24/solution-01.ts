type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };

function assertNever(value: never): never {
  throw new Error(`Unexpected state: ${JSON.stringify(value)}`);
}

function describeState(state: TaskState): string {
  switch (state.status) {
    case "todo":
      return "Todo";
    case "doing":
      return `Doing since ${state.startedAt}`;
    case "done":
      return `Done at ${state.completedAt}`;
    default:
      return assertNever(state);
  }
}

const tasks: Array<{ title: string; state: TaskState }> = [
  { title: "Plan", state: { status: "todo" } },
  { title: "Practice", state: { status: "doing", startedAt: "09:00" } },
  {
    title: "Review",
    state: { status: "done", startedAt: "10:00", completedAt: "10:30" },
  },
];

for (const task of tasks) {
  console.log(`${task.title}: ${describeState(task.state)}`);
}
