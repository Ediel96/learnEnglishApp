import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { DefinitionModel } from './Definition.model';

export type TaskDocument = HydratedDocument<TranslateDictionaryModel>;

@Schema()
export class TranslateDictionaryModel extends Document {
  @Prop()
  word: string;

  @Prop()
  wordT: string[];

  @Prop()
  partOfSpeech: string;

  @Prop()
  typeLanguage: string;

  @Prop()
  audio: string;

  @Prop()
  definitions: DefinitionModel[];

  @Prop()
  synonyms: string[];

  @Prop()
  antonyms: string[];
}

export const TranslateDictionarySchema = SchemaFactory.createForClass(
  TranslateDictionaryModel,
);
