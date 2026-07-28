// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
interface Course { title: string; score: number; }
function isCourse(value: unknown): value is Course {
  // TODO：确认当前 value 是非 null 对象，并真实检查 value.title 是 string、value.score 是 number。
  // 全部通过时返回 true，表示该输入可作为 Course；任一项失败返回 false。下面固定 false 只是全部拒绝的临时占位。
  return false;
}
const rawCourses = [
  '{"title":"TypeScript","score":90}',
  '{"title":"TypeScript","score":"九十"}',
];
for (const raw of rawCourses) {
  // TODO：把当前 raw 的解析结果保存在 unknown 变量中；isCourse 返回 true 时才读取 title、score 并输出课程，返回 false 时输出“课程数据无效”。
}
