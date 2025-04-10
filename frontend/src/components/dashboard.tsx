// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService } from "../services/api";
// import AuthContext from "../context/authcontext"; // Ensure correct import
// import DisasterMap from "../map/disastermap";
// import socket from "../services/socket";
// import Chat from "../components/chat";

// //import { getFirebaseToken } from "../firebase";
// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true); // ✅ Loading state
//   const authContext = useContext(AuthContext);

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//         ]);
//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//  // ✅ Listen for Realtime Updates via WebSocket
//   useEffect(() => {
//     const handleDonationUpdate = (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     };

//     const handleVolunteerUpdate = (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     };

//     socket.on("donationUpdate", handleDonationUpdate);
//     socket.on("volunteerUpdate", handleVolunteerUpdate);

//     return () => {
//       socket.off("donationUpdate", handleDonationUpdate);
//       socket.off("volunteerUpdate", handleVolunteerUpdate);
//     };
//   }, []);


  
//  // const [firebaseToken, setFirebaseToken] = useState<string | null>(null); // ✅ Define state

//   // ✅ Fetch Firebase Token
//  // ✅ Fetch Firebase Token
// //  useEffect(() => {
// //   getFirebaseToken()
// //     .then((token) => {
// //       if (token) {
// //         console.log("🔥 Firebase Token:", token);
// //         setFirebaseToken(token);
// //       } else {
// //         console.log("❌ No Firebase Token found");
// //       }
// //     })
// //     .catch((err) => console.error("❌ Error getting Firebase token:", err));
// // }, []);


//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center">
//         <h2 className="text-3xl font-bold text-white">Dashboard</h2>
//         <Chat />

//       </div>

//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           {user && (
//             <div className="mt-6 text-center">
//               <p className="text-white text-lg font-semibold">
//                 Welcome, <span className="text-green-300">{user.name}</span> ({user.email})
//               </p>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-8">
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donations</h3>
//               {donations.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No donations available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {donations.map((donation) => (
//                     <li key={donation._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Type:</strong> {donation.type}</p>
//                       <p><strong>Amount:</strong> {donation.amount}</p>
//                       <p><strong>Status:</strong> {donation.status}</p>
//                       <p><strong>Donor:</strong> {donation.donor?.name || "Anonymous"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteers</h3>
//               {volunteers.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No volunteers available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {volunteers.map((volunteer) => (
//                     <li key={volunteer._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Name:</strong> {volunteer.user?.name || "Unknown"}</p>
//                       <p><strong>Skills:</strong> {volunteer.skills?.join(", ") || "None listed"}</p>
//                       <p><strong>Availability:</strong> {volunteer.availability || "Not specified"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>

//           <div className="w-full flex justify-center mt-10">
//             <div className="max-w-3xl w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
//               <div className="h-full w-full">
//                 <DisasterMap />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService, disasterService } from "../services/api"; // Import disasterService
// import AuthContext from "../context/authcontext"; // Ensure correct import
// import DisasterMap from "../map/disastermap";
// import socket from "../services/socket";
// import Chat from "../components/chat";

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]); // ✅ Store disasters
//   const [loading, setLoading] = useState(true);
//   const authContext = useContext(AuthContext);

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(), // ✅ Fetch disasters
//         ]);
//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(disastersData || []); // ✅ Set disasters state
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // ✅ Listen for Realtime Updates via WebSocket
//   useEffect(() => {
//     const handleDonationUpdate = (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     };

//     const handleVolunteerUpdate = (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     };

//     const handleDisasterUpdate = (newDisaster: any) => {
//       setDisasters((prev) => [newDisaster, ...prev]);
//     };

//     socket.on("donationUpdate", handleDonationUpdate);
//     socket.on("volunteerUpdate", handleVolunteerUpdate);
//     socket.on("disasterUpdate", handleDisasterUpdate);

//     return () => {
//       socket.off("donationUpdate", handleDonationUpdate);
//       socket.off("volunteerUpdate", handleVolunteerUpdate);
//       socket.off("disasterUpdate", handleDisasterUpdate);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center">
//         <h2 className="text-3xl font-bold text-white">Dashboard</h2>
//         <Chat />
//       </div>

//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           {user && (
//             <div className="mt-6 text-center">
//               <p className="text-white text-lg font-semibold">
//                 Welcome, <span className="text-green-300">{user.name}</span> ({user.email})
//               </p>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-8">
//             {/* Donations */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donations</h3>
//               {donations.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No donations available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {donations.map((donation) => (
//                     <li key={donation._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Type:</strong> {donation.type}</p>
//                       <p><strong>Amount:</strong> {donation.amount}</p>
//                       <p><strong>Status:</strong> {donation.status}</p>
//                       <p><strong>Donor:</strong> {donation.donor?.name || "Anonymous"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Volunteers */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteers</h3>
//               {volunteers.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No volunteers available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {volunteers.map((volunteer) => (
//                     <li key={volunteer._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Name:</strong> {volunteer.user?.name || "Unknown"}</p>
//                       <p><strong>Skills:</strong> {volunteer.skills?.join(", ") || "None listed"}</p>
//                       <p><strong>Availability:</strong> {volunteer.availability || "Not specified"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Reported Disasters */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reported Disasters</h3>
//               {disasters.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No reported disasters.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {disasters.map((disaster) => (
//                     <li key={disaster._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Disaster:</strong> {disaster.name}</p>
//                       <p><strong>Location:</strong> {disaster.location}</p>
//                       <p><strong>Severity:</strong> <span className={`text-${disaster.severity === "High" ? "red" : disaster.severity === "Medium" ? "yellow" : "green"}-600 font-bold`}>{disaster.severity}</span></p>
//                       <p><strong>Description:</strong> {disaster.description}</p>
//                       <p><strong>Reported By:</strong> {disaster.reportedBy || "Unknown"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>

//           <div className="w-full flex justify-center mt-10">
//             <div className="max-w-3xl w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
//               <div className="h-full w-full">
//                 <DisasterMap />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService } from "../services/api";
// import { disasterService } from "../services/api"; // ✅ Import disaster service
// import AuthContext from "../context/authcontext";
// import DisasterMap from "../map/disastermap";
// import socket from "../services/socket";
// import Chat from "../components/chat";

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]); // ✅ Ensure disasters is an array
//   const [loading, setLoading] = useState(true);

//   const authContext = useContext(AuthContext);
//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(), // ✅ Fetch disasters
//         ]);

//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(Array.isArray(disastersData) ? disastersData : []); // ✅ Ensure disasters is an array

//         console.log("Fetched Disasters:", disastersData); // ✅ Debugging log
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const handleDonationUpdate = (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     };

//     const handleVolunteerUpdate = (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     };

//     const handleDisasterUpdate = (newDisaster: any) => {
//       setDisasters((prev) => [newDisaster, ...prev]);
//     };

//     socket.on("donationUpdate", handleDonationUpdate);
//     socket.on("volunteerUpdate", handleVolunteerUpdate);
//     socket.on("disasterUpdate", handleDisasterUpdate); // ✅ Listen for real-time disasters

//     return () => {
//       socket.off("donationUpdate", handleDonationUpdate);
//       socket.off("volunteerUpdate", handleVolunteerUpdate);
//       socket.off("disasterUpdate", handleDisasterUpdate);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center">
//         <h2 className="text-3xl font-bold text-white">Dashboard</h2>
//         <Chat />
//       </div>

//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           {user && (
//             <div className="mt-6 text-center">
//               <p className="text-white text-lg font-semibold">
//                 Welcome, <span className="text-green-300">{user.name}</span> ({user.email})
//               </p>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
//             {/* ✅ Donations Section */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donations</h3>
//               {donations.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No donations available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {donations.map((donation) => (
//                     <li key={donation._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Type:</strong> {donation.type}</p>
//                       <p><strong>Amount:</strong> {donation.amount}</p>
//                       <p><strong>Status:</strong> {donation.status}</p>
//                       <p><strong>Donor:</strong> {donation.donor?.name || "Anonymous"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* ✅ Volunteers Section */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteers</h3>
//               {volunteers.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No volunteers available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {volunteers.map((volunteer) => (
//                     <li key={volunteer._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Name:</strong> {volunteer.user?.name || "Unknown"}</p>
//                       <p><strong>Skills:</strong> {volunteer.skills?.join(", ") || "None listed"}</p>
//                       <p><strong>Availability:</strong> {volunteer.availability || "Not specified"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* ✅ Reported Disasters Section */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reported Disasters</h3>
//               {Array.isArray(disasters) && disasters.length > 0 ? (
//                 <ul className="space-y-3">
//                   {disasters.map((disaster) => (
//                     <li key={disaster._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Name:</strong> {disaster.name}</p>
//                       <p><strong>Location:</strong> {disaster.location}</p>
//                       <p><strong>Severity:</strong> {disaster.severity}</p>
//                       <p><strong>Date:</strong> {new Date(disaster.date).toLocaleString()}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600 text-lg italic">No reported disasters.</p>
//               )}
//             </div>
//           </div>

//           <div className="w-full flex justify-center mt-10">
//             <div className="max-w-3xl w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
//               <div className="h-full w-full">
//                 <DisasterMap />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService, disasterService } from "../services/api"; // ✅ Import disasterService
// import AuthContext from "../context/authcontext";
// import DisasterMap from "../map/disastermap";
// import socket from "../services/socket";
// import Chat from "../components/chat";

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]); // ✅ State for disasters
//   const [loading, setLoading] = useState(true);
//   const authContext = useContext(AuthContext);

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(),
//         ]);

//         console.log("Fetched Disasters:", disastersData); // ✅ Debugging log

//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(Array.isArray(disastersData) ? disastersData : []); // ✅ Ensure it's an array
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // ✅ Listen for Realtime Updates via WebSocket
//   useEffect(() => {
//     const handleDonationUpdate = (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     };

//     const handleVolunteerUpdate = (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     };

//     socket.on("donationUpdate", handleDonationUpdate);
//     socket.on("volunteerUpdate", handleVolunteerUpdate);

//     return () => {
//       socket.off("donationUpdate", handleDonationUpdate);
//       socket.off("volunteerUpdate", handleVolunteerUpdate);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center">
//         <h2 className="text-3xl font-bold text-white">Dashboard</h2>
//         <Chat />
//       </div>

//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           {user && (
//             <div className="mt-6 text-center">
//               <p className="text-white text-lg font-semibold">
//                 Welcome, <span className="text-green-300">{user.name}</span> ({user.email})
//               </p>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-8">
//             {/* ✅ Donations Section */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donations</h3>
//               {donations.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No donations available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {donations.map((donation) => (
//                     <li key={donation._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Type:</strong> {donation.type}</p>
//                       <p><strong>Amount:</strong> {donation.amount}</p>
//                       <p><strong>Status:</strong> {donation.status}</p>
//                       <p><strong>Donor:</strong> {donation.donor?.name || "Anonymous"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* ✅ Volunteers Section */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteers</h3>
//               {volunteers.length === 0 ? (
//                 <p className="text-gray-600 text-lg italic">No volunteers available.</p>
//               ) : (
//                 <ul className="space-y-3">
//                   {volunteers.map((volunteer) => (
//                     <li key={volunteer._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Name:</strong> {volunteer.user?.name || "Unknown"}</p>
//                       <p><strong>Skills:</strong> {volunteer.skills?.join(", ") || "None listed"}</p>
//                       <p><strong>Availability:</strong> {volunteer.availability || "Not specified"}</p>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* ✅ Reported Disasters Section */}
//             <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reported Disasters</h3>
//               {disasters.length > 0 ? (
//                 <ul className="space-y-3">
//                   {disasters.map((disaster) => (
//                     <li key={disaster._id} className="border p-4 rounded-md shadow-sm bg-white">
//                       <p><strong>Name:</strong> {disaster.name}</p>
//                       <p><strong>Location:</strong> {disaster.location}</p>
//                       <p><strong>Severity:</strong> {disaster.severity}</p>
//                       <p><strong>Description:</strong> {disaster.description}</p>
//                       <p><strong>Date:</strong> {new Date(disaster.reportedAt).toLocaleString()}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600 text-lg italic">No reported disasters.</p>
//               )}
//             </div>
//           </div>

//           {/* ✅ Disaster Map */}
//           <div className="w-full flex justify-center mt-10">
//             <div className="max-w-3xl w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
//               <div className="h-full w-full">
//                 <DisasterMap />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;












// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService, disasterService } from "../services/api";
// import AuthContext from "../context/authcontext";
// import DisasterMap from "../map/disastermap";
// import { useNavigate } from "react-router-dom";
// import socket from "../services/socket";
// import Chat from "../components/chat";

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const authContext = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(),
//         ]);

//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(Array.isArray(disastersData) ? disastersData : []);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     socket.on("donationUpdate", (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     });
//     socket.on("volunteerUpdate", (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     });
//     return () => {
//       socket.off("donationUpdate");
//       socket.off("volunteerUpdate");
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center">
//         <h2 className="text-3xl font-bold text-white">Disaster Management</h2>
//         <Chat />
//       </div>
//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           <div className="flex justify-center space-x-6 mt-6">
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/disasters")}> 
//               <h3 className="text-lg font-semibold">Disasters Registered</h3>
//               <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/donations")}> 
//               <h3 className="text-lg font-semibold">Donations</h3>
//               <p className="text-4xl font-bold text-green-600">{donations.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/volunteers")}> 
//               <h3 className="text-lg font-semibold">Volunteers Registered</h3>
//               <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/report-disaster")}>Report Disaster</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/disasters")}>Disaster Reported</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/volunteer-registration")}>Volunteer Registration</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/map")}>Maps</div>
//             {/* <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/donationslist")}>Donations</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/volunteerslist")}>volunteers</div> */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };3


// export default Dashboard;



















// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService, disasterService } from "../services/api";
// import AuthContext from "../context/authcontext";
// import DisasterMap from "../map/disastermap";
// import { useNavigate } from "react-router-dom";
// import socket from "../services/socket";
// import Chat from "../components/chat";
// import Notifications from "../components/notification"; // Import Notifications Component

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const authContext = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(),
//         ]);

//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(Array.isArray(disastersData) ? disastersData : []);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     socket.on("donationUpdate", (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     });
//     socket.on("volunteerUpdate", (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     });
//     return () => {
//       socket.off("donationUpdate");
//       socket.off("volunteerUpdate");
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center">
//         <h2 className="text-3xl font-bold text-white">Disaster Management</h2>
//         <Chat />
//       </div>
//       <Notifications /> {/* Added Notifications Component Here */}
//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           <div className="flex justify-center space-x-6 mt-6">
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/disasters")}> 
//               <h3 className="text-lg font-semibold">Disasters Registered</h3>
//               <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/donations")}> 
//               <h3 className="text-lg font-semibold">Donations</h3>
//               <p className="text-4xl font-bold text-green-600">{donations.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/volunteers")}> 
//               <h3 className="text-lg font-semibold">Volunteers Registered</h3>
//               <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/report-disaster")}>Report Disaster</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/disasters")}>Disaster Reported</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/volunteer-registration")}>Volunteer Registration</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/map")}>Maps</div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;






























// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService, disasterService } from "../services/api";
// import AuthContext from "../context/authcontext";
// import DisasterMap from "../map/disastermap";
// import { useNavigate } from "react-router-dom";
// import socket from "../services/socket";
// import Chat from "../components/chat";
// import Notifications from "../components/notification"; // Import Notifications Component

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const authContext = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(),
//         ]);

//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(Array.isArray(disastersData) ? disastersData : []);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     socket.on("donationUpdate", (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     });
//     socket.on("volunteerUpdate", (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     });
//     return () => {
//       socket.off("donationUpdate");
//       socket.off("volunteerUpdate");
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center flex justify-between items-center">
//         <button 
//           className="bg-white text-black px-4 py-2 rounded-lg shadow-md" 
//           onClick={() => navigate("/")}
//         >
//           Home
//         </button>
//         <h2 className="text-3xl font-bold text-white">Disaster Management</h2>
//         <Chat />
//       </div>
//       <Notifications /> {/* Added Notifications Component Here */}
//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           <div className="flex justify-center space-x-6 mt-6">
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/disasters")}> 
//               <h3 className="text-lg font-semibold">Disasters Registered</h3>
//               <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/donation")}> 
//               <h3 className="text-lg font-semibold">Donations</h3>
//               <p className="text-4xl font-bold text-green-600">{donations.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/volunteers")}> 
//               <h3 className="text-lg font-semibold">Volunteers Registered</h3>
//               <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/report-disaster")}>Report Disaster</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/disasters")}>Disaster Reported</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/volunteer-registration")}>Volunteer Registration</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/map")}>Maps</div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService, disasterService } from "../services/api";
// import AuthContext from "../context/authcontext";
// import DisasterMap from "../map/disastermap";
// import { useNavigate } from "react-router-dom";
//  import socket from "../services/socket";
// import Chat from "../components/chat";
// import Notifications from "../components/notification"; // Import Notifications Component

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const authContext = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(),
//         ]);

//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(Array.isArray(disastersData) ? disastersData : []);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     socket.on("donationUpdate", (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     });
//     socket.on("volunteerUpdate", (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     });
//     return () => {
//       socket.off("donationUpdate");
//       socket.off("volunteerUpdate");
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-6">
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center flex justify-between items-center">
//         <h2 className="text-3xl font-bold text-white">Disaster Management</h2>
//         <Chat />
//       </div>
//       <Notifications /> {/* Added Notifications Component Here */}
//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           <div className="flex justify-center space-x-6 mt-6">
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/disasters")}> 
//               <h3 className="text-lg font-semibold">Disasters Registered</h3>
//               <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/donations")}> 
//               <h3 className="text-lg font-semibold">Donations</h3>
//               <p className="text-4xl font-bold text-green-600">{donations.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer" onClick={() => navigate("/volunteers")}> 
//               <h3 className="text-lg font-semibold">Volunteers Registered</h3>
//               <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/report-disaster")}>Report Disaster</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/disasters")}>Disaster Reported</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/volunteer-registration")}>Volunteer Registration</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer" onClick={() => navigate("/map")}>Maps</div>
//           </div>
//           <div className="w-full flex justify-start mt-6">
//             <button 
//               className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md ml-4" 
//               onClick={() => navigate("/")}
//             >
//               Home
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;














































// import { useEffect, useState, useContext } from "react";
// import { donationService, volunteerService, disasterService } from "../services/api";
// import AuthContext from "../context/authcontext";
// import DisasterMap from "../map/disastermap";
// import { useNavigate } from "react-router-dom";
// import socket from "../services/socket";
// import Chat from "../components/chat";
// import Notifications from "../components/notification"; // Import Notifications Component

// const Dashboard = () => {
//   const [donations, setDonations] = useState<any[]>([]);
//   const [volunteers, setVolunteers] = useState<any[]>([]);
//   const [disasters, setDisasters] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const authContext = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
//   const { user } = authContext;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [donationsData, volunteersData, disastersData] = await Promise.all([
//           donationService.getDonations(),
//           volunteerService.getVolunteers(),
//           disasterService.getDisasters(),
//         ]);

//         setDonations(donationsData || []);
//         setVolunteers(volunteersData || []);
//         setDisasters(Array.isArray(disastersData) ? disastersData : []);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     socket.on("donationUpdate", (newDonation: any) => {
//       setDonations((prev) => [newDonation, ...prev]);
//     });
//     socket.on("volunteerUpdate", (newVolunteer: any) => {
//       setVolunteers((prev) => [newVolunteer, ...prev]);
//     });
//     return () => {
//       socket.off("donationUpdate");
//       socket.off("volunteerUpdate");
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex flex-col items-center p-0 relative">
//       {/* Top Navigation */}
//       <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-fuchsia-600 p-4 text-center flex justify-between items-center">
//         <button 
//           className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
//           onClick={() => navigate("/")}
//         >
//           Home
//         </button>
//         <h2 className="text-3xl font-bold text-white">Disaster Management</h2>
//         <Chat />
//       </div>

//       {/* Notification Component (Styled Floating Box - Top Right) */}
//       <div className="absolute mt-12 top-6 right-6">
//         <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-4 rounded-xl w-60">
//           <h3 className="text-white font-semibold text-lg mb-2">📢 Notifications</h3>
//           <Notifications />
//         </div>
//       </div>

//       {loading ? (
//         <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
//       ) : (
//         <>
//           {/* Statistics Boxes */}
//           <div className="flex justify-center space-x-6 mt-6">
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer hover:scale-105 transition" onClick={() => navigate("/disasters")}> 
//               <h3 className="text-lg font-semibold">Disasters Registered</h3>
//               <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer hover:scale-105 transition" onClick={() => navigate("/donation")}> 
//               <h3 className="text-lg font-semibold">Donations</h3>
//               <p className="text-4xl font-bold text-green-600">{donations.length}</p>
//             </div>
//             <div className="text-center bg-white p-6 rounded-lg shadow-md w-40 cursor-pointer hover:scale-105 transition" onClick={() => navigate("/volunteers")}> 
//               <h3 className="text-lg font-semibold">Volunteers Registered</h3>
//               <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition" onClick={() => navigate("/report-disaster")}>Report Disaster</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition" onClick={() => navigate("/disasters")}>Disaster Reported</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition" onClick={() => navigate("/volunteer-registration")}>Volunteer Registration</div>
//             <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition" onClick={() => navigate("/map")}>Maps</div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


























import { useEffect, useState, useContext } from "react";
import { donationService, volunteerService, disasterService } from "../services/api";
import AuthContext from "../context/authcontext";
import DisasterMap from "../map/disastermap";
import { useNavigate } from "react-router-dom";
import socket from "../services/socket";
import Chat from "../components/chat";
import Notifications from "../components/notification"; // Import Notifications Component

const Dashboard = () => {
  const [donations, setDonations] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [disasters, setDisasters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) throw new Error("AuthContext must be used within an AuthProvider");
  const { user } = authContext;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [donationsData, volunteersData, disastersData] = await Promise.all([
          donationService.getDonations(),
          volunteerService.getVolunteers(),
          disasterService.getDisasters(),
        ]);

        setDonations(donationsData || []);
        setVolunteers(volunteersData || []);
        setDisasters(Array.isArray(disastersData) ? disastersData : []);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    socket.on("donationUpdate", (newDonation: any) => {
      setDonations((prev) => [newDonation, ...prev]);
    });
    socket.on("volunteerUpdate", (newVolunteer: any) => {
      setVolunteers((prev) => [newVolunteer, ...prev]);
    });
    return () => {
      socket.off("donationUpdate");
      socket.off("volunteerUpdate");
    };
  }, []);

  return (
    // <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 min-h-screen flex flex-col items-center p-0 relative">
    //   {/* Top Navigation */}
    //   <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 p-4 text-center flex justify-between items-center">
    //     <button 
    //       className="bg-white text-black px-6 py-2 rounded-lg shadow-xl hover:bg-gray-200 transition"
    //       onClick={() => navigate("/")}
    //     >
    //       Home
    //     </button>
    //     <h2 className="text-3xl font-bold text-white">Disaster Management</h2>
    //     <Chat />
    //   </div>

    //   {/* Notification Component (Styled Floating Box - Top Right) */}
    //   <div className="absolute mt-12 top-6 right-6">
    //     <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-4 rounded-xl w-72">
    //       <h3 className="text-white font-semibold text-lg mb-2">📢 Notifications</h3>
    //       <Notifications />
    //     </div>
    //   </div>

    //   {loading ? (
    //     <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
    //   ) : (
    //     <>
    //       {/* Statistics Boxes */}
    //       <div className="flex justify-center space-x-6 mt-6">
    //         <div className="text-center bg-white p-6 rounded-2xl shadow-2xl w-52 cursor-pointer hover:scale-105 transition-transform transform hover:bg-red-100"   onClick={() => navigate("/disasters")}>
    //           <h3 className="text-lg font-semibold text-red-600">Disasters Registered</h3>
    //           <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
    //         </div>
    //         <div className="text-center bg-white p-6 rounded-2xl shadow-2xl w-52 cursor-pointer hover:scale-105 transition-transform transform hover:bg-green-100"onClick={() => navigate("/donation")}>
    //           <h3 className="text-lg font-semibold text-green-600">Donations</h3>
    //           <p className="text-4xl font-bold text-green-600">{donations.length}</p>
    //         </div>
    //         <div className="text-center bg-white p-6 rounded-2xl shadow-2xl w-52 cursor-pointer hover:scale-105 transition-transform transform hover:bg-blue-100"onClick={() => navigate("/volunteers")}>
    //           <h3 className="text-lg font-semibold text-blue-600">Volunteers Registered</h3>
    //           <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
    //         </div>
    //       </div>

    //       {/* Action Buttons */}
    //       <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
    //         <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105" onClick={() => navigate("/report-disaster")}>
    //           Report Disaster
    //         </div>
    //         <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105" onClick={() => navigate("/disasters")}>
    //           Disaster Reported
    //         </div>
    //         <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105" onClick={() => navigate("/volunteer-registration")}>
    //           Volunteer Registration
    //         </div>
    //         <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105" onClick={() => navigate("/map")}>
    //           Maps
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>







    
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 min-h-screen flex flex-col items-center p-2 sm:p-4 relative">
        {/* Top Navigation */}
        <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 px-4 py-3 flex justify-between items-center flex-wrap">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition text-sm sm:text-base"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <h2 className="text-xl sm:text-3xl font-bold text-white text-center flex-1 sm:flex-none">
            Disaster Management
          </h2>
          <div className="mt-2 sm:mt-0">
            <Chat />
          </div>
        </div>
    
        {/* Notification Component (Responsive position for mobile) */}
        <div className="fixed top-20 right-4 w-11/12 sm:w-72 z-40">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-4 rounded-xl">
            <h3 className="text-white font-semibold text-lg mb-2">📢 Notifications</h3>
            <Notifications />
          </div>
        </div>
    
        {/* Loading */}
        {loading ? (
          <p className="text-white text-lg text-center mt-10 animate-pulse">Loading data...</p>
        ) : (
          <>
            {/* Statistics Boxes */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-4 sm:space-y-0 mt-6">
              <div
                className="text-center bg-white p-6 rounded-2xl shadow-2xl w-full sm:w-52 cursor-pointer hover:scale-105 transition"
                onClick={() => navigate("/disasters")}
              >
                <h3 className="text-lg font-semibold text-red-600">Disasters Registered</h3>
                <p className="text-4xl font-bold text-red-600">{disasters.length}</p>
              </div>
              <div
                className="text-center bg-white p-6 rounded-2xl shadow-2xl w-full sm:w-52 cursor-pointer hover:scale-105 transition"
                onClick={() => navigate("/donation")}
              >
                <h3 className="text-lg font-semibold text-green-600">Donations</h3>
                <p className="text-4xl font-bold text-green-600">{donations.length}</p>
              </div>
              <div
                className="text-center bg-white p-6 rounded-2xl shadow-2xl w-full sm:w-52 cursor-pointer hover:scale-105 transition"
                onClick={() => navigate("/volunteers")}
              >
                <h3 className="text-lg font-semibold text-blue-600">Volunteers Registered</h3>
                <p className="text-4xl font-bold text-blue-600">{volunteers.length}</p>
              </div>
            </div>
    
            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-lg px-2">
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/report-disaster")}
              >
                Report Disaster
              </div>
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/disasters")}
              >
                Disaster Reported
              </div>
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/volunteer-registration")}
              >
                Volunteer Registration
              </div>
              <div
                className="bg-gray-200 p-4 rounded-lg text-center shadow-md cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
                onClick={() => navigate("/map")}
              >
                Maps
              </div>
            </div>
          </>
        )}
      </div>
  
    
  );
};

export default Dashboard;
