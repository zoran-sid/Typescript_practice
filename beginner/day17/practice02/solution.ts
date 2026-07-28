// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
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
// TODO：MemberCard 应从 Member 挑出 name 与 role；当前只有 name 是未完成占位。
type MemberCard = Pick<Member, "name">;
// TODO：为三个角色填写题面给定的动作数组，并把 Partial 占位改为
// satisfies Record<Role, readonly Action[]>，让缺角色或错动作在编译期暴露。
const permissions: Partial<Record<Role, readonly Action[]>> = {};
function can(role: Role, action: Action): boolean {
  // TODO：读取当前 role 的允许动作，逐项比较 action；找到时返回 true，遍历结束仍未找到则返回 false。
  // 下面固定 false 会拒绝所有动作，只是占位。
  return false;
}
const member: Member = {
  id: 1,
  name: "Ada",
  email: "ada@example.com",
  role: "editor",
};
const card: MemberCard = { name: member.name };
// TODO：完成 MemberCard 与权限表后，分别调用 can 检查 viewer-edit、editor-close、admin-close；
// 最后一行从 card 读取 name 与 role。不要把四行结果直接写死。
