type Article = {
  readonly id: number;
  title: string;
  summary: string;
  published: boolean;
};

type ArticlePreview = Pick<Article, "id" | "title">;
type ArticlePatch = Partial<
  Pick<Article, "title" | "summary" | "published">
>;

function updateArticle(article: Article, patch: ArticlePatch): Article {
  return { ...article, ...patch };
}

const statuses = ["draft", "published", "archived"] as const;
type Status = (typeof statuses)[number];

const statusLabels = {
  draft: "草稿",
  published: "已发布",
  archived: "已归档",
} satisfies Record<Status, string>;

const original: Article = {
  id: 1,
  title: "旧标题",
  summary: "学习记录",
  published: false,
};
const updated = updateArticle(original, {
  title: "TypeScript 工具类型",
  published: true,
});
const preview: ArticlePreview = {
  id: updated.id,
  title: updated.title,
};
const currentStatus: Status = "published";

console.log("原标题：" + original.title);
console.log("新标题：" + preview.title);
console.log("状态：" + currentStatus + "=" + statusLabels[currentStatus]);
console.log("可用状态：" + statuses.join("、"));
