export default {
  title: "结课项目（三）：异步加载、状态与测试",
  exampleExpected: [
    "State: loading",
    "State: success",
    "Tasks: 2",
    "Done: 1",
    "Minutes: 75",
  ],
  exercises: [
    {
      id: "01",
      title: "等待 Promise 的最终值",
      expected: ["Title: Async TypeScript"],
      success: "你已经在正确位置把 Promise<string> 等待成 string。",
      hints: [
        "showTitle 已经是 async，所以可以在函数体内使用 await。",
        "把占位字符串替换成 await fetchTitle()。",
        "console.log 仍应放在得到最终值之后。",
      ],
    },
    {
      id: "02",
      title: "并发加载互不依赖的数据",
      expected: ["User: Ada", "Tasks: 3"],
      success: "两项工作由 Promise.all 一起等待，并按输入顺序解构结果。",
      hints: [
        "写 await Promise.all([loadUser(), loadTaskCount()])。",
        "结果可解构为 [user, taskCount]。",
        "最后返回属性同名的对象。",
      ],
    },
    {
      id: "03",
      title: "把异步异常转换为失败状态",
      expected: ["State: failure", "Message: Network unavailable"],
      success: "异步异常没有被吞掉，而是变成调用者能处理的明确状态。",
      hints: [
        "try 中 await failingRepository()。",
        "catch 参数按 unknown 收窄。",
        "error instanceof Error 后才读取 message。",
      ],
    },
    {
      id: "04",
      title: "通过正常、边界、坏数据和失败测试",
      expected: ["Tests passed: 4/4"],
      success: "最终项目的四条关键运行时路径都有回归保护。",
      hints: [
        "先写 isTask，再组合 Array.isArray 与 every。",
        "空数组 every(...) 为 true，这是这里需要的合法边界。",
        "becomesFailure 必须真正 await rejects() 并在 catch 中检查错误。",
      ],
    },
  ],
};
