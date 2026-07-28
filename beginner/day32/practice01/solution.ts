// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function tracedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): (this: This, ...args: Args) => Return {
  // TODO 1：返回一个普通 function 包装器；调用时先从 context.name 输出方法名，
  // 再用 target.call(this, ...args) 把当前实例和完整参数组交回原方法，并返回原 Return。
  // 直接 return target 只保留原行为，没有建立追踪包装，是临时占位。
  return target;
}
function registerClass<Value extends abstract new (...args: never[]) => object>(
  target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  // TODO 2：类定义时从 context.name 读取当前类名，输出“注册类: 类名”；
  // 此装饰器只观察和记录，不返回新构造器，也不要修改 target。
}
function withTag<Value extends object>(value: Value): Value {
  // TODO 3：给当前 value 增加只读字面量 tag "advanced"，并把函数返回类型改成
  // Value 与该 tag 结构的交叉类型。直接返回 value 是占位：运行时没加字段，类型也看不到 tag。
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
    // TODO 4：把当前 message 交给构造器注入的 formatter.format，
    // 再把返回文字组成“消息: 格式化结果”。下面的空字符串没有使用依赖，是占位值。
    return "";
  }
}
const calculator = withTag(new PriceCalculator());
// TODO 5：完成 withTag 的运行时字段和交叉返回类型后，从 calculator.tag 输出“标签: advanced”；
// 不要把标签整行写死，否则无法验证 Mixin 是否真的增加了字段。
console.log(`总价: ${calculator.total(3, 8)}`);
console.log(new MessageService(new UppercaseFormatter()).create("TypeScript"));
