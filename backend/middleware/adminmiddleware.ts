import { Request, Response, NextFunction } from "express";

// ✅ Define AuthRequest locally in this file
interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

// ✅ Admin Middleware
export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized: No user found" });
    return;
  }

  if (req.user.role !== "admin") {
    res.status(403).json({ error: "Forbidden: Admin access required" });
    return;
  }

  next(); // ✅ Allow access if admin
};
