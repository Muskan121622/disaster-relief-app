import { Request, Response } from "express";
 import {Volunteer } from "../models/volunteer"
import { User } from "../models/user.model";
import { broadcastUpdate } from "../index";

interface AuthRequest extends Request {
  user?: { id: string }; // Ensuring req.user exists from authMiddleware
}

// export const registerVolunteer = async (req: AuthRequest, res: Response): Promise<void> => {
//   try {
//     const { skills, availability } = req.body;

//     // Ensure user is authenticated
//     if (!req.user || !req.user.id) {
//       res.status(401).json({ error: "Unauthorized: User not authenticated" });
//       return;
//     }

//     // Check if user exists
//     const user = await User.findById(req.user.id);
//     if (!user) {
//       res.status(404).json({ error: "User not found" });
//       return;
//     }

//     // Validate required fields
//     if (!skills || !availability) {
//       res.status(400).json({ error: "Skills and availability are required" });
//       return;
//     }

//     // Create a new volunteer entry
//     const newVolunteer = new Volunteer({
//       user: req.user.id,
//       skills,
//       availability,
//     });

//     await newVolunteer.save();
//       broadcastUpdate("volunteerUpdate", newVolunteer); // Notify clients
//     // // res.status(201).json(newVolunteer);
  
//     res.status(201).json({
//       message: "Volunteer registered successfully",
//       volunteer: {
//         id: newVolunteer._id,
//         user: { id: user._id, name: user.name, email: user.email },
//         skills: newVolunteer.skills,
//         availability: newVolunteer.availability,
//       },
//     });
//   } catch (error) {
//     console.error("Error registering volunteer:", error);
//     res.status(500).json({ error: "Failed to register volunteer" });
//   }
// };





export const registerVolunteer = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { name, phone, state, district, address, skills, availability } = req.body;

    if (!req.user || !req.user.id) {
      res.status(401).json({ error: "Unauthorized: User not authenticated" });
      return;
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (!name || !phone || !state || !district || !address || !skills || !availability) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const newVolunteer = new Volunteer({
      user: req.user.id,
      name,
      phone,
      state,
      district,
      address,
      skills,
      availability,
    });

    await newVolunteer.save();
    broadcastUpdate("volunteerUpdate", newVolunteer);

    res.status(201).json({
      message: "Volunteer registered successfully",
      volunteer: {
        id: newVolunteer._id,
        user: { id: user._id, name: user.name, email: user.email },
        name: newVolunteer.name,
        phone: newVolunteer.phone,
        state: newVolunteer.state,
        district: newVolunteer.district,
        address: newVolunteer.address,
        skills: newVolunteer.skills,
        availability: newVolunteer.availability,
      },
    });
  } catch (error) {
    console.error("Error registering volunteer:", error);
    res.status(500).json({ error: "Failed to register volunteer" });
  }
};

// // export const getVolunteers = async (req: Request, res: Response) => {
// //   try {
// //     const volunteers = await Volunteer.find().populate("user", "name email");
// //     res.json(volunteers);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to fetch volunteers" });
// //   }
// // };



// // Get all volunteers or a specific volunteer by ID
export const getVolunteerDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (id) {
      // Fetch a specific volunteer by ID
      const volunteer = await Volunteer.findById(id).populate("user", "name email phone");
      if (!volunteer) {
        res.status(404).json({ error: "Volunteer not found" });
        return;
      }
      res.status(200).json(volunteer);
    } else {
      // Fetch all volunteers
      const volunteers = await Volunteer.find().populate("user", "name email phone");
      res.status(200).json(volunteers);
    }
  } catch (error) {
    console.error("Error fetching volunteer details:", error);
    res.status(500).json({ error: "Failed to fetch volunteer details" });
  }
};








