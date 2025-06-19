
import express from "express";
import { reportDisaster, getReportedDisasters,getDisasterDetails } from "../controllers/disastercontroller";
import multer from "multer";
const router = express.Router();
// 🛠️ Multer storage setup
const storage = multer.diskStorage({
  destination: "uploads/", // Ensure this directory exists
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
router.post("/report", upload.array("images", 5), reportDisaster);
router.get("/", getReportedDisasters);
router.get("/:id", getDisasterDetails);
export default router;
