import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IGetResponseService {
  abstract getWordTraslete(
    word: string,
    lengNow: string,
    lengAfter: string,
  ): Promise<any>;

  abstract translateToEnglish(
    word: string,
    lengNow: string,
    lengAfter: string,
  ): Promise<any>;
}
