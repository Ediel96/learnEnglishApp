import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';
import { UpdateTaskDto } from 'src/controller/dto/task/update-task.dto';

@Injectable()
export abstract class ITaskUC {
  abstract getTask(): Promise<any>;

  abstract saveTask(createTask: CreateTaskDto): Promise<any>;

  abstract updateTask(updateTask: UpdateTaskDto): Promise<any>;

  abstract deleteTask(id: string): Promise<any>;

  abstract findById(id: string): Promise<any>;
}
