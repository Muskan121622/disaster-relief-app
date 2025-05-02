
import { useEffect, useState } from "react";
import axios from "axios";
import { requestNotificationPermission } from "../firebase";

const Notifications = () => {
  const [firebaseToken, setFirebaseToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // ✅ Fetch FCM token on component mount
  useEffect(() => {
    requestNotificationPermission().then((token) => {
      if (token) {
        console.log("Fetched Firebase Token:", token);
        setFirebaseToken(token);
      } else {
        console.warn("No Firebase Token found.");
      }
    });
  }, []);

  // ✅ Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseToken) {
      alert("FCM Token not found. Cannot send notification.");
      return;
    }

    try {
      await axios.post("https://disaster-relief-app-3.onrender.com/api/v1/notifications/send", {
        token: firebaseToken,
        ...formData,
      });
      alert("Notification sent successfully!");
      // Clear form data after successful notification send
      setFormData({ title: "", body: "" });
    } catch (error) {
      console.error("Error sending notification:", error);
      alert("Failed to send notification.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Send Notification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded text-black"
          onChange={handleChange}
          value={formData.title} // Bind input to state
          required
        />
        <input
          type="text"
          name="body"
          placeholder="Message"
          className="w-full border p-2 rounded text-black"
          onChange={handleChange}
          value={formData.body} // Bind input to state
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-4 py-2 rounded shadow-md"
        >
          🚀 Send Notification
        </button>
      </form>
    </div>
  );
};

export default Notifications;
