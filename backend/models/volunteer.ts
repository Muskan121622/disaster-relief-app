import mongoose, { Document, Schema } from "mongoose";

interface IVolunteer extends Document {
  user: mongoose.Schema.Types.ObjectId;
  name: string;
  phone: string;
  state: string;
  district: string;
  address: string;
  skills: string[];
  availability: string;
}

const VolunteerSchema = new Schema<IVolunteer>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  skills: { type: [String], required: true },
  availability: { type: String, required: true },
});

export const Volunteer = mongoose.model<IVolunteer>("Volunteer", VolunteerSchema);

