// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Article = { readonly id: number; title: string; summary: string; published: boolean };
// TODO：ArticlePreview 除 id 外还要包含 title；把 Pick 中当前只有 "id" 的占位补完整。
type ArticlePreview = Pick<Article, "id">;
// TODO：补丁只允许更新 title 和 published；把 Pick 的 never 占位换成这两个字段，再由 Partial 让它们可选。
type ArticlePatch = Partial<Pick<Article, never>>;
function updateArticle(article: Article, patch: ArticlePatch): Article {
  // TODO：不修改 article，把原文章和 patch 合并到一个新 Article 后返回。
  // 当前 return article 只是原引用占位，完成时必须替换。
  return article;
}
const statuses = ["draft", "published", "archived"] as const;
type Status = (typeof statuses)[number];
// TODO：为 draft、published、archived 填写中文标签，并用 satisfies Record<Status, string> 替换当前 Partial 占位检查完整性。
const statusLabels: Partial<Record<Status, string>> = {};
const original: Article = { id: 1, title: "旧标题", summary: "学习记录", published: false };
const updated = updateArticle(original, {});
const preview: ArticlePreview = { id: updated.id };
const currentStatus: Status = "published";
// TODO：用补丁把标题更新为“TypeScript 工具类型”；从 original、preview、statusLabels[currentStatus] 和 statuses 读取值，输出四行结果。
