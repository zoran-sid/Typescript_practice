export default {
  "title": "Day 04：订单优惠计算器",
  "exampleExpected": [
    "年龄: 20",
    "票价: 30",
    "允许独自入场: true"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "Day 04：订单优惠计算器",
      "expected": [
        "会员优惠可用: true",
        "优惠: 20",
        "应付: 100"
      ],
      "success": "你已经能从空文件组合布尔条件、边界和多分支优先级。",
      "hints": [
        "会员优惠条件同时需要 isMember、orderTotal >= 100 和 !hasCoupon。",
        "先检查满 200，再检查会员优惠，最后检查优惠券或满 80。",
        "amountToPay 应由 orderTotal - discount 计算。"
      ]
    },
    {
      "id": "practice02",
      "title": "电影院票价判断",
      "expected": [
        "年龄: 20",
        "票价: 30",
        "允许独自入场: true"
      ],
      "success": "你已闭卷重建 电影院票价判断 的完整数据流。",
      "hints": [
        "使用比较、布尔运算和互斥的 if / else if / else。",
        "沿 README 流程图逐个检查输入、处理、分支/循环和输出。",
        "不要导入其他 practice 文件夹；每题必须独立运行。"
      ]
    }
  ]
};
