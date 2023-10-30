import { Injectable } from '@nestjs/common';
import { ITaskProvider } from '../task.provider';
import { InjectModel } from '@nestjs/mongoose';
import { TaskModel } from '../model/task/task.model';
import mongoose, { Model } from 'mongoose';
import { Task } from 'src/core/entity/task';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';

@Injectable()
export class TaskProvider implements ITaskProvider {
  constructor(
    @InjectModel(TaskModel.name)
    private readonly _taskModel: Model<TaskModel>,
  ) {}

  getTask(): Promise<any> {
    return this._taskModel.find();
  }

  async create(taskNew: CreateTaskDto): Promise<TaskModel> {
    const newTask = new this._taskModel(taskNew);
    return await newTask.save();
  }

  async update(id: string, updateTask: Task): Promise<TaskModel> {
    const idTask = new mongoose.Types.ObjectId(id);
    return this._taskModel.findByIdAndUpdate(idTask, updateTask, { new: true });
  }

  async findById(id: string): Promise<TaskModel> {
    const idTask = new mongoose.Types.ObjectId(id);
    return await this._taskModel.findById(idTask).exec();
  }

  async deleteById(id: string): Promise<TaskModel> {
    const idTask = new mongoose.Types.ObjectId(id);
    return this._taskModel.findByIdAndDelete(idTask);
  }
}
