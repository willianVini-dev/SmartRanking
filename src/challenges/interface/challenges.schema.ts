
import * as mongoose from 'mongoose';

export const ChallengeSchema = new mongoose.Schema({
  dateHour: { type: Date, required: true },
  dateHourRequest: { type: Date, required: true },
  dateHourResponse: { type: Date, required: true },
  status: { type: String, required: true },
  category: { type: String, required: true },
  request: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true }],
  match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },

}, { timestamps: true, collection: 'challenges' });