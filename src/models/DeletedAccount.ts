import { Schema, model } from 'mongoose'

const deletedAccountSchema = new Schema(
  {
    id: { type: String, required: true },
    email: { type: String, required: false },
    reason: { type: String, required: true },
    timespan: { type: String, required: true },
    matches: { type: Number, required: false, default: 0 },
  },
  { timestamps: true },
)

export const DeletedAccount = model('DeletedAccount', deletedAccountSchema)
