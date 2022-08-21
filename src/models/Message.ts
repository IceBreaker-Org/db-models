import { Schema, model, Types } from 'mongoose'

const messageSchema = new Schema(
  {
    sender: { type: Types.ObjectId, required: true, ref: 'User' },
    receiver: { type: Types.ObjectId, required: true, ref: 'User' },
    message: { type: String, required: true },
    chatId: { type: Types.ObjectId, required: true, ref: 'Chat' },
  },
  { timestamps: true },
)

export const Message = model('Message', messageSchema)
