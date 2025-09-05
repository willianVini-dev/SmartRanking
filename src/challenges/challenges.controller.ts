import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create.challenge.dto';
import { ChallengesService } from './challenges.service';

@Controller('api/v1/challenges')
export class ChallengesController {

  constructor(
    private readonly challengesService: ChallengesService
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createChallengeDto: CreateChallengeDto
  ){
    return this.challengesService.create(createChallengeDto);
  }
}
