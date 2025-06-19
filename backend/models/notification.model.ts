import mongoose, { Schema, Document } from "mongoose";
// Define Notification interface
export interface INotification extends Document {
  title: string;
  body: string;
  createdAt: Date;
}
// Define Mongoose Schema
const NotificationSchema = new Schema<INotification>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true } // Auto-creates `createdAt` and `updatedAt`
);

// Export Model
export const Notification = mongoose.model<INotification>("Notification", NotificationSchema);
