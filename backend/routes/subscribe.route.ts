import express from "express";
import { subscribe } from "../controllers/subscribecontroller";
const router = express.Router();
// Subscription route
router.post("/subscribe", subscribe);
export default router;
