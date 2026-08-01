function lastOrFallback<Item>(
  items: readonly Item[],
  fallback: Item,
): Item {
  let result = fallback;
  for (const item of items) {
    // 每读到一项，就让它成为新的候选结果；最后留下末项。
    result = item;
  }
  return result;
}

type Box<Value> = { label: string; value: Value };

function makeBox<Value>(label: string, value: Value): Box<Value> {
  return { label, value };
}

function repeat<Item>(value: Item, count: number): Item[] {
  const result: Item[] = [];
  for (let index = 0; index < count; index += 1) {
    result.push(value);
  }
  return result;
}

function makePair<Left, Right>(
  left: Left,
  right: Right,
): [Left, Right] {
  return [left, right];
}

// 调用关系：每组固定实参 -> 对应泛型函数 -> 保留该次调用的具体结果类型。
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
