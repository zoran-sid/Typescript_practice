const values = [3, 6, 9, 12];

const evenValues = values.filter((value) => value % 2 === 0);

console.log(`偶数: ${evenValues.join(", ")}`);

export {};
