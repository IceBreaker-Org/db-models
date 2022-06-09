import { Schema, model } from 'mongoose'
import { Status } from '../types/User'
import { pointSchema } from './Point'

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    pronoun: { type: String, default: 'no preference' },
    username: { type: String },
    password: { type: String, required: true },
    phone: {
      type: String,
      trim: true,
      index: true,
      unique: true,
      sparse: true,
    },
    email: {
      type: String,
      trim: true,
      index: true,
      unique: true,
      sparse: true,
    },
    isEmailVerified: { type: Boolean, default: false },
    dob: { type: Date, required: true },
    bio: { type: String },
    interests: [{ type: String }],
    sex: { type: String },
    status: {
      type: String,
      default: Status.offline,
      required: true,
      enum: Status,
    },
    signupMethod: { type: String },
    image: { type: String },
    location: { type: pointSchema, index: '2dsphere' },
    showProfilePic: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const User = model('User', userSchema)
