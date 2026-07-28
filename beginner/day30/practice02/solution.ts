// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
import * as legacyScore from "../legacy-score.js";
import { LegacyUser } from "../legacy-user.js";

declare module "../legacy-user.js" {
  interface LegacyUser {
    // TODO 1：去掉临时可选标记，声明实例一定具有 label(): string。
    // 这只扩充类型，不会修改 legacy-user.js 的原型。
    label?(): string;
  }
}

const beforePatch = typeof LegacyUser.prototype.label;

// TODO 2：给 LegacyUser.prototype.label 安装普通函数，使用实例 this.name，
// 返回“名字 (legacy)”。空字符串只是尚未实现补丁行为的占位结果。
LegacyUser.prototype.label = function (): string {
  return "";
};

const user = new LegacyUser("Ada");
console.log(`Module total: ${legacyScore.total([10, 20, 30])}`);
console.log(`Module version: ${legacyScore.version}`);
console.log(`Before patch: ${beforePatch}`);
console.log(`User label: ${user.label?.() ?? "missing"}`);
