const levels = ["初级", "中级", "高级"] as const;
type Level = (typeof levels)[number];

const currentLevel: Level = "中级";

console.log("当前：" + currentLevel);
console.log("可选：" + levels.join("、"));
