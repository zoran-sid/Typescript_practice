// 这是教学脚手架，不是完整答案。请完成所有 TODO。
type ProjectId = string;
interface Project {
  readonly id: ProjectId;
  title: string;
  members: ReadonlyArray<string>;
  readonly progress: {
    completed: number;
    total: number;
  };
  note?: string;
}
function describeProject(project: Project): string {
  // project 是只读读取入口；不要修改参数中的对象或数组。
  const members = ""; // TODO：使用 join 连接成员。
  const note = ""; // TODO：使用 ?? 处理可选 note。
  const description = ""; // TODO：读取属性并组合四行字符串。
  return description;
}
const project: Project = {
  id: "P-01",
  title: "TypeScript 练习",
  members: ["Lin", "Mei"],
  progress: {
    completed: 2,
    total: 5,
  },
};
console.log(describeProject(project));
