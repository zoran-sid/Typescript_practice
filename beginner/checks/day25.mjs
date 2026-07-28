export default {
  "title": "Day 25 · 结课项目（二）独立综合题",
  "exampleExpected": [
    "Original first status: todo",
    "Updated first status: done",
    "Done: 2",
    "Todo: 0",
    "Total minutes: 105"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "学习任务快照更新",
      "expected": [
        "Original first: todo",
        "Updated first: done",
        "Same array: false",
        "Same untouched task: true",
        "Planned: Validation, Variables",
        "Counts: todo=2, doing=1, done=1",
        "Minutes: 145"
      ],
      "success": "你已从零完成泛型不可变更新、安全排序和完整状态报告。",
      "hints": [
        "updateById 用 map；命中时调用 update(item)，未命中返回 item。",
        "completeTask 应复用通用更新器。",
        "plannedByDuration 先 filter 再 sort；报告使用完整 Record 初值。"
      ],
      "runtimeHints": [
        "若 Original first 也变成 done，说明修改了原对象。",
        "若计划顺序错误，检查是否按 minutes 升序。"
      ]
    },
    {
      "id": "practice02",
      "title": "任务更新与统计",
      "expected": [
        "Original first status: todo",
        "Updated first status: done",
        "Done: 2",
        "Todo: 0",
        "Total minutes: 105",
        "Missing id changed item: false"
      ],
      "success": "你已组合任务模块，并区分新数组、命中更新与未变化对象引用。",
      "hints": [
        "入口调用 completeTask 和 buildReport，不要重写模块算法。",
        "missing id 的返回数组可能是新的，但各任务对象都应保持原引用。",
        "逐项引用比较可用 some；任何一项不同才表示 changed item。"
      ]
    },
    {
      "id": "practice03",
      "title": "库存不可变更新",
      "expected": [
        "Original cable: 1",
        "Updated cable: 6",
        "Low stock: Mouse",
        "Total stock: 16"
      ],
      "success": "你已独立完成 库存不可变更新。",
      "hints": [
        "通过纯函数补货，不修改原库存，再筛选低库存商品并统计总库存。",
        "按流程图逐步建立输入、处理、边界和输出。",
        "不要读取或修改其他 practice 文件夹。"
      ]
    }
  ]
};
