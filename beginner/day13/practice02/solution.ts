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
  const exists = cart.items.some((item) => item.sku === sku);
  if (!exists || nextQuantity < 0) {
    return cart;
  }

  if (nextQuantity === 0) {
    // filter 返回不含目标商品的新数组。
    return { ...cart, items: cart.items.filter((item) => item.sku !== sku) };
  }

  return {
    ...cart,
    // map 每轮 return 一项，只替换 SKU 匹配的商品。
    items: cart.items.map((item) =>
      item.sku === sku ? { ...item, quantity: nextQuantity } : item,
    ),
  };
}

function applyCoupon(cart: Cart, coupon: string): Cart {
  return { ...cart, coupon };
}

function findQuantity(cart: Cart, sku: string): number | undefined {
  return cart.items.find((item) => item.sku === sku)?.quantity;
}

// 调用关系：originalCart -> 更新 KB -> 移除 MS -> 应用 TS20 优惠券。
const withKeyboardUpdated = updateQuantity(originalCart, "KB", 3);
const withoutMouse = updateQuantity(withKeyboardUpdated, "MS", 0);
const updatedCart = applyCoupon(withoutMouse, "TS20");

// 调用关系：两份购物车 -> findQuantity -> 新旧数量对照输出。
const originalKeyboardQuantity = findQuantity(originalCart, "KB");
const updatedKeyboardQuantity = findQuantity(updatedCart, "KB");
console.log(`原商品数：${originalCart.items.length}`);
console.log(`新商品数：${updatedCart.items.length}`);
console.log(`原键盘数量：${originalKeyboardQuantity}`);
console.log(`新键盘数量：${updatedKeyboardQuantity}`);
console.log(`优惠券：${updatedCart.coupon}`);
