import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import { createServer } from "http";

// importing routes
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";
import buyRoutes from "./routes/buy.js";
import sellerRoutes from "./routes/seller.js";
import esewaRoutes from "./routes/esewa.js";
import orderRoutes from "./routes/order.js";
import createPost from "./routes/createPost.js";

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

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected");
  // console.log("Id", socket.id);

  socket.on("sendMessage", (data) => {
    console.log(data, " sendMessage");
    io.emit("sendMessage", data);
  });
  socket.on("message", (data) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.use(cookieParser());
// Serve static files from the 'public' directory
app.use(express.static("public"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api", createPost);
app.use("/api", buyRoutes);
app.use("/api", sellerRoutes);
app.use("/api", esewaRoutes);
app.use("/api", orderRoutes);

server.listen(8800, () => {
  console.log("Connect vayo");
});
