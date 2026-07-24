// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type Article = { readonly id: number; title: string; summary: string; published: boolean };
// TODO：补上预览还需要的字段。
type ArticlePreview = Pick<Article, "id">;
// TODO：把 never 换成允许通过补丁更新的字段。
type ArticlePatch = Partial<Pick<Article, never>>;
function updateArticle(article: Article, patch: ArticlePatch): Article {
  // TODO：用不可变方式合并补丁；当前返回原对象只是占位。
  return article;
}
const statuses = ["draft", "published", "archived"] as const;
type Status = (typeof statuses)[number];
// TODO：补齐标签后，用 satisfies Record<Status, string> 检查完整性。
const statusLabels: Partial<Record<Status, string>> = {};
const original: Article = { id: 1, title: "旧标题", summary: "学习记录", published: false };
const updated = updateArticle(original, {});
const preview: ArticlePreview = { id: updated.id };
const currentStatus: Status = "published";
// TODO：完成后输出新旧标题、状态标签和可用状态。
