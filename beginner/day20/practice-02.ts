interface Product {
  name: string;
  price: number;
}

function isProduct(value: unknown): value is Product {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof value.name === "string"
  );
}

for (const raw of [
  '{"name":"键盘","price":299}',
  '{"name":"鼠标","price":"免费"}',
]) {
  const value: unknown = JSON.parse(raw);

  if (isProduct(value)) {
    console.log(`商品: ${value.name} / ¥${value.price}`);
  } else {
    console.log("商品数据无效");
  }
}
