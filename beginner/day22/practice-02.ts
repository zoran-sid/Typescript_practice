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

let testCount = 0;

// Arrange + Act + Assert：目前只覆盖了正常路径。
assertEqual(normalizeUsername("  小林  "), "小林", "正常用户名");
testCount += 1;

console.log(`共 ${testCount} 个测试`);
