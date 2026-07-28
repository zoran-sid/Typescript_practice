// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const unitPriceText = "12";
const itemCount = 2;
const unitPrice = 0; // TODO：0 只是 number 类型占位；用 Number(...) 转换 unitPriceText，并把数字结果保存到 unitPrice。
const totalPrice = 0; // TODO：0 只是 number 类型占位；用 unitPrice 乘 itemCount，并把本单总价保存到 totalPrice。
let status = "Small order";
const isLargeOrder = false; // TODO：false 只是 boolean 类型占位；判断 totalPrice 是否大于或等于 20，并把结果保存到 isLargeOrder。
if (isLargeOrder) {
  status = "Large order";
}
console.log(`Total price: ${totalPrice}`);
console.log(`Status: ${status}`);
