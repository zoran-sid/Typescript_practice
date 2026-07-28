// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
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
  // TODO：不要修改传入的 profile。创建新外层对象：name 改为 Ada Lin，skills 末尾加入 TypeScript。
  // preferences 需新建内层对象并把 theme 改为 dark；tasks 用 map 只为 id === 2 的任务创建 done: true 的新对象。
  // 当前 return profile 只让结构暂时可编译；它仍是原引用，完成时必须替换为新 Profile。
  return profile;
}
const updated = updateProfile(original);
const [firstSkill, ...remainingSkills] = updated.skills;
// TODO：分别从 original 和 updated 读取姓名、技能、主题与第二项任务状态，并输出 firstSkill、remainingSkills，证明旧对象没有被修改。
