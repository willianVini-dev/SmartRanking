import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';
import { PlayersValidadtionParametersPipe } from './pipes/players-validation-parameters.pipe';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async updateAndCreate(@Body() createPlayerDto: CreatePlayerDto){
    return this.playersService.updateAndCreate(createPlayerDto);
  }

  @Get()
  async findAll() {
    return this.playersService.findAll();
  }

  @Get('/:email')
  async findOne(@Param('email',PlayersValidadtionParametersPipe) email: string) {
    return this.playersService.findOne(email);
  }

  @Delete('/:email')
  async delete(@Param('email', PlayersValidadtionParametersPipe) email: string) {
    return this.playersService.delete(email);
  }
}
