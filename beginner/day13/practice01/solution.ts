// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
type Profile = {
  readonly id: number;
  name: string;
  skills: readonly string[];
  preferences: { theme: "light" | "dark"; notifications: boolean };
  tasks: readonly { id: number; title: string; done: boolean }[];
};
const original: Profile = {
  id: 1,
  name: "Ada",
  skills: ["HTML", "CSS"],
  preferences: { theme: "light", notifications: true },
  tasks: [
    { id: 1, title: "复习变量", done: false },
    { id: 2, title: "练习对象", done: false },
  ],
};
function updateProfile(profile: Profile): Profile {
  // TODO：不要修改 profile。沿发生变化的路径逐层创建新容器。
  return profile;
}
const updated = updateProfile(original);
const [firstSkill, ...remainingSkills] = updated.skills;
// TODO：输出 original 与 updated，证明旧对象没有被污染。
