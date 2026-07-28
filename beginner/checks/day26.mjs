export default {
  "title": "Day 26 · 结课项目（三）独立综合题",
  "exampleExpected": [
    "State: loading",
    "State: success",
    "Tasks: 2",
    "Done: 1",
    "Minutes: 75"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "异步任务仪表板",
      "expected": [
        "State: loading",
        "State: success",
        "Tasks: 2",
        "Done: 1",
        "Minutes: 75",
        "Tests passed: 4/4"
      ],
      "success": "你已从零完成异步仓库、运行时验证、加载状态、渲染和回归测试。",
      "hints": [
        "先完成验证器和 loadDashboard，再写 render 与内存仓库。",
        "parseTasks([]) 应返回空数组，而不是 null。",
        "四条测试必须分别检查正常、空数组、坏数据和 offline。"
      ],
      "typeHints": [
        "仓库结果保持 unknown；不要用 as StudyTask[]。",
        "catch 值先 instanceof Error，再读取 message。"
      ],
      "runtimeHints": [
        "若 Tests passed 小于 4，逐条检查测试条件，而不是直接修改计数。",
        "若打印 Promise，检查调用 loadDashboard 和 runRegressionTests 的位置是否 await。"
      ]
    },
    {
      "id": "practice02",
      "title": "异步任务面板",
      "expected": [
        "State: loading",
        "State: success",
        "Tasks: 2",
        "Done: 1",
        "Minutes: 75",
        "State: failure",
        "Message: Invalid task data"
      ],
      "success": "你已用同一个渲染器处理 loading、success 与坏数据 failure。",
      "hints": [
        "入口复用已有 loadDashboard 和 MemoryTaskRepository。",
        "render 的 success、failure 分支读取不同成员。",
        "坏数据仓库的 minutes 使用字符串，最终消息来自加载器。"
      ]
    },
    {
      "id": "practice03",
      "title": "异步天气面板",
      "expected": [
        "State: loading",
        "State: success",
        "City: Shanghai",
        "Temperature: 31",
        "State: failure",
        "Message: Weather data is invalid"
      ],
      "success": "你已独立完成 异步天气面板。",
      "hints": [
        "从异步仓库读取 unknown，验证天气数据并渲染 loading、success、failure 三种状态。",
        "按流程图逐步建立输入、处理、边界和输出。",
        "不要读取或修改其他 practice 文件夹。"
      ]
    }
  ]
};
