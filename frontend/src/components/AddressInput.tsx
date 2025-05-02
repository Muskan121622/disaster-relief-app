
import React, { useState, useEffect } from "react";
import axios from "axios";

type Suggestion = {
  display_name: string;
  lat: string;
  lon: string;
};

const AddressInput = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [inputValue, setInputValue] = useState(formData.location || "");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await axios.get("https://nominatim.openstreetmap.org/search", {
          params: {
            q: inputValue,
            format: "json",
            addressdetails: 1,
            limit: 5,
          },
        });
        setSuggestions(res.data);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(debounce);
  }, [inputValue]);

  const handleSelect = (suggestion: Suggestion) => {
    setInputValue(suggestion.display_name); // ✅ Replace input text with suggestion
    setFormData({
      ...formData,
      location: suggestion.display_name,
      lat: parseFloat(suggestion.lat),
      lng: parseFloat(suggestion.lon),
    });
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <label htmlFor="location" className="block text-sm font-medium">
        Location
      </label>
      <input
        type="text"
        id="location"
        name="location"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        required
        className="w-full p-2 border rounded text-black"
        autoComplete="off"
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white text-black border rounded mt-1 max-h-35 overflow-auto shadow-lg text-sm">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onMouseDown={() => handleSelect(suggestion)} // prevents blur before click
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressInput;
