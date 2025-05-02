
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Disaster {
  id: string;
  name: string;
  location: string;
  severity: string;
  type: string;
  images: string[];
}

const DisasterReported = () => {
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await axios.get<{ success: boolean; data: Disaster[] }>(
          "https://disaster-relief-app-3.onrender.com/api/v1/disasters"
        );

        if (response.data.success) {
          setDisasters(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching disasters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-md py-4 px-6 text-center rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-800">🌍 Reported Disasters</h2>
      </div>

      {/* Disaster List Container */}
      <div className="w-full max-w-6xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-xl mt-6">
        {loading ? (
          <p className="text-center text-lg text-gray-700 font-bold animate-pulse">Loading...</p>
        ) : disasters.length === 0 ? (
          <p className="text-center text-lg text-gray-700 font-bold">No disasters reported yet.</p>
        ) : (
          <ul className="space-y-4">
            {disasters.map((disaster) => (
              <li
                key={disaster.id}
                className="p-4 bg-gradient-to-r from-blue-400 to-green-400 border rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">{disaster.name}</h3>
                  <p className="text-sm text-white">
                    <strong>📍 Location:</strong> {disaster.location}
                  </p>
                  <p className="text-sm text-white">
                    <strong>🔥 Type:</strong> {disaster.type} | <strong>⚠️ Severity:</strong> {disaster.severity}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/disaster/${disaster.id}`)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                >
                  🔍 View Details
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Back to Dashboard Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg block mx-auto"
        >
          ⬅️ Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DisasterReported;
