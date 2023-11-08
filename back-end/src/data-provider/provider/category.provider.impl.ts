import { Injectable } from '@nestjs/common';
import { ICategoryProvider } from '../category.provider';
import { CategoryModel } from '../model/category/category.model';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CategoryProvider implements ICategoryProvider {
  constructor(
    @InjectModel(CategoryModel.name)
    private readonly _categoryModel: Model<CategoryModel>,
  ) {}

  getCategory(): Promise<CategoryModel[]> {
    return this._categoryModel.find();
  }

  create(category: any): Promise<CategoryModel> {
    return this._categoryModel.create(category);
  }

  update(id: string, category: any): Promise<CategoryModel> {
    const idTask = new mongoose.Types.ObjectId(id);
    return this._categoryModel.findByIdAndUpdate(idTask, category, {
      new: true,
    });
  }
}
