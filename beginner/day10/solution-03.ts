function describeValue(value: string | string[]): string {
  if (Array.isArray(value)) {
    return `列表项: ${value.length}`;
  }

  return `文本长度: ${value.length}`;
}

console.log(describeValue("Type"));
console.log(describeValue(["a", "b", "c"]));

export {};
