import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interface/category.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UpdateCategoryDto } from './dto/update-category-dto';
import { PlayersService } from 'src/players/players.service';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly playersService:PlayersService,
    @InjectModel('Category') private readonly categoryModel: Model<Category>
  ) { }

  async create(data: CreateCategoryDto): Promise<Category> {

    const existsCategory = await this.categoryModel.findOne({ category: data.category }).exec();
    if (existsCategory)
      throw new BadRequestException(`Category ${data.category} already exists.`);


    const createdCategory = new this.categoryModel(data);
    return await createdCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find().populate('players').exec();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category)
      throw new BadRequestException(`Category #${id} not found.`);
    return category;
  }

  async update(id: string, data: UpdateCategoryDto): Promise<void> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category)
      throw new BadRequestException(`Category #${id} not found.`);
    await this.categoryModel.findByIdAndUpdate(id, { $set: data }).exec();
  }

  async addPlayerInCategory(category: string, playerId: string): Promise<void> {

    const playerObjectId = new Types.ObjectId(playerId);

    const categoryExists = await this.categoryModel.findOne({ _id:category }).exec();
    if (!categoryExists)
      throw new BadRequestException(`Category ${category} not found.`);

    const playerExists = await this.playersService.findById(playerId);
    if (!playerExists)
      throw new BadRequestException(`Player ${playerId} not found.`);


    const playerAlreadyInCategory = categoryExists.players.some(p=> p.equals(playerObjectId));
    if (playerAlreadyInCategory)
      throw new BadRequestException(`Player ${playerId} already in category ${category}.`);   

    categoryExists.players.push(playerObjectId);
    await this.categoryModel.findByIdAndUpdate(categoryExists._id, { $set: categoryExists }).exec();    
  }

  async findCategoryByPlayer(playerId: string): Promise<Category> {
    const playerObjectId = new Types.ObjectId(playerId);   
    return await this.categoryModel.findOne({ players: playerObjectId }).exec();
  }
}
