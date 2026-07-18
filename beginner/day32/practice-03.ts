function withTag<Value extends object>(value: Value): Value & { readonly tag: string } {
  // TODO：对象 Mixin 新增的标签应为 advanced。
  return Object.assign(value, { tag: "todo" });
}

class Task {
  readonly title = "学习装饰器";
}

const task = withTag(new Task());

console.log(`任务: ${task.title}`);
console.log(`标签: ${task.tag}`);

export {};
