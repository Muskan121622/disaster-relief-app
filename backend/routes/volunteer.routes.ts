import express from "express";
import { registerVolunteer, getVolunteerDetails  } from "../controllers/volunteer.controller";
import authMiddleware from "../middleware/authmiddleware";
const router = express.Router();
router.post("/register", authMiddleware, registerVolunteer);
router.get("/", getVolunteerDetails );

export default router;

