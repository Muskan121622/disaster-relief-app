
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="glass-effect rounded-3xl p-8 text-center">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-red-400 font-semibold text-lg">No route data found.</p>
        </div>
      </div>
    );
  }

  if (geoError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="glass-effect rounded-3xl p-8 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="text-red-400 font-semibold text-lg">{geoError}</p>
        </div>
      </div>
    );
  }

  if (!userLocation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="glass-effect rounded-3xl p-8 text-center">
          <div className="animate-spin text-6xl mb-4">🌍</div>
          <p className="text-white font-semibold text-lg">Fetching your location...</p>
        </div>
      </div>
    );
  }

  const toCoords: [number, number] = [state.to.lat, state.to.lng];
  const { url, attribution } = tileOptions.MapTilerStreetsEN;

  console.log("📍 Final User Location:", userLocation);
  console.log("📌 Disaster Location:", toCoords);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Navigation */}
      <nav className="glass-effect border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors"
            >
              <span className="text-xl">←</span>
              <span className="font-medium">Back</span>
            </button>
            <h1 className="text-xl font-bold text-white text-center flex-1">
              Route to: {state.name}
            </h1>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 h-[calc(100vh-4rem)]">
        <div className="glass-effect rounded-3xl p-6 h-full shadow-2xl">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white mb-2">{state.name}</h2>
            <p className="text-white/70 flex items-center">
              <span className="mr-2">📍</span>
              {state.location}
            </p>
          </div>
          
          <div className="h-[calc(100%-5rem)] rounded-2xl overflow-hidden shadow-xl">
            <MapContainer center={userLocation} zoom={15} className="h-full w-full z-0">
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
      </div>
    </div>
  );
};

export default DisasterRouteMap;
