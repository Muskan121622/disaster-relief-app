
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

interface Donation {
  _id: string;
  amount: number;
  donor: {
    name: string;
    email: string;
  };
  status: string;
}

interface Volunteer {
  _id: string;
  user: {
    name: string;
    email: string;
    phone: string;
  };
  skills: string[];
  availability: string;
  status: string;
}

const ManageUsers = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [donations, setDonations] = useState<Donation[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Donations
        const donationsRes = await axios.get("https://disaster-relief-app-3.onrender.com/api/v1/admin/donations");
        if (Array.isArray(donationsRes.data)) {
          setDonations(donationsRes.data);
        } else {
          throw new Error("Invalid donation data format");
        }

        // Fetch Volunteers
        const volunteersRes = await axios.get("https://disaster-relief-app-3.onrender.com/api/v1/admin/volunteers");
        if (Array.isArray(volunteersRes.data)) {
          setVolunteers(volunteersRes.data);
        } else {
          throw new Error("Invalid volunteer data format");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-blue-600">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Manage Donations & Volunteers
        </h2>

        {/* Donations List */}
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Donations</h3>
        <ul className="space-y-4">
          {donations.length === 0 ? (
            <li className="text-gray-600">No donations found!</li>
          ) : (
            donations.map((donation) => (
              <li key={donation._id} className="p-4 bg-green-100 rounded-lg shadow">
                <h4 className="text-lg font-semibold">Donor: {donation.donor.name}</h4>
                <p>Email: {donation.donor.email}</p>
                <p>Amount: ${donation.amount}</p>
                <p>Status: {donation.status}</p>
              </li>
            ))
          )}
        </ul>

        {/* Volunteers List */}
        <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Volunteers</h3>
        <ul className="space-y-4">
          {volunteers.length === 0 ? (
            <li className="text-gray-600">No volunteers found!</li>
          ) : (
            volunteers.map((volunteer) => (
              <li key={volunteer._id} className="p-4 bg-purple-100 rounded-lg shadow">
                <h4 className="text-lg font-semibold">{volunteer.user.name}</h4>
                <p>Email: {volunteer.user.email}</p>
                <p>Phone: {volunteer.user.phone}</p>
                <p>Skills: {volunteer.skills.join(", ")}</p>
                <p>Availability: {volunteer.availability}</p>
                <p>Status: {volunteer.status}</p>
              </li>
            ))
          )}
        </ul>

        {/* Back to Admin Dashboard Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/admin")} // Navigate back to dashboard
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Back to Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
