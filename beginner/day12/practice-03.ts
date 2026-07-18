function greet(_name: string, _title?: string, _punctuation = "!"): string {
  return "你好";
}

function sum(...values: number[]): number {
  return values.length;
}

console.log(greet("Ada"));
console.log(greet("Lin", "老师", "。"));
console.log("总分：" + sum(10, 20, 30));
