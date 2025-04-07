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
//     <MapContainer center={center} zoom={5} className="h-96 w-full rounded-lg">
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
//     <MapContainer center={center} zoom={5} className="h-96 w-full rounded-lg">
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {disasters.map((disaster) => (
//         <Marker key={disaster.id} position={[disaster.lat, disaster.lng] as LatLngExpression}>
//           <Popup>{disaster.name}</Popup>
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
// import "../utils/fixLeaflet"; // 👈 Fix marker icons before using Marker

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
//     socket.on("disasterUpdate", (newDisaster: any) => {
//       if (
//         newDisaster &&
//         typeof newDisaster.lat === "number" &&
//         typeof newDisaster.lng === "number" &&
//         !isNaN(newDisaster.lat) &&
//         !isNaN(newDisaster.lng)
//       ) {
//         setDisasters((prev) => [newDisaster, ...prev]);
//       } else {
//         console.warn("Invalid disaster data received:", newDisaster);
//       }
//     });
//     return () => {
//       socket.off("disasterUpdate");
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
//             <strong>{disaster.name}</strong>
//             <br />
//             📍 {disaster.location}
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
// import "../utils/fixLeaflet"; // 👈 Fix marker icons before using Marker

// type Disaster = {
//   id: number;
//   lat: number;
//   lng: number;
//   name: string;
//   location: string; // 👈 Add location property
// };

// const DisasterMap = () => {
//   const [disasters, setDisasters] = useState<Disaster[]>([]);
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
//     socket.on("disasterUpdate", (newDisaster: Disaster) => {
//       setDisasters((prev) => [newDisaster, ...prev]);
//     });
//     return () => {
//       socket.off("disasterUpdate");
//     };
//   }, []);

//   return (
//     <MapContainer center={center} zoom={5} className="h-96 w-full rounded-lg z-0">
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {disasters.map((disaster) => (
//         <Marker key={disaster.id} position={[disaster.lat, disaster.lng] as LatLngExpression}>
//           <Popup>
//             <strong>{disaster.name}</strong>
//             <br />
//             📍 {disaster.location}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default DisasterMap;





























import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import socket from "../services/socket";
import { disasterService } from "../services/api";
import "../utils/fixLeaflet"; // 👈 Fix leaflet marker icons

type Disaster = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  location: string;
};

const DisasterMap = () => {
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const center: LatLngExpression = [37.7749, -122.4194];

  // ✅ Fetch initial disasters from backend
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

  // ✅ Handle real-time updates via socket
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
          // Optionally prevent duplicates using ID
          const alreadyExists = prev.some(d => d.id === newDisaster.id);
          return alreadyExists ? prev : [newDisaster, ...prev];
        });
      } else {
        console.warn("Invalid disaster data received via socket:", newDisaster);
      }
    };

    socket.on("disasterUpdate", handleDisasterUpdate);

    return () => {
      socket.off("disasterUpdate", handleDisasterUpdate);
    };
  }, []);

  return (
    <MapContainer center={center} zoom={5} className="h-96 w-full rounded-lg z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {disasters.map((disaster) => (
        <Marker
          key={disaster.id}
          position={[disaster.lat, disaster.lng] as LatLngExpression}
        >
          <Popup>
            <strong>{disaster.name || "Unnamed Disaster"}</strong>
            <br />
            📍 {disaster.location || "Unknown Location"}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DisasterMap;
