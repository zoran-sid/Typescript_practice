type Code = string | number;

function formatCode(code: Code): string {
  if (typeof code === "string") {
    return code.toUpperCase();
  }

  return `#${code}`;
}

console.log(formatCode("ts-10"));
console.log(formatCode(42));

export {};
