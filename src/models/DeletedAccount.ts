import { Schema, model } from 'mongoose'

const deletedAccountSchema = new Schema(
  {
    email: { type: String, required: true },
    reason: { type: String, required: true },
    timespan: { type: String, required: true },
    matches: { type: Number, required: false, default: 0 },
  },
  { timestamps: true },
)

export const DeletedAccount = model('DeletedAccount', deletedAccountSchema)
