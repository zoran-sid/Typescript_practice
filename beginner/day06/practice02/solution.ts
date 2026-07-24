// 这是教学脚手架，不是完整答案。请完成所有 TODO。
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
  let status = "";
  if (item.available) {
    // TODO：设置可借阅状态。
  } else {
    // TODO：设置已借出状态。
  }
  const description = ""; // TODO：读取 item 属性和 status 组合三行文字。
  return description;
}
const description = describeBook(book);
console.log(description);
