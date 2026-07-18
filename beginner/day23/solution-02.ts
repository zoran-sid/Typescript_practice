function safeEcho(value: unknown): unknown {
  return value;
}
void safeEcho;

function double(value: unknown): number | undefined {
  if (typeof value === "number") {
    return value * 2;
  }

  return undefined;
}

console.log("调试顺序: 先读第一条错误");

for (const value of [4, "四"]) {
  const result = double(value);
  console.log(result === undefined ? "无法计算" : `结果: ${result}`);
}
