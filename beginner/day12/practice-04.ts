type Reporter = (message: string) => void;

function inspectTemperatures(
  _values: readonly number[],
  _report: Reporter,
  _threshold = 30,
): number {
  return 0;
}

const report: Reporter = (message) => {
  console.log(message);
};

const warningCount = inspectTemperatures([28, 32, 27, 35], report);
console.log("警告数量：" + warningCount);
