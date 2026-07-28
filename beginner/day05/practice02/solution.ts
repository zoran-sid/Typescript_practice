// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function evaluateDelivery(estimatedMinutes: number, actualMinutes: number): string {
  const delayMinutes = 0; // TODO：计算实际时间比预计时间多出的分钟数。
  const isOnTime = false; // TODO：判断实际时间是否没有超过预计时间。

  if (isOnTime) {
    // TODO：准时或提前时，直接把 "On time" 交回调用处。
    return "";
  }

  // TODO：超时时，使用 delayMinutes 生成 "Late by ... minutes"，交回调用处。
  return "";
}

function createDeliveryLine(deliveryId: string, result: string): string {
  // TODO：把配送编号和评估结果组合成 "编号: 结果"，并交回调用处。
  return "";
}

const firstResult = evaluateDelivery(30, 28);
const secondResult = evaluateDelivery(45, 55);

console.log(createDeliveryLine("A01", firstResult));
console.log(createDeliveryLine("B02", secondResult));
