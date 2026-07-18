const course = {
  title: "TypeScript",
  lessons: ["函数", "对象", "联合"],
};

const { title } = course;
const [firstLesson, ...remainingLessons] = course.lessons;

console.log("课程：" + title);
console.log("第一课：" + firstLesson);
console.log("剩余：" + remainingLessons.join("、"));
