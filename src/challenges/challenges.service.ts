import { Injectable } from '@nestjs/common';
import { CreateChallengerDto } from './dto/create.challenger.dto';

@Injectable()
export class ChallengesService {


  async create(data:CreateChallengerDto):Promise<void>{
    return;
  }
}
