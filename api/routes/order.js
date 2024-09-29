import express from "express";
import {
  getBuyerRequestByOrder,
  getUserPurchase,
} from "../controllers/order.js";

const router = express.Router();

router.get("/getOrderByUser/:id", getBuyerRequestByOrder);
router.get("/getUserPurchase/:id", getUserPurchase);

export default router;
