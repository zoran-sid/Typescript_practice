type ImportedTask = { id: string; title: string; minutes: number };

type BatchResult = {
  tasks: ImportedTask[];
  rejected: number;
};

function importBatch(values: unknown[]): BatchResult {
  // TODO：只接收三个字段都正确且 minutes >= 0 的对象。
  void values;
  return { tasks: [], rejected: 0 };
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
