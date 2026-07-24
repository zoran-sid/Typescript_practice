export default {
  "title": "泛型基础与输入输出关系",
  "exampleExpected": [
    "第一位：Ada",
    "第一个分数：80",
    "标签：课程=TypeScript"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "泛型基础与输入输出关系",
      "expected": [
        "最后主题：泛型",
        "空分数：0",
        "盒子：课程=TypeScript",
        "重复：7+7+7",
        "配对：level=3"
      ],
      "success": "五个结果都保留了泛型输入与输出之间的精确关系。",
      "hints": [
        "lastOrFallback 可先让 result 等于 fallback，再用 for...of 更新。",
        "makeBox 返回 { label, value }，不要丢失调用者传入的标签。",
        "repeat 创建 Item[]，循环 count 次 push(value)，最后返回数组。",
        "makePair 的类型和表达式顺序都应为 [Left, Right]。"
      ],
      "typeHints": [
        "不要用 any、as 或非空断言；回退值已经足以安全处理空数组。"
      ]
    },
    {
      "id": "practice02",
      "title": "泛型首项读取",
      "expected": [
        "第一位：Ada",
        "第一个分数：80",
        "标签：课程=TypeScript"
      ],
      "success": "你已闭卷重建 泛型首项读取 的完整数据流。",
      "hints": [
        "使用泛型连接输入与输出，不使用 any。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
