import { Injectable } from '@nestjs/common';
import { ResponseTranslate } from '../entity/wordTranslate.entity';

@Injectable()
export abstract class IGetResponseService {
  abstract getWordTranslate(
    word: string,
    wordNow?: string,
    wordAfter?: string,
  ): Promise<any>;

  abstract translateToEnglish(word: string): Promise<ResponseTranslate>;
}
