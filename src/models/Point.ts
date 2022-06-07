import { Schema } from 'mongoose'

//Note that longitude comes first in a GeoJSON coordinate array, not latitude.

export const pointSchema = new Schema(
  {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
    date: { type: Date, default: Date.now },
  },
  { _id: false },
)
