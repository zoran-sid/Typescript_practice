type Profile = {
  name: string;
  skills: string[];
  preferences: {
    theme: "light" | "dark";
  };
};

const original: Profile = {
  name: "Ada",
  skills: ["HTML"],
  preferences: { theme: "light" },
};

const updated: Profile = {
  ...original,
  skills: [...original.skills, "TypeScript"],
  preferences: {
    ...original.preferences,
    theme: "dark",
  },
};

const [firstSkill, ...otherSkills] = updated.skills;

console.log("原主题：" + original.preferences.theme);
console.log("新主题：" + updated.preferences.theme);
console.log("原技能：" + original.skills.join("、"));
console.log("新技能：" + updated.skills.join("、"));
console.log("第一项：" + firstSkill);
console.log("其余：" + otherSkills.join("、"));
