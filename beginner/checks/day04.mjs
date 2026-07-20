export default {
  title: "Day 04：订单优惠计算器",
  exampleExpected: [
    "年龄: 20",
    "票价: 30",
    "允许独自入场: true",
  ],
  expected: [
    "会员优惠可用: true",
    "优惠: 20",
    "应付: 100",
  ],
  success: "你已经能从空文件组合布尔条件、边界和多分支优先级。",
  hints: [
    "会员优惠条件同时需要 isMember、orderTotal >= 100 和 !hasCoupon。",
    "先检查满 200，再检查会员优惠，最后检查优惠券或满 80。",
    "amountToPay 应由 orderTotal - discount 计算。",
  ],
};
