// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Product = { readonly id: string; name: string; stock: number };
function restock(items: readonly Product[], id: string, amount: number): Product[] {
  // TODO 1：用 map 比较每个 item.id 与目标 id；命中时创建新对象，
  // 新 stock 等于当前 stock 加 amount，未命中项原样返回。下面的副本没有完成补货，只是占位。
  return [...items];
}
function lowStock(items: readonly Product[]): Product[] {
  // TODO 2：从 items 中保留 stock < 5 的商品，再在筛选产生的新数组上按 stock 升序排列。
  // 返回结果存进调用处的 low；下面的 [] 会暂时丢掉全部低库存商品。
  return [];
}
const original: Product[] = [
  { id: "mouse", name: "Mouse", stock: 2 },
  { id: "keyboard", name: "Keyboard", stock: 8 },
  { id: "cable", name: "Cable", stock: 1 },
];
const updated = restock(original, "cable", 5);
const low = lowStock(updated);
// TODO 3：遍历 updated，把每个 item.stock 累加后存进 total。
// 下面的 0 是临时总库存，不能作为所有输入的固定结果。
const total = 0;
// TODO 4：从 original 和 updated 中找到 cable，输出补货前后的 stock，再输出 low 与 total。
console.log(`Low stock: ${low.map((item) => item.name).join(", ")}`);
console.log(`Total stock: ${total}`);
