import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/controller/dto/category/create-category.dto';
import { UpdateCategoryDto } from 'src/controller/dto/category/update-category.dto';

@Injectable()
export abstract class ICategoryUC {
  abstract getCategory(): Promise<any>;

  abstract saveCategory(createTask: CreateCategoryDto): Promise<any>;

  abstract updateCategory(
    id: string,
    updateTask: UpdateCategoryDto,
  ): Promise<any>;
}
