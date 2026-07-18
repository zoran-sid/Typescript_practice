async function fetchText(name: string, shouldFail = false): Promise<string> {
  await Promise.resolve();

  if (shouldFail) {
    throw new Error("网络不可用");
  }

  return name;
}

async function main(): Promise<void> {
  const [lesson, progress] = await Promise.all([
    fetchText("课程"),
    fetchText("进度"),
  ]);
  console.log(`并行结果: ${lesson}、${progress}`);

  try {
    await fetchText("通知", true);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "未知错误";
    console.log(`错误: ${message}`);
  }
}

await main();
