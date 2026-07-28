// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
function loggedMethod<This, Args extends unknown[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
): (this: This, ...args: Args) => Return {
  // TODO 1：返回普通 function 包装器；先从 context.name 输出“调用方法: 名称”，
  // 再用 target.call(this, ...args) 转交当前实例和完整参数，并原样返回 Return。
  // 直接 return target 没有记录日志，只是保持类型和原行为的临时占位。
  return target;
}
function announceClass<Value extends abstract new (...args: never[]) => object>(
  target: Value,
  context: ClassDecoratorContext<Value>,
): void {
  // TODO 2：类定义时从 context.name 读取当前类名并输出“定义类: 类名”；
  // 此处不替换构造器，也不需要返回 target。
}
function withCategory<Value extends object>(value: Value): Value {
  // TODO 3：给当前 value 增加字面量 category "utility"，并把返回类型改成
  // Value 与该字段结构的交叉类型。直接返回 value 是占位：运行时和类型里都还没有 category。
  return value;
}
@announceClass
class Calculator {
  @loggedMethod
  add(left: number, right: number): number { return left + right; }
}
const calculator = withCategory(new Calculator());
// TODO 4：完成 withCategory 后从 calculator.category 输出“类别: utility”，
// 再调用 add，核对类定义日志、类别、方法日志和结果的先后顺序。
console.log(`结果: ${calculator.add(2, 3)}`);
