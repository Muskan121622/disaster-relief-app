// import mongoose from "mongoose";

// const disasterSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     location: { type: String, required: true },
//     severity: { type: String, required: true },
//     description: { type: String },
//     reportedAt: { type: Date, default: Date.now },
//   },
//   { timestamps: true }
// );

// const Disaster = mongoose.model("Disaster", disasterSchema);

// export default Disaster;
// import mongoose, { Schema, Document } from "mongoose";

// // Define Disaster interface
// interface IDisaster extends Document {
//   name: string;
//   location: {
//     address: string;
//     lat: number;
//     lng: number;
//   };
//   severity: "Low" | "Moderate" | "High";
//   type: "Flood" | "Earthquake" | "Hurricane" | "Fire" | "Tornado";
//   images: string[]; // Store image URLs
//   reportedAt: Date;
// }

// // Define Schema
// const disasterSchema = new Schema<IDisaster>(
//   {
//     name: { type: String, required: true },
//     location: {
//       address: { type: String, required: true },
//       lat: { type: Number, required: true },
//       lng: { type: Number, required: true },
//     },
//     severity: {
//       type: String,
//       enum: ["Low", "Moderate", "High"],
//       required: true,
//     },
//     type: {
//       type: String,
//       enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"],
//       required: true,
//     },
//     images: [{ type: String }], // URLs for uploaded images
//     reportedAt: { type: Date, default: Date.now },
//   },
//   { timestamps: true }
// );

// const Disaster = mongoose.model<IDisaster>("Disaster", disasterSchema);
// export default Disaster;
// import mongoose, { Schema, Document } from "mongoose";

// // Define Disaster interface
// interface IDisaster extends Document {
//   name: string;
//   location: {
//     address: string;
//     lat: number;
//     lng: number;
//   };
//   severity: "Low" | "Moderate" | "High";
//   type: "Flood" | "Earthquake" | "Hurricane" | "Fire" | "Tornado";
//   images: string[]; // Support multiple image URLs
//   reportedAt: Date;
// }

// // Define Schema
// const disasterSchema = new Schema<IDisaster>(
//   {
//     name: { type: String, required: true },
//     location: {
//       address: { type: String, required: true },
//       lat: { type: Number, required: true },
//       lng: { type: Number, required: true },
//     },
//     severity: {
//       type: String,
//       enum: ["Low", "Moderate", "High"],
//       required: true,
//     },
//     type: {
//       type: String,
//       enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"],
//       required: true,
//     },
//     images: [{ type: String, required: true }], // Array of image URLs
//     reportedAt: { type: Date, default: Date.now },
//   },
//   { timestamps: true }
// );

// // Create Model
// const Disaster = mongoose.model<IDisaster>("Disaster", disasterSchema);
// export default Disaster;











// disaster.model.ts
// import mongoose, { Schema, Document } from "mongoose";

// export interface IDisaster extends Document {
//   name: string;
//   location: string;
//   severity: "Low" | "Moderate" | "High";
//   type: "Flood" | "Earthquake" | "Hurricane" | "Fire" | "Tornado";
//   images: string[];
//   reportedAt: Date;
// }

// const DisasterSchema = new Schema<IDisaster>({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   severity: { type: String, enum: ["Low", "Moderate", "High"], required: true },
//   type: { type: String, enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"], required: true },
//   images: [{ type: String }],
//   reportedAt: { type: Date, default: Date.now },
// });



// const DisasterSchema = new Schema<IDisaster>({
//   name: { type: String, required: true },
//   location: { 
//     type: {
//       address: { type: String, required: true },
//       lat: { type: Number, required: true },
//       lng: { type: Number, required: true }
//     }, 
//     required: true
//   },
//   severity: { type: String, enum: ["Low", "Moderate", "High"], required: true },
//   type: { type: String, enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"], required: true },
//   images: [{ type: String }],
//   reportedAt: { type: Date, default: Date.now },
// });

// const DisasterSchema = new Schema<IDisaster>({
//   name: { type: String, required: true },
//   location: { 
//     address: { type: String, required: true },
//     lat: { type: Number, required: true },
//     lng: { type: Number, required: true }
//   },
//   severity: { type: String, enum: ["Low", "Moderate", "High"], required: true },
//   type: { type: String, enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"], required: true },
//   images: [{ type: String }],
//   reportedAt: { type: Date, default: Date.now },
// });

// export default mongoose.model<IDisaster>("Disaster", DisasterSchema);
  

// import mongoose, { Schema, Document } from "mongoose";

// export interface IDisaster extends Document {
//   name: string;
//   location: string; // ✅ Changed from object to string
//   severity: "Low" | "Moderate" | "High";
//   type: "Flood" | "Earthquake" | "Hurricane" | "Fire" | "Tornado";
//   images: string[];
//   reportedAt: Date;
// }

// const DisasterSchema = new Schema<IDisaster>({
//   name: { type: String, required: true },
//   location: { type: String, required: true }, // ✅ Location stored as a string
//   severity: { type: String, enum: ["Low", "Moderate", "High"], required: true },
//   type: { type: String, enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"], required: true },
//   images: [{ type: String }],
//   reportedAt: { type: Date, default: Date.now },
// });

// export default mongoose.model<IDisaster>("Disaster", DisasterSchema);












// import mongoose, { Schema, Document } from "mongoose";

// export interface IDisaster extends Document {
//   name: string;
//   location: string; // ✅ Location stored as a string
//   severity: "Low" | "Moderate" | "High";
//   type: "Flood" | "Earthquake" | "Hurricane" | "Fire" | "Tornado";
//   status: "Ongoing" | "Resolved" | "Critical"; // ✅ Added status field
//   images: string[];
//   reportedAt: Date;
// }

// const DisasterSchema = new Schema<IDisaster>({
//   name: { type: String, required: true },
//   location: { type: String, required: true }, // ✅ Location stored as a string
//   severity: { type: String, enum: ["Low", "Moderate", "High"], required: true },
//   type: { type: String, enum: ["Flood", "Earthquake", "Hurricane", "Fire", "Tornado"], required: true },
//   status: { type: String, enum: ["Ongoing", "Resolved", "Critical"], default: "Ongoing" }, // ✅ Default value set
//   images: [{ type: String }],
//   reportedAt: { type: Date, default: Date.now },
// });

// export default mongoose.model<IDisaster>("Disaster", DisasterSchema);










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
