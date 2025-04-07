// import express from "express";
// import { reportDisaster ,getReportedDisasters} from "../controllers/disastercontroller";
// //import { upload } from "../index";
// import multer from "multer";
// const router = express.Router();
// // Multer setup for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     },
//   });


//   const upload = multer({ storage });
//   router.post("/report", upload.array("images", 5), reportDisaster);

//   //router.post("/report", upload.array("images"), reportDisaster);
// //router.post("/report", upload,reportDisaster);
// //router.post("/report",upload.array("images", 5), reportDisaster);
// router.get("/",getReportedDisasters);
// //app.post("/api/v1/disasters/report", upload.array("images", 5), reportDisaster);

// export default router;



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
