// import React, { useState } from "react";
// import axios from "axios";

// const AddressInput = ({ formData, setFormData }: any) => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   // Fetch location suggestions from Nominatim API
//   const fetchLocationSuggestions = async (query: string) => {
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
//       );

//       setSuggestions(response.data);
//       setShowDropdown(true);
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//     }
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="location" className="block text-sm font-medium">
//         Enter Address
//       </label>
//       <input
//         type="text"
//         id="location"
//         name="location"
//         placeholder="Search for a location..."
//         value={formData.location}
//         onChange={(e) => {
//           setFormData({ ...formData, location: e.target.value });
//           fetchLocationSuggestions(e.target.value);
//         }}
//         onFocus={() => setShowDropdown(true)}
//         onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
//         className="w-full p-2 border rounded"
//       />

//       {/* Dropdown for Suggestions */}
//       {showDropdown && suggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full mt-1 shadow-lg rounded z-10">
//           {suggestions.map((place: any, index) => (
//             <li
//               key={index}
//               className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
//               onClick={() => {
//                 setFormData({ ...formData, location: place.display_name });
//                 setShowDropdown(false);
//               }}
//             >
//               📍 {place.display_name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AddressInput;



// import React, { useState } from "react";
// import axios from "axios";

// const AddressInput = ({ formData, setFormData }: any) => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const fetchLocationSuggestions = async (query: string) => {
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
//       );
//       setSuggestions(response.data);
//       setShowDropdown(true);
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//     }
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="location" className="block text-sm font-medium">
//         Enter Address
//       </label>
//       <input
//         type="text"
//         id="location"
//         name="location"
//         placeholder="Search for a location..."
//         value={formData.location}
//         onChange={(e) => {
//           setFormData({ ...formData, location: e.target.value });
//           fetchLocationSuggestions(e.target.value);
//         }}
//         onFocus={() => setShowDropdown(true)}
//         onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
//         className="w-full p-2 border rounded text-black"
//       />

//       {/* Dropdown for Suggestions */}
//       {showDropdown && suggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full mt-1 shadow-lg rounded z-10 max-h-60 overflow-y-auto">
//           {suggestions.map((place: any, index) => (
//             <li
//               key={index}
//               className="p-2 hover:bg-gray-200 cursor-pointer text-black text-sm truncate"
//               onClick={() => {
//                 setFormData({
//                   ...formData,
//                   location: place.display_name,
//                   lat: parseFloat(place.lat),
//                   lng: parseFloat(place.lon),
//                 });
//                 setShowDropdown(false);
//               }}
//               title={place.display_name}
//             >
//               📍 {place.display_name.split(",").slice(0, 3).join(",")}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AddressInput;





// import React, { useState } from "react";
// import axios from "axios";

// const AddressInput = ({ formData, setFormData }: any) => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [highlightedIndex, setHighlightedIndex] = useState(-1);

//   const fetchLocationSuggestions = async (query: string) => {
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
//       );
//       setSuggestions(response.data);
//       setShowDropdown(true);
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (!showDropdown || suggestions.length === 0) return;

//     if (e.key === "ArrowDown") {
//       setHighlightedIndex((prev) =>
//         prev < suggestions.length - 1 ? prev + 1 : prev
//       );
//     } else if (e.key === "ArrowUp") {
//       setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
//     } else if (e.key === "Enter" && highlightedIndex >= 0) {
//       const place = suggestions[highlightedIndex];
//       setFormData({
//         ...formData,
//         location: place.display_name,
//         lat: parseFloat(place.lat),
//         lng: parseFloat(place.lon),
//       });
//       setShowDropdown(false);
//       e.preventDefault();
//     }
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="location" className="block text-sm font-medium">
//         Enter Address
//       </label>
//       <input
//         type="text"
//         id="location"
//         name="location"
//         placeholder="Search for a location..."
//         value={
//           highlightedIndex >= 0
//             ? suggestions[highlightedIndex]?.display_name
//             : formData.location
//         }
//         onChange={(e) => {
//           setFormData({ ...formData, location: e.target.value });
//           fetchLocationSuggestions(e.target.value);
//           setHighlightedIndex(-1);
//         }}
//         onFocus={() => setShowDropdown(true)}
//         onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
//         onKeyDown={handleKeyDown}
//         className="w-full p-2 border rounded text-black"
//       />

//       {showDropdown && suggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full mt-1 shadow-lg rounded z-10 max-h-60 overflow-y-auto">
//           {suggestions.map((place: any, index) => (
//             <li
//               key={index}
//               className={`p-2 text-sm truncate cursor-pointer text-black ${
//                 index === highlightedIndex ? "bg-gray-300" : "hover:bg-gray-200"
//               }`}
//               onMouseEnter={() => setHighlightedIndex(index)}
//               onClick={() => {
//                 setFormData({
//                   ...formData,
//                   location: place.display_name,
//                   lat: parseFloat(place.lat),
//                   lng: parseFloat(place.lon),
//                 });
//                 setShowDropdown(false);
//               }}
//               title={place.display_name}
//             >
//               📍 {place.display_name.split(",").slice(0, 3).join(",")}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // export default AddressInput;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// type Suggestion = {
//   display_name: string;
//   lat: string;
//   lon: string;
// };

// const AddressInput = ({
//   formData,
//   setFormData,
// }: {
//   formData: any;
//   setFormData: React.Dispatch<React.SetStateAction<any>>;
// }) => {
//   const [inputValue, setInputValue] = useState(formData.location || "");
//   const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (inputValue.length < 3) {
//         setSuggestions([]);
//         return;
//       }

//       try {
//         const res = await axios.get("https://nominatim.openstreetmap.org/search", {
//           params: {
//             q: inputValue,
//             format: "json",
//             addressdetails: 1,
//             limit: 5,
//           },
//         });
//         setSuggestions(res.data);
//         setShowSuggestions(true);
//       } catch (error) {
//         console.error("Error fetching suggestions:", error);
//         setSuggestions([]);
//       }
//     };

//     const debounce = setTimeout(fetchSuggestions, 500);
//     return () => clearTimeout(debounce);
//   }, [inputValue]);

//   const handleSelect = (suggestion: Suggestion) => {
//     setFormData({
//       ...formData,
//       location: suggestion.display_name,
//       lat: parseFloat(suggestion.lat),
//       lng: parseFloat(suggestion.lon),
//     });
//     setInputValue(suggestion.display_name);
//     setSuggestions([]);
//     setShowSuggestions(false);
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="location" className="block text-sm font-medium">
//         Location
//       </label>
//       <input
//         type="text"
//         id="location"
//         name="location"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         required
//         className="w-full p-2 border rounded text-black"
//         autoComplete="off"
//         onFocus={() => setShowSuggestions(true)}
//         onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // delay to allow click
//       />
//       {showSuggestions && suggestions.length > 0 && (
//         <ul className="absolute z-10 w-full bg-white text-black border rounded mt-1 max-h-40 overflow-auto shadow-lg">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
//               onClick={() => handleSelect(suggestion)}
//             >
//               {suggestion.display_name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AddressInput;















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// type Suggestion = {
//   display_name: string;
//   lat: string;
//   lon: string;
// };

// const AddressInput = ({
//   formData,
//   setFormData,
// }: {
//   formData: any;
//   setFormData: React.Dispatch<React.SetStateAction<any>>;
// }) => {
//   const [inputValue, setInputValue] = useState(formData.location || "");
//   const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (inputValue.length < 3) {
//         setSuggestions([]);
//         return;
//       }

//       try {
//         const res = await axios.get("https://nominatim.openstreetmap.org/search", {
//           params: {
//             q: inputValue,
//             format: "json",
//             addressdetails: 1,
//             limit: 5,
//           },
//         });
//         setSuggestions(res.data);
//         setShowSuggestions(true);
//       } catch (error) {
//         console.error("Error fetching suggestions:", error);
//         setSuggestions([]);
//       }
//     };

//     const debounce = setTimeout(fetchSuggestions, 500);
//     return () => clearTimeout(debounce);
//   }, [inputValue]);

//   const handleSelect = (suggestion: Suggestion) => {
//     setInputValue(suggestion.display_name); // ✅ This updates the input text
//     setFormData({
//       ...formData,
//       location: suggestion.display_name,
//       lat: parseFloat(suggestion.lat),
//       lng: parseFloat(suggestion.lon),
//     });
//     setSuggestions([]);
//     setShowSuggestions(false);
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="location" className="block text-sm font-medium">
//         Location
//       </label>
//       <input
//         type="text"
//         id="location"
//         name="location"
//         value={inputValue} // ✅ Controlled by inputValue
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//         required
//         className="w-full p-2 border rounded text-black"
//         autoComplete="off"
//         onFocus={() => setShowSuggestions(true)}
//         onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // give time for click
//       />
//       {showSuggestions && suggestions.length > 0 && (
//         <ul className="absolute z-10 w-full bg-white text-black border rounded mt-1 max-h-40 overflow-auto shadow-lg">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
//               onClick={() => handleSelect(suggestion)}
//             >
//               {suggestion.display_name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AddressInput;


















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
