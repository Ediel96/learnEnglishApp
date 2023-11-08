import { Injectable } from '@nestjs/common';
import { ICategoryService } from '../category.service';
import { ICategoryUC } from 'src/core/use-case/category.uc';
import { CreateCategoryDto } from 'src/controller/dto/category/create-category.dto';
import { UpdateCategoryDto } from 'src/controller/dto/category/update-category.dto';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(private readonly _categoryUC: ICategoryUC) {}
  getCategory() {
    return this._categoryUC.getCategory();
  }
  saveCategory(saveCategory: CreateCategoryDto) {
    return this._categoryUC.saveCategory(saveCategory);
  }
  updateCategory(id: string, updateCategory: UpdateCategoryDto) {
    return this._categoryUC.updateCategory(id, updateCategory);
  }
}
