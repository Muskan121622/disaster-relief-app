import admin from "firebase-admin";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

// ✅ Read the Service Account JSON File
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH as string;
if (!serviceAccountPath || !fs.existsSync(serviceAccountPath)) {
  throw new Error("❌ Firebase service account key is missing or incorrect!");
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// ✅ Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const sendPushNotification = async (deviceToken: string, title: string, body: string) => {
  try {
    const message = {
      notification: { title, body },
      token: deviceToken,
    };

    const response = await admin.messaging().send(message);
    console.log("✅ Push Notification Sent:", response);
  } catch (error) {
    console.error("❌ Error sending push notification:", error);
  }
};
