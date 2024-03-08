import { db } from "../db.js";
export const postBuy = (req, res) => {
  const { userId } = req.body;
  const productId = req.params.id;
  console.log(userId, productId, "user Id, Product Id");
  const values = userId;
  const sql = `UPDATE product SET buyer_id = ? WHERE pid=${productId};`;
  db.query(sql, values, (err, result) => {
    if (err) return res.json("Query garda error aayo: " + err);

    return res.status(200).json(result);
  });
};
