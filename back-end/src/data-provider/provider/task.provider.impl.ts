import { Injectable } from '@nestjs/common';
import { ITaskProvider } from '../task.provider';
import { InjectModel } from '@nestjs/mongoose';
import { TaskModel } from '../model/task/task.model';
import { Model } from 'mongoose';

@Injectable()
export class TaskProvider implements ITaskProvider {
  constructor(
    @InjectModel(TaskModel.name)
    private readonly _taskModel: Model<TaskModel>,
  ) {}

  getTask(): Promise<any> {
    return this._taskModel.find();
  }
}
