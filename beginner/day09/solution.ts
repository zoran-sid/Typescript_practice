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

  return [
    `${project.id} | ${project.title}`,
    `成员: ${members}`,
    `进度: ${project.progress.completed}/${project.progress.total}`,
    `备注: ${note}`,
  ].join("\n");
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

export {};
