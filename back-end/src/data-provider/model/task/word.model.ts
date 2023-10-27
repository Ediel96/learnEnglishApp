import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class WordModel extends Document {
  @Prop()
  word: string;

  @Prop()
  wordT: string;
}
