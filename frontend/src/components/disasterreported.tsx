// import { useEffect, useState } from "react";
// import { disasterService } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const DisasterReported = () => {
//   const [disasters, setDisasters] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         setDisasters(data || []);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Reported Disasters</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {disasters.map((disaster) => (
//             <li key={disaster.id} className="p-2 border-b">
//               {disaster.location} - {disaster.type}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={() => navigate("/")} className="mt-4 bg-blue-500 text-white p-2 rounded">
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DisasterReported;
  











// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
// }

// const DisasterReported = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster[] }>(
//           "http://localhost:1217/api/v1/disasters"
//         );

//         if (response.data.success) {
//           setDisasters(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-center">Reported Disasters</h2>

//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : disasters.length === 0 ? (
//         <p className="text-center">No disasters reported yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {disasters.map((disaster) => (
//             <li key={disaster.id} className="p-4 border rounded-lg shadow-sm">
//               <h3 className="text-lg font-semibold">{disaster.name}</h3>
//               <p className="text-sm text-gray-600">
//                 <strong>Location:</strong> {disaster.location}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Type:</strong> {disaster.type} | <strong>Severity:</strong> {disaster.severity}
//               </p>
//               {disaster.images.length > 0 && (
//                 <div className="mt-2 flex space-x-2">
//                   {disaster.images.map((image, index) => (
//                     <img key={index} src={`http://localhost:1217${image}`} alt="Disaster" className="w-24 h-24 object-cover rounded" />
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}

//       <button
//         onClick={() => navigate("/")}
//         className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
//       >
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default DisasterReported;














// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
// }

// const DisasterReported = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster[] }>(
//           "http://localhost:1217/api/v1/disasters"
//         );

//         if (response.data.success) {
//           setDisasters(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-gray-100">
//       {/* Sticky Header */}
//       <div className="sticky top-0 bg-white shadow-md py-4 px-6 text-center">
//         <h2 className="text-2xl font-bold">Reported Disasters</h2>
//       </div>

//       {/* Disaster List Container */}
//       <div className="w-full max-w-6xl mx-auto p-6">
//         {loading ? (
//           <p className="text-center text-lg">Loading...</p>
//         ) : disasters.length === 0 ? (
//           <p className="text-center text-lg">No disasters reported yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {disasters.map((disaster) => (
//               <li key={disaster.id} className="p-4 bg-white border rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold">{disaster.name}</h3>
//                 <p className="text-sm text-gray-600">
//                   <strong>Location:</strong> {disaster.location}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Type:</strong> {disaster.type} | <strong>Severity:</strong> {disaster.severity}
//                 </p>
//                 {disaster.images.length > 0 && (
//                   <div className="mt-2 flex space-x-2 overflow-x-auto">
//                     {disaster.images.map((image, index) => (
//                       <img key={index} src={`http://localhost:1217${image}`} alt="Disaster" className="w-24 h-24 object-cover rounded" />
//                     ))}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Back to Dashboard Button */}
//         <button
//           onClick={() => navigate("/")}
//           className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DisasterReported;








// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
// }

// const DisasterReported = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster[] }>(
//           "http://localhost:1217/api/v1/disasters"
//         );

//         if (response.data.success) {
//           setDisasters(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-gray-100">
//       {/* Sticky Header */}
//       <div className="sticky top-0 bg-white shadow-md py-4 px-6 text-center">
//         <h2 className="text-2xl font-bold">Reported Disasters</h2>
//       </div>

//       {/* Disaster List Container */}
//       <div className="w-full max-w-6xl mx-auto p-6">
//         {loading ? (
//           <p className="text-center text-lg">Loading...</p>
//         ) : disasters.length === 0 ? (
//           <p className="text-center text-lg">No disasters reported yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {disasters.map((disaster) => (
//               <li key={disaster.id} className="p-4 bg-white border rounded-lg shadow-md flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-semibold">{disaster.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     <strong>Location:</strong> {disaster.location}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <strong>Type:</strong> {disaster.type} | <strong>Severity:</strong> {disaster.severity}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => navigate(`/disaster/${disaster.id}`)}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   View Details
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Back to Dashboard Button */}
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DisasterReported;


























import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Disaster {
  id: string;
  name: string;
  location: string;
  severity: string;
  type: string;
  images: string[];
}

const DisasterReported = () => {
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await axios.get<{ success: boolean; data: Disaster[] }>(
          "https://disaster-relief-app-3.onrender.com/api/v1/disasters"
        );

        if (response.data.success) {
          setDisasters(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching disasters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-md py-4 px-6 text-center rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-800">🌍 Reported Disasters</h2>
      </div>

      {/* Disaster List Container */}
      <div className="w-full max-w-6xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-xl mt-6">
        {loading ? (
          <p className="text-center text-lg text-gray-700 font-bold animate-pulse">Loading...</p>
        ) : disasters.length === 0 ? (
          <p className="text-center text-lg text-gray-700 font-bold">No disasters reported yet.</p>
        ) : (
          <ul className="space-y-4">
            {disasters.map((disaster) => (
              <li
                key={disaster.id}
                className="p-4 bg-gradient-to-r from-blue-400 to-green-400 border rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">{disaster.name}</h3>
                  <p className="text-sm text-white">
                    <strong>📍 Location:</strong> {disaster.location}
                  </p>
                  <p className="text-sm text-white">
                    <strong>🔥 Type:</strong> {disaster.type} | <strong>⚠️ Severity:</strong> {disaster.severity}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/disaster/${disaster.id}`)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                >
                  🔍 View Details
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Back to Dashboard Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg block mx-auto"
        >
          ⬅️ Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DisasterReported;
