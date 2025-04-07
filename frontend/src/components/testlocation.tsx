import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const TestLocationMap = () => {
  const [coords, setCoords] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords([pos.coords.latitude, pos.coords.longitude]);
        console.log("✅ Location detected:", pos.coords);
      },
      (err) => {
        console.error("❌ Geolocation error:", err.message);
        setError("Location access denied or failed.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  return (
    <div className="w-full h-screen">
      {error && (
        <p className="text-center text-red-600 font-semibold mt-4">{error}</p>
      )}

      {!coords && !error && (
        <p className="text-center text-gray-700 mt-4">Fetching your location...</p>
      )}

      {coords && (
        <MapContainer
          center={coords}
          zoom={16}
          className="h-full w-full rounded"
        >
          <TileLayer
  url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=SPwOPiSFxriwGsnXFOzA&language=en"
  attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
/>

          <Marker position={coords}>
            <Popup>
              📍 Your Location:
              <br />
              Lat: {coords[0].toFixed(6)} <br />
              Lng: {coords[1].toFixed(6)}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default TestLocationMap;
