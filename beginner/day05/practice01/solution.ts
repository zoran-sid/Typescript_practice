function calculateSubtotal(
  quantity: number,
  unitPrice: number,
): number {
  const subtotal = quantity * unitPrice;
  // return 把本次函数计算出的 subtotal 交回调用处。
  return subtotal;
}

function calculateDiscount(
  subtotal: number,
  isMember: boolean,
): number {
  const canDiscount = isMember && subtotal >= 100;

  if (canDiscount) {
    // 命中会员条件时，立刻交回小计的 10%，函数在这里结束。
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

// 调用关系：固定数据 -> calculateSubtotal -> subtotal。
const subtotal = calculateSubtotal(quantity, unitPrice);
// 调用关系：subtotal 和 isMember -> calculateDiscount -> discount。
const discount = calculateDiscount(subtotal, isMember);
// 调用关系：前两个返回值 -> calculateAmountToPay -> amountToPay。
const amountToPay = calculateAmountToPay(subtotal, discount);

// 调用关系：三个结果变量 -> console.log -> 订单金额报告。
console.log(`小计: ${subtotal}`);
console.log(`优惠: ${discount}`);
console.log(`应付: ${amountToPay}`);
