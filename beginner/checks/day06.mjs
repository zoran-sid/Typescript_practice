export default {
  title: "Day 06：对象与引用",
  exampleExpected: ["书名: TypeScript 入门", "页数: 320", "状态: 可借阅"],
  exercises: [
    {
      id: "01",
      title: "任务对象",
      expected: ["任务: 学习对象", "完成: false"],
      success: "对象属性值与任务状态一致。",
      hints: ["日志已经从 task 读取属性。", "检查 done 的初始布尔值。"],
    },
    {
      id: "02",
      title: "格式化商品对象",
      expected: ["键盘 | ¥199 | 有货"],
      success: "函数正确读取并格式化三个对象属性。",
      hints: ["名称和价格可以直接从 item 读取。", "用 item.inStock 选择“有货”或“缺货”。"],
    },
    {
      id: "03",
      title: "修复共享引用",
      expected: ["副本完成: true", "原任务完成: false"],
      success: "副本已成为独立对象，原任务保持不变。",
      hints: ["const copyTask = originalTask 只复制引用。", "创建一个新的对象并逐项读取原值。"],
    },
    {
      id: "04",
      title: "嵌套对象与平均分",
      expected: ["姓名: Mei", "城市: 成都", "平均分: 90"],
      success: "嵌套属性和数组统计均正确。",
      hints: ["平均值等于总和除以数量。", "数量可以从 student.scores.length 获得。"],
    },
  ],
};
