import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ITaskServices } from './service/task.service';
import { CreateTaskDto } from './dto/task/create-task.dto';
import { UpdateTaskDto } from './dto/task/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(public readonly _serviceTask: ITaskServices) {}

  @Get()
  getTask() {
    return this._serviceTask.getTask();
  }

  @Post()
  saveTask(@Body() createTask: CreateTaskDto) {
    return this._serviceTask.saveTask(createTask);
  }

  @Put()
  updateTask(@Param() id: string, @Body() updateTask: UpdateTaskDto) {
    return this._serviceTask.updateTask(id, updateTask);
  }

  @Get(':id')
  findById(@Param() id: string) {
    return this._serviceTask.findById(id);
  }

  @Get('/id')
  deleteTask(@Param() id: string) {
    return this._serviceTask.deleteTask(id);
  }
}
