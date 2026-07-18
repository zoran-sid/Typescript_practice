function announceClass<
  Value extends abstract new (...args: never[]) => object,
>(
  _target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  console.log(`注册类: ${context.name ?? "匿名类"}`);
}

@announceClass
class Report {}

console.log(`类名: ${Report.name}`);

export {};
