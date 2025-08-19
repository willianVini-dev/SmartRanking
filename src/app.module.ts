import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [PlayersModule, CategoriesModule, MongooseModule.forRoot('mongodb://localhost:27017/smartranking')],
  controllers: [],
  providers: [],
})
export class AppModule {}
