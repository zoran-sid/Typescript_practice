function evaluateDelivery(
  estimatedMinutes: number,
  actualMinutes: number,
): string {
  const delayMinutes = actualMinutes - estimatedMinutes;
  const isOnTime = actualMinutes <= estimatedMinutes;

  if (isOnTime) {
    // 准时或提前时直接 return，后面的迟到文字不会执行。
    return "On time";
  }

  return `Late by ${delayMinutes} minutes`;
}

function createDeliveryLine(
  deliveryId: string,
  result: string,
): string {
  return `${deliveryId}: ${result}`;
}

// 调用关系：两组固定时间 -> evaluateDelivery -> firstResult/secondResult。
const firstResult = evaluateDelivery(30, 28);
const secondResult = evaluateDelivery(45, 55);

// 调用关系：配送编号和评估返回值 -> createDeliveryLine -> console.log。
console.log(createDeliveryLine("A01", firstResult));
console.log(createDeliveryLine("B02", secondResult));
