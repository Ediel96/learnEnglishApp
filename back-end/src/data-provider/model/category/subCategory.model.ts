import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class SubCategoryModel extends Document {
  @Prop()
  IdTitle: string;

  @Prop()
  title: string;

  @Prop()
  urlGif: string;

  @Prop()
  description: string;
}
