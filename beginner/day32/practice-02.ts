function announceClass<
  Value extends abstract new (...args: never[]) => object,
>(
  _target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  // TODO：使用标准上下文中的类名。
  void context;
  console.log("注册: 未命名");
}

@announceClass
class Report {}

console.log(`类名: ${Report.name}`);

export {};
