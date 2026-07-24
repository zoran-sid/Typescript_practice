// 解题结构提示：补货、低库存筛选与总库存统计均保留独立函数位置。
type Product = { readonly id: string; name: string; stock: number };
function restock(items: readonly Product[], id: string, amount: number): Product[] {
  // TODO 1：用 map 为命中商品创建新对象，不修改原库存。
  return [...items];
}
function lowStock(items: readonly Product[]): Product[] {
  // TODO 2：筛选 stock < 5，并在新数组上按库存升序。
  return [];
}
const original: Product[] = [
  { id: "mouse", name: "Mouse", stock: 2 },
  { id: "keyboard", name: "Keyboard", stock: 8 },
  { id: "cable", name: "Cable", stock: 1 },
];
const updated = restock(original, "cable", 5);
const low = lowStock(updated);
// TODO 3：用 reduce 统计 updated 的总库存。
const total = 0;
console.log(`Low stock: ${low.map((item) => item.name).join(", ")}`);
console.log(`Total stock: ${total}`);
