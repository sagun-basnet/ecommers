import express from "express";
import { verifyEsewa, handleEsewaSuccess } from "../controllers/esewa.js";

const router = express.Router();

router.get("/verifyEsewa/:id", verifyEsewa);
router.get("/success/:id", handleEsewaSuccess);

export default router;
