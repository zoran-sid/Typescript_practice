type Code = string | number;

function formatCode(code: Code): string {
  if (typeof code === "string") {
    // TODO：字符串编号统一转成大写。
    return code;
  }

  // TODO：数字编号前添加 #。
  return `${code}`;
}

console.log(formatCode("ts-10"));
console.log(formatCode(42));

export {};
