async function greeting(name: string): Promise<string> {
  await Promise.resolve();
  return `你好，${name}`;
}

const actual = greeting("小夏");

if (actual instanceof Promise) {
  console.log("测试失败: 忘记 await");
}
