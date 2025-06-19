
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface User {
  _id: string;
  name: string;
  email: string;
}

interface Donation {
  _id: string;
  donor: User;
  type: string;
  amount: number;
  status: string;
}

const Donations = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("https://disaster-relief-app-3.onrender.com/api/v1/user/donations", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => setDonations(res.data))
    .catch((error) => console.error("Error fetching donations:", error));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <h2 className="text-3xl font-extrabold text-center mb-6">Donations</h2>
      {donations.length === 0 ? (
        <p className="text-center text-lg">No donations yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {donations.map((donation) => (
            <div key={donation._id} className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6 border-l-8 border-green-500">
              <p className="text-xl font-bold text-green-700">{donation.donor.name}</p>
              <p className="text-gray-700 font-semibold">Email: {donation.donor.email}</p>
              <p className="text-gray-700 font-semibold">Type: {donation.type}</p>
              <p className="text-gray-700 font-semibold">Amount: ${donation.amount}</p>
              <p className={`text-lg font-semibold ${donation.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}`}>Status: {donation.status}</p>
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-6">
        <button onClick={() => navigate("/dashboard")} className="bg-blue-600 px-6 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Donations;
