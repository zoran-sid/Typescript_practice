interface Lesson {
  title: string;
  completed: boolean;
}

interface Profile {
  name: string;
  contact: { email: string };
  lessons: Lesson[];
}

type ParseResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isLesson(value: unknown): value is Lesson {
  return (
    isRecord(value) &&
    typeof value.title === "string" &&
    typeof value.completed === "boolean"
  );
}

function isProfile(value: unknown): value is Profile {
  if (!isRecord(value) || typeof value.name !== "string") {
    return false;
  }
  if (!isRecord(value.contact) || typeof value.contact.email !== "string") {
    return false;
  }
  // every 回调逐项调用 isLesson；有一项失败，整份 Profile 就不可信。
  return Array.isArray(value.lessons) && value.lessons.every(isLesson);
}

function parseProfile(raw: string): ParseResult<Profile> {
  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return { ok: false, error: "JSON 格式错误" };
  }
  return isProfile(value)
    ? { ok: true, value }
    : { ok: false, error: "资料字段无效" };
}

const rawProfiles = [
  '{"name":"Ada","contact":{"email":"ada@example.com"},"lessons":[{"title":"变量","completed":true},{"title":"联合","completed":false}]}',
  '{"name":"Lin","contact":{"email":123},"lessons":[]}',
  '{"name":',
];

for (const raw of rawProfiles) {
  // 调用关系：raw -> parseProfile -> result -> 已验证资料或错误文字。
  const result = parseProfile(raw);
  if (result.ok) {
    const profile = result.value;
    const lessonTitles = profile.lessons.map((lesson) => lesson.title);
    const completedCount = profile.lessons.filter(
      (lesson) => lesson.completed,
    ).length;
    console.log(
      `资料：${profile.name} / ${profile.contact.email} / 课程：${lessonTitles.join("、")} / 已完成：${completedCount}`,
    );
  } else {
    console.log(`失败：${result.error}`);
  }
}
