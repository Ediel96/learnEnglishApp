import { Injectable } from '@nestjs/common';
import { TaskModel } from './model/task/task.model';
import { Task } from 'src/core/entity/task';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';

@Injectable()
export abstract class ITaskProvider {
  /**
   * Consultar task
   */
  abstract getTask(): Promise<TaskModel[]>;

  abstract create(Task: CreateTaskDto): Promise<TaskModel>;

  abstract update(id: string, Task: Task): Promise<TaskModel>;

  abstract findById(id: string): Promise<TaskModel>;

  abstract deleteById(id: string): Promise<TaskModel>;
}
