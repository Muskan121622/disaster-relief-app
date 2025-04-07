import { useState } from "react";
import { authService } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "donor" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await authService.register(formData);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed");
    }
  };

  return (
    <div className=" bg-gradient-to-r from-black to-lime-400 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button 
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

