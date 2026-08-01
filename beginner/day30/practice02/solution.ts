import * as legacyScore from "../legacy-score.js";
import { LegacyUser } from "../legacy-user.js";

declare module "../legacy-user.js" {
  interface LegacyUser {
    label(): string;
  }
}

const beforePatch = typeof LegacyUser.prototype.label;

// 调用关系：模块增强只补类型；这里的原型赋值才安装真实的运行时方法。
LegacyUser.prototype.label = function (): string {
  return `${this.name} (legacy)`;
};

// 调用关系：固定名字 -> new LegacyUser -> 原型上的 label -> 读取 this.name -> 输出。
const user = new LegacyUser("Ada");
console.log(`Module total: ${legacyScore.total([10, 20, 30])}`);
console.log(`Module version: ${legacyScore.version}`);
console.log(`Before patch: ${beforePatch}`);
console.log(`User label: ${user.label()}`);
