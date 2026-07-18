type ProductId = string;

interface Product {
  readonly id: ProductId;
  name: string;
  price: number;
}

// TODO：按类型创建指定商品数据。
const product: Product = {
  id: "P-01",
  name: "鼠标",
  price: 0,
};

console.log(`${product.id} | ${product.name} | ¥${product.price}`);

export {};
