function lastOrFallback<Item>(
  _items: readonly Item[],
  fallback: Item,
): Item {
  return fallback;
}

console.log(lastOrFallback(["A", "B"], "无"));
console.log(lastOrFallback([], "无"));
console.log(lastOrFallback([10, 20, 30], 0));
