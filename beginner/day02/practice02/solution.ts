// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const weightText = "2.5";
const distanceText = "30";

const weight = 0; // TODO：把 weightText 显式转换为数字，保存到 weight。
const distance = 0; // TODO：把 distanceText 显式转换为数字，保存到 distance。

const baseFee = 8;
const deliveryFee = 0; // TODO：计算 baseFee + weight * 2 + distance / 10。

let route = "Standard";
// TODO：当 distance 达到或超过 30 时，把 route 更新为 "Long distance"。

console.log(`Weight: ${weight} kg`);
console.log(`Distance: ${distance} km`);
console.log(`Fee: ${deliveryFee}`);
console.log(`Route: ${route}`);
