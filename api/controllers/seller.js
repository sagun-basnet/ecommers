import { db } from "../db.js";
export const getSeller = (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  const sql = `SELECT a.pname, a.price, a.mainImg, a.img2, a.img3, b.uid, b.name, b.email, b.address, b.phone from product a JOIN user b ON a.uid = b.uid WHERE a.pid=${productId};`;
  db.query(sql, (err, result) => {
    if (err) return res.json("Query garda error aayo: " + err);

    return res.status(200).json(result);
  });
};
