function showFirst(scores: number[]): string {
  const first = scores[0];
  return first === undefined ? "列表为空" : `第一项: ${first}`;
}

console.log(showFirst([88, 92]));
console.log(showFirst([]));
