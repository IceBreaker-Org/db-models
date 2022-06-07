import { Schema, model, Types } from 'mongoose'

const messageSchema = new Schema(
  {
    sender: { type: Types.ObjectId, required: true, ref: 'User' },
    receiver: { type: Types.ObjectId, required: true, ref: 'User' },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

export const Message = model('Message', messageSchema)
