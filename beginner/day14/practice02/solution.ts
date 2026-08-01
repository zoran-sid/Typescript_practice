import featuredProduct, {
  warehouseName as warehouse,
} from "./inventory-data.js";
import formatPrice, { stockLabel } from "./inventory-tools.js";
import type { Product } from "./inventory-types.js";

// 调用关系：inventory-data 的默认导出 -> selected，并由 Product 检查形状。
const selected: Product = featuredProduct;
// 调用关系：selected.priceCents -> formatPrice -> priceText。
const priceText = formatPrice(selected.priceCents);
// 调用关系：selected -> stockLabel -> stockText。
const stockText = stockLabel(selected);

console.log(`仓库：${warehouse}`);
console.log(`商品：${selected.name}（${selected.sku}）`);
console.log(`价格：${priceText}`);
console.log(`库存：${stockText}`);
