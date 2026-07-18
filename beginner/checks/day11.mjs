export default {
  title: "判别联合、switch 与完整分支",
  exampleExpected: [
    "等待开始",
    "正在加载",
    "已加载 2 项：变量、联合",
    "加载失败：网络不可用",
  ],
  exercises: [
    {
      id: "01",
      title: "回忆判别字段",
      expected: [
        "订单 101：等待付款",
        "订单 102：已付款 88 元",
        "订单 103：已取消（重复下单）",
      ],
      success: "三种订单状态都得到与自身数据匹配的说明。",
      hints: [
        "先对 state.status 使用 switch。",
        "每个 case 中只读取该成员真正拥有的属性。",
        "pending 分支也要使用 state.orderId，不要写死整个结果。",
      ],
    },
    {
      id: "02",
      title: "修复错误分支并补穷尽检查",
      expected: [
        "待办：阅读",
        "进行中：练习（Ada）",
        "完成：复习",
        "失败：提交（网络中断）",
      ],
      success: "失败分支已修复，never 穷尽检查也已建立。",
      hints: [
        "failed 分支应读取 reason，而不是返回“完成”。",
        "写一个参数类型为 never、返回类型为 never 的 assertNever。",
        "default 应把 task 传给 assertNever。",
      ],
    },
    {
      id: "03",
      title: "迁移到图形计算",
      expected: ["square 面积：16", "rectangle 面积：15", "triangle 面积：12"],
      success: "三个图形成员都经过收窄并使用了正确公式。",
      hints: [
        "switch 的判别字段是 shape.kind。",
        "正方形是 side * side。",
        "三角形是 base * height / 2。",
      ],
    },
    {
      id: "04",
      title: "联合与 undefined 综合",
      expected: [
        "支付成功：66 元，凭证：R-100",
        "支付成功：20 元，凭证：待生成",
        "支付被拒绝：余额不足",
        "支付错误：服务暂不可用",
      ],
      success: "联合成员与成员内部的可选值都被安全处理。",
      hints: [
        "先用 kind 区分 success、declined 和 error。",
        "receiptId 仍可能是 undefined，可使用 ??。",
        "不要用非空断言，也不要把拒绝和错误合并成一个模糊分支。",
      ],
    },
  ],
};
