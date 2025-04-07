import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET as string;


export const register = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;
     
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({ name, email, password: hashedPassword, role });
      await user.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Registration failed" });
    }
  };






import asyncHandler from "express-async-handler";


export const login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
  
    try {
      // ✅ Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
      }
  
      // ✅ Compare password securely
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
      }
  
      // ✅ Generate JWT Token
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
  
      // ✅ Send response
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  });


