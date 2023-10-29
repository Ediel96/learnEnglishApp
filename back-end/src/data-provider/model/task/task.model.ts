/**
 * Se define la configuracion del modelo de la coleccion coll_agreements
 * @author Hamilton Ediel Acevedo
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { WordModel } from './word.model';

@Schema()
export class TaskModel extends Document {
  @Prop()
  userId: string;

  @Prop()
  title: string;

  @Prop()
  active: boolean;

  @Prop()
  urlGif: string;

  @Prop()
  language: string;

  @Prop()
  content: string;

  @Prop()
  words: WordModel[];
}

export const TaskSchema = SchemaFactory.createForClass(TaskModel);
