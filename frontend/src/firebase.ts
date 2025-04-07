import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage, MessagePayload } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxHUyofhi9BR7xq8FzdZNe98YQanCHcow",
  authDomain: "disater-relief-app.firebaseapp.com",
  projectId: "disater-relief-app",
  storageBucket: "disater-relief-app.firebasestorage.app",
  messagingSenderId: "49029062207",
  appId: "1:49029062207:web:c7d73a47f2f80317b9a28a",
  measurementId: "G-JBG2WEQ4LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// ✅ Register Service Worker for Firebase Messaging
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered successfully:", registration);
    })
    .catch((err) => console.error("Service Worker registration failed:", err));
}

// ✅ Request Notification Permission & Get Token
export const requestNotificationPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BEVB6zQkujI0yf_9l5y-xw2mwyyog25M5LsJgXdPGTtC2iggfyITykR5BrQkqUk2JBRtauh_PnzV-vA3bN23tSg",
      });
      console.log("Firebase Token:", token);
      return token;
    } else {
      console.warn("Notification permission denied");
      return null;
    }
  } catch (error) {
    console.error("Error getting notification permission:", error);
    return null;
  }
};

// ✅ Fix: Ensure `onMessageListener` Returns a Typed Promise
export const onMessageListener = (): Promise<MessagePayload> =>
  new Promise((resolve, reject) => {
    try {
      onMessage(messaging, (payload) => {
        console.log("New message received:", payload);
        resolve(payload);
      });
    } catch (error) {
      console.error("Error listening for messages:", error);
      reject(error);
    }
  });
