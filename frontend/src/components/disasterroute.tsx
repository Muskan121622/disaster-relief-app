
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "../styles/mapStyles.css";

// Routing component
const Routing = ({ from, to }: { from: [number, number]; to: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      routeWhileDragging: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      createMarker: () => null,
    } as any).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [from, to, map]);

  return null;
};

// English-only map tiles
const tileOptions = {
  MapTilerStreetsEN: {
    url: "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=SPwOPiSFxriwGsnXFOzA&language=en",
    attribution:
      '&copy; <a href="https://www.maptiler.com/">MapTiler</a>, &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  },
};

const DisasterRouteMap = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as {
    to: { lat: number; lng: number };
    name: string;
    location: string;
  };

  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (!navigator.geolocation) {
        setGeoError("Geolocation is not supported by your browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
          console.log("✅ User location (browser):", coords);
          setUserLocation(coords);
        },
        async () => {
          console.warn("⚠️ Geolocation failed, trying IP-based fallback...");
          try {
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            const coords: [number, number] = [data.latitude, data.longitude];
            console.log("✅ User location (IP fallback):", coords);
            setUserLocation(coords);
          } catch (e) {
            console.error("❌ IP fallback failed:", e);
            setGeoError("Unable to retrieve your location. Please enable GPS or location access.");
          }
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    };

    fetchLocation();
  }, []);

  if (!state) {
    return <p className="text-center mt-8 text-red-600 font-semibold">No route data found.</p>;
  }

  if (geoError) {
    return <p className="text-center mt-8 text-red-600 font-semibold">{geoError}</p>;
  }

  if (!userLocation) {
    return <p className="text-center mt-8 text-gray-600 font-semibold">Fetching your location...</p>;
  }

  const toCoords: [number, number] = [state.to.lat, state.to.lng];
  const { url, attribution } = tileOptions.MapTilerStreetsEN;

  console.log("📍 Final User Location:", userLocation);
  console.log("📌 Disaster Location:", toCoords);

  return (
    <div className="w-full h-screen bg-green-100 flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-center w-full">
          Route to: {state.name} ({state.location})
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Back
        </button>
      </div>

      <div className="flex-1">
        <MapContainer center={userLocation} zoom={15} className="h-full w-full rounded-md shadow-md z-0">
          <TileLayer url={url} attribution={attribution} />
          <Marker position={userLocation}>
            <Popup>Your Location</Popup>
          </Marker>
          <Marker position={toCoords}>
            <Popup>
              Disaster Location:
              <br />
              {state.name}
              <br />
              {state.location}
            </Popup>
          </Marker>
          <Routing from={userLocation} to={toCoords} />
        </MapContainer>
      </div>
    </div>
  );
};

export default DisasterRouteMap;
