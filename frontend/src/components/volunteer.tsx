import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { FaUser, FaPhone, FaMapMarkerAlt, FaHome, FaCog, FaClock } from "react-icons/fa";

const skillOptions = [
  { value: "first aid", label: "🩹 First Aid" },
  { value: "logistics", label: "📦 Logistics" },
  { value: "communication", label: "📞 Communication" },
  { value: "medical aid", label: "🏥 Medical Aid" },
  { value: "food distribution", label: "🍽️ Food Distribution" },
  { value: "rescue operations", label: "🚁 Rescue Operations" },
  { value: "community support", label: "🤝 Community Support" },
];

const availabilityOptions = [
  { value: "morning", label: "🌅 Morning" },
  { value: "afternoon", label: "☀️ Afternoon" },
  { value: "evening", label: "🌆 Evening" },
  { value: "weekends", label: "📅 Weekends" },
  { value: "anytime", label: "⏰ Anytime" },
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
    alert("Volunteer registration submitted successfully!");
  };

  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      color: 'white',
      minHeight: '48px',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#1f2937',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#059669' : state.isFocused ? '#374151' : 'transparent',
      color: 'white',
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#059669',
      borderRadius: '8px',
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
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
            <h1 className="text-xl font-bold text-white">🤝 Volunteer Registration</h1>
            <div></div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">🤝 Join Our Volunteer Team</h2>
            <p className="text-white/80 text-lg">Help make a difference in disaster relief efforts</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Contact Number</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">State</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter your state"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">District</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Enter your district"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-white font-medium mb-2">Complete Address</label>
              <div className="relative">
                <FaHome className="absolute left-3 top-3 text-white/60" />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter your complete address"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 h-24 resize-none"
                  required
                />
              </div>
            </div>

            {/* Skills and Availability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  <FaCog className="inline mr-2" />
                  Your Skills
                </label>
                <Select
                  options={skillOptions}
                  isMulti
                  onChange={handleSkillChange}
                  placeholder="Select your skills..."
                  styles={customSelectStyles}
                  className="text-sm"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  <FaClock className="inline mr-2" />
                  Availability
                </label>
                <Select
                  options={availabilityOptions}
                  isMulti
                  onChange={handleAvailabilityChange}
                  placeholder="Select your availability..."
                  styles={customSelectStyles}
                  className="text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                🤝 Register as Volunteer
              </button>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-white font-semibold">Quick Response</h3>
              <p className="text-white/70 text-sm">Get notified instantly when help is needed</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="text-white font-semibold">Skill Matching</h3>
              <p className="text-white/70 text-sm">Matched with tasks that fit your expertise</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="text-white font-semibold">Make Impact</h3>
              <p className="text-white/70 text-sm">Help save lives and rebuild communities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegistration;