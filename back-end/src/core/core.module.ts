import { Module } from '@nestjs/common';
import { DataProviderModule } from 'src/data-provider/data-provider.module';
import { ITaskUC } from './use-case/task.uc';
import { TaskUCImpl } from './use-case/impl/task.uc.impl';
import { SharedModule } from './shared/shared.module';
import { IContentTranslateUC } from './use-case/contentTranslate.uc';
import { ContentTranslateUC } from './use-case/impl/contentTranslate.uc.impl';

@Module({
  imports: [DataProviderModule, SharedModule],
  controllers: [],
  providers: [
    { provide: ITaskUC, useClass: TaskUCImpl },
    { provide: IContentTranslateUC, useClass: ContentTranslateUC },
  ],
  exports: [ITaskUC, IContentTranslateUC],
})
export class CoreModule {}
