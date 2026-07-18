function assertEqual<T>(actual: T, expected: T, label: string): void {
  if (!Object.is(actual, expected)) {
    throw new Error(`${label}：期望 ${String(expected)}，实际 ${String(actual)}`);
  }

  console.log(`通过: ${label}`);
}

function assertThrows(action: () => void, label: string): void {
  try {
    action();
    throw new Error(`${label}：原本应该抛出错误`);
  } catch (error: unknown) {
    if (error instanceof RangeError) {
      console.log(`通过: ${label}`);
      return;
    }

    throw error;
  }
}

function cartTotal(price: number, quantity: number): number {
  if (quantity < 0) {
    throw new RangeError("数量不能为负数");
  }

  return price * quantity;
}

// Arrange
const price = 20;
const quantity = 3;

// Act
const total = cartTotal(price, quantity);

// Assert：正常、边界、错误三条路径
assertEqual(total, 60, "正常总价");
assertEqual(cartTotal(20, 0), 0, "空购物车");
assertThrows(() => cartTotal(20, -1), "负数数量会报错");

async function greeting(name: string): Promise<string> {
  await Promise.resolve();
  return `你好，${name}`;
}

assertEqual(await greeting("小夏"), "你好，小夏", "异步问候");
