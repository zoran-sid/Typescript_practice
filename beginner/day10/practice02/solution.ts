// 这是教学脚手架，不是完整答案。请完成所有 TODO。
type Id = string | number;
type Alignment = "left" | "center" | "right";
function formatId(id: Id): string {
  if (typeof id === "string") {
    // id 已收窄为 string，可以使用字符串专属方法。
    return ""; // TODO：返回格式化后的字符串编号。
  }
  return ""; // TODO：返回格式化后的数字编号。
}
function describeAlignment(alignment: Alignment): string {
  return ""; // TODO：把合法字面量放入说明文字。
}
console.log(formatId("ts-10"));
console.log(formatId(42));
console.log(describeAlignment("center"));
