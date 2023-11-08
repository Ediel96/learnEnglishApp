import { Type } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  _id?: string;

  @IsString()
  IdTitle: string;

  @IsString()
  title: string;

  @IsString()
  userId: string;

  @IsString()
  urlGif: string;

  @IsBoolean()
  active: boolean;

  @IsString()
  description: string;

  @Type(() => SubCategory)
  subCategory: SubCategory[];
}

export class SubCategory {
  @IsString()
  IdTitle: string;

  @IsString()
  title: string;

  @IsString()
  urlGif: string;

  @IsString()
  description: string;
}
