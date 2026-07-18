type Shape =
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function assertNever(value: never): never {
  throw new Error("未处理的图形：" + JSON.stringify(value));
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      return assertNever(shape);
  }
}

const shapes: Shape[] = [
  { kind: "square", side: 4 },
  { kind: "rectangle", width: 5, height: 3 },
  { kind: "triangle", base: 6, height: 4 },
];

for (const shape of shapes) {
  console.log(shape.kind + " 面积：" + area(shape));
}
