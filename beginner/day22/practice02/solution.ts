// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function assertEqual<T>(actual: T, expected: T, label: string): void {
  // TODO 1：用 Object.is 比较本次 actual 与 expected；相等时输出“通过: label”，
  // 不相等时抛出包含 label、expected 和 actual 的错误，不能只打印失败后继续运行。
}
function assertRangeError(action: () => void, label: string): void {
  // TODO 2：执行 action；只把 shippingFee 因负金额抛出的 RangeError 判为通过。
  // 其他错误继续抛出；若 action 没抛错，要在 try/catch 外报告失败，避免捕获测试自己的错误。
}
function shippingFee(orderTotal: number, member: boolean): number {
  // TODO 3：orderTotal < 0 时抛 RangeError；大于等于 100 时返回 0；
  // 未满 100 时 member 为 true 返回 5，否则返回 10。
  // 下面的 0 只是临时运费，会让未满额案例错误通过边界分支。
  void member;
  return 0;
}
type ShippingCase = {
  label: string;
  orderTotal: number;
  member: boolean;
  expected: number;
};
// TODO 4：填入普通 60 元、会员 60 元、普通 100 元三项案例。
// 空数组只是“尚未准备测试数据”，不能保留。
const shippingCases: ShippingCase[] = [];
let passed = 0;
for (const testCase of shippingCases) {
  const actual = shippingFee(testCase.orderTotal, testCase.member);
  assertEqual(actual, testCase.expected, testCase.label);
  // TODO 5：只有上一行断言真正通过后，才把 passed 增加 1。
}
assertRangeError(() => shippingFee(-1, false), "负金额会报错");
// TODO 6：异常断言通过后增加一次，并按“共 N 个测试”输出 passed。
console.log(`当前记录 ${passed} 个通过测试（完成 TODO 后替换）`);
