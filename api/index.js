import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

// importing routes
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";
import buyRoutes from "./routes/buy.js";
import sellerRoutes from "./routes/seller.js";
import esewaRoutes from "./routes/esewa.js";
import orderRoutes from "./routes/order.js";
import createPost from "./routes/createPost.js";
import { log } from "console";

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

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for sendMessage from client
  socket.on("sendMessage", (data) => {
    console.log("Message received: ", data);

    // Emit the received message to all clients
    io.emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
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

app.listen(8800, () => {
  console.log("Connect vayo");
});
