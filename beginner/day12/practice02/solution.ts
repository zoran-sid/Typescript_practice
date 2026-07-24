// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type Formatter = (value: number) => string;
const formatMinutes: Formatter = (value) => {
  // TODO：把数字转换为带“分钟”单位的字符串。
  return "";
};
function printReport(
  values: readonly number[],
  formatter: Formatter,
  title = "学习记录",
): void {
  // TODO：先输出 title，再遍历 values。
  values.forEach((value, index) => {
  });
}
function joinTopics(separator: string, ...topics: string[]): string {
  // TODO：rest 参数 topics 已经是数组，请用 separator 连接它。
  return "";
}
// TODO：完成后调用 printReport，并输出 joinTopics 的返回值。
