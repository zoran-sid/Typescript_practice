function calculateSubtotal(
  quantity: number,
  unitPrice: number,
): number {
  return quantity * unitPrice;
}

function calculateDiscount(
  subtotal: number,
  isMember: boolean,
): number {
  if (isMember && subtotal >= 100) {
    return subtotal * 0.1;
  }

  return 0;
}

function calculateAmountToPay(
  subtotal: number,
  discount: number,
): number {
  return subtotal - discount;
}

const quantity = 3;
const unitPrice = 40;
const isMember = true;

const subtotal = calculateSubtotal(quantity, unitPrice);
const discount = calculateDiscount(subtotal, isMember);
const amountToPay = calculateAmountToPay(subtotal, discount);

console.log(`小计: ${subtotal}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${amountToPay}`);

export {};
