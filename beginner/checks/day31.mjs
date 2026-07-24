export default {
  "title": "Day 31 · 迭代器、生成器与 bigint 独立综合题",
  "exampleExpected": [
    "范围: 2, 3, 4",
    "倒计时: 3, 2, 1",
    "安全整数之后: 9007199254740994"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 31 · 迭代器、生成器与 bigint 独立综合题",
      "expected": [
        "偶数: 2, 4, 6",
        "倒计时: 3, 2, 1",
        "下一个编号: 9007199254740994",
        "JSON: {\"id\":\"9007199254740994\"}"
      ],
      "success": "你已从零完成生成器、手写迭代器和 bigint JSON 边界。",
      "hints": [
        "偶数余数为 0 时才 yield。",
        "倒计时第一次 next 应产出 start，先保存 value 再递减。",
        "递增量写 1n，JSON 中使用 nextId.toString()。"
      ],
      "typeHints": [
        "number 与 bigint 不能混算，也不要使用 any。"
      ]
    },
    {
      "id": "practice02",
      "title": "数字序列生成器",
      "expected": [
        "范围: 2, 3, 4",
        "倒计时: 3, 2, 1",
        "安全整数之后: 9007199254740994"
      ],
      "success": "你已闭卷重建 数字序列生成器 的完整数据流。",
      "hints": [
        "实现 Iterable、Iterator 或 generator，并区分 yield 与 return。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
