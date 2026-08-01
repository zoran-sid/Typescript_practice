type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parsePort(text: string): number {
  const port = Number(text);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new RangeError("端口必须是 1 到 65535 的整数");
  }
  return port;
}

function savePort(port: number): Result<number> {
  if (port === 13) {
    // “端口不可用”是可预期的业务失败，用 Result 交回，不抛异常。
    return { ok: false, error: "端口 13 不可用" };
  }
  return { ok: true, value: port };
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}

const inputs = ["3000", "13", "abc"];
for (const input of inputs) {
  try {
    // 调用关系：input -> parsePort -> port -> savePort -> result。
    const port = parsePort(input);
    const result = savePort(port);
    if (result.ok) {
      console.log(`已保存端口：${result.value}`);
    } else {
      console.log(`保存失败：${result.error}`);
    }
  } catch (error: unknown) {
    // 调用关系：解析异常 -> errorMessage(error) -> 解析失败输出。
    console.log(`解析失败：${errorMessage(error)}`);
  }
}
