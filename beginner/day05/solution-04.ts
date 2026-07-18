function calculateSubtotal(quantity: number, unitPrice: number): number {
  return quantity * unitPrice;
}

function calculateDiscount(subtotal: number, isMember: boolean): number {
  if (isMember && subtotal >= 100) {
    return subtotal * 0.1;
  }

  return 0;
}

const subtotal = calculateSubtotal(3, 40);
const discount = calculateDiscount(subtotal, true);
const payable = subtotal - discount;

console.log(`小计: ${subtotal}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${payable}`);

export {};
