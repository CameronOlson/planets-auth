import mongoose from 'mongoose'

export const GalaxySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
