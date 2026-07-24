// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
interface Course { title: string; score: number; }
function isCourse(value: unknown): value is Course {
  // TODO：排除 null，并真实检查 title 与 score 的存在和类型。
  return false;
}
const rawCourses = [
  '{"title":"TypeScript","score":90}',
  '{"title":"TypeScript","score":"九十"}',
];
for (const raw of rawCourses) {
  // TODO：解析为 unknown；isCourse 返回 true 后才能读取 title 与 score。
}
