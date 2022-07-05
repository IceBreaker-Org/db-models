import { Schema } from 'mongoose'

//Note that longitude comes first in a GeoJSON coordinate array, not latitude.

export const metaSchema = new Schema(
  {
    tone: {
      type: String,
      required: false,
    },
    reason: {
      type: String,
      required: false,
    },
    activity: { type: String, required: false },
  },
  { _id: false },
)
