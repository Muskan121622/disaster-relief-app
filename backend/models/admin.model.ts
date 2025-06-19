import mongoose from "mongoose";
interface IAdmin extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}
const AdminSchema = new mongoose.Schema<IAdmin>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);
