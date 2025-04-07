// import { useEffect, useState } from "react";
// import axios from "axios";

// const Donations = () => {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5183/api/donations").then((res) => setDonations(res.data));
//   }, []);

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Donations</h2>
//       {donations.length === 0 ? (
//         <p>No donations yet.</p>
//       ) : (
//         <ul className="space-y-2">
//           {donations.map((donation) => (
//             <li key={donation.id} className="border p-3 rounded shadow-md">
//               <p><strong>Donor:</strong> {donation.donor.name} ({donation.donor.email})</p>
//               <p><strong>Type:</strong> {donation.type}</p>
//               <p><strong>Amount:</strong> {donation.amount}</p>
//               <p><strong>Status:</strong> {donation.status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Donations;












// import { useEffect, useState } from "react";
// import axios from "axios";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   _id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const Donations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]); // ✅ Fix: Define type explicitly

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/user/donations")
//       .then((res) => setDonations(res.data))
//       .catch((error) => console.error("Error fetching donations:", error));
//   }, []);

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Donations</h2>
//       {donations.length === 0 ? (
//         <p>No donations yet.</p>
//       ) : (
//         <ul className="space-y-2">
//           {donations.map((donation) => (
//             <li key={donation._id} className="border p-3 rounded shadow-md">
//               <p><strong>Donor:</strong> {donation.donor.name} ({donation.donor.email})</p>
//               <p><strong>Type:</strong> {donation.type}</p>
//               <p><strong>Amount:</strong> {donation.amount}</p>
//               <p><strong>Status:</strong> {donation.status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Donations;

















// import { useEffect, useState } from "react";
// import axios from "axios";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   _id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const Donations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/user/donations")
//       .then((res) => setDonations(res.data))
//       .catch((error) => console.error("Error fetching donations:", error));
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
//       <h2 className="text-3xl font-extrabold text-center mb-6">Donations</h2>
//       {donations.length === 0 ? (
//         <p className="text-center text-lg">No donations yet.</p>
//       ) : (
//         <div className="max-w-4xl mx-auto">
//           {donations.map((donation) => (
//             <div key={donation._id} className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6 border-l-8 border-green-500">
//               <p className="text-xl font-bold text-green-700">{donation.donor.name}</p>
//               <p className="text-gray-700 font-semibold">Email: {donation.donor.email}</p>
//               <p className="text-gray-700 font-semibold">Type: {donation.type}</p>
//               <p className="text-gray-700 font-semibold">Amount: ${donation.amount}</p>
//               <p className={`text-lg font-semibold ${donation.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}`}>Status: {donation.status}</p>
//             </div>
//           ))}







          
//         </div>
//       )}







      
//     </div>
//   );
// };

// export default Donations;




// import { useEffect, useState } from "react";
// import axios from "axios";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   _id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const Donations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/user/donations")
//       .then((res) => setDonations(res.data))
//       .catch((error) => console.error("Error fetching donations:", error));
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
//       <h2 className="text-3xl font-extrabold text-center mb-6">Donations</h2>
//       {donations.length === 0 ? (
//         <p className="text-center text-lg">No donations yet.</p>
//       ) : (
//         <div className="max-w-4xl mx-auto">
//           {donations.map((donation) => (
//             <div key={donation._id} className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6 border-l-8 border-green-500">
//               <p className="text-xl font-bold text-green-700">{donation.donor.name}</p>
//               <p className="text-gray-700 font-semibold">Email: {donation.donor.email}</p>
//               <p className="text-gray-700 font-semibold">Type: {donation.type}</p>
//               <p className="text-gray-700 font-semibold">Amount: ${donation.amount}</p>
//               <p className={`text-lg font-semibold ${donation.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}`}>Status: {donation.status}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="text-center mt-6">
//         <a href="/dashboard" className="bg-blue-600 px-6 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition">
//           Back to Dashboard
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Donations;












import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
}

interface Donation {
  _id: string;
  donor: User;
  type: string;
  amount: number;
  status: string;
}

const Donations = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:1217/api/v1/user/donations", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => setDonations(res.data))
    .catch((error) => console.error("Error fetching donations:", error));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <h2 className="text-3xl font-extrabold text-center mb-6">Donations</h2>
      {donations.length === 0 ? (
        <p className="text-center text-lg">No donations yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {donations.map((donation) => (
            <div key={donation._id} className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6 border-l-8 border-green-500">
              <p className="text-xl font-bold text-green-700">{donation.donor.name}</p>
              <p className="text-gray-700 font-semibold">Email: {donation.donor.email}</p>
              <p className="text-gray-700 font-semibold">Type: {donation.type}</p>
              <p className="text-gray-700 font-semibold">Amount: ${donation.amount}</p>
              <p className={`text-lg font-semibold ${donation.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}`}>Status: {donation.status}</p>
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-6">
        <button onClick={() => navigate("/dashboard")} className="bg-blue-600 px-6 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Donations;











// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   _id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const Donations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios
//       .get("http://localhost:1217/api/v1/user/donations", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setDonations(res.data))
//       .catch((error) => console.error("Error fetching donations:", error));
//   }, []);

//   const handleDonate = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:1217/api/v1/user/donations/",
//         { amount: 200, type: "money" },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
      
//       const { id } = response.data.donation;
//       const stripeSession = await axios.post(
//         "http://localhost:1217/api/v1/stripe/create-checkout-session",
//         { donationId: id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
      
//       window.location.href = stripeSession.data.url;
//     } catch (error) {
//       console.error("Error processing donation:", error);
//     }
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
//       <h2 className="text-3xl font-extrabold text-center mb-6">Donations</h2>
//       <button
//         onClick={handleDonate}
//         className="bg-green-600 px-6 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-green-700 transition"
//       >
//         Donate Now
//       </button>
//     </div>
//   );
// };

// export default Donations;
















// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   _id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const CheckoutForm = ({ donation }: { donation: Donation }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!stripe || !elements) return;

//     try {
//       const token = localStorage.getItem("token");

//       // Request a payment intent from the backend
//       const response = await axios.post(
//         "http://localhost:1217/api/v1/stripe/create-payment-intent",
//         { donationId: donation._id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const { clientSecret } = response.data;

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement)!,
//           billing_details: {
//             name: donation.donor.name,
//             email: donation.donor.email,
//           },
//         },
//       });

//       if (result.error) {
//         setError(result.error.message || "Payment failed. Try again.");
//       } else if (result.paymentIntent?.status === "succeeded") {
//         alert("Payment successful! Thank you for your donation.");
//       }
//     } catch (err) {
//       setError("An error occurred while processing your payment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md text-gray-900">
//       <h3 className="text-xl font-bold mb-4">Complete Your Donation</h3>

//       <div className="mb-4">
//         <label className="block font-semibold">Name:</label>
//         <input
//           type="text"
//           value={donation.donor.name}
//           readOnly
//           className="w-full border p-2 rounded-lg bg-gray-100"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-semibold">Email:</label>
//         <input
//           type="email"
//           value={donation.donor.email}
//           readOnly
//           className="w-full border p-2 rounded-lg bg-gray-100"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-semibold">Amount:</label>
//         <input
//           type="text"
//           value={`$${donation.amount}`}
//           readOnly
//           className="w-full border p-2 rounded-lg bg-gray-100"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-semibold">Card Details:</label>
//         <CardElement className="p-3 border rounded-lg" />
//       </div>

//       {error && <p className="text-red-500">{error}</p>}

//       <button
//         type="submit"
//         className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition"
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// };

// const Donations = () => {
//   const [donation, setDonation] = useState<Donation | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     axios
//       .get("http://localhost:1217/api/v1/user/donations", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setDonation(res.data.donation))
//       .catch((error) => console.error("Error fetching donation:", error));
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
//       <h2 className="text-3xl font-extrabold text-center mb-6">Donate Now</h2>

//       <div className="max-w-2xl mx-auto">
//         {donation ? (
//           <Elements stripe={stripePromise}>
//             <CheckoutForm donation={donation} />
//           </Elements>
//         ) : (
//           <p className="text-center text-lg">Loading donation details...</p>
//         )}
//       </div>

//       <div className="text-center mt-6">
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-blue-600 px-6 py-3 rounded-xl text-white text-lg font-bold shadow-lg hover:bg-blue-700 transition"
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Donations;


















// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// const DonationForm = ({ donation }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
//     try {
//       const { data } = await axios.post("http://localhost:1217/api/v1/payments", {
//         amount: donation.amount,
//         donationId: donation.id,
//       });

//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (result.error) {
//         console.error(result.error.message);
//       } else {
//         alert("Payment Successful!");
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handlePayment} className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Complete Your Donation</h2>
//       <CardElement className="p-4 border rounded" />
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//       >
//         {loading ? "Processing..." : `Pay $${donation.amount}`}
//       </button>
//     </form>
//   );
// };

// const DonationPage = () => {
//   const [donation, setDonation] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/user/donations")
//       .then((res) => setDonation(res.data.donation))
//       .catch((err) => console.error("Error fetching donation data", err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (!donation) return <p>No donation found.</p>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
//         {/* Left Side - Donor Info */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Donor Information</h2>
//           <p><strong>Name:</strong> {donation.donor.name}</p>
//           <p><strong>Email:</strong> {donation.donor.email}</p>
//           <p><strong>Amount:</strong> ${donation.amount}</p>
//         </div>

//         {/* Right Side - Payment Form */}
//         <Elements stripe={stripePromise}>
//           <DonationForm donation={donation} />
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default DonationPage;
















// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// // Define Types
// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const DonationForm: React.FC<{ donation: Donation }> = ({ donation }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
//     try {
//       const { data } = await axios.post("http://localhost:1217/api/v1/payments", {
//         amount: donation.amount,
//         donationId: donation.id,
//       });

//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement)!,
//         },
//       });

//       if (result.error) {
//         console.error(result.error.message);
//       } else {
//         alert("Payment Successful!");
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handlePayment} className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Complete Your Donation</h2>
//       <CardElement className="p-4 border rounded" />
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//       >
//         {loading ? "Processing..." : `Pay $${donation.amount}`}
//       </button>
//     </form>
//   );
// };

// const DonationPage = () => {
//   const [donation, setDonation] = useState<Donation | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/user/donations")
//       .then((res) => setDonation(res.data.donation))
//       .catch((err) => console.error("Error fetching donation data", err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (!donation) return <p>No donation found.</p>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
//         {/* Left Side - Donor Info */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Donor Information</h2>
//           <p><strong>Name:</strong> {donation.donor.name}</p>
//           <p><strong>Email:</strong> {donation.donor.email}</p>
//           <p><strong>Amount:</strong> ${donation.amount}</p>
//         </div>

//         {/* Right Side - Payment Form */}
//         <Elements stripe={stripePromise}>
//           <DonationForm donation={donation} />
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default DonationPage;





















// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// // Define Types
// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const DonationForm: React.FC<{ donation: Donation }> = ({ donation }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
//     try {
//       const { data } = await axios.post("http://localhost:1217/api/v1/payments", {
//         amount: donation.amount,
//         donationId: donation.id,
//       });

//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement)!,
//         },
//       });

//       if (result.error) {
//         console.error(result.error.message);
//       } else {
//         alert("Payment Successful!");
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handlePayment} className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Complete Your Donation</h2>
//       <CardElement className="p-4 border rounded" />
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//       >
//         {loading ? "Processing..." : `Pay $${donation.amount}`}
//       </button>
//     </form>
//   );
// };

// const DonationPage = () => {
//   const [donation, setDonation] = useState<Donation | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/user/donations")
//       .then((res) => setDonation(res.data.donation))
//       .catch((err) => console.error("Error fetching donation data", err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (!donation) return <p>No donation found.</p>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
//         {/* Left Side - Donor Info */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Donor Information</h2>
//           <p><strong>Name:</strong> {donation.donor.name}</p>
//           <p><strong>Email:</strong> {donation.donor.email}</p>
//           <p><strong>Amount:</strong> ${donation.amount}</p>
//         </div>

//         {/* Right Side - Payment Form */}
//         <Elements stripe={stripePromise}>
//           <DonationForm donation={donation} />
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default DonationPage;
























// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Button } from "@/components/ui/button"; // Assuming you're using a UI library

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface Donation {
//   _id: string;
//   donor: User;
//   type: string;
//   amount: number;
//   status: string;
// }

// const Donations = () => {
//   const [donations, setDonations] = useState<Donation[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:1217/api/v1/user/donations")
//       .then((res) => setDonations(res.data))
//       .catch((error) => console.error("Error fetching donations:", error));
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
//       <h2 className="text-3xl font-extrabold text-center mb-6">Donations</h2>

//       {donations.length === 0 ? (
//         <p className="text-center text-lg">No donations yet.</p>
//       ) : (
//         <div className="max-w-4xl mx-auto">
//           {donations.map((donation) => (
//             <div key={donation._id} className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6 border-l-8 border-green-500">
//               <p className="text-xl font-bold text-green-700">{donation.donor.name}</p>
//               <p className="text-gray-700 font-semibold">Email: {donation.donor.email}</p>
//               <p className="text-gray-700 font-semibold">Type: {donation.type}</p>
//               <p className="text-gray-700 font-semibold">Amount: ${donation.amount}</p>
//               <p className={`text-lg font-semibold ${donation.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}`}>
//                 Status: {donation.status}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Back to Dashboard Button */}
//       <div className="flex justify-center mt-8">
//         <Button onClick={() => navigate("/dashboard")} className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-lg">
//           Back to Dashboard
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Donations;
