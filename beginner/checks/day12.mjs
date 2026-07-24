export default {
  "title": "函数类型、箭头函数与回调",
  "exampleExpected": [
    "学习记录",
    "第 1 项：30 分钟",
    "第 2 项：45 分钟",
    "主题：函数 / 回调 / void"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "函数类型、箭头函数与回调",
      "expected": [
        "你好，Ada同学!",
        "成绩：55（未通过）",
        "成绩：80（通过）",
        "成绩：100（通过）",
        "总分：235",
        "通过数量：2"
      ],
      "success": "函数类型、返回值、三种参数形式和 void 回调已组合成完整报告。",
      "hints": [
        "formatScore 写了花括号后，每条路径都必须明确 return。",
        "greetStudent 可用 title ?? '同学'，punctuation 直接使用默认参数。",
        "sumScores 的 ...scores 在函数内是 number[]，需要累加。",
        "reportScores 每次调用 reporter(formatter(score))，最后 return 及格数量。"
      ],
      "typeHints": [
        "Reporter 的返回类型是 void；reportScores 自己仍应返回 number。"
      ]
    },
    {
      "id": "practice02",
      "title": "学习记录格式器",
      "expected": [
        "学习记录",
        "第 1 项：30 分钟",
        "第 2 项：45 分钟",
        "主题：函数 / 回调 / void"
      ],
      "success": "你已闭卷重建 学习记录格式器 的完整数据流。",
      "hints": [
        "使用函数类型、箭头函数、默认/可选/rest 参数与回调。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
