import { Module } from '@nestjs/common';
import { IWordList } from './logic/wordList';
import { WordListImpl } from './logic/impl/wordList.impl';
import { IGetResponseService } from './http/getResponse.service';
import { GetResponseServiceImpl } from './http/impl/getResponse.service.impl';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 50000,
      maxRedirects: 5,
    }),
  ],
  controllers: [],
  providers: [
    { provide: IWordList, useClass: WordListImpl },
    { provide: IGetResponseService, useClass: GetResponseServiceImpl },
  ],
  exports: [IWordList, IGetResponseService],
})
export class SharedModule {}
