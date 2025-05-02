
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { FaUser, FaPhone, FaMapMarkerAlt, FaHome } from "react-icons/fa";


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
    alert("Submitted successfully!");
   
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
      
    </div>
  );
};

export default VolunteerRegistration;
