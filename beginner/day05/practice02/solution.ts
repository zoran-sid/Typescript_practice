// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function calculateArea(width: number, height: number): number {
  const area = 0; // TODO：0 只是 number 类型占位；用本次调用的 width 乘 height，并把结果保存到局部变量 area。
  return area;
}
function createLabel(name: string, area: number): string {
  // name 与 area 只在本次调用中有效；用 return 把组合结果交回外部。
  const label = ""; // TODO：空字符串只是 string 类型占位；用 name 和 area 生成“名称面积: 数值”的标签，并保存到局部变量 label。
  return label;
}
const deskArea = calculateArea(12, 10);
const label = createLabel("书桌", deskArea);
console.log(label);
