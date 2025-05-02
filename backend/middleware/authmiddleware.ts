import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

// Define user structure
interface UserPayload {
  id: string;
  role: string;
}

// Extend Request type to include 'user'
interface AuthRequest extends Request {
  user?: UserPayload;
}

// Authentication Middleware
const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload; // ✅ Use proper type
    req.user = decoded; // ✅ Attach user to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
    return;
  }
};

export default authMiddleware;


 
  