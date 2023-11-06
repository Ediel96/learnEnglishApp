import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IWordList {
  abstract extractWordsFromTexts(texts: string[]): string[];

  abstract translateWordsToEnglish(words: string[]): Promise<any>;
}
