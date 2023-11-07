import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { ITaskServices } from './service/task.service';
import { TaskService } from './service/impl/task.service.impl';
import { CoreModule } from 'src/core/core.module';
import { ContentTranslateController } from './contentTranslate.controller';
import { IContentTranslateService } from './service/contentTranslate.service';
import { ContentTranslateService } from './service/impl/contentTranslate.service.impl';

@Module({
  imports: [CoreModule],
  controllers: [TaskController, ContentTranslateController],
  providers: [
    { provide: ITaskServices, useClass: TaskService },
    { provide: IContentTranslateService, useClass: ContentTranslateService },
  ],
})
export class ControllerModule {}
