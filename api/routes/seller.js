import express from "express";
import { getSeller } from "../controllers/seller.js";

const router = express.Router();

router.get("/getSeller/:id", getSeller);

export default router;
