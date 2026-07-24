// 解题结构提示：标准装饰器签名、Mixin 返回类型与组合边界已保留。
function tracedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): (this: This, ...args: Args) => Return {
  // TODO 1：返回普通 function 包装器，记录 context.name，并用 target.call 转发 this/args。
  return target;
}
function registerClass<Value extends abstract new (...args: never[]) => object>(
  target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  // TODO 2：读取 context.name 完成注册日志；不需要替换类。
}
function withTag<Value extends object>(value: Value): Value {
  // TODO 3：添加只读字面量 tag，并把返回类型改成 Value 与 tag 结构的交叉类型。
  return value;
}
@registerClass
class PriceCalculator {
  @tracedMethod
  total(quantity: number, unitPrice: number): number { return quantity * unitPrice; }
}
interface Formatter { format(value: string): string; }
class UppercaseFormatter implements Formatter {
  format(value: string): string { return value.toUpperCase(); }
}
class MessageService {
  constructor(private readonly formatter: Formatter) {}
  create(message: string): string {
    // TODO 4：把 message 交给注入的 formatter，再组成最终消息。
    return "";
  }
}
const calculator = withTag(new PriceCalculator());
// TODO 5：完成 withTag 类型后输出 calculator.tag。
console.log(`总价: ${calculator.total(3, 8)}`);
console.log(new MessageService(new UppercaseFormatter()).create("TypeScript"));
