import { Injectable } from '@nestjs/common';
import { IGetResponseService } from '../getResponse.service';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class GetResponseServiceImpl implements IGetResponseService {
  constructor(private readonly httpService: HttpService) {}

  async getWordTraslete(
    word: string,
    lengNow: string,
    lengAfter: string,
  ): Promise<any> {
    return await this.httpService.get(
      `https://api.mymemory.translated.net/get?q=${word}!&langpair=${lengNow}|${lengAfter}`,
    );
  }

  async translateToEnglish(
    word: string,
    lengNow: string,
    lengAfter: string,
  ): Promise<any> {
    const url = `https://api.mymemory.translated.net/get?q=${word}!&langpair=${lengNow}|${lengAfter}`;

    try {
      const response = await axios.get(url);
      const translatedText = response.data.responseData.translatedText;
      return translatedText;
    } catch (error) {
      throw new Error('No se pudo realizar la traducción.');
    }
  }
}
