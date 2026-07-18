function normalize(value: string): string;
function normalize(value: readonly string[]): string[];
function normalize(value: string | readonly string[]): string | string[] {
  // TODO：字符串返回 trim+小写；数组中每项都做同样转换。
  return value;
}

console.log(normalize("  TYPES "));
console.log(normalize([" Modules ", " GENERICS "]).join(", "));
