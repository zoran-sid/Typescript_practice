const prices = [15, 80, 120, 45];

// 调用关系：prices -> map 回调计算九折 -> discountedPrices。
const discountedPrices = prices.map((price) => {
  // return 的数字会成为新数组中与当前原价对应的一项。
  return price * 0.9;
});

// 调用关系：discountedPrices -> filter 回调判断 < 50 -> affordablePrices。
const affordablePrices = discountedPrices.filter((price) => {
  return price < 50;
});

// 调用关系：prices -> find 回调判断 >= 100 -> firstLargePrice。
const firstLargePrice = prices.find((price) => {
  return price >= 100;
});

// 调用关系：三个结果 -> join/模板字符串 -> console.log。
console.log(`打折后: ${discountedPrices.join(", ")}`);
console.log(`低于 50: ${affordablePrices.join(", ")}`);
console.log(`第一个至少 100: ${firstLargePrice}`);
