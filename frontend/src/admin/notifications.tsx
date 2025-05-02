
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bell, Loader2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Notification {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://disaster-relief-app-3.onrender.com/api/v1/admin/notifications")
      .then((response) => {
        console.log("Response data:", response.data);
        if (response.data && Array.isArray(response.data.notifications)) {
          setNotifications(response.data.notifications);
        } else {
          setError("Notifications data is not available or formatted incorrectly.");
        }
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
        setError("Failed to fetch notifications. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-blue-600">
        <Loader2 className="animate-spin w-12 h-12" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">
        <AlertCircle className="mr-2" /> {error}
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-6 flex items-center justify-center">
        <Bell className="mr-2" /> Notifications
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {notifications.map((notification) => (
          <div
            key={notification._id}
            className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-600">{notification.title}</h3>
            <p className="mt-2 text-gray-700">{notification.body}</p>
            <p className="mt-3 text-sm text-gray-500 italic">
              {new Date(notification.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/admin")}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Back to Admin Dashboard
        </button>
      </div>
    </div>
  );
};

export default Notifications;
