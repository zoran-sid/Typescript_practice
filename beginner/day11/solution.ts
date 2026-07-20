type StudyTask =
  | { status: "waiting"; title: string }
  | { status: "studying"; title: string; minutes: number }
  | { status: "completed"; title: string; score?: number }
  | { status: "failed"; title: string; reason: string };

function assertNever(value: never): never {
  throw new Error("未处理的状态：" + JSON.stringify(value));
}

function describeTask(task: StudyTask): string {
  switch (task.status) {
    case "waiting":
      return `待开始：${task.title}`;
    case "studying":
      return `学习中：${task.title}（${task.minutes} 分钟）`;
    case "completed":
      return `已完成：${task.title}（${task.score ?? "待评分"}${task.score === undefined ? "" : " 分"}）`;
    case "failed":
      return `失败：${task.title}（${task.reason}）`;
    default:
      return assertNever(task);
  }
}

const tasks: StudyTask[] = [
  { status: "waiting", title: "联合类型" },
  { status: "studying", title: "函数", minutes: 45 },
  { status: "completed", title: "对象", score: 92 },
  { status: "completed", title: "复习" },
  { status: "failed", title: "提交", reason: "网络中断" },
];

for (const task of tasks) {
  console.log(describeTask(task));
}
