// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
import { score } from "../score.js";
interface LessonInfo { title: string; }
interface LessonInfo { minutes: number; }
enum LegacyStatus { Draft, Published }
const ModernStatus = { Draft: "draft", Published: "published" } as const;
type ModernStatus = (typeof ModernStatus)[keyof typeof ModernStatus];
function normalizeStatus(value: LegacyStatus | ModernStatus): ModernStatus {
  // TODO 1：检查当前 value：LegacyStatus.Draft/Published 分别转换为现代 draft/published，
  // 已经是 ModernStatus 的值则保持对应含义。下面固定返回 Draft 只是类型安全占位，
  // 当前会把 Published 错误地改成 Draft，完成时要替换为分支逻辑。
  return ModernStatus.Draft;
}
const result: number = score([10, 20, 30]);
const lesson: LessonInfo = { title: "Declarations", minutes: 35 };
console.log(`Score: ${result}`);
console.log(`${lesson.title}: ${lesson.minutes} minutes`);
console.log(`Legacy: ${normalizeStatus(LegacyStatus.Published)}`);
console.log(`Modern: ${normalizeStatus(ModernStatus.Draft)}`);
