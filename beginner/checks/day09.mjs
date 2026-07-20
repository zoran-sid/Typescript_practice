export default {
  title: "Day 09：项目进度摘要",
  exampleExpected: [
    "T-01 | 学习 type 和 interface | 未完成",
    "备注: 无",
    "标签: TypeScript, 基础",
  ],
  expected: [
    "P-01 | TypeScript 练习",
    "成员: Lin, Mei",
    "进度: 2/5",
    "备注: 无",
  ],
  success: "你已经能从空文件用 type、interface、可选属性和只读设计建模。",
  hints: [
    "ProjectId 是 string 的类型别名，describeProject 的参数类型使用 Project。",
    'members 使用 join(", ")，note 缺失时使用 ?? "无"。',
    "四行可以放进字符串数组后用换行连接。",
  ],
  typeHints: [
    "members 应是 ReadonlyArray<string>，id 与 progress 属性应标记 readonly。",
    "不要使用 any、as 或 ! 绕过对象形状检查。",
  ],
};
