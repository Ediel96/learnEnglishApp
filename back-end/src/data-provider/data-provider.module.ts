import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from '../common/config/database.config';
import { TaskModel, TaskSchema } from './model/task/task.model';
import { ITaskProvider } from './task.provider';
import { TaskProvider } from './provider/task.provider.impl';
import {
  TranslateDictionaryModel,
  TranslateDictionarySchema,
} from './model/translateDictionary/translateDictionary.model';
import { ITranslateProvider } from './translate.provider';
import { TranslateProvider } from './provider/translate.provider.impl';
import { ICategoryProvider } from './category.provider';
import { CategoryProvider } from './provider/category.provider.impl';
import { CategoryModel, CategorySchema } from './model/category/category.model';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.database, {
      retryAttempts: 3,
      autoCreate: false,
      autoIndex: false,
    }),
    MongooseModule.forFeature([
      { name: TaskModel.name, schema: TaskSchema, collection: 'coll_task' },
      {
        name: CategoryModel.name,
        schema: CategorySchema,
        collection: 'coll_category',
      },
      {
        name: TranslateDictionaryModel.name,
        schema: TranslateDictionarySchema,
        collection: 'coll_translate_dictionary',
      },
    ]),
  ],
  providers: [
    { provide: ITaskProvider, useClass: TaskProvider },
    { provide: ITranslateProvider, useClass: TranslateProvider },
    { provide: ICategoryProvider, useClass: CategoryProvider },
  ],
  exports: [ITaskProvider, ITranslateProvider, ICategoryProvider],
})
export class DataProviderModule {}
