const values = [3, 6, 9, 12];

// TODO：只保留偶数。能被 2 整除时，余数是 0。
const evenValues = values.filter((value) => value % 2 !== 0);

console.log(`偶数: ${evenValues.join(", ")}`);

export {};
