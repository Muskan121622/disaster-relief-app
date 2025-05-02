
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
