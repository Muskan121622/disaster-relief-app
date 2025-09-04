import { useState } from "react";
import { useAuth } from "../context/authcontext";
import { authService } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { user, token } = await authService.login(formData);
      if (!user || !token) {
        throw new Error("Invalid response from server");
      }

      setUser(user);
      setToken(token);

      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-32 h-32 bg-white/5 rounded-full backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-20 right-16 animate-float" style={{animationDelay: '2s'}}>
        <div className="w-24 h-24 bg-white/5 rounded-full backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{animationDelay: '4s'}}>
        <div className="w-16 h-16 bg-white/5 rounded-full backdrop-blur-sm"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce-slow">🌍</div>
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-white/80 text-lg">Sign in to continue helping communities</p>
        </div>

        {/* Login Form */}
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-100 p-3 rounded-xl mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/80">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-blue-300 font-semibold hover:text-blue-200 transition-colors underline"
              >
                Create one here
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <button
              onClick={() => navigate("/")}
              className="w-full text-white/80 hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm mb-3">Quick Access</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/admin/login")}
              className="glass-effect px-4 py-2 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
            >
              Admin Login
            </button>
            <button
              onClick={() => navigate("/donate")}
              className="glass-effect px-4 py-2 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
            >
              Emergency Donate
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;










