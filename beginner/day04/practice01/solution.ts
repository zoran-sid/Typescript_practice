// 这是教学脚手架，不是完整答案。请完成所有 TODO。
const orderTotal = 120;
const isMember = true;
const hasCoupon = false;
const canUseMemberDiscount = false; // TODO：用 &&、>= 与 ! 组合三个条件。
let discount = 0;
// 分支顺序已经搭好；条件和赋值仍由你完成。
if (false) { // TODO：替换成最高优先级条件。
  // TODO：设置最高优惠。
} else if (canUseMemberDiscount) {
  // TODO：设置会员优惠。
} else if (false) { // TODO：替换成普通优惠条件。
  // TODO：设置普通优惠。
} else {
  // discount 已有默认值；想一想这里是否还需要重新赋值。
}
const amountToPay = 0; // TODO：使用 orderTotal 与 discount 计算。
console.log(`会员优惠可用: ${canUseMemberDiscount}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${amountToPay}`);
