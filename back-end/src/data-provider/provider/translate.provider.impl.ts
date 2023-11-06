import { Injectable } from '@nestjs/common';
import { ITranslateProvider } from '../translate.provider';
import { ResponseTranslate } from 'src/core/shared/entity/wordTranslate.entity';
import { InjectModel } from '@nestjs/mongoose';
import { TranslateDictionaryModel } from '../model/translateDictionary/translateDictionary.model';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class TranslateProvider implements ITranslateProvider {
  constructor(
    @InjectModel(TranslateDictionaryModel.name)
    private readonly _translateDictionary: Model<TranslateDictionaryModel>,
  ) {}

  async getTranslateBydWord(
    word: string,
    typeLanguage: string = 'en-es',
  ): Promise<TranslateDictionaryModel> {
    return await this._translateDictionary.findOne({
      word: word,
      typeLanguage: typeLanguage,
    });
  }

  async saveTranslate(
    wordT: ResponseTranslate,
  ): Promise<TranslateDictionaryModel> {
    return await this._translateDictionary.create(wordT);
  }

  async updateTranslate(
    id: string,
    wordT: ResponseTranslate,
  ): Promise<TranslateDictionaryModel> {
    const idObject = new mongoose.Types.ObjectId(id);
    return await this._translateDictionary.findByIdAndUpdate(idObject, wordT, {
      new: true,
    });
  }
}
