export default {
  "title": "错误不是字符串：throw、unknown 与 Result",
  "exampleExpected": [
    "端口: 3000",
    "错误: 端口必须是 1 到 65535 的整数",
    "保存结果: 成功"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "错误不是字符串：throw、unknown 与 Result",
      "expected": [
        "已保存端口：3000",
        "保存失败：端口 13 不可用",
        "解析失败：端口必须是 1 到 65535 的整数"
      ],
      "success": "非法格式走异常通道，可预期保存失败走 Result，捕获值也已安全收窄。",
      "hints": [
        "parsePort 用 Number.isInteger 和范围条件判断，非法时抛 RangeError。",
        "savePort(13) 返回 ok: false，其他端口返回 ok: true。",
        "先判断 result.ok，再分别读取 value 或 error。",
        "catch 中把 error 保持为 unknown，并交给 errorMessage。"
      ],
      "runtimeHints": [
        "若程序在 abc 处直接停止，请检查循环内是否用 try/catch 包住解析和保存。"
      ]
    },
    {
      "id": "practice02",
      "title": "端口配置校验",
      "expected": [
        "端口: 3000",
        "错误: 端口必须是 1 到 65535 的整数",
        "保存结果: 成功"
      ],
      "success": "你已闭卷重建 端口配置校验 的完整数据流。",
      "hints": [
        "失败用 throw 或 Result 表达；catch 值保持 unknown 直到收窄。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
