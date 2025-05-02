import { Request, Response } from "express";
import { Donation } from "../models/donation";
import { User } from "../models/user.model";
//import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import { User } from "../models/user.model";
import { Admin } from "../models/admin.model"; 
 
 
const  JWT_SECRET = process.env.JWT_SECRET as string;
 

// ✅ Admin Signup
export const adminSignup = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            res.status(400).json({ message: "Admin already exists" });
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create admin user
        const admin = new Admin({ name, email, password: hashedPassword ,role:"admin",});
        await admin.save();

        res.status(201).json({ message: "Admin registered successfully" });
    } catch (error) {
        console.error("Error in admin signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



// ✅ Admin Login
export const adminLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Check if admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        } // Generate JWT token
        const token = jwt.sign({ id: admin._id,role: "admin" }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token, admin: { id: admin._id, name: admin.name, email: admin.email } });
    } catch (error) {
        console.error("Error in admin login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
  

import { broadcastUpdate } from "../index";
  

export const approveDonation = async (req: Request, res: Response): Promise<void> => {
    try {
        const donation = await Donation.findById(req.params.id);
        if (!donation) {
            res.status(404).json({ error: "Donation not found" });
            return; // ✅ Ensures function returns void
        }

        donation.status = "approved";
        await donation.save();
        
        res.json({ message: "Donation approved", donation });
    } catch (error) {
        res.status(500).json({ error: "Failed to approve donation" });
    }
};


export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};


import { Notification } from "../models/notification.model"; 


// ✅ Fetch all notifications for admin
export const getNotifications = async (req: Request, res: Response): Promise<void> => {
    try {
      const notifications = await Notification.find().sort({ createdAt: -1 }); // Get latest notifications first
  
      res.status(200).json({
        success: true,
        notifications,
      });
    } catch (error) {
      console.error("❌ Error fetching notifications:", error);
  
      res.status(500).json({
        success: false,
        message: "Failed to fetch notifications",
      });
    }
  };


export const getDonations= async (req: Request, res: Response) => {
    try {
      const donations = await Donation.find().populate("donor", "name email");
      res.json(donations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch donations" });
    }
  };
  
  // Get total donations amount
  export const getTotalDonations = async (req: Request, res: Response) => {
    try {
      const donations = await Donation.find();
      // Calculate the total sum of donations
      const totalDonations = donations.reduce((total, donation) => total + donation.amount, 0);
      res.json({ totalDonations }); // Send the total donation amount
    } catch (error) {
      res.status(500).json({ error: "Failed to calculate total donations" });
    }
  };
  
  import { getVolunteerDetails as fetchVolunteerDetails } from "../controllers/volunteer.controller";

  // Function to get volunteer details from Volunteer Controller
  export const getAdminVolunteerDetails = async (req: Request, res: Response): Promise<void> => {
    try {
      await fetchVolunteerDetails(req, res); // Reusing the function from the Volunteer Controller
    } catch (error) {
      console.error("Error fetching volunteer details from Admin Controller:", error);
      res.status(500).json({ error: "Failed to fetch volunteer details" });
    }
  };

