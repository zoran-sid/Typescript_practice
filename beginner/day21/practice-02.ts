async function loadPart(name: string, events: string[]): Promise<string> {
  events.push(`开始${name}`);
  await Promise.resolve();
  events.push(`完成${name}`);
  return name;
}

const events: string[] = [];
const lesson = await loadPart("课程", events);
const progress = await loadPart("进度", events);

console.log(events.join(" → "));
console.log(`结果: ${lesson}+${progress}`);
