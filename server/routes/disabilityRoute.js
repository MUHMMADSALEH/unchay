import express from "express"
import Disability from "../models/disabilityModel.js"

const router = express.Router()

// Get all disability data
router.get("/", async (req, res) => {
  try {
    const disabilities = await Disability.find()
    res.status(200).json(disabilities)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

// Create new disability data
router.post("/", async (req, res) => {
  const disability = req.body
  const newDisability = new Disability(disability)

  try {
    await newDisability.save()
    res.status(201).json(newDisability)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

// Seed initial data from PDF
router.post("/seed", async (req, res) => {
  console.log("seeddata--->",req.body)
  const initialData = [
    {
      category: "Blind",
      participants: 5,
      ballotsCompleted: 1,
      ballotsIncompleteTerminated: 4,
      resultsAccuracy: "34.5%, n=1",
      timeToComplete: "1199 sec, n=1",
    },
    {
      category: "Low Vision",
      participants: 5,
      ballotsCompleted: 2,
      ballotsIncompleteTerminated: 3,
      resultsAccuracy: "98.3% n=2 (97.7%, n=3)",
      timeToComplete: "1716 sec, n=3 (1934 sec, n=2)",
    },
    {
      category: "Dexterity",
      participants: 5,
      ballotsCompleted: 4,
      ballotsIncompleteTerminated: 1,
      resultsAccuracy: "98.3%, n=4",
      timeToComplete: "1672.1 sec, n=4",
    },
    {
      category: "Mobility",
      participants: 3,
      ballotsCompleted: 3,
      ballotsIncompleteTerminated: 0,
      resultsAccuracy: "95.4%, n=3",
      timeToComplete: "1416 sec, n=3",
    },
  ]

  try {
    await Disability.deleteMany({})
    const seededData = await Disability.insertMany(initialData)
    res.status(201).json(seededData)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

export default router

