async function fetchText(
  name: string,
  shouldFail = false,
): Promise<string> {
  await Promise.resolve();
  if (shouldFail) {
    throw new Error("网络不可用");
  }
  return name;
}

async function fetchUserId(): Promise<number> {
  await Promise.resolve();
  return 42;
}

async function fetchPermission(userId: number): Promise<string> {
  await Promise.resolve();
  return `用户${userId}=editor`;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}

async function main(): Promise<void> {
  // 两次调用都发生在第一次 await 前，因此两个异步任务已经同时启动。
  const coursePromise = fetchText("课程");
  const progressPromise = fetchText("进度");
  // 调用关系：两个 Promise -> Promise.all -> [course, progress]。
  const [course, progress] = await Promise.all([
    coursePromise,
    progressPromise,
  ]);
  console.log(`并行结果: ${course}、${progress}`);

  // 调用关系：fetchUserId -> userId -> fetchPermission(userId) -> permission。
  const userId = await fetchUserId();
  const permission = await fetchPermission(userId);
  console.log(`依赖结果: ${permission}`);

  try {
    await fetchText("通知", true);
  } catch (error: unknown) {
    console.log(`错误: ${errorMessage(error)}`);
  }
}

await main();
