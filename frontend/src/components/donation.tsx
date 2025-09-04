
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
              <span className="mr-3">💰</span>
              Donations
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {donations.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="glass-effect rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">💸</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Donations Yet</h3>
              <p className="text-white/70 text-lg mb-6">Be the first to make a difference!</p>
              <button
                onClick={() => navigate("/donate")}
                className="btn-primary px-8 py-3 rounded-2xl font-semibold"
              >
                Make a Donation
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {donations.map((donation) => (
              <div key={donation._id} className="glass-effect rounded-3xl p-8 shadow-xl border-l-4 border-emerald-400 card-hover">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                      <span className="mr-3">👤</span>
                      {donation.donor.name}
                    </h3>
                    <p className="text-emerald-400 font-medium">{donation.donor.email}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl mb-2">💵</div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      donation.status === 'Pending' 
                        ? 'bg-amber-400/20 text-amber-300' 
                        : 'bg-emerald-400/20 text-emerald-300'
                    }`}>
                      {donation.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-400">🏷️</span>
                    <div>
                      <p className="text-white/70 text-sm">Donation Type</p>
                      <p className="text-white font-semibold text-lg">{donation.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-400">💰</span>
                    <div>
                      <p className="text-white/70 text-sm">Amount</p>
                      <p className="text-white font-bold text-2xl">${donation.amount.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                      <span className="text-white/70 text-sm">Donation ID: {donation._id.slice(-8)}</span>
                    </div>
                    <button className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Summary Card */}
        {donations.length > 0 && (
          <div className="mt-8 glass-effect rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-3">📈</span>
              Donation Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">{donations.length}</p>
                <p className="text-white/70">Total Donations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">
                  ${donations.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
                </p>
                <p className="text-white/70">Total Amount</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-400">
                  {donations.filter(d => d.status === 'Completed').length}
                </p>
                <p className="text-white/70">Completed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donations;
