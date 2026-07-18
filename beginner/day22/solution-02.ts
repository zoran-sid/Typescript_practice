function normalizeUsername(input: string): string {
  const username = input.trim();

  if (username.length === 0) {
    throw new Error("用户名不能为空");
  }

  return username;
}

function assertEqual(actual: string, expected: string, label: string): void {
  if (actual !== expected) {
    throw new Error(`${label} 失败`);
  }

  console.log(`通过: ${label}`);
}

function assertThrows(action: () => void, label: string): void {
  try {
    action();
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "用户名不能为空") {
      console.log(`通过: ${label}`);
      return;
    }

    throw error;
  }

  throw new Error(`${label} 失败：没有抛出错误`);
}

let testCount = 0;

assertEqual(normalizeUsername("  小林  "), "小林", "正常用户名");
testCount += 1;
assertThrows(() => normalizeUsername("   "), "空用户名会报错");
testCount += 1;

console.log(`共 ${testCount} 个测试`);
