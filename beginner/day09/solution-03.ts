interface Course {
  readonly id: string;
  readonly info: {
    lessons: number;
  };
}

const course: Course = {
  id: "C-01",
  info: {
    lessons: 4,
  },
};

course.info.lessons += 1;

console.log(`课时: ${course.info.lessons}`);

export {};
