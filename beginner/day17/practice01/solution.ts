const statuses = ["draft", "published", "archived"] as const;
type Status = (typeof statuses)[number];

type Article = {
  readonly id: number;
  title: string;
  summary: string;
  published: boolean;
  status: Status;
};

type ArticlePatch = Partial<
  Pick<Article, "title" | "summary" | "published" | "status">
>;
type ArticlePreview = Pick<Article, "id" | "title" | "status">;
type PublicArticle = Omit<Article, "summary">;

const statusLabels = {
  draft: "草稿",
  published: "已发布",
  archived: "已归档",
} satisfies Record<Status, string>;

function updateArticle(article: Article, patch: ArticlePatch): Article {
  return { ...article, ...patch };
}

function toPublicArticle(article: Article): PublicArticle {
  // Omit 只改类型；解构 rest 才会在运行时真正排除 summary。
  const { summary: _summary, ...publicArticle } = article;
  return publicArticle;
}

const original: Article = {
  id: 1,
  title: "旧标题",
  summary: "内部学习记录",
  published: false,
  status: "draft",
};
const patch: ArticlePatch = {
  title: "TypeScript 工具类型",
  published: true,
  status: "published",
};

// 调用关系：original + patch -> updateArticle -> updated。
const updated = updateArticle(original, patch);
const preview: ArticlePreview = {
  id: updated.id,
  title: updated.title,
  status: updated.status,
};
// 调用关系：updated -> toPublicArticle -> 不含 summary 的 publicArticle。
const publicArticle = toPublicArticle(updated);

console.log(`原标题：${original.title}`);
console.log(`新标题：${preview.title}`);
console.log(`原状态：${original.status}`);
console.log(`新状态：${preview.status}=${statusLabels[preview.status]}`);
console.log(`公开字段：${Object.keys(publicArticle).join(",")}`);
console.log(`可用状态：${statuses.join("、")}`);
