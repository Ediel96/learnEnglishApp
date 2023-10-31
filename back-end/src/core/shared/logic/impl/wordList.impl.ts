import { Injectable } from '@nestjs/common';
import { IWordList } from '../wordList';

@Injectable()
export class WordListImpl implements IWordList {
  extractWordsFromTexts(texts: string[]): string[] {
    const allTexts = texts.join(' '); // Concatena todos los textos en uno solo
    const words = allTexts.match(/\b\w+\b/g) || []; // Utiliza una expresión regular para encontrar palabras en el texto
    // Utiliza un Set para almacenar las palabras únicas
    const uniqueWords = new Set<string>(words);

    // Convierte el Set de palabras únicas de nuevo a un arreglo
    return Array.from(uniqueWords);
  }
}
