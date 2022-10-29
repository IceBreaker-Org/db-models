import { Schema, model, Types } from 'mongoose'
import { Status } from '../types/Match'

const userSchema = new Schema(
  {
    user: { type: Types.ObjectId, required: true, ref: 'User' },
    accepted: { type: Boolean, required: true },
  },
  { timestamps: true, _id: false },
)

const meetRequestSchema = new Schema(
  {
    initBy: { type: userSchema, required: true },
    initTo: { type: userSchema, required: true },
    matchId: { type: Types.ObjectId, required: true, ref: 'Match' },
    status: { type: String, required: false, enum: Status, default: Status.pending },
  },
  { timestamps: true },
)

export const MeetRequest = model('MeetRequest', meetRequestSchema)
