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
      "title": "部署闸门判断",
      "expected": [
        "Decision: Fast track",
        "Can deploy: true",
        "Failed checks: 0"
      ],
      "success": "你已经能按优先级解释部署决策，并把显示状态与布尔权限分别计算。",
      "hints": [
        "只要 failedChecks 大于 0，就应先进入 Blocked 分支。",
        "快速通道同时要求 isHotfix 和 hasApproval。",
        "canDeploy 只关心没有失败并且已经审批。"
      ]
    }
  ]
};
