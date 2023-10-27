import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { CoreModule } from './core/core.module';
import { DataProviderModule } from './data-provider/data-provider.module';

@Module({
  imports: [ControllerModule, CoreModule, DataProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
