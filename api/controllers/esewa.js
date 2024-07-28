import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import dotenv from "dotenv";
import { db } from "../db.js";
// require("dotenv").config();
dotenv.config();

export const verifyEsewa = async (req, res) => {
  const proId = req.params.id;
  const uuid = uuidv4();
  const esewaSecret = process.env.ESEWASECRET;
  // console.log(esewaSecret);

  axios
    .get(`http://localhost:8800/api/getSeller/${proId}`)
    .then((response) => {
      // console.log(response.data);
      const productData = response.data;
      // console.log(productData[0].price,"price");
      // console.log(uuid);
      const message = `total_amount=${productData[0].price},transaction_uuid=${uuid},product_code=EPAYTEST`;
      // console.log(message);
      const hash = CryptoJS.HmacSHA256(message, esewaSecret);
      // console.log(hash, "hash");
      const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
      // console.log(hashInBase64, "hashInBase64");
      return res.json({
        uuid: uuid,
        signature: hashInBase64,
        proId: proId,
      });
    })
    .catch((err) => {
      console.error("Error in getting seller details", err);
    });
};

export const handleEsewaSuccess = async (req, res) => {
  const { data } = req.query;
  const pid = req.params.id;
  // console.log(data);
  let decodedString = atob(data);
  decodedString = JSON.parse(decodedString);

  switch (decodedString.status) {
    // compare the signature once again for better security
    case "COMPLETE":
      try {
        const message = `total_amount=${decodedString.total_amount},transaction_uuid=${decodedString.transaction_uuid},product_code=${decodedString.product_code}`;

        const hash = CryptoJS.HmacSHA256(message, process.env.ESEWASECRET);
        const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        // console.log(hashInBase64, "hashInBase64");
        // console.log(decodedString.signature, "sig");
        // console.log(hashInBase64 == decodedString.signature);
        const result = hashInBase64 == decodedString.signature;
        // if (result == false) {
        //   throw "Hash value not matched";
        // }
        const sql = "INSERT into `order`(`pid`) value(?)";
        db.query(sql, parseInt(pid), (err, data) => {
          if (err) {
            console.error("Error inserting order:", err);
            return res.status(500).json({ error: "Failed to create order." });
          }

          // After successfully inserting the order, send the redirect response
          res.redirect(`http://localhost:5173/finished/${pid}`);
        });
      } catch (error) {
        console.log("error occoured", error);
      }
      break;

    case "PENDING":
      break;

    case "FULL_REFUND":
      break;

    case "CANCELED":
      break;
  }
};

//fineshed url
//http://localhost:5173/finished/${pid}
