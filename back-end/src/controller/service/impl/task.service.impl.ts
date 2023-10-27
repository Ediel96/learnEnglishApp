import { Injectable } from '@nestjs/common';
import { ITaskServices } from '../task.service';

@Injectable()
export class TaskService implements ITaskServices {
  constructor() {}

  getTask() {
    return 'getTask';
  }
}
