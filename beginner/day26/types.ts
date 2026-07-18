export type StudyTask = {
  readonly id: string;
  title: string;
  minutes: number;
  status: "todo" | "doing" | "done";
};

export type LoadState =
  | { status: "loading" }
  | { status: "success"; tasks: StudyTask[]; totalMinutes: number }
  | { status: "failure"; message: string };
