// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function assertEqual<T>(actual: T, expected: T, label: string): void {
  // TODO 1：用 Object.is 比较本次 actual 与 expected；相等时输出“通过: label”，
  // 不相等时抛出包含 label、expected 和 actual 的错误，不能只打印失败后继续运行。
}
function assertThrows(action: () => void, label: string): void {
  // TODO 2：执行 action；只把 cartTotal 因负数数量抛出的 RangeError 判为通过。
  // 其他错误继续抛出；若 action 没抛错，要在 try/catch 外报告失败，避免捕获测试自己的错误。
}
function cartTotal(price: number, quantity: number): number {
  // TODO 3：price 和 quantity 是本次结算输入；quantity < 0 时抛 RangeError，
  // 否则返回 price 与 quantity 的乘积。下面的 0 只是临时总价，完成时要替换。
  return 0;
}
const price = 20;
const quantity = 3;
const total = cartTotal(price, quantity);
assertEqual(total, 60, "正常总价");
assertEqual(cartTotal(20, 0), 0, "空购物车");
assertThrows(() => cartTotal(20, -1), "负数数量会报错");
async function greeting(name: string): Promise<string> {
  await Promise.resolve();
  // TODO 4：等待结束后，把当前 name 放进题目要求的“你好，名字”字符串并返回。
  // 下面的空字符串只是为了暂时满足 Promise<string>，不是异步问候结果。
  return "";
}
assertEqual(await greeting("小夏"), "你好，小夏", "异步问候");
