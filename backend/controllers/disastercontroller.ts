
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