// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function calculateSubtotal(
  quantity: number,
  unitPrice: number,
): number {
  // quantity 与 unitPrice 是局部参数；不要改为读取外部同名变量。
  const subtotal = 0; // TODO：0 只是 number 类型占位；用本次调用的 quantity 乘 unitPrice，并把结果保存到局部变量 subtotal。
  return subtotal;
}
function calculateDiscount(
  subtotal: number,
  isMember: boolean,
): number {
  const canDiscount = false; // TODO：false 只是 boolean 类型占位；同时检查 isMember 为 true 且 subtotal 大于或等于 100。
  if (canDiscount) {
    return 0; // TODO：0 是“有优惠”分支的 number 占位；替换为根据参数 subtotal 计算 10% 优惠并返回结果。
  }
  // 无优惠时金额确实是 0；下面的 0 是本分支的实际结果，不是待替换占位。
  return 0;
}
function calculateAmountToPay(
  subtotal: number,
  discount: number,
): number {
  const amount = 0; // TODO：0 只是 number 类型占位；用本次调用的 subtotal 减去 discount，并把结果保存到局部变量 amount。
  return amount;
}
const quantity = 3;
const unitPrice = 40;
const isMember = true;
// 每个返回值先由外部变量接住，再作为下一步的实参。
const subtotal = calculateSubtotal(quantity, unitPrice);
const discount = calculateDiscount(subtotal, isMember);
const amountToPay = calculateAmountToPay(subtotal, discount);
console.log(`小计: ${subtotal}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${amountToPay}`);
