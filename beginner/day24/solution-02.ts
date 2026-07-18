type StudyTask = {
  id: string;
  title: string;
  minutes: number;
  state: { status: "todo" } | { status: "doing"; startedAt: string };
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function hasValidState(value: unknown): value is StudyTask["state"] {
  if (!isRecord(value)) return false;
  if (value.status === "todo") return true;
  return value.status === "doing" && typeof value.startedAt === "string";
}

function isStudyTask(value: unknown): value is StudyTask {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.minutes === "number" &&
    Number.isFinite(value.minutes) &&
    value.minutes >= 0 &&
    hasValidState(value.state)
  );
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
