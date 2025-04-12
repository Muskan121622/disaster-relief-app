// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );

//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   if (!disaster) {
//     return <p className="text-center text-lg text-red-500">Disaster not found.</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       {/* Disaster Details Container */}
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 mt-6">
//         {/* Image */}
//         {disaster.images.length > 0 && (
//           <img
//             src={`http://localhost:1217${disaster.images[0]}`}
//             alt="Disaster"
//             className="w-full h-56 object-cover rounded-md"
//           />
//         )}

//         {/* Disaster Information */}
//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2">
//           <strong>Disaster Type:</strong> {disaster.type}
//         </p>
//         <p className="text-gray-700">
//           <strong>Location:</strong> {disaster.location}
//         </p>
//         <p className="text-gray-700">
//           <strong>Severity:</strong> {disaster.severity}
//         </p>
//         <p className="text-gray-700">
//           <strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span>
//         </p>

//         {/* Action Buttons */}
//         <div className="mt-4 flex justify-between">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//           <button
//             className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Offer Help
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;












// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );

//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   if (!disaster) {
//     return <p className="text-center text-lg text-red-500">Disaster not found.</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       {/* Disaster Details Container */}
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 mt-6">
//         {/* Sliding Image Carousel */}
//         {disaster.images.length > 0 && (
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {disaster.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={`http://localhost:1217${image}`}
//                   alt={`Disaster ${index + 1}`}
//                   className="w-full h-56 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         )}

//         {/* Introductory Text */}
//         <p className="text-gray-700 text-center mt-4 font-semibold">
//           Information about the Reported Disaster
//         </p>

//         {/* Disaster Information */}
//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2">
//           <strong>Disaster Type:</strong> {disaster.type}
//         </p>
//         <p className="text-gray-700">
//           <strong>Location:</strong> {disaster.location}
//         </p>
//         <p className="text-gray-700">
//           <strong>Severity:</strong> {disaster.severity}
//         </p>
//         <p className="text-gray-700">
//           <strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span>
//         </p>

//         {/* Work Selection */}
//         <p className="text-gray-700 font-semibold mt-4">
//           Select your interest to work in:
//         </p>
//         <div className="flex justify-center gap-4 mt-2">
//           <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
//             Physical
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//             Financial
//           </button>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="mt-4 flex justify-between">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Offer Help
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;











// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );

//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   if (!disaster) {
//     return <p className="text-center text-lg text-red-500">Disaster not found.</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       {/* Disaster Details Section (NO WHITE BACKGROUND) */}
//       <div className="max-w-md w-full p-6 mt-6">
//         {/* Image Carousel */}
//         {disaster.images.length > 0 && (
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {disaster.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={`http://localhost:1217${image}`}
//                   alt={`Disaster ${index + 1}`}
//                   className="w-full h-56 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         )}

//         {/* Disaster Information */}
//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2">
//           <strong>Disaster Type:</strong> {disaster.type}
//         </p>
//         <p className="text-gray-700">
//           <strong>Location:</strong> {disaster.location}
//         </p>
//         <p className="text-gray-700">
//           <strong>Severity:</strong> {disaster.severity}
//         </p>
//         <p className="text-gray-700">
//           <strong>Current Status:</strong>{" "}
//           <span className="text-green-600 font-semibold">{disaster.status}</span>
//         </p>

//         {/* Work Interest Buttons */}
//         <p className="text-lg font-semibold mt-4">Select your interest to work in:</p>
//         <div className="flex space-x-4 mt-2">
//           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Physical
//           </button>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Financial
//           </button>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-4 flex justify-between">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Offer Help
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;






// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );

//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   if (!disaster) {
//     return <p className="text-center text-lg text-red-500">Disaster not found.</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       {/* Disaster Details Section (No White Background) */}
//       <div className="max-w-md w-full p-6 mt-6">
//         {/* Image Carousel */}
//         {disaster.images.length > 0 && (
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {disaster.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={`http://localhost:1217${image}`}
//                   alt={`Disaster ${index + 1}`}
//                   className="w-full h-56 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         )}

//         {/* Disaster Information */}
//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2">
//           <strong>Disaster Type:</strong> {disaster.type}
//         </p>
//         <p className="text-gray-700">
//           <strong>Location:</strong> {disaster.location}
//         </p>
//         <p className="text-gray-700">
//           <strong>Severity:</strong> {disaster.severity}
//         </p>
//         <p className="text-gray-700">
//           <strong>Current Status:</strong>{" "}
//           <span className="text-green-600 font-semibold">{disaster.status}</span>
//         </p>

//         {/* Work Interest Buttons - Centered */}
//         <p className="text-lg font-semibold mt-4 text-center">Select your interest to work in:</p>
//         <div className="flex justify-center space-x-4 mt-2">
//           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Physical
//           </button>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Financial
//           </button>
//         </div>

//         {/* Back Button (Moved to Right) */}
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;













// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );

//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   if (!disaster) {
//     return <p className="text-center text-lg text-red-500">Disaster not found.</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       {/* Disaster Details Section */}
//       <div className="max-w-md w-full p-6 mt-6">
//         {/* Image Carousel */}
//         {disaster.images.length > 0 && (
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {disaster.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={`http://localhost:1217${image}`}
//                   alt={`Disaster ${index + 1}`}
//                   className="w-full h-56 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         )}

//         {/* Disaster Information */}
//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2"><strong>Disaster Type:</strong> {disaster.type}</p>
//         <p className="text-gray-700"><strong>Location:</strong> {disaster.location}</p>
//         <p className="text-gray-700"><strong>Severity:</strong> {disaster.severity}</p>
//         <p className="text-gray-700"><strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span></p>

//         {/* Work Interest Buttons - Centered */}
//         <p className="text-lg font-semibold mt-4 text-center">Select your interest to work in:</p>
//         <div className="flex justify-center space-x-4 mt-2">
//           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//             Physical
//           </button>
//           {/* <button
//             onClick={() => navigate("/payment-method")}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Financial
//           </button> */}



// <button
//   className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//   onClick={() => navigate("/payment-method")}
// >
//   Financial
// </button>

//         </div>

//         {/* Back Button */}
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;













// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [showMap, setShowMap] = useState(false);
//   const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );
//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   const handleShowMap = async () => {
//     if (!disaster) return;

//     try {
//       const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search`, {
//         params: {
//           q: disaster.location,
//           format: "json",
//         },
//       });

//       if (geoRes.data.length > 0) {
//         const { lat, lon } = geoRes.data[0];
//         setCoordinates([parseFloat(lat), parseFloat(lon)]);
//         setShowMap(true);
//       } else {
//         alert("Could not find location on map.");
//       }
//     } catch (err) {
//       console.error("Geocoding error:", err);
//     }
//   };

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   if (!disaster) {
//     return <p className="text-center text-lg text-red-500">Disaster not found.</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       {/* Disaster Details Section */}
//       <div className="max-w-md w-full p-6 mt-6">
//         {/* Image Carousel */}
//         {disaster.images.length > 0 && (
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {disaster.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={`http://localhost:1217${image}`}
//                   alt={`Disaster ${index + 1}`}
//                   className="w-full h-56 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         )}

//         {/* Disaster Information */}
//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2"><strong>Disaster Type:</strong> {disaster.type}</p>
//         <p className="text-gray-700"><strong>Location:</strong> {disaster.location}</p>
//         <p className="text-gray-700"><strong>Severity:</strong> {disaster.severity}</p>
//         <p className="text-gray-700"><strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span></p>

//         {/* Buttons */}
//         <p className="text-lg font-semibold mt-4 text-center">Select your interest to work in:</p>
//         <div className="flex justify-center space-x-4 mt-2">
//           <button  onClick={() =>
//   navigate("/map", {
//     state: {
//       lat: parseFloat(disaster.location.split(",")[0]),
//       lng: parseFloat(disaster.location.split(",")[1]),
//       name: disaster.name,
//     },
//   })
// }

//             // className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//             // onClick={handleShowMap}
//           >
//             Physical
//           </button>

//           <button
//             onClick={() => navigate("/payment-method")}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Financial
//           </button>
//         </div>

//         {/* Show Map */}
//         {showMap && coordinates && (
//           <div className="mt-6">
//             <h4 className="text-lg font-semibold mb-2">Disaster Location on Map:</h4>
//             <MapContainer center={coordinates} zoom={13} className="h-64 w-full rounded-md shadow-md">
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//               />
//               <Marker position={coordinates}>
//                 <Popup>
//                   {disaster.name}<br />{disaster.location}
//                 </Popup>
//               </Marker>
//             </MapContainer>
//           </div>
//         )}

//         {/* Back Button */}
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;




















// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const routingControl = L.Routing.control({
//   waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
//   routeWhileDragging: false,
//   show: false,
//   addWaypoints: false,
//   draggableWaypoints: false, // Not in typings but works!
//   fitSelectedRoutes: true,
// } as any).addTo(map); // 👈 assert as any


// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
//   const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
//   const [showRouteMap, setShowRouteMap] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );
//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   const handleShowMap = async () => {
//     if (!disaster) return;

//     try {
//       const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search`, {
//         params: {
//           q: disaster.location,
//           format: "json",
//         },
//       });

//       if (geoRes.data.length > 0) {
//         const { lat, lon } = geoRes.data[0];
//         setCoordinates([parseFloat(lat), parseFloat(lon)]);

//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setUserLocation([position.coords.latitude, position.coords.longitude]);
//             setShowRouteMap(true);
//           },
//           (err) => {
//             alert("Could not get your location.");
//             console.error(err);
//           }
//         );
//       } else {
//         alert("Could not find location on map.");
//       }
//     } catch (err) {
//       console.error("Geocoding error:", err);
//     }
//   };

//   if (loading) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   if (!disaster) {
//     return <p className="text-center text-lg text-red-500">Disaster not found.</p>;
//   }

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       {/* Disaster Details Section */}
//       <div className="max-w-md w-full p-6 mt-6">
//         {/* Image Carousel */}
//         {disaster.images.length > 0 && (
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {disaster.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={`http://localhost:1217${image}`}
//                   alt={`Disaster ${index + 1}`}
//                   className="w-full h-56 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         )}

//         {/* Disaster Information */}
//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2"><strong>Disaster Type:</strong> {disaster.type}</p>
//         <p className="text-gray-700"><strong>Location:</strong> {disaster.location}</p>
//         <p className="text-gray-700"><strong>Severity:</strong> {disaster.severity}</p>
//         <p className="text-gray-700"><strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span></p>

//         {/* Buttons */}
//         <p className="text-lg font-semibold mt-4 text-center">Select your interest to work in:</p>
//         <div className="flex justify-center space-x-4 mt-2">
//           <button
//             onClick={handleShowMap}
//             className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Physical
//           </button>

//           <button
//             onClick={() => navigate("/payment-method")}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Financial
//           </button>
//         </div>

//         {/* Route Map */}
//         {showRouteMap && coordinates && userLocation && (
//           <div className="mt-6 w-full">
//             <h4 className="text-lg font-semibold mb-2">Route to Disaster Location:</h4>
//             <MapContainer
//               center={userLocation}
//               zoom={13}
//               className="h-64 w-full rounded-md shadow-md"
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//               />
//               <Marker position={coordinates}>
//                 <Popup>{disaster.name}<br />{disaster.location}</Popup>
//               </Marker>
//               <Marker position={userLocation}>
//                 <Popup>Your Location</Popup>
//               </Marker>
//               <Routing from={userLocation} to={coordinates} />
//             </MapContainer>
//           </div>
//         )}

//         {/* Back Button */}
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";

// // ✅ Reusable routing component
// const Routing = ({ from, to }: { from: [number, number]; to: [number, number] }) => {
//   const map = useMap();

//   useEffect(() => {
//     const routingControl = L.Routing.control({
//       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
//       routeWhileDragging: false,
//       addWaypoints: false,
//       draggableWaypoints: false,
//       fitSelectedRoutes: true,
//       show: false,
//     } as any).addTo(map);

//     return () => {
//       map.removeControl(routingControl);
//     };
//   }, [from, to, map]);

//   return null;
// };

// interface Disaster {
//   id: string;
//   name: string;
//   location: string;
//   severity: string;
//   type: string;
//   images: string[];
//   status: string;
// }

// const DisasterDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [disaster, setDisaster] = useState<Disaster | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
//   const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
//   const [showRouteMap, setShowRouteMap] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDisaster = async () => {
//       try {
//         const response = await axios.get<{ success: boolean; data: Disaster }>(
//           `http://localhost:1217/api/v1/disasters/${id}`
//         );
//         if (response.data.success) {
//           setDisaster(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching disaster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDisaster();
//   }, [id]);

//   const handleShowMap = async () => {
//     if (!disaster) return;

//     try {
//       const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search`, {
//         params: {
//           q: disaster.location,
//           format: "json",
//         },
//       });

//       if (geoRes.data.length > 0) {
//         const { lat, lon } = geoRes.data[0];
//         setCoordinates([parseFloat(lat), parseFloat(lon)]);

//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setUserLocation([position.coords.latitude, position.coords.longitude]);
//             setShowRouteMap(true);
//           },
//           (err) => {
//             alert("Could not get your location.");
//             console.error(err);
//           }
//         );
//       } else {
//         alert("Could not find location on map.");
//       }
//     } catch (err) {
//       console.error("Geocoding error:", err);
//     }
//   };

//   if (loading) return <p className="text-center text-lg">Loading...</p>;
//   if (!disaster) return <p className="text-center text-lg text-red-500">Disaster not found.</p>;

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Disaster Description</h2>
//       </div>

//       <div className="max-w-md w-full p-6 mt-6">
//         {disaster.images.length > 0 && (
//           <Carousel showThumbs={false} autoPlay infiniteLoop>
//             {disaster.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={`http://localhost:1217${image}`}
//                   alt={`Disaster ${index + 1}`}
//                   className="w-full h-56 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         )}

//         <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
//         <p className="text-gray-700 mt-2"><strong>Disaster Type:</strong> {disaster.type}</p>
//         <p className="text-gray-700"><strong>Location:</strong> {disaster.location}</p>
//         <p className="text-gray-700"><strong>Severity:</strong> {disaster.severity}</p>
//         <p className="text-gray-700"><strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span></p>

//         <p className="text-lg font-semibold mt-4 text-center">Select your interest to work in:</p>
//         <div className="flex justify-center space-x-4 mt-2">
//           <button
//             onClick={handleShowMap}
//             className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Physical
//           </button>

//           <button
//             onClick={() => navigate("/payment-method")}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Financial
//           </button>
//         </div>

//         {showRouteMap && coordinates && userLocation && (
//           <div className="mt-6 w-full">
//             <h4 className="text-lg font-semibold mb-2">Route to Disaster Location:</h4>
//             <MapContainer
//               center={userLocation}
//               zoom={13}
//               className="h-64 w-full rounded-md shadow-md"
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//               />
//               <Marker position={coordinates}>
//                 <Popup>{disaster.name}<br />{disaster.location}</Popup>
//               </Marker>
//               <Marker position={userLocation}>
//                 <Popup>Your Location</Popup>
//               </Marker>
//               <Routing from={userLocation} to={coordinates} />
//             </MapContainer>
//           </div>
//         )}

//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => navigate("/reported-disasters")}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisasterDetails;






import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "leaflet/dist/leaflet.css";

interface Disaster {
  id: string;
  name: string;
  location: string;
  severity: string;
  type: string;
  images: string[];
  status: string;
}

const DisasterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [disaster, setDisaster] = useState<Disaster | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisaster = async () => {
      try {
        const response = await axios.get<{ success: boolean; data: Disaster }>(
          `https://disaster-relief-app-3.onrender.com/api/v1/disasters/${id}`
        );
        if (response.data.success) {
          setDisaster(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching disaster details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisaster();
  }, [id]);

  const handlePhysicalClick = async () => {
    if (!disaster) return;

    try {
      const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: disaster.location,
          format: "json",
        },
      });

      if (geoRes.data.length > 0) {
        const { lat, lon } = geoRes.data[0];
        const toCoords = { lat: parseFloat(lat), lng: parseFloat(lon) };

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const fromCoords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // ✅ Navigate to route map page with coordinates
            navigate("/disaster-route-map", {
              state: {
                from: fromCoords,
                to: toCoords,
                name: disaster.name,
                location: disaster.location,
              },
            });
          },
          (err) => {
            alert("Could not get your location.");
            console.error(err);
          }
        );
      } else {
        alert("Could not find disaster location on the map.");
      }
    } catch (err) {
      console.error("Geocoding error:", err);
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!disaster) return <p className="text-center text-lg text-red-500">Disaster not found.</p>;

  return (
    <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
      <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
        <h2 className="text-2xl font-bold">Disaster Description</h2>
      </div>

      <div className="max-w-md w-full p-6 mt-6">
        {disaster.images.length > 0 && (
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {disaster.images.map((image, index) => (
              <div key={index}>
                <img
                  src={`https://disaster-relief-app-3.onrender.com${image}`}
                  alt={`Disaster ${index + 1}`}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>
            ))}
          </Carousel>
        )}

        <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
        <p className="text-gray-700 mt-2"><strong>Disaster Type:</strong> {disaster.type}</p>
        <p className="text-gray-700"><strong>Location:</strong> {disaster.location}</p>
        <p className="text-gray-700"><strong>Severity:</strong> {disaster.severity}</p>
        <p className="text-gray-700"><strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span></p>

        <p className="text-lg font-semibold mt-4 text-center">Select your interest to work in:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <button
            onClick={handlePhysicalClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Physical
          </button>

          <button
            onClick={() => navigate("/donate")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Financial
          </button>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => navigate("/reported-disasters")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisasterDetails;
