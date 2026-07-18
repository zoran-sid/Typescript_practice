async function greeting(name: string): Promise<string> {
  await Promise.resolve();
  return `你好，${name}`;
}

const actual = await greeting("小夏");

if (actual === "你好，小夏") {
  console.log("测试通过: 异步问候");
} else {
  throw new Error(`测试失败：实际得到 ${actual}`);
}
