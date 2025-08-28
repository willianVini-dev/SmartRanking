import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlayerDocument = Player & Document;

@Schema({
  collection: 'player',
  timestamps: true, // cria createdAt e updatedAt automaticamente
})
export class Player {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ranking: string;

  @Prop({ required: true })
  positionRanking: number;

  @Prop()
  urlPhoto: string;

  // Esses dois campos serão criados automaticamente
  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);