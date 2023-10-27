import { Module } from '@nestjs/common';
import { DataProviderModule } from 'src/data-provider/data-provider.module';
import { ITaskUC } from './use-case/task.uc';
import { TaskUCImpl } from './use-case/impl/task.uc.impl';

@Module({
  imports: [DataProviderModule],
  controllers: [],
  providers: [{ provide: ITaskUC, useClass: TaskUCImpl }],
  exports: [ITaskUC],
})
export class CoreModule {}
