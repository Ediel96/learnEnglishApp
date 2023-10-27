import { Injectable } from '@nestjs/common';
import { ITaskUC } from '../task.uc';
import { ITaskProvider } from 'src/data-provider/task.provider';

@Injectable()
export class TaskUCImpl implements ITaskUC {
  constructor(private readonly _taskProvider: ITaskProvider) {}

  getTask(): Promise<any> {
    return this._taskProvider.getTask();
  }
}
