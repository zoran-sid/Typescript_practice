// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
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
  const members = ""; // TODO：空字符串只是占位；只读取 project.members，用 join 和 ", " 连接成员，并保存到 members。
  const note = ""; // TODO：空字符串只是占位；读取可选的 project.note，缺失时用 ?? 选择 "无"，并保存到 note。
  const description = ""; // TODO：空字符串只是占位；读取 project 的 id、title、progress，再使用 members 和 note 组合题目要求的四行摘要。
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
