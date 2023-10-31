import { Module } from '@nestjs/common';
import { IWordList } from './logic/wordList';
import { WordListImpl } from './logic/impl/wordList.impl';
import { IGetResponseService } from './http/getResponse.service';
import { GetResponseServiceImpl } from './http/impl/getResponse.service.impl';

@Module({
  imports: [],
  controllers: [],
  providers: [
    { provide: IWordList, useClass: WordListImpl },
    { provide: IGetResponseService, useClass: GetResponseServiceImpl },
  ],
  exports: [IWordList, IGetResponseService],
})
export class SharedModule {}
