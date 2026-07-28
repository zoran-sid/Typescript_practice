// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const statuses = ["draft", "published", "archived"] as const;
type Status = (typeof statuses)[number];
type Article = { readonly id: number; title: string; summary: string; published: boolean; status: Status };
// TODO：把 Pick 的 never 占位替换为题目允许修改的 title、summary、published、status，再由 Partial 让补丁字段可选。
type ArticlePatch = Partial<Pick<Article, never>>;
// TODO：ArticlePreview 应从 Article 挑出 id、title、status；当前只有 id 是未完成占位。
type ArticlePreview = Pick<Article, "id">;
// TODO：PublicArticle 应排除内部 summary；当前 Omit 的 never 没有排除任何字段，只是占位。
type PublicArticle = Omit<Article, never>;
// TODO：为 draft、published、archived 分别填写中文标签，并把 Partial 类型占位改为 satisfies Record<Status, string> 检查是否完整。
const statusLabels: Partial<Record<Status, string>> = {};
function updateArticle(article: Article, patch: ArticlePatch): Article {
  // TODO：不修改 article，把 article 与 patch 合并到一个新 Article 后返回。
  // 当前 return article 会交回原引用，只是临时占位，完成时必须替换。
  return article;
}
function toPublicArticle(article: Article): PublicArticle {
  // TODO：在运行时从 article 中分离 summary，只把其余字段组成 PublicArticle 返回。
  // 当前 return article 仍带着 summary，只是可编译占位，不能作为答案。
  return article;
}
const original: Article = { id: 1, title: "旧标题", summary: "内部学习记录", published: false, status: "draft" };
const updated = updateArticle(original, {});
const preview: ArticlePreview = { id: updated.id };
const publicArticle = toPublicArticle(updated);
// TODO：完成派生类型与函数后，通过 preview、publicArticle 和 statusLabels 读取所需值，按题目顺序输出新旧标题、预览、公开字段和状态信息。
