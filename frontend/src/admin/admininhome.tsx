
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminHome = () => {
  const [stats, setStats] = useState({ donations: 0, users: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No token found. Redirecting to login...");
          setTimeout(() => navigate("/login"), 1500);
          return;
        }
        const [usersResponse, donationsResponse] = await Promise.all([
          axios.get("https://disaster-relief-app-3.onrender.com/api/v1/admin/users", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://disaster-relief-app-3.onrender.com/api/v1/admin/donations/total", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setStats({
          donations: donationsResponse.data.totalDonations || 0,
          users: usersResponse.data.length || 0,
        });
      } catch (error: any) {
        console.error("Error fetching stats:", error);
        if (error.response?.status === 401 || error.response?.status === 403) {
          setError("Unauthorized access. Redirecting to login...");
          setTimeout(() => navigate("/login"), 1500);
        } else {
          setError("Failed to fetch data. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>

      {loading ? (
        <div className="text-gray-700 text-lg">Loading stats...</div>
      ) : error ? (
        <div className="text-red-500 text-lg">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-4xl font-bold text-blue-500">{stats.users}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Total Donations</h3>
            <p className="text-4xl font-bold text-green-500">
              ${stats.donations.toLocaleString()}
            </p>
          </div>
        </div>
      )}

<div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/admin")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Back to Admin Dashboard
          </button>
        </div>
    </div>
  );
};

export default AdminHome;

