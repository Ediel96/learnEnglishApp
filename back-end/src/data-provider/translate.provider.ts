import { Injectable } from '@nestjs/common';
import { ResponseTranslate } from 'src/core/shared/entity/wordTranslate.entity';
import { TranslateDictionaryModel } from './model/translateDictionary/translateDictionary.model';

@Injectable()
export abstract class ITranslateProvider {
  abstract getTranslateBydWord(
    word: string,
    typeLanguage?: string,
  ): Promise<TranslateDictionaryModel>;

  abstract saveTranslate(
    wordT: ResponseTranslate,
  ): Promise<TranslateDictionaryModel>;

  abstract updateTranslate(
    id: string,
    wordT: ResponseTranslate,
  ): Promise<TranslateDictionaryModel>;
}
