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

//getting buyers details with products
export const getProductWithBuyer = (req, res) => {
  const user_id = req.params.id;
  const sql = `SELECT a.pname, b.name, b.email, b.phone from product a join user b ON a.buyer_id = b.uid WHERE a.uid = ${user_id}`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json("Query garda error aayo: " + err);
    return res.status(200).json(result);
  });
};

export const getBuyerRequest = (req, res) => {
  const user_id = req.params.id;
  const sql = `SELECT * from product where uid = ${user_id} and buyer_id != null`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json("Query garda error aayo: " + err);
    return res.status(200).json(result);
  });
};

export const getBuyerByProductId = (req, res) => {
  const product_id = req.params.id;
  console.log(product_id);
  const sql = `SELECT  product.*, user.* from product JOIN user ON product.buyer_id = user.uid where product.pid = ${product_id}`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json("Query garda error aayo: " + err);
    } else {
      // console.log(result);
      return res.status(200).json(result);
    }
  });
};
