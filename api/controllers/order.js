import { db } from "../db.js";

export const getBuyerRequestByOrder = (req, res) => {
  const user_id = req.params.id;
  //   console.log(user_id);
  const sql = `SELECT product.*, \`order\`.*, user.* FROM product JOIN \`order\` ON product.pid = \`order\`.pid JOIN user ON buyer_id = user.uid  WHERE product.uid = ${user_id} AND buyer_id IS NOT NULL`;

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
