interface Project {
  readonly id: string;
  title: string;
  members: ReadonlyArray<string>;
  note?: string;
}

const project: Project = {
  id: "P-01",
  title: "TypeScript 练习",
  members: ["Lin", "Mei"],
};

// TODO：成员数直接来自数组长度；缺少备注时显示“无”。
const memberCount = project.members.length + 1;
const note = project.note ?? "待补充";

console.log(`项目: ${project.id} | ${project.title}`);
console.log(`成员数: ${memberCount}`);
console.log(`备注: ${note}`);

export {};
