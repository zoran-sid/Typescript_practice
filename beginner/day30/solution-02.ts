interface LessonInfo {
  title: string;
}

interface LessonInfo {
  minutes: number;
}

const lesson: LessonInfo = { title: "Declaration merging", minutes: 35 };
console.log(`${lesson.title}: ${lesson.minutes} minutes`);
