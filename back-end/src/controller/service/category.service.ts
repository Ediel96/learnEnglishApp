import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/category/create-category.dto';
import { UpdateCategoryDto } from '../dto/category/update-category.dto';

@Injectable()
export abstract class ICategoryService {
  abstract getCategory(): any;

  abstract saveCategory(saveCategory: CreateCategoryDto): any;

  abstract updateCategory(id: string, updateCategory: UpdateCategoryDto): any;
}
