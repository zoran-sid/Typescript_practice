type Shape =
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function area(_shape: Shape): number {
  return 0;
}

const shapes: Shape[] = [
  { kind: "square", side: 4 },
  { kind: "rectangle", width: 5, height: 3 },
  { kind: "triangle", base: 6, height: 4 },
];

for (const shape of shapes) {
  console.log(shape.kind + " 面积：" + area(shape));
}
