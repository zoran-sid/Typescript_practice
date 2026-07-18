function withTag<Value extends object>(value: Value): Value & { readonly tag: string } {
  return Object.assign(value, { tag: "advanced" });
}

class Task {
  readonly title = "学习装饰器";
}

const task = withTag(new Task());

console.log(`任务: ${task.title}`);
console.log(`标签: ${task.tag}`);

export {};
