// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type LessonRequest = { title: string; shouldFail?: boolean };
async function fetchLesson(request: LessonRequest): Promise<string> {
  await Promise.resolve();
  // TODO：按 shouldFail 进入失败路径；成功时返回 title。
  return "";
}
async function loadLessons(titles: readonly string[]): Promise<string[]> {
  // TODO：用 map 创建 Promise 数组，再用 Promise.all 统一等待。
  return [];
}
function errorMessage(error: unknown): string {
  // TODO：先收窄 unknown，再读取标准错误消息。
  return "未知错误";
}
async function main(): Promise<void> {
  // TODO：等待正常批量加载并输出；再用 try/catch 处理失败请求。
  await Promise.resolve();
}
await main();
