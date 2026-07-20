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

function savePort(port: number): Result<number> {
  return port === 13
    ? { ok: false, error: "端口 13 不可用" }
    : { ok: true, value: port };
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}

const inputs = ["3000", "13", "abc"];

for (const input of inputs) {
  try {
    const port = parsePort(input);
    const result = savePort(port);

    if (result.ok) {
      console.log(`已保存端口：${result.value}`);
    } else {
      console.log(`保存失败：${result.error}`);
    }
  } catch (error: unknown) {
    console.log(`解析失败：${errorMessage(error)}`);
  }
}
