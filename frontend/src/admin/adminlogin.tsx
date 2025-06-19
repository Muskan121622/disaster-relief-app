import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import toast from "react-hot-toast";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://disaster-relief-app-3.onrender.com/api/v1/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("Admin Login Response:", data); // 🔍 Debugging Step
      if (response.ok) {
        localStorage.setItem("token", data.token); // ✅ Store token manually
        localStorage.setItem("user", JSON.stringify(data.admin)); // ✅ Store user details
        toast.success("🚀 Login successful!");
  
        setTimeout(() => {
          console.log("Navigating to /admin..."); // ✅ Debug log before navigating
          navigate("/admin/"); // ✅ Ensure navigation is called
        }, 1000); // Add a small delay to ensure state updates
      } else {
        toast.error(data.message || "❌ Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("⚠️ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          🔑 Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border-none rounded-md bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border-none rounded-md bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-3 rounded-md font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "🔄 Logging in..." : "🚀 Login"}
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Not an admin?{" "}
          <Link to="/admin/signup" className="underline text-yellow-300 hover:text-yellow-500">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AdminLogin;
