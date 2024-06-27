import express from "express";
import {
  getAllPost,
  getPost,
  getPostByUser,
  getPostCountByUser,
} from "../controllers/post.js";

const router = express.Router();

router.get("/getAllPost", getAllPost);
router.get("/getPost/:id", getPost);
router.get("/getPostCountByUser/:id", getPostCountByUser);
router.get("/getPostByUser/:id", getPostByUser);

export default router;
