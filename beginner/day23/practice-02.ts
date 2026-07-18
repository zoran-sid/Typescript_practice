// 取消下一行注释的抑制，就会看到 noImplicitAny 报出的第一条错误。
// @ts-expect-error 演示：参数 value 没有类型
function unsafeEcho(value) {
  return value;
}
void unsafeEcho;

function double(value: unknown): number | undefined {
  if (typeof value === "number") {
    return value * 2;
  }

  return 0;
}

console.log("调试顺序: 同时猜多个错误");

for (const value of [4, "四"]) {
  const result = double(value);
  console.log(result === undefined ? "无法计算" : `结果: ${result}`);
}
