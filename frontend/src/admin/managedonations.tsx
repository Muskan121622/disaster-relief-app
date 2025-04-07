// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Donation {
//   _id: string;
//   name: string;
//   amount: number;
//   status: string;
// }

// const ManageDonations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]); // ✅ Set proper type

//   useEffect(() => {
//     axios.get("/api/admin/donations").then((response) => {
//       setDonations(response.data);
//     });
//   }, []);

//   const approveDonation = async (id: string) => {
//     await axios.put(`/api/admin/donations/approve/${id}`);
    
//     // ✅ Properly update the state by mapping over donations
//     setDonations((prev) =>
//       prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d))
//     );
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold">Manage Donations</h2>
//       <ul>
//         {donations.map((donation) => (
//           <li key={donation._id} className="p-4 bg-white shadow rounded mb-4">
//             <p><strong>{donation.name}</strong> - {donation.amount} USD</p>
//             <p>Status: {donation.status}</p>
//             {donation.status !== "approved" && (
//               <button
//                 onClick={() => approveDonation(donation._id)}
//                 className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
//               >
//                 Approve
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManageDonations;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCheckCircle, FaSpinner } from "react-icons/fa"; // ✅ Icons for better UI

// interface Donation {
//   _id: string;
//   name: string;
//   amount: number;
//   status: string;
// }

// const ManageDonations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchDonations = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get("/api/admin/donations");
//         setDonations(response.data);
//       } catch (error) {
//         console.error("Error fetching donations:", error);
//       }
//       setLoading(false);
//     };

//     fetchDonations();
//   }, []);

//   const approveDonation = async (id: string) => {
//     try {
//       await axios.put(`/api/admin/donations/approve/${id}`);
//       setDonations((prev) =>
//         prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d))
//       );
//     } catch (error) {
//       console.error("Error approving donation:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           🎗 Manage Donations
//         </h2>

//         {loading ? (
//           <div className="flex justify-center py-10">
//             <FaSpinner className="animate-spin text-4xl text-blue-500" />
//           </div>
//         ) : (
//           <ul className="space-y-6">
//             {donations.length === 0 ? (
//               <p className="text-gray-500 text-center">No donations available.</p>
//             ) : (
//               donations.map((donation) => (
//                 <li
//                   key={donation._id}
//                   className="p-5 bg-white shadow-lg rounded-lg transition transform hover:scale-105"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">{donation.name}</h3>
//                       <p className="text-gray-600">${donation.amount.toLocaleString()}</p>
//                       <p className={`font-medium mt-1 ${donation.status === "approved" ? "text-green-600" : "text-yellow-500"}`}>
//                         Status: {donation.status}
//                       </p>
//                     </div>
//                     {donation.status !== "approved" && (
//                       <button
//                         onClick={() => approveDonation(donation._id)}
//                         className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 hover:bg-green-600 transition-all duration-300"
//                       >
//                         <FaCheckCircle />
//                         Approve
//                       </button>
//                     )}
//                   </div>
//                 </li>
//               ))
//             )}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageDonations;
 






// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Donation {
//   _id: string;
//   name: string;
//   amount: number;
//   status: string;
// }

// const ManageDonations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]);

//   useEffect(() => {
//     axios.get("/api/admin/donations").then((response) => {
//       setDonations(response.data);
//     });
//   }, []);

//   const approveDonation = async (id: string) => {
//     await axios.put(`/api/admin/donations/approve/${id}`);

//     setDonations((prev) =>
//       prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d))
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Manage Donations
//         </h2>
//         <ul className="space-y-6">
//           {donations.length === 0 ? (
//             <li className="text-center text-gray-600">No donations found!</li>
//           ) : (
//             donations.map((donation) => (
//               <li
//                 key={donation._id}
//                 className="p-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold">{donation.name}</h3>
//                     <p className="text-sm">{donation.amount} USD</p>
//                     <p className="text-sm">Status: {donation.status}</p>
//                   </div>
//                   {donation.status !== "approved" && (
//                     <button
//                       onClick={() => approveDonation(donation._id)}
//                       className="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
//                     >
//                       Approve
//                     </button>
//                   )}
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ManageDonations;











// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Donation {
//   _id: string;
//   name: string;
//   amount: number;
//   status: string;
// }

// const ManageDonations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]); // Initialize as an empty array

//   useEffect(() => {
//     axios.get("/api/admin/donations")
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setDonations(response.data); // Ensure the response is an array
//         } else {
//           console.error("Invalid response format");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching donations:", error);
//       });
//   }, []);

//   const approveDonation = async (id: string) => {
//     await axios.put(`http://localhost:1217/api/admin/donations/approve/${id}`);
    
//     setDonations((prev) =>
//       prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d))
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Manage Donations
//         </h2>
//         <ul className="space-y-6">
//           {donations.length === 0 ? (
//             <li className="text-center text-gray-600">No donations found!</li>
//           ) : (
//             donations.map((donation) => (
//               <li
//                 key={donation._id}
//                 className="p-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold">{donation.name}</h3>
//                     <p className="text-sm">Amount: ${donation.amount}</p>
//                     <p className="text-sm">Status: {donation.status}</p>
//                   </div>
//                   {donation.status !== "approved" && (
//                     <button
//                       onClick={() => approveDonation(donation._id)}
//                       className="bg-green-500 text-white px-4 py-2 rounded-md"
//                     >
//                       Approve
//                     </button>
//                   )}
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ManageDonations;


















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// interface Donation {
//   _id: string;
//   name: string;
//   amount: number;
//   status: string;
// }

// const ManageDonations = () => {
//   const navigate = useNavigate(); // Initialize useNavigate for navigation
//   const [donations, setDonations] = useState<Donation[]>([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get("http://localhost:1217/api/v1/admin/donations");
//         if (Array.isArray(response.data)) {
//           setDonations(response.data); // Ensure the response is an array
//         } else {
//           throw new Error("Invalid donation data format");
//         }
//       } catch (err) {
//         console.error("Error fetching donations:", err);
//         setError("Failed to load donations. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonations();
//   }, []);

//   const approveDonation = async (id: string) => {
//     try {
//       await axios.put(`http://localhost:1217/api/v1/admin/donations/approve/${id}`);
//       setDonations((prev) =>
//         prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d))
//       );
//     } catch (err) {
//       console.error("Error approving donation:", err);
//       setError("Failed to approve donation. Please try again later.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-blue-600">
//         <p className="text-lg">Loading donations...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-red-500">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Manage Donations
//         </h2>

//         {/* Donations List */}
//         <ul className="space-y-6">
//           {donations.length === 0 ? (
//             <li className="text-center text-gray-600">No donations found!</li>
//           ) : (
//             donations.map((donation) => (
//               <li
//                 key={donation._id}
//                 className="p-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold">{donation.name}</h3>
//                     <p className="text-sm">Amount: ${donation.amount}</p>
//                     <p className="text-sm">Status: {donation.status}</p>
//                   </div>
//                   {donation.status !== "approved" && (
//                     <button
//                       onClick={() => approveDonation(donation._id)}
//                       className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition"
//                     >
//                       Approve
//                     </button>
//                   )}
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>

//         {/* Back to Admin Dashboard Button */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => navigate("/admin/dashboard")} // Navigate back to dashboard
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
//           >
//             Back to Admin Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageDonations;





















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// interface Donation {
//   _id: string;
//   name: string;
//   amount: number;
//   status: string;
// }

// const ManageDonations = () => {
//   const navigate = useNavigate();
//   const [donations, setDonations] = useState<Donation[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [approving, setApproving] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get("http://localhost:1217/api/v1/admin/donations");
//         if (Array.isArray(response.data)) {
//           setDonations(response.data);
//         } else {
//           throw new Error("Invalid donation data format");
//         }
//       } catch (err) {
//         console.error("Error fetching donations:", err);
//         setError("Failed to load donations. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonations();
//   }, []);

//   const approveDonation = async (id: string) => {
//     try {
//       setApproving(id);
//       await axios.put(`http://localhost:1217/api/v1/admin/approve-donation/${id}`);
//       setDonations((prev) => prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d)));
//       toast.success("Donation approved successfully!");
//     } catch (err) {
//       console.error("Error approving donation:", err);
//       toast.error("Failed to approve donation. Please try again later.");
//     } finally {
//       setApproving(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-blue-600 text-lg">
//         Loading donations...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Manage Donations
//         </h2>

//         {error && <p className="text-center text-red-500">{error}</p>}

//         <ul className="space-y-6">
//           {donations.length === 0 ? (
//             <li className="text-center text-gray-600">No donations found!</li>
//           ) : (
//             donations.map((donation) => (
//               <li
//                 key={donation._id}
//                 className="p-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold">{donation.name}</h3>
//                     <p className="text-sm">Amount: ${donation.amount}</p>
//                     <p className="text-sm">Status: {donation.status}</p>
//                   </div>
//                   {donation.status !== "approved" && (
//                     <button
//                       onClick={() => approveDonation(donation._id)}
//                       disabled={approving === donation._id}
//                       className={`px-4 py-2 rounded-md font-semibold transition ${
//                         approving === donation._id
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-green-600 hover:bg-green-500"
//                       }`}
//                     >
//                       {approving === donation._id ? "Approving..." : "Approve"}
//                     </button>
//                   )}
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>

//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => navigate("/admin/dashboard")}
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
//           >
//             Back to Admin Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageDonations;























import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Donation {
  _id: string;
  name: string;
  amount: number;
  status: string;
}

const ManageDonations = () => {
  const navigate = useNavigate();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch donations from API
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("http://localhost:1217/api/v1/admin/donations");
        if (Array.isArray(response.data)) {
          setDonations(response.data);
        } else {
          throw new Error("Invalid donation data format");
        }
      } catch (err) {
        console.error("Error fetching donations:", err);
        setError("Failed to load donations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  // Function to approve donation
  const approveDonation = async (id: string) => {
    try {
      setApproving(id);

      // Retrieve the token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found. Please log in again.");
      }

      // Send the PUT request with the Authorization header
      await axios.put(
        `http://localhost:1217/api/v1/admin/approve-donation/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );

      setDonations((prev) =>
        prev.map((d) => (d._id === id ? { ...d, status: "approved" } : d))
      );
      toast.success("Donation approved successfully!");
    } catch (err) {
      console.error("Error approving donation:", err);
      toast.error("Failed to approve donation. Please try again later.");
    } finally {
      setApproving(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-blue-600 text-lg">
        Loading donations...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Manage Donations
        </h2>

        {error && <p className="text-center text-red-500">{error}</p>}

        <ul className="space-y-6">
          {donations.length === 0 ? (
            <li className="text-center text-gray-600">No donations found!</li>
          ) : (
            donations.map((donation) => (
              <li
                key={donation._id}
                className="p-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{donation.name}</h3>
                    <p className="text-sm">Amount: ${donation.amount}</p>
                    <p className="text-sm">Status: {donation.status}</p>
                  </div>
                  {donation.status !== "approved" && (
                    <button
                      onClick={() => approveDonation(donation._id)}
                      disabled={approving === donation._id}
                      className={`px-4 py-2 rounded-md font-semibold transition ${
                        approving === donation._id
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-500"
                      }`}
                    >
                      {approving === donation._id ? "Approving..." : "Approve"}
                    </button>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/admin")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Back to Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageDonations;
