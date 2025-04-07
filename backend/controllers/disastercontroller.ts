// import { Request, Response } from "express";
// import Disaster from "../models/disaster.model"; // Ensure correct import path
// import { sendSMS, sendEmail } from "../services/notifcation"; // Ensure correct import path
// import { sendPushNotification } from "../src/firebaseadmin";

// /**
//  * ✅ Report a Disaster
//  */
// export const reportDisaster = async (req: Request, res: Response) => {
//   try {
//     // 🔹 Create new disaster entry
//     const disaster = new Disaster(req.body);
//     await disaster.save();

//     // 🔹 Notification message
//     const message = `🚨 New Disaster Alert: ${disaster.name} at ${disaster.location}. Severity: ${disaster.severity}`;

//     // 🔹 Send notifications (Update with actual phone/email from DB)
//     await sendSMS("+1234567890", message); // Replace with a real number
//     await sendEmail("user@example.com", "Disaster Alert", message); // Replace with a real email

//     res.status(201).json({ success: true, data: disaster });
//   } catch (error) {
//     console.error("❌ Error reporting disaster:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };


// import { Request, Response } from "express";
// import Disaster from "../models/disaster.model"; // Ensure correct import path
// import { sendSMS, sendEmail } from "../services/notifcation"; // Ensure correct import path
// import { sendPushNotification } from "../src/firebaseadmin"; // Ensure correct import path

// /**
//  * ✅ Report a Disaster
//  */
// // 📌 Report a Disaster (Updated)

// // ✅ Ensure function signature matches Express middleware requirements


// // ✅ Report a Disaster


// // ✅ Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save images in 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
//   },
// });
// export const upload = multer({ storage });

// // ✅ Report Disaster (Single FCM, Phone, Email)
// export const reportDisaster = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { name, type, severity } = req.body;

//     // 📌 Parse location from FormData
//     const location = {
//       address: req.body["location[address]"],
//       lat: parseFloat(req.body["location[lat]"]),
//       lng: parseFloat(req.body["location[lng]"]),
//     };

//     // 📌 Validate required fields
//     if (!name || !location.address || isNaN(location.lat) || isNaN(location.lng) || !severity || !type) {
//       res.status(400).json({ success: false, error: "Missing required fields" });
//       return;
//     }

//     // 📌 Handle Image Uploads (Extract file paths)
//     const images = req.files ? (req.files as Express.Multer.File[]).map((file) => file.path) : [];

//     // 📌 Create new disaster entry
//     const disaster = new Disaster({ name, location, severity, type, images });
//     await disaster.save();

//     // 📌 Notification message
//     const message = `🚨 New Disaster Alert: ${disaster.name} at ${disaster.location.address}. Severity: ${disaster.severity}`;

//     // 📌 Hardcoded single FCM token, phone number, and email (Replace with actual values)
//     const userFCMToken = "FCM_TOKEN"; // 🔹 Replace with actual FCM token
//     const phoneNumber = "+1234567890"; // 🔹 Replace with actual phone number
//     const userEmail = "user@example.com"; // 🔹 Replace with actual email

//     // 📌 Send Push Notification
//     await sendPushNotification(userFCMToken, "Disaster Alert", message);

//     // 📌 Send SMS
//     await sendSMS(phoneNumber, message);

//     // 📌 Send Email
//     await sendEmail(userEmail, "Disaster Alert", message);

//     res.status(201).json({ success: true, data: disaster });
//   } catch (error) {
//     console.error("❌ Error reporting disaster:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };



// export const getReportedDisasters = async (req: Request, res: Response) => {
//   try {
//     const disasters = await Disaster.find().sort({ createdAt: -1 }); // Fetch all disasters, sorted by latest
//     res.status(200).json({ success: true, data: disasters });
//   } catch (error) {
//     console.error("❌ Error fetching reported disasters:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };





// import { Request, Response } from "express";
// import Disaster from "../models/disaster.model";
// import {User} from "../models/user.model"; // Ensure correct import path
// import { sendSMS, sendEmail } from "../services/notifcation"; // Ensure correct import path
// import { sendPushNotification } from "../src/firebaseadmin";
// import multer from "multer";
// import path from "path";

// // ✅ Configure Multer for image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Store images in the "uploads" directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage }).array("images", 5); // Allow up to 5 images

// /**
//  * ✅ Report a Disaster
//  */
// export const reportDisaster = async (req: Request, res: Response) => {
//   try {
//     upload(req, res, async (err) => {
//       if (err) {
//         console.error("❌ File upload error:", err);
//         return res.status(500).json({ success: false, error: "File upload failed" });
//       }

//       // 🔹 Extract form data
//       const { name, location, severity, type } = req.body;
//       const imageUrls = req.files ? (req.files as Express.Multer.File[]).map(file => `/uploads/${file.filename}`) : [];

//       // 🔹 Create new disaster entry
//       const disaster = new Disaster({
//         name,
//         location,
//         severity,
//         type,
//         images: imageUrls,
//       });
//       await disaster.save();

//       // 🔹 Notification message
//       const message = `🚨 New Disaster Alert: ${disaster.name} at ${disaster.location}. Severity: ${disaster.severity}`;

//       // 🔹 Fetch users from DB
//       const users = await User.find({}, "fcmToken phone email");

//       // 🔹 Send Push Notifications
//       const userFCMTokens = users.map(user => user.fcmToken).filter(Boolean);
//       await Promise.all(userFCMTokens.map(token => sendPushNotification(token, "Disaster Alert", message)));

//       // 🔹 Send SMS Notifications
//       const userPhoneNumbers = users.map(user => user.phone).filter(Boolean);
//       await Promise.all(userPhoneNumbers.map(phone => sendSMS(phone, message)));

//       // 🔹 Send Email Notifications
//       const userEmails = users.map(user => user.email).filter(Boolean);
//       await Promise.all(userEmails.map(email => sendEmail(email, "Disaster Alert", message)));

//       res.status(201).json({ success: true, data: disaster });
//     });
//   } catch (error) {
//     console.error("❌ Error reporting disaster:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };

// /**
//  * ✅ Get Reported Disasters
//  */
// export const getReportedDisasters = async (req: Request, res: Response) => {
//   try {
//     const disasters = await Disaster.find().sort({ createdAt: -1 }); // Fetch latest first
//     res.status(200).json({ success: true, data: disasters });
//   } catch (error) {
//     console.error("❌ Error fetching reported disasters:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };



// import { Request, Response } from "express";
// import Disaster from "../models/disaster.model"; // Ensure correct import path
// import { sendSMS, sendEmail } from "../services/notifcation"; // Ensure correct import path
// import { sendPushNotification } from "../src/firebaseadmin"; // Ensure correct import path
// import multer from "multer";
// import path from "path";

// /**
//  * ✅ Configure multer for file uploads
//  */
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save images in 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
//   },
// });

// // ✅ Use multer to accept multiple files
// export const upload = multer({ storage }).array("images", 5); // Allows up to 5 images

/**
 * ✅ Report a Disaster (with multiple images)
 */
//export const reportDisaster = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { name, type, severity } = req.body;

//     // 📌 Parse location from FormData
//     const location = {
//       address: req.body["location[address]"],
//       lat: parseFloat(req.body["location[lat]"]),
//       lng: parseFloat(req.body["location[lng]"]),
//     };

//     // 📌 Validate required fields
//     if (!name || !location.address || isNaN(location.lat) || isNaN(location.lng) || !severity || !type) {
//       res.status(400).json({ success: false, error: "Missing required fields" });
//       return;
//     }

//     // 📌 Handle Image Uploads (Extract file paths)
//     const images = req.files ? (req.files as Express.Multer.File[]).map((file) => file.path) : [];

//     // 📌 Create new disaster entry
//     const disaster = new Disaster({ name, location, severity, type, images });
//     await disaster.save();

//     // 📌 Notification message
//     const message = `🚨 New Disaster Alert: ${disaster.name} at ${disaster.location.address}. Severity: ${disaster.severity}`;

//     // 📌 Hardcoded single FCM token, phone number, and email (Replace with actual values)
//     const userFCMToken = "dKyyC4WYpMYim3OQnB_OeP:APA91bGrR2KF7MCeoJCX3JVmqNc9rlpenUY2_aB4hqGrG6rvcSQ3Oc59BFmatm9JVXW7J4DURZKdN2uXnFxWQOLcd2kyxZag90OuH7ecqeRCAAuMhXYeJjg"; // 🔹 Replace with actual FCM token
//     const phoneNumber = "+17244797538"; // 🔹 Replace with actual phone number
//     const userEmail = "muskiee24@gmail.com"; // 🔹 Replace with actual email

//     // 📌 Send Push Notification
//     await sendPushNotification(userFCMToken, "Disaster Alert", message);

//     // 📌 Send SMS
//     await sendSMS(phoneNumber, message);

//     // 📌 Send Email
//     await sendEmail(userEmail, "Disaster Alert", message);

//     res.status(201).json({ success: true, data: disaster });
//   } catch (error) {
//     console.error("❌ Error reporting disaster:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };
// export const reportDisaster = async (req: Request, res: Response): Promise<void> => {
//   try {
//     console.log("📩 Received Form Data:", req.body);
//     console.log("📂 Files Received:", req.files);

//     const { name, type, severity } = req.body;

//     // 📌 Parse location correctly
//     const location = {
//       address: req.body["location[address]"], // Check if this exists
//       lat: parseFloat(req.body["location[lat]"]),
//       lng: parseFloat(req.body["location[lng]"]),
//     };

//     // 📌 Validate fields
//     if (!name || !location.address || isNaN(location.lat) || isNaN(location.lng) || !severity || !type) {
//       console.log("❌ Missing Data:", { name, location, severity, type });
//       res.status(400).json({ success: false, error: "Missing required fields" });
//       return;
//     }

//     // 📌 Extract file paths
//     const images = req.files ? (req.files as Express.Multer.File[]).map((file) => file.path) : [];

//     console.log("✅ All Data Validated:", { name, location, severity, type, images });

//     // Continue saving data...
//   } catch (error) {
//     console.error("❌ Error reporting disaster:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };


// export const reportDisaster = async (req: Request, res: Response): Promise<void> => {
//   console.log("📩 Received Request Body:", req.body);
//   console.log("📂 Received Files:", req.files);

//   if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
//     console.log("❌ No files uploaded");
//   }
// };
  








// /**
//  * ✅ Get all reported disasters
//  */
// export const getReportedDisasters = async (req: Request, res: Response) => {
//   try {
//     const disasters = await Disaster.find().sort({ createdAt: -1 }); // Fetch all disasters, sorted by latest
//     res.status(200).json({ success: true, data: disasters });
//   } catch (error) {
//     console.error("❌ Error fetching reported disasters:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };














// disaster.controller.ts

import { Request, Response } from "express";
import Disaster from "../models/disaster.model";
import multer from "multer";
import  {User}  from "../models/user.model";
import path from "path";
import asyncHandler from "express-async-handler";
// Configure file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).array("images", 5); // Limit to 5 images


// Report disaster without userId
export const reportDisaster = asyncHandler(async (req: Request, res: Response) => {
  console.log("Request received:", req.body);
  console.log("Uploaded files:", req.files);

  const { name, location, severity, type } = req.body; // Removed userId from body

  if (!name || !location || !severity || !type) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  const imagePaths = req.files
    ? (req.files as Express.Multer.File[]).map((file) => `/uploads/${file.filename}`)
    : [];

  const disaster = new Disaster({
    name,
    location,
    severity,
    type,
    images: imagePaths,
    // Removed the 'reportedBy' field
  });

  await disaster.save();

  res.status(201).json({
    success: true,
    message: "Disaster reported successfully",
    data: {
      id: disaster._id,
      name: disaster.name,
      location: disaster.location,
      severity: disaster.severity,
      type: disaster.type,
      images: disaster.images,
    },
  });
});



// export const reportDisaster = asyncHandler(async (req: Request, res: Response) => {
//   console.log("Request received:", req.body);
//   console.log("Uploaded files:", req.files);

//   const { name, location, severity, type, userId } = req.body; // ✅ Include userId

//   if (!name || !location || !severity || !type || !userId) {
//     res.status(400);
//     throw new Error("Missing required fields");
//   }

//   // Check if user exists
//   const user = await User.findById(userId);
//   if (!user) {
//     res.status(404);
//     throw new Error("User not found");
//   }

//   const imagePaths = req.files
//     ? (req.files as Express.Multer.File[]).map((file) => `/uploads/${file.filename}`)
//     : [];

//   const disaster = new Disaster({
//     name,
//     location,
//     severity,
//     type,
//     images: imagePaths,
    
//   });

//   await disaster.save();

//   res.status(201).json({
//     success: true,
//     message: "Disaster reported successfully",
//     data: {
//       id: disaster._id,
//       name: disaster.name,
//       location: disaster.location,
//       severity: disaster.severity,
//       type: disaster.type,
//       images: disaster.images,
//     },
//   });
// });







// export const reportDisaster = asyncHandler(async (req: Request, res: Response) => {
//   console.log("Request received:", req.body);
//   console.log("Uploaded files:", req.files);

//   const { name, location, severity, type } = req.body;

//   if (!name || !location || !severity || !type) {
//     res.status(400);
//     throw new Error("Missing required fields");
//   }

//   if (typeof location !== "string") {
//     res.status(400);
//     throw new Error("Invalid location format: Must be a string");
//   }

//   const imagePaths = req.files
//     ? (req.files as Express.Multer.File[]).map((file) => `/uploads/${file.filename}`)
//     : [];

//   const disaster = new Disaster({
//     name,
//     location, // ✅ Store location as a string
//     severity,
//     type,
//     images: imagePaths,
//   });

//   await disaster.save();

//   res.status(201).json({
//     success: true,
//     message: "Disaster reported successfully",
//     data: {
//       id: disaster._id,
//       name: disaster.name,
//       location: disaster.location, // ✅ Location returned as a string
//       severity: disaster.severity,
//       type: disaster.type,
//       images: disaster.images,
//     },
//   });
// });

















//   try {
//     console.log("Request received:", req.body);
//     console.log("Uploaded files:", req.files);

//     if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
//       return res.status(400).json({ success: false, error: "No files uploaded" });
//     }

//     const { name, location, severity, type } = req.body;

//     if (!name || !location || !severity || !type) {
//       return res.status(400).json({ success: false, error: "Missing required fields" });
//     }

//     // 🔹 Ensure location is parsed as JSON
//     let parsedLocation;
//     try {
//       parsedLocation = JSON.parse(location);
//     } catch (error) {
//       return res.status(400).json({ success: false, error: "Invalid location format" });
//     }

//     const imagePaths = (req.files as Express.Multer.File[]).map(file => `/uploads/${file.filename}`);

//     const disaster = new Disaster({
//       name,
//       location: parsedLocation,
//       severity,
//       type,
//       images: imagePaths,
//     });

//     await disaster.save();
//     res.status(201).json({ success: true, message: "Disaster reported successfully", data: disaster });
//   } catch (error) {
//     console.error("Error reporting disaster:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };









// export const getReportedDisasters = async (req: Request, res: Response) => {
//   try {
//     const disasters = await Disaster.find().sort({ reportedAt: -1 });
//     res.status(200).json({ success: true, data: disasters });
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };
export const getReportedDisasters = asyncHandler(async (req: Request, res: Response) => {
  try {
    const disasters = await Disaster.find().sort({ reportedAt: -1 });

    const formattedDisasters = disasters.map((disaster) => ({
      id: disaster._id,
      name: disaster.name,
      location: disaster.location, // ✅ Ensure location is returned as a string
      severity: disaster.severity,
      type: disaster.type,
      images: disaster.images,
    }));

    res.status(200).json({
      success: true,
      data: formattedDisasters,
    });
  } catch (error) {
    console.error("Error fetching disasters:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});



export const getDisasterDetails = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Find disaster by ID
    const disaster = await Disaster.findById(id);

    if (!disaster) {
      res.status(404).json({ success: false, message: "Disaster not found" });
      return; // ✅ Ensure we don't continue execution
    }

    res.status(200).json({
      success: true,
      data: {
        id: disaster._id,
        name: disaster.name,
        location: disaster.location, // ✅ Location returned as a string
        severity: disaster.severity,
        type: disaster.type,
        status: disaster.status || "Ongoing", // Defaulting to "Ongoing" if not provided
        images: disaster.images,
      },
    });
  } catch (error) {
    console.error("Error fetching disaster details:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});