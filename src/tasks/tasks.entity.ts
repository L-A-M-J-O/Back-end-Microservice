export enum TaskStatus {
  PEDING = "PEDING",
  IN_PROCESS = "IN_PROCESS",
  DONE = "DONE"
}
export class Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}
