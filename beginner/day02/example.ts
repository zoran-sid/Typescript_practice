const unitPriceText = "12";
const itemCount = 2;

const unitPrice = Number(unitPriceText);
const totalPrice = unitPrice * itemCount;

let status = "Small order";

if (totalPrice >= 20) {
  status = "Large order";
}

console.log(`Total price: ${totalPrice}`);
console.log(`Status: ${status}`);
