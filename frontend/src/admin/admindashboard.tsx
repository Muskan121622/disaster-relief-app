// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const AdminDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
//       {/* Sidebar */}
//       <div className="w-64 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white p-6 shadow-lg">
//         <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-300">
//           Admin Panel
//         </h2>
//         <ul className="space-y-4 text-lg font-semibold">
//           <li>
//             <Link
//               to="/admin/home"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               🏠 Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/donations"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               💵 Manage Donations
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/users"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               👥 Manage Users
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/notifications"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               📢 Notifications
//             </Link>
//           </li>
//           <li>
//             <button
//               className="block w-full p-3 mt-8 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
//               onClick={() => {
//                 // Handle logout logic here
//               }}
//             >
//               🚪 Logout
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-auto bg-gray-50 rounded-lg shadow-md">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome, Admin!</h1>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;









// AdminDashboard.tsx

// import React from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import the toastify styles

// const AdminDashboard = () => {
//   const navigate = useNavigate(); // To handle programmatic navigation

//   const handleLogout = () => {
//     // Show toast notification
//     toast.success("Logged out successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//     });

//     // Clear token and user info from localStorage
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     // Redirect to Admin Logout page after the toast
//     setTimeout(() => {
//       navigate("/admin/logout");
//     }, 2000); // Delay navigation to let the toast appear
//   };

//   return (
//     <div className="flex h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
//       {/* Sidebar */}
//       <div className="w-64 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white p-6 shadow-lg">
//         <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-300">
//           Admin Panel
//         </h2>
//         <ul className="space-y-4 text-lg font-semibold">
//           <li>
//             <Link
//               to="/admin/home"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               🏠 Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/donations"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               💵 Manage Donations
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/users"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               👥 Manage Users
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/notifications"
//               className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
//             >
//               📢 Notifications
//             </Link>
//           </li>
//           <li>
//             <button
//               className="block w-full p-3 mt-8 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
//               onClick={handleLogout} // Log out and redirect to the logout page
//             >
//               🚪 Logout
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-auto bg-gray-50 rounded-lg shadow-md">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome, Admin!</h1>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


















import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toastify styles

const AdminDashboard = () => {
  const navigate = useNavigate(); // To handle programmatic navigation

  const handleLogout = () => {
    // Show toast notification
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Clear token and user info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to Admin Login page after the toast
    setTimeout(() => {
      navigate("/admin/login"); // Navigate to login page
    }, 2000); // Delay navigation to let the toast appear
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white p-6 shadow-lg">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-300">
          Admin Panel
        </h2>
        <ul className="space-y-4 text-lg font-semibold">
          <li>
            <Link
              to="/admin/home"
              className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              🏠 Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/donations"
              className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              💵 Manage Donations
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              👥 Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/notifications"
              className="block p-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              📢 Notifications
            </Link>
          </li>
          <li>
            <button
              className="block w-full p-3 mt-8 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
              onClick={handleLogout} // Log out and redirect to the login page
            >
              🚪 Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome, Admin!</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
