function greet(name: string, title?: string, punctuation = "!"): string {
  const displayedTitle = title ?? "同学";
  return "你好，" + name + displayedTitle + punctuation;
}

function sum(...values: number[]): number {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

console.log(greet("Ada"));
console.log(greet("Lin", "老师", "。"));
console.log("总分：" + sum(10, 20, 30));
