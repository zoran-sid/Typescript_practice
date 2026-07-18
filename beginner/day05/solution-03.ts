const points = 10;

function addPoints(current: number, bonus: number): number {
  return current + bonus;
}

console.log(`第一次: ${addPoints(points, 5)}`);
console.log(`第二次: ${addPoints(10, 5)}`);
console.log(`原始积分: ${points}`);

export {};
