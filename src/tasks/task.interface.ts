export interface ITask extends Document {
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}
