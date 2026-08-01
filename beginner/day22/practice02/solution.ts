function assertEqual<T>(actual: T, expected: T, label: string): void {
  if (!Object.is(actual, expected)) {
    throw new Error(`${label}: expected ${String(expected)}, actual ${String(actual)}`);
  }
  console.log(`通过: ${label}`);
}

function assertRangeError(action: () => void, label: string): void {
  try {
    action();
  } catch (error: unknown) {
    if (error instanceof RangeError) {
      console.log(`通过: ${label}`);
      return;
    }
    throw error;
  }
  throw new Error(`${label}: expected RangeError`);
}

function shippingFee(orderTotal: number, member: boolean): number {
  if (orderTotal < 0) throw new RangeError("订单金额不能为负数");
  if (orderTotal >= 100) return 0;
  return member ? 5 : 10;
}

type ShippingCase = {
  label: string;
  orderTotal: number;
  member: boolean;
  expected: number;
};

const shippingCases: ShippingCase[] = [
  { label: "普通订单运费", orderTotal: 60, member: false, expected: 10 },
  { label: "会员订单运费", orderTotal: 60, member: true, expected: 5 },
  { label: "满额免运费", orderTotal: 100, member: false, expected: 0 },
];

let passed = 0;
// 调用关系：循环逐项取出固定案例 -> shippingFee -> actual -> assertEqual -> 计数。
for (const testCase of shippingCases) {
  const actual = shippingFee(testCase.orderTotal, testCase.member);
  assertEqual(actual, testCase.expected, testCase.label);
  passed += 1;
}

// 调用关系：箭头函数把负金额调用延迟交给 assertRangeError。
assertRangeError(() => shippingFee(-1, false), "负金额会报错");
passed += 1;
console.log(`共 ${passed} 个测试`);
