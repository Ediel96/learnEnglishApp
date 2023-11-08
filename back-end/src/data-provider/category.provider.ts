import { Injectable } from '@nestjs/common';
import { CategoryModel } from './model/category/category.model';

@Injectable()
export abstract class ICategoryProvider {
  abstract getCategory(): Promise<CategoryModel[]>;

  abstract create(category: any): Promise<CategoryModel>;

  abstract update(id: string, category: any): Promise<CategoryModel>;
}
