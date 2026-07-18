interface User {
  name: string;
  age: number;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof value.name === "string" &&
    "age" in value &&
    typeof value.age === "number"
  );
}

const raw = '{"name":"小岚","age":"18"}';
const value: unknown = JSON.parse(raw);

if (isUser(value)) {
  console.log(`年龄加一: ${value.age + 1}`);
} else {
  console.log("数据无效：age 必须是数字");
}
