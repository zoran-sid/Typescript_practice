function tracedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): (this: This, ...args: Args) => Return {
  const methodName = String(context.name);
  return function (this: This, ...args: Args): Return {
    console.log(`调用: ${methodName}`);
    return target.call(this, ...args);
  };
}

function registerClass<Value extends abstract new (...args: never[]) => object>(
  _target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  console.log(`注册类: ${context.name ?? "匿名类"}`);
}

function withTag<Value extends object>(
  value: Value,
): Value & { readonly tag: "advanced" } {
  return Object.assign(value, { tag: "advanced" as const });
}

@registerClass
class PriceCalculator {
  @tracedMethod
  total(quantity: number, unitPrice: number): number {
    return quantity * unitPrice;
  }
}

interface Formatter {
  format(value: string): string;
}

class UppercaseFormatter implements Formatter {
  format(value: string): string {
    return value.toUpperCase();
  }
}

class MessageService {
  constructor(private readonly formatter: Formatter) {}

  create(message: string): string {
    return `消息: ${this.formatter.format(message)}`;
  }
}

const calculator = withTag(new PriceCalculator());
console.log(`标签: ${calculator.tag}`);
console.log(`总价: ${calculator.total(3, 8)}`);
const service = new MessageService(new UppercaseFormatter());
console.log(service.create("TypeScript"));

export {};
