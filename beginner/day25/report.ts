import type { StudyTask, TaskStatus } from "./models.js";

export type TaskReport = {
  counts: Record<TaskStatus, number>;
  totalMinutes: number;
};

export function buildReport(tasks: readonly StudyTask[]): TaskReport {
  const counts: Record<TaskStatus, number> = { todo: 0, doing: 0, done: 0 };
  let totalMinutes = 0;

  for (const task of tasks) {
    counts[task.status] += 1;
    totalMinutes += task.minutes;
  }

  return { counts, totalMinutes };
}
