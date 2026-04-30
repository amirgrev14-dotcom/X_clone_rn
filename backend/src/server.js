import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

// routes
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import commentRoutes from "./routes/comment.route.js"
import notificationRoutes from "./routes/notification.route.js"

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

// routes
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/notifications", notificationRoutes)

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" })
})



const startServer = async () => {
  await connectDB();

  app.listen(ENV.PORT, () => {
    console.log(`Server running on port ${ENV.PORT}`)
  });
};

startServer()