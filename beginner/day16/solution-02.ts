type Article = {
  id: number;
  title: string;
};

type User = {
  id: number;
  name: string;
  active: boolean;
};

function formatId<Item extends { id: number }>(
  item: Item,
  prefix: string,
): string {
  return prefix + "#" + item.id;
}

const article: Article = { id: 7, title: "泛型约束" };
const user: User = { id: 42, name: "Ada", active: true };

console.log(formatId(article, "Article"));
console.log(formatId(user, "User"));
