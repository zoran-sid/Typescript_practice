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
      "title": "批量价格导入：把异常转成 Result",
      "expected": [
        "价格：19.9",
        "错误：价格必须是非负数字",
        "价格：0",
        "有效数量：2"
      ],
      "success": "解析异常已在批处理边界转成 Result，坏数据没有阻断后续项，价格 0 也保留为成功。",
      "hints": [
        "parsePrice 先检查 text.trim()，再用 Number 和 Number.isFinite 验证非负数字。",
        "toPriceResult 负责 try/catch，并把 unknown 错误交给 errorMessage。",
        "循环只按 result.ok 分支读取 value 或 error。",
        "不要用 if (!value)，因为 0 是合法价格。"
      ]
    }
  ]
};
