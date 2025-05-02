
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddressInput from "./AddressInput";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../utils/fixLeaflet";

const ReportDisaster: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "Flood",
    severity: "Low",
    lat: 0,
    lng: 0,
  });

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (images.length + newFiles.length > 5) {
        alert("You can upload up to 5 images.");
        return;
      }
      setImages((prev) => [...prev, ...newFiles]);
      setPreviewImages((prev) => [
        ...prev,
        ...newFiles.map((file) => URL.createObjectURL(file)),
      ]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length < 1 || images.length > 5) {
      alert("Please upload between 1 and 5 images.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("location", formData.location);
    data.append("type", formData.type);
    data.append("severity", formData.severity);
    data.append("lat", String(formData.lat));
    data.append("lng", String(formData.lng));
    images.forEach((img) => data.append("images", img));

    try {
      await axios.post("https://disaster-relief-app-3.onrender.com/api/v1/disasters/report", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Disaster reported successfully!");
      navigate("/reported-disasters");
    } catch (error) {
      console.error("Error reporting disaster:", error);
      alert("Failed to report disaster.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
        <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Disaster Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-2 border rounded text-black"
            />
          </div>

          {/* Address Input */}
          <AddressInput formData={formData} setFormData={setFormData} />

          {/* Map */}
          {formData.lat !== 0 && formData.lng !== 0 && (
            <div className="h-64 rounded overflow-hidden z-0">
              <MapContainer center={[formData.lat, formData.lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[formData.lat, formData.lng]} />
              </MapContainer>
            </div>
          )}

          {/* Type of Disaster */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
              className="w-full p-2 border rounded text-black"
            >
              <option value="Flood">Flood</option>
              <option value="Earthquake">Earthquake</option>
              <option value="Wildfire">Wildfire</option>
              <option value="Hurricane">Hurricane</option>
            </select>
          </div>

          {/* Severity */}
          <div>
            <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
            <select
              id="severity"
              name="severity"
              value={formData.severity}
              onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
              required
              className="w-full p-2 border rounded text-black"
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium">Upload Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="w-full p-2 border rounded text-black"
            />
            <p className="text-sm text-white mt-1">You can upload up to 5 images.</p>
            {previewImages.length > 0 && (
              <div className="mt-2 flex space-x-2">
                {previewImages.map((src, index) => (
                  <img key={index} src={src} alt="Preview" className="w-16 h-16 object-cover rounded border-2 border-white" />
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
            🚨 Report Disaster
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportDisaster;
