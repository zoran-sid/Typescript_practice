const quantityText = "3";
const unitPrice = 12;

const quantity = Number(quantityText);
const total = quantity * unitPrice;
const hasFreeShipping = total >= 50;

console.log(`商品数量: ${quantity}`);
console.log(`总价: ${total}`);
console.log(`免运费: ${hasFreeShipping}`);

export {};
