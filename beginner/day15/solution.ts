function lastOrFallback<Item>(
  items: readonly Item[],
  fallback: Item,
): Item {
  let result = fallback;

  for (const item of items) {
    result = item;
  }

  return result;
}

type Box<Value> = {
  label: string;
  value: Value;
};

function makeBox<Value>(label: string, value: Value): Box<Value> {
  return { label, value };
}

function repeat<Item>(value: Item, count: number): Item[] {
  const results: Item[] = [];

  for (let index = 0; index < count; index += 1) {
    results.push(value);
  }

  return results;
}

function makePair<Left, Right>(left: Left, right: Right): [Left, Right] {
  return [left, right];
}

const lastTopic = lastOrFallback(["变量", "泛型"], "无");
const emptyScore = lastOrFallback([], 0);
const course = makeBox("课程", "TypeScript");
const repeatedNumbers = repeat(7, 3);
const pair = makePair("level", 3);

console.log(`最后主题：${lastTopic}`);
console.log(`空分数：${emptyScore}`);
console.log(`盒子：${course.label}=${course.value}`);
console.log(`重复：${repeatedNumbers.join("+")}`);
console.log(`配对：${pair[0]}=${pair[1]}`);
