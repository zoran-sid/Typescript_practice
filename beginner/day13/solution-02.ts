type Article = {
  title: string;
  tags: string[];
};

const original: Article = {
  title: "学习笔记",
  tags: ["HTML"],
};

const updated: Article = {
  ...original,
  tags: [...original.tags, "TypeScript"],
};

console.log("原标签：" + original.tags.join("、"));
console.log("新标签：" + updated.tags.join("、"));
