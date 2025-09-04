import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/useroute";
import http from "http";
import { Server } from "socket.io";
import disasterRoutes from "./routes/disaster.route";
import donationRoutes from "./routes/donation.routes";
import volunteerRoutes from "./routes/volunteer.routes";
import adminroutes from "./routes/admin.route";
import notificationRoutes from "./routes/notifications.route";
import { Chat } from "./models/chatmodel";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import paymentRoutes from "./routes/payement.route";
import { join } from "path";
import subscribeRoutes from "./routes/subscribe.route"
dotenv.config();
const app = express();
// Middleware
 app.use(cors({ origin: ["https://disaster-relief-app-f54z.vercel.app", "http://localhost:5173"], credentials: true })); // ✅ Allow frontend
app.use(express.json()); // To parse JSON request bodies

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 1217; // ✅ Ensure correct port
const MONGODB_URI = process.env.MONGO_URI as string;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: ["https://disaster-relief-app-f54z.vercel.app", "http://localhost:5173"], // ✅ Allow frontend
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.on("connection", async (socket) => {
  console.log("🔌 A user connected:", socket.id);
  // Send previous chat history
  const chatHistory = await Chat.find().sort({ timestamp: 1 });
  socket.emit("chatHistory", chatHistory);
  // Debugging
  socket.onAny((event, ...args) => {
    console.log(`📩 Event: ${event}`, args);
  });
  // Handle messages
  socket.on("sendMessage", async ({ sender, message }) => {
    const newMessage = new Chat({ sender, message });
    await newMessage.save();
    io.emit("receiveMessage", newMessage);
  });

  // Typing indicator
  socket.on("typing", () => {
    socket.broadcast.emit("userTyping");
  });
  socket.emit("serverMessage", "Hello from backend!");
  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});
// Emit updates when donations/volunteers change
export const broadcastUpdate = (event: string, data: any) => {
  io.emit(event, data);};
app.use("/api/v1/user", authRoutes);
app.use("/api/v1/user/donations", donationRoutes);
app.use("/api/v1/user/volunteers", volunteerRoutes);
app.use("/api/v1/admin", adminroutes);
app.use("/api/v1/disasters", disasterRoutes);
app.use("/api/v1", subscribeRoutes);
app.use("/api/v1/notifications", notificationRoutes);
// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)); // ✅ Fix: Start WebSocket server too
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  });

// Sample API Route
app.get("/", (req, res) => {
  res.send("Hello, MongoDB is connected!");
});




