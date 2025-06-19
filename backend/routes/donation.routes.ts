import express from "express";
import authMiddleware from "../middleware/authmiddleware";
import { createDonation, getDonations } from "../controllers/donation.controller";
const router = express.Router();
// Ensure authMiddleware is correctly placed
router.post("/", authMiddleware, createDonation);
router.get("/",  getDonations);
export default router;

