type Task = { title: string; minutes: number };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function parseTasks(value: unknown): Task[] | null {
  // TODO：数组中每项都必须有 string title 和非负 number minutes。
  void value;
  return null;
}

async function rejects(): Promise<unknown> {
  await Promise.resolve();
  throw new Error("offline");
}

async function becomesFailure(): Promise<boolean> {
  // TODO：等待 rejects；只有捕获到 message 为 offline 的 Error 才返回 true。
  return false;
}

let passed = 0;
const valid = parseTasks([{ title: "Types", minutes: 30 }]);
if (valid?.length === 1) passed += 1;
if (parseTasks([])?.length === 0) passed += 1;
if (parseTasks([{ title: "Broken", minutes: "30" }]) === null) passed += 1;
if (await becomesFailure()) passed += 1;

console.log(`Tests passed: ${passed}/4`);
