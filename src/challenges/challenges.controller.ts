import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CreateChallengerDto } from './dto/create.challenger.dto';
import { ChallengesService } from './challenges.service';

@Controller('api/v1/challenges')
export class ChallengesController {

  constructor(
    private readonly challengesService: ChallengesService
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createChallengeDto: CreateChallengerDto
  ){
    return this.challengesService.create(createChallengeDto);
  }
}
