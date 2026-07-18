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
  const status = item.available ? "可借阅" : "已借出";
  return `书名: ${item.title}\n页数: ${item.pages}\n状态: ${status}`;
}

console.log(describeBook(book));

export {};
