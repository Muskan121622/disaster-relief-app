
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
