// import { useState } from "react";
// import axios from "axios";

// const ReportDisaster = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     severity: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", formData);
//       alert("Disaster reported successfully!");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Report a Disaster</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Disaster Name"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="severity"
//           placeholder="Severity (Low, Medium, High)"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
//           Report Disaster
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;
// import { useState } from "react";
// import axios from "axios";
// import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

// const libraries: ("places")[] = ["places"];

// const ReportDisaster = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // 🔹 Replace with your actual API Key
//     libraries,
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     severity: "Low",
//     type: "Flood",
//     images: [] as File[],
//   });

//   const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

//   const handlePlaceSelect = () => {
//     if (autocomplete) {
//       const place = autocomplete.getPlace();
//       setFormData({ ...formData, location: place.formatted_address || "" });
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData({ ...formData, images: Array.from(e.target.files) });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("severity", formData.severity);
//     data.append("type", formData.type);
//     formData.images.forEach((file) => data.append("images", file));

//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Disaster Name"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />

//         {isLoaded && (
//           <Autocomplete
//             onLoad={(auto) => setAutocomplete(auto)}
//             onPlaceChanged={handlePlaceSelect}
//           >
//             <input
//               type="text"
//               name="location"
//               placeholder="Select Location"
//               className="w-full border p-2 rounded"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </Autocomplete>
//         )}

//         <select
//           name="type"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         >
//           <option value="Flood">Flood</option>
//           <option value="Earthquake">Earthquake</option>
//           <option value="Hurricane">Hurricane</option>
//           <option value="Fire">Fire</option>
//           <option value="Tornado">Tornado</option>
//         </select>

//         <select
//           name="severity"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         >
//           <option value="Low">Low</option>
//           <option value="Moderate">Moderate</option>
//           <option value="High">High</option>
//         </select>

//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           className="w-full border p-2 rounded"
//           onChange={handleFileChange}
//         />

//         {formData.images.length > 0 && (
//           <div className="mt-2">
//             <p className="text-sm text-gray-500">Selected Images:</p>
//             <div className="flex space-x-2 overflow-x-auto">
//               {formData.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={URL.createObjectURL(image)}
//                   alt="Preview"
//                   className="h-12 w-12 object-cover rounded"
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
//           Report Disaster
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;
// import { useState } from "react";
// import axios from "axios";
// import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

// const libraries: ("places")[] = ["places"];

// const ReportDisaster = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // 🔹 Replace with your actual API Key
//     libraries,
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     severity: "Low",
//     type: "Flood",
//     images: [] as File[],
//   });

//   const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

//   const handlePlaceSelect = () => {
//     if (autocomplete) {
//       const place = autocomplete.getPlace();
//       setFormData({ ...formData, location: place.formatted_address || "" });
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData({ ...formData, images: Array.from(e.target.files) });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("severity", formData.severity);
//     data.append("type", formData.type);
//     formData.images.forEach((file) => data.append("images", file));

//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <label className="block">
//           <span className="text-gray-700">Disaster Name</span>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter disaster name"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Location</span>
//           {isLoaded && (
//             <Autocomplete
//               onLoad={(auto) => setAutocomplete(auto)}
//               onPlaceChanged={handlePlaceSelect}
//             >
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Select location"
//                 className="w-full border p-2 rounded mt-1"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//               />
//             </Autocomplete>
//           )}
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Type of Disaster</span>
//           <select
//             name="type"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleChange}
//             required
//             aria-label="Type of Disaster"
//           >
//             <option value="Flood">Flood</option>
//             <option value="Earthquake">Earthquake</option>
//             <option value="Hurricane">Hurricane</option>
//             <option value="Fire">Fire</option>
//             <option value="Tornado">Tornado</option>
//           </select>
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Severity</span>
//           <select
//             name="severity"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleChange}
//             required
//             aria-label="Severity Level"
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//           </select>
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Upload Images</span>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleFileChange}
//           />
//         </label>

//         {formData.images.length > 0 && (
//           <div className="mt-2">
//             <p className="text-sm text-gray-500">Selected Images:</p>
//             <div className="flex space-x-2 overflow-x-auto">
//               {formData.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={URL.createObjectURL(image)}
//                   alt="Preview"
//                   className="h-12 w-12 object-cover rounded"
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
//           Report Disaster
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;
// import { useState } from "react";
// import axios from "axios";
// import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

// const libraries: ("places")[] = ["places"];

// const ReportDisaster = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // 🔹 Replace with your actual API Key
//     libraries,
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     severity: "Low",
//     type: "Flood",
//     images: [] as File[],
//   });

//   const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

//   const handlePlaceSelect = () => {
//     if (autocomplete) {
//       const place = autocomplete.getPlace();
//       setFormData({ ...formData, location: place.formatted_address || "" });
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData({ ...formData, images: Array.from(e.target.files) });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("severity", formData.severity);
//     data.append("type", formData.type);
//     formData.images.forEach((file) => data.append("images", file));

//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <label className="block">
//           <span className="text-gray-700">Disaster Name</span>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter disaster name"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Location</span>
//           {isLoaded && (
//             <Autocomplete
//               onLoad={(auto) => setAutocomplete(auto)}
//               onPlaceChanged={handlePlaceSelect}
//             >
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Select location"
//                 className="w-full border p-2 rounded mt-1"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//               />
//             </Autocomplete>
//           )}
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Type of Disaster</span>
//           <select
//             name="type"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleChange}
//             required
//             aria-label="Type of Disaster"
//           >
//             <option value="Flood">Flood</option>
//             <option value="Earthquake">Earthquake</option>
//             <option value="Hurricane">Hurricane</option>
//             <option value="Fire">Fire</option>
//             <option value="Tornado">Tornado</option>
//           </select>
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Severity</span>
//           <select
//             name="severity"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleChange}
//             required
//             aria-label="Severity Level"
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//           </select>
//         </label>

//         <label className="block">
//           <span className="text-gray-700">Upload Images</span>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             className="w-full border p-2 rounded mt-1"
//             onChange={handleFileChange}
//           />
//         </label>

//         {formData.images.length > 0 && (
//           <div className="mt-2">
//             <p className="text-sm text-gray-500">Selected Images:</p>
//             <div className="flex space-x-2 overflow-x-auto">
//               {formData.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={URL.createObjectURL(image)}
//                   alt="Preview"
//                   className="h-12 w-12 object-cover rounded"
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
//           Report Disaster
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;





// import React, { useState } from "react";
// import axios from "axios";

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     images: [] as File[],
//   });
//   const [previewImages, setPreviewImages] = useState<string[]>([]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const files = Array.from(e.target.files);
//       setFormData({ ...formData, images: files });
//       setPreviewImages(files.map((file) => URL.createObjectURL(file)));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     formData.images.forEach((image) => data.append("images", image));

//     try {
//       const response = await axios.post("http://localhost:5000/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log(response.data);
//       alert("Disaster reported successfully");
//     } catch (error) {
//       console.error("Error reporting disaster", error);
//       alert("Failed to report disaster");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//       <form onSubmit={handleSubmit}>
//         <label className="block">Disaster Name</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />

//         <label className="block">Location</label>
//         <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />

//         <label className="block">Type of Disaster</label>
//         <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded mb-2">
//           <option value="Flood">Flood</option>
//           <option value="Earthquake">Earthquake</option>
//           <option value="Wildfire">Wildfire</option>
//           <option value="Hurricane">Hurricane</option>
//         </select>

//         <label className="block">Severity</label>
//         <select name="severity" value={formData.severity} onChange={handleChange} className="w-full p-2 border rounded mb-2">
//           <option value="Low">Low</option>
//           <option value="Moderate">Moderate</option>
//           <option value="High">High</option>
//         </select>

//         <label className="block">Upload Images</label>
//         <input type="file" multiple accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded mb-2" />
//         <div className="flex gap-2 mt-2">
//           {previewImages.map((src, index) => (
//             <img key={index} src={src} alt="Preview" className="w-16 h-16 object-cover rounded" />
//           ))}
//         </div>

//         <button type="submit" className="w-full bg-green-600 text-white p-2 rounded mt-4">Report Disaster</button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;















// import React, { useState } from "react";
// import axios from "axios";

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files);
//       setImages(filesArray);

//       // Preview selected images
//       const previews = filesArray.map((file) => URL.createObjectURL(file));
//       setPreviewImages(previews);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const data = new FormData();

//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));

//     try {
//       const response = await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Disaster Name */}
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Disaster Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Location */}
//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//             Location
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Disaster Type */}
//         <div>
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700">
//             Type of Disaster
//           </label>
//           <select
//             id="type"
//             name="type"
//             value={formData.type}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//             aria-label="Select type of disaster"
//           >
//             <option value="Flood">Flood</option>
//             <option value="Earthquake">Earthquake</option>
//             <option value="Wildfire">Wildfire</option>
//             <option value="Hurricane">Hurricane</option>
//           </select>
//         </div>

//         {/* Severity */}
//         <div>
//           <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
//             Severity
//           </label>
//           <select
//             id="severity"
//             name="severity"
//             value={formData.severity}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//             aria-label="Select severity level"
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//             <option value="Critical">Critical</option>
//           </select>
//         </div>

//         {/* Upload Images */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleFileChange}
//             className="w-full p-2 border rounded"
//           />
//           {/* Image Preview */}
//           {previewImages.length > 0 && (
//             <div className="mt-2">
//               <p className="text-sm text-gray-600">Selected Images:</p>
//               <div className="flex space-x-2 mt-2">
//                 {previewImages.map((src, index) => (
//                   <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded" />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
//         >
//           Report Disaster
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;

















// import React, { useState } from "react";
// import axios from "axios";

// const ReportDisaster: React.FC = () => {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState({ lat: "", lng: "" });
//   const [type, setType] = useState("Flood");
//   const [severity, setSeverity] = useState("Low");
//   const [images, setImages] = useState<FileList | null>(null);
//   const [imagePreview, setImagePreview] = useState<string[]>([]);
//   const [error, setError] = useState("");

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setImages(event.target.files);
//       const previews = Array.from(event.target.files).map((file) =>
//         URL.createObjectURL(file)
//       );
//       setImagePreview(previews);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("location", JSON.stringify(location)); // ✅ Send location as JSON
//     formData.append("type", type);
//     formData.append("severity", severity);

//     if (images) {
//       Array.from(images).forEach((image) => formData.append("images", image));
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/v1/disasters/report", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       console.log("Disaster reported successfully:", response.data);
//       alert("Disaster reported successfully!");
//       setName("");
//       setLocation({ lat: "", lng: "" });
//       setImages(null);
//       setImagePreview([]);
//     } catch (err: any) {
//       console.error("Error reporting disaster:", err);
//       setError(err.response?.data?.error || "Failed to report disaster");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Report a Disaster</h2>
//       {error && <p className="text-red-500">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         {/* Disaster Name */}
//         <label className="block mb-2">Disaster Name</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded mb-4"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         {/* Location Input */}
//         <label className="block mb-2">Location</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded mb-4"
//           placeholder="Latitude"
//           value={location.lat}
//           onChange={(e) => setLocation({ ...location, lat: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           className="w-full p-2 border rounded mb-4"
//           placeholder="Longitude"
//           value={location.lng}
//           onChange={(e) => setLocation({ ...location, lng: e.target.value })}
//           required
//         />

//         {/* Type of Disaster */}
//         <label htmlFor="disasterType" className="block mb-2">Type of Disaster</label>
//         <select
//           id="disasterType"
//           className="w-full p-2 border rounded mb-4"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           required
//         >
//           <option value="Flood">Flood</option>
//           <option value="Earthquake">Earthquake</option>
//           <option value="Wildfire">Wildfire</option>
//           <option value="Tornado">Tornado</option>
//         </select>

//         {/* Severity */}
//         <label htmlFor="severity" className="block mb-2">Severity</label>
//         <select
//           id="severity"
//           className="w-full p-2 border rounded mb-4"
//           value={severity}
//           onChange={(e) => setSeverity(e.target.value)}
//           required
//         >
//           <option value="Low">Low</option>
//           <option value="Moderate">Moderate</option>
//           <option value="High">High</option>
//         </select>

//         {/* Image Upload */}
//         <label className="block mb-2">Upload Images</label>
//         <input
//           type="file"
//           multiple
//           className="w-full p-2 border rounded mb-4"
//           onChange={handleImageChange}
//           accept="image/*"
//         />
//         <div className="flex space-x-2 mb-4">
//           {imagePreview.map((src, index) => (
//             <img key={index} src={src} alt="Preview" className="w-16 h-16 object-cover rounded" />
//           ))}
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
//           Report Disaster
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;


















// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate(); // ✅ Use navigate for redirection

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files);
//       setImages(filesArray);

//       // Preview selected images
//       const previews = filesArray.map((file) => URL.createObjectURL(file));
//       setPreviewImages(previews);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const data = new FormData();

//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));

//     try {
//       const response = await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Disaster reported successfully!");
//       console.log(response.data);

//       navigate("/reported-disasters"); // ✅ Navigate after successful submission
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Disaster Name */}
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Disaster Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Location */}
//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//             Location
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         {/* Disaster Type */}
//         <div>
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700">
//             Type of Disaster
//           </label>
//           <select
//             id="type"
//             name="type"
//             value={formData.type}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//             aria-label="Select type of disaster"
//           >
//             <option value="Flood">Flood</option>
//             <option value="Earthquake">Earthquake</option>
//             <option value="Wildfire">Wildfire</option>
//             <option value="Hurricane">Hurricane</option>
//           </select>
//         </div>

//         {/* Severity */}
//         <div>
//           <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
//             Severity
//           </label>
//           <select
//             id="severity"
//             name="severity"
//             value={formData.severity}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//             aria-label="Select severity level"
//           >
//             <option value="Low">Low</option>
//             <option value="Moderate">Moderate</option>
//             <option value="High">High</option>
//             <option value="Critical">Critical</option>
//           </select>
//         </div>

//         {/* Upload Images */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleFileChange}
//             className="w-full p-2 border rounded"
//           />
//           {/* Image Preview */}
//           {previewImages.length > 0 && (
//             <div className="mt-2">
//               <p className="text-sm text-gray-600">Selected Images:</p>
//               <div className="flex space-x-2 mt-2">
//                 {previewImages.map((src, index) => (
//                   <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded" />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
//         >
//           Report Disaster
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReportDisaster;






// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { GoogleMap, LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

// const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();
//   const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files);
//       setImages(filesArray);
//       const previews = filesArray.map((file) => URL.createObjectURL(file));
//       setPreviewImages(previews);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const data = new FormData();

//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));

//     try {
//       const response = await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Disaster reported successfully!");
//       console.log(response.data);
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const onPlacesChanged = () => {
//     if (searchBox) {
//       const places = searchBox.getPlaces();
//       if (places && places.length > 0) {
//         const place = places[0];
//         setFormData({ ...formData, location: place.formatted_address || "" });
//       }
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
//       <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Disaster Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Disaster Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           {/* Location Input with Google Places Autocomplete */}
//           <div>
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <StandaloneSearchBox
//               onLoad={(ref) => setSearchBox(ref)}
//               onPlacesChanged={onPlacesChanged}
//             >
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-2 border rounded"
//                 placeholder="Search location..."
//               />
//             </StandaloneSearchBox>
//           </div>

//           {/* Disaster Type */}
//           <div>
//             <label htmlFor="type" className="block text-sm font-medium text-gray-700">
//               Type of Disaster
//             </label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//               aria-label="Select type of disaster"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           {/* Severity */}
//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
//               Severity
//             </label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//               aria-label="Select severity level"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           {/* Upload Images */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="w-full p-2 border rounded"
//             />
//             {/* Image Preview */}
//             {previewImages.length > 0 && (
//               <div className="mt-2">
//                 <p className="text-sm text-gray-600">Selected Images:</p>
//                 <div className="flex space-x-2 mt-2">
//                   {previewImages.map((src, index) => (
//                     <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded" />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
//           >
//             Report Disaster
//           </button>
//         </form>
//       </div>
//     </LoadScript>
//   );
// };

// export default ReportDisaster;
































// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { GoogleMap, LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

// const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();
//   const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files);

//       if (filesArray.length < 1 || filesArray.length > 5) {
//         alert("Please select between 1 and 5 images.");
//         return;
//       }

//       setImages(filesArray);
//       const previews = filesArray.map((file) => URL.createObjectURL(file));
//       setPreviewImages(previews);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));

//     try {
//       const response = await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Disaster reported successfully!");
//       console.log(response.data);
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const onPlacesChanged = () => {
//     if (searchBox) {
//       const places = searchBox.getPlaces();
//       if (places && places.length > 0) {
//         const place = places[0];
//         setFormData({ ...formData, location: place.formatted_address || "" });
//       }
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
//       <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Disaster Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Disaster Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           {/* Location Input with Google Places Autocomplete */}
//           <div>
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <StandaloneSearchBox onLoad={(ref) => setSearchBox(ref)} onPlacesChanged={onPlacesChanged}>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-2 border rounded"
//                 placeholder="Search location..."
//               />
//             </StandaloneSearchBox>
//           </div>

//           {/* Disaster Type */}
//           <div>
//             <label htmlFor="type" className="block text-sm font-medium text-gray-700">
//               Type of Disaster
//             </label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           {/* Severity */}
//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
//               Severity
//             </label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           {/* Upload Images */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="w-full p-2 border rounded"
//             />
//             <p className="text-sm text-gray-500 mt-1">You can upload up to 5 images.</p>

//             {/* Image Preview */}
//             {previewImages.length > 0 && (
//               <div className="mt-2">
//                 <p className="text-sm text-gray-600">Selected Images:</p>
//                 <div className="flex space-x-2 mt-2">
//                   {previewImages.map((src, index) => (
//                     <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded" />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
//           >
//             Report Disaster
//           </button>
//         </form>
//       </div>
//     </LoadScript>
//   );
// };

// export default ReportDisaster;

























// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

// const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key
// const LIBRARIES: ("places")[] = ["places"]; // ✅ Fix for LoadScript warning

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();
//   const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);

//       if (images.length + newFiles.length > 5) {
//         alert("You can upload up to 5 images.");
//         return;
//       }

//       setImages((prevImages) => [...prevImages, ...newFiles]);
//       setPreviewImages((prevPreviews) => [
//         ...prevPreviews,
//         ...newFiles.map((file) => URL.createObjectURL(file)),
//       ]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));

//     try {
//       const response = await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Disaster reported successfully!");
//       console.log(response.data);
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const onPlacesChanged = () => {
//     if (searchBox) {
//       const places = searchBox.getPlaces();
//       if (places && places.length > 0) {
//         const place = places[0];
//         setFormData({ ...formData, location: place.formatted_address || "" });
//       }
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={LIBRARIES}> {/* ✅ Fix for LoadScript warning */}
//       <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-xl font-bold mb-4 text-center">Report a Disaster</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Disaster Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Disaster Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           {/* Location Input with Google Places Autocomplete */}
//           <div>
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <StandaloneSearchBox onLoad={(ref) => setSearchBox(ref)} onPlacesChanged={onPlacesChanged}>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full p-2 border rounded"
//                 placeholder="Search location..."
//               />
//             </StandaloneSearchBox>
//           </div>

//           {/* Disaster Type */}
//           <div>
//             <label htmlFor="type" className="block text-sm font-medium text-gray-700">
//               Type of Disaster
//             </label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           {/* Severity */}
//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
//               Severity
//             </label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           {/* Upload Images */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="w-full p-2 border rounded"
//             />
//             <p className="text-sm text-gray-500 mt-1">You can upload up to 5 images.</p>

//             {/* Image Preview */}
//             {previewImages.length > 0 && (
//               <div className="mt-2">
//                 <p className="text-sm text-gray-600">Selected Images:</p>
//                 <div className="flex space-x-2 mt-2">
//                   {previewImages.map((src, index) => (
//                     <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded" />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
//           >
//             Report Disaster
//           </button>
//         </form>
//       </div>
//     </LoadScript>
//   );
// };

// export default ReportDisaster;























// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

// const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
// const LIBRARIES: ("places")[] = ["places"];

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();
//   const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       if (images.length + newFiles.length > 5) {
//         alert("You can upload up to 5 images.");
//         return;
//       }
//       setImages((prevImages) => [...prevImages, ...newFiles]);
//       setPreviewImages((prevPreviews) => [...prevPreviews, ...newFiles.map((file) => URL.createObjectURL(file))]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));
//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const onPlacesChanged = () => {
//     if (searchBox) {
//       const places = searchBox.getPlaces();
//       if (places && places.length > 0) {
//         const place = places[0];
//         setFormData({ ...formData, location: place.formatted_address || "" });
//       }
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={LIBRARIES}>
//       <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded text-black" />
//           </div>
//           <div>
//             <label htmlFor="location" className="block text-sm font-medium">Location</label>
//             <StandaloneSearchBox onLoad={(ref) => setSearchBox(ref)} onPlacesChanged={onPlacesChanged}>
//               <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required className="w-full p-2 border rounded text-black" placeholder="Search location..." />
//             </StandaloneSearchBox>
//           </div>
//           <div>
//             <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//             <select id="type" name="type" value={formData.type} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//             <select id="severity" name="severity" value={formData.severity} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Upload Images</label>
//             <input type="file" accept="image/*" multiple onChange={handleFileChange} className="w-full p-2 border rounded text-black" />
//             <p className="text-sm text-white mt-1">You can upload up to 5 images.</p>
//             {previewImages.length > 0 && (
//               <div className="mt-2 flex space-x-2">
//                 {previewImages.map((src, index) => (
//                   <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded border-2 border-white" />
//                 ))}
//               </div>
//             )}
//           </div>
//           <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//             🚨 Report Disaster
//           </button>
//         </form>
//       </div>
//     </LoadScript>
//   );
// };

// export default ReportDisaster;

































// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

// const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
// const LIBRARIES: ("places")[] = ["places"];

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();
//   const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       if (images.length + newFiles.length > 5) {
//         alert("You can upload up to 5 images.");
//         return;
//       }
//       setImages((prevImages) => [...prevImages, ...newFiles]);
//       setPreviewImages((prevPreviews) => [...prevPreviews, ...newFiles.map((file) => URL.createObjectURL(file))]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));
//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const onPlacesChanged = () => {
//     if (searchBox) {
//       const places = searchBox.getPlaces();
//       if (places && places.length > 0) {
//         const place = places[0];
//         setFormData({ ...formData, location: place.formatted_address || "" });
//       }
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={LIBRARIES}>
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//         <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//           <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded text-black" />
//             </div>
//             <div>
//               <label htmlFor="location" className="block text-sm font-medium">Location</label>
//               <StandaloneSearchBox onLoad={(ref) => setSearchBox(ref)} onPlacesChanged={onPlacesChanged}>
//                 <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required className="w-full p-2 border rounded text-black" placeholder="Search location..." />
//               </StandaloneSearchBox>
//             </div>
//             <div>
//               <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//               <select id="type" name="type" value={formData.type} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//                 <option value="Flood">Flood</option>
//                 <option value="Earthquake">Earthquake</option>
//                 <option value="Wildfire">Wildfire</option>
//                 <option value="Hurricane">Hurricane</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//               <select id="severity" name="severity" value={formData.severity} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//                 <option value="Low">Low</option>
//                 <option value="Moderate">Moderate</option>
//                 <option value="High">High</option>
//                 <option value="Critical">Critical</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Upload Images</label>
//               <input type="file" accept="image/*" multiple onChange={handleFileChange} className="w-full p-2 border rounded text-black" />
//               <p className="text-sm text-white mt-1">You can upload up to 5 images.</p>
//               {previewImages.length > 0 && (
//                 <div className="mt-2 flex space-x-2">
//                   {previewImages.map((src, index) => (
//                     <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded border-2 border-white" />
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//               🚨 Report Disaster
//             </button>
//           </form>
//         </div>
//       </div>
//     </LoadScript>
//   );
// };

// export default ReportDisaster;


































// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

// const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
// const LIBRARIES: ("places")[] = ["places"];

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();
//   const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       if (images.length + newFiles.length > 5) {
//         alert("You can upload up to 5 images.");
//         return;
//       }
//       setImages((prevImages) => [...prevImages, ...newFiles]);
//       setPreviewImages((prevPreviews) => [...prevPreviews, ...newFiles.map((file) => URL.createObjectURL(file))]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     images.forEach((image) => data.append("images", image));
//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const onPlacesChanged = () => {
//     if (searchBox) {
//       const places = searchBox.getPlaces();
//       if (places && places.length > 0) {
//         const place = places[0];
//         setFormData({ ...formData, location: place.formatted_address || "" });
//       }
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={LIBRARIES}>
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//         <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//           <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded text-black" />
//             </div>
//             <div>
//               <label htmlFor="location" className="block text-sm font-medium">Location</label>
//               <StandaloneSearchBox onLoad={(ref) => setSearchBox(ref)} onPlacesChanged={onPlacesChanged}>
//                 <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required className="w-full p-2 border rounded text-black" placeholder="Search location..." />
//               </StandaloneSearchBox>
//             </div>
//             <div>
//               <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//               <select id="type" name="type" value={formData.type} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//                 <option value="Flood">Flood</option>
//                 <option value="Earthquake">Earthquake</option>
//                 <option value="Wildfire">Wildfire</option>
//                 <option value="Hurricane">Hurricane</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//               <select id="severity" name="severity" value={formData.severity} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//                 <option value="Low">Low</option>
//                 <option value="Moderate">Moderate</option>
//                 <option value="High">High</option>
//                 <option value="Critical">Critical</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Upload Images</label>
//               <input type="file" accept="image/*" multiple onChange={handleFileChange} className="w-full p-2 border rounded text-black" />
//               <p className="text-sm text-white mt-1">You can upload up to 5 images.</p>
//               {previewImages.length > 0 && (
//                 <div className="mt-2 flex space-x-2">
//                   {previewImages.map((src, index) => (
//                     <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded border-2 border-white" />
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//               🚨 Report Disaster
//             </button>
//           </form>
//           <div className="text-center mt-6">
//             <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
//               Back to Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     </LoadScript>
//   );
// };

// export default ReportDisaster;



















// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// import { useEffect } from "react";
// import "leaflet-geosearch/dist/geosearch.css";
// import L from "leaflet";
// import "../utils/fixLeaflet";

// const provider = new OpenStreetMapProvider();

// const SearchControl = ({ setLocation }: { setLocation: (address: string, lat: number, lng: number) => void }) => {
//   const map = useMapEvents({});

//   useEffect(() => {
//     const searchControl = new GeoSearchControl({
//       provider,
//       style: "bar",
//       showMarker: true,
//       autoClose: true,
//       retainZoomLevel: false,
//     });

//     map.addControl(searchControl);

//     map.on("geosearch/showlocation", (result: any) => {
//       const { label, x, y } = result.location;
//       setLocation(label, y, x);
//     });

//     return () => map.removeControl(searchControl);
//   }, [map]);

//   return null;
// };

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     lat: 0,
//     lng: 0,
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       if (images.length + newFiles.length > 5) {
//         alert("You can upload up to 5 images.");
//         return;
//       }
//       setImages((prevImages) => [...prevImages, ...newFiles]);
//       setPreviewImages((prevPreviews) => [
//         ...prevPreviews,
//         ...newFiles.map((file) => URL.createObjectURL(file)),
//       ]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     data.append("lat", String(formData.lat));
//     data.append("lng", String(formData.lng));
//     images.forEach((image) => data.append("images", image));

//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const handleGeoSearch = (address: string, lat: number, lng: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       location: address,
//       lat,
//       lng,
//     }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded text-black" />
//           </div>

//           <div>
//             <label htmlFor="location" className="block text-sm font-medium">Search Location</label>
//             <div className="h-64 rounded overflow-hidden z-0">
//               <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <SearchControl setLocation={handleGeoSearch} />
//                 {formData.lat !== 0 && formData.lng !== 0 && (
//                   <Marker position={[formData.lat, formData.lng]} />
//                 )}
//               </MapContainer>
//             </div>
//             {formData.location && (
//               <p className="text-sm mt-1">📍 {formData.location}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//             <select id="type" name="type" value={formData.type} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//             <select id="severity" name="severity" value={formData.severity} onChange={handleInputChange} required className="w-full p-2 border rounded text-black">
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Upload Images</label>
//             <input type="file" accept="image/*" multiple onChange={handleFileChange} className="w-full p-2 border rounded text-black" />
//             <p className="text-sm text-white mt-1">You can upload up to 5 images.</p>
//             {previewImages.length > 0 && (
//               <div className="mt-2 flex space-x-2">
//                 {previewImages.map((src, index) => (
//                   <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded border-2 border-white" />
//                 ))}
//               </div>
//             )}
//           </div>

//           <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//             🚨 Report Disaster
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportDisaster;



















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import {
//   GeoSearchControl,
//   OpenStreetMapProvider,
// } from "leaflet-geosearch";
// import "leaflet-geosearch/dist/geosearch.css";
// import L from "leaflet";
// import "../utils/fixLeaflet";

// const provider = new OpenStreetMapProvider();

// // ✅ FIXED SearchControl Component
// const SearchControl = ({
//   setLocation,
// }: {
//   setLocation: (address: string, lat: number, lng: number) => void;
// }) => {
//   const map = useMapEvents({});

//   useEffect(() => {
//     const searchControl = new GeoSearchControl({
//       provider,
//       style: "bar",
//       showMarker: true,
//       autoClose: true,
//       retainZoomLevel: false,
//     });

//     map.addControl(searchControl);

//     const handleResult = (result: any) => {
//       const { label, x, y } = result.location;
//       setLocation(label, y, x);
//     };

//     map.on("geosearch/showlocation", handleResult);

//     // ✅ Proper cleanup without returning the map object
//     return () => {
//       map.off("geosearch/showlocation", handleResult);
//       map.removeControl(searchControl);
//     };
//   }, [map, setLocation]);

//   return null;
// };

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     lat: 0,
//     lng: 0,
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       if (images.length + newFiles.length > 5) {
//         alert("You can upload up to 5 images.");
//         return;
//       }
//       setImages((prev) => [...prev, ...newFiles]);
//       setPreviewImages((prev) => [
//         ...prev,
//         ...newFiles.map((file) => URL.createObjectURL(file)),
//       ]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     data.append("lat", String(formData.lat));
//     data.append("lng", String(formData.lng));
//     images.forEach((image) => data.append("images", image));

//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const handleGeoSearch = (address: string, lat: number, lng: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       location: address,
//       lat,
//       lng,
//     }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">
//           🌍 Report a Disaster
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium">
//               Disaster Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             />
//           </div>

//           <div>
//             <label htmlFor="location" className="block text-sm font-medium">
//               Search Location
//             </label>
//             <div className="h-64 rounded overflow-hidden z-0">
//               <MapContainer
//                 center={[20.5937, 78.9629]}
//                 zoom={5}
//                 style={{ height: "100%", width: "100%" }}
//               >
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <SearchControl setLocation={handleGeoSearch} />
//                 {formData.lat !== 0 && formData.lng !== 0 && (
//                   <Marker position={[formData.lat, formData.lng]} />
//                 )}
//               </MapContainer>
//             </div>
//             {formData.location && (
//               <p className="text-sm mt-1">📍 {formData.location}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="type" className="block text-sm font-medium">
//               Type of Disaster
//             </label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium">
//               Severity
//             </label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Upload Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="w-full p-2 border rounded text-black"
//             />
//             <p className="text-sm text-white mt-1">
//               You can upload up to 5 images.
//             </p>
//             {previewImages.length > 0 && (
//               <div className="mt-2 flex space-x-2">
//                 {previewImages.map((src, index) => (
//                   <img
//                     key={index}
//                     src={src}
//                     alt="Selected"
//                     className="w-16 h-16 object-cover rounded border-2 border-white"
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200"
//           >
//             🚨 Report Disaster
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportDisaster;






































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// import "leaflet-geosearch/dist/geosearch.css";
// import L from "leaflet";
// import "../utils/fixLeaflet";

// const provider = new OpenStreetMapProvider();

// const SearchControl = ({ setLocation }: { setLocation: (address: string, lat: number, lng: number) => void }) => {
//   const map = useMapEvents({});

//   useEffect(() => {
//     const searchControl = GeoSearchControl({
//       provider,
//       style: "bar",
//       showMarker: true,
//       autoClose: true,
//       retainZoomLevel: false,
//     }) as L.Control; // cast to L.Control to satisfy TypeScript

//     map.addControl(searchControl);

//     map.on("geosearch/showlocation", (result: any) => {
//       const { label, x, y } = result.location;
//       setLocation(label, y, x);
//     });

//     return () => {
//       map.removeControl(searchControl);
//     };
//   }, [map]);

//   return null;
// };

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     lat: 0,
//     lng: 0,
//   });

//   const [images, setImages] = useState<File[]>([]);
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const navigate = useNavigate();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       if (images.length + newFiles.length > 5) {
//         alert("You can upload up to 5 images.");
//         return;
//       }
//       setImages((prevImages) => [...prevImages, ...newFiles]);
//       setPreviewImages((prevPreviews) => [
//         ...prevPreviews,
//         ...newFiles.map((file) => URL.createObjectURL(file)),
//       ]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (images.length < 1 || images.length > 5) {
//       alert("Please upload between 1 and 5 images.");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("location", formData.location);
//     data.append("type", formData.type);
//     data.append("severity", formData.severity);
//     data.append("lat", String(formData.lat));
//     data.append("lng", String(formData.lng));
//     images.forEach((image) => data.append("images", image));

//     try {
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Disaster reported successfully!");
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   const handleGeoSearch = (address: string, lat: number, lng: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       location: address,
//       lat,
//       lng,
//     }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             />
//           </div>

//           <div>
//             <label htmlFor="location" className="block text-sm font-medium">Search Location</label>
//             <div className="h-64 rounded overflow-hidden z-0">
//               <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <SearchControl setLocation={handleGeoSearch} />
//                 {formData.lat !== 0 && formData.lng !== 0 && (
//                   <Marker position={[formData.lat, formData.lng]} />
//                 )}
//               </MapContainer>
//             </div>
//             {formData.location && (
//               <p className="text-sm mt-1">📍 {formData.location}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Upload Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="w-full p-2 border rounded text-black"
//             />
//             <p className="text-sm text-white mt-1">You can upload up to 5 images.</p>
//             {previewImages.length > 0 && (
//               <div className="mt-2 flex space-x-2">
//                 {previewImages.map((src, index) => (
//                   <img key={index} src={src} alt="Selected" className="w-16 h-16 object-cover rounded border-2 border-white" />
//                 ))}
//               </div>
//             )}
//           </div>

//           <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//             🚨 Report Disaster
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportDisaster;





































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "../utils/fixLeaflet";

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     lat: 0,
//     lng: 0,
//   });

//   const [showMap, setShowMap] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const navigate = useNavigate();

//   // Fetch location suggestions (Dummy API - Replace with real)
//   useEffect(() => {
//     if (searchQuery.length > 2) {
//       setSuggestions([
//         "Solapur, Maharashtra",
//         "Solomon Islands",
//         "Solden, Austria",
//         "Solingen, Germany",
//       ]);
//     } else {
//       setSuggestions([]);
//     }
//   }, [searchQuery]);

//   const handleLocationSelect = (address: string) => {
//     setFormData((prev) => ({ ...prev, location: address }));
//     setSearchQuery(address);
//     setShowMap(true); // Show the map after selecting
//     setSuggestions([]);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="max-w-lg p-6 bg-white shadow-xl rounded-lg text-black">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//         <form className="space-y-4">
//           {/* Disaster Name */}
//           <div>
//             <label className="block text-sm font-medium">Disaster Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           {/* Search Box for Location */}
//           <div className="relative">
//             <label className="block text-sm font-medium">Enter Address</label>
//             <input
//               type="text"
//               placeholder="Search for location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//             {/* Suggestions Dropdown */}
//             {suggestions.length > 0 && (
//               <ul className="absolute bg-white border w-full mt-1 shadow-lg rounded">
//                 {suggestions.map((suggestion, index) => (
//                   <li
//                     key={index}
//                     className="p-2 hover:bg-gray-200 cursor-pointer"
//                     onClick={() => handleLocationSelect(suggestion)}
//                   >
//                     📍 {suggestion}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Map (Hidden Initially) */}
//           {showMap && (
//             <div className="h-64 rounded overflow-hidden mt-4">
//               <MapContainer center={[20.5937, 78.9629]} zoom={5} className="h-full w-full">
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {formData.lat !== 0 && formData.lng !== 0 && (
//                   <Marker position={[formData.lat, formData.lng]} />
//                 )}
//               </MapContainer>
//             </div>
//           )}

//           {/* Submit Button */}
//           <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md">
//             🚨 Report Disaster
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReportDisaster;


























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// import "leaflet-geosearch/dist/geosearch.css";
// import L from "leaflet";
// import "../utils/fixLeaflet";

// const provider = new OpenStreetMapProvider();

// const SearchControl = ({ setLocation }: { setLocation: (address: string, lat: number, lng: number) => void }) => {
//   const map = useMapEvents({});

//   useEffect(() => {
//     const searchControl = GeoSearchControl({
//       provider,
//       style: "bar",
//       showMarker: true,
//       autoClose: true,
//       retainZoomLevel: false,
//     }) as L.Control;

//     map.addControl(searchControl);

//     map.on("geosearch/showlocation", (result: any) => {
//       const { label, x, y } = result.location;
//       setLocation(label, y, x);
//     });

//     return () => {
//       map.removeControl(searchControl);
//     };
//   }, [map]);

//   return null;
// };

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     lat: 0,
//     lng: 0,
//   });

//   const [searchResults, setSearchResults] = useState<string[]>([]);
//   const navigate = useNavigate();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleGeoSearch = (address: string, lat: number, lng: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       location: address,
//       lat,
//       lng,
//     }));
//   };

//   // Simulate address search suggestions (can be replaced with API)
//   useEffect(() => {
//     if (formData.location.length > 2) {
//       setSearchResults([
//         "Solapur, Maharashtra",
//         "Solomon Islands",
//         "Solden, Austria",
//         "Solingen, Germany",
//       ].filter((place) => place.toLowerCase().includes(formData.location.toLowerCase())));
//     } else {
//       setSearchResults([]);
//     }
//   }, [formData.location]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//         <form className="space-y-4">
//           {/* Disaster Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             />
//           </div>

//           {/* Address Input with Dropdown Suggestions */}
//           <div className="relative">
//             <label htmlFor="location" className="block text-sm font-medium">Enter Address</label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               placeholder="Search for a location..."
//               value={formData.location}
//               onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//               className="w-full p-2 border rounded text-black"
//             />
//             {searchResults.length > 0 && (
//               <ul className="absolute bg-white border w-full mt-1 shadow-lg rounded z-10 text-black">
//                 {searchResults.map((suggestion, index) => (
//                   <li
//                     key={index}
//                     className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
//                     onClick={() => setFormData({ ...formData, location: suggestion })}
//                   >
//                     📍 {suggestion}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Map Search */}
//           <div className="h-64 rounded overflow-hidden z-0">
//             <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
//               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//               <SearchControl setLocation={handleGeoSearch} />
//               {formData.lat !== 0 && formData.lng !== 0 && (
//                 <Marker position={[formData.lat, formData.lng]} />
//               )}
//             </MapContainer>
//           </div>
//           {formData.location && <p className="text-sm mt-1">📍 {formData.location}</p>}

//           {/* Disaster Type */}
//           <div>
//             <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           {/* Severity */}
//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//             🚨 Report Disaster
//           </button>
//         </form>

//         {/* Back to Dashboard */}
//         <div className="text-center mt-6">
//           <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportDisaster;




























// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     lat: 0,
//     lng: 0,
//   });

//   const [searchResults, setSearchResults] = useState<string[]>([]);
//   const [showMap, setShowMap] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Show dropdown results on typing
//   useEffect(() => {
//     if (formData.location.length > 2) {
//       setSearchResults([
//         "Solapur, Maharashtra",
//         "Solomon Islands",
//         "Solden, Austria",
//         "Solingen, Germany",
//       ].filter((place) => place.toLowerCase().includes(formData.location.toLowerCase())));
//     } else {
//       setSearchResults([]);
//     }
//   }, [formData.location]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//         <form className="space-y-4">
//           {/* Disaster Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             />
//           </div>

//           {/* Address Input */}
//           <div className="relative">
//             <label htmlFor="location" className="block text-sm font-medium">Enter Address</label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               placeholder="Search for a location..."
//               value={formData.location}
//               onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//               onFocus={() => setShowMap(false)} // Hide map when clicking input
//               className="w-full p-2 border rounded text-black"
//             />
//             {searchResults.length > 0 && (
//               <ul className="absolute bg-white border w-full mt-1 shadow-lg rounded z-10 text-black">
//                 {searchResults.map((suggestion, index) => (
//                   <li
//                     key={index}
//                     className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
//                     onClick={() => {
//                       setFormData({ ...formData, location: suggestion });
//                       setSearchResults([]);
//                       setShowMap(true); // Show map only after selecting an address
//                     }}
//                   >
//                     📍 {suggestion}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Map - Only Shown After Selecting an Address */}
//           {showMap && formData.location && (
//             <div className="h-64 rounded overflow-hidden mt-4 transition-opacity duration-300 ease-in-out">
//               <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {formData.lat !== 0 && formData.lng !== 0 && (
//                   <Marker position={[formData.lat, formData.lng]} />
//                 )}
//               </MapContainer>
//             </div>
//           )}

//           {/* Disaster Type */}
//           <div>
//             <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           {/* Severity */}
//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//             🚨 Report Disaster
//           </button>
//         </form>

//         {/* Back to Dashboard */}
//         <div className="text-center mt-6">
//           <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportDisaster;






















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import AddressInput from "./AddressInput";
//  // Import AddressInput
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "../utils/fixLeaflet";

// const ReportDisaster: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Flood",
//     severity: "Low",
//     lat: 0,
//     lng: 0,
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const data = {
//         ...formData,
//         lat: formData.lat,
//         lng: formData.lng,
//       };
//       await axios.post("http://localhost:1217/api/v1/disasters/report", data);
//       alert("Disaster reported successfully!");
//       navigate("/reported-disasters");
//     } catch (error) {
//       console.error("Error reporting disaster:", error);
//       alert("Failed to report disaster.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="max-w-lg p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg text-white">
//         <h2 className="text-2xl font-extrabold mb-4 text-center">🌍 Report a Disaster</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           {/* Disaster Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium">Disaster Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//               className="w-full p-2 border rounded text-black"
//             />
//           </div>

//           {/* Address Input */}
//           <AddressInput formData={formData} setFormData={setFormData} />

//           {/* Map (only show if a location is selected) */}
//           {formData.lat !== 0 && formData.lng !== 0 && (
//             <div className="h-64 rounded overflow-hidden z-0">
//               <MapContainer center={[formData.lat, formData.lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <Marker position={[formData.lat, formData.lng]} />
//               </MapContainer>
//             </div>
//           )}

//           {/* Type of Disaster */}
//           <div>
//             <label htmlFor="type" className="block text-sm font-medium">Type of Disaster</label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Flood">Flood</option>
//               <option value="Earthquake">Earthquake</option>
//               <option value="Wildfire">Wildfire</option>
//               <option value="Hurricane">Hurricane</option>
//             </select>
//           </div>

//           {/* Severity */}
//           <div>
//             <label htmlFor="severity" className="block text-sm font-medium">Severity</label>
//             <select
//               id="severity"
//               name="severity"
//               value={formData.severity}
//               onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
//               required
//               className="w-full p-2 border rounded text-black"
//             >
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition duration-200">
//             🚨 Report Disaster
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <button onClick={() => navigate("/dashboard")} className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportDisaster;




















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
