type LessonRequest = { title: string; shouldFail?: boolean };

async function fetchLesson(request: LessonRequest): Promise<string> {
  await Promise.resolve();
  if (request.shouldFail) {
    throw new Error("网络不可用");
  }
  return request.title;
}

async function loadLessons(titles: readonly string[]): Promise<string[]> {
  // map 回调为每个标题 return 一个 Promise，得到 Promise<string>[]。
  const requests = titles.map((title) => fetchLesson({ title }));
  // 调用关系：requests -> Promise.all -> 等待后的 string[]。
  return Promise.all(requests);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}

async function main(): Promise<void> {
  // 调用关系：固定标题 -> loadLessons -> lessons -> 数量和课程输出。
  const lessons = await loadLessons(["变量", "函数", "联合"]);
  console.log(`完成数量：${lessons.length}`);
  console.log(`课程：${lessons.join("、")}`);

  try {
    // await 让 rejected Promise 在当前 try/catch 内变成可处理的异常。
    await fetchLesson({ title: "通知", shouldFail: true });
  } catch (error: unknown) {
    console.log(`失败：${errorMessage(error)}`);
  }
}

// 调用关系：main() -> Promise<void> -> 顶层 await 等待所有输出完成。
await main();
