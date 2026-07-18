export type TaskStatus = "todo" | "doing" | "done";

export type StudyTask = {
  readonly id: string;
  title: string;
  minutes: number;
  status: TaskStatus;
};
