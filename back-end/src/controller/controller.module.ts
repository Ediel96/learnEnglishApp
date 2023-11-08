import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { ITaskServices } from './service/task.service';
import { TaskService } from './service/impl/task.service.impl';
import { CoreModule } from 'src/core/core.module';
import { CategoryController } from './category.controller';
import { ICategoryService } from './service/category.service';
import { CategoryService } from './service/impl/category.service.impl';

@Module({
  imports: [CoreModule],
  controllers: [TaskController, CategoryController],
  providers: [
    { provide: ITaskServices, useClass: TaskService },
    { provide: ICategoryService, useClass: CategoryService },
  ],
})
export class ControllerModule {}
