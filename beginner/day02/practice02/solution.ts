const weightText = "2.5";
const distanceText = "30";

// 调用关系：两项表单文字分别经过 Number，转换结果再进入费用公式。
const weight = Number(weightText);
const distance = Number(distanceText);
const baseFee = 8;
const deliveryFee = baseFee + weight * 2 + distance / 10;

let route = "Standard";
// 30 千米也属于长距离，所以边界判断使用 >=。
if (distance >= 30) {
  route = "Long distance";
}

// 调用关系：转换结果、运费和路线 -> console.log -> 四行报价。
console.log(`Weight: ${weight} kg`);
console.log(`Distance: ${distance} km`);
console.log(`Fee: ${deliveryFee}`);
console.log(`Route: ${route}`);
