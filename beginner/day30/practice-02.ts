interface LessonInfo {
  title: string;
}

interface LessonInfo {
  minutes: number;
}

// TODO：两个声明已经合并；补齐缺少的字段。
const lesson: LessonInfo = { title: "Declaration merging" };
console.log(`${lesson.title}: ${lesson.minutes} minutes`);
