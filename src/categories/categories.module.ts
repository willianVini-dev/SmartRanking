import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './interface/category.schema';
import { PlayersModule } from 'src/players/players.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports:[MongooseModule.forFeature([{name:'Category', schema:CategorySchema}]), PlayersModule],
  exports:[CategoriesService]
})
export class CategoriesModule {}
