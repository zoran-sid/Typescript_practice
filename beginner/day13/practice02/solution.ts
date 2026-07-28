// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
type Profile = {
  name: string;
  skills: string[];
  preferences: { theme: "light" | "dark" };
};
const original: Profile = {
  name: "Ada",
  skills: ["HTML"],
  preferences: { theme: "light" },
};
function createUpdatedProfile(profile: Profile): Profile {
  // TODO：不要修改 profile；新建外层对象，新 skills 数组在末尾加入 TypeScript，新 preferences 对象把 theme 改为 dark。
  // 直接 return profile 只是可编译占位，它没有创建任何新容器；完成时要替换。
  return profile;
}
const updated = createUpdatedProfile(original);
const [firstSkill, ...otherSkills] = updated.skills;
// TODO：从 original 与 updated 分别读取主题和技能，再输出 firstSkill 与 otherSkills，按题目顺序展示六行对照结果。
