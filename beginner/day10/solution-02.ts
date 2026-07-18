type Size = "small" | "medium" | "large";

function getPrice(size: Size): number {
  if (size === "small") {
    return 10;
  }

  if (size === "medium") {
    return 20;
  }

  return 30;
}

console.log(`small: ${getPrice("small")}`);
console.log(`medium: ${getPrice("medium")}`);
console.log(`large: ${getPrice("large")}`);

export {};
