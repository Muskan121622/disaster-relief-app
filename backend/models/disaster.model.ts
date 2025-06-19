
import mongoose, { Schema, Document } from "mongoose";
export interface IDisaster extends Document {
  name: string;
  location: string;
  severity: "Low" | "Moderate" | "High";
  type: "Flood" | "Earthquake" | "Hurricane" | "Fire" | "Tornado";
  status: "Ongoing" | "Resolved" | "Critical";
  images: string[];
  reportedAt: Date;
  //reportedBy: mongoose.Schema.Types.ObjectId; // ✅ Store user ID of the reporter
}
const DisasterSchema = new Schema<IDisaster>({
  name: { type: String, required: true },
  location: { type: String, required: true },
  severity: { type: String, enum: ["Low", "Moderate", "High"], required: true },
  type: { type: String, enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"], required: true },
  status: { type: String, enum: ["Ongoing", "Resolved", "Critical"], default: "Ongoing" },
  images: [{ type: String }],
  reportedAt: { type: Date, default: Date.now },
 // reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ Store user reference
});

export default mongoose.model<IDisaster>("Disaster", DisasterSchema);
