const temperature = 28;
const isRaining = false;

// TODO：18 到 30 度（包含边界）并且没有下雨时，才适合出门。
const isComfortable = temperature > 30 || isRaining;

console.log(`适合出门: ${isComfortable}`);

export {};
