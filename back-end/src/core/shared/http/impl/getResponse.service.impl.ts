import { Injectable } from '@nestjs/common';
import { IGetResponseService } from '../getResponse.service';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import {
  Definition,
  ResponseTranslate,
} from '../../entity/wordTranslate.entity';

@Injectable()
export class GetResponseServiceImpl implements IGetResponseService {
  constructor(private readonly httpService: HttpService) {}

  async getWordTranslate(
    word: string,
    wordNow: string = 'en',
    wordAfter: string = 'es',
  ): Promise<any> {
    //variables
    const url = `https://api.mymemory.translated.net/get?q=${word}!&langpair=${wordNow}|${wordAfter}`;
    const stringList: string[] = [];

    try {
      const response = await axios.get(url);
      const translatedText = await response.data.matches;
      for (const element of translatedText) {
        if (element !== undefined && element !== null) {
          stringList.push(element.translation);
        }
      }
      return stringList;
    } catch (error) {
      console.log('error', error);
      return null;
    }
  }

  async translateToEnglish(word: string): Promise<ResponseTranslate> {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
      //declaracion de variables
      const definitionList: Definition[] = [];
      const synonymsList: string[] = [];
      const antonymsList: string[] = [];

      //llamada a la api
      const response = await axios.get(url);
      const translatedText = await response.data;
      const responseAudio = translatedText[0].phonetics;
      const responseMeanings = translatedText[0].meanings;
      let audio = responseAudio.find((element) => {
        if (element.audio !== undefined && element.audio !== null) {
          return element.audio.trim() !== '';
        }
      });

      //valida campo audio
      if (audio === undefined) {
        audio = null;
      }

      //valida campo responseMeanings
      if (responseMeanings === undefined) {
        responseMeanings: null;
      }

      //Busca ejemplos y definiciones
      if (responseMeanings !== null) {
        for (const meaning of responseMeanings) {
          const responseDefinitions = meaning.definitions;
          //Busca definiciones
          for (const definitionElement of responseDefinitions) {
            const definitionNow: Definition = {
              definition: definitionElement.definition,
              example: definitionElement.example,
            };
            definitionList.push(definitionNow);
          }

          //Busca sinonimos
          for (const definitionElement of responseDefinitions) {
            const responseSynonyms = definitionElement.synonyms;
            for (const element of responseSynonyms) {
              if (element !== undefined && element !== null)
                synonymsList.push(element);
            }
          }

          //Busca antonimos
          for (const definitionElement of responseDefinitions) {
            const responseAntonyms = definitionElement.antonyms;
            for (const element of responseAntonyms) {
              if (element !== undefined && element !== null)
                antonymsList.push(element);
            }
          }
        }
      }

      const responseTranslate: ResponseTranslate = {
        word: word,
        wordT: null,
        partOfSpeech: translatedText[0].meanings[0].partOfSpeech,
        audio: audio?.audio ?? null,
        definitions: definitionList,
        typeLanguage: null,
        synonyms: synonymsList,
        antonyms: antonymsList,
      };
      return responseTranslate;
    } catch (error) {
      // console.log('error', error);
      return null;
    }
  }
}
