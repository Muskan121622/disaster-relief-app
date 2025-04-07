import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/authcontext"; // Use the custom hook
import Login from "./components/login";
import { useEffect,useState } from "react";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import { JSX } from "react";
import DisasterDetails from "./components/disasterdetails";
//import { getFirebaseToken } from "./firebase";
import AdminLogin from "./admin/adminlogin";
import AdminSignup from "./admin/adminsignup";

//import { requestNotificationPermission } from "./firebase";
import { requestNotificationPermission, onMessageListener } from "./firebase";
import { MessagePayload } from "firebase/messaging"; 
//import Notifications from "./components/notification";
import ReportDisaster from "./components/reportdisaster";
import Volunteer from "./components/volunteer";
import VolunteerList from "./components/volunteerlist";
import Map from "./map/disastermap"
import DisasterReported from "./components/disasterreported";
import Donate from "./components/donate";
import PaymentMethod from "./components/payement";
import Home from "./components/home";
import { Toaster } from "react-hot-toast";
import DisasterRouteMap from "./components/disasterroute";

import AdminDash from "./admin/admindashboard";
import AdminHome from "./admin/admininhome";
import ManageDonations from "./admin/managedonations";
import ManageUsers from "./admin/manageuser";
import Notifications from "./admin/notifications";

import { ReactNode } from "react";
import Donations from "./components/donation";
import AdminLogout from "./admin/adminlogout";
import TestLocationMap from "./components/testlocation";
// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { user } = useAuth(); // Get user from AuthContext
//   return user ? children : <Navigate to="/login" />; // Check if user exists
// };


const ProtectedRoute = ({ children, redirectPath }: { children: ReactNode; redirectPath: string }) => {
  const { user } = useAuth(); // Get user from AuthContext
  return user ? <>{children}</> : <Navigate to={redirectPath} replace />;
};





function App() {
  const [firebaseToken, setFirebaseToken] = useState<string | null>(null);

  useEffect(() => {
    // ✅ Get Firebase Token when App Loads
    requestNotificationPermission().then((token) => {
      if (token) {
        console.log("Firebase Token:", token);
        setFirebaseToken(token);
        sendTokenToServer(token);
      }
    });

    // ✅ Listen for incoming notifications
    onMessageListener()
      .then((payload: MessagePayload) => {
        alert(`New Notification: ${payload.notification?.title}`);
      })
      .catch((err) => {
        console.error("Error receiving notification:", err);
      });
  }, []);

  // ✅ Function to send token to backend
  const sendTokenToServer = async (token: string) => {
    try {
      await fetch("https://disaster-relief-app-3.onrender.com/api/v1/notifications/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      console.log("Token sent to backend");
    } catch (error) {
      console.error("Error sending token:", error);
    }
  };
  return (

    <Router>


<Toaster position="top-right" reverseOrder={false} />
      <Routes>
          {/* ✅ Redirect "/" to "/dashboard" if logged in */}
          {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}

<Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* ✅ Added explicit /dashboard route */}
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        <Route path="/dashboard" element={<ProtectedRoute redirectPath="/login"><Dashboard /></ProtectedRoute>} />

        {/* ✅ Redirect "/" to /dashboard if logged in */}
        {/* <Route path="/" element={<Navigate to="/dashboard" />} />   */}




         {/* admin route */}
         <Route path="/admin/login" element={<AdminLogin />} />
         <Route path="/admin/logout" element={<AdminLogout />} />
  <Route path="/admin/signup" element={<AdminSignup />} />
         {/* //<Route path="/admin" element={<AdminDashboard />}> */}
        {/* ✅ Protected Admin Routes (Redirect to Admin Login if Not Logged In) */}
  <Route path="/admin" element={<ProtectedRoute redirectPath="/admin/login"><AdminDash /></ProtectedRoute>} />
  <Route path="/admin/home" element={<ProtectedRoute redirectPath="/admin/login"><AdminHome /></ProtectedRoute>} />
  <Route path="/admin/donations" element={<ProtectedRoute redirectPath="/admin/login"><ManageDonations /></ProtectedRoute>} />
  <Route path="/admin/users" element={<ProtectedRoute redirectPath="/admin/login"><ManageUsers /></ProtectedRoute>} />
  <Route path="/admin/notifications" element={<ProtectedRoute redirectPath="/admin/login"><Notifications /></ProtectedRoute>} />
      {/* <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/donation" element={<Donations />} />
      <Route path="/admin-signup" element={<AdminSignup />} /> */}
      <Route path="/payment-method" element={<PaymentMethod />} />
      <Route path="/report-disaster" element={<ReportDisaster/>} />
      <Route path="/disaster/:id" element={<DisasterDetails />} />
      <Route path="/volunteer-registration" element={<Volunteer/>} />
      
      <Route path="/disaster-route-map" element={<DisasterRouteMap/>} />
      <Route path="/volunteers" element={<VolunteerList/>} />
      <Route path="/reported-disasters" element={<DisasterReported />} />
      <Route path="/disasters" element={<DisasterReported />} />
        
      <Route path="/donate" element={<Donate />} />
      <Route path="/donation" element={<Donations />} />
      <Route path="/map" element={<Map />} />
      <Route path="/test-location" element={<TestLocationMap />} />
      </Routes>


     
    </Router>
  );
}

export default App;


