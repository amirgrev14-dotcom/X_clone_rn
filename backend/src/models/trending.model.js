import mongoose from "mongoose";

const TrendingSchema = new mongoose.Schema(
  {
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
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Trending ||
  mongoose.model("Trending", TrendingSchema);