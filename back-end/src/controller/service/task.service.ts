/**
 * Clase abstracion con la definición de operaciones
 * @author Hamilton Ediel Acevedo
 */

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/task/create-task.dto';

@Injectable()
export abstract class ITaskServices {
  /**
   * Consuta tipo de orden
   * @param {String} channel Canal
   */
  abstract getTask(): any;

  abstract saveTask(saveTask: CreateTaskDto): any;

  abstract updateTask(id: string, updateTask: any): any;

  abstract findById(id: string): any;

  abstract deleteTask(id: string): any;
}
