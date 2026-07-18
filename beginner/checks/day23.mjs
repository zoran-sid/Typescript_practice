export default {
  title: "Day 23 · TSConfig 与第一条错误",
  exampleExpected: [
    "先读: 第一条错误",
    "strict: 开启一组严格检查",
    "noEmit: 只检查，不生成文件",
    "target/module: 输出语法 / 模块规则",
  ],
  exercises: [
    {
      id: "01",
      title: "在 strictNullChecks 下处理 undefined",
      expected: ["找到: TypeScript", "没有找到"],
      success: "找到与未找到是两个清楚、类型安全的分支。",
      hints: [
        "find 的返回值包含 undefined。",
        "不要用一个假课程名替代缺失；显式检查 course === undefined。",
      ],
      typeHints: ["showCourse 的参数应保留 string | undefined。"],
      compilerOptions: { strictNullChecks: true },
    },
    {
      id: "02",
      title: "noImplicitAny 与第一条错误",
      expected: [
        "调试顺序: 先读第一条错误",
        "结果: 8",
        "无法计算",
      ],
      success: "参数类型明确，unknown 也在缩小后才参与计算。",
      hints: [
        "先处理文件最上面的第一处类型问题。",
        "不知道输入类型时使用 unknown，并通过 typeof 检查。",
        "不能计算时返回 undefined，不要伪装成数字 0。",
      ],
      typeHints: ["不要保留依赖 @ts-expect-error 的 unsafeEcho。"],
      compilerOptions: { noImplicitAny: true },
    },
    {
      id: "03",
      title: "在 noUncheckedIndexedAccess 下读取数组",
      expected: ["第一项: 88", "列表为空"],
      success: "数组非空与越界两条路径都被正确表达。",
      hints: [
        "scores[0] 的类型是 number | undefined。",
        "undefined 不是数字 0；返回明确的列表为空。",
      ],
      typeHints: ["不要用非空断言绕过检查。"],
      compilerOptions: { noUncheckedIndexedAccess: true },
    },
    {
      id: "04",
      title: "精确处理可选属性",
      expected: ["主题字段: 不存在"],
      success: "清除主题后，属性确实从对象中消失。",
      hints: [
        "不要把 theme 赋成 undefined。",
        "用对象解构取出 theme，再把其余属性组成新对象。",
      ],
      typeHints: ["开启 exactOptionalPropertyTypes 后，缺席与 undefined 不相同。"],
      compilerOptions: { exactOptionalPropertyTypes: true },
    },
  ],
};
