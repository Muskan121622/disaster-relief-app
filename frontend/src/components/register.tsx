import { useState } from "react";
import { authService } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiUserCheck } from "react-icons/fi";
import { toast } from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "donor" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.register(formData);
      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
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
          <h1 className="text-4xl font-bold text-white mb-2">Join Our Mission</h1>
          <p className="text-white/80 text-lg">Create an account to help save lives</p>
        </div>

        {/* Registration Form */}
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto"></div>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-100 p-3 rounded-xl mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
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
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  placeholder="Create a strong password"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">Role</label>
              <div className="relative">
                <FiUserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="donor" className="bg-gray-800">Donor</option>
                  <option value="volunteer" className="bg-gray-800">Volunteer</option>
                  <option value="victim" className="bg-gray-800">Victim</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/80">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-green-300 font-semibold hover:text-green-200 transition-colors underline"
              >
                Sign in here
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

        {/* Role Information */}
        <div className="mt-6 glass-effect rounded-2xl p-4">
          <h3 className="text-white font-semibold mb-3 text-center">Choose Your Role</h3>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">•</span>
              <span><strong>Donor:</strong> Contribute funds and resources</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">•</span>
              <span><strong>Volunteer:</strong> Provide hands-on assistance</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-400">•</span>
              <span><strong>Victim:</strong> Request emergency assistance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

