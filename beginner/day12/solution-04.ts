type Reporter = (message: string) => void;

function inspectTemperatures(
  values: readonly number[],
  report: Reporter,
  threshold = 30,
): number {
  let warningCount = 0;

  for (const value of values) {
    if (value >= threshold) {
      report("警告：" + value + "°C");
      warningCount += 1;
    }
  }

  return warningCount;
}

const report: Reporter = (message) => {
  console.log(message);
};

const warningCount = inspectTemperatures([28, 32, 27, 35], report);
console.log("警告数量：" + warningCount);
