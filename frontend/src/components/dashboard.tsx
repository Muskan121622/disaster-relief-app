import { useEffect, useState, useContext } from "react";
import { donationService, volunteerService, disasterService } from "../services/api";
import AuthContext from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import socket from "../services/socket";
import Chat from "../components/chat";
import Notifications from "../components/notification";
import { FiMessageCircle, FiBell } from "react-icons/fi";

const Dashboard = () => {
  const [donations, setDonations] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [disasters, setDisasters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [messages, setMessages] = useState<{sender: string; message: string}[]>([]);
  const [newMessage, setNewMessage] = useState("");
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
    socket.on("chatHistory", (history: any) => {
      setMessages(history);
    });
    socket.on("receiveMessage", (message: any) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.off("donationUpdate");
      socket.off("volunteerUpdate");
      socket.off("chatHistory");
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() && user) {
      const messageData = { sender: user.name, message: newMessage };
      socket.emit("sendMessage", messageData);
      setNewMessage("");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen gradient-primary flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl font-semibold animate-pulse">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-primary">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-white hover:text-emerald-200 transition-colors"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold">Home</span>
            </button>
            
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              🌍 Relief Dashboard
            </h1>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <FiBell size={20} />
              </button>
              
              <div className="text-sm text-white">
                <span className="font-semibold">{user?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FiMessageCircle size={24} />
      </button>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-20 right-6 z-50">
          <div className="bg-white rounded-2xl w-72 h-80 shadow-2xl border flex flex-col">
            <div className="flex justify-between items-center p-3 pb-2 border-b">
              <h3 className="font-semibold text-gray-900">Live Chat</h3>
              <button
                onClick={() => {
                  setShowChat(false);
                  setMessages([]);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 bg-gray-50">
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} className="mb-2 p-2 bg-white rounded shadow-sm">
                    <span className="font-semibold text-blue-600">{msg.sender}:</span>
                    <span className="ml-2 text-gray-800">{msg.message}</span>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-center py-8">No messages yet. Start the conversation!</div>
              )}
            </div>
            <div className="p-2 border-t bg-white rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type message..."
                  className="flex-1 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button 
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Modal */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowNotifications(false)}
        >
          <div 
            className="glass-effect rounded-2xl p-6 w-96 max-h-96 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">Notifications</h3>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-white hover:text-gray-300 text-xl font-bold"
              >
                ✕
              </button>
            </div>
            <Notifications />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user?.name}! 👋
          </h2>
          <p className="text-lg text-white/80">Manage disaster relief operations from your dashboard</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className="glass-effect rounded-3xl p-8 shadow-xl card-hover cursor-pointer border-l-4 border-red-400 group"
            onClick={() => navigate("/disasters")}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/70 mb-2">Active Disasters</p>
                <p className="text-4xl font-bold text-red-400 mb-1">{disasters.length}</p>
                <p className="text-xs text-white/60 group-hover:text-red-400 transition-colors">Click to view details</p>
              </div>
              <div className="text-5xl opacity-80 group-hover:scale-110 transition-transform">🚨</div>
            </div>
          </div>

          <div
            className="glass-effect rounded-3xl p-8 shadow-xl card-hover cursor-pointer border-l-4 border-emerald-400 group"
            onClick={() => navigate("/donation")}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/70 mb-2">Total Donations</p>
                <p className="text-4xl font-bold text-emerald-400 mb-1">{donations.length}</p>
                <p className="text-xs text-white/60 group-hover:text-emerald-400 transition-colors">Click to manage</p>
              </div>
              <div className="text-5xl opacity-80 group-hover:scale-110 transition-transform">💝</div>
            </div>
          </div>

          <div
            className="glass-effect rounded-3xl p-8 shadow-xl card-hover cursor-pointer border-l-4 border-blue-400 group"
            onClick={() => navigate("/volunteers")}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/70 mb-2">Active Volunteers</p>
                <p className="text-4xl font-bold text-blue-400 mb-1">{volunteers.length}</p>
                <p className="text-xs text-white/60 group-hover:text-blue-400 transition-colors">Click to view list</p>
              </div>
              <div className="text-5xl opacity-80 group-hover:scale-110 transition-transform">🤝</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => navigate("/report-disaster")}
              className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-3xl shadow-xl card-hover text-left group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚨</div>
              <h4 className="font-bold text-xl mb-3">Report Disaster</h4>
              <p className="text-sm opacity-90">Alert authorities about emergencies</p>
            </button>

            <button
              onClick={() => navigate("/volunteer-registration")}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-xl card-hover text-left group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
              <h4 className="font-bold text-xl mb-3">Join as Volunteer</h4>
              <p className="text-sm opacity-90">Help your community in need</p>
            </button>

            <button
              onClick={() => navigate("/donate")}
              className="btn-primary p-8 rounded-3xl shadow-xl card-hover text-left group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💝</div>
              <h4 className="font-bold text-xl mb-3">Make Donation</h4>
              <p className="text-sm opacity-90">Support relief efforts</p>
            </button>

            <button
              onClick={() => navigate("/map")}
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl shadow-xl card-hover text-left group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🗺️</div>
              <h4 className="font-bold text-xl mb-3">View Map</h4>
              <p className="text-sm opacity-90">See disaster locations</p>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">🚨</span> Recent Disasters
            </h3>
            <div className="space-y-4">
              {disasters.slice(0, 3).map((disaster, index) => (
                <div key={index} className="flex items-center p-4 bg-white/10 rounded-xl">
                  <div className="w-4 h-4 bg-red-400 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{disaster.name}</p>
                    <p className="text-sm text-white/70">{disaster.location}</p>
                  </div>
                  <span className="text-xs bg-red-400/20 text-red-300 px-3 py-1 rounded-full font-medium">
                    {disaster.severity}
                  </span>
                </div>
              ))}
              {disasters.length === 0 && (
                <p className="text-white/60 text-center py-8">✅ No active disasters</p>
              )}
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">💝</span> Recent Donations
            </h3>
            <div className="space-y-4">
              {donations.slice(0, 3).map((donation, index) => (
                <div key={index} className="flex items-center p-4 bg-white/10 rounded-xl">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{donation.type}</p>
                    <p className="text-sm text-white/70">
                      {donation.amount ? `$${donation.amount}` : donation.mention || 'Food donation'}
                    </p>
                  </div>
                  <span className="text-xs bg-emerald-400/20 text-emerald-300 px-3 py-1 rounded-full font-medium">
                    New
                  </span>
                </div>
              ))}
              {donations.length === 0 && (
                <p className="text-white/60 text-center py-8">No donations yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;