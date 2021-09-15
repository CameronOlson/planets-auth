import mongoose from 'mongoose'

export const StarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  GalaxyId: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)

StarSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  ref: 'Galaxy',
  justOne: true
})
