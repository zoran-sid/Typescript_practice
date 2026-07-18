function describeValue(value: string | string[]): string {
  if (Array.isArray(value)) {
    return `列表项: ${value.length}`;
  }

  // TODO：字符串分支应返回实际文本长度。
  return "文本长度: 0";
}

console.log(describeValue("Type"));
console.log(describeValue(["a", "b", "c"]));

export {};
