import type { Product } from "./inventory-types.js";

export default function formatPrice(priceCents: number): string {
  return `¥${priceCents / 100}`;
}

export function stockLabel(product: Product): string {
  return product.stock > 0 ? `可下单（${product.stock} 件）` : "缺货";
}
