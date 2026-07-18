function calculateSubtotal(quantity: number, unitPrice: number): number {
  // TODO：小计等于数量乘单价。
  return quantity + unitPrice;
}

function calculateDiscount(subtotal: number, isMember: boolean): number {
  // TODO：会员且小计至少 100 时，优惠小计的 10%。
  void subtotal;
  void isMember;
  return 0;
}

const subtotal = calculateSubtotal(3, 40);
const discount = calculateDiscount(subtotal, true);
const payable = subtotal - discount;

console.log(`小计: ${subtotal}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${payable}`);

export {};
