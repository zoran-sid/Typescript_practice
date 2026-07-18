async function finishTask(task: string): Promise<string> {
  await Promise.resolve();
  return task;
}

const completed = await Promise.all(
  ["A", "B", "C"].map((task) => finishTask(task)),
);

console.log(`完成数量: ${completed.length}`);
