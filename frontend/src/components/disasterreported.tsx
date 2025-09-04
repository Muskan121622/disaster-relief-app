
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Navigation */}
      <nav className="glass-effect border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors"
            >
              <span className="text-xl">←</span>
              <span className="font-medium">Dashboard</span>
            </button>
            <h1 className="text-2xl font-bold text-white flex items-center">
              <span className="mr-3">🌍</span>
              Active Disasters
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="glass-effect rounded-3xl p-8 text-center">
              <div className="animate-spin text-6xl mb-4">⏳</div>
              <p className="text-white text-lg font-semibold">Loading disasters...</p>
            </div>
          </div>
        ) : disasters.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="glass-effect rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Active Disasters</h3>
              <p className="text-white/70 text-lg mb-6">Great news! No disasters are currently reported.</p>
              <button
                onClick={() => navigate("/report-disaster")}
                className="btn-primary px-8 py-3 rounded-2xl font-semibold"
              >
                Report New Disaster
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {disasters.map((disaster) => (
              <div key={disaster.id} className="glass-effect rounded-3xl p-8 shadow-xl card-hover group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">🚨</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {disaster.name}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            disaster.severity === 'High' ? 'bg-red-400/20 text-red-300' :
                            disaster.severity === 'Medium' ? 'bg-amber-400/20 text-amber-300' :
                            'bg-emerald-400/20 text-emerald-300'
                          }`}>
                            {disaster.severity} Severity
                          </span>
                          <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                            {disaster.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-emerald-400">📍</span>
                      <p className="text-white/80 font-medium">{disaster.location}</p>
                    </div>
                    
                    {disaster.images && disaster.images.length > 0 && (
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-emerald-400">📷</span>
                        <p className="text-white/60 text-sm">{disaster.images.length} image(s) available</p>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => navigate(`/disaster/${disaster.id}`)}
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all duration-200 flex items-center space-x-2 group-hover:scale-105"
                  >
                    <span>🔍</span>
                    <span>View Details</span>
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                        <span className="text-white/60">Active Emergency</span>
                      </div>
                      <span className="text-white/40">|</span>
                      <span className="text-white/60">ID: {disaster.id.slice(-8)}</span>
                    </div>
                    <div className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                      Click for assistance options →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Quick Actions */}
        {disasters.length > 0 && (
          <div className="mt-8 glass-effect rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">⚡</span>
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => navigate("/report-disaster")}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-2xl font-semibold hover:from-red-600 hover:to-red-700 transition-all"
              >
                🚨 Report New Disaster
              </button>
              <button
                onClick={() => navigate("/volunteer-registration")}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                🤝 Join as Volunteer
              </button>
              <button
                onClick={() => navigate("/donate")}
                className="btn-primary p-4 rounded-2xl font-semibold"
              >
                💰 Make Donation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisasterReported;
