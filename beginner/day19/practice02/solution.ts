type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parsePrice(text: string): number {
  const price = Number(text);
  if (text.trim() === "" || !Number.isFinite(price) || price < 0) {
    throw new RangeError("价格必须是非负数字");
  }
  return price;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}

function toPriceResult(text: string): Result<number> {
  try {
    // 调用关系：text -> parsePrice -> 成功 Result。
    const price = parsePrice(text);
    return { ok: true, value: price };
  } catch (error: unknown) {
    // 异常在边界内转成失败 Result，调用处只需要检查 ok。
    return { ok: false, error: errorMessage(error) };
  }
}

const priceTexts = ["19.9", "free", "0"];
let validCount = 0;
for (const text of priceTexts) {
  // 调用关系：当前 text -> toPriceResult -> result -> 输出和计数。
  const result = toPriceResult(text);
  if (result.ok) {
    console.log(`价格：${result.value}`);
    validCount += 1;
  } else {
    console.log(`错误：${result.error}`);
  }
}

console.log(`有效数量：${validCount}`);
