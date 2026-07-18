export default {
  title: "选修：从现有类型生成新类型",
  exampleExpected: [
    "Flags: true/false",
    "Topic: modules",
    "Handler: onReady",
    "Title: Advanced types",
  ],
  exercises: [
    {
      id: "01",
      title: "把配置映射成布尔开关",
      expected: ["Flags: dark=true, retries=false"],
      success: "映射类型保留了全部键并统一转换了值类型。",
      typeHints: [
        "错误来自 Flags 仍在使用 T[Key]。",
        "转换规则要求右侧固定写 boolean。",
      ],
    },
    {
      id: "02",
      title: "提取只读元组元素",
      expected: ["Selected: modules"],
      success: "条件类型已经从元组中提取出字面量联合。",
      typeHints: [
        "当前 Topic 还是整个元组，因此字符串不能赋值。",
        "写 `T extends readonly (infer Item)[] ? Item : never`。",
      ],
    },
    {
      id: "03",
      title: "重映射事件处理器键",
      expected: ["Ready at 29", "Failed: invalid"],
      success: "事件名被系统地转换成处理器名，负载类型仍精确关联。",
      typeHints: [
        "需要在 `[Key in keyof T as ...]` 中重映射键。",
        "新键可写成 `on${Capitalize<Key & string>}` 的模板字面量类型。",
      ],
    },
    {
      id: "04",
      title: "集中构造品牌标识符",
      expected: ["/users/usr_42"],
      success: "品牌值只能在通过运行时格式验证的构造边界产生。",
      typeHints: [
        "普通 string 不能直接作为 UserId 返回，这是品牌要提供的保护。",
        "先检查 startsWith('usr_') 和长度，再在这一处写 `value as UserId`。",
      ],
    },
  ],
};
