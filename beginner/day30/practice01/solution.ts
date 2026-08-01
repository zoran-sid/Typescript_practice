import { score } from "../score.js";

interface LessonInfo { title: string; }
interface LessonInfo { minutes: number; }
enum LegacyStatus { Draft, Published }
const ModernStatus = { Draft: "draft", Published: "published" } as const;
type ModernStatus = (typeof ModernStatus)[keyof typeof ModernStatus];

function normalizeStatus(value: LegacyStatus | ModernStatus): ModernStatus {
  if (value === LegacyStatus.Draft || value === ModernStatus.Draft) return ModernStatus.Draft;
  return ModernStatus.Published;
}

// 调用关系：固定分数数组 -> 声明文件描述的 score -> result -> 输出。
const result: number = score([10, 20, 30]);

// 调用关系：两段同名接口先合并 -> 同一个 lesson 必须同时提供 title 和 minutes -> 输出。
const lesson: LessonInfo = { title: "Declarations", minutes: 35 };
console.log(`Score: ${result}`);
console.log(`${lesson.title}: ${lesson.minutes} minutes`);

// 调用关系：旧/新状态 -> normalizeStatus -> 统一的现代状态字符串 -> 输出。
console.log(`Legacy: ${normalizeStatus(LegacyStatus.Published)}`);
console.log(`Modern: ${normalizeStatus(ModernStatus.Draft)}`);
