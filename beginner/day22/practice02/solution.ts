// 解题结构提示：按 AAA 顺序补全业务函数与断言函数，不含完整答案。
function assertEqual<T>(actual: T, expected: T, label: string): void {
  // TODO 1：比较 actual 与 expected，并在失败时报告清楚的信息。
}
function assertThrows(action: () => void, label: string): void {
  // TODO 2：执行 action，只接受预期的 RangeError；避免捕获测试自己的失败。
}
function cartTotal(price: number, quantity: number): number {
  // TODO 3：负数数量应走错误路径，其余输入返回总价。
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
  // TODO 4：返回包含 name 的问候字符串。
  return "";
}
assertEqual(await greeting("小夏"), "你好，小夏", "异步问候");
