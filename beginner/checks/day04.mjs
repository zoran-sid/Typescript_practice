export default {
  title: "Day 04：布尔逻辑与多分支",
  exampleExpected: [
    "年龄: 20",
    "票价: 30",
    "允许独自入场: true",
  ],
  exercises: [
    {
      id: "01",
      title: "组合温度与天气条件",
      expected: ["适合出门: true"],
      success: "范围、&& 和 ! 都使用正确。",
      hints: ["三个条件必须同时成立。", "“没有下雨”可以写成 !isRaining。"],
    },
    {
      id: "02",
      title: "修复及格边界",
      expected: ["是否及格: true", "等级: 及格"],
      success: "你正确处理了刚好 60 分的边界。",
      hints: ["题目中的“也算”通常意味着要包含边界。", "检查代码中所有与 60 比较的位置。"],
    },
    {
      id: "03",
      title: "字符串数量与运费",
      expected: ["商品数量: 3", "总价: 36", "免运费: false"],
      success: "字符串已先转换为数字，后续计算正确。",
      hints: ["quantityText 的类型是 string。", "回想 Day 02 的 Number(...)。"],
    },
    {
      id: "04",
      title: "优惠规则综合",
      expected: ["优惠: 20", "应付: 100"],
      success: "多分支顺序和会员边界均正确。",
      hints: ["120 不满足满 200，但满足会员满 100。", "“满 100”包含刚好 100。"],
    },
  ],
};
