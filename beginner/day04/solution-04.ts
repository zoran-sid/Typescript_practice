const isMember = true;
const orderTotal = 120;
const hasCoupon = false;

let discount = 0;

if (orderTotal >= 200) {
  discount = 30;
} else if (isMember && orderTotal >= 100) {
  discount = 20;
} else if (hasCoupon) {
  discount = 10;
}

console.log(`优惠: ${discount}`);
console.log(`应付: ${orderTotal - discount}`);

export {};
