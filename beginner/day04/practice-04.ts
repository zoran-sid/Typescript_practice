const isMember = true;
const orderTotal = 120;
const hasCoupon = false;

let discount = 0;

// TODO：满 200 减 30；否则会员满 100 减 20；否则有券减 10。
if (orderTotal >= 200) {
  discount = 30;
} else if (isMember && orderTotal > 150) {
  discount = 20;
} else if (hasCoupon) {
  discount = 10;
}

console.log(`优惠: ${discount}`);
console.log(`应付: ${orderTotal - discount}`);

export {};
