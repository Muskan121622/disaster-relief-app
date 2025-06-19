import { Request, Response } from "express";
import { Donation } from "../models/donation";
import { User } from "../models/user.model";
import { broadcastUpdate } from "../index";
export const createDonation = async (
  req: Request & { user?: { id: string } },
  res: Response
): Promise<void> => {
  try {
    const { type, amount, phone } = req.body;

    // Validate required fields
    if (!type || !amount || !phone) {
      res.status(400).json({ error: "Type, amount, and phone number are required" });
      return;
    }

    // Validate donation type
    if (!["money", "supplies", "food"].includes(type)) {
      res.status(400).json({ error: "Invalid donation type" });
      return;
    }

    // Ensure authenticated user exists
    if (!req.user || !req.user.id) {
      res.status(401).json({ error: "Unauthorized: User not authenticated" });
      return;
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Create and save new donation
    const newDonation = new Donation({
      donor: req.user.id,       // logged-in user
      type,
      amount,
      phone,                    // phone number from request body
      status: "pending",
    });

    await newDonation.save();

    // Notify all connected clients about the new donation
    broadcastUpdate("donationUpdate", newDonation);

    // Send response with donor info (name/email from user), and phone from donation
    res.status(201).json({
      message: "Donation created successfully",
      donation: {
        id: newDonation._id,
        donor: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        type: newDonation.type,
        amount: newDonation.amount,
        phone: newDonation.phone,
        status: newDonation.status,
      },
    });
  } catch (error) {
    console.error("Error creating donation:", error);
    res.status(500).json({ error: "Failed to create donation" });
  }
};




export const getDonations = async (req: Request, res: Response) => {
  try {
    const donations = await Donation.find().populate("donor", "name email");
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};
