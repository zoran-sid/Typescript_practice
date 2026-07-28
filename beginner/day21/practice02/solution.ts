// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
async function fetchText(name: string, shouldFail = false): Promise<string> {
  await Promise.resolve();
  // TODO：shouldFail 为 true 时抛出 Error("网络不可用")；否则把当前 name 作为 Promise 的成功值返回。
  // 下面的 "" 只是成功值占位，完成时要替换。
  return "";
}
async function fetchUserId(): Promise<number> {
  await Promise.resolve();
  // TODO：返回固定用户 id 42。下面的 0 只是尚未接入真实 id 时的占位。
  return 0;
}
async function fetchPermission(userId: number): Promise<string> {
  await Promise.resolve();
  // TODO：使用当前 userId 组成“用户id=editor”并返回；不能忽略参数后写死整行。
  // 下面的 "" 是成功值占位，完成时要替换。
  return "";
}
function errorMessage(error: unknown): string {
  // TODO：error 是 Error 时返回 message，否则返回“未知错误”。
  // 下面的固定文字只代表非 Error 的回退分支。
  return "未知错误";
}
async function main(): Promise<void> {
  // TODO：在第一次 await 前分别创建 fetchText("课程") 与 fetchText("进度")；
  // 再把两个 Promise 交给 Promise.all，按传入顺序取得结果并输出“并行结果”。
  // TODO：等待 fetchUserId，把得到的 id 交给 fetchPermission；等待权限文字后输出“依赖结果”。
  // TODO：最后在 try 中等待 fetchText("通知", true)；catch 保持 unknown，经 errorMessage 输出错误行。
  await Promise.resolve();
}
await main();
