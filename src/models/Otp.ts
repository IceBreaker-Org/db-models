import { Schema, model } from 'mongoose'

const otpSchema = new Schema(
  {
    key: { type: String, required: true },
    otp: { type: String, required: true },
  },
  { timestamps: true },
)

export const Otp = model('Otp', otpSchema)
