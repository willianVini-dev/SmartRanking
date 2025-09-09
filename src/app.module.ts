import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengesModule } from './challenges/challenges.module';


@Module({
  imports: [PlayersModule, CategoriesModule, MongooseModule.forRoot('mongodb://localhost:27017/smartranking'), ChallengesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
