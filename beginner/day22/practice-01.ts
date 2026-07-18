function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}

function assertEqual(actual: number, expected: number, label: string): void {
  if (actual !== expected) {
    throw new Error(`${label} 失败：期望 ${expected}，实际 ${actual}`);
  }

  console.log(`通过: ${label}`);
}

let testCount = 0;

assertEqual(clamp(5, 0, 10), 5, "区间内数字");
testCount += 1;

console.log(`共 ${testCount} 个测试`);
