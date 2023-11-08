import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { SubCategoryModel } from './subCategory.model';

export type TaskDocument = HydratedDocument<CategoryModel>;

@Schema()
export class CategoryModel extends Document {
  @Prop()
  userId: string;

  @Prop()
  IdTitle: string;

  @Prop()
  title: string;

  @Prop()
  active: boolean;

  @Prop()
  urlGif: string;

  @Prop()
  description: string;

  @Prop()
  subCategory: SubCategoryModel[];
}

export const CategorySchema = SchemaFactory.createForClass(CategoryModel);
