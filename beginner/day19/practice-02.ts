interface Lesson {
  title: string;
}

function readLesson(raw: string): Lesson {
  try {
    const value: unknown = JSON.parse(raw);

    if (
      typeof value !== "object" ||
      value === null ||
      !("title" in value) ||
      typeof value.title !== "string"
    ) {
      throw new Error("课程数据不完整");
    }

    return { title: value.title };
  } catch {
    throw new Error("读取失败");
  }
}

for (const raw of ['{"title":"TypeScript"}', "{坏掉的 JSON}"]) {
  try {
    console.log(`读取成功: ${readLesson(raw).title}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "未知错误";
    console.log(`读取失败: ${message}`);
  }
}
