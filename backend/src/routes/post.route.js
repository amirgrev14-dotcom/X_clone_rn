import express from "express";
import { getPost, getPosts, getUserPosts, likePost, deletePost, createPost} from "../controllers/post.controller.js";
import upload from "../middleware/upload.middleware.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

const router = express.Router();


export default router;