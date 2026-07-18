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

// TODO：验证 readonly 是浅层的：将嵌套 lessons 增加 1。
console.log(`课时: ${course.info.lessons}`);

export {};
