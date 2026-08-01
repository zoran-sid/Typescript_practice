type Product = { readonly id: string; name: string; stock: number };

function restock(items: readonly Product[], id: string, amount: number): Product[] {
  return items.map((item) => (
    item.id === id ? { ...item, stock: item.stock + amount } : item
  ));
}

function lowStock(items: readonly Product[]): Product[] {
  return items
    .filter((item) => item.stock < 5)
    .sort((left, right) => left.stock - right.stock);
}

function findProductById(items: readonly Product[], id: string): Product | undefined {
  // 回调关系：find 逐项比较 id，第一次返回 true 的商品会成为函数返回值。
  return items.find((item) => item.id === id);
}

const original: Product[] = [
  { id: "mouse", name: "Mouse", stock: 2 },
  { id: "keyboard", name: "Keyboard", stock: 8 },
  { id: "cable", name: "Cable", stock: 1 },
];

// 调用关系：original + cable + 5 -> restock -> updated -> lowStock / reduce -> 输出。
const updated = restock(original, "cable", 5);
const low = lowStock(updated);
const total = updated.reduce((sum, item) => sum + item.stock, 0);
// 调用关系：同一个 cable id 分别进入两次 findProductById，用来比较补货前后的结果。
const originalCable = findProductById(original, "cable");
const updatedCable = findProductById(updated, "cable");
console.log(`Original cable: ${originalCable?.stock}`);
console.log(`Updated cable: ${updatedCable?.stock}`);
console.log(`Low stock: ${low.map((item) => item.name).join(", ")}`);
console.log(`Total stock: ${total}`);
