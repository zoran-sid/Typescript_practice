export default {
  title: "Day 30 · 声明文件与旧代码独立综合题",
  exampleExpected: ["Legacy total: 60", "Legacy version: 1.0", "Merged: Declarations/40", "Modern status: published"],
  expected: ["Score: 60", "Declarations: 35 minutes", "Legacy: published", "Modern: draft"],
  success: "你已从单一入口正确消费声明模块，并读懂接口合并与旧枚举边界。",
  hints: ["从 ./score.js 导入 score，辅助文件已经完整，不要修改。", "两个同名 LessonInfo 会合并，创建对象时两个字段都需要。", "normalizeStatus 将旧 Draft 与现代 draft 统一到 ModernStatus.Draft。"],
  typeHints: ["声明应与真实 JS 匹配；不要用 any 或断言让错误调用通过。"],
};
