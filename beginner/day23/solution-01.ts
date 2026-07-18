function findCourse(
  courses: string[],
  keyword: string,
): string | undefined {
  return courses.find((course) => course.includes(keyword));
}

function showCourse(course: string | undefined): string {
  return course === undefined ? "没有找到" : `找到: ${course}`;
}

console.log(showCourse(findCourse(["TypeScript", "Git"], "Type")));
console.log(showCourse(findCourse(["TypeScript", "Git"], "Python")));
