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
      "title": "购物车的更新、删除与不变分支",
      "expected": [
        "原商品数：2",
        "新商品数：1",
        "原键盘数量：2",
        "新键盘数量：3",
        "优惠券：TS20"
      ],
      "success": "购物车已按输入选择更新、删除或不变分支，原状态也没有被修改。",
      "hints": [
        "先检查 sku 是否存在和 nextQuantity 是否为负数，拒绝分支返回原 cart。",
        "数量为 0 使用 filter；正数使用 map 并只替换目标商品。",
        "applyCoupon 再通过对象 spread 返回新 Cart。",
        "输出同时读取 originalCart 和 updatedCart，确认原键盘数量仍为 2。"
      ]
    }
  ]
};
