import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import disabilityRoutes from "./routes/disabilityRoute.js"
import { connectToDb } from "./utility/dbConnection.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use("/api/disabilities", disabilityRoutes)

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err))

app.listen(PORT, () => {
  connectToDb()
  console.log(`Server running on port: ${PORT}`)
})

