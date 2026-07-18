const originalTask = {
  title: "阅读一章",
  done: false,
};

// TODO：不要让 copyTask 与 originalTask 指向同一个对象。
const copyTask = originalTask;
copyTask.done = true;

console.log(`副本完成: ${copyTask.done}`);
console.log(`原任务完成: ${originalTask.done}`);

export {};
