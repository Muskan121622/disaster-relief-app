// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminHome = () => {
//   const [stats, setStats] = useState({ donations: 0, users: 0 });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const usersResponse = await axios.get("http://localhost:1217/api/v1/admin/users");
//         const donationsResponse = await axios.get("http://localhost:1217/api/v1/admin/donations/total");
   
//         setStats({
//           donations: donationsResponse.data.length,
//           users: usersResponse.data.length,

//         });
//       } catch (error) {
//         console.error("Error fetching stats", error);
//       }
//     };
//     fetchStats();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//       <div className="grid grid-cols-2 gap-4 mt-6">
//         <div className="p-6 bg-white shadow rounded">
//           <h3 className="text-xl font-semibold">Total Users</h3>
//           <p className="text-3xl">{stats.users}</p>
//         </div>
//         <div className="p-6 bg-white shadow rounded">
//           <h3 className="text-xl font-semibold">Total Donations</h3>
//           <p className="text-3xl">{stats.donations}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;









// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminHome = () => {
//   const [stats, setStats] = useState({ donations: 0, users: 0 });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         // Fetch users and donations stats
//         const usersResponse = await axios.get("http://localhost:1217/api/v1/admin/users");
//         const donationsResponse = await axios.get("http://localhost:1217/api/v1/admin/donations/total");

//         setStats({
//           donations: donationsResponse.data.totalDonations,  // Ensure you get the total donation value
//           users: usersResponse.data.length,
//         });
//       } catch (error) {
//         console.error("Error fetching stats", error);
//       }
//     };
//     fetchStats();
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 min-h-screen text-white py-10">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-6">Admin Dashboard</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Total Users Card */}
//           <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
//             <h3 className="text-xl font-semibold text-indigo-600 mb-4">Total Users</h3>
//             <p className="text-4xl font-bold">{stats.users}</p>
//           </div>
          
//           {/* Total Donations Card */}
//           <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
//             <h3 className="text-xl font-semibold text-purple-600 mb-4">Total Donations</h3>
//             <p className="text-4xl font-bold">${stats.donations.toLocaleString()}</p> {/* Format donations */}
//           </div>
          
//           {/* Add any other Stats card here */}
//           <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
//             <h3 className="text-xl font-semibold text-pink-600 mb-4">Another Stat</h3>
//             <p className="text-4xl font-bold">XX</p> {/* Example stat */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;







// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminHome = () => {
//   const [stats, setStats] = useState({ donations: 0, users: 0 });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         // Retrieve the token from localStorage (or wherever you store it)
//         const token = localStorage.getItem("token");

//         if (!token) {
//           console.error("No token found. User is not authenticated.");
//           return; // Exit if there's no token
//         }

//         // Fetch users and donations stats with the token in the headers
//         const usersResponse = await axios.get("http://localhost:1217/api/v1/admin/users", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in the header
//           },
//         });

//         const donationsResponse = await axios.get("http://localhost:1217/api/v1/admin/donations/total", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in the header
//           },
//         });

//         setStats({
//           donations: donationsResponse.data.totalDonations,  // Ensure you get the total donation value
//           users: usersResponse.data.length,
//         });
//       } catch (error) {
//         console.error("Error fetching stats", error);
//         // You can also handle specific error cases here (e.g., invalid token)
//       }
//     };
//     fetchStats();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//       <div className="grid grid-cols-2 gap-4 mt-6">
//         <div className="p-6 bg-white shadow rounded">
//           <h3 className="text-xl font-semibold">Total Users</h3>
//           <p className="text-3xl">{stats.users}</p>
//         </div>
//         <div className="p-6 bg-white shadow rounded">
//           <h3 className="text-xl font-semibold">Total Donations</h3>
//           <p className="text-3xl">${stats.donations.toLocaleString()}</p> {/* Format donations */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;
































import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const [stats, setStats] = useState({ donations: 0, users: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No token found. Redirecting to login...");
          setTimeout(() => navigate("/login"), 1500);
          return;
        }

        const [usersResponse, donationsResponse] = await Promise.all([
          axios.get("https://disaster-relief-app-3.onrender.com/api/v1/admin/users", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://disaster-relief-app-3.onrender.com/api/v1/admin/donations/total", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setStats({
          donations: donationsResponse.data.totalDonations || 0,
          users: usersResponse.data.length || 0,
        });
      } catch (error: any) {
        console.error("Error fetching stats:", error);
        if (error.response?.status === 401 || error.response?.status === 403) {
          setError("Unauthorized access. Redirecting to login...");
          setTimeout(() => navigate("/login"), 1500);
        } else {
          setError("Failed to fetch data. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>

      {loading ? (
        <div className="text-gray-700 text-lg">Loading stats...</div>
      ) : error ? (
        <div className="text-red-500 text-lg">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-4xl font-bold text-blue-500">{stats.users}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Total Donations</h3>
            <p className="text-4xl font-bold text-green-500">
              ${stats.donations.toLocaleString()}
            </p>
          </div>
        </div>
      )}

<div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/admin")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Back to Admin Dashboard
          </button>
        </div>
    </div>
  );
};

export default AdminHome;

