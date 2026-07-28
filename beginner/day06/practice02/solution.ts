// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const book = {
  title: "TypeScript 入门",
  pages: 320,
  available: true,
};
function describeBook(item: {
  title: string;
  pages: number;
  available: boolean;
}): string {
  // item 是形参，只在函数体内代表本次传入的对象。
  let status = ""; // TODO：空字符串只是 string 类型占位；下面两个分支都要根据 item.available 更新 status。
  if (item.available) {
    // TODO：item.available 为 true 时，把题目要求的“可借阅”文字保存到 status。
  } else {
    // TODO：item.available 为 false 时，把题目要求的“已借出”文字保存到 status。
  }
  const description = ""; // TODO：空字符串只是 string 类型占位；读取 item.title、item.pages 和 status，组合“书名、页数、状态”三行文字并保存到 description。
  return description;
}
const description = describeBook(book);
console.log(description);
