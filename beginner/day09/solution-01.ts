type ProductId = string;

interface Product {
  readonly id: ProductId;
  name: string;
  price: number;
}

const product: Product = {
  id: "P-01",
  name: "鼠标",
  price: 99,
};

console.log(`${product.id} | ${product.name} | ¥${product.price}`);

export {};
