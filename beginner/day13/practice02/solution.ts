// 解题结构提示：本文件不是完整答案，请沿 TODO 自己补全。
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
  // TODO：用 spread 创建新外层对象、新 skills 数组和新 preferences 对象。
  // 直接返回 profile 只是可编译占位，不是题目答案。
  return profile;
}
const updated = createUpdatedProfile(original);
const [firstSkill, ...otherSkills] = updated.skills;
// TODO：输出新旧主题、技能以及解构结果。
