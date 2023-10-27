import { Controller, Get } from '@nestjs/common';
import { ITaskServices } from './service/task.service';

@Controller('task')
export class TaskController {
  constructor(public readonly _serviceTask: ITaskServices) {}

  @Get()
  getTask() {
    return this._serviceTask.getTask();
  }
}
