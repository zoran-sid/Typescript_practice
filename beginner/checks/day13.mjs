export default {
  "title": "解构、spread、rest 与不可变更新",
  "exampleExpected": [
    "原主题：light",
    "新主题：dark",
    "原技能：HTML",
    "新技能：HTML、TypeScript",
    "第一项：HTML",
    "其余：TypeScript"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "解构、spread、rest 与不可变更新",
      "expected": [
        "原姓名：Ada",
        "新姓名：Ada Lin",
        "原主题：light",
        "新主题：dark",
        "原技能：HTML、CSS",
        "新技能：HTML、CSS、TypeScript",
        "第一项：HTML",
        "其余：CSS、TypeScript",
        "原状态：false,false",
        "新状态：false,true"
      ],
      "success": "嵌套对象、数组和目标任务都已不可变更新，原资料保持不变。",
      "hints": [
        "返回新对象时先展开 profile，再分别覆盖 name、skills、preferences 和 tasks。",
        "skills 使用 [...profile.skills, 'TypeScript']；preferences 也需要展开旧值。",
        "tasks 使用 map，id 为 2 时返回 { ...task, done: true }。",
        "用 const [firstSkill, ...remainingSkills] = updated.skills 完成数组解构。"
      ],
      "runtimeHints": [
        "如果原主题或原状态也改变了，说明某个嵌套层仍与新值共享并被直接修改。"
      ]
    },
    {
      "id": "practice02",
      "title": "主题设置不可变更新",
      "expected": [
        "原主题：light",
        "新主题：dark",
        "原技能：HTML",
        "新技能：HTML、TypeScript",
        "第一项：HTML",
        "其余：TypeScript"
      ],
      "success": "你已闭卷重建 主题设置不可变更新 的完整数据流。",
      "hints": [
        "使用解构、spread、rest 创建不可变的新数据。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
