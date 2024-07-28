import express from "express";
import {
  getAllPost,
  getPost,
  getPostByUser,
  getPostCountByUser,
  createPost,
} from "../controllers/post.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.get("/getAllPost", getAllPost);
router.get("/getPost/:id", getPost);
router.get("/getPostCountByUser/:id", getPostCountByUser);
router.get("/getPostByUser/:id", getPostByUser);
router.get("/createPost", upload.array("images", 5), createPost);
export default router;
