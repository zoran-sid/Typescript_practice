const temperatures: number[] = [18, 21, 23];
let totalTemperature = 0;
let highestTemperature = 0;

for (const temperature of temperatures) {
  totalTemperature = totalTemperature + temperature;

  if (temperature > highestTemperature) {
    highestTemperature = temperature;
  }
}

console.log(`Readings: ${temperatures.length}`);
console.log(`Total: ${totalTemperature}`);
console.log(`Highest: ${highestTemperature}`);
