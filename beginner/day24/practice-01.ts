type TaskState =
  | { status: "todo" }
  | { status: "doing"; startedAt: string }
  | { status: "done"; startedAt: string; completedAt: string };

function describeState(state: TaskState): string {
  // TODO：根据 state.status 返回准确文字；请不要把字段改成可选属性。
  void state;
  return "Unknown";
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
