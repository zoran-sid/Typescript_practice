type StudyTask = {
  id: string;
  title: string;
  minutes: number;
  state: { status: "todo" } | { status: "doing"; startedAt: string };
};

function isStudyTask(value: unknown): value is StudyTask {
  // TODO：先排除 null，再逐项检查 id、title、minutes 和 state。
  void value;
  return false;
}

const samples: unknown[] = [
  {
    id: "ts-1",
    title: "Variables",
    minutes: 30,
    state: { status: "todo" },
  },
  { id: "ts-2", title: "Functions", state: { status: "todo" } },
  {
    id: "ts-3",
    title: "Objects",
    minutes: 45,
    state: { status: "paused" },
  },
];

console.log(`Valid task: ${isStudyTask(samples[0])}`);
console.log(`Missing minutes: ${isStudyTask(samples[1])}`);
console.log(`Wrong state: ${isStudyTask(samples[2])}`);
