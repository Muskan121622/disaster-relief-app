// import React, { useState, useEffect } from "react";
// import axios from "axios";

// interface Volunteer {
//   _id: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
//   name?: string;
//   phone?: string;
//   state?: string;
//   district?: string;
//   address?: string;
//   skills: string[];
//   availability: string;
// }

// const VolunteerDetails: React.FC = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     fetchUserId();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       fetchVolunteerById(userId);
//     } else {
//       fetchVolunteers();
//     }
//   }, [userId]);

//   const fetchUserId = async () => {
//     try {
//       const response = await axios.get("http://localhost:1217/api/v1/user/login");
//       setUserId(response.data.user.id);
//     } catch (err) {
//       console.error("Failed to fetch user ID", err);
//     }
//   };

//   const fetchVolunteers = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:1217/api/v1/user/volunteers/");
//       console.log("API Response:", response.data);
//       setVolunteers(Array.isArray(response.data) ? response.data : []);
//       setError("");
//     } catch (err) {
//       setError("Failed to fetch volunteers");
//       setVolunteers([]);
//     }
//     setLoading(false);
//   };

//   const fetchVolunteerById = async (id: string) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:1217/api/v1/user/volunteers/${id}`);
//       console.log("Volunteer by ID Response:", response.data);
//       setVolunteers(Array.isArray(response.data) ? response.data : [response.data]);
//       setError("");
//     } catch (err) {
//       setError("Volunteer not found");
//       setVolunteers([]);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen text-white">
//       <h1 className="text-3xl font-extrabold mb-6 text-center">Volunteer Details</h1>
//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p className="text-yellow-300 text-center">{error}</p>}
//       <div className="max-w-4xl mx-auto">
//         {volunteers.map((volunteer) => (
//           <div key={volunteer._id} className="bg-white shadow-lg rounded-lg p-6 mb-6 text-gray-900 border-l-8 border-blue-500">
//             <h2 className="text-2xl font-bold text-blue-700">{volunteer.name || volunteer.user.name}</h2>
//             <p className="text-gray-700 font-semibold">Email: {volunteer.user.email}</p>
//             <p className="text-gray-700 font-semibold">Phone: {volunteer.phone || "N/A"}</p>
//             <p className="text-gray-700 font-semibold">Location: {volunteer.state || "N/A"}, {volunteer.district || "N/A"}</p>
//             <p className="text-gray-700 font-semibold">Address: {volunteer.address || "N/A"}</p>
//             <p className="text-gray-700 font-semibold">Skills: {volunteer.skills.join(", ")}</p>
//             <p className="text-gray-700 font-semibold">Availability: {volunteer.availability}</p>
//             <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">View Details</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VolunteerDetails;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// interface Volunteer {
//   _id: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
//   name?: string;
//   phone?: string;
//   state?: string;
//   district?: string;
//   address?: string;
//   skills: string[];
//   availability: string;
// }

// const VolunteerDetails: React.FC = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [userId, setUserId] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUserId();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       fetchVolunteerById(userId);
//     } else {
//       fetchVolunteers();
//     }
//   }, [userId]);

//   const fetchUserId = async () => {
//     try {
//       const response = await axios.get("http://localhost:1217/api/v1/user/login");
//       setUserId(response.data.user.id);
//     } catch (err) {
//       console.error("Failed to fetch user ID", err);
//     }
//   };

//   const fetchVolunteers = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:1217/api/v1/user/volunteers/");
//       console.log("API Response:", response.data);
//       setVolunteers(Array.isArray(response.data) ? response.data : []);
//       setError("");
//     } catch (err) {
//       setError("Failed to fetch volunteers");
//       setVolunteers([]);
//     }
//     setLoading(false);
//   };

//   const fetchVolunteerById = async (id: string) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:1217/api/v1/user/volunteers/${id}`);
//       console.log("Volunteer by ID Response:", response.data);
//       setVolunteers(Array.isArray(response.data) ? response.data : [response.data]);
//       setError("");
//     } catch (err) {
//       setError("Volunteer not found");
//       setVolunteers([]);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen text-white">
//       <h1 className="text-3xl font-extrabold mb-6 text-center">Volunteer Details</h1>
//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p className="text-yellow-300 text-center">{error}</p>}
//       <div className="max-w-4xl mx-auto">
//         {volunteers.map((volunteer) => (
//           <div key={volunteer._id} className="bg-white shadow-lg rounded-lg p-6 mb-6 text-gray-900 border-l-8 border-blue-500">
//             <h2 className="text-2xl font-bold text-blue-700">{volunteer.name || volunteer.user.name}</h2>
//             <p className="text-gray-700 font-semibold">Email: {volunteer.user.email}</p>
//             <p className="text-gray-700 font-semibold">Phone: {volunteer.phone || "N/A"}</p>
//             <p className="text-gray-700 font-semibold">Location: {volunteer.state || "N/A"}, {volunteer.district || "N/A"}</p>
//             <p className="text-gray-700 font-semibold">Address: {volunteer.address || "N/A"}</p>
//             <p className="text-gray-700 font-semibold">Skills: {volunteer.skills.join(", ")}</p>
//             <p className="text-gray-700 font-semibold">Availability: {volunteer.availability}</p>
//             <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">View Details</button>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VolunteerDetails;































import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Volunteer {
  _id: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  name?: string;
  phone?: string;
  state?: string;
  district?: string;
  address?: string;
  skills: string[];
  availability: string;
}

const VolunteerDetails: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchVolunteerById(userId);
    } else {
      fetchVolunteers();
    }
  }, [userId]);

  const fetchUserId = async () => {
    try {
      const response = await axios.get("https://disaster-relief-app-3.onrender.com/api/v1/user/login");
      setUserId(response.data.user.id);
    } catch (err) {
      console.error("Failed to fetch user ID", err);
    }
  };

  const fetchVolunteers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://disaster-relief-app-3.onrender.com/api/v1/user/volunteers/");
      console.log("API Response:", response.data);
      setVolunteers(Array.isArray(response.data) ? response.data : []);
      setError("");
    } catch (err) {
      setError("Failed to fetch volunteers");
      setVolunteers([]);
    }
    setLoading(false);
  };

  const fetchVolunteerById = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://disaster-relief-app-3.onrender.com/api/v1/user/volunteers/${id}`);
      console.log("Volunteer by ID Response:", response.data);
      setVolunteers(Array.isArray(response.data) ? response.data : [response.data]);
      setError("");
    } catch (err) {
      setError("Volunteer not found");
      setVolunteers([]);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Volunteer Details</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-yellow-300 text-center">{error}</p>}
      <div className="max-w-4xl mx-auto">
        {volunteers.map((volunteer) => (
          <div key={volunteer._id} className="bg-white shadow-lg rounded-lg p-6 mb-6 text-gray-900 border-l-8 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-700">{volunteer.name || volunteer.user.name}</h2>
            <p className="text-gray-700 font-semibold">Email: {volunteer.user.email}</p>
            <p className="text-gray-700 font-semibold">Phone: {volunteer.phone || "N/A"}</p>
            <p className="text-gray-700 font-semibold">Location: {volunteer.state || "N/A"}, {volunteer.district || "N/A"}</p>
            <p className="text-gray-700 font-semibold">Address: {volunteer.address || "N/A"}</p>
            <p className="text-gray-700 font-semibold">Skills: {volunteer.skills.join(", ")}</p>
            <p className="text-gray-700 font-semibold">Availability: {volunteer.availability}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default VolunteerDetails;