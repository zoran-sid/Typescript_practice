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
  const stockText = item.inStock ? "有货" : "缺货";
  return `${item.name} | ¥${item.price} | ${stockText}`;
}

console.log(formatProduct(product));

export {};
