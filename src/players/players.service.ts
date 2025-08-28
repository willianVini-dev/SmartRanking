import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player, PlayerDocument } from './interface/players.schema';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);

  constructor(
    @InjectModel(Player.name) private readonly playerModel: Model<PlayerDocument>,
  ) {}

  /**
   * Atualiza se existir ou cria um player novo
   */
  async updateAndCreate(createPlayerDto: CreatePlayerDto): Promise<PlayerDocument> {
    const player = await this.playerModel.findOneAndUpdate(
      { email: createPlayerDto.email },        
      { ...createPlayerDto },                  
      { upsert: true, new: true }              
    ).exec();
    this.logger.log(`Player created or updated: ${player.name}`);
    return player;
  }

  /**
   * Busca todos os players
   */
  async findAll(): Promise<PlayerDocument[]> {
    const players = await this.playerModel.find().exec();
    this.logger.log(`Fetching all players: ${players.length}`);
    return players;
  }

  /**
   * Busca um player pelo email
   */
  async findOne(email: string): Promise<PlayerDocument | null> {
    const player = await this.playerModel.findOne({ email }).exec();
    this.logger.log(`Fetching player with email: ${email}`);
    return player;
  }

  /**
   * Deleta um player pelo email
   */
  async delete(email: string): Promise<void> {
    const result = await this.playerModel.deleteOne({ email }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Player with email ${email} not found`);
    }
    this.logger.warn(`Player with email ${email} deleted.`);
  }
}