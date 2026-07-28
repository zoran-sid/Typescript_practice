const prices = [15, 80, 120, 45];

const discountedPrices = prices.map((price) => price * 0.9);
const affordablePrices = discountedPrices.filter((price) => price < 50);
const firstLargePrice = prices.find((price) => price >= 100);

console.log(`打折后: ${discountedPrices.join(", ")}`);
console.log(`低于 50: ${affordablePrices.join(", ")}`);
console.log(`第一个至少 100: ${firstLargePrice}`);

export {};