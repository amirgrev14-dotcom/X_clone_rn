import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const URL = process.env.URL || 5001

app.listen(URL, () => {
  console.log(`Server running on port ${URL}`)
})