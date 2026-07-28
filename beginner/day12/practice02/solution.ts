// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Formatter = (value: number) => string;
const formatMinutes: Formatter = (value) => {
  // TODO：把当前 value 转成“数值 分钟”的字符串，作为 Formatter 的 string 返回值。
  // 下面的 "" 只是临时占位，完成时要替换。
  return "";
};
function printReport(
  values: readonly number[],
  formatter: Formatter,
  title = "学习记录",
): void {
  // TODO：先输出收到的 title；再逐项遍历 values。
  values.forEach((value, index) => {
    // TODO：把当前 value 交给 formatter，并用从 1 开始的 index 组成“第 … 项：格式化结果”后输出。
  });
}
function joinTopics(separator: string, ...topics: string[]): string {
  // TODO：topics 是 rest 参数收集到的字符串数组；用 separator 连接各主题并返回结果。
  // 下面的 "" 只是临时占位，完成时要替换。
  return "";
}
// TODO：用 [30, 45] 和 formatMinutes 调用 printReport；再把“函数、回调、void”交给 joinTopics，并输出带“主题：”的结果。
