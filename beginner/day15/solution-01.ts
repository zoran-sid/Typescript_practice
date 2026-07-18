function lastOrFallback<Item>(
  items: readonly Item[],
  fallback: Item,
): Item {
  let last = fallback;
  for (const item of items) {
    last = item;
  }
  return last;
}

console.log(lastOrFallback(["A", "B"], "无"));
console.log(lastOrFallback([], "无"));
console.log(lastOrFallback([10, 20, 30], 0));
