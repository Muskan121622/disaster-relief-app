// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Notification {
//   _id: string;
//   message: string;
//   createdAt: string;
// }

// const Notifications = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]); // ✅ Define state type

//   useEffect(() => {
//     axios.get("/api/admin/notifications")
//       .then((response) => {
//         setNotifications(response.data.notifications); // ✅ Ensures TypeScript understands the structure
//       })
//       .catch((error) => {
//         console.error("Error fetching notifications:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold">Notifications</h2>
//       <ul>
//         {notifications.map((notification) => (
//           <li key={notification._id} className="p-4 bg-white shadow rounded mb-4">
//             <p>{notification.message}</p>
//             <p className="text-gray-500 text-sm">{new Date(notification.createdAt).toLocaleString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notifications;












// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Notification {
//   _id: string;
//   message: string;
//   createdAt: string;
// }

// const Notifications = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]); // Initialize with an empty array

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/admin/notifications")
//       .then((response) => {
//         const notificationsData = response.data.notifications;
//         if (Array.isArray(notificationsData)) {
//           setNotifications(notificationsData); // Ensures the data is an array
//         } else {
//           console.error("Notifications data is not an array:", notificationsData);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching notifications:", error);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Notifications
//         </h2>

//         {/* Conditional Rendering: If there are no notifications */}
//         {notifications.length === 0 ? (
//           <p className="text-center text-gray-600">No new notifications</p>
//         ) : (
//           <ul className="space-y-6">
//             {notifications.map((notification) => (
//               <li
//                 key={notification._id}
//                 className="p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
//               >
//                 <div>
//                   <p className="text-lg font-semibold">{notification.message}</p>
//                   <p className="text-sm text-gray-300">
//                     {new Date(notification.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Notifications;








// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Notification {
//   _id: string;
//   title: string;
//   body: string;
//   createdAt: string;
// }

// const Notifications = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]); // Initialize with an empty array

//   useEffect(() => {
//     axios.get("/api/admin/notifications")
//       .then((response) => {
//         const notificationsData = response.data.notifications;
//         if (Array.isArray(notificationsData)) {
//           setNotifications(notificationsData); // Ensures the data is an array
//         } else {
//           console.error("Notifications data is not an array:", notificationsData);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching notifications:", error);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Notifications
//         </h2>

//         {/* Conditional Rendering: If there are no notifications */}
//         {notifications.length === 0 ? (
//           <p className="text-center text-gray-600">No new notifications</p>
//         ) : (
//           <ul className="space-y-6">
//             {notifications.map((notification) => (
//               <li
//                 key={notification._id}
//                 className="p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold">{notification.title}</h3>
//                   <p className="text-md">{notification.body}</p>
//                   <p className="text-sm text-gray-300">
//                     {new Date(notification.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Notifications;







// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Notification {
//   _id: string;
//   title: string;
//   body: string;
//   createdAt: string;
// }

// const Notifications = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]); // Initialize with an empty array
//   const [loading, setLoading] = useState(true); // For loading state
//   const [error, setError] = useState<string | null>(null); // For error state

//   useEffect(() => {
//     axios.get("/api/admin/notifications")
//       .then((response) => {
//         console.log("Response:", response); // Log the entire response to check its structure
//         const notificationsData = response.data.notifications;

//         // Check if the notifications data exists and is an array
//         if (Array.isArray(notificationsData)) {
//           setNotifications(notificationsData); // Set the notifications if it's an array
//         } else {
//           console.error("Notifications data is not an array:", notificationsData);
//           setError("Failed to fetch notifications. Please try again later.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to fetch notifications. Please try again later.");
//       })
//       .finally(() => {
//         setLoading(false); // Set loading to false after the request is done
//       });
//   }, []);

//   if (loading) {
//     return <div className="text-center">Loading notifications...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Notifications
//         </h2>

//         {/* Conditional Rendering: If there are no notifications */}
//         {notifications.length === 0 ? (
//           <p className="text-center text-gray-600">No new notifications</p>
//         ) : (
//           <ul className="space-y-6">
//             {notifications.map((notification) => (
//               <li
//                 key={notification._id}
//                 className="p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold">{notification.title}</h3>
//                   <p className="text-md">{notification.body}</p>
//                   <p className="text-sm text-gray-300">
//                     {new Date(notification.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Notifications;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Notification {
//   _id: string;
//   title: string;
//   body: string;
//   createdAt: string;
// }

// const Notifications = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);  // New state to handle errors

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/admin/notifications")
//       .then((response) => {
//         console.log("Response data:", response.data); // Debugging response
//         if (response.data && Array.isArray(response.data.notifications)) {
//           setNotifications(response.data.notifications);
//         } else {
//           setError("Notifications data is not available or formatted incorrectly.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to fetch notifications. Please try again later.");
//       })
//       .finally(() => {
//         setLoading(false);  // Stop the loading state
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading notifications...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Notifications</h2>
//       <div className="space-y-4">
//         {notifications.map((notification) => (
//           <div
//             key={notification._id}
//             className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
//           >
//             <h3 className="text-xl font-semibold text-blue-500">{notification.title}</h3>
//             <p className="mt-2 text-gray-700">{notification.body}</p>
//             <p className="mt-2 text-sm text-gray-500">
//               {new Date(notification.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notifications;













// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bell, Loader2, AlertCircle } from "lucide-react";

// interface Notification {
//   _id: string;
//   title: string;
//   body: string;
//   createdAt: string;
// }

// const Notifications = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1217/api/v1/admin/notifications")
//       .then((response) => {
//         console.log("Response data:", response.data);
//         if (response.data && Array.isArray(response.data.notifications)) {
//           setNotifications(response.data.notifications);
//         } else {
//           setError("Notifications data is not available or formatted incorrectly.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to fetch notifications. Please try again later.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-blue-600">
//         <Loader2 className="animate-spin w-12 h-12" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">
//         <AlertCircle className="mr-2" /> {error}
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
//       <h2 className="text-4xl font-bold text-center mb-6 flex items-center justify-center">
//         <Bell className="mr-2" /> Notifications
//       </h2>
//       <div className="space-y-6 max-w-3xl mx-auto">
//         {notifications.map((notification) => (
//           <div
//             key={notification._id}
//             className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
//           >
//             <h3 className="text-2xl font-bold text-blue-600">{notification.title}</h3>
//             <p className="mt-2 text-gray-700">{notification.body}</p>
//             <p className="mt-3 text-sm text-gray-500 italic">
//               {new Date(notification.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notifications;

















import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bell, Loader2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Notification {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1217/api/v1/admin/notifications")
      .then((response) => {
        console.log("Response data:", response.data);
        if (response.data && Array.isArray(response.data.notifications)) {
          setNotifications(response.data.notifications);
        } else {
          setError("Notifications data is not available or formatted incorrectly.");
        }
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
        setError("Failed to fetch notifications. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-blue-600">
        <Loader2 className="animate-spin w-12 h-12" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">
        <AlertCircle className="mr-2" /> {error}
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-6 flex items-center justify-center">
        <Bell className="mr-2" /> Notifications
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {notifications.map((notification) => (
          <div
            key={notification._id}
            className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-600">{notification.title}</h3>
            <p className="mt-2 text-gray-700">{notification.body}</p>
            <p className="mt-3 text-sm text-gray-500 italic">
              {new Date(notification.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/admin")}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Back to Admin Dashboard
        </button>
      </div>
    </div>
  );
};

export default Notifications;
