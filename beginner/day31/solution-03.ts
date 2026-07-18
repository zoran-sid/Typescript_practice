const currentId = 9_007_199_254_740_993n;

const nextId = currentId + 1n;
const jsonText = JSON.stringify({ id: nextId.toString() });

console.log(`下一个编号: ${nextId}`);
console.log(`JSON: ${jsonText}`);

export {};
