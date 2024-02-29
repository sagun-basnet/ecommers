import express from "express";
import { getAllPost, getPost } from "../controllers/post.js";

const router = express.Router();

router.get("/getAllPost", getAllPost);
router.get("/getPost/:id", getPost);

export default router;
