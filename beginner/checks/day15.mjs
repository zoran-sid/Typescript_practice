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
      "title": "安全读取首项与空数组",
      "expected": [
        "第一位：Ada",
        "第一个分数：80",
        "空成绩：暂无",
        "标签：课程=TypeScript"
      ],
      "success": "非空数组保留了元素类型，空数组也通过 T | undefined 交给调用方处理。",
      "hints": [
        "firstOrUndefined 的返回类型要包含 undefined，不能假装空数组一定有 Item。",
        "给空成绩数组明确写 readonly number[]，再把它交给泛型函数。",
        "“暂无”是界面决策，在调用处用 ?? 处理，不要写进通用读取函数。",
        "labelValue 的 value 类型继续由本次调用推断，不要改成 any 或宽联合。"
      ]
    }
  ]
};
