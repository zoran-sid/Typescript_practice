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
      "title": "消息格式化与多路投递",
      "expected": [
        "[课程] 课程已更新",
        "投递数量：2",
        "存档：[课程] 课程已更新"
      ],
      "success": "消息只格式化一次，并通过 rest 回调同时投递到终端和存档。",
      "hints": [
        "createFormatter 返回一个箭头函数，让它使用创建时的 prefix。",
        "dispatch 先保存 formatter(message) 的结果，再遍历 ...sinks。",
        "console.log 可直接作为 MessageSink；archiveSink 则把消息加入 archived。",
        "投递数量来自实际调用 sink 的次数，不是写死的 2。"
      ]
    }
  ]
};
