import { Injectable } from '@nestjs/common';
import { ITaskUC } from '../task.uc';
import { ITaskProvider } from 'src/data-provider/task.provider';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';
import { UpdateTaskDto } from 'src/controller/dto/task/update-task.dto';
import { Task } from 'src/core/entity/task';
import { IWordList } from 'src/core/shared/logic/wordList';

@Injectable()
export class TaskUCImpl implements ITaskUC {
  constructor(
    private readonly _taskProvider: ITaskProvider,
    private readonly _wordList: IWordList,
  ) {}

  getTask(): Promise<any> {
    return this._taskProvider.getTask();
  }

  async saveTask(createTask: CreateTaskDto): Promise<any> {
    return await this._taskProvider.create(createTask);
  }

  async updateTask(id: string, updateTask: UpdateTaskDto): Promise<any> {
    const nowTask: Task = await this.findById(updateTask.userId);

    const wordList = this._wordList.extractWordsFromTexts([updateTask.content]);

    console.log(wordList);

    if (!nowTask) {
      return {
        sucess: false,
        message: 'Task not found',
        data: null,
      };
    }

    return await this._taskProvider.update(id, updateTask);
  }

  async deleteTask(id: string): Promise<any> {
    return await this._taskProvider.deleteById(id);
  }

  async findById(id: string): Promise<any> {
    try {
      console.log('id', id);

      const task = await this._taskProvider.findById(id);

      if (!task) {
        return {
          sucess: false,
          message: 'Task not found',
          data: null,
        };
      }

      return {
        sucess: true,
        message: 'Task found',
        data: task,
      };
    } catch (error) {
      return error;
    }
  }
}
