const ageText = "20";
const age = Number(ageText);
const hasStudentCard = true;

let ticketPrice: number;

if (age < 12) {
  ticketPrice = 15;
} else if (age >= 65) {
  ticketPrice = 20;
} else if (hasStudentCard && age <= 25) {
  ticketPrice = 30;
} else {
  ticketPrice = 40;
}

const canEnterAlone = age >= 18 && ticketPrice > 0;

console.log(`年龄: ${age}`);
console.log(`票价: ${ticketPrice}`);
console.log(`允许独自入场: ${canEnterAlone}`);

export {};
