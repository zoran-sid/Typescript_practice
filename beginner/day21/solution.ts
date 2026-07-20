type LessonRequest = {
  title: string;
  shouldFail?: boolean;
};

async function fetchLesson(request: LessonRequest): Promise<string> {
  await Promise.resolve();

  if (request.shouldFail) {
    throw new Error("网络不可用");
  }

  return request.title;
}

async function loadLessons(
  titles: readonly string[],
): Promise<string[]> {
  const requests = titles.map((title) => fetchLesson({ title }));
  return Promise.all(requests);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "未知错误";
}

async function main(): Promise<void> {
  const lessons = await loadLessons(["变量", "函数", "联合"]);
  console.log(`完成数量：${lessons.length}`);
  console.log(`课程：${lessons.join("、")}`);

  try {
    await fetchLesson({ title: "通知", shouldFail: true });
  } catch (error: unknown) {
    console.log(`失败：${errorMessage(error)}`);
  }
}

await main();
