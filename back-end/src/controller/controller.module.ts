import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { ITaskServices } from './service/task.service';
import { TaskService } from './service/impl/task.service.impl';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [TaskController],
  providers: [{ provide: ITaskServices, useClass: TaskService }],
})
export class ControllerModule {}
