
import mongoose, { Schema, Document } from "mongoose";
export interface ISubscriber extends Document {
  email: string;
  subscribedAt: Date;
}
const SubscriberSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address",
    ],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);
