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
      "title": "惰性序列与大整数编号",
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
      "title": "可重复分页游标",
      "expected": [
        "First cursor: 2, 3",
        "Second cursor: 2",
        "First resumes: 4",
        "First done: true"
      ],
      "success": "你已手写可重复 iterable，并验证两个 iterator 的游标互不影响。",
      "hints": [
        "不要使用 generator；显式实现 Symbol.iterator 和 next。",
        "current 放在 Symbol.iterator 内，每次遍历得到一份状态。",
        "有值时先保存本轮页码再递增，超出 end 后返回 done: true。",
        "两个 iterator 要交错调用，不能分别一次性展开。"
      ],
      "runtimeHints": [
        "如果第二个游标不是从 2 开始，检查 current 是否被两个 iterator 共享。"
      ]
    }
  ]
};
