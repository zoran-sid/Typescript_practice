export default {
  "title": "判别联合、switch 与完整分支",
  "exampleExpected": [
    "等待开始",
    "正在加载",
    "已加载 2 项：变量、联合",
    "加载失败：网络不可用"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "判别联合、switch 与完整分支",
      "expected": [
        "待开始：联合类型",
        "学习中：函数（45 分钟）",
        "已完成：对象（92 分）",
        "已完成：复习（待评分）",
        "失败：提交（网络中断）"
      ],
      "success": "四种任务状态和可选分数都已安全处理，穷尽检查也已建立。",
      "hints": [
        "先写带共同 status 字段的 StudyTask 判别联合。",
        "在 describeTask 中对 task.status 使用 switch。",
        "completed 分支的 score 仍可能缺失，可用 ??；不要使用非空断言。",
        "default 应把 task 传给参数类型为 never 的 assertNever。"
      ],
      "typeHints": [
        "如果 default 中的 task 不能传给 never，请检查是否遗漏了某个 case。"
      ]
    },
    {
      "id": "practice02",
      "title": "通知投递决策",
      "expected": [
        "排队：msg-1 / email",
        "已发送：msg-2 / sms / 10:30",
        "稍后重试：msg-3 / push / 30 秒",
        "永久拒绝：msg-4 / email / 地址无效",
        "需要重试：1"
      ],
      "success": "四种投递事件都被收窄处理，展示结果与重试决策也保持一致。",
      "hints": [
        "先单独声明 Channel；再给输入事件和返回对象各写一份命名类型。教程把它们叫作 DeliveryEvent 和 DeliveryDecision。",
        "event: DeliveryEvent 是函数输入类型，圆括号后的 : DeliveryDecision 是返回对象的类型。",
        "decideDelivery 的每个 case 都返回 text 和 shouldRetry。",
        "只有 retrying 分支的 shouldRetry 为 true，rejected 是永久失败。",
        "用 decision 接住函数返回的整个对象：decision.text 用于输出，decision.shouldRetry 用于计数。",
        "外层循环不要再次复制 status 分支。",
        "default 把 event 交给 assertNever，保留穷尽检查。"
      ],
      "sourceRequirements": [
        {
          "kind": "stringUnionTypeAlias",
          "name": "Channel",
          "values": ["email", "sms", "push"],
          "message": "请在文件顶层单独声明 Channel，并让它只包含 email、sms、push 三个字符串成员。"
        },
        {
          "kind": "propertyTypeReferenceCount",
          "propertyName": "channel",
          "typeName": "Channel",
          "minimum": 4,
          "message": "请让四种事件的 channel 字段都使用 Channel，不要重复内联三个渠道。"
        }
      ]
    }
  ]
};
