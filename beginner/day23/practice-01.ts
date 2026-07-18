function findCourse(
  courses: string[],
  keyword: string,
): string | undefined {
  return courses.find((course) => course.includes(keyword));
}

function showCourse(course: string | undefined): string {
  return `找到: ${course ?? "空课程"}`;
}

console.log(showCourse(findCourse(["TypeScript", "Git"], "Type")));
console.log(showCourse(findCourse(["TypeScript", "Git"], "Python")));
