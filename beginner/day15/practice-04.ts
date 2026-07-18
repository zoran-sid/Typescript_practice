function repeat<Item>(value: Item, _count: number): Item[] {
  return [value];
}

console.log(repeat("复习", 3).join("|"));
console.log(repeat(7, 2).join("+"));
