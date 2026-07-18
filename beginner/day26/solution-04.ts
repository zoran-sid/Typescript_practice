type Task = { title: string; minutes: number };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isTask(value: unknown): value is Task {
  return (
    isRecord(value) &&
    typeof value.title === "string" &&
    typeof value.minutes === "number" &&
    Number.isFinite(value.minutes) &&
    value.minutes >= 0
  );
}

function parseTasks(value: unknown): Task[] | null {
  return Array.isArray(value) && value.every(isTask) ? value : null;
}

async function rejects(): Promise<unknown> {
  await Promise.resolve();
  throw new Error("offline");
}

async function becomesFailure(): Promise<boolean> {
  try {
    await rejects();
    return false;
  } catch (error: unknown) {
    return error instanceof Error && error.message === "offline";
  }
}

let passed = 0;
const valid = parseTasks([{ title: "Types", minutes: 30 }]);
if (valid?.length === 1) passed += 1;
if (parseTasks([])?.length === 0) passed += 1;
if (parseTasks([{ title: "Broken", minutes: "30" }]) === null) passed += 1;
if (await becomesFailure()) passed += 1;

console.log(`Tests passed: ${passed}/4`);
