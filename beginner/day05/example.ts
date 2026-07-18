function calculateArea(width: number, height: number): number {
  return width * height;
}

function createLabel(name: string, area: number): string {
  return `${name}面积: ${area}`;
}

const deskArea = calculateArea(12, 10);
const label = createLabel("书桌", deskArea);

console.log(label);

export {};
