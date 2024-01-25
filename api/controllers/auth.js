import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //Check user if exists
  const q = "SELECT * FROM `user` WHERE `email` = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");
    //create new user
    //hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO user (`name`,`email`,`address`,`password`,`phone`,`role`) VALUE (?, 'user')";

    const values = [
      req.body.name,
      req.body.email,
      req.body.address,
      hashedPassword,
      req.body.phone,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("user has been created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM user WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).send(err);
    console.log(data.length);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) return res.status(400).json("Password not match!");

    // Generating token
    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out!");
};
