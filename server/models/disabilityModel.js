import mongoose from "mongoose"

const disabilitySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  participants: {
    type: Number,
    required: true,
  },
  ballotsCompleted: {
    type: Number,
    required: true,
  },
  ballotsIncompleteTerminated: {
    type: Number,
    required: true,
  },
  resultsAccuracy: {
    type: String,
    required: true,
  },
  timeToComplete: {
    type: String,
    required: true,
  },
})

const Disability = mongoose.model("Disability", disabilitySchema)

export default Disability

