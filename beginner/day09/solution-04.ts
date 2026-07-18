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

const memberCount = project.members.length;
const note = project.note ?? "无";

console.log(`项目: ${project.id} | ${project.title}`);
console.log(`成员数: ${memberCount}`);
console.log(`备注: ${note}`);

export {};
