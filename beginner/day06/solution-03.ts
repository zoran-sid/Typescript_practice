const originalTask = {
  title: "阅读一章",
  done: false,
};

const copyTask = {
  title: originalTask.title,
  done: originalTask.done,
};
copyTask.done = true;

console.log(`副本完成: ${copyTask.done}`);
console.log(`原任务完成: ${originalTask.done}`);

export {};
