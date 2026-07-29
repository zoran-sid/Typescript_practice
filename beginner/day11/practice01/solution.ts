// 这是解题结构，不是完整答案。只有旁边明确写着 TODO 的空字符串、0、false、[] 等才是占位值，完成时要替换或删除。
type StudyTask =
  | { status: "waiting"; title: string }
  | { status: "studying"; title: string; minutes: number }
  | { status: "completed"; title: string; score?: number }
  | { status: "failed"; title: string; reason: string };
function assertNever(value: never): never {
  // 这是穷尽检查的固定实现，不是本题核心答案。
  throw new Error("未处理的任务状态：" + JSON.stringify(value));
}
function describeTask(task: StudyTask): string {
  switch (task.status) {
    case "waiting":
      // TODO：使用当前 task.title 组织“待开始：标题”的字符串。
      // 下面的 "" 只为暂时满足 string 返回类型，完成时要替换。
      return "";
    case "studying":
      // TODO：此分支的 task 已收窄为 studying；用 task.title 和 task.minutes 组织学习时长文字。
      // 下面的 "" 是临时占位，不能作为最终返回值。
      return "";
    case "completed":
      // TODO：此分支可读取 task.score，但它仍可能是 undefined；缺席时显示“待评分”，存在时显示具体分数。
      // 把结果和 task.title 组成字符串，并替换下面的 ""。
      return "";
    case "failed":
      // TODO：此分支的 task 已收窄为 failed；用 task.title 和 task.reason 组织失败文字。
      // 下面的 "" 是临时占位，完成时要替换。
      return "";
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
  // TODO：把当前 task 传给 describeTask，再输出该次调用返回的字符串；不要把五行结果写死。
}
