import { Injectable } from '@nestjs/common';
import { ITaskServices } from '../task.service';
import { ITaskUC } from 'src/core/use-case/task.uc';

@Injectable()
export class TaskService implements ITaskServices {
  constructor(private readonly _taskUc: ITaskUC) {}

  getTask() {
    return this._taskUc.getTask();
  }
}
