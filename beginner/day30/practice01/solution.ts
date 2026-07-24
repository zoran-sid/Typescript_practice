// 解题结构提示：真实 JS、声明合并和状态归一化的连接点已保留。
import { score } from "../score.js";
interface LessonInfo { title: string; }
interface LessonInfo { minutes: number; }
enum LegacyStatus { Draft, Published }
const ModernStatus = { Draft: "draft", Published: "published" } as const;
type ModernStatus = (typeof ModernStatus)[keyof typeof ModernStatus];
function normalizeStatus(value: LegacyStatus | ModernStatus): ModernStatus {
  // TODO 1：把两个旧枚举成员和两个现代字面量归一化到 ModernStatus。
  return ModernStatus.Draft;
}
const result: number = score([10, 20, 30]);
const lesson: LessonInfo = { title: "Declarations", minutes: 35 };
console.log(`Score: ${result}`);
console.log(`${lesson.title}: ${lesson.minutes} minutes`);
console.log(`Legacy: ${normalizeStatus(LegacyStatus.Published)}`);
console.log(`Modern: ${normalizeStatus(ModernStatus.Draft)}`);
