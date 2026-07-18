export default {
  title: "解构、spread、rest 与不可变更新",
  exampleExpected: [
    "原主题：light",
    "新主题：dark",
    "原技能：HTML",
    "新技能：HTML、TypeScript",
    "第一项：HTML",
    "其余：TypeScript",
  ],
  exercises: [
    {
      id: "01",
      title: "解构与数组 rest",
      expected: ["课程：TypeScript", "第一课：函数", "剩余：对象、联合"],
      success: "对象属性、数组首项和剩余项都已通过解构取得。",
      hints: [
        "对象使用 const { title } = course。",
        "数组使用 const [firstLesson, ...remainingLessons] = course.lessons。",
      ],
    },
    {
      id: "02",
      title: "修复共享数组引用",
      expected: ["原标签：HTML", "新标签：HTML、TypeScript"],
      success: "新文章获得新标签数组，原文章没有被修改。",
      hints: [
        "const updated = original 没有复制任何内容。",
        "创建新对象时展开 original。",
        "tags 也需要创建新数组，再追加 TypeScript。",
      ],
    },
    {
      id: "03",
      title: "修复浅复制",
      expected: ["原主题：light", "新主题：dark"],
      success: "嵌套 preferences 已独立复制。",
      hints: [
        "外层 spread 只复制一层。",
        '在新对象中设置 preferences: { ...original.preferences, theme: "dark" }。',
      ],
    },
    {
      id: "04",
      title: "迁移到列表更新",
      expected: ["原状态：false,false", "新状态：false,true", "已完成：1"],
      success: "目标任务被不可变更新，原数组与统计都正确。",
      hints: [
        "map 回调遇到 id === 2 时返回 { ...task, done: true }。",
        "其他任务直接返回 task。",
        "在 updatedTasks 上 filter，再读取 length。",
      ],
    },
  ],
};
