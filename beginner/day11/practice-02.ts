type TaskState =
  | { kind: "todo"; title: string }
  | { kind: "doing"; title: string; owner: string }
  | { kind: "done"; title: string }
  | { kind: "failed"; title: string; reason: string };

function describeTask(task: TaskState): string {
  switch (task.kind) {
    case "todo":
      return "待办：" + task.title;
    case "doing":
      return "进行中：" + task.title + "（" + task.owner + "）";
    case "done":
      return "完成：" + task.title;
    case "failed":
      return "完成：" + task.title;
    default:
      return "未知任务";
  }
}

const tasks: TaskState[] = [
  { kind: "todo", title: "阅读" },
  { kind: "doing", title: "练习", owner: "Ada" },
  { kind: "done", title: "复习" },
  { kind: "failed", title: "提交", reason: "网络中断" },
];

for (const task of tasks) {
  console.log(describeTask(task));
}
