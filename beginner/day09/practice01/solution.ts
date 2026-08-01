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
  const members = project.members.join(", ");
  const note = project.note ?? "无";
  // return 把四行摘要交回 describeProject(project) 的调用位置。
  return (
    `${project.id} | ${project.title}\n` +
    `成员: ${members}\n` +
    `进度: ${project.progress.completed}/${project.progress.total}\n` +
    `备注: ${note}`
  );
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

// 调用关系：project -> describeProject -> 四行字符串 -> console.log。
console.log(describeProject(project));
