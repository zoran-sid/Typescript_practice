const prices = [5, 8, 12];

const doubled = prices.map((price) => {
  return price * 2;
});

console.log(`加倍: ${doubled.join(", ")}`);

export {};
