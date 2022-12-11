import { Schema, model, Types } from 'mongoose'

const savedByUserSchema = new Schema(
  {
    user: { type: Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true, id: false },
)

const chatSchema = new Schema(
  {
    participants: { type: [Types.ObjectId], required: true, ref: 'User' },
    matchId: { type: Types.ObjectId, require: false, ref: 'Match' },
    isActive: { type: Boolean, required: true, default: true },
    isSaved: { type: Boolean, required: true, default: false },
    savedBy: { type: [savedByUserSchema] },
    isPermanent: { type: Boolean, required: false, default: false },
  },
  { timestamps: true },
)

export const Chat = model('Chat', chatSchema)
