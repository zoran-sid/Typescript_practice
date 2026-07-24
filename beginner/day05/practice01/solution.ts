// 这是教学脚手架，不是完整答案。请完成所有 TODO。
function calculateSubtotal(
  quantity: number,
  unitPrice: number,
): number {
  // quantity 与 unitPrice 是局部参数；不要改为读取外部同名变量。
  const subtotal = 0; // TODO：根据两个参数计算。
  return subtotal;
}
function calculateDiscount(
  subtotal: number,
  isMember: boolean,
): number {
  const canDiscount = false; // TODO：组合会员与金额边界。
  if (canDiscount) {
    return 0; // TODO：根据参数计算优惠金额。
  }
  // 无优惠路径需要返回一个 number；确认应该返回什么。
  return 0;
}
function calculateAmountToPay(
  subtotal: number,
  discount: number,
): number {
  const amount = 0; // TODO：根据两个参数计算应付金额。
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
