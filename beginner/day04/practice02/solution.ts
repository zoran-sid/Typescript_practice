// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const ageText = "20";
const age = 0; // TODO：0 只是 number 类型占位；用 Number(...) 转换 ageText，并把数字年龄保存到 age。
const hasStudentCard = true;
let ticketPrice = 0; // TODO：0 是票价的临时占位；下面每条实际分支都要把对应票价赋值到 ticketPrice。
if (false) { // TODO：false 是条件占位；替换为“age 小于 12”的儿童条件。
  // TODO：儿童条件成立时，把票价 15 赋值给 ticketPrice。
} else if (false) { // TODO：false 是条件占位；替换为“age 大于或等于 65”的老年条件。
  // TODO：老年条件成立时，把票价 20 赋值给 ticketPrice。
} else if (false) { // TODO：false 是条件占位；同时检查 hasStudentCard 为 true 且 age 小于或等于 25。
  // TODO：学生条件成立时，把票价 30 赋值给 ticketPrice。
} else {
  // TODO：前三个条件都不成立时，把普通票价 40 赋值给 ticketPrice。
}
const canEnterAlone = false; // TODO：false 只是 boolean 类型占位；同时检查 age >= 18 和 ticketPrice > 0，并把结果保存到 canEnterAlone。
console.log(`年龄: ${age}`);
console.log(`票价: ${ticketPrice}`);
console.log(`允许独自入场: ${canEnterAlone}`);
