interface Course {
  title: string;
  score: number;
}

function isCourse(value: unknown): value is Course {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    typeof value.title === "string" &&
    "score" in value &&
    typeof value.score === "number"
  );
}

for (const raw of [
  '{"title":"TypeScript","score":90}',
  '{"title":"TypeScript","score":"九十"}',
]) {
  const value: unknown = JSON.parse(raw);

  if (isCourse(value)) {
    console.log(`课程: ${value.title} / ${value.score} 分`);
  } else {
    console.log("课程数据无效");
  }
}
