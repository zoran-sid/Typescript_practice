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
  return {
    ...profile,
    name: "Ada Lin",
    // 新数组保留旧技能，并在末尾加入新技能。
    skills: [...profile.skills, "TypeScript"],
    // 嵌套对象也要复制，避免修改 profile.preferences。
    preferences: { ...profile.preferences, theme: "dark" },
    // map 每轮都 return 一项；只为 id=2 创建新任务对象。
    tasks: profile.tasks.map((task) =>
      task.id === 2 ? { ...task, done: true } : task,
    ),
  };
}

// 调用关系：original -> updateProfile(original) -> updated，original 保持不变。
const updated = updateProfile(original);
const [firstSkill, ...remainingSkills] = updated.skills;

console.log(`原姓名：${original.name}`);
console.log(`新姓名：${updated.name}`);
console.log(`原主题：${original.preferences.theme}`);
console.log(`新主题：${updated.preferences.theme}`);
console.log(`原技能：${original.skills.join("、")}`);
console.log(`新技能：${updated.skills.join("、")}`);
console.log(`第一项：${firstSkill}`);
console.log(`其余：${remainingSkills.join("、")}`);
console.log(`原状态：${original.tasks.map((task) => task.done).join(",")}`);
console.log(`新状态：${updated.tasks.map((task) => task.done).join(",")}`);
