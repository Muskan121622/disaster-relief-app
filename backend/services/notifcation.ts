import twilio from "twilio";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env variables

// ✅ Twilio setup
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const twilioPhone = process.env.TWILIO_PHONE || "+1234567890"; // Default fallback

// ✅ Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // ⚠️ Must be an **App Password**
  },
});

/**
 * ✅ Send SMS Notification
 */
export const sendSMS = async (phone: string, message: string) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: twilioPhone, // ✅ Twilio number
      to: phone, // ✅ Recipient's phone number
    });
    console.log(`📲 SMS sent to ${phone}:`, response.sid);
  } catch (error) {
    console.error("❌ Failed to send SMS:", error);
  }
};

/**
 * ✅ Send Email Notification
 */
export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    console.log(`📧 Email sent to ${to}:`, info.messageId);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};
