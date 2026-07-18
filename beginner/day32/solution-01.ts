function tracedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
): (this: This, ...args: Args) => Return {
  const methodName = String(context.name);

  return function (this: This, ...args: Args): Return {
    console.log(`调用: ${methodName}`);
    return target.call(this, ...args);
  };
}

class PriceCalculator {
  @tracedMethod
  total(quantity: number, unitPrice: number): number {
    return quantity * unitPrice;
  }
}

const calculator = new PriceCalculator();
console.log(`总价: ${calculator.total(3, 8)}`);

export {};
