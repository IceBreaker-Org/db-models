import { Schema, model, Types } from 'mongoose'

const blockedSchema = new Schema(
  {
    blockedBy: { type: Types.ObjectId, required: true, ref: 'User' },
    blockedUser: { type: Types.ObjectId, required: false, ref: 'User' },
  },
  { timestamps: true },
)

export const Blocked = model('Blocked', blockedSchema)
