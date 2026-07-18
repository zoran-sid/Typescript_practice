type Lesson = {
  title: string;
  score: number;
  completed: boolean;
};

function pluck<Item, Key extends keyof Item>(
  items: readonly Item[],
  key: Key,
): Item[Key][] {
  return items.map((item) => item[key]);
}

const lessons: Lesson[] = [
  { title: "变量", score: 80, completed: true },
  { title: "泛型", score: 95, completed: false },
];

console.log("标题：" + pluck(lessons, "title").join("、"));
console.log("分数：" + pluck(lessons, "score").join("、"));
