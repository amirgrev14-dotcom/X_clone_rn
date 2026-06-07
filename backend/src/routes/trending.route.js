import express from "express";
import Trending from "../models/Trending";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const trends = await Trending.find().sort({
      tweets: -1,
    });

    res.json(trends);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const trend = await Trending.create({
      topic: req.body.topic,
      hashtags: req.body.hashtags,
      tweets: req.body.tweets,
    });

    res.status(201).json(trend);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

export default router;