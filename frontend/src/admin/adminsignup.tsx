












import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://disaster-relief-app-3.onrender.com/api/v1/admin/signup", {
        name,
        email,
        password,
      });

      alert("🎉 Admin registered successfully!");
      navigate("/admin/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error during signup");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          ✨ Admin Signup ✨
        </h2>
        {error && (
          <p className="text-red-300 bg-red-800 p-2 text-center rounded-md">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border-none rounded-md bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border-none rounded-md bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-purple-400"
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
              className="w-full p-3 border-none rounded-md bg-white/30 text-white placeholder-white focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-3 rounded-md font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            🚀 Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
