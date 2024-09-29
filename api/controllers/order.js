import { db } from "../db.js";

export const getBuyerRequestByOrder = (req, res) => {
  const user_id = req.params.id;
  //   console.log(user_id);
  // const sql = `SELECT product.*, \`order\`.*, user.* FROM product JOIN \`order\` ON product.pid = \`order\`.pid JOIN user ON buyer_id = user.uid WHERE product.uid = ${user_id} AND buyer_id IS NOT NULL`;

  const sql = `
     SELECT
      p.*,
      GROUP_CONCAT(i.image) AS images,
      o.*,
      u.*
  FROM
  appletradezone.product p
  LEFT JOIN
  appletradezone.image i ON p.pid = i.p_id
  JOIN
  appletradezone.order o ON p.pid = o.pid
  JOIN
      appletradezone.user u ON p.buyer_id = u.uid
      WHERE
      p.uid = ${user_id}
      AND p.buyer_id IS NOT NULL
      GROUP BY
      p.pid,
      p.pname,
      o.oid,
      u.uid;
      `;

  //   SELECT
  //     p.*,
  //     GROUP_CONCAT(i.image) AS images,
  //     o.*,
  //     u.*
  // FROM
  //     appletradezone.product p
  // LEFT JOIN
  //     appletradezone.image i ON p.pid = i.p_id
  // JOIN
  //     appletradezone.order o ON p.pid = o.pid
  // JOIN
  //     appletradezone.user u ON p.buyer_id = u.uid
  // WHERE
  //     p.uid = 7
  //     AND p.buyer_id IS NOT NULL
  // GROUP BY
  //     p.pid,
  //     p.pname,
  //     o.oid,
  //     u.uid;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Error occurred while executing the query.",
        details: err,
      });
    } else {
      return res.status(200).json(result);
    }
  });
};

export const getUserPurchase = (req, res) => {
  const user_id = req.params.id; // Assume buyerId is passed as a URL parameter

  const sql = ` 
      SELECT 
          p.*, 
          o.status, 
          buyer.name AS buyer_name, 
          GROUP_CONCAT(i.image) AS images,
          seller.name AS seller_name, 
          seller.phone AS seller_phone
      FROM 
          \`order\` o
      JOIN 
          product p ON o.pid = p.pid
      JOIN 
          user buyer ON p.buyer_id = buyer.uid
      JOIN 
          user seller ON p.uid = seller.uid -- Join to get the seller's details
      LEFT JOIN 
          image i ON i.p_id = p.pid
      WHERE 
          p.buyer_id = ?
      GROUP BY 
          p.pid, o.status, buyer.name, seller.name, seller.phone;
  `;

  db.query(sql, [user_id], (err, results) => {
    if (err) {
      console.error("Error fetching purchased products:", err);
      res
        .status(500)
        .json({ error: "An error occurred", details: err.message });
    } else {
      // Send the purchased products to the frontend
      res.status(200).json(results);
    }
  });
};
