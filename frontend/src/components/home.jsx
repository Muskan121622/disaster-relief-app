// import { useEffect, useState } from "react";
// import axios from "axios";


// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <section className="relative h-[400px] w-full">
//         <img
//           src="./public/image.png" // Ensure this image is available in your public folder
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
//           <h1 className="text-4xl font-bold">Disaster Relief Platform</h1>
//           <p className="mt-2 text-lg">Providing urgent aid to affected communities</p>
//           <div className="mt-4 flex gap-4">
//             <a href="/donate" className="bg-green-500 px-6 py-2 rounded text-white">Donate</a>
//             <a href="/volunteer" className="bg-blue-500 px-6 py-2 rounded text-white">Volunteer</a>
//           </div>
//         </div>
//       </section>

//       {/* Live Disaster Alerts */}
//       <section className="max-w-5xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Disaster Alerts</h2>
//         <div className="space-y-4">
//           {disasters.length > 0 ? (
//             disasters.map((disaster, index) => (
//               <div key={index} className="bg-white p-4 rounded shadow-md">
//                 <h3 className="text-xl font-bold text-red-600">{disaster.name}</h3>
//                 <p className="text-gray-700">Location: {disaster.location}</p>
//                 <p className="text-gray-700">Severity: {disaster.severity}</p>
//               </div>
//             ))
//           ) : (
//             <p>No active disasters reported.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;










// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
//         <img
//           src="./public/image.png" // Ensure the image is in the public/images folder
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover brightness-50"
//         />
//         <div className="relative z-10 p-6">
//           <h1 className="text-5xl font-bold">Join Hands for Relief: Act Now, Save Lives!</h1>
//           <p className="mt-3 text-lg">Providing urgent aid to affected communities</p>
//           <div className="mt-6 flex gap-4 justify-center">
//             <a href="/donate" className="bg-green-500 px-6 py-3 rounded text-white text-lg font-semibold">Donate</a>
//             <a href="/volunteer" className="bg-blue-500 px-6 py-3 rounded text-white text-lg font-semibold">Volunteer</a>
//           </div>
//         </div>
//       </section>

//       {/* Live Disaster Alerts */}
//       <section className="max-w-5xl mx-auto py-10 px-4">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Live Disaster Alerts</h2>
//         <div className="space-y-4">
//           {disasters.length > 0 ? (
//             disasters.map((disaster, index) => (
//               <div key={index} className="bg-white p-5 rounded shadow-md border-l-4 border-red-500">
//                 <h3 className="text-2xl font-bold text-red-600">{disaster.name}</h3>
//                 <p className="text-gray-700">📍 Location: {disaster.location}</p>
//                 <p className="text-gray-700">⚠️ Severity: {disaster.severity}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-700">No active disasters reported.</p>
//           )}
//         </div>
//       </section>

//       {/* Emergency Contacts */}
//       <section className="bg-blue-50 py-10">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">📞 Emergency Contacts</h2>
//           <ul className="text-lg text-gray-700 space-y-2">
//             <li>🚑 National Disaster Hotline: <strong>+1-800-555-HELP</strong></li>
//             <li>🚒 Fire & Rescue: <strong>911</strong></li>
//             <li>🚓 Police Emergency: <strong>911</strong></li>
//             <li>🏥 Medical Emergency: <strong>+1-800-555-MED</strong></li>
//           </ul>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-10 px-4">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">✅ Success Stories</h2>
//         <p className="text-lg text-gray-700">🌟 <strong>5000+ families</strong> rescued through our platform!</p>
//         <blockquote className="mt-4 bg-gray-100 p-4 italic border-l-4 border-green-500">
//           "Thanks to this platform, we received aid just in time. Forever grateful!" - Jane D.
//         </blockquote>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="bg-gray-900 text-white py-10 text-center">
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-semibold">📩 Stay Updated</h2>
//           <p className="text-lg mt-2">Sign up for real-time alerts & safety tips.</p>
//           <form className="mt-4 flex flex-col sm:flex-row justify-center gap-2">
//             <input type="email" placeholder="Enter your email" className="p-3 rounded text-gray-900 w-full sm:w-2/3" />
//             <button className="bg-green-500 px-6 py-3 rounded text-white font-semibold">Subscribe</button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;























// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section with Full Background */}
//       <section className="relative h-[600px] w-full">
//         <img
//           src="./public/image.png" // Ensure this image is available in public folder
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
//           <h1 className="text-5xl font-bold">Join Hands for Relief: Act Now, Save Lives!</h1>
//           <p className="mt-3 text-lg">Providing urgent aid to affected communities.</p>
//           <div className="mt-4 flex gap-4">
//             <a href="/donate" className="bg-green-500 px-6 py-2 rounded text-white text-lg">Donate</a>
//             <a href="/volunteer" className="bg-blue-500 px-6 py-2 rounded text-white text-lg">Volunteer</a>
//           </div>

//           {/* Live Disaster Alerts Overlay */}
//           <div className="absolute bottom-10 bg-black/60 p-4 rounded-lg w-[90%] max-w-3xl">
//             <h2 className="text-xl font-semibold text-yellow-400">Live Disaster Alerts</h2>
//             <div className="space-y-2 mt-2">
//               {disasters.length > 0 ? (
//                 disasters.map((disaster, index) => (
//                   <div key={index} className="bg-white p-3 rounded shadow-md text-gray-800">
//                     <h3 className="text-lg font-bold text-red-600">{disaster.name}</h3>
//                     <p>📍 {disaster.location} | ⚠️ Severity: {disaster.severity}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-white">No active disasters reported.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ Success Stories</h2>
//         <p className="text-gray-700">🌍 5000+ families rescued through our platform!</p>
//         <p className="text-gray-700 italic mt-2">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="bg-blue-600 text-white text-center py-8 px-4">
//         <h2 className="text-2xl font-semibold">📩 Stay Updated</h2>
//         <p className="mt-2">Sign up for real-time alerts & safety tips.</p>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="mt-4 px-4 py-2 text-gray-900 rounded-lg"
//         />
//         <button className="ml-2 bg-yellow-400 px-4 py-2 rounded-lg text-gray-900">Subscribe</button>
//       </section>

//       {/* Footer with Emergency Contacts */}
//       <footer className="bg-gray-900 text-white py-6 px-4">
//         <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
//         <ul className="mt-2 space-y-2">
//           <li>🚑 Medical: +123 456 7890</li>
//           <li>🚔 Police: +987 654 3210</li>
//           <li>🔥 Fire Dept: +111 222 3333</li>
//         </ul>
//         <p className="mt-4 text-sm">© 2025 Disaster Relief Platform. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
























// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section with Full Background */}
//       <section className="relative h-screen w-full">
//         <img
//           src="/image.png" // Ensure this image is in the public folder
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
//           <h1 className="text-5xl font-bold">Join Hands for Relief: Act Now, Save Lives!</h1>
//           <p className="mt-3 text-lg">Providing urgent aid to affected communities.</p>
//           <div className="mt-4 flex gap-4">
//             <a href="/donate" className="bg-green-500 px-6 py-2 rounded text-white text-lg">Donate</a>
//             <a href="/volunteer" className="bg-blue-500 px-6 py-2 rounded text-white text-lg">Volunteer</a>
//           </div>

//           {/* Live Disaster Alerts Overlay */}
//           <div className="absolute bottom-10 bg-black/60 p-4 rounded-lg w-[90%] max-w-3xl">
//             <h2 className="text-xl font-semibold text-yellow-400">Live Disaster Alerts</h2>
//             <div className="space-y-2 mt-2">
//               {disasters.length > 0 ? (
//                 disasters.map((disaster, index) => (
//                   <div key={index} className="bg-white p-3 rounded shadow-md text-gray-800">
//                     <h3 className="text-lg font-bold text-red-600">{disaster.name}</h3>
//                     <p>📍 {disaster.location} | ⚠️ Severity: {disaster.severity}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-white">No active disasters reported.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ Success Stories</h2>
//         <p className="text-gray-700">🌍 5000+ families rescued through our platform!</p>
//         <p className="text-gray-700 italic mt-2">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
//         {/* Stay Updated Section (Centered) */}
//         <div className="text-center md:w-1/3">
//           <h2 className="text-xl font-semibold">📩 Stay Updated</h2>
//           <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
//           <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 text-gray-900 rounded-lg"
//             />
//             <button className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900">Subscribe</button>
//           </div>
//         </div>

//         {/* Emergency Contacts (Right Side) */}
//         <div className="mt-6 md:mt-0 md:w-1/3 text-right">
//           <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
//           <ul className="mt-2 space-y-2 text-gray-300">
//             <li>🚑 Medical: +123 456 7890</li>
//             <li>🚔 Police: +987 654 3210</li>
//             <li>🔥 Fire Dept: +111 222 3333</li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;













// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section with Full Background */}
//       <section className="relative h-screen w-full">
//         <img
//           src="/image.png" // Ensure this image is in the public folder
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
//           <h1 className="text-5xl font-bold">Join Hands for Relief: Act Now, Save Lives!</h1>
//           <p className="mt-3 text-lg">Providing urgent aid to affected communities.</p>
//           <div className="mt-4 flex gap-4">
//             <a href="/donate" className="bg-green-500 px-6 py-2 rounded text-white text-lg">Donate</a>
//             <a href="/volunteer" className="bg-blue-500 px-6 py-2 rounded text-white text-lg">Volunteer</a>
//           </div>

//           {/* Live Disaster Alerts Overlay */}

//           <div className="absolute bottom-10 bg-black/60 p-4 rounded-lg w-[90%] max-w-3xl">
//             <h2 className="text-xl font-semibold text-yellow-400">Live Disaster Alerts</h2>
//             <div className="space-y-2 mt-2">
//               {disasters.length > 0 ? (
//                 disasters.map((disaster, index) => (
//                   <div key={index} className="bg-white p-3 rounded shadow-md text-gray-800">
//                     <h3 className="text-lg font-bold text-red-600">{disaster.name}</h3>
//                     <p>📍 {disaster.location} | ⚠️ Severity: {disaster.severity}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-white">No active disasters reported.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section> 
      

//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ Success Stories</h2>
//         <p className="text-gray-700">🌍 5000+ families rescued through our platform!</p>
//         <p className="text-gray-700 italic mt-2">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
//         {/* Stay Updated Section (Centered) */}
//         <div className="text-center md:w-1/3 mx-auto">
//           <h2 className="text-xl font-semibold">📩 Stay Updated</h2>
//           <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
//           <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 text-gray-900 rounded-lg"
//             />
//             <button className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900">Subscribe</button>
//           </div>
//         </div>

//         {/* Emergency Contacts (Right Side) */}
//         <div className="mt-6 md:mt-0 md:w-1/3 text-right">
//           <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
//           <ul className="mt-2 space-y-2 text-gray-300">
//             <li>🚑 Medical: +123 456 7890</li>
//             <li>🚔 Police: +987 654 3210</li>
//             <li>🔥 Fire Dept: +111 222 3333</li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;











// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       {/* Hero Section with Full Background */}
//       <section className="relative h-screen w-full">
//         <img
//           src="/image.png" // Ensure this image is in the public folder
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
//           <h1 className="text-6xl font-extrabold drop-shadow-lg">🌎 Act Now, Save Lives! 🚀</h1>
//           <p className="mt-4 text-xl font-semibold">Providing urgent aid to affected communities.</p>
//           <div className="mt-6">
//             <a href="/dashboard" className="bg-blue-600 px-8 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition">
//               Go to Dashboard
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-10 px-6 text-center text-white">
//         <h2 className="text-3xl font-bold mb-6">✅ Success Stories</h2>
//         <p className="text-lg">🌍 Over <span className="text-yellow-300 font-bold">5000+ families</span> rescued through our platform!</p>
//         <p className="text-lg italic mt-4">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-10 px-6 flex flex-col md:flex-row justify-between items-center">
//         {/* Stay Updated Section */}
//         <div className="text-center md:w-1/3 mx-auto">
//           <h2 className="text-xl font-bold">📩 Stay Updated</h2>
//           <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
//           <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 text-gray-900 rounded-lg shadow-md"
//             />
//             <button className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900 font-bold hover:bg-yellow-500 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Emergency Contacts */}
//         <div className="mt-6 md:mt-0 md:w-1/3 text-right">
//           <h2 className="text-xl font-bold">📞 Emergency Contacts</h2>
//           <ul className="mt-2 space-y-3 text-gray-300">
//             <li>🚑 Medical: +123 456 7890</li>
//             <li>🚔 Police: +987 654 3210</li>
//             <li>🔥 Fire Dept: +111 222 3333</li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;









// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       {/* Hero Section with Full Background */}
//       <section className="relative h-screen w-full">
//         <img
//           src="/image.png" // Ensure this image is in the public folder
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
//           <h1 className="text-6xl font-extrabold drop-shadow-lg">🌎 Act Now, Save Lives! 🚀</h1>
//           <p className="mt-4 text-xl font-semibold">Providing urgent aid to affected communities.</p>
//           <div className="mt-6 flex gap-4">
//             <a href="/dashboard" className="bg-blue-600 px-8 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition">
//               Go to Dashboard
//             </a>
//             <a href="/donations" className="bg-green-600 px-8 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-green-700 transition">
//               Donate Now
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-10 px-6 text-center text-white">
//         <h2 className="text-3xl font-bold mb-6">✅ Success Stories</h2>
//         <p className="text-lg">🌍 Over <span className="text-yellow-300 font-bold">5000+ families</span> rescued through our platform!</p>
//         <p className="text-lg italic mt-4">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-10 px-6 flex flex-col md:flex-row justify-between items-center">
//         {/* Stay Updated Section */}
//         <div className="text-center md:w-1/3 mx-auto">
//           <h2 className="text-xl font-bold">📩 Stay Updated</h2>
//           <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
//           <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 text-gray-900 rounded-lg shadow-md"
//             />
//             <button className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900 font-bold hover:bg-yellow-500 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Emergency Contacts */}
//         <div className="mt-6 md:mt-0 md:w-1/3 text-right">
//           <h2 className="text-xl font-bold">📞 Emergency Contacts</h2>
//           <ul className="mt-2 space-y-3 text-gray-300">
//             <li>🚑 Medical: +123 456 7890</li>
//             <li>🚔 Police: +987 654 3210</li>
//             <li>🔥 Fire Dept: +111 222 3333</li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;






















// import { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section with Full Background */}
//       <section className="relative h-screen w-full">
//         <img
//           src="/image.png"
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
//           <h1 className="text-5xl font-bold">Join Hands for Relief: Act Now, Save Lives!</h1>
//           <p className="mt-3 text-lg">Providing urgent aid to affected communities.</p>
//           <div className="mt-4 flex gap-4">
//             <a href="/donate" className="bg-green-500 px-6 py-2 rounded text-white text-lg">Donate</a>
//             <a href="/volunteer" className="bg-blue-500 px-6 py-2 rounded text-white text-lg">Volunteer</a>
//           </div>
//         </div>
//       </section>
      
//       {/* Live Disaster Alerts with Marquee Effect */}
//       <div className="w-full bg-black text-white py-3 overflow-hidden">
//         <div className="flex space-x-10 animate-marquee whitespace-nowrap">
//           {disasters.length > 0 ? (
//             disasters.map((disaster, index) => (
//               <div key={index} className="px-6 text-red-400 font-semibold">
//                 🚨 {disaster.name} - 📍 {disaster.location} | ⚠️ Severity: {disaster.severity}
//               </div>
//             ))
//           ) : (
//             <div className="px-6 text-yellow-400 font-semibold">No active disasters reported.</div>
//           )}
//         </div>
//       </div>
      
//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ Success Stories</h2>
//         <p className="text-gray-700">🌍 5000+ families rescued through our platform!</p>
//         <p className="text-gray-700 italic mt-2">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-center md:w-1/3 mx-auto">
//           <h2 className="text-xl font-semibold">📩 Stay Updated</h2>
//           <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
//           <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
//             <input type="email" placeholder="Enter your email" className="px-4 py-2 text-gray-900 rounded-lg" />
//             <button className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900">Subscribe</button>
//           </div>
//         </div>
//         <div className="mt-6 md:mt-0 md:w-1/3 text-right">
//           <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
//           <ul className="mt-2 space-y-2 text-gray-300">
//             <li>🚑 Medical: +123 456 7890</li>
//             <li>🚔 Police: +987 654 3210</li>
//             <li>🔥 Fire Dept: +111 222 3333</li>
//           </ul>
//         </div>
//       </footer>
      
//       {/* Tailwind CSS Animation for Marquee */}
//       <style>
//         {`
//           @keyframes marquee {
//             from { transform: translateX(100%); }
//             to { transform: translateX(-100%); }
//           }
//           .animate-marquee {
//             display: flex;
//             animation: marquee 15s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default HomePage;















// import { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const HomePage = () => {
//   const [disasters, setDisasters] = useState([]);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/disasters").then((res) => {
//       setDisasters(res.data.data);
//     });
//   }, []);

//   const handleSubscribe = async () => {
//     if (!email) {
//       toast.error("Please enter your email!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:1217/api/v1/subscribe", { email });
//       toast.success(response.data.message || "Subscribed successfully!");
//       setEmail(""); // Clear input after subscribing
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Subscription failed. Try again!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section with Full Background */}
//       <section className="relative h-screen w-full">
//         <img
//           src="/image.png"
//           alt="Disaster Relief"
//           className="absolute w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
//           <h1 className="text-5xl font-bold">Join Hands for Relief: Act Now, Save Lives!</h1>
//           <p className="mt-3 text-lg">Providing urgent aid to affected communities.</p>
//           <div className="mt-4 flex gap-4">
//             <a href="/donate" className="bg-green-500 px-6 py-2 rounded text-white text-lg">Donate</a>
//             <a href="/volunteer" className="bg-blue-500 px-6 py-2 rounded text-white text-lg">Volunteer</a>
//           </div>
//         </div>
//       </section>
      
//       {/* Live Disaster Alerts with Marquee Effect */}
//       <div className="w-full bg-black text-white py-3 overflow-hidden">
//         <div className="flex space-x-10 animate-marquee whitespace-nowrap">
//           {disasters.length > 0 ? (
//             disasters.map((disaster, index) => (
//               <div key={index} className="px-6 text-red-400 font-semibold">
//                 🚨 {disaster.name} - 📍 {disaster.location} | ⚠️ Severity: {disaster.severity}
//               </div>
//             ))
//           ) : (
//             <div className="px-6 text-yellow-400 font-semibold">No active disasters reported.</div>
//           )}
//         </div>
//       </div>
      
//       {/* Success Stories */}
//       <section className="max-w-5xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ Success Stories</h2>
//         <p className="text-gray-700">🌍 5000+ families rescued through our platform!</p>
//         <p className="text-gray-700 italic mt-2">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-center md:w-1/3 mx-auto">
//           <h2 className="text-xl font-semibold">📩 Stay Updated</h2>
//           <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
//           <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="px-4 py-2 text-gray-900 rounded-lg"
//             />
//             <button
//               onClick={handleSubscribe}
//               className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//         <div className="mt-6 md:mt-0 md:w-1/3 text-right">
//           <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
//           <ul className="mt-2 space-y-2 text-gray-300">
//             <li>🚑 Medical: +123 456 7890</li>
//             <li>🚔 Police: +987 654 3210</li>
//             <li>🔥 Fire Dept: +111 222 3333</li>
//           </ul>
//         </div>
//       </footer>
      
//       {/* Tailwind CSS Animation for Marquee */}
//       <style>
//         {`
//           @keyframes marquee {
//             from { transform: translateX(100%); }
//             to { transform: translateX(-100%); }
//           }
//           .animate-marquee {
//             display: flex;
//             animation: marquee 15s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default HomePage;
























































import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const HomePage = () => {
  const [disasters, setDisasters] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("https://disaster-relief-app-3.onrender.com/api/v1/disasters").then((res) => {
      setDisasters(res.data.data);
    });
  }, []);


  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://disaster-relief-app-3.onrender.com/api/v1/subscribe", { email });
      toast.success(response.data.message || "Subscribed successfully!");
      setEmail(""); // Clear input after subscribing
    } catch (error) {
      toast.error(error.response?.data?.message || "Subscription failed. Try again!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Hero Section with Full Background */}
      <section className="relative h-screen w-full">
        <img
          src="/image.png" // Ensure this image is in the public folder
          alt="Disaster Relief"
          className="absolute w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black/50">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">🌎 Act Now, Save Lives! 🚀</h1>
          <p className="mt-4 text-xl font-semibold">Providing urgent aid to affected communities.</p>
          <div className="mt-6 flex gap-4">
            <a href="/dashboard" className="bg-blue-600 px-8 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition">
              Go to Dashboard
            </a>
            <a href="/donate" className="bg-green-600 px-8 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-green-700 transition">
              Donate Now
            </a>
          </div>
        </div>
      </section>



      {/* Live Disaster Alerts */}
      <div className="w-full bg-black text-white py-3 overflow-hidden">
        <div className="flex space-x-10 animate-marquee whitespace-nowrap">
          {disasters.length > 0 ? (
            disasters.map((disaster, index) => (
              <div key={index} className="px-6 text-red-400 font-semibold">
                🚨 {disaster.name} - 📍 {disaster.location} | ⚠️ Severity: {disaster.severity}
              </div>
            ))
          ) : (
            <div className="px-6 text-yellow-400 font-semibold">No active disasters reported.</div>
          )}
        </div>
      </div>


      {/* Success Stories */}
      <section className="max-w-5xl mx-auto py-10 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">✅ Success Stories</h2>
        <p className="text-lg">🌍 Over <span className="text-yellow-300 font-bold">5000+ families</span> rescued through our platform!</p>
        <p className="text-lg italic mt-4">"This platform saved our lives during the flood. Thank you!" - A survivor</p>
      </section>

      







      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:w-1/3 mx-auto">
          <h2 className="text-xl font-semibold">📩 Stay Updated</h2>
          <p className="mt-2 text-gray-300">Sign up for real-time alerts & safety tips.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 text-gray-900 rounded-lg"
              disabled={loading}
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/3 text-right">
          <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>🚑 Medical: +123 456 7890</li>
            <li>🚔 Police: +987 654 3210</li>
            <li>🔥 Fire Dept: +111 222 3333</li>
          </ul>
        </div>
      </footer>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>














    </div>
  );
};

export default HomePage;