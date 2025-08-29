
import * as mongose from 'mongoose';

export const CategorySchema = new mongose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: false },
  events: [
    {
      name: { type: String },
      operation: { type: String },
      value: { type: Number }
    }
  ],
  player: [
    {
      type: mongose.Schema.Types.ObjectId,
      ref: 'Player'
    }
  ],
  
},{timestamps:true, collection:'category'});