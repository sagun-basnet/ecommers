import express from "express";
import {
  getBuyerByProductId,
  getBuyerRequest,
  getProductWithBuyer,
  postBuy,
} from "../controllers/buy.js";

const router = express.Router();

router.put("/buy/:id", postBuy);
router.get("/allBuyer/:id", getProductWithBuyer);
router.get("/getBuyerRequest/:id", getBuyerRequest);
router.get("/getBuyerByProductId/:id", getBuyerByProductId);

export default router;
