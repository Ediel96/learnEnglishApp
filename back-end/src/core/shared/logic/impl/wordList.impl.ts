import { Injectable } from '@nestjs/common';
import { IWordList } from '../wordList';
import { IGetResponseService } from '../../http/getResponse.service';

@Injectable()
export class WordListImpl implements IWordList {
  constructor(private readonly getServices: IGetResponseService) {}

  extractWordsFromTexts(texts: string[]): string[] {
    const allTexts = texts.join(' '); // Concatena todos los textos en uno solo
    const words = allTexts.match(/\b\w+\b/g) || []; // Utiliza una expresión regular para encontrar palabras en el texto
    // Utiliza un Set para almacenar las palabras únicas
    const uniqueWords = new Set<string>(words);

    // Convierte el Set de palabras únicas de nuevo a un arreglo
    return Array.from(uniqueWords);
  }

  /**
   * Traduce una lista de palabras al inglés y devuelve una lista de objetos que contienen la palabra original y su traducción.
   * @param words - Una matriz de cadenas que representan las palabras a traducir.
   * @returns Una promesa que se resuelve en una matriz de objetos que contienen la palabra original y su traducción.
   */
  async translateWordsToEnglish(words: string[]): Promise<any> {
    const translateWords = [];
    for (const word of words) {
      const wordT = await this.getServices.translateToEnglish(word);
      if (wordT !== null) {
        wordT.wordT = await this.getServices.getWordTranslate(word);
      }
      translateWords.push(wordT);
    }
    return translateWords;
  }
}
