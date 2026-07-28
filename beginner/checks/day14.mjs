export default {
  "title": "现代 ES Modules 与类型导入",
  "exampleExpected": [
    "课程：TypeScript 零基础课（21 课）",
    "80：通过",
    "及格线：60",
    "Ada：完成 12 课（beginner）"
  ],
  "exercises": [
    {
      "id": "practice01",
      "title": "现代 ES Modules 与类型导入",
      "expected": [
        "课程：TypeScript 零基础课（21 课）",
        "Ada：完成 12 课（beginner）",
        "55：未通过",
        "80：通过",
        "及格线：60"
      ],
      "success": "具名值、默认值、类型和运行时函数已从正确模块组合到唯一入口。",
      "hints": [
        "courseTitle 与 lessonCount 使用同一个具名导入。",
        "目标形式是 import formatScore, { passingScore } from './score-tools.js'。",
        "Student 使用 import type；summarizeStudent 使用普通具名导入。",
        "不要修改或复制辅助模块，所有相对路径保留 .js。"
      ],
      "typeHints": [
        "如果出现重复声明，请删除入口中的同名本地占位值或重复类型。"
      ]
    },
    {
      "id": "practice02",
      "title": "库存入口与模块边界",
      "expected": [
        "仓库：华东一号",
        "商品：机械键盘（SKU-KB）",
        "价格：¥399",
        "库存：可下单（8 件）"
      ],
      "success": "类型、默认导出、具名导出与本地别名都已在库存入口正确组合。",
      "hints": [
        "Product 从 ./inventory-types.js 使用 import type 导入。",
        "inventory-data 的默认导出是商品，warehouseName 是具名导出并要改名为 warehouse。",
        "inventory-tools 的 formatPrice 是默认导出，stockLabel 是具名导出。",
        "不要复制辅助模块内容；入口只调用导入的值与函数。"
      ]
    }
  ]
};
