import express from "express";
import { sendNotification } from "../controllers/notificationcontroller"; // Import the function

const router = express.Router();

// ✅ Route for sending push notifications
router.post("/send", sendNotification);

export default router;
