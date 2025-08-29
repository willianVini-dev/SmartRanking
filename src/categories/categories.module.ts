import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './interface/category.schema';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports:[MongooseModule.forFeature([{name:'Category', schema:CategorySchema}])]
})
export class CategoriesModule {}
