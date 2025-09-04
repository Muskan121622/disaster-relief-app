import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "leaflet/dist/leaflet.css";
import "../index.css";
interface Disaster {
  id: string;
  name: string;
  location: string;
  severity: string;
  type: string;
  images: string[];
  status: string;
}
const DisasterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [disaster, setDisaster] = useState<Disaster | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisaster = async () => {
      try {
        const response = await axios.get<{ success: boolean; data: Disaster }>(
          `https://disaster-relief-app-3.onrender.com/api/v1/disasters/${id}`
        );
        if (response.data.success) {
          setDisaster(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching disaster details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDisaster();
  }, [id]);

  const handlePhysicalClick = async () => {
    if (!disaster) return;

    try {
      const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: disaster.location,
          format: "json",
        },
      });

      if (geoRes.data.length > 0) {
        const { lat, lon } = geoRes.data[0];
        const toCoords = { lat: parseFloat(lat), lng: parseFloat(lon) };

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const fromCoords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // ✅ Navigate to route map page with coordinates
            navigate("/disaster-route-map", {
              state: {
                from: fromCoords,
                to: toCoords,
                name: disaster.name,
                location: disaster.location,
              },
            });
          },
          (err) => {
            alert("Could not get your location.");
            console.error(err);
          }
        );
      } else {
        alert("Could not find disaster location on the map.");
      }
    } catch (err) {
      console.error("Geocoding error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="glass-effect rounded-3xl p-8 text-center">
          <div className="animate-spin text-6xl mb-4">⏳</div>
          <p className="text-white text-lg font-semibold">Loading disaster details...</p>
        </div>
      </div>
    );
  }
  
  if (!disaster) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="glass-effect rounded-3xl p-8 text-center border-l-4 border-red-400">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-red-400 text-lg font-semibold">Disaster not found.</p>
        </div>
      </div>
    );
  }

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
              onClick={() => navigate("/reported-disasters")}
              className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors"
            >
              <span className="text-xl">←</span>
              <span className="font-medium">Back</span>
            </button>
            <h1 className="text-2xl font-bold text-white flex items-center">
              <span className="mr-3">🎆</span>
              Disaster Details
            </h1>
            <div className="w-16" />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          {/* Image Carousel */}
          {disaster.images.length > 0 && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <Carousel showThumbs={false} autoPlay infiniteLoop className="disaster-carousel">
                {disaster.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`https://disaster-relief-app-3.onrender.com${image}`}
                      alt={`Disaster ${index + 1}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}

          {/* Disaster Information */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center">
              <span className="mr-4">🚨</span>
              {disaster.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-xl">🏷️</span>
                  <div>
                    <p className="text-white/70 text-sm">Disaster Type</p>
                    <p className="text-white font-semibold text-lg">{disaster.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-xl">📍</span>
                  <div>
                    <p className="text-white/70 text-sm">Location</p>
                    <p className="text-white font-semibold text-lg">{disaster.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-xl">⚠️</span>
                  <div>
                    <p className="text-white/70 text-sm">Severity Level</p>
                    <span className={`px-4 py-2 rounded-full font-semibold ${
                      disaster.severity === 'High' ? 'bg-red-400/20 text-red-300' :
                      disaster.severity === 'Medium' ? 'bg-amber-400/20 text-amber-300' :
                      'bg-emerald-400/20 text-emerald-300'
                    }`}>
                      {disaster.severity}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-xl">📊</span>
                  <div>
                    <p className="text-white/70 text-sm">Current Status</p>
                    <span className="bg-emerald-400/20 text-emerald-300 px-4 py-2 rounded-full font-semibold">
                      {disaster.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              How would you like to help?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={handlePhysicalClick}
                className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 rounded-3xl shadow-xl card-hover text-left group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
                <h4 className="font-bold text-xl mb-3">Physical Assistance</h4>
                <p className="text-sm opacity-90">Join the relief efforts on-ground and help directly</p>
                <div className="mt-4 flex items-center text-emerald-200">
                  <span className="mr-2">Get directions</span>
                  <span>→</span>
                </div>
              </button>

              <button
                onClick={() => navigate("/donate")}
                className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-xl card-hover text-left group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h4 className="font-bold text-xl mb-3">Financial Support</h4>
                <p className="text-sm opacity-90">Contribute funds to support relief operations</p>
                <div className="mt-4 flex items-center text-blue-200">
                  <span className="mr-2">Make donation</span>
                  <span>→</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterDetails;
