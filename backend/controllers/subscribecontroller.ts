import { Request, Response } from "express";
import Subscription from "../models/subscribe.model";
export const subscribe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ success: false, message: "Email is required." });
      return;
    }

    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      res.status(400).json({ success: false, message: "Email is already subscribed." });
      return;
    }

    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.status(201).json({ success: true, message: "Subscription successful!" });
  } catch (error) {
    console.error("Subscription Error:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
