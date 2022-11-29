import { Schema, model, Types } from 'mongoose'

const reportSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: 'User' },
    reportedUser: { type: Types.ObjectId, required: true, ref: 'User' },
    reason: { type: String, required: true },
  },
  { timestamps: true },
)

export const Reported = model('Report', reportSchema)
