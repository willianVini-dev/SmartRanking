import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async updateAndCreate(@Body() createPlayerDto: CreatePlayerDto){
    return this.playersService.updateAndCreate(createPlayerDto);
  }

  @Get()
  async findAll() {
    return this.playersService.findAll();
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    return this.playersService.findOne(email);
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    return this.playersService.delete(email);
  }
}
