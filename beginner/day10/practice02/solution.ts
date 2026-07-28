// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Id = string | number;
type Alignment = "left" | "center" | "right";
function formatId(id: Id): string {
  if (typeof id === "string") {
    // id 已收窄为 string，可以使用字符串专属方法。
    return ""; // TODO：空字符串只是 string 占位；把当前 string 类型的 id 转成大写并返回。
  }
  return ""; // TODO：空字符串只是 string 占位；把当前 number 类型的 id 放在 "#" 后并返回字符串。
}
function describeAlignment(alignment: Alignment): string {
  return ""; // TODO：空字符串只是 string 占位；把合法的 alignment 放在 "对齐方式: " 后并返回完整说明。
}
console.log(formatId("ts-10"));
console.log(formatId(42));
console.log(describeAlignment("center"));
