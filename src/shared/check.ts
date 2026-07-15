export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`CHECK FAILED: ${message}`);
}

export function equal<T>(actual: T, expected: T, message: string): void {
  if (!Object.is(actual, expected)) {
    throw new Error(
      `CHECK FAILED: ${message}\nexpected: ${String(expected)}\nactual:   ${String(actual)}`,
    );
  }
}

export function deepEqual(
  actual: unknown,
  expected: unknown,
  message: string,
): void {
  const actualText = JSON.stringify(actual);
  const expectedText = JSON.stringify(expected);
  if (actualText !== expectedText) {
    throw new Error(
      `CHECK FAILED: ${message}\nexpected: ${expectedText}\nactual:   ${actualText}`,
    );
  }
}

export async function rejects(
  action: () => unknown | Promise<unknown>,
  pattern: RegExp,
  message: string,
): Promise<void> {
  try {
    await action();
  } catch (error: unknown) {
    const text = error instanceof Error ? error.message : String(error);
    assert(pattern.test(text), `${message}; unexpected error: ${text}`);
    return;
  }
  throw new Error(`CHECK FAILED: ${message}; the action did not reject`);
}

export function complete(day: string): void {
  console.log(`PASS ${day}: practice checks completed`);
}
