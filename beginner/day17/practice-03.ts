const levels = ["初级", "中级", "高级"];
type Level = string;

const currentLevel: Level = "未知";

console.log("当前：" + currentLevel);
console.log("可选：" + levels.join("、"));
