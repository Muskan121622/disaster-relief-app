// import { Request, Response } from "express";
// import { sendPushNotification } from "../src/firebaseadmin"; // Import Firebase function

// // ✅ Fix: Remove explicit `Response` return type
// export const sendNotification = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { token, title, body } = req.body;

//     if (!token || !title || !body) {
//       res.status(400).json({
//         success: false,
//         message: "Missing required parameters: token, title, and body are required.",
//       });
//       return; // ✅ Ensure function stops execution
//     }

//     await sendPushNotification(token, title, body); // Calls Firebase function

//     res.status(200).json({
//       success: true,
//       message: "Notification sent successfully.",
//     });

//   } catch (error) {
//     console.error("❌ Error sending notification:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to send notification",
//       error: (error as Error).message, // Ensures proper error format
//     });
//   }
// };


import { Request, Response } from "express";
 //import { sendPushNotification } from "../src/firebaseadmin"; // Import Firebase function
import { Notification } from "../models/notification.model"; // Import Notification model










export const sendNotification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token, title, body } = req.body;

    if (!token || !title || !body) {
      res.status(400).json({
        success: false,
        message: "Missing required parameters: token, title, and body are required.",
      });
      return;
    }

    // ✅ Send the push notification via Firebase
    //await sendPushNotification(token, title, body);

    // ✅ Save the notification in MongoDB
    const notification = new Notification({ title, body });
    await notification.save();

    res.status(200).json({
      success: true,
      message: "Notification sent and saved successfully.",
    });

  } catch (error) {
    console.error("❌ Error sending notification:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send notification",
      error: (error as Error).message,
    });
  }
};
