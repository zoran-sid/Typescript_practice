const roles = ["viewer", "editor", "admin"] as const;
type Role = (typeof roles)[number];
const actions = ["read", "edit", "close"] as const;
type Action = (typeof actions)[number];

type Member = {
  readonly id: number;
  name: string;
  email: string;
  role: Role;
};

type MemberCard = Pick<Member, "name" | "role">;

const permissions = {
  viewer: ["read"],
  editor: ["read", "edit"],
  admin: ["read", "edit", "close"],
} satisfies Record<Role, readonly Action[]>;

function can(role: Role, action: Action): boolean {
  for (const allowedAction of permissions[role]) {
    if (allowedAction === action) {
      // 找到匹配动作后立即交回 true，不必继续循环。
      return true;
    }
  }
  return false;
}

const member: Member = {
  id: 1,
  name: "Ada",
  email: "ada@example.com",
  role: "editor",
};
const card: MemberCard = { name: member.name, role: member.role };

// 调用关系：三组 role + action -> can -> 三个权限判断结果。
const viewerCanEdit = can("viewer", "edit");
const editorCanClose = can("editor", "close");
const adminCanClose = can("admin", "close");

console.log(`viewer 可编辑：${viewerCanEdit}`);
console.log(`editor 可关闭：${editorCanClose}`);
console.log(`admin 可关闭：${adminCanClose}`);
console.log(`成员：${card.name} / ${card.role}`);
