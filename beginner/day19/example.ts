type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parsePort(text: string): number {
  const port = Number(text);

  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new RangeError("端口必须是 1 到 65535 的整数");
  }

  return port;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}

function savePort(port: number): Result<number> {
  return port === 13
    ? { ok: false, error: "这个端口不可用" }
    : { ok: true, value: port };
}

for (const text of ["3000", "abc"]) {
  try {
    console.log(`端口: ${parsePort(text)}`);
  } catch (error: unknown) {
    console.log(`错误: ${errorMessage(error)}`);
  }
}

const saved = savePort(3000);
console.log(`保存结果: ${saved.ok ? "成功" : saved.error}`);
