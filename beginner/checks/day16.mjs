export default {
  title: "泛型约束、keyof、T[K] 与 typeof",
  exampleExpected: [
    "ID=7",
    "标题：TypeScript",
    "课数：21",
    "设置：theme=dark",
  ],
  exercises: [
    {
      id: "01",
      title: "keyof 读取属性",
      expected: ["name=Ada", "age=36", "active=true"],
      success: "传入的合法键现在真正决定返回属性。",
      hints: [
        "移除 key 参数名前的下划线。",
        "返回 profile[key]，不要始终读取 profile.name。",
      ],
    },
    {
      id: "02",
      title: "迁移泛型约束",
      expected: ["Article#7", "User#42"],
      success: "不同对象通过最小 id 约束复用了同一函数。",
      hints: [
        "约束已经允许安全读取 item.id。",
        '删除 item 参数名前的下划线，用 prefix + "#" + item.id。',
      ],
    },
    {
      id: "03",
      title: "使用 T[K] 批量取值",
      expected: ["标题：变量、泛型", "分数：80、95"],
      success: "pluck 保留了键和值数组之间的精确类型关系。",
      hints: [
        "map 遍历 items。",
        "回调返回 item[key]；不要忘记 return。",
        "函数最终返回 map 产生的数组。",
      ],
    },
    {
      id: "04",
      title: "从值派生键",
      expected: ["search=true", "comments=false", "darkMode=true"],
      success: "功能名从真实配置派生，并用于安全索引。",
      hints: [
        "FeatureName 应是 keyof typeof featureFlags。",
        "isEnabled 返回 featureFlags[name]。",
        "不要使用 as 或把返回值写死。",
      ],
    },
  ],
};
