import { Schema, model, Types } from 'mongoose'

const blockedUserSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true, _id: false },
)

const blockedSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: 'User' },
    users: { type: [blockedUserSchema], required: false, ref: 'User', default: [] },
  },
  { timestamps: true },
)

export const Blocked = model('Blocked', blockedSchema)
