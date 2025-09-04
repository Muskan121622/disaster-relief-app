
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Volunteer {
  _id: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  name?: string;
  phone?: string;
  state?: string;
  district?: string;
  address?: string;
  skills: string[];
  availability: string;
}

const VolunteerDetails: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchVolunteerById(userId);
    } else {
      fetchVolunteers();
    }
  }, [userId]);

  const fetchUserId = async () => {
    try {
      const response = await axios.get("https://disaster-relief-app-3.onrender.com/api/v1/user/login");
      setUserId(response.data.user.id);
    } catch (err) {
      console.error("Failed to fetch user ID", err);
    }
  };

  const fetchVolunteers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://disaster-relief-app-3.onrender.com/api/v1/user/volunteers/");
      console.log("API Response:", response.data);
      setVolunteers(Array.isArray(response.data) ? response.data : []);
      setError("");
    } catch (err) {
      setError("Failed to fetch volunteers");
      setVolunteers([]);
    }
    setLoading(false);
  };

  const fetchVolunteerById = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://disaster-relief-app-3.onrender.com/api/v1/user/volunteers/${id}`);
      console.log("Volunteer by ID Response:", response.data);
      setVolunteers(Array.isArray(response.data) ? response.data : [response.data]);
      setError("");
    } catch (err) {
      setError("Volunteer not found");
      setVolunteers([]);
    }
    setLoading(false);
  };

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
              <span className="mr-3">🤝</span>
              Volunteer Details
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Overview */}
        {!loading && volunteers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{volunteers.length}</div>
              <div className="text-white/70 text-sm">Total Volunteers</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {volunteers.filter(v => v.availability === 'Full-time').length}
              </div>
              <div className="text-white/70 text-sm">Full-time Available</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                {new Set(volunteers.flatMap(v => v.skills)).size}
              </div>
              <div className="text-white/70 text-sm">Unique Skills</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {new Set(volunteers.map(v => v.state)).size}
              </div>
              <div className="text-white/70 text-sm">Locations</div>
            </div>
          </div>
        )}
        
        {/* Search and Filter */}
        {!loading && volunteers.length > 0 && (
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search volunteers by name, skills, or location..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
                    🔍
                  </div>
                </div>
              </div>
              <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="">All Availability</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="weekends">Weekends</option>
              </select>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="glass-effect rounded-3xl p-8 text-center">
              <div className="animate-spin text-4xl mb-4">⏳</div>
              <p className="text-white text-lg">Loading volunteers...</p>
            </div>
          </div>
        )}
        
        {error && (
          <div className="flex justify-center items-center py-12">
            <div className="glass-effect rounded-3xl p-8 text-center border-l-4 border-red-400">
              <div className="text-4xl mb-4">⚠️</div>
              <p className="text-red-400 text-lg font-semibold">{error}</p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {volunteers.map((volunteer) => (
            <div key={volunteer._id} className="glass-effect rounded-3xl p-6 shadow-2xl border border-white/10 card-hover group relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {(volunteer.name || volunteer.user.name).charAt(0).toUpperCase()}
                  </div>
                  <div className="text-right">
                    <span className="bg-emerald-400/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Active
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {volunteer.name || volunteer.user.name}
                </h3>
                <p className="text-white/60 text-sm">{volunteer.user.email}</p>
              </div>
              
              {/* Contact Info */}
              <div className="relative z-10 space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 text-sm">📱</span>
                  </div>
                  <span className="text-white/80 text-sm">{volunteer.phone || "Phone not provided"}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-400 text-sm">📍</span>
                  </div>
                  <span className="text-white/80 text-sm">
                    {volunteer.state || "Location"}, {volunteer.district || "Unknown"}
                  </span>
                </div>
              </div>
              
              {/* Skills */}
              <div className="relative z-10 mb-6">
                <h4 className="text-white/70 text-sm font-medium mb-3">Skills & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {volunteer.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-lg text-xs font-medium border border-white/20">
                      {skill}
                    </span>
                  ))}
                  {volunteer.skills.length > 3 && (
                    <span className="bg-emerald-400/20 text-emerald-300 px-3 py-1 rounded-lg text-xs font-medium">
                      +{volunteer.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              {/* Availability */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">Availability</span>
                  <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-lg text-xs font-medium">
                    {volunteer.availability}
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="relative z-10 flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-200">
                  Contact
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 border border-white/20">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {volunteers.length === 0 && !loading && !error && (
          <div className="flex justify-center items-center py-12">
            <div className="glass-effect rounded-3xl p-8 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-white/70 text-lg">No volunteers found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerDetails;