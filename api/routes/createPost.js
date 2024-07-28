import express from "express";
import { createPost } from "../controllers/post.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();
router.post("/createPost", upload.array("images", 5), createPost);
export default router;
