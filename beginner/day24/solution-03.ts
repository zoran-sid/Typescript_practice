type ImportedTask = { id: string; title: string; minutes: number };

type BatchResult = {
  tasks: ImportedTask[];
  rejected: number;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isImportedTask(value: unknown): value is ImportedTask {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.minutes === "number" &&
    Number.isFinite(value.minutes) &&
    value.minutes >= 0
  );
}

function importBatch(values: unknown[]): BatchResult {
  const tasks = values.filter(isImportedTask);
  return { tasks, rejected: values.length - tasks.length };
}

const incoming: unknown[] = [
  { id: "a", title: "Read", minutes: 30 },
  { id: "b", title: "Practice", minutes: 45 },
  { id: "c", title: "Broken", minutes: "20" },
];

const result = importBatch(incoming);
const total = result.tasks.reduce((sum, task) => sum + task.minutes, 0);

console.log(`Accepted: ${result.tasks.length}`);
console.log(`Rejected: ${result.rejected}`);
console.log(`Minutes: ${total}`);
