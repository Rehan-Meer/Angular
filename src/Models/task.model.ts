import { TaskStatus } from './taskStatus.enum';

export type Task = {
  Id: number;
  userId: number;
  Description: string;
  CreatedDate: Date;
  UpdatedDate: Date;
  CompletedDate: Date;
  Status: TaskStatus;
};
