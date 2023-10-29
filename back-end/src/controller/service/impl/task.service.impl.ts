import { Injectable } from '@nestjs/common';
import { ITaskServices } from '../task.service';
import { ITaskUC } from 'src/core/use-case/task.uc';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';
import { UpdateTaskDto } from 'src/controller/dto/task/update-task.dto';

@Injectable()
export class TaskService implements ITaskServices {
  constructor(private readonly _taskUc: ITaskUC) {}

  getTask() {
    return this._taskUc.getTask();
  }

  saveTask(saveTask: CreateTaskDto) {
    return this._taskUc.saveTask(saveTask);
  }

  updateTask(id: string, updateTask: UpdateTaskDto) {
    return this._taskUc.updateTask(id, updateTask);
  }

  findById(id: string) {
    return this._taskUc.findById(id);
  }

  deleteTask(id: string) {
    return this._taskUc.deleteTask(id);
  }
}
