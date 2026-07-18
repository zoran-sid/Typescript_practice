type Formatter = (value: number) => string;

const formatMinutes: Formatter = (value) => {
  return value + " 分钟";
};

function printReport(
  values: readonly number[],
  formatter: Formatter,
  title = "学习记录",
): void {
  console.log(title);
  values.forEach((value, index) => {
    console.log("第 " + (index + 1) + " 项：" + formatter(value));
  });
}

function joinTopics(separator: string, ...topics: string[]): string {
  return topics.join(separator);
}

printReport([30, 45], formatMinutes);
console.log("主题：" + joinTopics(" / ", "函数", "回调", "void"));
