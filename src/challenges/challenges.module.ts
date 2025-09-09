import { ChallengesService } from './challenges.service';
import { Module } from '@nestjs/common';
import { ChallengesController } from './challenges.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengeSchema } from './interface/challenges.schema';
import { PlayersModule } from 'src/players/players.module';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  controllers: [ChallengesController],
  providers: [ChallengesService],
  imports: [MongooseModule.forFeature([{ name: 'Challenge', schema: ChallengeSchema }]),
    PlayersModule,
    CategoriesModule
  ],
})
export class ChallengesModule { }
