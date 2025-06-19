
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
      setDisasters(res.data.data);
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
      setEmail(""); // Clear input after subscribing
    } catch (error) {
      toast.error(error.response?.data?.message || "Subscription failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Show loading screen while socket is not connected
  if (!connected) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl font-bold">
        Connecting to live updates...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Hero Section with Full Background */}
      <section className="relative h-screen w-full">
        <img
          src="/image.png" // Ensure this image is in the public folder
          alt="Disaster Relief"
          className="absolute w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">🌎 Act Now, Save Lives! 🚀</h1>
          <p className="mt-4 text-xl font-semibold">Providing urgent aid to affected communities.</p>
          <div className="mt-6 flex gap-4">
            <a href="/dashboard" className="bg-blue-600 px-8 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition">
              Go to Dashboard
            </a>
            <a href="/donate" className="bg-green-600 px-8 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-green-700 transition">
              Donate Now
            </a>
          </div>
        </div>
      </section>



      {/* Live Disaster Alerts */}
      <div className="w-full bg-black text-white py-3 overflow-hidden">
        <div className="flex space-x-10 animate-marquee whitespace-nowrap">
          {disasters.length > 0 ? (
            disasters.map((disaster, index) => (
              <div key={index} className="px-6 text-red-400 font-semibold">
                🚨 {disaster.name} - 📍 {disaster.location} | ⚠️ Severity: {disaster.severity}
              </div>
            ))
          ) : (
            <div className="px-6 text-yellow-400 font-semibold">No active disasters reported.</div>
          )}
        </div>
      </div>


      {/* Success Stories */}
      <section className="max-w-5xl mx-auto py-10 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">✅ Success Stories</h2>
        <p className="text-lg">🌍 Over <span className="text-yellow-300 font-bold">5000+ families</span> rescued through our platform!</p>
        <p className="text-lg italic mt-4">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:w-1/3 mx-auto">
          <h2 className="text-xl font-semibold">📩 Stay Updated</h2>
          <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 text-gray-900 rounded-lg"
              disabled={loading}
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/3 text-right">
          <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>🚑 Medical: +123 456 7890</li>
            <li>🚔 Police: +987 654 3210</li>
            <li>🔥 Fire Dept: +111 222 3333</li>
          </ul>
        </div>
      </footer>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>

    </div>
  );
};

export default HomePage;