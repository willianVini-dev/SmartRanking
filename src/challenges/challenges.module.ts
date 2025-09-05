import { ChallengesService } from './challenges.service';
import { Module } from '@nestjs/common';
import { ChallengesController } from './challenges.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengeSchema } from './interface/challenges.schema';

@Module({ 
  controllers: [ChallengesController], 
  providers: [ChallengesService],
  imports : [MongooseModule.forFeature([{ name: 'Challenges', schema:ChallengeSchema }])], 
})
export class ChallengesModule { }
