export default {
  title: "Day 32（选修）：现代装饰器、Mixin 与组合",
  exampleExpected: [
    "定义类: Calculator",
    "类别: utility",
    "调用方法: add",
    "结果: 5",
  ],
  exercises: [
    {
      id: "01",
      title: "类型安全方法装饰器",
      expected: ["调用: total", "总价: 24"],
      success: "包装方法保留原签名，并在调用前记录方法名。",
      hints: ["methodName 已从标准 context 取得。", "在 target.call(...) 前输出一次。"],
    },
    {
      id: "02",
      title: "标准类装饰器上下文",
      expected: ["注册类: Report", "类名: Report"],
      success: "类名已从 ClassDecoratorContext 安全读取。",
      hints: ["标准类装饰器的第二个参数是 context。", "类名位于 context.name。"],
    },
    {
      id: "03",
      title: "类型安全的对象 Mixin",
      expected: ["任务: 学习装饰器", "标签: advanced"],
      success: "Mixin 结果同时拥有原对象成员和新增标签。",
      hints: ["Object.assign 已完成混入。", "修改 Mixin 新增的 tag 值。"],
    },
    {
      id: "04",
      title: "组合格式器",
      expected: ["消息: TYPESCRIPT"],
      success: "服务通过显式依赖组合并复用了格式行为。",
      hints: ["formatter 已由构造器注入。", "调用 this.formatter.format(message)。"],
    },
  ],
};
