// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type LessonRequest = { title: string; shouldFail?: boolean };
async function fetchLesson(request: LessonRequest): Promise<string> {
  await Promise.resolve();
  // TODO：request.shouldFail 为 true 时抛出 Error("网络不可用")；否则返回当前 request.title。
  // 下面的 "" 只是 Promise 成功值的临时占位，完成时要替换。
  return "";
}
async function loadLessons(titles: readonly string[]): Promise<string[]> {
  // TODO：用 map 把每个 title 变成 fetchLesson 返回的 Promise，再把整组 Promise 交给 Promise.all 并返回等待后的 string[]。
  // 下面的 [] 是临时空数组占位；不能让正常标题全部丢失，也不要使用 forEach(async ...)。
  return [];
}
function errorMessage(error: unknown): string {
  // TODO：error 是 unknown；若它是 Error，返回 error.message，否则返回“未知错误”。
  // 当前固定字符串只代表非 Error 的回退分支。
  return "未知错误";
}
async function main(): Promise<void> {
  // TODO：等待 loadLessons 加载“变量、函数、联合”，用返回数组输出完成数量和课程列表。
  // TODO：随后在 try 中等待 shouldFail 为 true 的“通知”请求；catch 保持 unknown，经 errorMessage 转成文字后输出失败信息。
  await Promise.resolve();
}
await main();
