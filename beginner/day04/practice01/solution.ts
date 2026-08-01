const orderTotal = 120;
const isMember = true;
const hasCoupon = false;
const canUseMemberDiscount =
  isMember && orderTotal >= 100 && !hasCoupon;

let discount = 0;
// 分支按优惠优先级排列；命中一个分支后，不再执行后面的 else if。
if (orderTotal >= 200) {
  discount = 40;
} else if (canUseMemberDiscount) {
  discount = 20;
} else if (hasCoupon || orderTotal >= 80) {
  discount = 10;
}

const amountToPay = orderTotal - discount;

// 调用关系：订单固定数据 -> 条件判断 -> discount -> amountToPay -> 三行输出。
console.log(`会员优惠可用: ${canUseMemberDiscount}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${amountToPay}`);
