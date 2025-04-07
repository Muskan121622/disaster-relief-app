import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/authcontext";
import "./index.css"; 
import 'leaflet/dist/leaflet.css';

//import { requestNotificationPermission } from "./firebase"; // ✅ Import Firebase function

// ✅ Request notification permission when app loads
//requestNotificationPermission();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
