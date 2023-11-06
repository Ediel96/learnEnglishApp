import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class DefinitionModel extends Document {
  @Prop()
  word: string;

  @Prop()
  wordT: string;
}
