import { ArrayMaxSize, ArrayMinSize, IsArray,IsDateString, IsNotEmpty } from "class-validator";
import { Player } from "src/players/interface/players.interface";

export class CreateChallengeDto {
  @IsNotEmpty()
  @IsDateString()
  readonly dateHour: Date;

  @IsNotEmpty()
  request: Player

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  players: Array<Player>;
}