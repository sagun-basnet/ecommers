import { db } from "../db.js";

export const createPost = (req, res) => {
  const { pname, price, description, type, userId } = req.body;
  const images = req.files; // Array of images

  console.log(images, "Image Path");

  // Values for product table insertion
  const values = [pname, price, description, type, userId];
  const sql = `INSERT INTO product(pname, price, description, type, uid) VALUES(?,?,?,?,?)`;

  // Insert product into the product table
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error aayo:", err);
      res
        .status(500)
        .json({ error: "An error occurred", details: err.message });
    } else {
      const pid = results.insertId; // Get the ID of the inserted product
      console.log("Product has been added, Product ID:", pid);

      // Insert 3 images into the product_images table
      if (images && images.length >= 3) {
        const imageValues = images
          .slice(0, 3)
          .map((image) => [pid, `/images/${image.filename}`]);

        // Insert each image as a separate row
        const imageSql = `INSERT INTO image(p_id, image) VALUES ?`;

        db.query(imageSql, [imageValues], (imageErr, imageResults) => {
          if (imageErr) {
            console.error("Error inserting images:", imageErr);
            res.status(500).json({
              error: "An error occurred while inserting images",
              details: imageErr.message,
            });
          } else {
            console.log("Images have been added");
            res.status(200).json({
              message: "Product and images have been added successfully",
              imageResults,
            });
          }
        });
      } else {
        res.status(400).json({
          error: "Please upload at least 3 images.",
        });
      }
    }
  });
};

// export default { createPost };

//Get all posts from database
export const getAllPost = (req, res) => {
  // const sql = `SELECT * FROM product `;
  const sql = ` SELECT 
        p.*, 
        GROUP_CONCAT(i.image) AS images
    FROM 
        appletradezone.product p
    LEFT JOIN 
        appletradezone.image i ON p.pid = i.p_id
    GROUP BY 
        p.pid, 
        p.pname;`;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//Get particular post from database
export const getPost = (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  // const sql = `SELECT * FROM product WHERE pid=${productId};`;
  const sql = ` SELECT 
        p.*, 
        GROUP_CONCAT(i.image) AS images
    FROM 
        appletradezone.product p
    LEFT JOIN 
        appletradezone.image i ON p.pid = i.p_id  WHERE p.pid=${productId}
    GROUP BY 
        p.pid, 
        p.pname`;
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
  // const sql = `SELECT * from product where uid = ${user_id}`;
  const sql = ` SELECT 
        p.*, 
        GROUP_CONCAT(i.image) AS images
    FROM 
        appletradezone.product p
    LEFT JOIN 
        appletradezone.image i ON p.pid = i.p_id  WHERE p.uid=${user_id}
    GROUP BY 
        p.pid, 
        p.pname`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json("Query garda error aayo: " + err);
    return res.status(200).json(result);
  });
};
