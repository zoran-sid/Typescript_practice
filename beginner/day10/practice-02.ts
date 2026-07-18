type Size = "small" | "medium" | "large";

function getPrice(size: Size): number {
  if (size === "small") {
    return 10;
  }

  if (size === "large") {
    return 30;
  }

  // TODO：补上 medium 的价格。
  return 0;
}

console.log(`small: ${getPrice("small")}`);
console.log(`medium: ${getPrice("medium")}`);
console.log(`large: ${getPrice("large")}`);

export {};
