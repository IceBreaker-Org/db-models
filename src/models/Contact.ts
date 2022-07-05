import { Schema, model } from 'mongoose'

const contactSchema = new Schema(
  {
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

export const Contact = model('Contact', contactSchema)
