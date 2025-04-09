// import { useState } from "react";
// import axios from "axios";

// const Volunteer = () => {
//   const [formData, setFormData] = useState({
//     skills: "",
//     availability: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:1217/api/v1/user/volunteers", formData, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       alert("Registered as a volunteer!");
//     } catch (error) {
//       console.error("Error registering volunteer:", error);
//       alert("Failed to register.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Register as a Volunteer</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="skills"
//           placeholder="Your Skills"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="availability"
//           placeholder="Availability (e.g., Weekends)"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Volunteer;










// import React, { useState } from "react";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks } from "react-icons/fa";

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     interests: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
//         {/* Header */}
//         <div className="bg-green-500 text-white text-center py-3 rounded-t-xl">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-4">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none"
//               required
//             />
//           </div>

//           {/* Interests */}
//           <div className="flex items-center border p-2 rounded-lg mb-3">
//             <FaTasks className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="interests"
//               placeholder="Your interests to work in"
//               value={formData.interests}
//               onChange={handleChange}
//               className="w-full outline-none"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;




































// import React, { useState } from "react";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks } from "react-icons/fa";

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     interests: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
//         {/* Header */}
//         <div className="bg-green-500 text-white text-center py-3 rounded-t-xl">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-4">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Interests */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaTasks className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="interests"
//               placeholder="Your interests to work in"
//               value={formData.interests}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;



































// import React, { useState } from "react";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks } from "react-icons/fa";

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     interests: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
        
//         {/* Sticky Header */}
//         <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-14"> {/* Adjust margin for sticky header */}
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Interests */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaTasks className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="interests"
//               placeholder="Your interests to work in"
//               value={formData.interests}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;















// import React, { useState } from "react";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks } from "react-icons/fa";

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     state: "",
//     district: "",
//     address: "",
//     skills: "",
//     availability: "",
//   });

//   const [message, setMessage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token"); // Get token from local storage

//       if (!token) {
//         setError("Unauthorized: Please log in first.");
//         setLoading(false);
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/volunteers/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Attach Bearer Token
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Volunteer registered successfully!");
//         setFormData({
//           name: "",
//           phone: "",
//           state: "",
//           district: "",
//           address: "",
//           skills: "",
//           availability: "",
//         });
//       } else {
//         setError(data.error || "Failed to register.");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
        
//         {/* Sticky Header */}
//         <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
//           <h2 className="text-lg font-semibold">Volunteer Registration</h2>
//         </div>

//         {/* Success/Error Message */}
//         {message && <p className="text-green-600 text-center mb-2">{message}</p>}
//         {error && <p className="text-red-600 text-center mb-2">{error}</p>}

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-14">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter Your Phone No"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Skills */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaTasks className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="skills"
//               placeholder="Enter Your Skills"
//               value={formData.skills}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Availability */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaTasks className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="availability"
//               placeholder="Enter Availability (Weekends, Weekdays, etc.)"
//               value={formData.availability}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;



























































// import React, { useState } from "react";
// import Select from "react-select";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks } from "react-icons/fa";

// const skillOptions = [
//   { value: "First Aid", label: "First Aid" },
//   { value: "Search & Rescue", label: "Search & Rescue" },
//   { value: "Medical Assistance", label: "Medical Assistance" },
//   { value: "Food Distribution", label: "Food Distribution" },
//   { value: "Shelter Management", label: "Shelter Management" },
//   { value: "Logistics", label: "Logistics" },
//   { value: "Counseling", label: "Counseling" },
// ];

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     skills: [] as { value: string; label: string }[], // Multiple skills selection
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSkillChange = (selectedOptions: any) => {
//     setFormData({ ...formData, skills: selectedOptions });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
        
//         {/* Sticky Header */}
//         <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-14">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Skills (Multi-select dropdown) */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <div className="flex items-center mb-1">
//               <FaTasks className="text-gray-500 mr-2" />
//               <label className="text-gray-600">Select Your Skills</label>
//             </div>
//             <Select
//               isMulti
//               options={skillOptions}
//               value={formData.skills}
//               onChange={handleSkillChange}
//               className="w-full"
//               placeholder="Select skills..."
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;






























// import React, { useState } from "react";
// import Select from "react-select";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks } from "react-icons/fa";

// const skillOptions = [
//   { value: "first aid", label: "First Aid" },
//   { value: "logistics", label: "Logistics" },
//   { value: "communication", label: "Communication" },
//   { value: "medical aid", label: "Medical Aid" },
//   { value: "food distribution", label: "Food Distribution" },
//   { value: "rescue operations", label: "Rescue Operations" },
//   { value: "community support", label: "Community Support" },
// ];

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     skills: [],
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSkillChange = (selectedOptions: any) => {
//     setFormData({ ...formData, skills: selectedOptions.map((option: any) => option.value) });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
//         {/* Sticky Header */}
//         <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-14">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Skills Multi-Select */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <label className="text-gray-500 font-semibold">Enter Your Skills (e.g., "First Aid", "Logistics", "Communication")</label>
//             <Select
//               options={skillOptions}
//               isMulti
//               className="mt-1"
//               onChange={handleSkillChange}
//               placeholder="Select or type skills..."
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;




















// import React, { useState } from "react";
// import Select from "react-select";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks, FaClock } from "react-icons/fa";

// const skillOptions = [
//   { value: "first aid", label: "First Aid" },
//   { value: "logistics", label: "Logistics" },
//   { value: "communication", label: "Communication" },
//   { value: "medical aid", label: "Medical Aid" },
//   { value: "food distribution", label: "Food Distribution" },
//   { value: "rescue operations", label: "Rescue Operations" },
//   { value: "community support", label: "Community Support" },
// ];

// const availabilityOptions = [
//   { value: "morning", label: "Morning" },
//   { value: "afternoon", label: "Afternoon" },
//   { value: "evening", label: "Evening" },
//   { value: "weekends", label: "Weekends" },
//   { value: "anytime", label: "Anytime" },
// ];

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     skills: [],
//     availability: [],
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSkillChange = (selectedOptions: any) => {
//     setFormData({ ...formData, skills: selectedOptions.map((option: any) => option.value) });
//   };

//   const handleAvailabilityChange = (selectedOptions: any) => {
//     setFormData({ ...formData, availability: selectedOptions.map((option: any) => option.value) });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
//         {/* Sticky Header */}
//         <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-14">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Skills Multi-Select */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <label className="text-gray-500 font-semibold">Enter Your Skills (e.g., "First Aid", "Logistics", "Communication")</label>
//             <Select
//               options={skillOptions}
//               isMulti
//               className="mt-1"
//               onChange={handleSkillChange}
//               placeholder="Select or type skills..."
//             />
//           </div>

//           {/* Availability Multi-Select */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <label className="text-gray-500 font-semibold">Select Your Availability</label>
//             <Select
//               options={availabilityOptions}
//               isMulti
//               className="mt-1"
//               onChange={handleAvailabilityChange}
//               placeholder="Select your availability..."
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;


















// import React, { useState } from "react";
// import Select from "react-select";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks, FaClock } from "react-icons/fa";

// const skillOptions = [
//   { value: "first aid", label: "First Aid" },
//   { value: "logistics", label: "Logistics" },
//   { value: "communication", label: "Communication" },
//   { value: "medical aid", label: "Medical Aid" },
//   { value: "food distribution", label: "Food Distribution" },
//   { value: "rescue operations", label: "Rescue Operations" },
//   { value: "community support", label: "Community Support" },
// ];

// const availabilityOptions = [
//   { value: "morning", label: "Morning" },
//   { value: "afternoon", label: "Afternoon" },
//   { value: "evening", label: "Evening" },
//   { value: "weekends", label: "Weekends" },
//   { value: "anytime", label: "Anytime" },
// ];

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     skills: [],
//     availability: [],
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSkillChange = (selectedOptions: any) => {
//     setFormData({ ...formData, skills: selectedOptions.map((option: any) => option.value) });
//   };

//   const handleAvailabilityChange = (selectedOptions: any) => {
//     setFormData({ ...formData, availability: selectedOptions.map((option: any) => option.value) });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
//         {/* Sticky Header */}
//         <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-14">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Skills Multi-Select (Scrollable) */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <label className="text-gray-500 font-semibold">Enter Your Skills (e.g., "First Aid", "Logistics", "Communication")</label>
//             <Select
//               options={skillOptions}
//               isMulti
//               className="mt-1"
//               onChange={handleSkillChange}
//               placeholder="Select or type skills..."
//               menuPortalTarget={document.body} // Allows dropdown to escape container
//               menuShouldScrollIntoView={false} // Prevents glitching
//               styles={{
//                 menu: (provided) => ({ ...provided, maxHeight: "150px", overflowY: "auto" }), // Scroll effect
//               }}
//             />
//           </div>

//           {/* Availability Multi-Select (Scrollable) */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <label className="text-gray-500 font-semibold">Select Your Availability</label>
//             <Select
//               options={availabilityOptions}
//               isMulti
//               className="mt-1"
//               onChange={handleAvailabilityChange}
//               placeholder="Select your availability..."
//               menuPortalTarget={document.body}
//               menuShouldScrollIntoView={false}
//               styles={{
//                 menu: (provided) => ({ ...provided, maxHeight: "150px", overflowY: "auto" }),
//               }}
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;




















// import React, { useState } from "react";
// import Select from "react-select";
// import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaTasks, FaClock } from "react-icons/fa";

// const skillOptions = [
//   { value: "first aid", label: "First Aid" },
//   { value: "logistics", label: "Logistics" },
//   { value: "communication", label: "Communication" },
//   { value: "medical aid", label: "Medical Aid" },
//   { value: "food distribution", label: "Food Distribution" },
//   { value: "rescue operations", label: "Rescue Operations" },
//   { value: "community support", label: "Community Support" },
// ];

// const availabilityOptions = [
//   { value: "morning", label: "Morning" },
//   { value: "afternoon", label: "Afternoon" },
//   { value: "evening", label: "Evening" },
//   { value: "weekends", label: "Weekends" },
//   { value: "anytime", label: "Anytime" },
// ];

// const VolunteerRegistration: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     state: "",
//     district: "",
//     address: "",
//     skills: [],
//     availability: [],
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSkillChange = (selectedOptions: any) => {
//     setFormData({ ...formData, skills: selectedOptions.map((option: any) => option.value) });
//   };

//   const handleAvailabilityChange = (selectedOptions: any) => {
//     setFormData({ ...formData, availability: selectedOptions.map((option: any) => option.value) });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
//         {/* Sticky Header */}
//         <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
//           <h2 className="text-lg font-semibold">Volunteers Registration</h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-14">
//           {/* Name */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="tel"
//               name="contact"
//               placeholder="Enter Your Contact No"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* State */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* District */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.district}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
//             <FaHome className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Your Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full outline-none bg-transparent"
//               required
//             />
//           </div>

//           {/* Skills Multi-Select (Scrollable) */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <label className="text-gray-500 font-semibold">Enter Your Skills (e.g., "First Aid", "Logistics", "Communication")</label>
//             <Select
//               options={skillOptions}
//               isMulti
//               className="mt-1"
//               onChange={handleSkillChange}
//               placeholder="Select or type skills..."
//               menuPortalTarget={document.body}
//               menuShouldScrollIntoView={false}
//               styles={{
//                 menu: (provided) => ({
//                   ...provided,
//                   maxHeight: "150px",
//                   overflowY: "auto",
//                   overflowX: "hidden",
//                   touchAction: "auto", // Allows touch scrolling
//                 }),
//                 menuList: (provided) => ({
//                   ...provided,
//                   maxHeight: "150px",
//                   overflowY: "auto",
//                   "-webkit-overflow-scrolling": "touch", // Smooth scrolling on mobile
//                 }),
//               }}
//             />
//           </div>

//           {/* Availability Multi-Select (Compact + Smooth Scroll) */}
//           <div className="border p-2 rounded-lg mb-3 bg-gray-50">
//             <label className="text-gray-500 font-semibold">Select Your Availability</label>
//             <Select
//               options={availabilityOptions}
//               isMulti
//               className="mt-1"
//               onChange={handleAvailabilityChange}
//               placeholder="Select your availability..."
//               menuPortalTarget={document.body}
//               menuShouldScrollIntoView={false}
//               styles={{
//                 menu: (provided) => ({
//                   ...provided,
//                   maxHeight: "120px", // Smaller dropdown
//                   overflowY: "auto",
//                   touchAction: "auto", // Enables touch/mouse scrolling
//                 }),
//                 menuList: (provided) => ({
//                   ...provided,
//                   maxHeight: "120px",
//                   overflowY: "auto",
//                   "-webkit-overflow-scrolling": "touch", // Smooth scrolling
//                 }),
//               }}
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;










import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { FaUser, FaPhone, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const skillOptions = [
  { value: "first aid", label: "First Aid" },
  { value: "logistics", label: "Logistics" },
  { value: "communication", label: "Communication" },
  { value: "medical aid", label: "Medical Aid" },
  { value: "food distribution", label: "Food Distribution" },
  { value: "rescue operations", label: "Rescue Operations" },
  { value: "community support", label: "Community Support" },
];

const availabilityOptions = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
  { value: "weekends", label: "Weekends" },
  { value: "anytime", label: "Anytime" },
];

const VolunteerRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    state: "",
    district: "",
    address: "",
    skills: [],
    availability: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (selectedOptions: any) => {
    setFormData({ ...formData, skills: selectedOptions.map((option: any) => option.value) });
  };

  const handleAvailabilityChange = (selectedOptions: any) => {
    setFormData({ ...formData, availability: selectedOptions.map((option: any) => option.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    toast.success("Submitted successfully!");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-200 bg-opacity-50 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 relative">
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 shadow-md z-50">
          <h2 className="text-lg font-semibold">Volunteers Registration</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-14">
          <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
            <FaUser className="text-gray-500 mr-2" />
            <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className="w-full outline-none bg-transparent" required />
          </div>

          <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
            <FaPhone className="text-gray-500 mr-2" />
            <input type="tel" name="contact" placeholder="Enter Your Contact No" value={formData.contact} onChange={handleChange} className="w-full outline-none bg-transparent" required />
          </div>

          <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input type="text" name="state" placeholder="Enter State" value={formData.state} onChange={handleChange} className="w-full outline-none bg-transparent" required />
          </div>

          <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input type="text" name="district" placeholder="Enter District" value={formData.district} onChange={handleChange} className="w-full outline-none bg-transparent" required />
          </div>

          <div className="flex items-center border p-2 rounded-lg mb-3 bg-gray-50">
            <FaHome className="text-gray-500 mr-2" />
            <input type="text" name="address" placeholder="Enter Your Address" value={formData.address} onChange={handleChange} className="w-full outline-none bg-transparent" required />
          </div>

          <div className="border p-2 rounded-lg mb-3 bg-gray-50">
            <label className="text-gray-500 font-semibold">Enter Your Skills</label>
            <Select options={skillOptions} isMulti className="mt-1" onChange={handleSkillChange} placeholder="Select or type skills..." />
          </div>

          <div className="border p-2 rounded-lg mb-3 bg-gray-50">
            <label className="text-gray-500 font-semibold">Select Your Availability</label>
            <Select options={availabilityOptions} isMulti className="mt-1" onChange={handleAvailabilityChange} placeholder="Select your availability..." />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg text-lg font-medium mt-2">Submit</button>
        </form>
      </div>

      <button onClick={() => navigate("/dashboard")} className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-medium">
        Back to Dashboard
      </button>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default VolunteerRegistration;
