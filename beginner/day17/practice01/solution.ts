// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
const statuses = ["draft", "published", "archived"] as const;
type Status = (typeof statuses)[number];
type Article = { readonly id: number; title: string; summary: string; published: boolean; status: Status };
// TODO：把 never 替换为题目指定的可更新字段。
type ArticlePatch = Partial<Pick<Article, never>>;
// TODO：从 Article 挑出预览需要的全部字段；目前只保留 id 作占位。
type ArticlePreview = Pick<Article, "id">;
// TODO：排除不应公开的字段；never 表示尚未完成。
type PublicArticle = Omit<Article, never>;
// TODO：补齐全部 Status 的中文标签，并改用 satisfies 检查完整性。
const statusLabels: Partial<Record<Status, string>> = {};
function updateArticle(article: Article, patch: ArticlePatch): Article {
  // TODO：返回不可变合并后的新对象；当前返回原对象只是安全占位。
  return article;
}
function toPublicArticle(article: Article): PublicArticle {
  // TODO：类型工具不会删除运行时字段，请真正构造公开对象。
  return article;
}
const original: Article = { id: 1, title: "旧标题", summary: "内部学习记录", published: false, status: "draft" };
const updated = updateArticle(original, {});
const preview: ArticlePreview = { id: updated.id };
const publicArticle = toPublicArticle(updated);
// TODO：完成类型和函数后，再按题目顺序输出新旧值与状态。
