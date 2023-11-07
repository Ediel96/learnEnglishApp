import { Injectable } from '@nestjs/common';
import { ITaskUC } from '../task.uc';
import { ITaskProvider } from 'src/data-provider/task.provider';
import { CreateTaskDto } from 'src/controller/dto/task/create-task.dto';
import { UpdateTaskDto } from 'src/controller/dto/task/update-task.dto';
import { Task, Words } from 'src/core/entity/task';
import { IWordList } from 'src/core/shared/logic/wordList';
import { ITranslateProvider } from 'src/data-provider/translate.provider';
import { ResponseTranslate } from 'src/core/shared/entity/wordTranslate.entity';

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

    const translateWords: ResponseTranslate[] = [];

    const listStringNoExist: string[] = [];

    // no existe informacion de la tarea
    if (!nowTask) {
      return {
        success: false,
        message: 'Task not found',
        data: null,
      };
    }

    //consulta de palabras
    for (const word of wordList) {
      //consulta si ya existe en el diccionario
      let wordT = await this._translateProvider.getTranslateBydWord(word);

      //si no existe se consulta en la api
      if (wordT === null) {
        const response = await this._wordList.translateWordsToEnglish([word]);

        //si existe se guarda en el diccionario
        if (
          response !== undefined &&
          response !== null &&
          response.length > 0
        ) {
          if (
            response[0] !== null &&
            response[0].wordT !== undefined &&
            response[0].wordT.length > 0
          ) {
            wordT = await this._translateProvider.saveTranslate(response[0]);
          } else {
            listStringNoExist.push(word);
          }
        } else {
          listStringNoExist.push(word);
        }
      }

      console.log(listStringNoExist);

      //si existe se agrega a la lista
      if (wordT !== null) translateWords.push(wordT);
    }

    const listWord: Words[] = [];
    //actualizar las traducciones
    for (const word of translateWords) {
      const wordNow: Words = {
        word: word.word,
        wordT: word.wordT,
      };
      listWord.push(wordNow);
    }

    //actualizar tarea
    updateTask.words = listWord;

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
