import type { TaskRepository } from "./repository.js";
import type { LoadState, StudyTask } from "./types.js";

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function isStudyTask(value: unknown): value is StudyTask {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.minutes === "number" &&
    Number.isFinite(value.minutes) &&
    value.minutes >= 0 &&
    (value.status === "todo" ||
      value.status === "doing" ||
      value.status === "done")
  );
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Unknown error";
}

export async function loadDashboard(
  repository: TaskRepository,
): Promise<LoadState> {
  try {
    const value = await repository.load();
    if (!Array.isArray(value) || !value.every(isStudyTask)) {
      return { status: "failure", message: "Invalid task data" };
    }

    const totalMinutes = value.reduce((sum, task) => sum + task.minutes, 0);
    return { status: "success", tasks: value, totalMinutes };
  } catch (error: unknown) {
    return { status: "failure", message: getErrorMessage(error) };
  }
}
