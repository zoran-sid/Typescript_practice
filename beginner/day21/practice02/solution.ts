// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
async function fetchText(name: string, shouldFail = false): Promise<string> {
  await Promise.resolve();
  // TODO：shouldFail 为 true 时抛出 Error("网络不可用")；否则把当前 name 作为 Promise 的成功值返回。
  // 下面的 "" 只是成功值占位，完成时要替换。
  return "";
}
async function main(): Promise<void> {
  // TODO：同时创建 fetchText("课程") 与 fetchText("进度")，交给 Promise.all 等待；按原顺序取出两个成功值并输出“并行结果”。
  // TODO：在 try 中等待 fetchText("通知", true)；catch 参数保持 unknown，是 Error 时读取 message，否则用“未知错误”，再输出错误行。
  await Promise.resolve();
}
await main();
