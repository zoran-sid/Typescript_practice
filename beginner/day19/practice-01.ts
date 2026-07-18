function withdraw(balance: number, amount: number): number {
  if (amount <= 0) {
    return balance;
  }

  if (amount > balance) {
    return 0;
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
