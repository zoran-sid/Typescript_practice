interface Task {
  title: string;
  done: boolean;
}

type ParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parseTask(raw: string): ParseResult<Task> {
  try {
    const value: unknown = JSON.parse(raw);

    if (
      typeof value === "object" &&
      value !== null &&
      "title" in value &&
      typeof value.title === "string" &&
      "done" in value &&
      typeof value.done === "boolean"
    ) {
      return { ok: true, value: { title: value.title, done: value.done } };
    }

    return { ok: false, error: "数据不可用" };
  } catch {
    return { ok: false, error: "数据不可用" };
  }
}

for (const raw of [
  '{"title":"复习","done":false}',
  '{"title":99,"done":false}',
  "{坏 JSON}",
]) {
  const result = parseTask(raw);
  console.log(
    result.ok
      ? `任务: ${result.value.title} / 完成: ${result.value.done ? "是" : "否"}`
      : `失败: ${result.error}`,
  );
}
