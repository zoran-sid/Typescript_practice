export default {
  title: "泛型基础与输入输出关系",
  exampleExpected: [
    "第一位：Ada",
    "第一个分数：80",
    "标签：课程=TypeScript",
  ],
  exercises: [
    {
      id: "01",
      title: "同类型回退值",
      expected: ["B", "无", "30"],
      success: "数组元素、回退值和返回值保持了同一个泛型关系。",
      hints: [
        "不要直接始终返回 fallback。",
        "可用 fallback 初始化 last，再用 for...of 更新 last。",
        "这样空数组也能安全返回，不需要非空断言。",
      ],
    },
    {
      id: "02",
      title: "两个类型参数",
      expected: ["level=3", "true=search"],
      success: "两个输入类型与元组位置一一对应。",
      hints: [
        "返回类型应从 [Value, Key] 改为 [Key, Value]。",
        "返回表达式也要从 [value, key] 改为 [key, value]。",
      ],
    },
    {
      id: "03",
      title: "泛型对象",
      expected: ["分数：95", "主题：泛型"],
      success: "Box 同时保留了调用者提供的标签与值类型。",
      hints: [
        "不要修改 Box<Value>。",
        "移除 label 参数名前的下划线，并在返回对象中使用 label。",
      ],
    },
    {
      id: "04",
      title: "迁移到重复函数",
      expected: ["复习|复习|复习", "7+7"],
      success: "同一泛型算法已正确复用于字符串和数字。",
      hints: [
        "先创建 const results: Item[] = []。",
        "循环 count 次，每次 push(value)。",
        "最后返回 results，而不是固定只含一项的数组。",
      ],
    },
  ],
};
