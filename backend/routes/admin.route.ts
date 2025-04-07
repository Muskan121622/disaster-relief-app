
import { adminSignup, adminLogin } from "../controllers/admin.controller";

import { getNotifications } from "../controllers/admin.controller";

import express from "express";
import { approveDonation, getUsers } from "../controllers/admin.controller";
import authMiddleware from "../middleware/authmiddleware";
import { adminMiddleware } from "../middleware/adminmiddleware";

import { sendNotification } from "../controllers/notificationcontroller";

import {  getDonations,getTotalDonations } from "../controllers/admin.controller";


import { getAdminVolunteerDetails } from "../controllers/admin.controller";


const router = express.Router();
// ✅ Admin Authentication Routes
router.post("/signup", adminSignup);
router.post("/login", adminLogin);


// Approve a donation (Admin Only)
router.put("/approve-donation/:id", authMiddleware, adminMiddleware, approveDonation);
router.get("/users", authMiddleware, adminMiddleware, getUsers);
router.get("/notifications",  getNotifications);
router.post("/send-notification/:disasterId", sendNotification);
// Route to get the total donations amount
router.get("/donations/total", getTotalDonations);
router.get("/volunteers", getAdminVolunteerDetails);
// Route to get all donation amounts
router.get("/donations", getDonations);
export default router;

