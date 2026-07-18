function withdraw(balance: number, amount: number): number {
  if (amount <= 0) {
    throw new RangeError("金额必须大于 0");
  }

  if (amount > balance) {
    throw new RangeError("余额不足");
  }

  return balance - amount;
}

for (const amount of [30, 0, 200]) {
  try {
    console.log(`余额: ${withdraw(100, amount)}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "未知错误";
    console.log(`错误: ${message}`);
  }
}
