export default {
  title: "Day 21 · Promise、async/await 与异步错误",
  exampleExpected: ["并行结果: 课程、进度", "错误: 网络不可用"],
  exercises: [
    {
      id: "01",
      title: "别把 Promise 当成最终值",
      expected: ["用户: 小夏"],
      success: "现在拿到的是字符串，而不是未来结果的 Promise。",
      hints: [
        "观察 fetchUserName 的返回类型：Promise<string>。",
        "在调用前加 await；不要用 String 把 Promise 掩盖成文字。",
      ],
    },
    {
      id: "02",
      title: "用 Promise.all 并行等待",
      expected: [
        "开始课程 → 开始进度 → 完成课程 → 完成进度",
        "结果: 课程+进度",
      ],
      success: "两个独立任务先一起启动，再一起等待。",
      hints: [
        "不要先 await 第一个，再调用第二个。",
        "把两个 loadPart 调用放进 Promise.all 数组。",
        "用解构取得 lesson 和 progress。",
      ],
    },
    {
      id: "03",
      title: "修复 async forEach 陷阱",
      expected: ["完成数量: 3"],
      success: "打印数量前，三个异步任务都已经完成。",
      hints: [
        "forEach 不会等待 async 回调。",
        "用 map 生成 Promise 数组。",
        "await Promise.all 后得到完整结果数组。",
      ],
      runtimeHints: ["若仍然得到 0，检查 console.log 是否发生在 await 之后。"],
    },
    {
      id: "04",
      title: "让异步失败保持为失败",
      expected: ["成功: 课程数据", "失败: 网络不可用"],
      success: "成功和失败没有混在一起，错误消息也安全地取出。",
      hints: [
        "移除把错误变成备用数据的 loadOrFallback。",
        "在循环里用 try/catch 包住 await loadResource。",
        "catch 的值是 unknown；先 instanceof Error。",
      ],
      runtimeHints: ["不要留下无人处理的 rejected Promise。"],
    },
  ],
};
