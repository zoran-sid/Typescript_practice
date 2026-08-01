const productName: string = "Keyboard";
let stock: number = 5;
const isTracked: boolean = true;

// 调用关系：修改 stock 之前，先把当前数字 5 保存成快照。
const beforeStock = stock;
stock = stock - 1;
stock = stock - 1;

const productLine = `商品: ${productName}`;
const beforeLine = `出库前库存: ${beforeStock}`;
const afterLine = `出库后库存: ${stock}`;
const trackingLine = `启用库存跟踪: ${isTracked}`;

// 调用关系：固定数据和库存快照 -> 四个 line -> console.log -> 四行库存报告。
console.log(productLine);
console.log(beforeLine);
console.log(afterLine);
console.log(trackingLine);
