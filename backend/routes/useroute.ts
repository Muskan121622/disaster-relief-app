import express from "express";
import { body } from "express-validator";
import {  login } from "../controllers/user.controllers";
import { register } from "../controllers/user.controllers";
const router = express.Router();
// Validation middleware
const validateRegister = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

const validateLogin = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Routes
router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

export default router;


