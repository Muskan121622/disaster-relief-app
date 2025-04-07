// import React from "react";
// import { useNavigate } from "react-router-dom";

// const PaymentMethod: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full min-h-screen bg-green-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="sticky top-0 bg-green-600 text-white w-full py-4 text-center shadow-md">
//         <h2 className="text-2xl font-bold">Select Payment Method</h2>
//       </div>
//       <h1 className="text-6xl text-lime-600"> we are all in this  together!!! :)</h1>

//       {/* Payment Options */}
//       <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md mt-6">
//         <h3 className="text-lg font-semibold mb-4">Choose a Payment Method</h3>
//         <div className="space-y-4">
//           <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
//             Credit/Debit Card
//           </button>
//           <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
//             UPI / Google Pay
//           </button>
//           <button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded">
//             Net Banking
//           </button>
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="mt-4">
//         <button
//           onClick={() => navigate(-1)}
//           className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentMethod;





import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const DonationCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [donor] = useState({
    name: "John Doe",
    email: "john@example.com",
    amount: 100,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
      billing_details: {
        name: donor.name,
        email: donor.email,
      },
    });

    if (error) {
      setMessage(error.message || "Payment failed");
    } else {
      setMessage("✅ Payment method created!");
      console.log("Payment Method:", paymentMethod.id);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">

        {/* LEFT - Donor Details */}
        <div className="md:w-1/2 w-full px-8 py-6 bg-gray-50 border-r border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 underline">Order Details</h2>
          <p className="text-gray-700 mb-2"><strong>Total Price:</strong> ${donor.amount}</p>
          <p className="text-gray-700 mb-2"><strong>Donor Name:</strong> {donor.name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {donor.email}</p>
        </div>

        {/* RIGHT - Stripe Form */}
        <div className="md:w-1/2 w-full px-8 py-6">
          <h2 className="text-xl font-semibold mb-4">Process your Payment!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border p-3 rounded-md">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
            <button
              type="submit"
              disabled={!stripe || loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
            >
              {loading ? "Processing..." : `Pay $${donor.amount}`}
            </button>
            {message && <p className="text-green-600 mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationCheckout;









