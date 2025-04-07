// adminLogout.tsx or inside any component (like AdminDashboard.tsx)

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token and user info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to the login page
    navigate("/login");  // You can change this path based on your routing setup
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition"
    >
      Logout
    </button>
  );
};

export default AdminLogout;
