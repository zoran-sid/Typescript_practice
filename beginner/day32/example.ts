function loggedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
): (this: This, ...args: Args) => Return {
  const methodName = String(context.name);

  return function (this: This, ...args: Args): Return {
    console.log(`调用方法: ${methodName}`);
    return target.call(this, ...args);
  };
}

function announceClass<
  Value extends abstract new (...args: never[]) => object,
>(
  _target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  console.log(`定义类: ${context.name ?? "匿名类"}`);
}

function withCategory<Value extends object>(value: Value): Value & { readonly category: "utility" } {
  return Object.assign(value, { category: "utility" as const });
}

@announceClass
class Calculator {
  @loggedMethod
  add(left: number, right: number): number {
    return left + right;
  }
}

const calculator = withCategory(new Calculator());

console.log(`类别: ${calculator.category}`);
console.log(`结果: ${calculator.add(2, 3)}`);

export {};
