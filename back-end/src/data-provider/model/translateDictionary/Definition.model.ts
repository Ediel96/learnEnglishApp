import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class DefinitionModel extends Document {
  @Prop()
  definition: string;

  @Prop()
  example: string;
}
