export default {
  title: "Day 25 · 结课项目（二）独立综合题",
  exampleExpected: ["Original first status: todo", "Updated first status: done", "Done: 2", "Todo: 0", "Total minutes: 105"],
  expected: ["Original first: todo", "Updated first: done", "Same array: false", "Same untouched task: true", "Planned: Validation, Variables", "Counts: todo=2, doing=1, done=1", "Minutes: 145"],
  success: "你已从零完成泛型不可变更新、安全排序和完整状态报告。",
  hints: ["updateById 用 map；命中时调用 update(item)，未命中返回 item。", "completeTask 应复用通用更新器。", "plannedByDuration 先 filter 再 sort；报告使用完整 Record 初值。"],
  runtimeHints: ["若 Original first 也变成 done，说明修改了原对象。", "若计划顺序错误，检查是否按 minutes 升序。"],
};
