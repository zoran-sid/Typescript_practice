interface User {
  name: string;
  age: number;
}

const raw = '{"name":"小岚","age":"18"}';
const user = JSON.parse(raw) as User;

console.log(`年龄加一: ${user.age + 1}`);
