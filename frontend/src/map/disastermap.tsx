// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression } from "leaflet"; // ✅ Import LatLngExpression properly

// const disasterLocations: { id: number; lat: number; lng: number; name: string }[] = [
//   { id: 1, lat: 37.7749, lng: -122.4194, name: "San Francisco Earthquake" },
//   { id: 2, lat: 34.0522, lng: -118.2437, name: "Los Angeles Wildfire" }
// ];

// const center: LatLngExpression = [37.7749, -122.4194]; // ✅ Use correct type

// const DisasterMap = () => {
//   return (
//     <MapContainer center={center} zoom={5} className=" w-full rounded-lg">
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {disasterLocations.map((disaster) => (
//         <Marker key={disaster.id} position={[disaster.lat, disaster.lng] as LatLngExpression}>
//           <Popup>{disaster.name}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default DisasterMap;









// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression } from "leaflet"; // ✅ Import LatLngExpression properly

// const disasterLocations: { id: number; lat: number; lng: number; name: string }[] = [
//   { id: 1, lat: 37.7749, lng: -122.4194, name: "San Francisco Earthquake" },
//   { id: 2, lat: 34.0522, lng: -118.2437, name: "Los Angeles Wildfire" }
// ];

// const center: LatLngExpression = [37.7749, -122.4194]; // ✅ Use correct type

// const DisasterMap = () => {
//   return (
//     <div className="h-screen w-screen">
//       <MapContainer center={center} zoom={5} className="h-full w-full">
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {disasterLocations.map((disaster) => (
//           <Marker key={disaster.id} position={[disaster.lat, disaster.lng] as LatLngExpression}>
//             <Popup>{disaster.name}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;













// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression } from "leaflet";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<{ id: number; lat: number; lng: number; name: string }[]>([]);
//   const center: LatLngExpression = [37.7749, -122.4194];

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         setDisasters(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   useEffect(() => {
//     socket.on("disasterUpdate", (newDisaster: any) => {
//       setDisasters((prev) => [newDisaster, ...prev]);
//     });
//     return () => {
//       socket.off("disasterUpdate");
//     };
//   }, []);

//   return (
//     <div className="h-screen w-screen">
//       <MapContainer center={center} zoom={5} className="h-full w-full">
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {disasters.map((disaster) => (
//           <Marker key={disaster.id} position={[disaster.lat, disaster.lng] as LatLngExpression}>
//             <Popup>{disaster.name}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;





























// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression } from "leaflet";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<{ id: number; lat: number; lng: number; name: string }[]>([]);
//   const center: LatLngExpression = [37.7749, -122.4194];

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         console.log("Fetched Disasters:", data); // Debugging Log

//         if (Array.isArray(data)) {
//           setDisasters(data.filter(d => typeof d.lat === "number" && typeof d.lng === "number"));
//         } else {
//           console.error("Invalid disaster data format:", data);
//           setDisasters([]);
//         }
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   useEffect(() => {
//     socket.on("disasterUpdate", (newDisaster: any) => {
//       if (newDisaster?.lat && newDisaster?.lng) {
//         setDisasters((prev) => [newDisaster, ...prev]);
//       } else {
//         console.warn("Invalid disaster update received:", newDisaster);
//       }
//     });

//     return () => {
//       socket.off("disasterUpdate");
//     };
//   }, []);

//   return (
//     <div className="h-screen w-screen">
//       <MapContainer center={center} zoom={5} className="h-full w-full">
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {disasters
//           .filter((disaster) => typeof disaster.lat === "number" && typeof disaster.lng === "number")
//           .map((disaster) => (
//             <Marker key={disaster.id} position={[disaster.lat, disaster.lng] as LatLngExpression}>
//               <Popup>{disaster.name}</Popup>
//             </Marker>
//           ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;





















// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L, { LatLngExpression } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";

// // Custom icons based on severity
// const disasterIcons = {
//   high: L.icon({ iconUrl: "/red-marker.png", iconSize: [30, 40], iconAnchor: [15, 40] }),
//   medium: L.icon({ iconUrl: "/yellow-marker.png", iconSize: [30, 40], iconAnchor: [15, 40] }),
//   low: L.icon({ iconUrl: "/green-marker.png", iconSize: [30, 40], iconAnchor: [15, 40] }),
// };

// interface Disaster {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   type: string;
//   severity: "high" | "medium" | "low";
//   emergencyContacts: string[];
// }

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const center: LatLngExpression = [37.7749, -122.4194]; // Default center: San Francisco

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         setDisasters(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   useEffect(() => {
//     socket.on("disasterUpdate", (newDisaster: Disaster) => {
//       setDisasters((prev) => [newDisaster, ...prev]);
//     });
//     return () => {
//       socket.off("disasterUpdate");
//     };
//   }, []);

//   return (
//     <div className="h-screen w-screen">
//       <MapContainer center={center} zoom={5} className="h-full w-full">
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {disasters.map((disaster) => (
//           <Marker
//             key={disaster.id}
//             position={[disaster.lat, disaster.lng]}
//             icon={disasterIcons[disaster.severity]}
//           >
//             <Popup>
//               <h3 className="font-bold">{disaster.name}</h3>
//               <p>Type: {disaster.type}</p>
//               <p>Severity: {disaster.severity.toUpperCase()}</p>
//               <p>Contacts:</p>
//               <ul>
//                 {disaster.emergencyContacts.map((contact, index) => (
//                   <li key={index}>{contact}</li>
//                 ))}
//               </ul>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;













// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L, { LatLngExpression } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";

// // Default disaster icons
// const disasterIcons = {
//   high: L.icon({ iconUrl: "/red-marker.png", iconSize: [30, 40], iconAnchor: [15, 40] }),
//   medium: L.icon({ iconUrl: "/yellow-marker.png", iconSize: [30, 40], iconAnchor: [15, 40] }),
//   low: L.icon({ iconUrl: "/green-marker.png", iconSize: [30, 40], iconAnchor: [15, 40] }),
// };

// interface Disaster {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   type: string;
//   severity: "high" | "medium" | "low";
//   emergencyContacts: string[];
// }

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]); // ✅ Default empty array
//   const center: LatLngExpression = [37.7749, -122.4194]; // Default map center

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         if (Array.isArray(data)) {
//           setDisasters(data);
//         } else {
//           console.error("Invalid data format:", data);
//           setDisasters([]); // ✅ Ensure disasters is never undefined
//         }
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//         setDisasters([]); // ✅ Ensure disasters is never undefined
//       }
//     };

//     fetchDisasters();
//   }, []);

//   useEffect(() => {
//     socket.on("disasterUpdate", (newDisaster: Disaster) => {
//       setDisasters((prev) => [newDisaster, ...prev]);
//     });
//     return () => {
//       socket.off("disasterUpdate");
//     };
//   }, []);

//   return (
//     <div className="h-screen w-screen">
//       <MapContainer center={center} zoom={5} className="h-full w-full">
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {disasters.length > 0 &&
//           disasters.map((disaster) => (
//             <Marker
//               key={disaster.id}
//               position={[disaster.lat, disaster.lng]}
//               icon={disasterIcons[disaster.severity]}
//             >
//               <Popup>
//                 <h3 className="font-bold">{disaster.name}</h3>
//                 <p>Type: {disaster.type}</p>
//                 <p>Severity: {disaster.severity.toUpperCase()}</p>
//                 <p>Contacts:</p>
//                 <ul>
//                   {disaster.emergencyContacts.map((contact, index) => (
//                     <li key={index}>{contact}</li>
//                   ))}
//                 </ul>
//               </Popup>
//             </Marker>
//           ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;





























// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression } from "leaflet";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";
// import "../utils/fixLeaflet"; // 👈 Fix leaflet marker icons

// type Disaster = {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   location: string;
// };

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const center: LatLngExpression = [37.7749, -122.4194];

//   // ✅ Fetch initial disasters from backend
//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         const validData = (Array.isArray(data) ? data : []).filter(
//           (d): d is Disaster =>
//             typeof d.lat === "number" &&
//             typeof d.lng === "number" &&
//             !isNaN(d.lat) &&
//             !isNaN(d.lng)
//         );
//         setDisasters(validData);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   // ✅ Handle real-time updates via socket
//   useEffect(() => {
//     const handleDisasterUpdate = (newDisaster: any) => {
//       if (
//         newDisaster &&
//         typeof newDisaster.lat === "number" &&
//         typeof newDisaster.lng === "number" &&
//         !isNaN(newDisaster.lat) &&
//         !isNaN(newDisaster.lng)
//       ) {
//         setDisasters((prev) => {
//           // Optionally prevent duplicates using ID
//           const alreadyExists = prev.some(d => d.id === newDisaster.id);
//           return alreadyExists ? prev : [newDisaster, ...prev];
//         });
//       } else {
//         console.warn("Invalid disaster data received via socket:", newDisaster);
//       }
//     };

//     socket.on("disasterUpdate", handleDisasterUpdate);

//     return () => {
//       socket.off("disasterUpdate", handleDisasterUpdate);
//     };
//   }, []);

//   return (
//     <MapContainer center={center} zoom={5} className="h-96 w-full rounded-lg z-0">
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {disasters.map((disaster) => (
//         <Marker
//           key={disaster.id}
//           position={[disaster.lat, disaster.lng] as LatLngExpression}
//         >
//           <Popup>
//             <strong>{disaster.name || "Unnamed Disaster"}</strong>
//             <br />
//             📍 {disaster.location || "Unknown Location"}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default DisasterMap;


























// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression } from "leaflet";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";
// import "../utils/fixLeaflet"; // Fix leaflet marker icons

// type Disaster = {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   location: string;
// };

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const center: LatLngExpression = [20.5937, 78.9629]; // Center of India or adjust as needed

//   // Fetch initial disasters
//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         const validData = (Array.isArray(data) ? data : []).filter(
//           (d): d is Disaster =>
//             typeof d.lat === "number" &&
//             typeof d.lng === "number" &&
//             !isNaN(d.lat) &&
//             !isNaN(d.lng)
//         );
//         setDisasters(validData);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   // Listen for real-time updates
//   useEffect(() => {
//     const handleDisasterUpdate = (newDisaster: any) => {
//       if (
//         newDisaster &&
//         typeof newDisaster.lat === "number" &&
//         typeof newDisaster.lng === "number" &&
//         !isNaN(newDisaster.lat) &&
//         !isNaN(newDisaster.lng)
//       ) {
//         setDisasters((prev) => {
//           const alreadyExists = prev.some(d => d.id === newDisaster.id);
//           return alreadyExists ? prev : [newDisaster, ...prev];
//         });
//       }
//     };

//     socket.on("disasterUpdate", handleDisasterUpdate);

//     return () => {
//       socket.off("disasterUpdate", handleDisasterUpdate);
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen relative z-0">
//       <MapContainer center={center} zoom={5} className="h-full w-full">
//         {/* 🌍 Modern Mapbox tiles - style like Google Maps */}
//         <TileLayer
//           url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVza2FuMTIxNiIsImEiOiJjbTkzNDFoM2owYnUyMndzNDI1OG4yY3k4In0.4j6e_uHRIj9rwP8W7R658Q`}
//           attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
//           tileSize={512}
//           zoomOffset={-1}
//         />

//         {disasters.map((disaster) => (
//           <Marker
//             key={disaster.id}
//             position={[disaster.lat, disaster.lng] as LatLngExpression}
//           >
//             <Popup>
//               <strong>{disaster.name || "Unnamed Disaster"}</strong>
//               <br />
//               📍 {disaster.location || "Unknown Location"}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;























// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression } from "leaflet";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";
// import "../utils/fixLeaflet";

// type Disaster = {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   location: string;
// };

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const center: LatLngExpression = [20.5937, 78.9629]; // India or adjust as needed

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         const validData = (Array.isArray(data) ? data : []).filter(
//           (d): d is Disaster =>
//             typeof d.lat === "number" &&
//             typeof d.lng === "number" &&
//             !isNaN(d.lat) &&
//             !isNaN(d.lng)
//         );
//         setDisasters(validData);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   useEffect(() => {
//     const handleDisasterUpdate = (newDisaster: any) => {
//       if (
//         newDisaster &&
//         typeof newDisaster.lat === "number" &&
//         typeof newDisaster.lng === "number" &&
//         !isNaN(newDisaster.lat) &&
//         !isNaN(newDisaster.lng)
//       ) {
//         setDisasters((prev) => {
//           const alreadyExists = prev.some(d => d.id === newDisaster.id);
//           return alreadyExists ? prev : [newDisaster, ...prev];
//         });
//       }
//     };

//     socket.on("disasterUpdate", handleDisasterUpdate);

//     return () => {
//       socket.off("disasterUpdate", handleDisasterUpdate);
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen relative z-0">
//       <MapContainer center={center} zoom={5} className="h-full w-full">
//         {/* Modern Google-like Mapbox style */}
//         <TileLayer
//           url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVza2FuMTIxNiIsImEiOiJjbTkzNDFoM2owYnUyMndzNDI1OG4yY3k4In0.4j6e_uHRIj9rwP8W7R658Q`}
//           attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
//           tileSize={512}
//           zoomOffset={-1}
//         />

//         {disasters.map((disaster) => (
//           <Marker
//             key={disaster.id}
//             position={[disaster.lat, disaster.lng] as LatLngExpression}
//           >
//             <Popup>
//               <div className="text-sm font-semibold">
//                 <div className="text-red-600">📍 {disaster.location || "Unknown Location"}</div>
//                 <div className="text-gray-800 mt-1">{disaster.name || "Unnamed Disaster"}</div>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;










// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import L, { LatLngExpression } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import "../utils/fixLeaflet";

// interface LocationState {
//   lat: number;
//   lng: number;
//   name: string;
// }

// const RoutingControl = ({ from, to }: { from: LatLngExpression; to: LatLngExpression }) => {
//   const map = useMap();

//   useEffect(() => {
//     const routingControl = L.Routing.control({
//       waypoints: [L.latLng(from), L.latLng(to)],
//       routeWhileDragging: false,
//       showAlternatives: false,
//       addWaypoints: false,
//     }).addTo(map);

//     return () => {
//       map.removeControl(routingControl);
//     };
//   }, [from, to, map]);

//   return null;
// };

// const DisasterMap = () => {
//   const { state } = useLocation();
//   const { lat, lng, name } = state as LocationState;

//   const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation([position.coords.latitude, position.coords.longitude]);
//       },
//       (error) => {
//         console.error("Error getting user location:", error);
//       }
//     );
//   }, []);

//   const center = userLocation || [lat, lng];

//   return (
//     <div className="w-full h-screen">
//       <MapContainer center={center} zoom={6} className="h-full w-full">
//         <TileLayer
//           url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVza2FuMTIxNiIsImEiOiJjbTkzNDFoM2owYnUyMndzNDI1OG4yY3k4In0.4j6e_uHRIj9rwP8W7R658Q`}
//           attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
//           tileSize={512}
//           zoomOffset={-1}
//         />

//         {/* User Marker */}
//         {userLocation && (
//           <Marker position={userLocation}>
//             <Popup>Your location</Popup>
//           </Marker>
//         )}

//         {/* Disaster Marker */}
//         <Marker position={[lat, lng]}>
//           <Popup>{name}</Popup>
//         </Marker>

//         {/* Routing Line */}
//         {userLocation && <RoutingControl from={userLocation} to={[lat, lng]} />}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;










// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression, LatLngBoundsExpression } from "leaflet";
// import L from "leaflet";
// import "leaflet-routing-machine";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";
// import "../utils/fixLeaflet";

// type Disaster = {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   location: string;
// };

// const Routing = ({ from, to }: { from: LatLngExpression; to: LatLngExpression }) => {
//   const map = useMap();

//   useEffect(() => {
//     const routingControl = L.Routing.control({
//       waypoints: [L.latLng(from), L.latLng(to)],
//       routeWhileDragging: false,
//       show: false,
//     }).addTo(map);

//     return () => {
//       map.removeControl(routingControl);
//     };
//   }, [from, to, map]);

//   return null;
// };


// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
//   const center: LatLngExpression = [20.5937, 78.9629]; // fallback center (India)

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         const validData = (Array.isArray(data) ? data : []).filter(
//           (d): d is Disaster =>
//             typeof d.lat === "number" &&
//             typeof d.lng === "number" &&
//             !isNaN(d.lat) &&
//             !isNaN(d.lng)
//         );
//         setDisasters(validData);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   useEffect(() => {
//     const handleDisasterUpdate = (newDisaster: any) => {
//       if (
//         newDisaster &&
//         typeof newDisaster.lat === "number" &&
//         typeof newDisaster.lng === "number" &&
//         !isNaN(newDisaster.lat) &&
//         !isNaN(newDisaster.lng)
//       ) {
//         setDisasters((prev) => {
//           const alreadyExists = prev.some(d => d.id === newDisaster.id);
//           return alreadyExists ? prev : [newDisaster, ...prev];
//         });
//       }
//     };

//     socket.on("disasterUpdate", handleDisasterUpdate);

//     return () => {
//       socket.off("disasterUpdate", handleDisasterUpdate);
//     };
//   }, []);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation([position.coords.latitude, position.coords.longitude]);
//       },
//       (err) => {
//         console.error("Failed to get user location", err);
//       }
//     );
//   }, []);

//   const bounds: LatLngBoundsExpression = userLocation
//   ? [
//       ...disasters.map(d => [d.lat, d.lng] as [number, number]),
//       userLocation as [number, number],
//     ]
//   : disasters.map(d => [d.lat, d.lng] as [number, number]);


//   return (
//     <div className="w-full h-screen relative z-0">
//       <MapContainer
//         bounds={bounds.length > 0 ? bounds : undefined}
//         zoom={5}
//         className="h-full w-full"
//       >
//         <TileLayer
//           url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVza2FuMTIxNiIsImEiOiJjbTkzNDFoM2owYnUyMndzNDI1OG4yY3k4In0.4j6e_uHRIj9rwP8W7R658Q`}
//           attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
//           tileSize={512}
//           zoomOffset={-1}
//         />

//         {/* User Marker */}
//         {userLocation && (
//           <Marker position={userLocation}>
//             <Popup>Your location</Popup>
//           </Marker>
//         )}

//         {/* Disaster Markers & Routes */}
//         {disasters.map((disaster) => (
//           <>
//             <Marker
//               key={disaster.id}
//               position={[disaster.lat, disaster.lng] as LatLngExpression}
//             >
//               <Popup>
//                 <div className="text-sm font-semibold">
//                   <div className="text-red-600">📍 {disaster.location || "Unknown Location"}</div>
//                   <div className="text-gray-800 mt-1">{disaster.name || "Unnamed Disaster"}</div>
//                 </div>
//               </Popup>
//             </Marker>
//             {userLocation && (
//               <Routing key={`route-${disaster.id}`} from={userLocation} to={[disaster.lat, disaster.lng]} />
//             )}
//           </>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;







// import { useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression, LatLngBoundsExpression } from "leaflet";
// import L from "leaflet";
// import "leaflet-routing-machine";
// import socket from "../services/socket";
// import { disasterService } from "../services/api";
// import "../utils/fixLeaflet";

// type Disaster = {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   location: string;
// };

// const Routing = ({ from, to }: { from: LatLngExpression; to: LatLngExpression }) => {
//   const map = useMap();

//   useEffect(() => {
//     const routingControl = L.Routing.control({
//       waypoints: [L.latLng(from), L.latLng(to)],
//       routeWhileDragging: false,
//       show: false,
//     }).addTo(map);

//     return () => {
//       map.removeControl(routingControl);
//     };
//   }, [from, to, map]);

//   return null;
// };

// const FitBounds = ({ bounds }: { bounds: LatLngBoundsExpression }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (bounds.length > 0) {
//       map.fitBounds(bounds);
//     }
//   }, [bounds, map]);

//   return null;
// };

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
//   const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
//   const center: LatLngExpression = [20.5937, 78.9629]; // fallback center (India)

//   useEffect(() => {
//     const fetchDisasters = async () => {
//       try {
//         const data = await disasterService.getDisasters();
//         const validData = (Array.isArray(data) ? data : []).filter(
//           (d): d is Disaster =>
//             typeof d.lat === "number" &&
//             typeof d.lng === "number" &&
//             !isNaN(d.lat) &&
//             !isNaN(d.lng)
//         );
//         setDisasters(validData);
//       } catch (error) {
//         console.error("Error fetching disasters:", error);
//       }
//     };

//     fetchDisasters();
//   }, []);

//   useEffect(() => {
//     const handleDisasterUpdate = (newDisaster: any) => {
//       if (
//         newDisaster &&
//         typeof newDisaster.lat === "number" &&
//         typeof newDisaster.lng === "number" &&
//         !isNaN(newDisaster.lat) &&
//         !isNaN(newDisaster.lng)
//       ) {
//         setDisasters((prev) => {
//           const alreadyExists = prev.some(d => d.id === newDisaster.id);
//           return alreadyExists ? prev : [newDisaster, ...prev];
//         });
//       }
//     };

//     socket.on("disasterUpdate", handleDisasterUpdate);

//     return () => {
//       socket.off("disasterUpdate", handleDisasterUpdate);
//     };
//   }, []);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation([position.coords.latitude, position.coords.longitude]);
//       },
//       (err) => {
//         console.error("Failed to get user location", err);
//       }
//     );
//   }, []);

//   const bounds: LatLngBoundsExpression = userLocation
//     ? [
//         ...disasters.map(d => [d.lat, d.lng] as [number, number]),
//         userLocation as [number, number],
//       ]
//     : disasters.map(d => [d.lat, d.lng] as [number, number]);

//   return (
//     <div className="w-full h-screen relative z-0">
//       <MapContainer
//         center={center}
//         zoom={5}
//         className="h-full w-full"
//       >
//         <TileLayer
//           url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVza2FuMTIxNiIsImEiOiJjbTkzNDFoM2owYnUyMndzNDI1OG4yY3k4In0.4j6e_uHRIj9rwP8W7R658Q`}
//           attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
//           tileSize={512}
//           zoomOffset={-1}
//         />

//         {/* Automatically fit map bounds once data is loaded */}
//         {bounds.length > 0 && <FitBounds bounds={bounds} />}

//         {/* User Marker */}
//         {userLocation && (
//           <Marker position={userLocation}>
//             <Popup>Your location</Popup>
//           </Marker>
//         )}

//         {/* Disaster Markers & Routes */}
//         {disasters.map((disaster) => (
//           <div key={disaster.id}>
//             <Marker position={[disaster.lat, disaster.lng]}>
//               <Popup>
//                 <div className="text-sm font-semibold">
//                   <div className="text-red-600">📍 {disaster.location || "Unknown Location"}</div>
//                   <div className="text-gray-800 mt-1">{disaster.name || "Unnamed Disaster"}</div>
//                 </div>
//               </Popup>
//             </Marker>
//             {userLocation && (
//               <Routing from={userLocation} to={[disaster.lat, disaster.lng]} />
//             )}
//           </div>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default DisasterMap;













import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression, LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import socket from "../services/socket";
import { disasterService } from "../services/api";
import "../utils/fixLeaflet";

type Disaster = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  location: string;
};

const Routing = ({ from, to }: { from: LatLngExpression; to: LatLngExpression }) => {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from), L.latLng(to)],
      routeWhileDragging: false,
      show: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [from, to, map]);

  return null;
};

const FitBounds = ({ bounds }: { bounds: LatLngTuple[] }) => {
  const map = useMap();

  useEffect(() => {
    if (bounds.length > 0) {
      map.fitBounds(bounds);
    }
  }, [bounds, map]);

  return null;
};

const DisasterMap = () => {
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);
  const center: LatLngTuple = [20.5937, 78.9629]; // fallback center (India)

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const data = await disasterService.getDisasters();
        const validData = (Array.isArray(data) ? data : []).filter(
          (d): d is Disaster =>
            typeof d.lat === "number" &&
            typeof d.lng === "number" &&
            !isNaN(d.lat) &&
            !isNaN(d.lng)
        );
        setDisasters(validData);
      } catch (error) {
        console.error("Error fetching disasters:", error);
      }
    };

    fetchDisasters();
  }, []);

  useEffect(() => {
    const handleDisasterUpdate = (newDisaster: any) => {
      if (
        newDisaster &&
        typeof newDisaster.lat === "number" &&
        typeof newDisaster.lng === "number" &&
        !isNaN(newDisaster.lat) &&
        !isNaN(newDisaster.lng)
      ) {
        setDisasters((prev) => {
          const alreadyExists = prev.some(d => d.id === newDisaster.id);
          return alreadyExists ? prev : [newDisaster, ...prev];
        });
      }
    };

    socket.on("disasterUpdate", handleDisasterUpdate);

    return () => {
      socket.off("disasterUpdate", handleDisasterUpdate);
    };
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        console.error("Failed to get user location", err);
      }
    );
  }, []);

  const bounds: LatLngTuple[] = userLocation
    ? [...disasters.map(d => [d.lat, d.lng] as LatLngTuple), userLocation]
    : disasters.map(d => [d.lat, d.lng] as LatLngTuple);

  return (
    <div className="w-full h-screen relative z-0">
      <MapContainer
        center={center}
        zoom={5}
        className="h-full w-full"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVza2FuMTIxNiIsImEiOiJjbTkzNDFoM2owYnUyMndzNDI1OG4yY3k4In0.4j6e_uHRIj9rwP8W7R658Q`}
          attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
          tileSize={512}
          zoomOffset={-1}
        />

        {bounds.length > 0 && <FitBounds bounds={bounds} />}

        {/* User Marker */}
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>Your location</Popup>
          </Marker>
        )}

        {/* Disaster Markers & Routes */}
        {disasters.map((disaster) => (
          <div key={disaster.id}>
            <Marker position={[disaster.lat, disaster.lng]}>
              <Popup>
                <div className="text-sm font-semibold">
                  <div className="text-red-600">📍 {disaster.location || "Unknown Location"}</div>
                  <div className="text-gray-800 mt-1">{disaster.name || "Unnamed Disaster"}</div>
                </div>
              </Popup>
            </Marker>
            {userLocation && (
              <Routing from={userLocation} to={[disaster.lat, disaster.lng]} />
            )}
          </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default DisasterMap
