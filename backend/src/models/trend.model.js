import mongoose from "mongoose";


const trendShema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },

  hashtags: {
    type: String,
    required: true,
  },

  tweets: {
    type: Number,
    required: true,
  }

}, {timestamps: true})


export default mongoose.model("Trend", trendShema)