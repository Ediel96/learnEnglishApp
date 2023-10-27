import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from '../common/config/database.config';
import { TaskModel, TaskSchema } from './model/task/task.model';
import { ITaskProvider } from './task.provider';
import { TaskProvider } from './provider/task.provider.impl';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.database, {
      retryAttempts: 3,
      autoCreate: false,
      autoIndex: false,
    }),
    MongooseModule.forFeature([
      { name: TaskModel.name, schema: TaskSchema, collection: 'coll_task' },
    ]),
  ],
  providers: [{ provide: ITaskProvider, useClass: TaskProvider }],
  exports: [ITaskProvider],
})
export class DataProviderModule {}
