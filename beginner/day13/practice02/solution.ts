// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type CartItem = {
  readonly sku: string;
  name: string;
  quantity: number;
};
type Cart = {
  readonly id: string;
  items: readonly CartItem[];
  coupon?: string;
};
const originalCart: Cart = {
  id: "cart-1",
  items: [
    { sku: "KB", name: "机械键盘", quantity: 2 },
    { sku: "MS", name: "鼠标", quantity: 1 },
  ],
};
function updateQuantity(
  cart: Cart,
  sku: string,
  nextQuantity: number,
): Cart {
  // TODO：先判断 sku 是否存在以及 nextQuantity 是否小于 0；拒绝时返回原 cart。
  // nextQuantity === 0 时用 filter 创建移除目标商品的新 items；
  // nextQuantity > 0 时用 map 只为目标商品创建带新 quantity 的对象，再返回新 Cart。
  // 当前 return cart 只表示“拒绝/无变化”路径，是未完成占位。
  return cart;
}
function applyCoupon(cart: Cart, coupon: string): Cart {
  // TODO：不修改 cart，使用对象 spread 返回 coupon 来自参数的新 Cart。
  // 当前 return cart 没有应用优惠券，只是占位。
  return cart;
}
const withKeyboardUpdated = updateQuantity(originalCart, "KB", 3);
const withoutMouse = updateQuantity(withKeyboardUpdated, "MS", 0);
const updatedCart = applyCoupon(withoutMouse, "TS20");
// TODO：分别从 originalCart 和 updatedCart 查找 KB，读取两份数量；
// 再输出新旧商品数、键盘数量与 updatedCart.coupon。不要写死完整结果行。
