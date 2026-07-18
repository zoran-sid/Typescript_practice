function repeat<Item>(value: Item, count: number): Item[] {
  const results: Item[] = [];
  for (let index = 0; index < count; index += 1) {
    results.push(value);
  }
  return results;
}

console.log(repeat("复习", 3).join("|"));
console.log(repeat(7, 2).join("+"));
