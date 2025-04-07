// import { useState } from "react";
// import axios from "axios";

// const Notifications = () => {
//   const [formData, setFormData] = useState({
//     token: "",
//     title: "",
//     body: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:1217/api/v1/notifications/send", formData);
//       alert("Notification sent!");
//     } catch (error) {
//       console.error("Error sending notification:", error);
//       alert("Failed to send notification.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Send Notification</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="token"
//           placeholder="FCM Token"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="body"
//           placeholder="Message"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//           Send Notification
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Notifications;









// import { useState, useEffect } from "react";
// import axios from "axios";
// import { getFirebaseToken } from "../firebase"; // Import Firebase token function

// const Notifications = () => {
//   const [formData, setFormData] = useState({
//     token: "", // Will be fetched from Firebase
//     title: "",
//     body: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch FCM Token from Firebase
//     getFirebaseToken().then((token) => {
//       if (token) {
//         setFormData((prev) => ({ ...prev, token }));
//       }
//     });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:1217/api/v1/notifications/send", formData);
//       alert("✅ Notification sent successfully!");
//     } catch (error) {
//       console.error("Error sending notification:", error);
//       alert("❌ Failed to send notification.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
//       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🚀 Send Notification</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             className="w-full border p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="body"
//             placeholder="Message"
//             className="w-full border p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//             onChange={handleChange}
//             required
//           />
//           <button
//             type="submit"
//             className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Send Notification"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Notifications;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { requestNotificationPermission } from "../firebase";

// const Notifications = () => {
//   const [firebaseToken, setFirebaseToken] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     body: "",
//   });

//   // ✅ Fetch FCM token on component mount
//   useEffect(() => {
//     requestNotificationPermission().then((token) => {
//       if (token) {
//         console.log("Fetched Firebase Token:", token);
//         setFirebaseToken(token);
//       } else {
//         console.warn("No Firebase Token found.");
//       }
//     });
//   }, []);

//   // ✅ Handle input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!firebaseToken) {
//       alert("FCM Token not found. Cannot send notification.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:1217/api/v1/notifications/send", {
//         token: firebaseToken,
//         ...formData,
//       });
//       alert("Notification sent successfully!");
//     } catch (error) {
//       console.error("Error sending notification:", error);
//       alert("Failed to send notification.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg rounded-lg text-white">
//       <h2 className="text-2xl font-bold mb-4 text-center">Send Notification</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           className="w-full border p-2 rounded text-black"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="body"
//           placeholder="Message"
//           className="w-full border p-2 rounded text-black"
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-4 py-2 rounded shadow-md"
//         >
//           🚀 Send Notification
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Notifications;








import { useEffect, useState } from "react";
import axios from "axios";
import { requestNotificationPermission } from "../firebase";

const Notifications = () => {
  const [firebaseToken, setFirebaseToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // ✅ Fetch FCM token on component mount
  useEffect(() => {
    requestNotificationPermission().then((token) => {
      if (token) {
        console.log("Fetched Firebase Token:", token);
        setFirebaseToken(token);
      } else {
        console.warn("No Firebase Token found.");
      }
    });
  }, []);

  // ✅ Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseToken) {
      alert("FCM Token not found. Cannot send notification.");
      return;
    }

    try {
      await axios.post("https://disaster-relief-app-3.onrender.com/api/v1/notifications/send", {
        token: firebaseToken,
        ...formData,
      });
      alert("Notification sent successfully!");
      // Clear form data after successful notification send
      setFormData({ title: "", body: "" });
    } catch (error) {
      console.error("Error sending notification:", error);
      alert("Failed to send notification.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Send Notification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded text-black"
          onChange={handleChange}
          value={formData.title} // Bind input to state
          required
        />
        <input
          type="text"
          name="body"
          placeholder="Message"
          className="w-full border p-2 rounded text-black"
          onChange={handleChange}
          value={formData.body} // Bind input to state
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-4 py-2 rounded shadow-md"
        >
          🚀 Send Notification
        </button>
      </form>
    </div>
  );
};

export default Notifications;
