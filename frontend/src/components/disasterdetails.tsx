
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "leaflet/dist/leaflet.css";

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

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!disaster) return <p className="text-center text-lg text-red-500">Disaster not found.</p>;

  return (
    <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
      <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
        <h2 className="text-2xl font-bold">Disaster Description</h2>
      </div>

      <div className="max-w-md w-full p-6 mt-6">
        {disaster.images.length > 0 && (
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {disaster.images.map((image, index) => (
              <div key={index}>
                <img
                  src={`https://disaster-relief-app-3.onrender.com${image}`}
                  alt={`Disaster ${index + 1}`}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>
            ))}
          </Carousel>
        )}

        <h3 className="text-xl font-bold mt-4">{disaster.name}</h3>
        <p className="text-gray-700 mt-2"><strong>Disaster Type:</strong> {disaster.type}</p>
        <p className="text-gray-700"><strong>Location:</strong> {disaster.location}</p>
        <p className="text-gray-700"><strong>Severity:</strong> {disaster.severity}</p>
        <p className="text-gray-700"><strong>Current Status:</strong> <span className="text-green-600 font-semibold">{disaster.status}</span></p>

        <p className="text-lg font-semibold mt-4 text-center">Select your interest to work in:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <button
            onClick={handlePhysicalClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Physical
          </button>

          <button
            onClick={() => navigate("/donate")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Financial
          </button>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => navigate("/reported-disasters")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisasterDetails;
