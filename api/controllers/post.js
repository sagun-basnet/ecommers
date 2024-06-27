import { db } from "../db.js";
export const createPost = (req, res) => {
  const { pname, price, description, type, userId } = req.body;
  const mainImg = req.files["mainImg"];
  const img2 = req.files["img2"];
  const img3 = req.files["img3"];

  const mainImgPath = mainImg ? `/images/${mainImg[0].filename}` : null;
  const img2Path = img2 ? `/images/${img2[0].filename}` : null;
  const img3Path = img3 ? `/images/${img3[0].filename}` : null;

  const values = [
    pname,
    price,
    description,
    type,
    mainImgPath,
    img2Path,
    img3Path,
    userId,
  ];
  const sql = `INSERT INTO product(pname, price, description, type, mainImg, img2,img3,uid) VALUES(?,?,?,?,?,?,?,?)`;

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error aayo:", err);
      res
        .status(500)
        .json({ error: "An error occurred", details: err.message });
    } else {
      console.log("Package has been added");
      res.status(200).json({ message: "Product has been added" });
    }
  });
};
export default { createPost };

//Get all posts from database
export const getAllPost = (req, res) => {
  const sql = `SELECT * FROM product`;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//Get particular post from database
export const getPost = (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  const sql = `SELECT * FROM product WHERE pid=${productId};`;
  db.query(sql, (err, result) => {
    if (err) return res.json("Query garda error aayo: " + err);

    return res.status(200).json(result);
  });
};

export const getPostCountByUser = (req, res) => {
  const user_id = req.params.id;
  // const sql = `SELECT count(*) as count from product where uid = ${user_id}`;
  const sql = `SELECT 
  COUNT(CASE WHEN uid = ${user_id} THEN 1 END) AS uid_count,
  COUNT(CASE WHEN buyer_id = ${user_id} THEN 1 END) AS buyer_id_count
FROM 
  product
WHERE
  uid = ${user_id} OR buyer_id = ${user_id};`;
  db.query(sql, (err, result) => {
    if (err) return res.json("Query garda error aayo" + err);

    return res.status(200).json(result);
  });
};

export const getPostByUser = (req, res) => {
  const user_id = req.params.id;
  const sql = `SELECT * from product where uid = ${user_id}`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json("Query garda error aayo: " + err);
    return res.status(200).json(result);
  });
};
