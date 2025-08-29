import { Body, Post, Controller, UsePipes, ValidationPipe, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interface/category.interface';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
  ) { }

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createCategoryDto: CreateCategoryDto
  ): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  async findAll():Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id')id: string):Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  async update(id: string) {
    return `This action updates a #${id} category`;
  }

  async remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
