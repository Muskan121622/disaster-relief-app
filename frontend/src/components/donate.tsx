



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



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreateDonationPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [type, setType] = useState("money");
//   const [amount, setAmount] = useState<number>(0);
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);

//   useEffect(() => {
//     // Fetch user details to display (optional)
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:1217/api/v1/user/me", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setUser(res.data.user);
//       } catch (error) {
//         console.error("Error fetching user", error);
//       }
//     };
//     fetchUser();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:1217/api/v1/user/donate",
//         { type, amount, phone },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       alert("Donation created successfully!");
//       navigate("/dashboard");
//     } catch (err: any) {
//       console.error("Donation error:", err);
//       alert(err.response?.data?.error || "Failed to create donation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>

//         {user && (
//           <div className="mb-4 text-sm text-gray-600">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//           </div>
//         )}

//         <label className="block mb-2">Donation Type</label>
//         <select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         >
//           <option value="money">Money</option>
//           <option value="supplies">Supplies</option>
//           <option value="food">Food</option>
//         </select>

//         <label className="block mb-2">Amount</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(parseFloat(e.target.value))}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />

//         <label className="block mb-2">Phone Number</label>
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Submitting..." : "Submit Donation"}
//         </button>
//       </form>
//     </div>
//   );
// };

//  //export default CreateDonationPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreateDonationPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [type, setType] = useState("money");
//   const [amount, setAmount] = useState<number>(0);
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:1217/api/v1/user/me", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setUser(res.data.user);
//       } catch (error) {
//         console.error("Error fetching user", error);
//       }
//     };
//     fetchUser();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:1217/api/v1/user/donate",
//         { type, amount, phone },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       alert("Donation created successfully!");
//       navigate("/dashboard");
//     } catch (err: any) {
//       console.error("Donation error:", err);
//       alert(err.response?.data?.error || "Failed to create donation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>

//         {user && (
//           <div className="mb-4 text-sm text-gray-600">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//           </div>
//         )}

//         <label htmlFor="donationType" className="block mb-2 font-medium">Donation Type</label>
//         <select
//           id="donationType"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//           required
//         >
//           <option value="money">Money</option>
//           <option value="supplies">Supplies</option>
//           <option value="food">Food</option>
//         </select>

//         <label htmlFor="donationAmount" className="block mb-2 font-medium">Amount</label>
//         <input
//           id="donationAmount"
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(parseFloat(e.target.value))}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />

//         <label htmlFor="phoneNumber" className="block mb-2 font-medium">Phone Number</label>
//         <input
//           id="phoneNumber"
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Submitting..." : "Submit Donation"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateDonationPage;













// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { motion } from "framer-motion";

// // Replace with your own public key
// const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

// const CARD_OPTIONS = {
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#000",
//       fontWeight: 500,
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       "::placeholder": {
//         color: "#aab7c4",
//       },
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee",
//     },
//   },
// };

// const PaymentForm: React.FC<{ amount: number }> = ({ amount }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) return;

//     try {
//       const card = elements.getElement(CardElement);
//       if (!card) return;

//       const { data } = await axios.post("http://localhost:1217/api/v1/payment/create-intent", {
//         amount,
//       });

//       const { error, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card,
//         },
//       });

//       if (error) {
//         alert(error.message);
//         return;
//       }

//       if (paymentIntent.status === "succeeded") {
//         alert("Payment successful!");
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
//     >
//       <h3 className="text-lg font-semibold mb-4">Process your Payment!</h3>
//       <form onSubmit={handlePayment}>
//         <CardElement options={CARD_OPTIONS} />
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded"
//         >
//           {loading ? "Processing..." : "Pay"}
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// const CreateDonationPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [type, setType] = useState("money");
//   const [amount, setAmount] = useState<number>(0);
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:1217/api/v1/user/me", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setUser(res.data.user);
//       } catch (error) {
//         console.error("Error fetching user", error);
//       }
//     };
//     fetchUser();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (type === "money") return; // Stripe handles money flow
//     setLoading(true);

//     try {
//       await axios.post(
//         "http://localhost:1217/api/v1/user/donate",
//         { type, amount, phone },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       alert("Donation created successfully!");
//       navigate("/dashboard");
//     } catch (err: any) {
//       console.error("Donation error:", err);
//       alert(err.response?.data?.error || "Failed to create donation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 flex justify-center items-start p-6">
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md mr-4"
//         >
//           <h2 className="text-3xl font-bold text-indigo-700 mb-6">Make a Donation</h2>

//           {user && (
//             <div className="mb-4 text-sm text-gray-700">
//               <p><strong>Name:</strong> {user.name}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//             </div>
//           )}

//           <label htmlFor="donationType" className="block mb-2 font-semibold">Donation Type</label>
//           <select
//             id="donationType"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full p-2 border rounded mb-4"
//           >
//             <option value="money">Money</option>
//             <option value="supplies">Supplies</option>
//             <option value="food">Food</option>
//           </select>

//           <label htmlFor="amount" className="block mb-2 font-semibold">Amount</label>
//           <input
//             id="amount"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(parseFloat(e.target.value))}
//             className="w-full p-2 border rounded mb-4"
//             required
//           />

//           <label htmlFor="phone" className="block mb-2 font-semibold">Phone Number</label>
//           <input
//             id="phone"
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full p-2 border rounded mb-4"
//             required
//           />

//           {type !== "money" && (
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//             >
//               {loading ? "Submitting..." : "Submit Donation"}
//             </button>
//           )}
//         </motion.form>

//         {type === "money" && <PaymentForm amount={amount} />}
//       </div>
//     </Elements>
//   );
// };

// export default CreateDonationPage;







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("your_stripe_public_key_here");

// const PaymentForm: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement!,
//     });

//     if (error) {
//       console.error("Stripe error:", error);
//     } else {
//       console.log("Payment method:", paymentMethod);
//       alert("Payment method created successfully!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-xs">
//       <h3 className="text-lg font-bold mb-4">Process your Payment!</h3>
//       <CardElement className="p-2 border rounded mb-4" />
//       <button
//         type="submit"
//         className="w-full bg-indigo-500 text-white rounded py-2 hover:bg-indigo-600"
//       >
//         Pay
//       </button>
//     </form>
//   );
// };

// const CreateDonationPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [type, setType] = useState("money");
//   const [amount, setAmount] = useState<number>(0);
//   const [mention, setMention] = useState("");
//   const [phone, setPhone] = useState("");
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [disasters, setDisasters] = useState<{ _id: string; title: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1217/api/v1/user/me", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((res) => setUser(res.data.user))
//       .catch((err) => console.error("Error fetching user", err));
//   }, []);

//   useEffect(() => {
//     if (type === "food") {
//       axios
//         .get("http://localhost:1217/api/v1/disasters/active")
//         .then((res) => setDisasters(res.data.disasters))
//         .catch((err) => console.error("Error fetching disasters", err));
//     }
//   }, [type]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const payload =
//         type === "supplies"
//           ? { type, phone, mention }
//           : type === "food"
//           ? { type, phone }
//           : { type, amount, phone };

//       await axios.post("http://localhost:1217/api/v1/user/donate", payload, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });

//       alert("Donation submitted!");
//       navigate("/dashboard");
//     } catch (err: any) {
//       alert(err.response?.data?.error || "Failed to submit donation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row items-start gap-6">
//       {type === "money" && (
//         <div className="w-full md:w-1/3">
//           <Elements stripe={stripePromise}>
//             <PaymentForm />
//           </Elements>
//         </div>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-full md:w-2/3"
//       >
//         <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>

//         {user && (
//           <div className="mb-4 text-sm text-gray-600">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//           </div>
//         )}

//         <label htmlFor="type" className="block mb-2 font-medium">Donation Type</label>
//         <select
//           id="type"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         >
//           <option value="money">Money</option>
//           <option value="supplies">Supplies</option>
//           <option value="food">Food</option>
//         </select>

//         {type === "supplies" && (
//           <>
//             <label htmlFor="mention" className="block mb-2 font-medium">Mention Supplies</label>
//             <input
//               id="mention"
//               type="text"
//               value={mention}
//               onChange={(e) => setMention(e.target.value)}
//               className="w-full p-2 border rounded mb-4"
//               required
//             />
//           </>
//         )}

//         {type === "food" && (
//           <>
//             <label className="block mb-2 font-medium">Select Disaster Location</label>
//             <select className="w-full p-2 border rounded mb-4">
//               {disasters.map((disaster) => (
//                 <option key={disaster._id} value={disaster._id}>
//                   {disaster.title}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}

//         {type === "money" && (
//           <>
//             <label htmlFor="amount" className="block mb-2 font-medium">Amount</label>
//             <input
//               id="amount"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(parseFloat(e.target.value))}
//               className="w-full p-2 border rounded mb-4"
//               required
//             />
//           </>
//         )}

//         <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
//         <input
//           id="phone"
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Submitting..." : "Submit Donation"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateDonationPage;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("your_stripe_public_key_here");

// const PaymentForm: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement!,
//     });

//     if (error) {
//       console.error("Stripe error:", error);
//     } else {
//       console.log("Payment method:", paymentMethod);
//       alert("Payment method created successfully!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-xs">
//       <h3 className="text-lg font-bold mb-4">Process your Payment!</h3>
//       <CardElement className="p-2 border rounded mb-4" />
//       <button
//         type="submit"
//         className="w-full bg-indigo-500 text-white rounded py-2 hover:bg-indigo-600"
//       >
//         Pay
//       </button>
//     </form>
//   );
// };

// const CreateDonationPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [type, setType] = useState("money");
//   const [amount, setAmount] = useState<number>(0);
//   const [mention, setMention] = useState("");
//   const [phone, setPhone] = useState("");
//   const [disasterId, setDisasterId] = useState("");
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [disasters, setDisasters] = useState<{ _id: string; title: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1217/api/v1/user/me", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((res) => setUser(res.data.user))
//       .catch((err) => console.error("Error fetching user", err));
//   }, []);

//   useEffect(() => {
//     if (type === "food") {
//       axios
//         .get("http://localhost:1217/api/v1/disasters/active")
//         .then((res) => setDisasters(res.data.disasters))
//         .catch((err) => console.error("Error fetching disasters", err));
//     }
//   }, [type]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let payload: any = { type, phone };

//       if (type === "money") payload.amount = amount;
//       if (type === "supplies") payload.mention = mention;
//       if (type === "food" && disasterId) payload.disasterId = disasterId;

//       await axios.post("http://localhost:1217/api/v1/user/donate", payload, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });

//       alert("Donation submitted!");
//       navigate("/dashboard");
//     } catch (err: any) {
//       alert(err.response?.data?.error || "Failed to submit donation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
//       {type === "money" && (
//         <div className="w-full md:w-1/3">
//           <Elements stripe={stripePromise}>
//             <PaymentForm />
//           </Elements>
//         </div>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-full md:w-2/3"
//       >
//         <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>

//         {user && (
//           <div className="mb-4 text-sm text-gray-600">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//           </div>
//         )}

//         <label htmlFor="type" className="block mb-2 font-medium">Donation Type</label>
//         <select
//           id="type"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         >
//           <option value="money">Money</option>
//           <option value="supplies">Supplies</option>
//           <option value="food">Food</option>
//         </select>

//         {type === "supplies" && (
//           <>
//             <label htmlFor="mention" className="block mb-2 font-medium">Mention Supplies</label>
//             <input
//               id="mention"
//               type="text"
//               value={mention}
//               onChange={(e) => setMention(e.target.value)}
//               className="w-full p-2 border rounded mb-4"
//               required
//             />
//           </>
//         )}

//         {type === "food" && (
//           <>
//             <label htmlFor="disaster" className="block mb-2 font-medium">Select Disaster Location</label>
//             <select
//               id="disaster"
//               value={disasterId}
//               onChange={(e) => setDisasterId(e.target.value)}
//               className="w-full p-2 border rounded mb-4"
//               required
//             >
//               <option value="">Select a disaster</option>
//               {disasters.map((disaster) => (
//                 <option key={disaster._id} value={disaster._id}>
//                   {disaster.title}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}

//         {type === "money" && (
//           <>
//             <label htmlFor="amount" className="block mb-2 font-medium">Amount</label>
//             <input
//               id="amount"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(parseFloat(e.target.value))}
//               className="w-full p-2 border rounded mb-4"
//               required
//             />
//           </>
//         )}

//         <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
//         <input
//           id="phone"
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Submitting..." : "Submit Donation"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateDonationPage;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("your_stripe_public_key_here");

// const PaymentForm: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement!,
//     });

//     if (error) {
//       console.error("Stripe error:", error);
//     } else {
//       console.log("Payment method:", paymentMethod);
//       alert("Payment method created successfully!");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md border border-indigo-100"
//     >
//       <h3 className="text-xl font-semibold text-indigo-700 mb-4">💳 Secure Payment</h3>
//       <CardElement className="p-3 border border-gray-300 rounded-lg mb-4 bg-gray-50" />
//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition"
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// };

// const CreateDonationPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [type, setType] = useState("money");
//   const [amount, setAmount] = useState<number>(0);
//   const [mention, setMention] = useState("");
//   const [phone, setPhone] = useState("");
//   const [disasterId, setDisasterId] = useState("");
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [disasters, setDisasters] = useState<{ _id: string; title: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1217/api/v1/user/me", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((res) => setUser(res.data.user))
//       .catch((err) => console.error("Error fetching user", err));
//   }, []);

//   useEffect(() => {
//     if (type === "food") {
//       axios
//         .get("http://localhost:1217/api/v1/disasters/active")
//         .then((res) => setDisasters(res.data.disasters))
//         .catch((err) => console.error("Error fetching disasters", err));
//     }
//   }, [type]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let payload: any = { type, phone };

//       if (type === "money") payload.amount = amount;
//       if (type === "supplies") payload.mention = mention;
//       if (type === "food" && disasterId) payload.disasterId = disasterId;

//       await axios.post("http://localhost:1217/api/v1/user/donate", payload, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });

//       alert("Donation submitted!");
//       navigate("/dashboard");
//     } catch (err: any) {
//       alert(err.response?.data?.error || "Failed to submit donation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6 flex flex-col md:flex-row gap-8 justify-center items-start">
//       {type === "money" && (
//         <div className="w-full md:w-1/3 flex justify-center">
//           <Elements stripe={stripePromise}>
//             <PaymentForm />
//           </Elements>
//         </div>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-2/3 border border-gray-100"
//       >
//         <h2 className="text-3xl font-bold text-indigo-600 mb-6">🎁 Make a Donation</h2>

//         {user && (
//           <div className="mb-4 text-gray-600">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//           </div>
//         )}

//         <label htmlFor="type" className="block font-medium mb-1 text-gray-700">Donation Type</label>
//         <select
//           id="type"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full p-2 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
//         >
//           <option value="money">Money</option>
//           <option value="supplies">Supplies</option>
//           <option value="food">Food</option>
//         </select>

//         {type === "supplies" && (
//           <>
//             <label htmlFor="mention" className="block font-medium mb-1 text-gray-700">Mention Supplies</label>
//             <input
//               id="mention"
//               type="text"
//               value={mention}
//               onChange={(e) => setMention(e.target.value)}
//               className="w-full p-2 border rounded-lg mb-4 focus:ring-purple-500 focus:border-purple-500"
//               required
//             />
//           </>
//         )}

//         {type === "food" && (
//           <>
//             <label htmlFor="disaster" className="block font-medium mb-1 text-gray-700">Select Disaster Location</label>
//             <select
//               id="disaster"
//               value={disasterId}
//               onChange={(e) => setDisasterId(e.target.value)}
//               className="w-full p-2 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             >
//               <option value="">Select a disaster</option>
//               {disasters.map((disaster) => (
//                 <option key={disaster._id} value={disaster._id}>
//                   {disaster.title}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}

//         {type === "money" && (
//           <>
//             <label htmlFor="amount" className="block font-medium mb-1 text-gray-700">Amount</label>
//             <input
//               id="amount"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(parseFloat(e.target.value))}
//               className="w-full p-2 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </>
//         )}

//         <label htmlFor="phone" className="block font-medium mb-1 text-gray-700">Phone Number</label>
//         <input
//           id="phone"
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full p-2 border rounded-lg mb-6 focus:ring-indigo-500 focus:border-indigo-500"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition"
//         >
//           {loading ? "Submitting..." : "Submit Donation"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateDonationPage;













// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("your_stripe_public_key_here");

// const PaymentForm: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement!,
//     });

//     if (error) {
//       console.error("Stripe error:", error);
//     } else {
//       console.log("Payment method:", paymentMethod);
//       alert("Payment method created successfully!");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm border border-indigo-100"
//     >
//       <h3 className="text-xl font-semibold text-indigo-700 mb-4">💳 Secure Payment</h3>
//       <CardElement className="p-3 border border-gray-300 rounded-lg mb-4 bg-gray-50 h-12" />
//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition"
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// };

// const CreateDonationPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [type, setType] = useState("money");
//   const [amount, setAmount] = useState<number>(0);
//   const [mention, setMention] = useState("");
//   const [phone, setPhone] = useState("");
//   const [disasterId, setDisasterId] = useState("");
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [disasters, setDisasters] = useState<{ _id: string; title: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1217/api/v1/user/me", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((res) => setUser(res.data.user))
//       .catch((err) => console.error("Error fetching user", err));
//   }, []);

//   useEffect(() => {
//     if (type === "food") {
//       axios
//         .get("http://localhost:1217/api/v1/disasters/active")
//         .then((res) => setDisasters(res.data.disasters))
//         .catch((err) => console.error("Error fetching disasters", err));
//     }
//   }, [type]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const payload =
//         type === "supplies"
//           ? { type, phone, mention }
//           : type === "food"
//           ? { type, phone, disasterId }
//           : { type, amount, phone };

//       await axios.post("http://localhost:1217/api/v1/user/donate", payload, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });

//       alert("Donation submitted!");
//       navigate("/dashboard");
//     } catch (err: any) {
//       alert(err.response?.data?.error || "Failed to submit donation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6 flex flex-col md:flex-row items-start gap-8">
//       {type === "money" && (
//         <div className="w-full md:w-[300px]">
//           <Elements stripe={stripePromise}>
//             <PaymentForm />
//           </Elements>
//         </div>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-2/3 border border-indigo-100"
//       >
//         <h2 className="text-2xl font-bold text-indigo-700 mb-6">🎁 Make a Donation</h2>

//         {user && (
//           <div className="mb-4 text-sm text-gray-600">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//           </div>
//         )}

//         <label htmlFor="type" className="block mb-2 font-medium text-indigo-800">Donation Type</label>
//         <select
//           id="type"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
//         >
//           <option value="money">Money</option>
//           <option value="supplies">Supplies</option>
//           <option value="food">Food</option>
//         </select>

//         {type === "supplies" && (
//           <>
//             <label htmlFor="mention" className="block mb-2 font-medium text-indigo-800">Mention Supplies</label>
//             <input
//               id="mention"
//               type="text"
//               value={mention}
//               onChange={(e) => setMention(e.target.value)}
//               className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </>
//         )}

//         {type === "food" && (
//           <>
//             <label htmlFor="disaster" className="block mb-2 font-medium text-indigo-800">Select Disaster Location</label>
//             <select
//               id="disaster"
//               value={disasterId}
//               onChange={(e) => setDisasterId(e.target.value)}
//               className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
//               title="Disaster Location"
//             >
//               <option value="">-- Choose Disaster --</option>
//               {disasters.map((disaster) => (
//                 <option key={disaster._id} value={disaster._id}>
//                   {disaster.title}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}

//         {type === "money" && (
//           <>
//             <label htmlFor="amount" className="block mb-2 font-medium text-indigo-800">Amount</label>
//             <input
//               id="amount"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(parseFloat(e.target.value))}
//               className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </>
//         )}

//         <label htmlFor="phone" className="block mb-2 font-medium text-indigo-800">Phone Number</label>
//         <input
//           id="phone"
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full h-12 p-3 border rounded-lg mb-6 focus:ring-indigo-500 focus:border-indigo-500"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
//         >
//           {loading ? "Submitting..." : "Submit Donation"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateDonationPage;



















import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_stripe_public_key_here");

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });

    if (error) {
      console.error("Stripe error:", error);
    } else {
      console.log("Payment method:", paymentMethod);
      alert("Payment method created successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm border border-indigo-100"
    >
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">💳 Secure Payment</h3>
      <CardElement className="p-3 border border-gray-300 rounded-lg mb-4 bg-gray-50 h-12" />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition"
      >
        Pay Now
      </button>
    </form>
  );
};

const CreateDonationPage: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("money");
  const [amount, setAmount] = useState<number>(0);
  const [mention, setMention] = useState("");
  const [phone, setPhone] = useState("");
  const [disasterId, setDisasterId] = useState("");
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [disasters, setDisasters] = useState<{ _id: string; title: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1217/api/v1/user/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setUser(res.data.user))
      .catch((err) => console.error("Error fetching user", err));
  }, []);

  useEffect(() => {
    if (type === "food") {
      axios
        .get("http://localhost:1217/api/v1/disasters/active")
        .then((res) => setDisasters(res.data.disasters))
        .catch((err) => console.error("Error fetching disasters", err));
    }
  }, [type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload =
        type === "supplies"
          ? { type, phone, mention }
          : type === "food"
          ? { type, phone, disasterId }
          : { type, amount, phone };

      await axios.post("http://localhost:1217/api/v1/user/donate", payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      alert("Donation submitted!");
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to submit donation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6 flex flex-col md:flex-row items-start gap-8">
      {type === "money" && (
        <div className="w-full md:w-[300px] mb-6 md:mb-0 md:mr-8">
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-2/3 border border-indigo-100"
      >
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">🏱 Make a Donation</h2>

        {user && (
          <div className="mb-4 text-sm text-gray-600">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}

        <label htmlFor="type" className="block mb-2 font-medium text-indigo-800">Donation Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="money">Money</option>
          <option value="supplies">Supplies</option>
          <option value="food">Food</option>
        </select>

        {type === "supplies" && (
          <>
            <label htmlFor="mention" className="block mb-2 font-medium text-indigo-800">Mention Supplies</label>
            <input
              id="mention"
              type="text"
              value={mention}
              onChange={(e) => setMention(e.target.value)}
              className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </>
        )}

        {type === "food" && (
          <>
            <label htmlFor="disaster" className="block mb-2 font-medium text-indigo-800">Select Disaster Location</label>
            <select
              id="disaster"
              value={disasterId}
              onChange={(e) => setDisasterId(e.target.value)}
              className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
              title="Disaster Location"
            >
              <option value="">-- Choose Disaster --</option>
              {disasters.map((disaster) => (
                <option key={disaster._id} value={disaster._id}>
                  {disaster.title}
                </option>
              ))}
            </select>
          </>
        )}

        {type === "money" && (
          <>
            <label htmlFor="amount" className="block mb-2 font-medium text-indigo-800">Amount</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full h-12 p-3 border rounded-lg mb-4 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </>
        )}

        <label htmlFor="phone" className="block mb-2 font-medium text-indigo-800">Phone Number</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full h-12 p-3 border rounded-lg mb-6 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit Donation"}
        </button>
      </form>
    </div>
  );
};

export default CreateDonationPage;