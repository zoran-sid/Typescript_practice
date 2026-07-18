const product = {
  name: "键盘",
  price: 199,
  inStock: true,
};

function formatProduct(item: {
  name: string;
  price: number;
  inStock: boolean;
}): string {
  // TODO：使用 item 的三个属性生成指定格式。
  void item;
  return "商品信息尚未完成";
}

console.log(formatProduct(product));

export {};
