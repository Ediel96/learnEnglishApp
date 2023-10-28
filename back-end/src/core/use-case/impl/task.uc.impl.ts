import { Injectable } from '@nestjs/common';
import { ITaskUC } from '../task.uc';
import { ITaskProvider } from 'src/data-provider/task.provider';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';
import { UpdateTaskDto } from 'src/controller/dto/task/update-task.dto';
import { Task } from 'src/core/entity/task';

@Injectable()
export class TaskUCImpl implements ITaskUC {
  constructor(private readonly _taskProvider: ITaskProvider) {}

  getTask(): Promise<any> {
    return this._taskProvider.getTask();
  }

  async saveTask(createTask: CreateTaskDto): Promise<any> {
    return await this._taskProvider.create(createTask);
  }

  async updateTask(updateTask: UpdateTaskDto): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const nowTask: Task = await this.findById(updateTask.userId);
    updateTask.words = nowTask.words;
    return await this._taskProvider.update(updateTask._id, updateTask);
  }

  async deleteTask(id: string): Promise<any> {
    return await this._taskProvider.deleteById(id);
  }

  async findById(id: string): Promise<any> {
    return await this._taskProvider.findById(id);
  }
}
