type NumberOperation = (value: number) => number;

const double: NumberOperation = (value) => {
  return value * 2;
};

for (const value of [2, 5, 8]) {
  console.log(double(value));
}
