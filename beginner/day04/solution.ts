const orderTotal = 120;
const isMember = true;
const hasCoupon = false;

const canUseMemberDiscount =
  isMember && orderTotal >= 100 && !hasCoupon;

let discount = 0;

if (orderTotal >= 200) {
  discount = 40;
} else if (canUseMemberDiscount) {
  discount = 20;
} else if (hasCoupon || orderTotal >= 80) {
  discount = 10;
} else {
  discount = 0;
}

const amountToPay = orderTotal - discount;

console.log(`会员优惠可用: ${canUseMemberDiscount}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${amountToPay}`);

export {};
