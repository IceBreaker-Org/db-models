import { Schema, model, Types } from 'mongoose'

const chatSchema = new Schema(
  {
    participants: { type: [Types.ObjectId], required: true, ref: 'User' },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
)

export const Chat = model('Chat', chatSchema)
