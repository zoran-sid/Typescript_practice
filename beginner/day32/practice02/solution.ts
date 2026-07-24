// 解题结构提示：装饰器包装与 Mixin 新属性的核心实现保留为 TODO。
function loggedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): (this: This, ...args: Args) => Return {
  // TODO 1：包装方法、记录名称，并保留 this、Args 与 Return。
  return target;
}
function announceClass<Value extends abstract new (...args: never[]) => object>(
  target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  // TODO 2：从 context 读取类名并输出，不替换构造器。
}
function withCategory<Value extends object>(value: Value): Value {
  // TODO 3：添加 category: "utility"，并用交叉类型反映新增能力。
  return value;
}
@announceClass
class Calculator {
  @loggedMethod
  add(left: number, right: number): number { return left + right; }
}
const calculator = withCategory(new Calculator());
// TODO 4：完成 withCategory 后输出 category，再观察装饰器日志顺序。
console.log(`结果: ${calculator.add(2, 3)}`);
