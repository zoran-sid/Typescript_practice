const currentId = 9_007_199_254_740_993n;

// TODO：bigint 运算的另一个操作数也必须是 bigint。
const nextId = currentId + 0n;
const jsonText = JSON.stringify({ id: nextId.toString() });

console.log(`下一个编号: ${nextId}`);
console.log(`JSON: ${jsonText}`);

export {};
