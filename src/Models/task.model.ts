import { TaskStatus } from './taskStatus.enum';

export type Task = {
  Id: number;
  userId: number;
  Description: string;
  CreatedDate: Date ;
  UpdatedDate: Date | null;
  CompletedDate: Date | null;
  Status: TaskStatus;
};
