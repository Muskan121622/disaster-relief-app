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
      await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
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
    <div className="min-h-screen gradient-primary">
      {/* Navigation */}
      <nav className="glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2 text-white hover:text-emerald-200 transition-colors"
            >
              <span className="text-2xl">←</span>
              <span className="font-semibold">Back to Dashboard</span>
            </button>
            <h1 className="text-xl font-bold text-white">🚨 Report Disaster</h1>
            <div></div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">🌍 Report a Disaster</h2>
            <p className="text-white/80 text-lg">Help us respond quickly by providing detailed information</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Disaster Name */}
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">Disaster Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter disaster name"
              />
            </div>

            {/* Address Input */}
            <AddressInput formData={formData} setFormData={setFormData} />

            {/* Map */}
            {formData.lat !== 0 && formData.lng !== 0 && (
              <div className="h-64 rounded-xl overflow-hidden border border-white/20">
                <MapContainer center={[formData.lat, formData.lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[formData.lat, formData.lng]} />
                </MapContainer>
              </div>
            )}

            {/* Type and Severity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="type" className="block text-white font-medium mb-2">Type of Disaster</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="Flood" className="bg-gray-800">🌊 Flood</option>
                  <option value="Earthquake" className="bg-gray-800">🏔️ Earthquake</option>
                  <option value="Wildfire" className="bg-gray-800">🔥 Wildfire</option>
                  <option value="Hurricane" className="bg-gray-800">🌪️ Hurricane</option>
                </select>
              </div>

              <div>
                <label htmlFor="severity" className="block text-white font-medium mb-2">Severity Level</label>
                <select
                  id="severity"
                  name="severity"
                  value={formData.severity}
                  onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="Low" className="bg-gray-800">🟢 Low</option>
                  <option value="Moderate" className="bg-gray-800">🟡 Moderate</option>
                  <option value="High" className="bg-gray-800">🟠 High</option>
                  <option value="Critical" className="bg-gray-800">🔴 Critical</option>
                </select>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-white font-medium mb-2">Upload Evidence Images</label>
              <div className="border-2 border-dashed border-white/30 rounded-xl p-6 text-center hover:border-white/50 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-white font-medium">Click to upload images</p>
                  <p className="text-white/60 text-sm mt-1">Upload up to 5 images (JPG, PNG)</p>
                </label>
              </div>
              
              {previewImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3">
                  {previewImages.map((src, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={src} 
                        alt="Preview" 
                        className="w-full h-20 object-cover rounded-lg border-2 border-white/30 group-hover:border-white/60 transition-colors" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                🚨 Report Disaster Emergency
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportDisaster;