import { Schema, model, Types } from 'mongoose'

const chatSchema = new Schema(
  {
    participants: { type: [Types.ObjectId], required: true, ref: 'User' },
    matchId: { type: Types.ObjectId, require: true, ref: 'Match' },
    isActive: { type: Boolean, required: true, default: true },
    isSaved: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
)

export const Chat = model('Chat', chatSchema)
