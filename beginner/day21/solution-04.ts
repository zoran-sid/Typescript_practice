async function loadResource(name: string): Promise<string> {
  await Promise.resolve();

  if (name === "坏链接") {
    throw new Error("网络不可用");
  }

  return "课程数据";
}

for (const name of ["正常链接", "坏链接"]) {
  try {
    const value = await loadResource(name);
    console.log(`成功: ${value}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "未知错误";
    console.log(`失败: ${message}`);
  }
}
