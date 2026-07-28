// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const orderTotal = 120;
const isMember = true;
const hasCoupon = false;
const canUseMemberDiscount = false; // TODO：false 只是 boolean 类型占位；同时检查 isMember、orderTotal >= 100、没有优惠券，并把结果保存到 canUseMemberDiscount。
let discount = 0;
// 分支顺序已经搭好；条件和赋值仍由你完成。
if (false) { // TODO：false 是分支条件占位；替换为“orderTotal 大于或等于 200”的最高优先级条件。
  // TODO：此分支表示满 200；把最高优惠 40 赋值给 discount。
} else if (canUseMemberDiscount) {
  // TODO：此分支表示会员优惠条件成立；把会员优惠 20 赋值给 discount。
} else if (false) { // TODO：false 是分支条件占位；替换为“hasCoupon 为 true，或者 orderTotal 大于或等于 80”的普通优惠条件。
  // TODO：此分支表示普通优惠条件成立；把普通优惠 10 赋值给 discount。
} else {
  // discount 已有默认值；想一想这里是否还需要重新赋值。
}
const amountToPay = 0; // TODO：0 只是 number 类型占位；用 orderTotal 减去最终 discount，并把结果保存到 amountToPay。
console.log(`会员优惠可用: ${canUseMemberDiscount}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${amountToPay}`);
