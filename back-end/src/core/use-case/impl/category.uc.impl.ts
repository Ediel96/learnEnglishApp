import { Injectable } from '@nestjs/common';
import { ICategoryUC } from '../category.uc';
import { CreateCategoryDto } from 'src/controller/dto/category/create-category.dto';
import { UpdateCategoryDto } from 'src/controller/dto/category/update-category.dto';
import { ICategoryProvider } from 'src/data-provider/category.provider';

@Injectable()
export class CategoryUC implements ICategoryUC {
  constructor(private readonly _category: ICategoryProvider) {}

  async getCategory(): Promise<any> {
    return await this._category.getCategory();
  }
  async saveCategory(createTask: CreateCategoryDto): Promise<any> {
    return await this._category.create(createTask);
  }
  updateCategory(id: string, updateTask: UpdateCategoryDto): Promise<any> {
    return this._category.update(id, updateTask);
  }
}
