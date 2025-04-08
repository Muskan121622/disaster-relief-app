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
//import notificationRoutes from "./routes/notifications.route";
import { Chat } from "./models/chatmodel";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import paymentRoutes from "./routes/payement.route";
//import 'leaflet/dist/leaflet.css';


// import path from "node:path";
// import * as path from "path";
import { join } from "path";
//import Stripe from "stripe";
//import Razorpay from "razorpay";
//import crypto from "crypto";
//import paymentRouter from "./routes/payement.route"; 
import subscribeRoutes from "./routes/subscribe.route"
dotenv.config();

const app = express();






// // ✅ Validate environment variables
// if (!process.env.STRIPE_SECRET_KEY || !process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET) {
//   console.error("❌ Missing required environment variables. Check your .env file.");
//   process.exit(1);
// }

// // ✅ Initialize Stripe & Razorpay
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-03-20" });
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });





// Middleware
app.use(cors({ origin: "https://disaster-relief-app-f54z.vercel.app", credentials: true })); // ✅ Allow frontend
app.use(express.json()); // To parse JSON request bodies

app.use(express.urlencoded({ extended: true }));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads")); // ✅ Serve uploaded images
const PORT = process.env.PORT || 1217; // ✅ Ensure correct port
const MONGODB_URI = process.env.MONGO_URI as string;
// ✅ Configure Multer for File Uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save files in 'uploads' directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });






// 📌 **1️⃣ Stripe Payment (Credit/Debit Card)**

//📌 **2️⃣ Razorpay Payment (UPI & Net Banking)**
// app.post("/api/payments/razorpay", async (req, res) => {
//   try {
//     const { amount, currency = "INR" } = req.body;
//     if (!amount) {
//       return res.status(400).json({ success: false, message: "Amount is required" });
//     }

//     const options = {
//       amount: amount * 100, // Razorpay works in paise
//       currency,
//       payment_capture: 1, // Auto-capture
//     };

//     const order = await razorpay.orders.create(options);
//     res.json({ success: true, order });
//   } catch (error: any) {
//     console.error("❌ Razorpay Payment Error:", error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });






// 📌 **3️⃣ Verify Razorpay Payment**
// app.post("/api/payments/verify", async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//     if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//       return res.status(400).json({ success: false, message: "Invalid payment details" });
//     }

//     // Compute HMAC SHA256 signature
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//       .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//       res.json({ success: true, message: "Payment verified successfully!" });
//     } else {
//       res.status(400).json({ success: false, message: "Invalid signature" });
//     }
//   } catch (error: any) {
//     console.error("❌ Razorpay Verification Error:", error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });















//export const upload = multer({ storage });

// ✅ Serve static files (for accessing uploaded images)
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//app.use("/uploads", express.static(join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "https://disaster-relief-app-f54z.vercel.app", // ✅ Allow frontend
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// WebSocket connection handling
io.on("connection", (socket) => {
  console.log("🔌 A user connected:", socket.id);

  // Debugging - Log received messages
  socket.onAny((event, ...args) => {
    console.log(`📩 Received Event: ${event}`, args);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
  socket.on("typing", () => {
    socket.broadcast.emit("userTyping");
  });
  

  socket.emit("serverMessage", "Hello from backend!");
});
io.on("connection", async (socket) => {
  console.log("User connected to chat");

  // Send previous chat history
  const chatHistory = await Chat.find().sort({ timestamp: 1 });
  socket.emit("chatHistory", chatHistory);

  socket.on("sendMessage", async ({ sender, message }) => {
    const newMessage = new Chat({ sender, message });
    await newMessage.save();

    io.emit("receiveMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
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

// Use the payment routes
//app.use("/api/v1", paymentRouter);
//app.post("/api/v1/disasters/report", upload.array("images", 5), reportDisaster);
//console.log("👀 paymentRoutes:", paymentRoutes);

//app.use('/api/v1/payments', paymentRoutes);
//app.use("/api/v1/notifications", notificationRoutes);
// Check if routes are registered
// app._router.stack.forEach((middleware: any) => {
//   if (middleware.route) {
//     console.log("✅ Registered Route:", middleware.route.path);
//   }
// });







// app._router.stack.forEach((r: any) => {
//   if (r.route && r.route.path) {
//     console.log(`Registered route: ${Object.keys(r.route.methods)} ${r.route.path}`);
//   }
// });


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




