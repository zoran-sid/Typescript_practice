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
  let status = "";

  // 根据本次传入对象的 available 选择一种状态文字。
  if (item.available) {
    status = "可借阅";
  } else {
    status = "已借出";
  }

  const description =
    `书名: ${item.title}\n页数: ${item.pages}\n状态: ${status}`;
  // return 把三行描述交回调用 describeBook 的位置。
  return description;
}

// 调用关系：book -> describeBook(item) -> description -> console.log。
const description = describeBook(book);
console.log(description);
