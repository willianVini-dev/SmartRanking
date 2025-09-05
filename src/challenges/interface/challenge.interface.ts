
import { ChallengeStatus } from "../enum/challenge-status.enum";
import { Player } from "src/players/interface/players.interface";

export interface Challenge extends Document {
  dateHour: Date;
  status: ChallengeStatus;
  dateHourRequest: Date;
  dateHourResponse: Date;
  category: string;
  request:Player
  players: Array<Player>;
  match:Match

}

export interface Match extends Document {
  category: string;
  players: Array<Player>;
  def:Player
  result: Array<Result>;
}

export interface Result {
  set: string;
}