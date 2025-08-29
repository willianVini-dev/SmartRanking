import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interface/category.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel:Model<Category>
  ) {}

  async create(data:CreateCategoryDto):Promise<Category>{

    const existsCategory = await this.categoryModel.findOne({ category: data.category }).exec();
    if (existsCategory)
      throw new BadRequestException(`Category ${data.category} already exists.`);

    
    const createdCategory = new this.categoryModel(data);
    return await createdCategory.save();
  }

  async findAll():Promise<Category[]>{
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string):Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    if(!category)
      throw new BadRequestException(`Category #${id} not found.`);    
    return category;
  }
}
