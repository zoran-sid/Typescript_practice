type Id = string | number;
type Alignment = "left" | "center" | "right";

function formatId(id: Id): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return `#${id}`;
}

function describeAlignment(alignment: Alignment): string {
  return `对齐方式: ${alignment}`;
}

console.log(formatId("ts-10"));
console.log(formatId(42));
console.log(describeAlignment("center"));

export {};
