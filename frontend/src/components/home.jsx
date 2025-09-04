import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSocket } from "../hooks/useSocket";

const HomePage = () => {
  const { socket, connected } = useSocket();
  const [disasters, setDisasters] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    axios.get("https://disaster-relief-app-3.onrender.com/api/v1/disasters").then((res) => {
      console.log('Disasters API response:', res.data);
      setDisasters(res.data.data || res.data || []);
    }).catch(err => {
      console.error('Error fetching disasters:', err);
      setDisasters([]);
    });
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://disaster-relief-app-3.onrender.com/api/v1/subscribe", { email });
      toast.success(response.data.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Subscription failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  if (!connected) {
    return (
      <div className="flex items-center justify-center min-h-screen gradient-primary">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-2xl font-bold animate-pulse">Connecting to live updates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">🌍 DisasterAid</h1>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="/login" className="text-white hover:text-blue-200 transition-colors">Login</a>
              <a href="/register" className="text-white hover:text-blue-200 transition-colors">Register</a>
              <a href="/dashboard" className="btn-primary">Dashboard</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <img
          src="/image.png"
          alt="Disaster Relief"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{animationDelay: '4s'}}>
          <div className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="block animate-pulse-slow">🌎 Act Now,</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Save Lives! 🚀
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Connecting communities in crisis with immediate relief and support
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/dashboard" className="btn-primary text-lg px-8 py-4">
              🏠 Go to Dashboard
            </a>
            <a href="/donate" className="btn-secondary text-lg px-8 py-4">
              💝 Donate Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-white/80">Lives Saved</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/80">Emergency Support</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-white/80">Active Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Disaster Alerts */}
      <div className="bg-gray-900 text-white py-4 overflow-hidden border-y border-red-500/30">
        <div className="flex items-center mb-2">
          <span className="text-red-400 font-semibold px-6">🚨 LIVE ALERTS:</span>
        </div>
        <div className="animate-marquee whitespace-nowrap">
          {disasters.length > 0 ? (
            disasters.map((disaster, index) => (
              <div key={index} className="inline-block px-8 text-red-300 font-medium">
                🚨 {disaster.name} - 📍 {disaster.location} | ⚠️ Severity: {disaster.severity}
              </div>
            ))
          ) : (
            <div className="inline-block px-8 text-green-400 font-medium">
              ✅ No active disasters reported - All clear!
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help</h2>
            <p className="text-xl text-gray-600">Comprehensive disaster relief at your fingertips</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-3">Real-time Alerts</h3>
              <p className="text-gray-600">Get instant notifications about disasters in your area and emergency updates.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Volunteer Network</h3>
              <p className="text-gray-600">Connect with local volunteers and coordinate relief efforts efficiently.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-3">Easy Donations</h3>
              <p className="text-gray-600">Secure and transparent donation system for money, supplies, and food.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-emerald-100 to-teal-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">✨ Success Stories</h2>
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl border border-emerald-100">
            <p className="text-2xl text-gray-800 mb-4">
              🌍 Over <span className="text-emerald-600 font-bold">5000+ families</span> rescued through our platform!
            </p>
            <blockquote className="text-lg text-gray-700 italic">
              "This platform saved our lives during the flood. The response was immediate and the volunteers were incredible. Thank you for giving us hope!" 
              <footer className="text-gray-500 mt-2">- Maria S., Flood Survivor</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <footer className="gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Newsletter */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">📩 Stay Updated</h2>
              <p className="text-gray-300 mb-6">Get real-time alerts, safety tips, and relief updates directly to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-modern flex-1 text-gray-900"
                  disabled={loading}
                />
                <button
                  onClick={handleSubscribe}
                  className="btn-secondary whitespace-nowrap"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </div>
            
            {/* Emergency Contacts */}
            <div className="text-center md:text-right">
              <h2 className="text-2xl font-bold mb-4">📞 Emergency Contacts</h2>
              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-3">
                  <span className="text-red-400">🚑 Medical Emergency:</span>
                  <span className="font-semibold ml-2">+123 456 7890</span>
                </div>
                <div className="glass-effect rounded-lg p-3">
                  <span className="text-blue-400">🚔 Police:</span>
                  <span className="font-semibold ml-2">+987 654 3210</span>
                </div>
                <div className="glass-effect rounded-lg p-3">
                  <span className="text-orange-400">🔥 Fire Department:</span>
                  <span className="font-semibold ml-2">+111 222 3333</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 DisasterAid. Made with ❤️ for humanity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;