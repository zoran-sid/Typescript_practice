async function loadResource(name: string): Promise<string> {
  await Promise.resolve();

  if (name === "坏链接") {
    throw new Error("网络不可用");
  }

  return "课程数据";
}

async function loadOrFallback(name: string): Promise<string> {
  try {
    return await loadResource(name);
  } catch {
    return "备用数据";
  }
}

for (const name of ["正常链接", "坏链接"]) {
  const value = await loadOrFallback(name);
  console.log(`成功: ${value}`);
}
