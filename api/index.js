import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

// importing routes
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";
import buyRoutes from "./routes/buy.js";
import sellerRoutes from "./routes/seller.js";
import esewaRoutes from "./routes/esewa.js";
import { createPost } from "./controllers/post.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define multer storage engine and options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images"); // Specify your destination folder
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// Initialize multer with custom storage
const upload = multer({ storage });

// Apply multer middleware to the createPost route
app.post(
  "/api/post/createPost",
  upload.fields([{ name: "mainImg" }, { name: "img2" }, { name: "img3" }]),
  createPost
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api", buyRoutes);
app.use("/api", sellerRoutes);
app.use("/api", esewaRoutes);

app.listen(8800, () => {
  console.log("Connect vayo");
});
