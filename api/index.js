import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// importing routes
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

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

// app.get("/", (req, res) => {
//   res.json("Welcome to backend.");
// });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("Connect vayo");
});
