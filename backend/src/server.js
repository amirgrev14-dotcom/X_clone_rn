import express from "express";
import cors from "cors";

// routes
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import commentRoutes from "./routes/comment.route.js"
import notificationRoutes from "./routes/notification.route.js"

import { clerkMiddleware } from "@clerk/express";
import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js"

const app = express()
// apply middlewares
app.use(cors())
app.use(express.json())

// apply Arcjet middleware before all routes for security and rate limiting
app.use(clerkMiddleware())
app.use(arcjetMiddleware())

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" })
})

// routes
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/notifications", notificationRoutes)

const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer()