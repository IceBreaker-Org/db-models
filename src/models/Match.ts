import { Schema, model, Types } from 'mongoose'
import { Status } from '../types/Match'

const userTonesSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: 'User' },
    tone: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    activity: { type: String, required: true },
  },
  { _id: false, timestamps: true },
)

const stageSchema = new Schema(
  {
    stage: { type: String, required: true },
    endAt: { type: Date, required: true },
  },
  { timestamps: true, _id: false },
)

const matchSchema = new Schema(
  {
    participants: { type: [Types.ObjectId], required: true, ref: 'User' },
    initiatedBy: { type: [Types.ObjectId], required: true, ref: 'User' },
    status: { type: String, default: Status.pending, required: true, enum: Status },
    stage: { type: stageSchema },
    rating: { type: Number, required: false },
    userTones: { type: [userTonesSchema], required: true },
    qrCode: { type: String, required: true },
  },
  { timestamps: true },
)

export const Match = model('Match', matchSchema)
