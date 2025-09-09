import { CategoriesService } from './../categories/categories.service';
import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create.challenge.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Challenge } from './interface/challenge.interface';
import { Model } from 'mongoose';
import { PlayersService } from 'src/players/players.service';
import { ChallengeStatus } from './enum/challenge-status.enum';

@Injectable()
export class ChallengesService {

  constructor(
    @InjectModel('Challenge') private readonly challengeModel: Model<Challenge>,
    private readonly playerService: PlayersService,
    private readonly CategoriesService: CategoriesService,
  ) {}


  async create(data:CreateChallengeDto):Promise<void>{

    for(const player of data.players){
      const existsPlayer = await this.playerService.findById(String(player._id));
      if(!existsPlayer)
        throw new Error(`Player with id ${player._id} not found`);
    }

    const requestPlayer = data.players.find(player => player._id === data.request._id);
    if(!requestPlayer)
      throw new Error(`Request player must be one of the players in the challenge`);

    const category = await this.CategoriesService.findCategoryByPlayer(String(data.request._id));
    if(!category)
      throw new Error(`Category for player ${data.request._id} not found`);

    let dataChallenge = {
      ...data,
      status: ChallengeStatus.PENDING,
      category: category.description,
      dateHourRequest: new Date(),
      dateHourResponse: null,

    }

    await this.challengeModel.create(dataChallenge);
    
  }
}
