const quantityText = "3";
const unitPrice = 12;

// TODO：先把输入文字转换成数字，再计算总价。
const quantity = 0;
const total = quantity * unitPrice;
const hasFreeShipping = total >= 50;

console.log(`商品数量: ${quantity}`);
console.log(`总价: ${total}`);
console.log(`免运费: ${hasFreeShipping}`);

// quantityText 暂时未参与计算，正是需要修复的地方。
void quantityText;

export {};
