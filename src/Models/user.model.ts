import { Task } from "./task.model";

export type User = 
{
  Id: number;
    Name: string;
    Tasks: any[];
    Password: string;
    IsActive: boolean;
};