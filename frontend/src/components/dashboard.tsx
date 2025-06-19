
import { useEffect, useState, useContext } from "react";
import { donationService, volunteerService, disasterService } from "../services/api";
import AuthContext from "../context/authcontext";
import DisasterMap from "../map/disastermap";
import { useNavigate } from "react-router-dom";
import socket from "../services/socket";
import Chat from "../components/chat";
import Notifications from "../components/notification"; // Import Notifications Component
const Dashboard = () => {
  const [donations, setDonations] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [disasters, setDisasters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
  const { user } = authContext;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [donationsData, volunteersData, disastersData] = await Promise.all([
          donationService.getDonations(),
          volunteerService.getVolunteers(),
          disasterService.getDisasters(),
        ]);

        setDonations(donationsData || []);
        setVolunteers(volunteersData || []);
        setDisasters(Array.isArray(disastersData) ? disastersData : []);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    socket.on("donationUpdate", (newDonation: any) => {
      setDonations((prev) => [newDonation, ...prev]);
    });
    socket.on("volunteerUpdate", (newVolunteer: any) => {
      setVolunteers((prev) => [newVolunteer, ...prev]);
    });
    return () => {
      socket.off("donationUpdate");
      socket.off("volunteerUpdate");
    };
  }, []);

  return (
    
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 min-h-screen flex flex-col items-center p-2 sm:p-4 relative">
        {/* Top Navigation */}
        <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 px-4 py-3 flex justify-between items-center flex-wrap">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition text-sm sm:text-base"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <h2 className="text-xl sm:text-3xl font-bold text-white text-center flex-1 sm:flex-none">
            Disaster Management
          </h2>
          <div className="mt-2 sm:mt-0">
            <Chat />
          </div>
        </div>
    
        {/* Notification Component (Responsive position for mobile) */}
        <div className="fixed top-20 right-4 w-11/12 sm:w-72 z-40">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-4 rounded-xl">
            <h3 className="text-white font-semibold text-lg mb-2">📢 Notifications</h3>
            <Notifications />
          </div>
        </div>
    
        {/* Loading */}
        {loading ? (
          <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
        ) : (
          <>
            {/* Statistics Boxes */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-4 sm:space-y-0 mt-6">
              <div
                className="text-center bg-white p-6 rounded-2xl shadow-2xl w-full sm:w-52 cursor-pointer hover:scale-105 transition"
                onClick={() => navigate("/disasters")}
              >
                <h3 className="text-lg font-semibold text-red-600">Disasters Registered</h3>
                <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
              </div>
              <div
                className="text-center bg-white p-6 rounded-2xl shadow-2xl w-full sm:w-52 cursor-pointer hover:scale-105 transition"
                onClick={() => navigate("/donation")}
              >
                <h3 className="text-lg font-semibold text-green-600">Donations</h3>
                <p className="text-4xl font-bold text-green-600">{donations.length}</p>
              </div>
              <div
                className="text-center bg-white p-6 rounded-2xl shadow-2xl w-full sm:w-52 cursor-pointer hover:scale-105 transition"
                onClick={() => navigate("/volunteers")}
              >
                <h3 className="text-lg font-semibold text-blue-600">Volunteers Registered</h3>
                <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
              </div>
            </div>
    
            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-lg px-2">
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/report-disaster")}
              >
                Report Disaster
              </div>
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/disasters")}
              >
                Disaster Reported
              </div>
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/volunteer-registration")}
              >
                Volunteer Registration
              </div>
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/map")}
              >
                Maps
              </div>
            </div>
          </>
        )}
      </div>
  );
};

export default Dashboard;
