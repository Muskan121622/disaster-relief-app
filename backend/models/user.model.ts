
// import mongoose from "mongoose";

// interface IUser extends mongoose.Document {
//   name: string;
//   email: string;
//   password: string;
//   role: "donor" | "volunteer" | "organization";
// }

// const UserSchema = new mongoose.Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["donor", "volunteer", "organization"], required: true },
// });

// export const User = mongoose.model<IUser>("User", UserSchema);
import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: "donor" | "volunteer" | "organization";
  //fcmToken?: string; // ✅ Add fcmToken as an optional field
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["donor", "volunteer", "organization","admin"], required: true },
  //fcmToken: { type: String}, // ✅ Add this field
});

export const User = mongoose.model<IUser>("User", UserSchema);
