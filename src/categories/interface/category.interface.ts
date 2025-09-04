import { Document, Types } from 'mongoose';
import { Player } from 'src/players/interface/players.schema';

export interface Category  extends Document{
  readonly category: string;
  description: string;
  events: Array<Events>
  players: Types.ObjectId[]
}


export interface Events {
  name: string;
  operation: string;
  value: number;
}