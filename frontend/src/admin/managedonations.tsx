
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Donation {
  _id: string;
  name: string;
  amount: number;
  status: string;
}

const ManageDonations = () => {
  const navigate = useNavigate();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch donations from API
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("https://disaster-relief-app-3.onrender.com/api/v1/admin/donations");
        if (Array.isArray(response.data)) {
          setDonations(response.data);
        } else {
          throw new Error("Invalid donation data format");
        }
      } catch (err) {
        console.error("Error fetching donations:", err);
        setError("Failed to load donations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  // Function to approve donation
  const approveDonation = async (id: string) => {
    try {
      setApproving(id);

      // Retrieve the token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found. Please log in again.");
      }

      // Send the PUT request with the Authorization header
      await axios.put(
        `https://disaster-relief-app-3.onrender.com/api/v1/admin/approve-donation/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );

      setDonations((prev) =>
        prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d))
      );
      toast.success("Donation approved successfully!");
    } catch (err) {
      console.error("Error approving donation:", err);
      toast.error("Failed to approve donation. Please try again later.");
    } finally {
      setApproving(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-blue-600 text-lg">
        Loading donations...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Manage Donations
        </h2>

        {error && <p className="text-center text-red-500">{error}</p>}

        <ul className="space-y-6">
          {donations.length === 0 ? (
            <li className="text-center text-gray-600">No donations found!</li>
          ) : (
            donations.map((donation) => (
              <li
                key={donation._id}
                className="p-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{donation.name}</h3>
                    <p className="text-sm">Amount: ${donation.amount}</p>
                    <p className="text-sm">Status: {donation.status}</p>
                  </div>
                  {donation.status !== "approved" && (
                    <button
                      onClick={() => approveDonation(donation._id)}
                      disabled={approving === donation._id}
                      className={`px-4 py-2 rounded-md font-semibold transition ${
                        approving === donation._id
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-500"
                      }`}
                    >
                      {approving === donation._id ? "Approving..." : "Approve"}
                    </button>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/admin")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Back to Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDonations;
