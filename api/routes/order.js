import express from "express";
import { getBuyerRequestByOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/getOrderByUser/:id", getBuyerRequestByOrder);

export default router;
