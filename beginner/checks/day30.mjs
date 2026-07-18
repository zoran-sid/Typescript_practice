export default {
  title: "选修：声明文件与旧式 TypeScript",
  exampleExpected: [
    "Legacy total: 60",
    "Legacy version: 1.0",
    "Merged: Declarations/40",
    "Modern status: published",
  ],
  exercises: [
    {
      id: "01",
      title: "修正 JavaScript 模块声明",
      expected: ["Score: 60"],
      success: "声明现在准确描述了已有 JavaScript 的参数和返回值。",
      typeHints: [
        "不要改 practice-01.ts 的正确调用方式。",
        "打开 practice-legacy-score.d.ts，把参数改为 readonly number[]、返回改为 number。",
      ],
    },
    {
      id: "02",
      title: "识别接口声明合并",
      expected: ["Declaration merging: 35 minutes"],
      success: "两个同名接口的成员已经作为一个完整结构使用。",
      typeHints: [
        "LessonInfo 同时需要 title 和 minutes。",
        "给对象补上 minutes: 35，而不是删除第二个声明。",
      ],
    },
    {
      id: "03",
      title: "归一化旧枚举与现代字面量",
      expected: ["Legacy: published", "Modern: draft"],
      success: "旧表示被限制在兼容边界，内部可以使用现代字面量状态。",
      hints: [
        "Draft 条件同时比较 LegacyStatus.Draft 和 ModernStatus.Draft。",
        "Draft 返回现代 draft，否则返回现代 published。",
      ],
    },
  ],
};
