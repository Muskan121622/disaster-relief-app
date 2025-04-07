import mongoose from "mongoose";

interface IDonation extends mongoose.Document {
  donor: mongoose.Schema.Types.ObjectId;
  type: "money" | "supplies" | "food";
  amount: number;
  phone?: string;
  status: "pending" | "approved" | "delivered";
}

const DonationSchema = new mongoose.Schema<IDonation>({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["money", "supplies", "food"], required: true },
  amount: { type: Number, required: true },
  phone: { type: String, required: false },
  status: { type: String, enum: ["pending", "approved", "delivered"], default: "pending" },
});

export const Donation = mongoose.model<IDonation>("Donation", DonationSchema);
