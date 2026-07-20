import { score } from "./score.js";

interface LessonInfo {
  title: string;
}

interface LessonInfo {
  minutes: number;
}

enum LegacyStatus {
  Draft,
  Published,
}

const ModernStatus = {
  Draft: "draft",
  Published: "published",
} as const;
type ModernStatus = (typeof ModernStatus)[keyof typeof ModernStatus];

function normalizeStatus(value: LegacyStatus | ModernStatus): ModernStatus {
  return value === LegacyStatus.Draft || value === ModernStatus.Draft
    ? ModernStatus.Draft
    : ModernStatus.Published;
}

const result: number = score([10, 20, 30]);
const lesson: LessonInfo = { title: "Declarations", minutes: 35 };

console.log(`Score: ${result}`);
console.log(`${lesson.title}: ${lesson.minutes} minutes`);
console.log(`Legacy: ${normalizeStatus(LegacyStatus.Published)}`);
console.log(`Modern: ${normalizeStatus(ModernStatus.Draft)}`);
