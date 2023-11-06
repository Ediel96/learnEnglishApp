import { Injectable } from '@nestjs/common';
import { ITaskUC } from '../task.uc';
import { ITaskProvider } from 'src/data-provider/task.provider';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';
import { UpdateTaskDto } from 'src/controller/dto/task/update-task.dto';
import { Task } from 'src/core/entity/task';
import { IWordList } from 'src/core/shared/logic/wordList';
import { IGetResponseService } from 'src/core/shared/http/getResponse.service';
import { ITranslateProvider } from 'src/data-provider/translate.provider';

@Injectable()
export class TaskUCImpl implements ITaskUC {
  constructor(
    private readonly _taskProvider: ITaskProvider,
    private readonly _wordList: IWordList,
    private readonly _translateProvider: ITranslateProvider,
  ) {}

  getTask(): Promise<any> {
    return this._taskProvider.getTask();
  }

  async saveTask(createTask: CreateTaskDto): Promise<any> {
    return await this._taskProvider.create(createTask);
  }

  async updateTask(id: string, updateTask: UpdateTaskDto): Promise<any> {
    //consultar tarea
    const nowTask: Task = await this.findById(updateTask.userId);
    //extraer palabras de la tarea
    const wordList = this._wordList.extractWordsFromTexts([updateTask.content]);
    //traducir palabras a ingles

    // const translateWords: ResponseTranslate[] = [];

    for (const word of wordList) {
      const wordT = await this._translateProvider.getTranslateBydWord(word);
      if (wordT !== null) {
      } else {
      }

      // translateWords.push(wordT);
    }

    const response = await this._wordList.translateWordsToEnglish(wordList);

    console.log('response', response);

    return response;

    if (!nowTask) {
      return {
        success: false,
        message: 'Task not found',
        data: response,
      };
    }

    return await this._taskProvider.update(id, updateTask);
  }

  async deleteTask(id: string): Promise<any> {
    return await this._taskProvider.deleteById(id);
  }

  async findById(id: string): Promise<any> {
    try {
      const task = await this._taskProvider.findById(id);

      if (!task) {
        return {
          success: false,
          message: 'Task not found',
          data: null,
        };
      }

      return {
        success: true,
        message: 'Task found',
        data: task,
      };
    } catch (error) {
      return error;
    }
  }
}
