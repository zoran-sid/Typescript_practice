export default {
  title: "结课项目（二）：业务逻辑、不可变更新与模块",
  exampleExpected: [
    "Original first status: todo",
    "Updated first status: done",
    "Done: 2",
    "Todo: 0",
    "Total minutes: 105",
  ],
  exercises: [
    {
      id: "01",
      title: "不可变地完成一个任务",
      expected: [
        "Original: todo",
        "Updated: done",
        "Same array: false",
        "Same untouched task: true",
      ],
      success: "旧数组保持不变，命中项被替换，未变化项被安全复用。",
      hints: [
        "用 tasks.map(...) 返回新数组。",
        "比较 task.id；命中时返回 { ...task, status: 'done' }。",
        "未命中时直接返回 task。",
      ],
    },
    {
      id: "02",
      title: "筛选并安全排序",
      expected: ["Order: Types, Modules", "Original first: Variables"],
      success: "筛选和排序都没有改动调用者的原数组。",
      hints: [
        "先 filter 出 status === 'todo'。",
        "sort 比较函数可以返回 left.minutes - right.minutes。",
        "filter 已经创建新数组，所以后面的 sort 不会碰到原数组。",
      ],
    },
    {
      id: "03",
      title: "用 Record 生成完整报告",
      expected: [
        "Counts: todo=1, doing=1, done=2",
        "Minutes: 100",
      ],
      success: "每种状态都有统计位置，总分钟数也正确累加。",
      hints: [
        "循环前建立 counts 和 minutes。",
        "循环中使用 counts[task.status] += 1。",
        "不要在循环中重新创建 counts。",
      ],
    },
    {
      id: "04",
      title: "受约束的通用更新器",
      expected: [
        "First unchanged: true",
        "Second pinned: true",
        "Original pinned: false",
      ],
      success: "泛型更新器保留了实体类型，也保护了原始对象。",
      hints: [
        "实现与练习 01 的 map 很相似。",
        "命中时返回 update(item)，不要忘记真正调用回调。",
        "泛型约束保证 item.id 可以安全读取。",
      ],
    },
  ],
};
