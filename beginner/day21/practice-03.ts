async function finishTask(task: string): Promise<string> {
  await Promise.resolve();
  return task;
}

const completed: string[] = [];

["A", "B", "C"].forEach(async (task) => {
  completed.push(await finishTask(task));
});

console.log(`完成数量: ${completed.length}`);
