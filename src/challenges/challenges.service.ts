import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create.challenge.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Challenge } from './interface/challenge.interface';
import { Model } from 'mongoose';

@Injectable()
export class ChallengesService {

  constructor(
    @InjectModel('Challenges') private readonly categoryModel: Model<Challenge>
  ) {}


  async create(data:CreateChallengeDto):Promise<void>{
    
  }
}
