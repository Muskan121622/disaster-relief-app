import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LocationInput = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  const getCoordinates = async (address: string) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
    const data = await response.json();
    return data.length ? { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) } : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fromCoords = await getCoordinates(from);
    const toCoords = await getCoordinates(to);
    if (fromCoords && toCoords) {
      navigate("/disaster-route-map", { state: { from: fromCoords, to: toCoords, name: "Custom Route", location: to } });
    } else {
      alert("Invalid locations. Try again.");
    }
  };

  return (
    <div className="p-4 bg-gray-200">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="From (Address or City)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-2 border rounded w-1/2"
          required
        />
        <input
          type="text"
          placeholder="To (Address or City)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-2 border rounded w-1/2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Get Route
        </button>
      </form>
    </div>
  );
};

export default LocationInput;
