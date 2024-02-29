import express from "express";
import { postBuy } from "../controllers/buy.js";

const router = express.Router();

router.put("/buy/:id", postBuy);

export default router;
