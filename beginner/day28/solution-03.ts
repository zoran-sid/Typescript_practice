function normalize(value: string): string;
function normalize(value: readonly string[]): string[];
function normalize(value: string | readonly string[]): string | string[] {
  return typeof value === "string"
    ? value.trim().toLowerCase()
    : value.map((item) => item.trim().toLowerCase());
}

console.log(normalize("  TYPES "));
console.log(normalize([" Modules ", " GENERICS "]).join(", "));
