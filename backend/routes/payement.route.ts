// routes/payement.route.ts
import express from "express";
import { createPaymentIntent } from "../controllers/payementcontroller";

const router = express.Router();
console.log(typeof createPaymentIntent); // => function ✅

// ✅ Correct endpoint setup
router.post("/create-payment-intent", createPaymentIntent);

export default router;
