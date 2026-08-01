function tracedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): (this: This, ...args: Args) => Return {
  return function (this: This, ...args: Args): Return {
    console.log(`调用: ${String(context.name)}`);
    // 调用关系：包装方法保留当前 this 与实参，调用原 target，并把原返回值交回去。
    return target.call(this, ...args);
  };
}

function registerClass<Value extends abstract new (...args: never[]) => object>(
  _target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  console.log(`注册类: ${String(context.name)}`);
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

interface Formatter { format(value: string): string; }
class UppercaseFormatter implements Formatter {
  format(value: string): string { return value.toUpperCase(); }
}
class MessageService {
  constructor(private readonly formatter: Formatter) {}
  create(message: string): string {
    return `消息: ${this.formatter.format(message)}`;
  }
}

// 调用关系：PriceCalculator 实例 -> withTag -> 保留 total 并增加 tag -> 两次输出。
const calculator = withTag(new PriceCalculator());
console.log(`标签: ${calculator.tag}`);
console.log(`总价: ${calculator.total(3, 8)}`);

// 调用关系：固定消息 -> MessageService.create -> 注入的 formatter.format -> 输出。
console.log(new MessageService(new UppercaseFormatter()).create("TypeScript"));
