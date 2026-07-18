const temperature = 28;
const isRaining = false;

const isComfortable =
  temperature >= 18 && temperature <= 30 && !isRaining;

console.log(`适合出门: ${isComfortable}`);

export {};
