import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});
export const Chat = mongoose.model("Chat", chatSchema);
